import { getTranslations } from 'next-intl/server';
import {
  ALL_PROJECTS,
  BOSCH_EMPLOYER,
  GOOGLE_UX_CREDENTIAL,
} from '@/lib/projects-data';
import { PERSON, PORTRAIT_IMAGE_PATH, SITE_URL } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const IN_LANGUAGE: Record<Locale, string> = {
  en: 'en-US',
  vi: 'vi-VN',
};

const personAlternateNames = [
  PERSON.fullName,
  PERSON.brandName,
  ...PERSON.alternateNames.filter(
    (n) => n !== PERSON.brandName && n !== PERSON.fullName,
  ),
];

/**
 * Person and WebSite are anchored to the locale root on every route, so that
 * page-scoped schemas can reference them by `@id` from any URL.
 */
const personId = (locale: Locale) => `${SITE_URL}/${locale}/#person`;
const websiteId = (locale: Locale) => `${SITE_URL}/${locale}/#website`;

/** Renders one `<script type="application/ld+json">` for the given schemas. */
export function JsonLdScript({ schemas }: { schemas: unknown[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

/** Site-wide: emitted from the locale layout on every route. */
export async function buildSiteSchemas(locale: Locale) {
  const t = await getTranslations({ locale, namespace: 'jsonLd' });
  const tPerson = await getTranslations({ locale, namespace: 'person' });
  const tMetadata = await getTranslations({ locale, namespace: 'metadata' });

  const localeUrl = `${SITE_URL}/${locale}`;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(locale),
    name: tPerson('brandName'),
    alternateName: personAlternateNames,
    familyName: locale === 'vi' ? PERSON.familyName : PERSON.familyNameEn,
    additionalName: PERSON.additionalName,
    givenName: locale === 'vi' ? PERSON.givenName : PERSON.givenNameEn,
    disambiguatingDescription: t('disambiguatingDescription'),
    jobTitle: tPerson('jobTitle'),
    description: t('personDescription'),
    email: `mailto:${PERSON.email}`,
    url: localeUrl,
    image: `${SITE_URL}${PORTRAIT_IMAGE_PATH}`,
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
    worksFor: {
      '@type': 'Organization',
      name: BOSCH_EMPLOYER.name,
      url: BOSCH_EMPLOYER.url,
    },
    areaServed: {
      '@type': 'Place',
      name: PERSON.areaServed,
    },
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: t('occupationEngineerName'),
        description: t('occupationEngineer'),
        occupationLocation: {
          '@type': 'Country',
          name: PERSON.location,
        },
      },
      {
        '@type': 'Occupation',
        name: t('occupationOwnerName'),
        description: t('occupationOwner'),
        occupationLocation: {
          '@type': 'Country',
          name: PERSON.location,
        },
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(locale),
    name: tMetadata('siteName'),
    url: localeUrl,
    description: t('websiteDescription'),
    inLanguage: IN_LANGUAGE[locale],
    author: { '@id': personId(locale) },
  };

  return [personSchema, websiteSchema];
}

/** Home and About: the pages that are about the person herself. */
export async function buildProfilePageSchema(locale: Locale, path = '') {
  const t = await getTranslations({ locale, namespace: 'jsonLd' });
  const pageUrl = `${SITE_URL}/${locale}${path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${pageUrl}/#profilepage`,
    url: pageUrl,
    name: t('profilePageName'),
    isPartOf: { '@id': websiteId(locale) },
    about: { '@id': personId(locale) },
    mainEntity: { '@id': personId(locale) },
    inLanguage: IN_LANGUAGE[locale],
  };
}

/** Showcases only. */
export async function buildProjectListSchema(locale: Locale) {
  const t = await getTranslations({ locale, namespace: 'jsonLd' });
  const tProjects = await getTranslations({ locale, namespace: 'projects' });

  const pageUrl = `${SITE_URL}/${locale}/showcases`;
  const projectItems = tProjects.raw('items') as Record<
    string,
    { title: string; schemaDescription: string }
  >;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${pageUrl}/#projects`,
    name: t('projectListName'),
    itemListElement: ALL_PROJECTS.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        '@id': `${pageUrl}/#project-${project.id}`,
        name: projectItems[project.id].title,
        description: projectItems[project.id].schemaDescription,
        ...(project.schemaUrl ? { url: project.schemaUrl } : {}),
        author: { '@id': personId(locale) },
      },
    })),
  };
}

/** Milestones only. */
export function buildCredentialSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    '@id': `${SITE_URL}/${locale}/milestones/#credential-google-ux`,
    name: GOOGLE_UX_CREDENTIAL.name,
    credentialCategory: 'Professional Certificate',
    recognizedBy: {
      '@type': 'Organization',
      name: GOOGLE_UX_CREDENTIAL.issuer,
    },
    url: `${SITE_URL}${GOOGLE_UX_CREDENTIAL.pdfPath}`,
  };
}

/** Connect only — the single page that carries the FAQ. */
export async function buildFaqSchema(locale: Locale) {
  const tFaq = await getTranslations({ locale, namespace: 'faq' });
  const tPerson = await getTranslations({ locale, namespace: 'person' });

  const faqItems = tFaq.raw('items') as Array<{
    question: string;
    answer: string;
  }>;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/${locale}/connect/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
          .replace('{email}', PERSON.email)
          .replace('{siteUrl}', SITE_URL)
          .replace('{brandName}', tPerson('brandName')),
      },
    })),
  };
}

/** Site-wide schemas, ready to drop into the locale layout's <head>. */
export default async function JsonLd({ locale }: { locale: Locale }) {
  return <JsonLdScript schemas={await buildSiteSchemas(locale)} />;
}
