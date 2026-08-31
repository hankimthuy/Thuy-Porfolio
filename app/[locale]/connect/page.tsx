import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import BentoGrid from '@/components/bento/BentoGrid';
import ContactPanel from '@/components/ContactPanel';
import FAQ from '@/components/FAQ';
import { JsonLdScript, buildFaqSchema } from '@/components/JsonLd';
import { routing, type Locale } from '@/i18n/routing';
import { PAGE_SHELL } from '@/lib/layout';
import { getPageMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'connect');
}

export default async function ConnectPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('connect');

  return (
    <main className={PAGE_SHELL}>
      <JsonLdScript schemas={[await buildFaqSchema(locale)]} />

      <header className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ocean-700">
          {t('eyebrow')}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ocean-900 text-balance lg:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ocean-700">{t('subtitle')}</p>
      </header>

      <BentoGrid className="mt-10 lg:mt-12">
        <ContactPanel />
      </BentoGrid>

      <FAQ />
    </main>
  );
}
