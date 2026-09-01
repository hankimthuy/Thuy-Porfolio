import { forwardRef, type ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2, FiExternalLink } from 'react-icons/fi';
import { LuLightbulb } from 'react-icons/lu';
import CaseStudySlider, { type CaseStudySlide } from '@/components/projects/CaseStudySlider';
import type { CaseStudyId } from '@/components/projects/CaseStudySlidePanels';

const STEPS = [
  { key: 'problem', icon: FiAlertTriangle },
  { key: 'solution', icon: LuLightbulb },
  { key: 'impact', icon: FiBarChart2 },
] as const;

/** Cycled by index so the rail reads as a mix of color, not one flat tone. */
const ACCENT_BAR = ['bg-plum-500', 'bg-magenta-500', 'bg-taupe-300', 'bg-plum-500'];
const INDEX_TONE = ['text-plum-50', 'text-magenta-50', 'text-taupe-200', 'text-plum-50'];

export type ShowcasePanelProps = {
  index: number;
  caseStudyId: CaseStudyId;
  categoryLabel: string;
  title: string;
  tags: string[];
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
  cta?: { label: string; href: string };
  slides: CaseStudySlide[];
  sliderLabel: string;
  prevSlideLabel: string;
  nextSlideLabel: string;
  disclaimer: string;
};

const ShowcasePanel = forwardRef<HTMLDivElement, ShowcasePanelProps>(function ShowcasePanel(
  {
    index,
    caseStudyId,
    categoryLabel,
    title,
    tags,
    problem,
    solution,
    impact,
    problemLabel,
    solutionLabel,
    impactLabel,
    cta,
    slides,
    sliderLabel,
    prevSlideLabel,
    nextSlideLabel,
    disclaimer,
  },
  ref,
) {
  const steps = [
    { ...STEPS[0], label: problemLabel, body: problem },
    { ...STEPS[1], label: solutionLabel, body: solution },
    { ...STEPS[2], label: impactLabel, body: impact },
  ];
  const tone = index % ACCENT_BAR.length;

  return (
    <div
      ref={ref}
      className="w-[88vw] shrink-0 snap-start sm:w-[520px] lg:w-[680px]"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-taupe-200/80 bg-surface shadow-[0_4px_20px_-4px_rgba(26,15,82,0.06)] transition-all duration-300 hover:shadow-[0_12px_24px_-4px_rgba(26,15,82,0.10)]">
        <span className={`h-1.5 w-full shrink-0 ${ACCENT_BAR[tone]}`} aria-hidden />

        <div className="p-6 pb-0 lg:p-8 lg:pb-0">
          <CaseStudySlider
            caseStudyId={caseStudyId}
            slides={slides}
            ariaLabel={sliderLabel}
            prevLabel={prevSlideLabel}
            nextLabel={nextSlideLabel}
          />
          <p className="mt-2 text-[11px] leading-snug text-muted/70">{disclaimer}</p>
        </div>

        <div className="relative flex-1 p-6 pt-5 lg:p-8 lg:pt-6">
          <span
            className={`pointer-events-none absolute right-5 top-2 select-none text-6xl font-black leading-none lg:text-7xl ${INDEX_TONE[tone]}`}
            aria-hidden
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="relative">
            <span className="inline-flex rounded-full bg-taupe-100 px-3 py-1 text-xs font-semibold text-muted">
              {categoryLabel}
            </span>

            <div className="mt-3 flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold leading-snug text-foreground lg:text-2xl">{title}</h3>
              {cta && (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="-mr-2 shrink-0 rounded-lg p-2 text-muted transition-colors hover:bg-taupe-100 hover:text-foreground"
                  title={cta.label}
                  aria-label={cta.label}
                >
                  <FiExternalLink className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
            </div>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-taupe-200 bg-taupe-50 px-3 py-1 text-xs font-semibold text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-5">
              {steps.map((step) => {
                const StepIcon = step.icon;

                return (
                  <div key={step.key} className="flex gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-taupe-200 bg-taupe-100 text-muted">
                      <StepIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                        {step.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/80">{step.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
});

export default ShowcasePanel;
