import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ProfessionalMilestones from '@/components/ProfessionalMilestones';
import Skills from '@/components/Skills';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ProfessionalMilestones />
      <FAQ />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
