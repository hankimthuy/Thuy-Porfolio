import { getTranslations } from 'next-intl/server';
import BentoCard from '@/components/bento/BentoCard';

/** Alternated so the stack of stats isn't a single flat accent color. */
const STAT_BORDER_TONES = ['border-plum-500', 'border-magenta-500', 'border-plum-500'];

export default async function StatsCard() {
  const t = await getTranslations('hero');
  const tHome = await getTranslations('home');

  const stats = [t('stats.experience'), t('stats.projects'), t('stats.delivery')];

  return (
    <BentoCard tone="tint" className="p-7 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-plum-700">
        {tHome('stats.eyebrow')}
      </p>

      <ul className="mt-5 space-y-3">
        {stats.map((stat, index) => (
          <li
            key={stat}
            className={`border-l-2 ${STAT_BORDER_TONES[index % STAT_BORDER_TONES.length]} pl-3 text-sm font-bold text-plum-900`}
          >
            {stat}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
