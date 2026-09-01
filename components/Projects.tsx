'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { SHOWCASE_ORDER, type ProjectStructure } from '@/lib/projects-data';
import ShowcasePanel from '@/components/projects/ShowcasePanel';
import type { CaseStudySlide } from '@/components/projects/CaseStudySlider';
import type { CaseStudyId } from '@/components/projects/CaseStudySlidePanels';
import { SECTION_HEADER_TO_CONTENT } from '@/lib/layout';

function highlightText(text: string, highlights?: string[]): ReactNode {
  if (!highlights?.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  );
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-bold text-foreground">
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

/** messages/*.json keys projects.caseStudy.<key>, camelCased from the project id. */
const CASE_STUDY_KEY: Record<string, string> = {
  'content-platform': 'contentPlatform',
  mimose: 'mimose',
  'talent-development': 'talentDevelopment',
  'manufacturing-lifecycle': 'manufacturingLifecycle',
};

export default function Projects() {
  const t = useTranslations('projects');

  const railRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const projectItems = t.raw('items') as Record<string, ProjectItemMessages>;
  const caseStudies = t.raw('caseStudy') as Record<string, { slides: CaseStudySlide[] }>;

  const panels = SHOWCASE_ORDER.map((project: ProjectStructure) => {
    const item = projectItems[project.id];
    const caseStudyKey = CASE_STUDY_KEY[project.id];

    return {
      id: project.id,
      caseStudyId: project.id as CaseStudyId,
      categoryLabel: project.category === 'company' ? t('enterpriseProjects') : t('independentProjects'),
      title: item.title,
      tags: project.tags,
      problem: highlightText(item.problemText, item.problemHighlights),
      solution: highlightText(item.solutionText, item.solutionHighlights),
      impact: highlightText(item.impactText, item.impactHighlights),
      cta: project.ctaHref ? { label: t('viewLiveSite'), href: project.ctaHref } : undefined,
      slides: caseStudies[caseStudyKey].slides,
    };
  });

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    // A callback only carries entries whose ratio crossed a threshold since
    // the last firing, not every observed panel's current state — so during
    // a fast programmatic scroll (clicking a dot 3 panels away) the last
    // batch can be the panel being scrolled *away* from, not the one landed
    // on. Track every panel's last-known ratio ourselves and always pick the
    // max across all of them, not just whatever happened to be in this batch.
    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));

        let bestIndex = -1;
        let bestRatio = 0;
        panelRefs.current.forEach((panel, index) => {
          const ratio = panel ? (ratios.get(panel) ?? 0) : 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });
        if (bestIndex !== -1) setActiveIndex(bestIndex);
      },
      { root: rail, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    panelRefs.current.forEach((panel) => panel && observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, panels.length - 1));
    panelRefs.current[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
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

      <div className={SECTION_HEADER_TO_CONTENT}>
        <div className="flex items-center justify-end gap-2 pb-3">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label={t('previousProject')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-taupe-200 text-muted transition-colors hover:border-plum-500 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            <LuChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === panels.length - 1}
            aria-label={t('nextProject')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-taupe-200 text-muted transition-colors hover:border-plum-500 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            <LuChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10"
        >
          {panels.map((panel, index) => (
            <ShowcasePanel
              key={panel.id}
              ref={(el) => {
                panelRefs.current[index] = el;
              }}
              index={index}
              caseStudyId={panel.caseStudyId}
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
              slides={panel.slides}
              sliderLabel={t('caseStudy.sliderLabel')}
              prevSlideLabel={t('caseStudy.prevSlide')}
              nextSlideLabel={t('caseStudy.nextSlide')}
              disclaimer={t('caseStudy.disclaimer')}
            />
          ))}
        </div>

        <div className="mt-1 flex items-center justify-center gap-2">
          {panels.map((panel, index) => (
            <button
              key={panel.id}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={panel.title}
              aria-current={index === activeIndex}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                index === activeIndex
                  ? 'bg-plum-500 text-white'
                  : 'bg-taupe-100 text-muted hover:bg-taupe-200'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
