import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ProfessionalMilestones from '@/components/ProfessionalMilestones';
import Skills from '@/components/Skills';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
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


