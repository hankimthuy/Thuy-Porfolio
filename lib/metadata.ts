import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LOGO_IMAGE_PATH, OG_IMAGE_PATH, SITE_URL } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const HREFLANG: Record<Locale, string> = {
  en: 'en',
  vi: 'vi',
};

const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  vi: 'vi_VN',
};

export type PageKey = 'home' | 'about' | 'showcases' | 'milestones' | 'connect';

/** Route path for each page, relative to the locale prefix. */
export const PAGE_PATHS: Record<PageKey, string> = {
  home: '',
  about: '/about',
  showcases: '/showcases',
  milestones: '/milestones',
  connect: '/connect',
};

export const PAGE_KEYS = Object.keys(PAGE_PATHS) as PageKey[];

/** hreflang alternates for one route across every locale. */
function alternatesFor(path: string) {
  return {
    canonical: (locale: Locale) => `/${locale}${path}`,
    languages: {
      en: `/en${path}`,
      vi: `/vi${path}`,
      'x-default': `/en${path}`,
    },
  };
}

/**
 * Site-wide defaults. Every page overrides title, description, canonical and
 * the OpenGraph url via `getPageMetadata`; everything else is inherited.
 */
export async function getLocaleMetadata(locale: Locale): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const tJsonLd = await getTranslations({ locale, namespace: 'jsonLd' });
  const tPerson = await getTranslations({ locale, namespace: 'person' });

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const keywords = t('keywords').split(',').map((k) => k.trim());

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: `%s | ${tPerson('brandName')}`,
    },
    description: t('description'),
    keywords,
    authors: [{ name: tPerson('brandName'), url: `${SITE_URL}/${locale}` }],
    creator: tPerson('brandName'),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      alternateLocale: locale === 'en' ? ['vi_VN'] : ['en_US'],
      siteName: t('siteName'),
      title: t('ogTitle'),
      description: t('description'),
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: tJsonLd('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('description'),
      images: [OG_IMAGE_PATH],
    },
    icons: {
      icon: LOGO_IMAGE_PATH,
      apple: LOGO_IMAGE_PATH,
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}

/**
 * Per-route metadata: canonical, hreflang alternates and OpenGraph url all
 * point at this page rather than at the locale root.
 *
 * Home keeps the hand-written SEO title verbatim (`title.absolute`); the other
 * pages take the layout's `%s | Brand` template.
 */
export async function getPageMetadata(
  locale: Locale,
  page: PageKey,
): Promise<Metadata> {
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });
  const tPages = await getTranslations({ locale, namespace: 'pages' });

  const path = PAGE_PATHS[page];
  const { canonical, languages } = alternatesFor(path);
  const isHome = page === 'home';

  const title = isHome ? tMeta('title') : tPages(`${page}.title`);
  const description = isHome
    ? tMeta('description')
    : tPages(`${page}.description`);

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonical(locale),
      languages,
    },
    openGraph: {
      url: `${SITE_URL}/${locale}${path}`,
      title: isHome ? tMeta('ogTitle') : `${title} | ${tMeta('siteName')}`,
      description,
    },
    twitter: {
      title: isHome ? tMeta('ogTitle') : `${title} | ${tMeta('siteName')}`,
      description,
    },
  };
}

export { HREFLANG };
