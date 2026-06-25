import { getTranslations } from 'next-intl/server';
import { FiCpu, FiGlobe, FiZap } from 'react-icons/fi';
import PdfThumbnail from '@/components/PdfThumbnail';
import { SECTION_INNER, SECTION_SCROLL_MARGIN, SECTION_HEADER_TO_CONTENT } from '@/lib/layout';
import { GOOGLE_UX_CREDENTIAL } from '@/lib/projects-data';

interface MilestoneCardProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

function MilestoneCard({ title, subtitle, content }: MilestoneCardProps) {
  return (
    <div className="relative rounded-[14px] overflow-hidden border border-indigo-100 bg-white shadow-sm transition-transform duration-200 will-change-transform hover:shadow-lg hover:shadow-indigo-200/60 hover:scale-[1.01]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4EEFF]/55 via-white to-[#DCD6F7]/40" />

      <div className="relative z-10 p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="mt-0 text-xl lg:text-[24px] font-semibold leading-[1.15] text-[#424874]">
            {title}
          </h3>
          {subtitle && (
            <span className="inline-flex items-center rounded-full border border-[#A6B1E1]/60 bg-[#F4EEFF]/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#583FBC]">
              {subtitle}
            </span>
          )}
        </div>

        <div className="mt-5 text-[15px] leading-[1.7] text-[#424874]/90">{content}</div>
      </div>
    </div>
  );
}

export default async function ProfessionalMilestones() {
  const t = await getTranslations('milestones');
  const tPerson = await getTranslations('person');
  const credentialSkills = t.raw('credential.skills') as string[];

  return (
    <section id="professional-milestones" className={`${SECTION_SCROLL_MARGIN} bg-white`}>
      <div className={SECTION_INNER}>
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-[1.1] text-[#424874] lg:text-[56px]">
            {t('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-[920px] text-base text-[#424874]/80 lg:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className={`${SECTION_HEADER_TO_CONTENT} grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8`}>
          <MilestoneCard
            title={t('bosch.title')}
            subtitle={tPerson('yearsExperienceShort')}
            content={
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-white border border-indigo-100 text-[#424874] shadow-sm">
                    <FiCpu aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <strong className="font-bold text-indigo-900">{t('bosch.complexUi.label')}</strong>{' '}
                    {t('bosch.complexUi.text')}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-white border border-indigo-100 text-[#424874] shadow-sm">
                    <FiGlobe aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <strong className="font-bold text-indigo-900">{t('bosch.collaboration.label')}</strong>{' '}
                    {t('bosch.collaboration.text')}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] bg-white border border-indigo-100 text-[#424874] shadow-sm">
                    <FiZap aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <strong className="font-bold text-indigo-900">{t('bosch.problemSolver.label')}</strong>{' '}
                    {t('bosch.problemSolver.text')}
                  </div>
                </div>
              </div>
            }
          />

          <MilestoneCard
            title={t('credential.title')}
            content={
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
                <div className="lg:basis-1/2">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {credentialSkills.map((skill) => (
                        <div key={skill}>
                          <strong className="font-bold text-indigo-900">{skill}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:basis-1/2">
                  <PdfThumbnail
                    pdfUrl={GOOGLE_UX_CREDENTIAL.pdfPath}
                    className="w-full border border-[#E0E7FF] rounded-lg shadow-sm overflow-hidden bg-white"
                  />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
