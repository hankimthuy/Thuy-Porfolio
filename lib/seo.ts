import type { Metadata } from 'next';

const DEFAULT_SITE_URL = 'https://thuyhankim.id.vn';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || DEFAULT_SITE_URL;

export const PORTRAIT_IMAGE_PATH =
  '/images/han-kim-thuy-ux-software-engineer-portrait.jpg';
export const LOGO_IMAGE_PATH = '/images/han-kim-thuy-portfolio-logo.png';
export const OG_IMAGE_PATH = '/images/han-kim-thuy-portfolio-og.png';

export const SITE_NAME = 'Han Kim Thuy — Portfolio';

export const PERSON = {
  /** Legal full name (Vietnamese) */
  fullName: 'Hàn Kim Thủy',
  /** English display / romanization */
  brandName: 'Han Kim Thuy',
  /** Vietnamese: họ */
  familyName: 'Hàn',
  familyNameEn: 'Han',
  /** Vietnamese: tên đệm */
  additionalName: 'Kim',
  /** Vietnamese: tên */
  givenName: 'Thủy',
  givenNameEn: 'Thuy',
  /** Online handles — not legal name variants */
  onlineHandles: ['thuyhankim', 'hankimthuy'] as const,
  alternateNames: [
    'Han Kim Thuy',
    'Hàn Kim Thủy',
    'Thuy',
    'thuyhankim',
    'hankimthuy',
  ],
  yearsExperience: '4+ Years Experience',
  yearsExperienceShort: '4+ Years',
  jobTitle: 'UX Software Engineer',
  jobTitles: ['UX Software Engineer'] as const,
  jobTitleSecondary: 'Full-stack · Product-minded',
  email: 'thuyhankim@gmail.com',
  gmailComposeHref:
    'https://mail.google.com/mail/?view=cm&fs=1&to=thuyhankim%40gmail.com',
  phone: '0947 701 601',
  zaloHref: 'https://zalo.me/84947701601',
  whatsappHref: 'https://wa.me/84947701601',
  linkedin: 'https://www.linkedin.com/in/thuyhankim/',
  github: 'https://github.com/hankimthuy',
  location: 'Vietnam',
  areaServed: 'Worldwide',
  sameAs: [
    'https://www.linkedin.com/in/thuyhankim/',
    'https://github.com/hankimthuy',
    'https://zalo.me/84947701601',
  ],
  knowsAbout: [
    'UX Engineering',
    'UX Software Engineering',
    'User Experience Design',
    'Product Engineering',
    'Product Ownership',
    'Problem Solving',
    'Product Discovery',
    'Customer Needs',
    'Agile Product Development',
    'UX Research',
    'Full-stack Development',
  ],
} as const;

export const SITE_TITLE = `${PERSON.brandName} (${PERSON.fullName}) | UX Software Engineer — Portfolio`;

export const SITE_DESCRIPTION =
  'Han Kim Thuy (Hàn Kim Thủy) — UX Software Engineer based in Vietnam. 4+ years building CMS platforms, enterprise apps, and user-focused products. Google UX certified, full-stack, open to remote freelance worldwide.';

/** Reserved for future i18n /vi route */
export const SITE_DESCRIPTION_VI =
  'Hàn Kim Thủy — Kỹ sư UX phần mềm tại Việt Nam. Hơn 4 năm xây dựng CMS, ứng dụng doanh nghiệp và sản phẩm lấy người dùng làm trung tâm. Chứng chỉ Google UX, full-stack, nhận freelance remote toàn cầu.';

export const SITE_KEYWORDS = [
  'Han Kim Thuy',
  'Hàn Kim Thủy',
  'Thuy',
  'hankimthuy',
  'thuyhankim',
  'thuyhankim portfolio',
  'Hàn Kim Thủy portfolio',
  'UX Software Engineer',
  'UX Engineer',
  'Product Engineer',
  'Product Owner',
  'Full-stack Developer',
  'Software Engineer',
  'UX design',
  'problem solver',
  'user experience',
  'product discovery',
  'Vietnam',
  'kỹ sư UX phần mềm',
  'kỹ sư sản phẩm',
  'freelance remote',
  'freelance Vietnam',
  'UX engineer Vietnam',
  'product engineer Vietnam',
  'Ho Chi Minh',
];

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

const ogImageAlt = `${PERSON.brandName} (${PERSON.fullName}) — ${PERSON.jobTitle}, portfolio · Remote freelance`;

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
        url: OG_IMAGE_PATH,
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
