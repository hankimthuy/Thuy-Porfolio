'use client';

import type { ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2 } from 'react-icons/fi';
import { LuLightbulb } from 'react-icons/lu';
import { HiOutlineOfficeBuilding, HiOutlineLightBulb } from 'react-icons/hi';
import { COMPANY_PROJECTS, SIDE_PROJECTS, type ProjectData } from '@/lib/projects-data';
import { SECTION_INNER, SECTION_SCROLL_MARGIN, SECTION_HEADER_TO_CONTENT } from '@/lib/layout';

interface ProjectCardProps {
  title: string;
  tags: string[];
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
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

function projectToCardProps(project: ProjectData): ProjectCardProps {
  return {
    title: project.title,
    tags: project.tags,
    problem: highlightText(project.problemText, project.problemHighlights),
    solution: highlightText(project.solutionText, project.solutionHighlights),
    impact: highlightText(project.impactText, project.impactHighlights),
    cta: project.cta,
  };
}

function Icon({ name, className }: { name: 'warning' | 'lightbulb' | 'chart'; className?: string }) {
  if (name === 'warning') return <FiAlertTriangle aria-hidden="true" className={className} />;
  if (name === 'lightbulb') return <LuLightbulb aria-hidden="true" className={className} />;
  return <FiBarChart2 aria-hidden="true" className={className} />;
}

function ProjectCard({ title, tags, problem, solution, impact, cta }: ProjectCardProps) {
  return (
    <div className="relative h-full rounded-[14px] overflow-hidden border border-indigo-100 bg-white shadow-sm transition-transform duration-300 will-change-transform hover:shadow-xl hover:shadow-indigo-200/60 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4EEFF]/60 via-white to-[#DCD6F7]/40" />

      <div className="relative z-10 p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="mt-0 text-xl lg:text-[26px] font-bold leading-[1.2] text-[#424874]">
            {title}
          </h3>
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex-shrink-0 text-indigo-400 hover:text-indigo-600 transition-colors p-2 -mr-2 rounded-full hover:bg-indigo-50"
              title={cta.label}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-[#424874] border border-indigo-100/80 px-3 py-1.5 rounded-[10px] text-[13px] font-semibold tracking-wide shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <div className="relative space-y-6 text-[15px] leading-[1.65] text-[#424874]/90">
            <div className="pointer-events-none absolute left-[15px] top-6 bottom-6 z-0 border-l-2 border-dashed border-indigo-200/70" />

            <div className="flex gap-4">
              <div className="relative w-8 flex-shrink-0 flex justify-center">
                <div className="relative z-10 h-8 w-8 rounded-[10px] bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-sm">
                  <Icon name="warning" className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="min-w-0 pt-1">
                <div className="text-[#424874] font-bold text-[13px] uppercase tracking-wider mb-1">Problem</div>
                <div className="text-gray-600">{problem}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative w-8 flex-shrink-0 flex justify-center">
                <div className="relative z-10 h-8 w-8 rounded-[10px] bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-sm">
                  <Icon name="lightbulb" className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="min-w-0 pt-1">
                <div className="text-[#424874] font-bold text-[13px] uppercase tracking-wider mb-1">Solution</div>
                <div className="text-gray-600">{solution}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative w-8 flex-shrink-0 flex justify-center">
                <div className="relative z-10 h-8 w-8 rounded-[10px] bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-sm">
                  <Icon name="chart" className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="min-w-0 pt-1">
                <div className="text-[#424874] font-bold text-[13px] uppercase tracking-wider mb-1">Impact</div>
                <div className="text-gray-600">{impact}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const companyProjects = COMPANY_PROJECTS.map(projectToCardProps);
  const sideProjects = SIDE_PROJECTS.map(projectToCardProps);

  return (
    <section id="projects" className={`relative ${SECTION_SCROLL_MARGIN} overflow-hidden bg-[#f8f9ff]`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className={`relative z-10 ${SECTION_INNER}`}>
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#424874] lg:text-[56px]">
            Showcases
          </h2>
          <p className="mt-3 text-lg text-[#424874]/80 lg:text-xl">
            Focused on clarity, scalability, and measurable outcomes
          </p>
          <p className="mt-2 text-sm text-[#424874]/65 lg:text-base">
            Bosch enterprise · MimoSe · Headless CMS (live)
          </p>
        </div>

        <div className={`${SECTION_HEADER_TO_CONTENT} grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10`}>
          <div className="flex items-center gap-4 order-1 lg:order-none mb-2 lg:mb-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm">
              <HiOutlineOfficeBuilding className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#424874]">Company Projects</h3>
              <p className="mt-2 text-sm text-[#424874]/70">Enterprise-scale platforms & solutions</p>
            </div>
          </div>

          <div className="flex items-center gap-4 order-4 lg:order-none mt-6 lg:mt-0 mb-2 lg:mb-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 shadow-sm">
              <HiOutlineLightBulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#424874]">Side Projects</h3>
              <p className="mt-2 text-sm text-[#424874]/70">Human-Centered Product Lab</p>
            </div>
          </div>

          <div className="order-2 lg:order-none h-full">
            <ProjectCard {...companyProjects[0]} />
          </div>
          <div className="order-5 lg:order-none h-full">
            <ProjectCard {...sideProjects[0]} />
          </div>

          <div className="order-3 lg:order-none h-full">
            <ProjectCard {...companyProjects[1]} />
          </div>
          <div className="order-6 lg:order-none h-full">
            <ProjectCard {...sideProjects[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
