import { getTranslations } from 'next-intl/server';
import BentoCard from '@/components/bento/BentoCard';

export default async function StatsCard() {
  const t = await getTranslations('hero');
  const tHome = await getTranslations('home');

  const stats = [t('stats.experience'), t('stats.projects'), t('stats.delivery')];

  return (
    <BentoCard tone="tint" className="p-7 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ocean-700">
        {tHome('stats.eyebrow')}
      </p>

      <ul className="mt-5 space-y-3">
        {stats.map((stat) => (
          <li
            key={stat}
            className="border-l-2 border-ocean-500 pl-3 text-sm font-bold text-ocean-900"
          >
            {stat}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
