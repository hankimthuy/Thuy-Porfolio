import { getTranslations } from 'next-intl/server';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { Link } from '@/i18n/navigation';
import BentoCard from '@/components/bento/BentoCard';
import { PERSON } from '@/lib/seo';

const SOCIAL_LINK_CLASS =
  'flex h-11 w-11 items-center justify-center rounded-xl border border-taupe-200 text-muted transition-colors hover:border-plum-500 hover:bg-taupe-100 hover:text-foreground';

export default async function HeroCard() {
  const t = await getTranslations('hero');
  const tHome = await getTranslations('home');
  const tPerson = await getTranslations('person');

  const jobTitles = tPerson.raw('jobTitles') as string[];

  return (
    <BentoCard span={2} rows={2} className="flex flex-col justify-between p-7 md:p-9">
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-magenta-500/25 bg-magenta-50 px-3 py-1.5 text-xs font-semibold text-magenta-700">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta-500 opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta-500" />
        </span>
        {t('availability')}
      </span>

      <div className="mt-8">
        <h1 className="font-extrabold tracking-tight text-foreground">
          <span className="block text-[1.75rem] leading-[1.15] text-balance sm:text-4xl lg:text-5xl">
            {tPerson('greeting')} {tPerson('brandName')}
          </span>
          <span className="mt-3 block text-xl font-bold text-plum-500 sm:text-2xl lg:text-3xl">
            {jobTitles.join(' · ')}
          </span>
        </h1>

        <p className="mt-2 text-sm font-medium text-muted lg:text-base">
          {tPerson('jobTitleSecondary')}
        </p>

        <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-foreground/80 lg:text-base">
          {t.rich('bio', {
            technicalLogic: (chunks) => (
              <strong className="font-bold text-foreground">{chunks}</strong>
            ),
            humanEmpathy: (chunks) => (
              <strong className="font-bold text-foreground">{chunks}</strong>
            ),
            why: (chunks) => <strong className="font-bold text-foreground">{chunks}</strong>,
            how: (chunks) => <strong className="font-bold text-foreground">{chunks}</strong>,
          })}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/showcases"
            className="inline-flex items-center justify-center rounded-xl bg-plum-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plum-700"
          >
            {tHome('cta.primary')}
          </Link>
          <Link
            href="/connect"
            className="inline-flex items-center justify-center rounded-xl border border-taupe-200 bg-taupe-50 px-6 py-3 text-sm font-semibold text-muted transition-colors hover:border-plum-500 hover:bg-taupe-100"
          >
            {tHome('cta.secondary')}
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={SOCIAL_LINK_CLASS}
            aria-label={t('social.linkedin')}
          >
            <FiLinkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            className={SOCIAL_LINK_CLASS}
            aria-label={t('social.github')}
          >
            <FiGithub size={18} strokeWidth={1.75} />
          </a>
          <a
            href={PERSON.gmailComposeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={SOCIAL_LINK_CLASS}
            aria-label={t('social.email')}
          >
            <LuMail size={18} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
