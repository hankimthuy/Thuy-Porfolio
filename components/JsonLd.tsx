import { FAQ_ITEMS } from '@/lib/faq-data';
import { PERSON, SITE_NAME, SITE_URL } from '@/lib/seo';

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.brandName,
    alternateName: [PERSON.fullName, ...PERSON.alternateNames.filter((n) => n !== PERSON.brandName)],
    givenName: PERSON.givenName,
    jobTitle: PERSON.jobTitle,
    email: `mailto:${PERSON.email}`,
    url: SITE_URL,
    image: `${SITE_URL}/images/IMG_1485.JPG`,
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Portfolio of Han Kim Thuy — Product Engineer & Product Owner with 4+ years experience in headless CMS, storefront, and technical SEO.',
    inLanguage: ['en-US', 'vi-VN'],
    author: { '@id': `${SITE_URL}/#person` },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${PERSON.brandName} — Portfolio`,
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

  const schemas = [personSchema, websiteSchema, profilePageSchema, faqSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
