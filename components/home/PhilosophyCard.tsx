import { getTranslations } from 'next-intl/server';
import { LuBrain } from 'react-icons/lu';
import BentoCard from '@/components/bento/BentoCard';

export default async function PhilosophyCard() {
  const t = await getTranslations('home.philosophy');

  return (
    <BentoCard rows={2} tone="ink" className="flex flex-col justify-between p-7 md:p-8">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-plum-300">
        <LuBrain className="h-5 w-5" aria-hidden />
      </span>

      <div className="mt-8">
        <h2 className="text-xl font-bold leading-snug text-white text-balance lg:text-2xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/65">{t('caption')}</p>
      </div>
    </BentoCard>
  );
}
