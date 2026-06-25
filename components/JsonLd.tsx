import { FAQ_ITEMS } from '@/lib/faq-data';
import {
  ALL_PROJECTS,
  BOSCH_EMPLOYER,
  GOOGLE_UX_CREDENTIAL,
} from '@/lib/projects-data';
import { PERSON, PORTRAIT_IMAGE_PATH, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/seo';

const personAlternateNames = [
  PERSON.fullName,
  ...PERSON.alternateNames.filter((n) => n !== PERSON.brandName),
];

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.brandName,
    alternateName: personAlternateNames,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    additionalName: PERSON.givenName,
    jobTitle: PERSON.jobTitle,
    description:
      'Product Engineer and Product Owner available for freelance collaborations in Vietnam. Also known as Hàn Kim Thủy, Thuy Han Kim, hankimthuy, and thuyhankim.',
    email: `mailto:${PERSON.email}`,
    url: SITE_URL,
    image: `${SITE_URL}${PORTRAIT_IMAGE_PATH}`,
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
    worksFor: {
      '@type': 'Organization',
      name: BOSCH_EMPLOYER.name,
      url: BOSCH_EMPLOYER.url,
    },
    areaServed: {
      '@type': 'Country',
      name: PERSON.areaServed,
    },
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Product Engineer',
        description:
          'Freelance product engineering and UX-oriented delivery for teams in Vietnam.',
        occupationLocation: {
          '@type': 'Country',
          name: PERSON.location,
        },
      },
      {
        '@type': 'Occupation',
        name: 'Product Owner',
        description:
          'Freelance product ownership—discovery, prioritization, and shipping user-focused outcomes.',
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
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Portfolio of Han Kim Thuy (Hàn Kim Thủy) — Product Engineer & Product Owner. Freelance collaborations in Vietnam.',
    inLanguage: ['en-US', 'vi-VN'],
    author: { '@id': `${SITE_URL}/#person` },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: SITE_TITLE,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    mainEntity: { '@id': `${SITE_URL}/#person` },
    inLanguage: ['en-US', 'vi-VN'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const projectListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#projects`,
    name: 'Portfolio Projects',
    itemListElement: ALL_PROJECTS.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        '@id': `${SITE_URL}/#project-${project.id}`,
        name: project.title,
        description: project.schemaDescription,
        ...(project.schemaUrl ? { url: project.schemaUrl } : {}),
        author: { '@id': `${SITE_URL}/#person` },
      },
    })),
  };

  const credentialSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    '@id': `${SITE_URL}/#credential-google-ux`,
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
