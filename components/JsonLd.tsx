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

type JsonLdProps = {
  locale: Locale;
};

export default async function JsonLd({ locale }: JsonLdProps) {
  const t = await getTranslations({ locale, namespace: 'jsonLd' });
  const tPerson = await getTranslations({ locale, namespace: 'person' });
  const tProjects = await getTranslations({ locale, namespace: 'projects' });
  const tFaq = await getTranslations({ locale, namespace: 'faq' });
  const tMetadata = await getTranslations({ locale, namespace: 'metadata' });

  const localeUrl = `${SITE_URL}/${locale}`;
  const inLanguage = IN_LANGUAGE[locale];
  const brandName = tPerson('brandName');

  const faqItems = tFaq.raw('items') as Array<{ question: string; answer: string }>;
  const projectItems = tProjects.raw('items') as Record<
    string,
    { title: string; schemaDescription: string }
  >;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${localeUrl}/#person`,
    name: brandName,
    alternateName: personAlternateNames,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    additionalName: PERSON.givenName,
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
    '@id': `${localeUrl}/#website`,
    name: tMetadata('siteName'),
    url: localeUrl,
    description: t('websiteDescription'),
    inLanguage,
    author: { '@id': `${localeUrl}/#person` },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${localeUrl}/#profilepage`,
    url: localeUrl,
    name: t('profilePageName'),
    isPartOf: { '@id': `${localeUrl}/#website` },
    about: { '@id': `${localeUrl}/#person` },
    mainEntity: { '@id': `${localeUrl}/#person` },
    inLanguage,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${localeUrl}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
          .replace('{email}', PERSON.email)
          .replace('{siteUrl}', SITE_URL)
          .replace('{brandName}', brandName),
      },
    })),
  };

  const projectListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${localeUrl}/#projects`,
    name: t('projectListName'),
    itemListElement: ALL_PROJECTS.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        '@id': `${localeUrl}/#project-${project.id}`,
        name: projectItems[project.id].title,
        description: projectItems[project.id].schemaDescription,
        ...(project.schemaUrl ? { url: project.schemaUrl } : {}),
        author: { '@id': `${localeUrl}/#person` },
      },
    })),
  };

  const credentialSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    '@id': `${localeUrl}/#credential-google-ux`,
    name: GOOGLE_UX_CREDENTIAL.name,
    credentialCategory: 'Professional Certificate',
    recognizedBy: {
      '@type': 'Organization',
      name: GOOGLE_UX_CREDENTIAL.issuer,
    },
    url: `${SITE_URL}${GOOGLE_UX_CREDENTIAL.pdfPath}`,
  };

  const schemas = [
    personSchema,
    websiteSchema,
    profilePageSchema,
    faqSchema,
    projectListSchema,
    credentialSchema,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
