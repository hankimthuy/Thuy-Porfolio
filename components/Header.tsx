'use client';

import { useEffect, useState } from 'react';
import {
  LuChevronRight,
  LuFolderKanban,
  LuHouse,
  LuMail,
  LuMenu,
  LuTrophy,
  LuUser,
  LuX,
} from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LOCALE_SWITCHER_ENABLED } from '@/lib/i18n-config';
import { SECTION_CONTAINER } from '@/lib/layout';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const navItems = [
  { key: 'home' as const, href: '/', icon: LuHouse },
  { key: 'about' as const, href: '/about', icon: LuUser },
  { key: 'showcases' as const, href: '/showcases', icon: LuFolderKanban },
  { key: 'milestones' as const, href: '/milestones', icon: LuTrophy },
] as const;

const CONNECT_HREF = '/connect';

const Header = () => {
  const t = useTranslations('header');
  const tPerson = useTranslations('person');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // `usePathname` from next-intl is already locale-stripped, so an exact
  // match is right: '/' must not light up on every route.
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const languageSwitcher = LOCALE_SWITCHER_ENABLED ? <LanguageSwitcher /> : null;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-sand-200 bg-sand-50/90 backdrop-blur-lg">
      <div className={`${SECTION_CONTAINER} flex h-16 items-center justify-between`}>
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-ocean-900 transition-colors hover:text-ocean-700"
        >
          {tPerson('brandName')}
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <div className="flex items-center gap-6 text-sm font-medium xl:gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative transition-colors ${
                    active ? 'text-ocean-900' : 'text-ocean-700 hover:text-ocean-900'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-ocean-500 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          {languageSwitcher}
          <Link
            href={CONNECT_HREF}
            aria-current={isActive(CONNECT_HREF) ? 'page' : undefined}
            className={`inline-flex items-center justify-center rounded-xl bg-ocean-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ocean-700 ${
              isActive(CONNECT_HREF) ? 'bg-ocean-700' : ''
            }`}
          >
            {t('nav.connect')}
          </Link>
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
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sand-200 bg-surface text-ocean-700 transition-colors hover:border-ocean-500">
                <LuX className="h-5 w-5" />
              </span>
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-ocean-700 transition-colors hover:bg-sand-100">
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
            className="fixed inset-0 top-16 z-40 bg-ocean-900/20 backdrop-blur-[2px] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-16 z-50 w-full border-t border-sand-200 bg-sand-50/95 p-5 shadow-bento-hover backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all active:scale-[0.98] ${
                      active
                        ? 'border-ocean-500/40 bg-surface shadow-bento'
                        : 'border-sand-200 bg-surface/60 hover:bg-surface'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        active
                          ? 'bg-ocean-500 text-white'
                          : 'bg-sand-100 text-ocean-700 group-hover:bg-sand-200'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-base font-semibold ${
                          active ? 'text-ocean-900' : 'text-ocean-700'
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </span>
                      {active && (
                        <span className="mt-0.5 block text-xs font-medium text-ocean-700">
                          {t('youAreHere')}
                        </span>
                      )}
                    </span>
                    <LuChevronRight
                      className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                        active ? 'text-ocean-900' : 'text-ocean-500'
                      }`}
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 border-t border-sand-200 pt-5">
              <Link
                href={CONNECT_HREF}
                aria-current={isActive(CONNECT_HREF) ? 'page' : undefined}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-ocean-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-700 active:scale-[0.98]"
              >
                <LuMail className="h-4 w-4" aria-hidden />
                {t('getInTouch')}
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
