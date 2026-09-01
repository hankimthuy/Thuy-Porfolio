import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { LuMapPin } from 'react-icons/lu';
import BentoCard from '@/components/bento/BentoCard';
import { PORTRAIT_IMAGE_PATH } from '@/lib/seo';

export default async function PortraitCard() {
  const t = await getTranslations('hero');
  const tHome = await getTranslations('home');

  return (
    <BentoCard rows={2} className="group min-h-[420px] p-0 sm:min-h-[480px] lg:min-h-0">
      <Image
        src={PORTRAIT_IMAGE_PATH}
        alt={t('portraitAlt')}
        width={590}
        height={787}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      <div className="absolute inset-x-0 bottom-0 bg-plum-900/70 p-5">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
          <LuMapPin className="h-4 w-4 shrink-0" aria-hidden />
          {tHome('portraitCaption')}
        </p>
      </div>
    </BentoCard>
  );
}
