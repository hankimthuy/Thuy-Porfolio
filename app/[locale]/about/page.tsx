import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import {
  LuCompass,
  LuHeartHandshake,
  LuLightbulb,
  LuUsers,
} from 'react-icons/lu';
import { JsonLdScript, buildProfilePageSchema } from '@/components/JsonLd';
import { routing, type Locale } from '@/i18n/routing';
import { PAGE_SHELL, SECTION_HEADER_TO_CONTENT } from '@/lib/layout';
import { getPageMetadata, PAGE_PATHS } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: Locale }>;
};

const FOCUS_ICONS = [LuLightbulb, LuHeartHandshake, LuCompass, LuUsers] as const;

/**
 * Apple-Bento look for this page only: soft white cards on a neutral ground,
 * hairline border, ambient shadow that lifts gently on hover. The shared
 * `BentoCard`'s fixed 1/2/3/full span vocabulary doesn't map onto this
 * section's 7/5-then-three-4s grid, so these cards are bespoke rather than
 * routed through that component.
 */
const CARD_BASE =
  'rounded-3xl border border-taupe-200/80 bg-white shadow-[0_4px_20px_-4px_rgba(26,15,82,0.05)] transition-all duration-300 hover:shadow-[0_12px_24px_-4px_rgba(26,15,82,0.08)]';

/** Alternated per "How I work" card so the row of three isn't monochrome. */
const INDEX_TONES = [
  'bg-plum-50 text-plum-700',
  'bg-magenta-50 text-magenta-700',
  'bg-taupe-100 text-plum-700',
];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'about');
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');
  const tHero = await getTranslations('hero');
  const tSkills = await getTranslations('skills');
  const tPerson = await getTranslations('person');

  const focusChips = [
    tHero('chips.problemSolving'),
    tHero('chips.userExperience'),
    tHero('chips.productDiscovery'),
    tHero('chips.customerNeeds'),
  ];
  const skillCards = tSkills.raw('cards') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <main className={PAGE_SHELL}>
      <JsonLdScript
        schemas={[await buildProfilePageSchema(locale, PAGE_PATHS.about)]}
      />

      <header className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-plum-700">
          {t('eyebrow')}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-plum-900 text-balance lg:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-plum-700">
          {t('subtitle')}
        </p>
      </header>

      <div className={`grid grid-cols-12 gap-5 lg:gap-6 ${SECTION_HEADER_TO_CONTENT}`}>
        {/* Card 1 — hero statement */}
        <div className={`col-span-12 flex flex-col justify-between p-6 lg:col-span-7 lg:p-8 ${CARD_BASE}`}>
          <p className="text-xl font-medium leading-snug text-plum-900 lg:text-2xl">
            {tHero.rich('bio', {
              technicalLogic: (chunks) => (
                <strong className="font-bold text-plum-900">{chunks}</strong>
              ),
              humanEmpathy: (chunks) => (
                <strong className="font-bold text-plum-900">{chunks}</strong>
              ),
              why: (chunks) => (
                <strong className="font-bold text-plum-900">{chunks}</strong>
              ),
              how: (chunks) => (
                <strong className="font-bold text-plum-900">{chunks}</strong>
              ),
            })}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-taupe-100 px-3 py-1 text-xs font-semibold text-plum-700">
              {tPerson('jobTitle')}
            </span>
            <span className="text-sm text-plum-700/70">{tPerson('yearsExperience')}</span>
          </div>
        </div>

        {/* Card 2 — focus areas */}
        <div className={`col-span-12 p-6 lg:col-span-5 lg:p-8 ${CARD_BASE}`}>
          <h2 className="text-lg font-bold text-plum-900 lg:text-xl">
            {t('focus.title')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-plum-700">
            {t('focus.subtitle')}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {focusChips.map((chip, index) => {
              const Icon = FOCUS_ICONS[index];

              return (
                <div
                  key={chip}
                  className="flex items-center gap-2.5 rounded-xl bg-taupe-50/80 p-3 transition-colors hover:bg-taupe-100/80"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-plum-700">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-plum-900">{chip}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards 3-5 — how I work */}
        <div className="col-span-12 mt-2">
          <h2 className="text-lg font-bold text-plum-900 lg:text-xl">
            {t('howIWork.title')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-plum-700">
            {t('howIWork.subtitle')}
          </p>
        </div>

        {skillCards.map((card, index) => (
          <article
            key={card.title}
            className={`col-span-12 p-6 lg:col-span-4 lg:p-8 ${CARD_BASE}`}
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${INDEX_TONES[index % INDEX_TONES.length]}`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-base font-semibold text-plum-900">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-plum-900/70">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
