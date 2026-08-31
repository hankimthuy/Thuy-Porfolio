import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import BentoGrid from '@/components/bento/BentoGrid';
import HeroCard from '@/components/home/HeroCard';
import PortraitCard from '@/components/home/PortraitCard';
import PhilosophyCard from '@/components/home/PhilosophyCard';
import CompetenciesCard from '@/components/home/CompetenciesCard';
import StatsCard from '@/components/home/StatsCard';
import CtaCard from '@/components/home/CtaCard';
import { JsonLdScript, buildProfilePageSchema } from '@/components/JsonLd';
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
  return getPageMetadata(locale, 'home');
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className={PAGE_SHELL}>
      <JsonLdScript schemas={[await buildProfilePageSchema(locale)]} />

      <BentoGrid>
        <HeroCard />
        <PortraitCard />
        <PhilosophyCard />
        <CompetenciesCard />
        <StatsCard />
        <CtaCard />
      </BentoGrid>
    </main>
  );
}
