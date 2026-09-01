'use client';

import { LuGlobe } from 'react-icons/lu';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { SECTION_CONTAINER } from '@/lib/layout';
import { LOCALE_LABELS, routing } from '@/i18n/routing';
import ThemeToggle from '@/components/ThemeToggle';

export default function Footer() {
  const t = useTranslations('footer');
  const tPerson = useTranslations('person');
  const locale = useLocale();
  const pathname = usePathname();

  const year = new Date().getFullYear();
  const brandName = tPerson('brandName');
  const fullName = tPerson('fullName');

  // Only two locales exist, so "the other one" is unambiguous.
  const otherLocale = routing.locales.find((l) => l !== locale) ?? routing.locales[0];

  return (
    <footer className="border-t border-taupe-200 bg-surface">
      <div className={`${SECTION_CONTAINER} flex items-center justify-between gap-3 py-5 text-sm`}>
        <p className="text-xs text-muted/70 sm:text-sm">
          {t('copyright', { year, brandName, fullName })}
        </p>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={pathname}
            locale={otherLocale}
            aria-label={t('switchLanguage', { language: LOCALE_LABELS[otherLocale] })}
            className="flex items-center gap-1.5 rounded-lg border border-taupe-200 px-2.5 py-1.5 text-xs font-semibold uppercase text-muted transition-colors hover:border-plum-500 hover:text-foreground"
          >
            <LuGlobe className="h-4 w-4" aria-hidden />
            {otherLocale}
          </Link>
        </div>
      </div>
    </footer>
  );
}
