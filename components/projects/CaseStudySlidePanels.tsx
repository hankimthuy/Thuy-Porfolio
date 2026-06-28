export type CaseStudyId = 'content-platform' | 'mimose';

export type SlideVisual =
  | 'wireframe'
  | 'tokens'
  | 'responsive'
  | 'stack'
  | 'journal-flow'
  | 'mimose-tokens'
  | 'companion-ux'
  | 'mimose-stack';

const CP = {
  navy: '#0F2A44',
  teal: '#1A6B7C',
  gold: '#C9A227',
  sand: '#EDE8DC',
};

const MS = {
  plum: '#5B4B8A',
  lavender: '#C4B5FD',
  blush: '#F9A8D4',
  mist: '#F5F3FF',
};

export const CASE_STUDY_VISUALS: Record<CaseStudyId, SlideVisual[]> = {
  'content-platform': ['wireframe', 'tokens', 'responsive', 'stack'],
  mimose: ['journal-flow', 'mimose-tokens', 'companion-ux', 'mimose-stack'],
};

export function CaseStudySlideVisual({ type, compact = false }: { type: SlideVisual; compact?: boolean }) {
  const pad = compact ? 'p-3' : 'p-5';

  if (type === 'wireframe') {
    return (
      <div className={`h-full ${pad} bg-[#F4F6F8]`}>
        <div className="mb-2 h-2 w-1/3 rounded bg-[#CBD5E1]" />
        <div className="mb-3 h-8 rounded bg-[#E2E8F0]" />
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 space-y-2">
            <div className="h-2 w-full rounded bg-[#E2E8F0]" />
            <div className="h-2 w-5/6 rounded bg-[#E2E8F0]" />
            <div className="h-2 w-4/6 rounded bg-[#E2E8F0]" />
            <div className={`${compact ? 'h-10' : 'h-16'} rounded bg-[#E2E8F0]/80`} />
          </div>
          <div className="space-y-2">
            <div className={`${compact ? 'h-14' : 'h-20'} rounded bg-[#E2E8F0]`} />
            <div className="h-2 w-full rounded bg-[#E2E8F0]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'tokens') {
    return (
      <div className={`flex h-full flex-col justify-center gap-3 ${pad}`} style={{ backgroundColor: CP.sand }}>
        <div className="flex gap-2">
          {[CP.navy, CP.teal, CP.gold].map((c) => (
            <div key={c} className="flex-1">
              <div className={`${compact ? 'h-8' : 'h-12'} rounded-lg shadow-sm`} style={{ backgroundColor: c }} />
              <p className="mt-1 truncate text-[9px] font-mono text-[#64748B]">{c}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1 rounded-lg bg-white/70 p-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Type</p>
          <p className={`${compact ? 'text-sm' : 'text-lg'} font-bold`} style={{ color: CP.navy }}>
            Display heading
          </p>
          <p className={`${compact ? 'text-[10px]' : 'text-xs'} text-[#64748B]`}>Body · readable measure</p>
        </div>
      </div>
    );
  }

  if (type === 'responsive') {
    return (
      <div className={`flex h-full items-center justify-center gap-3 ${pad} bg-[#F8FAFC]`}>
        <div className={`${compact ? 'w-14' : 'w-20'} rounded-xl border-2 border-[#CBD5E1] bg-white p-1.5 shadow-sm`}>
          <div className="mb-1 h-1.5 w-1/2 rounded bg-[#E2E8F0]" />
          <div className="space-y-1">
            <div className="h-6 rounded bg-[#E2E8F0]" />
            <div className="h-1.5 w-full rounded bg-[#E2E8F0]" />
            <div className="h-1.5 w-4/5 rounded bg-[#E2E8F0]" />
          </div>
        </div>
        <div
          className={`hidden flex-1 sm:block ${compact ? 'max-w-[120px]' : 'max-w-[200px]'} rounded-lg border border-[#CBD5E1] bg-white p-2 shadow-sm`}
        >
          <div className="mb-2 flex gap-1">
            <div className="h-1.5 flex-1 rounded bg-[#E2E8F0]" />
            <div className="h-1.5 w-4 rounded bg-[#E2E8F0]" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2 h-10 rounded bg-[#E2E8F0]/90" />
            <div className="h-10 rounded bg-[#E2E8F0]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'stack') {
    return (
      <div className={`flex h-full flex-wrap content-center gap-2 ${pad} bg-[#F0F4F8]`}>
        {['Figma', 'Headless CMS', 'Next.js', 'Technical SEO'].map((chip) => (
          <span
            key={chip}
            className={`rounded-full border border-[#CBD5E1] bg-white font-semibold text-[#424874] shadow-sm ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-[11px]'}`}
          >
            {chip}
          </span>
        ))}
        <div className={`mt-1 w-full ${compact ? 'h-8' : 'h-12'} rounded-lg border border-dashed border-[#94A3B8] bg-white/50`}>
          <p className={`p-2 text-[#64748B] ${compact ? 'text-[8px]' : 'text-[10px]'}`}>
            CMS admin ↔ API ↔ SSR storefront + metadata
          </p>
        </div>
      </div>
    );
  }

  if (type === 'journal-flow') {
    return (
      <div className={`flex h-full flex-col justify-center gap-2 ${pad}`} style={{ backgroundColor: MS.mist }}>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-white px-2.5 py-2 shadow-sm">
          <div className={`${compact ? 'h-1.5' : 'h-2'} w-16 rounded bg-[#E9D5FF]`} />
          <div className={`mt-1.5 ${compact ? 'h-1' : 'h-1.5'} w-full rounded bg-[#F3E8FF]`} />
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-bl-sm px-2.5 py-2 shadow-sm" style={{ backgroundColor: MS.plum }}>
          <div className={`${compact ? 'h-1' : 'h-1.5'} w-20 rounded bg-white/40`} />
          <div className={`mt-1.5 ${compact ? 'h-1' : 'h-1.5'} w-full rounded bg-white/25`} />
          <div className={`mt-1 ${compact ? 'h-1' : 'h-1.5'} w-3/4 rounded bg-white/25`} />
        </div>
        <div className="mx-auto mt-1 h-6 w-6 rounded-full border-2 border-dashed border-[#C4B5FD]" />
      </div>
    );
  }

  if (type === 'mimose-tokens') {
    return (
      <div className={`flex h-full flex-col justify-center gap-3 ${pad}`} style={{ backgroundColor: MS.mist }}>
        <div className="flex gap-2">
          {[MS.plum, MS.lavender, MS.blush].map((c) => (
            <div key={c} className="flex-1">
              <div className={`${compact ? 'h-8' : 'h-12'} rounded-lg shadow-sm`} style={{ backgroundColor: c }} />
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white/80 p-2 text-center">
          <p className={`font-semibold text-[#5B4B8A] ${compact ? 'text-xs' : 'text-sm'}`}>Calm · Reflective</p>
          <p className={`text-[#7C6BA8] ${compact ? 'text-[9px]' : 'text-[10px]'}`}>Low-friction journaling tone</p>
        </div>
      </div>
    );
  }

  if (type === 'companion-ux') {
    return (
      <div className={`grid h-full grid-cols-2 gap-2 ${pad}`} style={{ backgroundColor: '#FAFAFA' }}>
        <div className="flex flex-col rounded-lg border border-[#E9D5FF] bg-white p-2">
          <p className={`font-bold text-[#5B4B8A] ${compact ? 'text-[8px]' : 'text-[10px]'}`}>Innerverse</p>
          <div className={`mt-1 flex-1 rounded bg-[#F5F3FF] ${compact ? 'min-h-[40px]' : 'min-h-[56px]'}`} />
        </div>
        <div className="flex flex-col rounded-lg border border-[#FBCFE8] bg-white p-2">
          <p className={`font-bold text-[#9D174D] ${compact ? 'text-[8px]' : 'text-[10px]'}`}>Outerverse</p>
          <div className={`mt-1 flex-1 rounded bg-[#FDF2F8] ${compact ? 'min-h-[40px]' : 'min-h-[56px]'}`} />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex h-full flex-wrap content-center gap-2 ${pad}`} style={{ backgroundColor: MS.mist }}>
      {['React', 'Spring Boot', 'Proactive AI', 'Figma'].map((chip) => (
        <span
          key={chip}
          className={`rounded-full border border-[#DDD6FE] bg-white font-semibold text-[#5B4B8A] shadow-sm ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-[11px]'}`}
        >
          {chip}
        </span>
      ))}
      <div className={`mt-1 w-full ${compact ? 'h-8' : 'h-12'} rounded-lg border border-dashed border-[#C4B5FD] bg-white/60`}>
        <p className={`p-2 text-[#7C6BA8] ${compact ? 'text-[8px]' : 'text-[10px]'}`}>
          Journal UI ↔ AI companion ↔ insight layers
        </p>
      </div>
    </div>
  );
}
