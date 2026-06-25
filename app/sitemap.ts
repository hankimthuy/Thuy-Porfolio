import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const languageAlternates = {
  en: `${SITE_URL}/en`,
  vi: `${SITE_URL}/vi`,
  'x-default': `${SITE_URL}/en`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: languageAlternates,
      },
    },
    {
      url: `${SITE_URL}/vi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: languageAlternates,
      },
    },
  ];
}
