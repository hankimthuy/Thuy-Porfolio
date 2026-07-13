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
import { SECTION_INNER, SECTION_SCROLL_MARGIN, SECTION_HEADER_TO_CONTENT } from '@/lib/layout';

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
      <strong key={i} className="font-semibold text-indigo-900">
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

function Icon({ name, className }: { name: 'warning' | 'lightbulb' | 'chart'; className?: string }) {
  if (name === 'warning') return <FiAlertTriangle aria-hidden="true" className={className} />;
  if (name === 'lightbulb') return <LuLightbulb aria-hidden="true" className={className} />;
  return <FiBarChart2 aria-hidden="true" className={className} />;
}

function ProjectCard({
  title,
  tags,
  problem,
  solution,
  impact,
  problemLabel,
  solutionLabel,
  impactLabel,
  cta,
}: ProjectCardProps) {
  return (
    <div className="relative h-full rounded-[14px] overflow-hidden border border-indigo-100 bg-white shadow-sm transition-transform duration-300 will-change-transform hover:shadow-xl hover:shadow-indigo-200/60 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4EEFF]/60 via-white to-[#DCD6F7]/40" />

      <div className="relative z-10 p-5 lg:p-8">
        <div className="flex items-start justify-between gap-3 lg:gap-4">
          <h3 className="mt-0 text-lg lg:text-[26px] font-bold leading-[1.2] text-[#424874]">
            {title}
          </h3>
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex-shrink-0 text-indigo-400 hover:text-indigo-600 transition-colors p-2 -mr-2 rounded-full hover:bg-indigo-50"
              title={cta.label}
              aria-label={cta.label}
            >
              <FiExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5 lg:mt-4 lg:gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-[#424874] border border-indigo-100/80 px-2.5 py-1 rounded-[10px] text-[12px] lg:px-3 lg:py-1.5 lg:text-[13px] font-semibold tracking-wide shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 lg:mt-8">
          <div className="relative space-y-4 lg:space-y-6 text-[14px] leading-[1.5] lg:text-[15px] lg:leading-[1.65] text-[#424874]/90">
            <div className="pointer-events-none absolute left-[13px] top-5 bottom-5 z-0 border-l-2 border-dashed border-indigo-200/70 lg:left-[15px] lg:top-6 lg:bottom-6" />

            <div className="flex gap-3 lg:gap-4">
              <div className="relative w-7 flex-shrink-0 flex justify-center lg:w-8">
                <div className="relative z-10 h-7 w-7 rounded-[10px] bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-sm lg:h-8 lg:w-8">
                  <Icon name="warning" className="h-4 w-4 lg:h-4.5 lg:w-4.5" />
                </div>
              </div>
              <div className="min-w-0 pt-1">
                <div className="text-[#424874] font-bold text-[12px] lg:text-[13px] uppercase tracking-wider mb-0.5 lg:mb-1">
                  {problemLabel}
                </div>
                <div className="text-gray-600">{problem}</div>
              </div>
            </div>

            <div className="flex gap-3 lg:gap-4">
              <div className="relative w-7 flex-shrink-0 flex justify-center lg:w-8">
                <div className="relative z-10 h-7 w-7 rounded-[10px] bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-sm lg:h-8 lg:w-8">
                  <Icon name="lightbulb" className="h-4 w-4 lg:h-4.5 lg:w-4.5" />
                </div>
              </div>
              <div className="min-w-0 pt-1">
                <div className="text-[#424874] font-bold text-[12px] lg:text-[13px] uppercase tracking-wider mb-0.5 lg:mb-1">
                  {solutionLabel}
                </div>
                <div className="text-gray-600">{solution}</div>
              </div>
            </div>

            <div className="flex gap-3 lg:gap-4">
              <div className="relative w-7 flex-shrink-0 flex justify-center lg:w-8">
                <div className="relative z-10 h-7 w-7 rounded-[10px] bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-sm lg:h-8 lg:w-8">
                  <Icon name="chart" className="h-4 w-4 lg:h-4.5 lg:w-4.5" />
                </div>
              </div>
              <div className="min-w-0 pt-1">
                <div className="text-[#424874] font-bold text-[12px] lg:text-[13px] uppercase tracking-wider mb-0.5 lg:mb-1">
                  {impactLabel}
                </div>
                <div className="text-gray-600">{impact}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  iconClassName: string;
  structures: ProjectStructure[];
  cards: ProjectCardProps[];
};

function ProjectGroup({ title, subtitle, icon, iconClassName, structures, cards }: ProjectGroupProps) {
  return (
    <div className="space-y-4 lg:space-y-5">
      <div className="flex items-start gap-3 lg:gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-sm lg:h-12 lg:w-12 ${iconClassName}`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl lg:text-2xl font-bold text-[#424874]">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#424874]/70 lg:mt-2">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:items-stretch lg:gap-6">
        {structures.map((project, index) => (
          <div
            key={project.id}
            className="flex w-full lg:w-[calc((100%-1.5rem)/2)] lg:min-w-[360px]"
          >
            <div className="flex w-full min-h-full flex-1">{renderProjectCard(project, cards[index])}</div>
          </div>
        ))}
      </div>
    </div>
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
    <section id="projects" className={`relative ${SECTION_SCROLL_MARGIN} overflow-hidden bg-[#f8f9ff]`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className={`relative z-10 ${SECTION_INNER}`}>
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#424874] lg:text-[56px]">
            {t('showcases')}
          </h2>
          <p className="mt-2 text-base text-[#424874]/80 lg:mt-3 lg:text-xl">{t('subtitle')}</p>
          <p className="mt-1.5 text-sm text-[#424874]/65 lg:mt-2 lg:text-base">{t('highlights')}</p>
        </div>

        <div className={`${SECTION_HEADER_TO_CONTENT} space-y-8 lg:space-y-14`}>
          <ProjectGroup
            title={t('independentProjects')}
            subtitle={t('independentSubtitle')}
            icon={<LuHammer className="h-6 w-6" aria-hidden="true" />}
            iconClassName="bg-pink-100 text-pink-600"
            structures={SIDE_PROJECTS}
            cards={independentCards}
          />

          <ProjectGroup
            title={t('enterpriseProjects')}
            subtitle={t('enterpriseSubtitle')}
            icon={<HiOutlineClipboardList className="h-6 w-6" aria-hidden="true" />}
            iconClassName="bg-indigo-100 text-indigo-600"
            structures={COMPANY_PROJECTS}
            cards={enterpriseCards}
          />
        </div>
      </div>
    </section>
  );
}
