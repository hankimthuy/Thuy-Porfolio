'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
import { PERSON } from '@/lib/seo';
import { HEADER_HEIGHT_PX, SECTION_CONTAINER } from '@/lib/layout';

const menuItems = [
  { label: 'About', id: 'about', icon: LuUser },
  { label: 'Skill Sets', id: 'skills', icon: LuLayers },
  { label: 'Projects', id: 'projects', icon: LuFolderKanban },
  { label: 'Milestones', id: 'professional-milestones', icon: LuTrophy },
  { label: 'FAQ', id: 'faq', icon: LuCircleHelp },
] as const;

const sectionIds = [...menuItems.map((item) => item.id), 'footer'];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${HEADER_HEIGHT_PX + 8}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT_PX;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-[#A6B1E1]/30 shadow-sm">
      <div className={`${SECTION_CONTAINER} flex h-16 items-center justify-between`}>
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center font-mono text-xl font-bold text-[#424874] transition-colors hover:text-[#583FBC]"
        >
          <span>{PERSON.brandName}</span>
          <span className="animate-pulse text-[#583FBC] ml-0.5">_</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex space-x-6 xl:space-x-8 text-sm lg:text-md font-medium text-[#424874]">
            {[...menuItems, { label: 'Contact', id: 'footer' }].map((item) => (
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
          <a
            href="#footer"
            onClick={(e) => handleNavClick(e, 'footer')}
            className="inline-flex items-center justify-center rounded-xl bg-[#583FBC] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4a35a3]"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
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
                          You are here
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

            <div className="mt-5 flex justify-center border-t border-[#A6B1E1]/20 pt-5">
              <a
                href="#footer"
                onClick={(e) => handleNavClick(e, 'footer')}
                className={`group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#583FBC] to-[#6B4FD4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#583FBC]/30 transition-all hover:shadow-xl hover:shadow-[#583FBC]/35 active:scale-95 ${
                  activeSection === 'footer' ? 'ring-2 ring-[#583FBC]/30 ring-offset-2' : ''
                }`}
              >
                <LuMail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Get in touch
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
