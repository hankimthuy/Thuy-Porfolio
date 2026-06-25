'use client';

import Image from 'next/image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { PERSON, PORTRAIT_IMAGE_PATH } from '@/lib/seo';
import { HEADER_HEIGHT_PX, HERO_SECTION } from '@/lib/layout';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = HEADER_HEIGHT_PX;
    const offset = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

const Hero = () => {
  const t = useTranslations('hero');
  const tPerson = useTranslations('person');

  const jobTitles = tPerson.raw('jobTitles') as string[];
  const focusChips = [
    t('chips.problemSolving'),
    t('chips.userExperience'),
    t('chips.productDiscovery'),
    t('chips.customerNeeds'),
  ];
  const stats = [t('stats.experience'), t('stats.projects'), t('stats.delivery')];

  return (
    <section id="about" className={HERO_SECTION}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-16 xl:px-20">
        <div className="relative z-10 flex flex-1 flex-col space-y-5 text-center lg:text-left">
          <div className="pointer-events-none absolute -top-20 -left-20 h-32 w-32 rounded-full bg-[#F4EEFF] opacity-80 blur-3xl lg:h-64 lg:w-64" />

          <span className="relative inline-flex w-fit self-center items-center rounded-full border border-[#A6B1E1]/60 bg-[#F4EEFF]/80 px-3 py-1 text-xs font-semibold tracking-wide text-[#583FBC] lg:self-start">
            {t('availability')}
          </span>

          <h1 className="relative font-semibold tracking-tight text-[#424874]">
            <span className="block text-3xl leading-[1.15] text-balance lg:text-6xl">
              {tPerson('greeting')}{' '}
              <span className="text-[#583FBC]">{tPerson('brandName')}</span>,
            </span>

            <span className="mt-3 flex flex-wrap items-baseline justify-center gap-x-2.5 gap-y-1 lg:mt-4 lg:justify-start">
              {jobTitles.map((title, index) => (
                <span key={title} className="inline-flex items-baseline gap-x-2.5">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="text-xl font-light leading-none text-[#A6B1E1] lg:text-2xl"
                    >
                      ·
                    </span>
                  )}
                  <span className="text-xl font-semibold leading-tight sm:text-2xl lg:text-[2.25rem]">
                    {title}
                  </span>
                </span>
              ))}
            </span>

            <span className="mt-3 block text-base font-normal opacity-70 lg:text-xl">
              {tPerson('jobTitleSecondary')}
            </span>
          </h1>

          <p className="mx-auto max-w-lg text-base leading-normal font-normal text-[#424874]/90 lg:mx-0 lg:text-lg">
            {t.rich('bio', {
              technicalLogic: (chunks) => (
                <strong className="font-bold">{chunks}</strong>
              ),
              humanEmpathy: (chunks) => (
                <strong className="font-bold">{chunks}</strong>
              ),
              why: (chunks) => <strong className="font-bold">{chunks}</strong>,
              how: (chunks) => <strong className="font-bold">{chunks}</strong>,
            })}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {stats.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#A6B1E1]/50 bg-white/80 px-3 py-1 text-xs font-semibold text-[#424874]"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 pt-1 sm:flex-row sm:items-center lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="inline-flex items-center justify-center rounded-xl bg-[#583FBC] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4a35a3]"
            >
              {t('ctas.primary')}
            </a>
            <a
              href="#footer"
              onClick={(e) => scrollToSection(e, 'footer')}
              className="inline-flex items-center justify-center rounded-xl border border-[#424874]/15 bg-white/80 px-6 py-3 text-sm font-semibold text-[#424874] transition-colors hover:border-[#A6B1E1] hover:bg-[#F4EEFF]"
            >
              {t('ctas.secondary')}
            </a>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#424874] text-[#424874] transition-all duration-300 hover:-translate-y-1 hover:border-[#A6B1E1] hover:bg-[#F4EEFF] hover:shadow-lg"
              aria-label={t('social.linkedin')}
            >
              <FiLinkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#424874] text-[#424874] transition-all duration-300 hover:-translate-y-1 hover:border-[#A6B1E1] hover:bg-[#F4EEFF] hover:shadow-lg"
              aria-label={t('social.github')}
            >
              <FiGithub size={20} strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${PERSON.email}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${PERSON.email}`;
              }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#424874] text-[#424874] transition-all duration-300 hover:-translate-y-1 hover:border-[#A6B1E1] hover:bg-[#F4EEFF] hover:shadow-lg"
              aria-label={t('social.email')}
            >
              <LuMail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="relative flex w-full shrink-0 items-center justify-center py-6 lg:w-auto lg:flex-none lg:py-4">
          <div className="absolute h-[280px] w-[280px] animate-pulse rounded-full bg-[#DCD6F7] opacity-40 mix-blend-multiply blur-3xl filter sm:h-[320px] sm:w-[320px] lg:h-[480px] lg:w-[480px]" />
          <div className="absolute top-10 right-0 h-32 w-32 rounded-full bg-[#A6B1E1] opacity-30 mix-blend-multiply blur-3xl filter lg:top-14 lg:h-60 lg:w-60" />

          <div className="relative z-10 w-[260px] sm:w-[290px] lg:w-[340px] xl:w-[360px]">
            <div className="group relative transition-transform duration-500 hover:scale-[1.01]">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-t-[12rem] rounded-b-[4rem] bg-[#A6B1E1] opacity-60 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 lg:translate-x-3 lg:translate-y-3 lg:group-hover:translate-x-5 lg:group-hover:translate-y-5" />

              <Image
                src={PORTRAIT_IMAGE_PATH}
                alt={t('portraitAlt')}
                width={360}
                height={454}
                priority
                unoptimized
                className="h-auto w-full rounded-t-[12rem] rounded-b-[4rem] border-[3px] border-white object-cover shadow-2xl lg:border-4"
              />

              <div className="absolute -right-3 top-10 flex flex-col items-end gap-2 sm:-right-4 sm:top-12 lg:-right-10 lg:top-12 lg:gap-2">
                {focusChips.map((chip) => (
                  <a
                    key={chip}
                    href="#skills"
                    onClick={(e) => scrollToSection(e, 'skills')}
                    className="whitespace-nowrap rounded-full border border-[#A6B1E1]/50 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#424874] shadow-md shadow-[#424874]/5 backdrop-blur-sm transition-colors hover:border-[#583FBC] hover:bg-[#F4EEFF] hover:text-[#583FBC] sm:text-xs lg:px-3.5 lg:py-1.5 lg:text-xs"
                  >
                    {chip}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
