import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { PAGE_KEYS, PAGE_PATHS } from '@/lib/metadata';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    PAGE_KEYS.map((page) => {
      const path = PAGE_PATHS[page];

      return {
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: page === 'home' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${SITE_URL}/en${path}`,
            vi: `${SITE_URL}/vi${path}`,
            'x-default': `${SITE_URL}/en${path}`,
          },
        },
      };
    }),
  );
}
