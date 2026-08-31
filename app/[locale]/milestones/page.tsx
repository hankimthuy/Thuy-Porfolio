import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ProfessionalMilestones from '@/components/ProfessionalMilestones';
import { JsonLdScript, buildCredentialSchema } from '@/components/JsonLd';
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
  return getPageMetadata(locale, 'milestones');
}

export default async function MilestonesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className={PAGE_SHELL}>
      <JsonLdScript schemas={[buildCredentialSchema(locale)]} />
      <ProfessionalMilestones />
    </main>
  );
}
