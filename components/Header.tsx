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
import { SECTION_CONTAINER } from '@/lib/layout';

const navItems = [
  { key: 'home' as const, href: '/', icon: LuHouse },
  { key: 'about' as const, href: '/about', icon: LuUser },
  { key: 'showcases' as const, href: '/showcases', icon: LuFolderKanban },
  { key: 'milestones' as const, href: '/milestones', icon: LuTrophy },
] as const;

const CONNECT_HREF = '/connect';

/**
 * Splits the brand name on its last space so the given name reads light and
 * the family name reads bold ("Han Kim **Thuy**" / "Hàn Kim **Thủy**") —
 * still one continuous string for screen readers and for name-driven SEO.
 * Falls back to a single bold span if the name has no space to split on.
 */
function Wordmark({ name }: { name: string }) {
  const splitAt = name.lastIndexOf(' ');
  if (splitAt === -1) {
    return <span className="font-extrabold">{name}</span>;
  }

  return (
    <>
      <span className="font-normal">{name.slice(0, splitAt + 1)}</span>
      <span className="font-extrabold">{name.slice(splitAt + 1)}</span>
    </>
  );
}

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

  return (
    <nav className="relative border-b border-taupe-200 bg-taupe-50">
      <div className={`${SECTION_CONTAINER} flex h-14 items-center gap-4`}>
        <Link
          href="/"
          className="shrink-0 text-lg tracking-tight text-foreground transition-colors hover:text-muted"
        >
          <Wordmark name={tPerson('brandName')} />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`group relative text-sm font-medium transition-colors ${
                  active ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                {t(`nav.${item.key}`)}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-plum-500 transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <Link
          href={CONNECT_HREF}
          aria-current={isActive(CONNECT_HREF) ? 'page' : undefined}
          className={`hidden shrink-0 items-center justify-center rounded-xl bg-plum-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-plum-700 lg:inline-flex ${
            isActive(CONNECT_HREF) ? 'bg-plum-700' : ''
          }`}
        >
          {t('nav.connect')}
        </Link>

        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-taupe-200 bg-surface text-muted transition-colors hover:border-plum-500">
                <LuX className="h-5 w-5" />
              </span>
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-taupe-100">
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
            className="fixed inset-0 z-40 bg-plum-900/20 backdrop-blur-[2px] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-14 z-50 w-full border-t border-taupe-200 bg-taupe-50/95 p-5 shadow-bento-hover backdrop-blur-xl lg:hidden">
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
                        ? 'border-plum-500/40 bg-surface shadow-bento'
                        : 'border-taupe-200 bg-surface/60 hover:bg-surface'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        active
                          ? 'bg-plum-500 text-white'
                          : 'bg-taupe-100 text-muted group-hover:bg-taupe-200'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-base font-semibold ${
                          active ? 'text-foreground' : 'text-muted'
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </span>
                      {active && (
                        <span className="mt-0.5 block text-xs font-medium text-muted">
                          {t('youAreHere')}
                        </span>
                      )}
                    </span>
                    <LuChevronRight
                      className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                        active ? 'text-foreground' : 'text-plum-500'
                      }`}
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 border-t border-taupe-200 pt-5">
              <Link
                href={CONNECT_HREF}
                aria-current={isActive(CONNECT_HREF) ? 'page' : undefined}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-plum-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-plum-700 active:scale-[0.98]"
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
