import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // Off by design: the bare domain should land on the default locale
  // rather than guessing from Accept-Language. The footer's language link
  // and hreflang alternates still cover both audiences.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

/** Each locale's endonym, for the footer's language link. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};
