'use client';

import type { ReactNode } from 'react';
import { FiAlertTriangle, FiBarChart2 } from 'react-icons/fi';
import { LuLightbulb } from 'react-icons/lu';

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
  illustrationVariant?: 'manufacturing' | 'ai' | 'talent';
}

function Icon({ name, className }: { name: 'warning' | 'lightbulb' | 'chart'; className?: string }) {
  if (name === 'warning') return <FiAlertTriangle aria-hidden="true" className={className} />;
  if (name === 'lightbulb') return <LuLightbulb aria-hidden="true" className={className} />;
  return <FiBarChart2 aria-hidden="true" className={className} />;
}

function ProjectCard({ title, tags, problem, solution, impact, cta, illustrationVariant }: ProjectCardProps) {
  return (
    <div className="relative rounded-[14px] overflow-hidden border border-indigo-100 bg-white shadow-sm transition-transform duration-200 will-change-transform hover:shadow-lg hover:shadow-indigo-200/60 hover:scale-[1.01]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4EEFF]/55 via-white to-[#DCD6F7]/40" />

      <div className="relative z-10 p-6">
        <h3 className="mt-0 text-xl lg:text-[24px] font-semibold leading-[1.15] text-[#424874]">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-[#424874] border border-indigo-100 px-3 py-1.5 rounded-[10px] text-sm font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <div className="relative space-y-5 text-[15px] leading-[1.65] text-[#424874]/90">
            <div className="pointer-events-none absolute left-4 top-5 bottom-5 z-0 border-l border-indigo-200/70" />
            <div className="pointer-events-none absolute left-4 bottom-5 z-0 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full border border-indigo-200/70 bg-white" />
            <div className="flex gap-3">
              <div className="relative w-8 flex-shrink-0 flex justify-center">
                <div className="relative z-10 mt-0.5 h-8 w-8 rounded-[10px] bg-white border border-indigo-100 text-[#424874] flex items-center justify-center shadow-sm">
                  <Icon name="warning" className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-[#424874]/70 font-semibold">Problem:</div>
                <div className="mt-1">{problem}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative w-8 flex-shrink-0 flex justify-center">
                <div className="relative z-10 mt-0.5 h-8 w-8 rounded-[10px] bg-white border border-indigo-100 text-[#424874] flex items-center justify-center shadow-sm">
                  <Icon name="lightbulb" className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-[#424874]/70 font-semibold">Solution:</div>
                <div className="mt-1">{solution}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative w-8 flex-shrink-0 flex justify-center">
                <div className="relative z-10 mt-0.5 h-8 w-8 rounded-[10px] bg-white border border-indigo-100 text-[#424874] flex items-center justify-center shadow-sm">
                  <Icon name="chart" className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-[#424874]/70 font-semibold">Impact:</div>
                <div className="mt-1">{impact}</div>
              </div>
            </div>
          </div>
        </div>

        {cta && (
          <div className="mt-6">
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[12px] px-5 py-3 text-sm font-semibold bg-[#424874] text-white shadow-sm transition-colors hover:bg-[#34385f] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: 'Centralized Manufacturing Lifecycle Platform',
      tags: ['Angular 20+', 'Figma', 'Restful API'],
      problem: (
        <>
          <strong className="font-bold text-indigo-900">Fragmented workflows</strong> and{' '}
          <strong className="font-bold text-indigo-900">data silos</strong> made tracking the end-to-end manufacturing lifecycle impossible.
        </>
      ),
      solution: (
        <>
          Architected a <strong className="font-bold text-indigo-900">unified platform</strong> integrating inventory,{' '}
          <strong className="font-bold text-indigo-900">BOM management</strong>, invoicing, and{' '}
          <strong className="font-bold text-indigo-900">compliance audits</strong>.
        </>
      ),
      impact: (
        <>
          Eliminated data redundancy, ensuring <strong className="font-bold text-indigo-900">100% operational precision</strong>.
        </>
      ),
      illustrationVariant: 'manufacturing',
    },
    {
      title: 'MimoSe: Make Sense of Me',
      tags: ['React', 'Spring Boot', 'Leading-self', 'AI', 'Figma'],
      problem: (
        <>
          <strong className="font-bold text-indigo-900">High friction</strong> in traditional journaling leads to inconsistent self-awareness.
        </>
      ),
      solution: (
        <>
          A <strong className="font-bold text-indigo-900">Low-Friction Framework</strong> powered by{' '}
          <strong className="font-bold text-indigo-900">Proactive AI</strong>—acting as a companion through the{' '}
          <strong className="font-bold text-indigo-900">Innerverse</strong> and{' '}
          <strong className="font-bold text-indigo-900">Outerverse</strong>.
        </>
      ),
      impact: (
        <>
          Empowered <strong className="font-bold text-indigo-900">Personal Autonomy</strong> using AI-driven insights.
        </>
      ),
      cta: {
        label: 'Visit MimoSe',
        href: 'https://www.mimose.io.vn/',
      },
      illustrationVariant: 'ai',
    },
    {
      title: 'Talent Development Platform',
      tags: ['Angular', 'Spring Boot'],
      problem: (
        <>
          Alignment gap between <strong className="font-bold text-indigo-900">individual aspirations</strong> and organizational goals.
        </>
      ),
      solution: (
        <>
          Developed an end-to-end platform for managers and L&D teams to co-create{' '}
          <strong className="font-bold text-indigo-900">personalized learning roadmaps</strong>.
        </>
      ),
      impact: (
        <>
          Streamlined <strong className="font-bold text-indigo-900">performance evaluation</strong> and enhanced employee engagement.
        </>
      ),
      illustrationVariant: 'talent',
    },
  ];

  return (
    <section id="projects" className="py-10 lg:py-[40px] bg-white">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[150px]">
        <div className="text-center">
          <h2 className="text-3xl lg:text-[56px] font-semibold leading-[1.1] text-[#424874]">Projects</h2>
          <p className="mt-4 text-base lg:text-[18px] text-[#424874]/80 max-w-[920px] mx-auto">
            A selection of product and platform work focused on clarity, scalability, and measurable outcomes.
          </p>
        </div>

        <div className="mt-10 lg:mt-[50px] grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}