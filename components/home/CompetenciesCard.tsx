import { getTranslations } from 'next-intl/server';
import BentoCard from '@/components/bento/BentoCard';
import { CORE_TECH } from '@/lib/projects-data';

export default async function CompetenciesCard() {
  const t = await getTranslations('home.competencies');
  const tSkills = await getTranslations('skills');

  const cards = tSkills.raw('cards') as Array<{ title: string; description: string }>;

  return (
    <BentoCard span={3} className="p-7 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ocean-700">
        {t('eyebrow')}
      </p>
      <h2 className="mt-2 text-lg font-bold text-ocean-900 lg:text-xl">{t('title')}</h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {cards.map((card) => (
          <li
            key={card.title}
            className="rounded-xl border border-sand-200 bg-sand-50 px-4 py-3.5 text-sm font-semibold text-ocean-900"
          >
            {card.title}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {CORE_TECH.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-sand-200 bg-surface px-3.5 py-1.5 text-xs font-semibold text-ocean-700"
          >
            {tech}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
