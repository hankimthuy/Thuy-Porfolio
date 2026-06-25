import type { Metadata } from 'next';

const DEFAULT_SITE_URL = 'https://thuyhankim.id.vn';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || DEFAULT_SITE_URL;

export const PORTRAIT_IMAGE_PATH = '/images/han-kim-thuy-portrait.jpg';
export const LOGO_IMAGE_PATH = '/images/thuy-site-logo.png';

export const SITE_NAME = 'Han Kim Thuy — Portfolio';

export const PERSON = {
  fullName: 'Hàn Kim Thủy',
  brandName: 'Han Kim Thuy',
  givenName: 'Thuy',
  familyName: 'Han Kim',
  alternateNames: [
    'Thuy',
    'Han Kim Thuy',
    'Hàn Kim Thủy',
    'thuyhankim',
    'hankimthuy',
    'Thuy Han Kim',
  ],
  yearsExperience: '4+ Years Experience',
  yearsExperienceShort: '4+ Years',
  jobTitle: 'End-to-End Product Builder',
  jobTitles: ['End-to-End Product Builder'] as const,
  jobTitleSecondary: 'UX Software Engineer | Product Owner',
  email: 'thuyhankim@gmail.com',
  zaloPhone: '0947 701 601',
  zaloHref: 'https://zalo.me/84947701601',
  linkedin: 'https://www.linkedin.com/in/thuyhankim/',
  github: 'https://github.com/hankimthuy',
  location: 'Vietnam',
  areaServed: 'Vietnam',
  sameAs: [
    'https://www.linkedin.com/in/thuyhankim/',
    'https://github.com/hankimthuy',
    'https://zalo.me/84947701601',
  ],
  knowsAbout: [
    'Product Engineering',
    'Product Ownership',
    'Problem Solving',
    'User Experience Design',
    'Product Discovery',
    'Customer Needs',
    'Agile Product Development',
    'UX Research',
  ],
} as const;

export const SITE_TITLE = `${PERSON.brandName} (${PERSON.fullName}) | Product Engineer — Portfolio`;

export const SITE_DESCRIPTION =
  'Han Kim Thuy (Hàn Kim Thủy) — Product Engineer & Product Owner for hire in Vietnam. Portfolio of Thuy Han Kim / hankimthuy. Problem solver, UX-focused, open to freelance collaborations.';

/** Reserved for future i18n /vi route */
export const SITE_DESCRIPTION_VI =
  'Hàn Kim Thủy — Kỹ sư sản phẩm & Product Owner. Tập trung giải quyết vấn đề, trải nghiệm người dùng và sản phẩm có giá trị thực. Nhận dự án freelance tại Việt Nam.';

export const SITE_KEYWORDS = [
  'Han Kim Thuy',
  'Hàn Kim Thủy',
  'Thuy',
  'hankimthuy',
  'Thuy Han Kim',
  'thuyhankim',
  'thuyhankim portfolio',
  'Hàn Kim Thủy portfolio',
  'Product Engineer',
  'Product Owner',
  'Full-stack Developer',
  'UX Software Engineer',
  'Software Engineer',
  'UX design',
  'problem solver',
  'user experience',
  'product discovery',
  'Vietnam',
  'kỹ sư sản phẩm',
  'Vietnam',
  'freelance Vietnam',
  'freelance product owner Vietnam',
  'product owner Vietnam',
  'product engineer Vietnam',
  'Ho Chi Minh',
];

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

const ogImageAlt = `${PERSON.brandName} (${PERSON.fullName}) — ${PERSON.jobTitle}, portfolio · Freelance Vietnam`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
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
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${PERSON.brandName} (${PERSON.fullName}) | ${PERSON.jobTitle}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSON.brandName} (${PERSON.fullName}) | ${PERSON.jobTitle}`,
    description: SITE_DESCRIPTION,
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
