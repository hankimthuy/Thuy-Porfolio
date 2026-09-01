import { getTranslations } from 'next-intl/server';
import { FiCpu, FiGlobe, FiZap } from 'react-icons/fi';
import { LuBadgeCheck } from 'react-icons/lu';
import PdfThumbnail from '@/components/PdfThumbnail';
import BentoGrid from '@/components/bento/BentoGrid';
import BentoCard from '@/components/bento/BentoCard';
import { SECTION_HEADER_TO_CONTENT } from '@/lib/layout';
import { GOOGLE_UX_CREDENTIAL } from '@/lib/projects-data';

type BoschPoint = {
  key: 'complexUi' | 'collaboration' | 'problemSolver';
  icon: typeof FiCpu;
};

const BOSCH_POINTS: BoschPoint[] = [
  { key: 'complexUi', icon: FiCpu },
  { key: 'collaboration', icon: FiGlobe },
  { key: 'problemSolver', icon: FiZap },
];

export default async function ProfessionalMilestones() {
  const t = await getTranslations('milestones');
  const tPerson = await getTranslations('person');
  const credentialSkills = t.raw('credential.skills') as string[];

  return (
    <>
      <header className="max-w-2xl lg:max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
          {tPerson('yearsExperience')}
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-foreground text-balance lg:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{t('subtitle')}</p>
      </header>

      <BentoGrid className={SECTION_HEADER_TO_CONTENT}>
        <BentoCard span={2} rows={2} className="p-7 md:p-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="text-xl font-bold leading-snug text-foreground lg:text-2xl">
              {t('bosch.title')}
            </h2>
            <span className="inline-flex items-center rounded-full border border-taupe-200 bg-taupe-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
              {tPerson('yearsExperienceShort')}
            </span>
          </div>

          <ul className="mt-6 space-y-5">
            {BOSCH_POINTS.map(({ key, icon: Icon }) => (
              <li key={key} className="flex gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-taupe-200 bg-taupe-50 text-muted">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <p className="min-w-0 text-sm leading-relaxed text-foreground/80">
                  <strong className="font-bold text-foreground">
                    {t(`bosch.${key}.label`)}
                  </strong>{' '}
                  {t(`bosch.${key}.text`)}
                </p>
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard span={2} rows={2} tone="tint" className="p-7 md:p-8">
          <h2 className="text-xl font-bold leading-snug text-foreground lg:text-2xl">
            {t('credential.title')}
          </h2>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row">
            <ul className="space-y-2.5 lg:basis-1/2">
              {credentialSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 text-sm font-semibold text-foreground"
                >
                  <LuBadgeCheck
                    className="h-4 w-4 shrink-0 text-muted"
                    aria-hidden="true"
                  />
                  {skill}
                </li>
              ))}
            </ul>

            <div className="lg:basis-1/2">
              <PdfThumbnail
                pdfUrl={GOOGLE_UX_CREDENTIAL.pdfPath}
                className="w-full overflow-hidden rounded-xl border border-taupe-200 bg-surface"
              />
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
