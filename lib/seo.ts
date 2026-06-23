import type { Metadata } from 'next';

const DEFAULT_SITE_URL = 'https://thuy-portfolio.vercel.app';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || DEFAULT_SITE_URL;

export const SITE_NAME = 'Han Kim Thuy — Portfolio';

export const PERSON = {
  fullName: 'Hàn Kim Thủy',
  brandName: 'Han Kim Thuy',
  givenName: 'Thuy',
  alternateNames: ['Thuy', 'Han Kim Thuy', 'Hàn Kim Thủy', 'thuyhankim'],
  yearsExperience: '4+ Years Experience',
  yearsExperienceShort: '4+ Years',
  jobTitle: 'Product Engineer | Product Owner',
  jobTitles: ['Product Engineer', 'Product Owner'] as const,
  jobTitleSecondary: 'Full-stack Developer',
  email: 'thuyhankim@gmail.com',
  zaloPhone: '0947 701 601',
  zaloHref: 'https://zalo.me/84947701601',
  linkedin: 'https://www.linkedin.com/in/thuyhankim/',
  sameAs: [
    'https://www.linkedin.com/in/thuyhankim/',
    'https://github.com/hankimthuy',
    'https://zalo.me/84947701601',
  ],
  knowsAbout: [
    'Product Engineering',
    'Product Ownership',
    'UX Engineering',
    'Headless CMS',
    'Technical SEO',
    'TypeScript',
    'Next.js',
    'React',
  ],
} as const;

export const SITE_DESCRIPTION =
  'Han Kim Thuy (Thuy) — Product Engineer & Product Owner with 4+ years building products from user insight to delivery. CMS, admin, storefront & SEO. Open to full-stack freelance. | Hàn Kim Thủy — Kỹ sư sản phẩm & Product Owner, 4+ năm kinh nghiệm. Nhận dự án full-stack freelance.';

export const SITE_KEYWORDS = [
  'Han Kim Thuy',
  'Hàn Kim Thủy',
  'Thuy',
  'Product Engineer',
  'Product Owner',
  'Full-stack Developer',
  'UX Engineer',
  'portfolio',
  'Headless CMS',
  'Next.js',
  'Vietnam',
  'kỹ sư sản phẩm',
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSON.brandName} | ${PERSON.jobTitle} — Portfolio`,
    template: `%s | ${PERSON.brandName}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: PERSON.brandName, url: SITE_URL }],
  creator: PERSON.brandName,
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
    canonical: '/',
    languages: {
      'en-US': '/',
      'vi-VN': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${PERSON.brandName} | ${PERSON.jobTitle}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${PERSON.brandName} — ${PERSON.jobTitle}, portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSON.brandName} | ${PERSON.jobTitle}`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icons/purzle.ico',
  },
};
