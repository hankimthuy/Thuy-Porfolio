'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('header');

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    router.replace(pathname, { locale: newLocale });
    if (hash) {
      requestAnimationFrame(() => {
        window.location.hash = hash;
      });
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-[#A6B1E1]/50 bg-[#F4EEFF]/50 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label={t('switchLanguage')}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={`rounded-md px-2.5 py-1 uppercase tracking-wide transition-colors ${
            locale === loc
              ? 'bg-[#583FBC] text-white shadow-sm'
              : 'text-[#424874] hover:bg-white/80 hover:text-[#583FBC]'
          }`}
          aria-current={locale === loc ? 'true' : undefined}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
