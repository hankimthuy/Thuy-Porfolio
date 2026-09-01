'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { SHOWCASE_ORDER, type ProjectStructure } from '@/lib/projects-data';
import ShowcasePanel from '@/components/projects/ShowcasePanel';
import { SECTION_HEADER_TO_CONTENT } from '@/lib/layout';

/** How long each panel stays open before auto-advancing to the next. */
const AUTO_ADVANCE_MS = 4500;
/** How long a manual hover/tap/focus pauses auto-advance before it resumes. */
const RESUME_AFTER_MS = 8000;

function highlightText(text: string, highlights?: string[]): ReactNode {
  if (!highlights?.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  );
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-bold text-white">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

type ProjectItemMessages = {
  title: string;
  shortTitle: string;
  tagline: string;
  problemText: string;
  problemHighlights?: string[];
  solutionText: string;
  solutionHighlights?: string[];
  impactText: string;
  impactHighlights?: string[];
};

export default function Projects() {
  const t = useTranslations('projects');
  // Second project opens by default, per the reference layout.
  const [activeIndex, setActiveIndex] = useState(1);
  const [autoPaused, setAutoPaused] = useState(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const projectItems = t.raw('items') as Record<string, ProjectItemMessages>;

  const panels = SHOWCASE_ORDER.map((project: ProjectStructure) => {
    const item = projectItems[project.id];

    return {
      id: project.id,
      shortTitle: item.shortTitle,
      tagline: item.tagline,
      categoryLabel: project.category === 'company' ? t('enterpriseProjects') : t('independentProjects'),
      title: item.title,
      tags: project.tags,
      problem: highlightText(item.problemText, item.problemHighlights),
      solution: highlightText(item.solutionText, item.solutionHighlights),
      impact: highlightText(item.impactText, item.impactHighlights),
      cta: project.ctaHref ? { label: t('viewLiveSite'), href: project.ctaHref } : undefined,
    };
  });

  // Cycles through the panels on its own so a 5-wide row doesn't just sit
  // there — pauses for a while whenever the visitor hovers/taps/tabs to one
  // themselves, then picks the cycle back up.
  useEffect(() => {
    if (autoPaused) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % panels.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [autoPaused, panels.length]);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  const activate = (index: number) => {
    setActiveIndex(index);
    setAutoPaused(true);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => setAutoPaused(false), RESUME_AFTER_MS);
  };

  return (
    <>
      <header className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{t('highlights')}</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground text-balance lg:text-4xl">
          {t('showcases')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{t('subtitle')}</p>
      </header>

      <div
        className={`flex flex-col gap-3 lg:h-[560px] lg:flex-row ${SECTION_HEADER_TO_CONTENT}`}
      >
        {panels.map((panel, index) => (
          <ShowcasePanel
            key={panel.id}
            index={index}
            active={index === activeIndex}
            onActivate={() => activate(index)}
            shortTitle={panel.shortTitle}
            tagline={panel.tagline}
            categoryLabel={panel.categoryLabel}
            title={panel.title}
            tags={panel.tags}
            problem={panel.problem}
            solution={panel.solution}
            impact={panel.impact}
            problemLabel={t('problem')}
            solutionLabel={t('solution')}
            impactLabel={t('impact')}
            cta={panel.cta}
            privateLabel={t('privateProject')}
          />
        ))}
      </div>
    </>
  );
}
