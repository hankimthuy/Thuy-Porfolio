import { getTranslations } from 'next-intl/server';
import BentoCard from '@/components/bento/BentoCard';
import { CORE_TECH } from '@/lib/projects-data';

// Fixed pastel chips (plum-50/magenta-50) pair with fixed brand-color text so
// they read the same "sticker" way in both themes; the taupe-50 one is
// theme-reactive so its text flips too.
const PILLAR_TONES = [
  'border-plum-500/20 bg-plum-50/60 text-plum-900',
  'border-magenta-500/20 bg-magenta-50 text-plum-900',
  'border-taupe-200 bg-taupe-50 text-foreground',
];

const TAG_TONES = [
  'border-plum-500/25 text-muted',
  'border-magenta-500/25 text-magenta-700',
  'border-taupe-200 text-muted',
];

export default async function CompetenciesCard() {
  const t = await getTranslations('home.competencies');
  const tSkills = await getTranslations('skills');

  const cards = tSkills.raw('cards') as Array<{ title: string; description: string }>;

  return (
    <BentoCard span={3} className="p-7 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
        {t('eyebrow')}
      </p>
      <h2 className="mt-2 text-lg font-bold text-foreground lg:text-xl">{t('title')}</h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {cards.map((card, index) => (
          <li
            key={card.title}
            className={`rounded-xl border px-4 py-3.5 text-sm font-semibold ${PILLAR_TONES[index % PILLAR_TONES.length]}`}
          >
            {card.title}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {CORE_TECH.map((tech, index) => (
          <li
            key={tech}
            className={`rounded-full border bg-surface px-3.5 py-1.5 text-xs font-semibold ${TAG_TONES[index % TAG_TONES.length]}`}
          >
            {tech}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
