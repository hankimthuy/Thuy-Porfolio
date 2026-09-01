export type CaseStudyId =
  | 'content-platform'
  | 'mimose'
  | 'manufacturing-lifecycle'
  | 'talent-development';

export type SlideVisual =
  | 'wireframe'
  | 'tokens'
  | 'responsive'
  | 'stack'
  | 'journal-flow'
  | 'mimose-tokens'
  | 'companion-ux'
  | 'mimose-stack'
  | 'mfg-dashboard'
  | 'mfg-tokens'
  | 'mfg-workflow'
  | 'mfg-stack'
  | 'talent-roadmap'
  | 'talent-tokens'
  | 'talent-alignment'
  | 'talent-stack';

/**
 * Each project gets its own small fictional palette here — these represent
 * the distinct visual identity designed *for that client/product*, not the
 * portfolio's own brand colors, so they intentionally stay fixed hex rather
 * than the reactive plum/magenta/taupe tokens used everywhere else on the
 * site (same reasoning as PdfThumbnail's PDF preview staying literally
 * white in dark mode: this is a picture of another product's UI).
 */
const CP = { navy: '#0F2A44', teal: '#1A6B7C', gold: '#C9A227', sand: '#EDE8DC' };
const MS = { plum: '#5B4B8A', lavender: '#C4B5FD', blush: '#F9A8D4', mist: '#F5F3FF' };
const MFG = { steel: '#3B4B5C', amber: '#D97706', mist: '#EEF2F5' };
const TD = { forest: '#2F6F4E', gold: '#C99A2E', sage: '#DCE9DF' };

export const CASE_STUDY_VISUALS: Record<CaseStudyId, SlideVisual[]> = {
  'content-platform': ['wireframe', 'tokens', 'responsive', 'stack'],
  mimose: ['journal-flow', 'mimose-tokens', 'companion-ux', 'mimose-stack'],
  'manufacturing-lifecycle': ['mfg-dashboard', 'mfg-tokens', 'mfg-workflow', 'mfg-stack'],
  'talent-development': ['talent-roadmap', 'talent-tokens', 'talent-alignment', 'talent-stack'],
};

export function CaseStudySlideVisual({ type, compact = false }: { type: SlideVisual; compact?: boolean }) {
  const pad = compact ? 'p-3' : 'p-5';

  if (type === 'wireframe') {
    return (
      <div className={`h-full ${pad} bg-slate-50`}>
        <div className="mb-2 h-2 w-1/3 rounded bg-slate-300" />
        <div className="mb-3 h-8 rounded bg-slate-200" />
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 space-y-2">
            <div className="h-2 w-full rounded bg-slate-200" />
            <div className="h-2 w-5/6 rounded bg-slate-200" />
            <div className="h-2 w-4/6 rounded bg-slate-200" />
            <div className={`${compact ? 'h-10' : 'h-16'} rounded bg-slate-200/80`} />
          </div>
          <div className="space-y-2">
            <div className={`${compact ? 'h-14' : 'h-20'} rounded bg-slate-200`} />
            <div className="h-2 w-full rounded bg-slate-200" />
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
              <p className="mt-1 truncate text-[9px] font-mono text-slate-500">{c}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1 rounded-lg bg-white/70 p-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Type</p>
          <p className={`${compact ? 'text-sm' : 'text-lg'} font-bold`} style={{ color: CP.navy }}>
            Display heading
          </p>
          <p className={`${compact ? 'text-[10px]' : 'text-xs'} text-slate-500`}>Body · readable measure</p>
        </div>
      </div>
    );
  }

  if (type === 'responsive') {
    return (
      <div className={`flex h-full items-center justify-center gap-3 ${pad} bg-slate-50`}>
        <div className={`${compact ? 'w-14' : 'w-20'} rounded-xl border-2 border-slate-300 bg-white p-1.5 shadow-sm`}>
          <div className="mb-1 h-1.5 w-1/2 rounded bg-slate-200" />
          <div className="space-y-1">
            <div className="h-6 rounded bg-slate-200" />
            <div className="h-1.5 w-full rounded bg-slate-200" />
            <div className="h-1.5 w-4/5 rounded bg-slate-200" />
          </div>
        </div>
        <div
          className={`hidden flex-1 sm:block ${compact ? 'max-w-[120px]' : 'max-w-[200px]'} rounded-lg border border-slate-300 bg-white p-2 shadow-sm`}
        >
          <div className="mb-2 flex gap-1">
            <div className="h-1.5 flex-1 rounded bg-slate-200" />
            <div className="h-1.5 w-4 rounded bg-slate-200" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2 h-10 rounded bg-slate-200/90" />
            <div className="h-10 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'stack') {
    return (
      <div className={`flex h-full flex-wrap content-center gap-2 ${pad} bg-slate-100`}>
        {['Figma', 'Headless CMS', 'Next.js', 'Technical SEO'].map((chip) => (
          <span
            key={chip}
            className={`rounded-full border border-slate-300 bg-white font-semibold text-slate-800 shadow-sm ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-[11px]'}`}
          >
            {chip}
          </span>
        ))}
        <div className={`mt-1 w-full ${compact ? 'h-8' : 'h-12'} rounded-lg border border-dashed border-slate-400 bg-white/50`}>
          <p className={`p-2 text-slate-500 ${compact ? 'text-[8px]' : 'text-[10px]'}`}>
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
      <div className={`grid h-full grid-cols-2 gap-2 ${pad} bg-slate-50`}>
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

  if (type === 'mimose-stack') {
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

  if (type === 'mfg-dashboard') {
    return (
      <div className={`h-full ${pad} bg-slate-50`}>
        <div className="mb-2 flex items-center justify-between">
          <div className="h-2 w-1/4 rounded bg-slate-300" />
          <div className={`rounded-full px-2 py-0.5 text-[8px] font-bold text-white`} style={{ backgroundColor: MFG.amber }}>
            LIVE
          </div>
        </div>
        <div className="space-y-1.5 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
          <div className="grid grid-cols-4 gap-2">
            {['SKU', 'BOM', 'Stock', 'Status'].map((h) => (
              <div key={h} className="h-1.5 rounded bg-slate-300" />
            ))}
          </div>
          {[0, 1, 2].map((row) => (
            <div key={row} className="grid grid-cols-4 gap-2">
              <div className="h-2 rounded bg-slate-100" />
              <div className="h-2 rounded bg-slate-100" />
              <div className="h-2 rounded bg-slate-100" />
              <div className="h-2 w-2/3 rounded" style={{ backgroundColor: MFG.steel, opacity: 0.25 }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'mfg-tokens') {
    return (
      <div className={`flex h-full flex-col justify-center gap-3 ${pad}`} style={{ backgroundColor: MFG.mist }}>
        <div className="flex gap-2">
          {[MFG.steel, MFG.amber, '#8895A3'].map((c) => (
            <div key={c} className="flex-1">
              <div className={`${compact ? 'h-8' : 'h-12'} rounded-lg shadow-sm`} style={{ backgroundColor: c }} />
              <p className="mt-1 truncate text-[9px] font-mono text-slate-500">{c}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white/80 p-2 text-center">
          <p className={`font-semibold ${compact ? 'text-xs' : 'text-sm'}`} style={{ color: MFG.steel }}>
            Utilitarian · Precise
          </p>
          <p className={`text-slate-500 ${compact ? 'text-[9px]' : 'text-[10px]'}`}>Built for dense operational data</p>
        </div>
      </div>
    );
  }

  if (type === 'mfg-workflow') {
    return (
      <div className={`flex h-full items-center justify-center gap-2 ${pad} bg-slate-50`}>
        <div className="flex-1 rounded-lg border border-dashed border-slate-300 bg-white p-2 opacity-60">
          <p className="text-[9px] font-bold uppercase tracking-wide text-slate-400">Before</p>
          <div className="mt-1.5 space-y-1">
            <div className="h-1.5 w-full rounded bg-slate-200" />
            <div className="h-1.5 w-4/5 rounded bg-slate-200" />
            <div className="h-1.5 w-3/5 rounded bg-slate-200" />
          </div>
          <p className="mt-1.5 text-[8px] text-slate-400">Excel · Paper</p>
        </div>
        <div className="text-slate-400">→</div>
        <div className="flex-1 rounded-lg border-2 bg-white p-2 shadow-sm" style={{ borderColor: MFG.steel }}>
          <p className="text-[9px] font-bold uppercase tracking-wide" style={{ color: MFG.steel }}>
            After
          </p>
          <div className="mt-1.5 h-8 rounded" style={{ backgroundColor: MFG.mist }} />
          <p className="mt-1.5 text-[8px] font-semibold" style={{ color: MFG.steel }}>
            Unified platform
          </p>
        </div>
      </div>
    );
  }

  if (type === 'mfg-stack') {
    return (
      <div className={`flex h-full flex-wrap content-center gap-2 ${pad} bg-slate-100`}>
        {['Angular 20+', 'Figma', 'Restful API'].map((chip) => (
          <span
            key={chip}
            className={`rounded-full border border-slate-300 bg-white font-semibold text-slate-800 shadow-sm ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-[11px]'}`}
          >
            {chip}
          </span>
        ))}
        <div className={`mt-1 w-full ${compact ? 'h-8' : 'h-12'} rounded-lg border border-dashed border-slate-400 bg-white/50`}>
          <p className={`p-2 text-slate-500 ${compact ? 'text-[8px]' : 'text-[10px]'}`}>
            Inventory ↔ BOM ↔ Compliance audits
          </p>
        </div>
      </div>
    );
  }

  if (type === 'talent-roadmap') {
    return (
      <div className={`flex h-full flex-col justify-center ${pad}`} style={{ backgroundColor: TD.sage }}>
        <div className="relative flex items-center justify-between px-1">
          <div
            className="absolute left-2 right-2 top-1/2 h-0.5 -translate-y-1/2"
            style={{ backgroundColor: TD.forest, opacity: 0.3 }}
          />
          {[0, 1, 2, 3].map((step) => (
            <div
              key={step}
              className={`relative z-10 rounded-full border-2 bg-white ${compact ? 'h-3 w-3' : 'h-4 w-4'}`}
              style={{ borderColor: step <= 1 ? TD.forest : '#B8CBBE' }}
            />
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-white/80 p-2 text-center">
          <p className={`font-semibold ${compact ? 'text-xs' : 'text-sm'}`} style={{ color: TD.forest }}>
            Personalized roadmap
          </p>
          <p className={`text-slate-500 ${compact ? 'text-[9px]' : 'text-[10px]'}`}>Milestones set with a manager</p>
        </div>
      </div>
    );
  }

  if (type === 'talent-tokens') {
    return (
      <div className={`flex h-full flex-col justify-center gap-3 ${pad}`} style={{ backgroundColor: '#FAF8F2' }}>
        <div className="flex gap-2">
          {[TD.forest, TD.gold, TD.sage].map((c) => (
            <div key={c} className="flex-1">
              <div className={`${compact ? 'h-8' : 'h-12'} rounded-lg shadow-sm`} style={{ backgroundColor: c }} />
              <p className="mt-1 truncate text-[9px] font-mono text-slate-500">{c}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white/80 p-2 text-center">
          <p className={`font-semibold ${compact ? 'text-xs' : 'text-sm'}`} style={{ color: TD.forest }}>
            Growth · Aspirational
          </p>
          <p className={`text-slate-500 ${compact ? 'text-[9px]' : 'text-[10px]'}`}>Tone for coaching conversations</p>
        </div>
      </div>
    );
  }

  if (type === 'talent-alignment') {
    return (
      <div className={`grid h-full grid-cols-2 gap-2 ${pad} bg-slate-50`}>
        <div className="flex flex-col rounded-lg border p-2" style={{ borderColor: TD.sage, backgroundColor: '#FFFFFF' }}>
          <p className={`font-bold ${compact ? 'text-[8px]' : 'text-[10px]'}`} style={{ color: TD.forest }}>
            Individual
          </p>
          <div
            className={`mt-1 flex-1 rounded ${compact ? 'min-h-[40px]' : 'min-h-[56px]'}`}
            style={{ backgroundColor: TD.sage, opacity: 0.4 }}
          />
        </div>
        <div className="flex flex-col rounded-lg border border-amber-200 bg-white p-2">
          <p className={`font-bold ${compact ? 'text-[8px]' : 'text-[10px]'}`} style={{ color: TD.gold }}>
            Organization
          </p>
          <div className="mt-1 flex-1 rounded bg-amber-50" style={{ minHeight: compact ? 40 : 56 }} />
        </div>
      </div>
    );
  }

  // talent-stack
  return (
    <div className={`flex h-full flex-wrap content-center gap-2 ${pad} bg-slate-100`}>
      {['Angular', 'Spring Boot'].map((chip) => (
        <span
          key={chip}
          className={`rounded-full border border-slate-300 bg-white font-semibold text-slate-800 shadow-sm ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-[11px]'}`}
        >
          {chip}
        </span>
      ))}
      <div className={`mt-1 w-full ${compact ? 'h-8' : 'h-12'} rounded-lg border border-dashed border-slate-400 bg-white/50`}>
        <p className={`p-2 text-slate-500 ${compact ? 'text-[8px]' : 'text-[10px]'}`}>
          Manager ↔ L&amp;D ↔ Personalized roadmap
        </p>
      </div>
    </div>
  );
}
