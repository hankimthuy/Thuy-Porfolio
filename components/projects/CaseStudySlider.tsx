'use client';

import { useCallback, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  CaseStudySlideVisual,
  CASE_STUDY_VISUALS,
  type CaseStudyId,
} from '@/components/projects/CaseStudySlidePanels';

export type CaseStudySlide = {
  title: string;
  caption: string;
};

type Props = {
  caseStudyId: CaseStudyId;
  slides: CaseStudySlide[];
  compact?: boolean;
  ariaLabel: string;
  prevLabel: string;
  nextLabel: string;
};

export default function CaseStudySlider({
  caseStudyId,
  slides,
  compact = false,
  ariaLabel,
  prevLabel,
  nextLabel,
}: Props) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const visuals = CASE_STUDY_VISUALS[caseStudyId];

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  const slide = slides[index];
  const visual = visuals[index] ?? visuals[0];

  return (
    <div className="w-full" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div
        className={`overflow-hidden rounded-xl border border-taupe-200 bg-surface shadow-inner ${compact ? 'h-[148px]' : 'h-[220px] sm:h-[260px]'}`}
      >
        <CaseStudySlideVisual type={visual} compact={compact} />
      </div>

      <div className={`flex items-start justify-between gap-2 ${compact ? 'mt-2' : 'mt-3'}`}>
        <div className="min-w-0 flex-1">
          <p className={`font-semibold text-foreground ${compact ? 'text-xs' : 'text-sm'}`}>{slide.title}</p>
          {!compact && (
            <p className="mt-0.5 text-xs leading-snug text-muted/80">{slide.caption}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => go(-1)}
            className="rounded-lg border border-taupe-200 p-1.5 text-muted transition-colors hover:bg-taupe-100 hover:text-foreground"
            aria-label={prevLabel}
          >
            <FiChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="rounded-lg border border-taupe-200 p-1.5 text-muted transition-colors hover:bg-taupe-100 hover:text-foreground"
            aria-label={nextLabel}
          >
            <FiChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-2 flex justify-center gap-1.5" role="tablist" aria-label={ariaLabel}>
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.title}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-plum-500' : 'w-1.5 bg-taupe-200'}`}
          />
        ))}
      </div>
    </div>
  );
}
