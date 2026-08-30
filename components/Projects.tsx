'use client';

import type { ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2, FiExternalLink } from 'react-icons/fi';
import { LuHammer, LuLightbulb } from 'react-icons/lu';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { useTranslations } from 'next-intl';
import {
  COMPANY_PROJECTS,
  SIDE_PROJECTS,
  type ProjectStructure,
} from '@/lib/projects-data';
// TODO: Concept demo — bổ sung ví dụ (Figma/screenshot) rồi bật lại import + nhánh caseStudy bên dưới.
// import CaseStudyProjectCard from '@/components/projects/CaseStudyProjectCard';
import { BENTO_CARD_BASE, SECTION_HEADER_TO_CONTENT } from '@/lib/layout';

interface ProjectCardProps {
  title: string;
  tags: string[];
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
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
      <strong key={i} className="font-bold text-ocean-900">
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
  labels: { problem: string; solution: string; impact: string; viewLiveSite: string },
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
    cta: project.ctaHref ? { label: labels.viewLiveSite, href: project.ctaHref } : undefined,
  };
}

/**
 * Problem -> Solution -> Impact. One neutral chip for all three — the icon
 * carries the difference, so four cards of these don't read as colour noise.
 */
const STEP_CHIP = 'border-sand-200 bg-sand-100 text-ocean-700';

const STEPS = [
  { key: 'problem', icon: FiAlertTriangle },
  { key: 'solution', icon: LuLightbulb },
  { key: 'impact', icon: FiBarChart2 },
] as const;

function ProjectCard(props: ProjectCardProps) {
  const { title, tags, cta } = props;

  const steps = [
    { ...STEPS[0], label: props.problemLabel, body: props.problem },
    { ...STEPS[1], label: props.solutionLabel, body: props.solution },
    { ...STEPS[2], label: props.impactLabel, body: props.impact },
  ];

  return (
    <article
      className={`${BENTO_CARD_BASE} h-full bg-surface p-6 transition duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-bento-hover motion-reduce:hover:translate-y-0 lg:p-8`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug text-ocean-900 lg:text-xl">
          {title}
        </h3>
        {cta && (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className="-mr-2 shrink-0 rounded-lg p-2 text-ocean-700 transition-colors hover:bg-sand-100 hover:text-ocean-900"
            title={cta.label}
            aria-label={cta.label}
          >
            <FiExternalLink className="h-5 w-5" aria-hidden="true" />
          </a>
        )}
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-sand-200 bg-sand-50 px-3 py-1 text-xs font-semibold text-ocean-700"
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
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ocean-700">
                  {step.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ocean-900/80">
                  {step.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function renderProjectCard(
  project: ProjectStructure,
  props: ProjectCardProps,
) {
  // TODO: Concept demo — uncomment khi đã có asset ví dụ cho MimoSe & CMS.
  // if (project.caseStudy) {
  //   return <CaseStudyProjectCard caseStudyId={project.caseStudy} {...props} />;
  // }
  return <ProjectCard {...props} />;
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
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sand-200 bg-sand-100 text-ocean-700">
          {icon}
        </span>
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-ocean-900 lg:text-2xl">{title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-ocean-700">{subtitle}</p>
        </div>
      </div>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
        {structures.map((project, index) => (
          <div key={project.id} className="flex">
            {renderProjectCard(project, cards[index])}
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
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ocean-700">
          {t('highlights')}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ocean-900 text-balance lg:text-4xl">
          {t('showcases')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ocean-700">{t('subtitle')}</p>
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
