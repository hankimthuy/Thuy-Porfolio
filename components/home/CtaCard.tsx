import { getTranslations } from 'next-intl/server';
import { LuArrowUpRight, LuMail } from 'react-icons/lu';
import BentoCard from '@/components/bento/BentoCard';

export default async function CtaCard() {
  const t = await getTranslations('home.cta');

  return (
    <BentoCard
      span="full"
      href="/connect"
      className="flex items-center justify-between gap-6 p-7 md:p-8"
    >
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ocean-700">
          {t('eyebrow')}
        </p>
        <h2 className="mt-2 text-xl font-bold text-ocean-900 lg:text-2xl">{t('title')}</h2>
      </div>

      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sand-100 text-ocean-700 transition-colors group-hover:bg-ocean-500 group-hover:text-white">
        <LuMail className="h-5 w-5 md:hidden" aria-hidden />
        <LuArrowUpRight className="hidden h-5 w-5 md:block" aria-hidden />
      </span>
    </BentoCard>
  );
}
