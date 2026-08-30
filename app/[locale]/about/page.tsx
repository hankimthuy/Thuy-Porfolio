import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import {
  LuCompass,
  LuHeartHandshake,
  LuLightbulb,
  LuUsers,
} from 'react-icons/lu';
import BentoGrid from '@/components/bento/BentoGrid';
import BentoCard from '@/components/bento/BentoCard';
import { JsonLdScript, buildProfilePageSchema } from '@/components/JsonLd';
import { routing, type Locale } from '@/i18n/routing';
import { PAGE_SHELL } from '@/lib/layout';
import { getPageMetadata, PAGE_PATHS } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: Locale }>;
};

const FOCUS_ICONS = [LuLightbulb, LuHeartHandshake, LuCompass, LuUsers] as const;

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
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ocean-700">
          {t('eyebrow')}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ocean-900 text-balance lg:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ocean-700">
          {t('subtitle')}
        </p>
      </header>

      <BentoGrid className="mt-10 lg:mt-12">
        <BentoCard span={2} rows={2} className="flex flex-col justify-center p-7 md:p-9">
          <p className="text-lg leading-relaxed text-ocean-900/85 lg:text-xl">
            {tHero.rich('bio', {
              technicalLogic: (chunks) => (
                <strong className="font-bold text-ocean-900">{chunks}</strong>
              ),
              humanEmpathy: (chunks) => (
                <strong className="font-bold text-ocean-900">{chunks}</strong>
              ),
              why: (chunks) => (
                <strong className="font-bold text-ocean-900">{chunks}</strong>
              ),
              how: (chunks) => (
                <strong className="font-bold text-ocean-900">{chunks}</strong>
              ),
            })}
          </p>
          <p className="mt-6 text-sm font-semibold text-ocean-700">
            {tPerson('jobTitle')} · {tPerson('yearsExperience')}
          </p>
        </BentoCard>

        <BentoCard span={2} rows={2} tone="tint" className="p-7 md:p-8">
          <h2 className="text-lg font-bold text-ocean-900 lg:text-xl">
            {t('focus.title')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ocean-700">
            {t('focus.subtitle')}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusChips.map((chip, index) => {
              const Icon = FOCUS_ICONS[index];

              return (
                <li
                  key={chip}
                  className="flex items-center gap-3 rounded-xl border border-ocean-200 bg-surface px-4 py-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ocean-100 text-ocean-700">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-ocean-900">{chip}</span>
                </li>
              );
            })}
          </ul>
        </BentoCard>

        <BentoCard span="full" className="p-7 md:p-8">
          <h2 className="text-lg font-bold text-ocean-900 lg:text-xl">
            {t('howIWork.title')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ocean-700">
            {t('howIWork.subtitle')}
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {skillCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-ocean-200 bg-ocean-50 p-5"
              >
                <h3 className="text-base font-bold text-ocean-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ocean-700">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </BentoCard>
      </BentoGrid>
    </main>
  );
}
