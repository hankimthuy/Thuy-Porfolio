'use client';

import { useState, type ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2, FiExternalLink } from 'react-icons/fi';
import { LuChevronDown, LuHammer, LuLightbulb } from 'react-icons/lu';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { useTranslations } from 'next-intl';
import {
  COMPANY_PROJECTS,
  SIDE_PROJECTS,
  type ProjectStructure,
} from '@/lib/projects-data';
// TODO: Concept demo — bổ sung ví dụ (Figma/screenshot) rồi bật lại import + nhánh caseStudy bên dưới.
// import CaseStudyProjectCard from '@/components/projects/CaseStudyProjectCard';
import { SECTION_HEADER_TO_CONTENT } from '@/lib/layout';

interface ProjectCardProps {
  title: string;
  tags: string[];
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
  showMoreLabel: string;
  showLessLabel: string;
  cta?: {
    label: string;
    href: string;
  };
}

function highlightText(text: string, highlights?: string[]): ReactNode {
  if (!highlights?.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  );
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-bold text-plum-900">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

type ProjectItemMessages = {
  title: string;
  problemText: string;
  problemHighlights?: string[];
  solutionText: string;
  solutionHighlights?: string[];
  impactText: string;
  impactHighlights?: string[];
};

function projectToCardProps(
  project: ProjectStructure,
  item: ProjectItemMessages,
  labels: {
    problem: string;
    solution: string;
    impact: string;
    viewLiveSite: string;
    showMore: string;
    showLess: string;
  },
): ProjectCardProps {
  return {
    title: item.title,
    tags: project.tags,
    problem: highlightText(item.problemText, item.problemHighlights),
    solution: highlightText(item.solutionText, item.solutionHighlights),
    impact: highlightText(item.impactText, item.impactHighlights),
    problemLabel: labels.problem,
    solutionLabel: labels.solution,
    impactLabel: labels.impact,
    showMoreLabel: labels.showMore,
    showLessLabel: labels.showLess,
    cta: project.ctaHref ? { label: labels.viewLiveSite, href: project.ctaHref } : undefined,
  };
}

/**
 * Problem -> Solution -> Impact. One neutral chip for all three — the icon
 * carries the difference, so four cards of these don't read as colour noise.
 */
const STEP_CHIP = 'border-taupe-200 bg-taupe-100 text-plum-700';

const STEPS = [
  { key: 'problem', icon: FiAlertTriangle },
  { key: 'solution', icon: LuLightbulb },
  { key: 'impact', icon: FiBarChart2 },
] as const;

/**
 * Cycled per card (within a group) so the grid doesn't read as one flat
 * white wall — a soft Apple-Bento tint, a slim colored top bar, and matching
 * tag pills, all keyed off the same index.
 */
const CARD_TONES = [
  { bg: 'bg-white', bar: 'bg-plum-500' },
  { bg: 'bg-taupe-100/60', bar: 'bg-magenta-500' },
  { bg: 'bg-white', bar: 'bg-taupe-300' },
  { bg: 'bg-plum-50', bar: 'bg-plum-500' },
];

const TAG_TONES = [
  'border-taupe-200 bg-taupe-50 text-plum-700',
  'border-plum-500/20 bg-plum-50 text-plum-700',
];

function ProjectCard(props: ProjectCardProps & { index: number }) {
  const { title, tags, cta, index, showMoreLabel, showLessLabel } = props;
  const [expanded, setExpanded] = useState(false);

  const steps = [
    { ...STEPS[0], label: props.problemLabel, body: props.problem },
    { ...STEPS[1], label: props.solutionLabel, body: props.solution },
    { ...STEPS[2], label: props.impactLabel, body: props.impact },
  ];
  const tone = CARD_TONES[index % CARD_TONES.length];

  return (
    <article
      className={`relative overflow-hidden rounded-3xl border border-taupe-200/80 ${tone.bg} p-6 shadow-[0_4px_20px_-4px_rgba(26,15,82,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_-4px_rgba(26,15,82,0.08)] motion-reduce:hover:translate-y-0 lg:p-8`}
    >
      <span className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`} aria-hidden />

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug text-plum-900 lg:text-xl">
          {title}
        </h3>
        {cta && (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className="-mr-2 shrink-0 rounded-lg p-2 text-plum-700 transition-colors hover:bg-taupe-100 hover:text-plum-900"
            title={cta.label}
            aria-label={cta.label}
          >
            <FiExternalLink className="h-5 w-5" aria-hidden="true" />
          </a>
        )}
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag, tagIndex) => (
          <li
            key={tag}
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${TAG_TONES[tagIndex % TAG_TONES.length]}`}
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
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${STEP_CHIP}`}
              >
                <StepIcon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-plum-700">
                  {step.label}
                </p>
                <p
                  className={`mt-1 text-sm leading-relaxed text-plum-900/80 ${
                    expanded ? '' : 'line-clamp-2'
                  }`}
                >
                  {step.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-plum-700 transition-colors hover:text-plum-900"
      >
        {expanded ? showLessLabel : showMoreLabel}
        <LuChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${
            expanded ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}

function renderProjectCard(
  project: ProjectStructure,
  props: ProjectCardProps,
  index: number,
) {
  // TODO: Concept demo — uncomment khi đã có asset ví dụ cho MimoSe & CMS.
  // if (project.caseStudy) {
  //   return <CaseStudyProjectCard caseStudyId={project.caseStudy} {...props} />;
  // }
  return <ProjectCard {...props} index={index} />;
}

type ProjectGroupProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  structures: ProjectStructure[];
  cards: ProjectCardProps[];
};

function ProjectGroup({ title, subtitle, icon, structures, cards }: ProjectGroupProps) {
  return (
    <section className="space-y-5">
      <div className="flex items-start gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-taupe-200 bg-taupe-100 text-plum-700">
          {icon}
        </span>
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-plum-900 lg:text-2xl">{title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-plum-700">{subtitle}</p>
        </div>
      </div>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
        {structures.map((project, index) => (
          <div key={project.id} className="flex">
            {renderProjectCard(project, cards[index], index)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  const t = useTranslations('projects');

  const labels = {
    problem: t('problem'),
    solution: t('solution'),
    impact: t('impact'),
    viewLiveSite: t('viewLiveSite'),
    showMore: t('showMore'),
    showLess: t('showLess'),
  };

  const projectItems = t.raw('items') as Record<string, ProjectItemMessages>;
  const getItem = (id: string) => projectItems[id];

  const enterpriseCards = COMPANY_PROJECTS.map((p) =>
    projectToCardProps(p, getItem(p.id), labels),
  );
  const independentCards = SIDE_PROJECTS.map((p) =>
    projectToCardProps(p, getItem(p.id), labels),
  );

  return (
    <>
      <header className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-plum-700">
          {t('highlights')}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-plum-900 text-balance lg:text-4xl">
          {t('showcases')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-plum-700">{t('subtitle')}</p>
      </header>

      <div className={`${SECTION_HEADER_TO_CONTENT} space-y-10 lg:space-y-14`}>
        <ProjectGroup
          title={t('independentProjects')}
          subtitle={t('independentSubtitle')}
          icon={<LuHammer className="h-5 w-5" aria-hidden="true" />}
          structures={SIDE_PROJECTS}
          cards={independentCards}
        />

        <ProjectGroup
          title={t('enterpriseProjects')}
          subtitle={t('enterpriseSubtitle')}
          icon={<HiOutlineClipboardList className="h-5 w-5" aria-hidden="true" />}
          structures={COMPANY_PROJECTS}
          cards={enterpriseCards}
        />
      </div>
    </>
  );
}
