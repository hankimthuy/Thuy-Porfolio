'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { SECTION_CONTAINER } from '@/lib/layout';
import { LOCALE_LABELS, routing } from '@/i18n/routing';

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
    <footer className="border-t border-sand-200 bg-surface">
      <div
        className={`${SECTION_CONTAINER} flex flex-col items-center justify-between gap-3 py-8 text-sm sm:flex-row`}
      >
        <Link
          href="/"
          className="font-extrabold tracking-tight text-ocean-900 transition-colors hover:text-ocean-700"
        >
          {brandName}
        </Link>

        <Link
          href={pathname}
          locale={otherLocale}
          className="text-ocean-700 transition-colors hover:text-ocean-900"
        >
          {LOCALE_LABELS[otherLocale]}
        </Link>

        <p className="text-xs text-ocean-700/70 sm:text-sm">
          {t('copyright', { year, brandName, fullName })}
        </p>
      </div>
    </footer>
  );
}
