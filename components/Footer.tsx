'use client';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SECTION_CONTAINER } from '@/lib/layout';
import { PERSON } from '@/lib/seo';

const ICON_LINK_CLASS =
  'inline-flex items-center gap-1.5 text-ocean-700 transition-colors hover:text-ocean-900';

export default function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  const tPerson = useTranslations('person');

  const year = new Date().getFullYear();
  const brandName = tPerson('brandName');
  const fullName = tPerson('fullName');

  return (
    <footer className="border-t border-ocean-200 bg-surface">
      <div
        className={`${SECTION_CONTAINER} flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row`}
      >
        <Link
          href="/"
          className="font-extrabold tracking-tight text-ocean-900 transition-colors hover:text-ocean-700"
        >
          {brandName}
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href={PERSON.gmailComposeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={ICON_LINK_CLASS}
          >
            <LuMail size={15} />
            <span className="font-semibold">{PERSON.email}</span>
          </a>
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            className={ICON_LINK_CLASS}
            aria-label="GitHub — hankimthuy"
          >
            <FiGithub size={15} />
            {t('github')}
          </a>
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={ICON_LINK_CLASS}
            aria-label={t('linkedin')}
          >
            <FiLinkedin size={15} />
            {t('linkedin')}
          </a>
          <Link href="/connect" className={ICON_LINK_CLASS}>
            {tHeader('nav.connect')}
          </Link>
        </div>

        <p className="text-xs text-ocean-700/70 sm:text-sm">
          {t('copyright', { year, brandName, fullName })}
        </p>
      </div>
    </footer>
  );
}
