'use client';

// Demo hooks — bật lại cùng block JSX demo bên dưới.
// import { useEffect, useId, useState } from 'react';
import type { ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2 } from 'react-icons/fi';
// import { FiX } from 'react-icons/fi';
import { LuLightbulb } from 'react-icons/lu';
// import { useTranslations } from 'next-intl';
// import CaseStudySlider, { type CaseStudySlide } from '@/components/projects/CaseStudySlider';
import type { CaseStudyId } from '@/components/projects/CaseStudySlidePanels';

// function caseStudyMessageKey(id: CaseStudyId): 'contentPlatform' | 'mimose' {
//   return id === 'content-platform' ? 'contentPlatform' : 'mimose';
// }

type Props = {
  caseStudyId: CaseStudyId;
  title: string;
  tags: string[];
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
};

function Icon({ name, className }: { name: 'warning' | 'lightbulb' | 'chart'; className?: string }) {
  if (name === 'warning') return <FiAlertTriangle aria-hidden="true" className={className} />;
  if (name === 'lightbulb') return <LuLightbulb aria-hidden="true" className={className} />;
  return <FiBarChart2 aria-hidden="true" className={className} />;
}

/**
 * Card dự án có concept demo (slider + modal).
 * Hiện tắt phần demo — giữ code để bổ sung ví dụ sau.
 * Bật lại: uncomment demo trong file này + nhánh caseStudy trong Projects.tsx.
 */
export default function CaseStudyProjectCard({ caseStudyId: _caseStudyId, ...props }: Props) {
  // const t = useTranslations('projects.caseStudy');
  // const msgKey = caseStudyMessageKey(caseStudyId);
  // const bundle = t.raw(msgKey) as { modalIntro: string; slides: CaseStudySlide[] };
  // const [modalOpen, setModalOpen] = useState(false);
  // const titleId = useId();
  // const slides = bundle.slides;

  // useEffect(() => {
  //   if (!modalOpen) return;
  //   const onKey = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') setModalOpen(false);
  //   };
  //   document.addEventListener('keydown', onKey);
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.removeEventListener('keydown', onKey);
  //     document.body.style.overflow = '';
  //   };
  // }, [modalOpen]);

  return (
    <>
      <div className="relative flex h-full flex-col rounded-[14px] overflow-hidden border border-indigo-100 bg-white shadow-sm transition-transform duration-300 will-change-transform hover:shadow-xl hover:shadow-indigo-200/60 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1faee]/60 via-white to-[#e2eef1]/40" />

        <div className="relative z-10 flex flex-1 flex-col p-6 lg:p-8">
          <h3 className="text-xl lg:text-[26px] font-bold leading-[1.2] text-[#1d3557]">{props.title}</h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {props.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-[#1d3557] border border-indigo-100/80 px-3 py-1.5 rounded-[10px] text-[13px] font-semibold tracking-wide shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* --- Concept demo (tắt tạm — bổ sung ví dụ rồi uncomment) ---
          <div className="mt-5 shrink-0 rounded-xl border border-indigo-100/80 bg-white/80 p-3 backdrop-blur-sm">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#457b9d]">
              {t('previewLabel')}
            </p>
            <CaseStudySlider
              caseStudyId={caseStudyId}
              slides={slides}
              compact
              ariaLabel={t('sliderLabel')}
              prevLabel={t('prevSlide')}
              nextLabel={t('nextSlide')}
            />
            <p className="mt-2 text-[11px] leading-snug text-[#1d3557]/55">{t('disclaimer')}</p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-3 w-full rounded-[10px] border border-[#457b9d]/25 bg-[#f1faee]/50 px-4 py-2 text-sm font-semibold text-[#457b9d] transition-colors hover:bg-[#f1faee]"
            >
              {t('expandConcept')}
            </button>
          </div>
          --- end concept demo preview --- */}

          <div className="mt-8 flex-1">
            <div className="relative space-y-6 text-[15px] leading-[1.65] text-[#1d3557]/90">
              <div className="pointer-events-none absolute left-[15px] top-6 bottom-6 z-0 border-l-2 border-dashed border-indigo-200/70" />

              {(
                [
                  ['warning', props.problemLabel, props.problem],
                  ['lightbulb', props.solutionLabel, props.solution],
                  ['chart', props.impactLabel, props.impact],
                ] as const
              ).map(([icon, label, content]) => (
                <div key={label} className="flex gap-4">
                  <div className="relative w-8 flex-shrink-0 flex justify-center">
                    <div
                      className={`relative z-10 h-8 w-8 rounded-[10px] flex items-center justify-center shadow-sm ${
                        icon === 'warning'
                          ? 'bg-amber-50 border border-amber-200 text-amber-600'
                          : icon === 'lightbulb'
                            ? 'bg-blue-50 border border-blue-200 text-blue-600'
                            : 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                      }`}
                    >
                      <Icon name={icon} className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <div className="min-w-0 pt-1">
                    <div className="text-[#1d3557] font-bold text-[13px] uppercase tracking-wider mb-1">
                      {label}
                    </div>
                    <div className="text-gray-600">{content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Concept demo modal (tắt tạm — bổ sung ví dụ rồi uncomment) ---
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#1C2834]/50 backdrop-blur-sm"
            aria-label={t('close')}
            onClick={() => setModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-indigo-100 bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#457b9d]">{t('modalEyebrow')}</p>
                <h4 id={titleId} className="mt-1 text-lg font-bold text-[#1d3557]">
                  {props.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-full p-2 text-[#1d3557]/60 hover:bg-indigo-50"
                aria-label={t('close')}
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-2 text-sm text-[#1d3557]/70">{bundle.modalIntro}</p>

            <div className="mt-4">
              <CaseStudySlider
                caseStudyId={caseStudyId}
                slides={slides}
                ariaLabel={t('sliderLabel')}
                prevLabel={t('prevSlide')}
                nextLabel={t('nextSlide')}
              />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#1d3557]/55">{t('disclaimer')}</p>
            <p className="mt-3 text-sm font-medium text-[#1d3557]/80">{t('contactHint')}</p>
          </div>
        </div>
      )}
      --- end concept demo modal --- */}
    </>
  );
}
