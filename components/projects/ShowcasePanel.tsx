import type { ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2, FiExternalLink } from 'react-icons/fi';
import { LuLightbulb } from 'react-icons/lu';

const STEPS = [
  { key: 'problem', icon: FiAlertTriangle },
  { key: 'solution', icon: LuLightbulb },
  { key: 'impact', icon: FiBarChart2 },
] as const;

/** Alternated so the row reads as a mix of the two brand accents, not one flat tone. */
const TONE = ['bg-plum-900', 'bg-magenta-700'];

export type ShowcasePanelProps = {
  index: number;
  active: boolean;
  onActivate: () => void;
  shortTitle: string;
  tagline: string;
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
};

export default function ShowcasePanel({
  index,
  active,
  onActivate,
  shortTitle,
  tagline,
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
}: ShowcasePanelProps) {
  const steps = [
    { ...STEPS[0], label: problemLabel, body: problem },
    { ...STEPS[1], label: solutionLabel, body: solution },
    { ...STEPS[2], label: impactLabel, body: impact },
  ];
  const tone = TONE[index % TONE.length];

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onActivate();
      }}
      aria-expanded={active}
      aria-label={active ? undefined : `${shortTitle} — ${tagline}`}
      className={`relative overflow-hidden rounded-3xl text-white outline-none transition-[flex-grow,height] duration-500 ease-out ${tone} ${
        active ? 'h-auto lg:flex-[4]' : 'h-24 lg:h-full lg:flex-1'
      } lg:h-full`}
    >
      {/* Collapsed teaser — always present, fades out (and stops blocking clicks) once active */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 ${
          active ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <h3 className="text-base font-bold leading-snug lg:text-lg">{shortTitle}</h3>
        <p className="mt-1 text-xs leading-snug text-white/70 lg:text-sm">{tagline}</p>
      </div>

      {/* Expanded detail */}
      <div
        className={`p-6 transition-opacity duration-300 lg:p-8 ${
          active ? 'opacity-100 delay-150' : 'pointer-events-none absolute inset-0 opacity-0'
        }`}
      >
        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
          {categoryLabel}
        </span>

        <div className="mt-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug lg:text-2xl">{title}</h3>
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="-mr-2 shrink-0 rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
              className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/85"
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
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/90">
                  <StepIcon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    {step.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/90">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
