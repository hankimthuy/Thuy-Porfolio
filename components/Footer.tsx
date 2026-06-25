'use client';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { SiZalo } from 'react-icons/si';
import { useTranslations } from 'next-intl';
import { SECTION_INNER, SECTION_SCROLL_MARGIN } from '@/lib/layout';
import { PERSON } from '@/lib/seo';

export default function Footer() {
  const t = useTranslations('footer');
  const tPerson = useTranslations('person');
  const year = new Date().getFullYear();
  const brandName = tPerson('brandName');
  const fullName = tPerson('fullName');

  return (
    <footer id="footer" className={`border-t border-[#A6B1E1]/25 bg-white ${SECTION_SCROLL_MARGIN}`}>
      <div className={SECTION_INNER}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-lg">
            <h2 className="text-2xl lg:text-[2rem] font-bold text-[#424874] tracking-tight">
              {t('connect')}
            </h2>
            <p className="mt-2 text-sm lg:text-base text-[#424874]/65 leading-relaxed">
              {t('freelancePrompt')}
            </p>
            <p className="mt-2 text-sm text-[#424874]/55">{t('freelanceNote')}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={PERSON.zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#583FBC] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4a35a3]"
            >
              <SiZalo size={18} />
              Zalo · {PERSON.zaloPhone}
            </a>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#424874]/15 bg-[#F4EEFF]/50 px-5 py-3 text-sm font-semibold text-[#424874] transition-colors hover:border-[#A6B1E1] hover:bg-[#F4EEFF]"
            >
              <FiLinkedin size={17} />
              {t('linkedin')}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-dashed border-[#A6B1E1]/35 pt-6 text-sm sm:flex-row">
          <p className="font-mono font-bold text-[#424874]/80">
            {brandName}
            <span className="text-[#583FBC]">_</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[#424874]/70">
            <a
              href={`mailto:${PERSON.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#583FBC] transition-colors"
            >
              <LuMail size={15} />
              {PERSON.email}
            </a>
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#583FBC] transition-colors"
              aria-label="GitHub — hankimthuy"
            >
              <FiGithub size={15} />
              {t('github')}
            </a>
          </div>

          <p className="text-[#424874]/45 text-xs sm:text-sm">
            {t('copyright', { year, brandName, fullName })}
          </p>
        </div>
      </div>
    </footer>
  );
}
