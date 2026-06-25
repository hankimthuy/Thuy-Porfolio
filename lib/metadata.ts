import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LOGO_IMAGE_PATH, SITE_URL } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const HREFLANG: Record<Locale, string> = {
  en: 'en',
  vi: 'vi',
};

const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  vi: 'vi_VN',
};

export async function getLocaleMetadata(locale: Locale): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const tJsonLd = await getTranslations({ locale, namespace: 'jsonLd' });
  const tPerson = await getTranslations({ locale, namespace: 'person' });

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const canonicalPath = `/${locale}`;
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
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: '/en',
        vi: '/vi',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      alternateLocale: locale === 'en' ? ['vi_VN'] : ['en_US'],
      url: `${SITE_URL}${canonicalPath}`,
      siteName: t('siteName'),
      title: t('ogTitle'),
      description: t('description'),
      images: [
        {
          url: '/og-image.png',
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
      images: ['/og-image.png'],
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

export { HREFLANG };
