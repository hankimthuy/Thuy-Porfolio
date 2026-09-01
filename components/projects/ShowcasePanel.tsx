import type { ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2, FiExternalLink } from 'react-icons/fi';
import { LuLightbulb, LuLock } from 'react-icons/lu';

const STEPS = [
  { key: 'problem', icon: FiAlertTriangle },
  { key: 'solution', icon: LuLightbulb },
  { key: 'impact', icon: FiBarChart2 },
] as const;

/** Alternated so the row reads as a mix of the two brand accents, not one flat tone. */
const TONE = ['bg-plum-900', 'bg-magenta-700'];

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

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
  privateLabel: string;
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
  privateLabel,
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
      {/* A flat solid fill read as too heavy/dense — this dark scrim over the
          brand color gives the card depth ("fancy") while keeping the top
          area close to the pure color underneath. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Browser-chrome bar — makes it unmistakably "a website" at a
            glance, even collapsed, with the real domain in the address bar
            instead of a made-up screenshot. */}
        {cta ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            title={cta.label}
            className="flex shrink-0 items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2 transition-colors hover:bg-black/30"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/30" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/30" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/30" />
            <span className="ml-1.5 flex min-w-0 flex-1 items-center gap-1 truncate rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/75">
              <FiExternalLink className="h-2.5 w-2.5 shrink-0" aria-hidden />
              <span className="truncate">{hostnameOf(cta.href)}</span>
            </span>
          </a>
        ) : (
          <div className="flex shrink-0 items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/30" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/30" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-white/30" />
            <span className="ml-1.5 flex min-w-0 flex-1 items-center gap-1 truncate rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60">
              <LuLock className="h-2.5 w-2.5 shrink-0" aria-hidden />
              <span className="truncate">{privateLabel}</span>
            </span>
          </div>
        )}

        <div className="relative flex-1">
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

            <h3 className="mt-3 text-xl font-bold leading-snug lg:text-2xl">{title}</h3>

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

            <div className="mt-6 space-y-4">
              {steps.map((step) => {
                const StepIcon = step.icon;

                return (
                  <div key={step.key}>
                    <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                      <StepIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {step.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/90">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
