import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Projects from '@/components/Projects';
import { JsonLdScript, buildProjectListSchema } from '@/components/JsonLd';
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
  return getPageMetadata(locale, 'showcases');
}

export default async function ShowcasesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className={PAGE_SHELL}>
      <JsonLdScript schemas={[await buildProjectListSchema(locale)]} />
      <Projects />
    </main>
  );
}
