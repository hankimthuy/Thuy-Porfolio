'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  LuChevronRight,
  LuCircleHelp,
  LuFolderKanban,
  LuLayers,
  LuMail,
  LuMenu,
  LuTrophy,
  LuUser,
  LuX,
} from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LOCALE_SWITCHER_ENABLED } from '@/lib/i18n-config';
import { HEADER_HEIGHT_PX, SECTION_CONTAINER } from '@/lib/layout';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const menuItemConfig = [
  { key: 'about' as const, id: 'about', icon: LuUser },
  { key: 'skills' as const, id: 'skills', icon: LuLayers },
  { key: 'projects' as const, id: 'projects', icon: LuFolderKanban },
  { key: 'milestones' as const, id: 'professional-milestones', icon: LuTrophy },
  { key: 'faq' as const, id: 'faq', icon: LuCircleHelp },
] as const;

const sectionIds = [...menuItemConfig.map((item) => item.id), 'footer'];

const NAV_ACTIVE_OFFSET = HEADER_HEIGHT_PX + 8;
const BOTTOM_SNAP_THRESHOLD_PX = 96;

function resolveActiveSection(): string {
  const nearBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - BOTTOM_SNAP_THRESHOLD_PX;

  if (nearBottom) {
    return 'footer';
  }

  let active = sectionIds[0];

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;

    if (element.getBoundingClientRect().top <= NAV_ACTIVE_OFFSET) {
      active = id;
    }
  }

  return active;
}

type ContactCtaLinkProps = {
  variant: 'desktop' | 'mobile';
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
};

function ContactCtaLink({ variant, isActive, onClick, children }: ContactCtaLinkProps) {
  const radius = variant === 'desktop' ? 'rounded-xl' : 'rounded-full';
  const innerRadius = variant === 'desktop' ? 'rounded-[10px]' : 'rounded-full';

  const innerClass =
    variant === 'desktop'
      ? `contact-cta-inner inline-flex items-center justify-center ${innerRadius} bg-[#583FBC] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover/cta:bg-[#4a35a3] ${
          isActive ? 'ring-2 ring-[#7DE0EA]/70 ring-offset-1' : ''
        }`
      : `contact-cta-inner group inline-flex items-center gap-2.5 ${innerRadius} bg-gradient-to-r from-[#583FBC] to-[#6B4FD4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#583FBC]/30 transition-all group-hover/cta:shadow-xl group-hover/cta:shadow-[#7DE0EA]/25 active:scale-95 ${
          isActive ? 'ring-2 ring-[#7DE0EA]/50 ring-offset-2' : ''
        }`;

  return (
    <span className={`group/cta contact-cta-glow relative inline-flex overflow-hidden p-[2px] ${radius}`}>
      <span className="contact-shimmer-spin" aria-hidden />
      <a href="#footer" onClick={onClick} className={`relative z-10 ${innerClass}`}>
        {children}
      </a>
    </span>
  );
}

const Header = () => {
  const t = useTranslations('header');
  const tPerson = useTranslations('person');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const menuItems = menuItemConfig.map((item) => ({
    ...item,
    label: t(`nav.${item.key}`),
  }));

  useEffect(() => {
    const syncActiveSection = () => {
      setActiveSection(resolveActiveSection());
    };

    const observer = new IntersectionObserver(syncActiveSection, {
      rootMargin: `-${NAV_ACTIVE_OFFSET}px 0px -40% 0px`,
      threshold: [0, 0.05, 0.1, 0.25],
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', syncActiveSection, { passive: true });
    syncActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', syncActiveSection);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT_PX;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({
        top: Math.min(Math.max(offsetPosition, 0), maxScroll),
        behavior: 'auto',
      });

      setActiveSection(resolveActiveSection());
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const languageSwitcher = LOCALE_SWITCHER_ENABLED ? <LanguageSwitcher /> : null;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-[#A6B1E1]/30 shadow-sm">
      <div className={`${SECTION_CONTAINER} flex h-16 items-center justify-between`}>
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center font-mono text-xl font-bold text-[#424874] transition-colors hover:text-[#583FBC]"
        >
          <span>{tPerson('brandName')}</span>
          <span className="animate-pulse text-[#583FBC] ml-0.5">_</span>
        </Link>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <div className="flex space-x-6 xl:space-x-8 text-sm lg:text-md font-medium text-[#424874]">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`hover:text-[#A6B1E1] transition-colors relative group cursor-pointer ${
                  activeSection === item.id ? 'text-[#583FBC]' : ''
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#A6B1E1] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>
          {languageSwitcher}
          <ContactCtaLink
            variant="desktop"
            isActive={activeSection === 'footer'}
            onClick={(e) => handleNavClick(e, 'footer')}
          >
            {t('nav.contact')}
          </ContactCtaLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {languageSwitcher && <LanguageSwitcher variant="mobile" />}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <span className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#A6B1E1]/60 bg-gradient-to-br from-[#F4EEFF] to-white shadow-sm transition-all hover:border-[#583FBC]/60 hover:shadow-md active:scale-95">
                <LuX className="h-5 w-5 text-[#583FBC] transition-transform duration-300 group-hover:rotate-90" />
              </span>
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-[#424874] transition-colors hover:bg-[#F4EEFF]/80">
                <LuMenu className="h-6 w-6" />
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label={t('closeMenu')}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-[#424874]/20 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden absolute left-0 top-16 z-50 w-full border-t border-[#A6B1E1]/30 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`group flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all active:scale-[0.98] ${
                      isActive
                        ? 'border-[#583FBC]/40 bg-gradient-to-r from-[#F4EEFF] to-white shadow-sm'
                        : 'border-[#A6B1E1]/25 bg-white hover:border-[#A6B1E1]/50 hover:bg-[#F4EEFF]/40'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? 'bg-[#583FBC] text-white shadow-md shadow-[#583FBC]/25'
                          : 'bg-[#F4EEFF] text-[#583FBC] group-hover:bg-[#583FBC]/10'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-base font-semibold ${
                          isActive ? 'text-[#583FBC]' : 'text-[#424874]'
                        }`}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <span className="mt-0.5 block text-xs font-medium text-[#583FBC]/70">
                          {t('youAreHere')}
                        </span>
                      )}
                    </span>
                    <LuChevronRight
                      className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                        isActive ? 'text-[#583FBC]' : 'text-[#A6B1E1]'
                      }`}
                      aria-hidden
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col items-center gap-4 border-t border-[#A6B1E1]/20 pt-5">
              <ContactCtaLink
                variant="mobile"
                isActive={activeSection === 'footer'}
                onClick={(e) => handleNavClick(e, 'footer')}
              >
                <LuMail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                {t('getInTouch')}
              </ContactCtaLink>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
