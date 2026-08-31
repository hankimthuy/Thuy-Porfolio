import { getTranslations } from 'next-intl/server';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { SiWhatsapp, SiZalo } from 'react-icons/si';
import BentoCard from '@/components/bento/BentoCard';
import { PERSON } from '@/lib/seo';

const SECONDARY_LINK_CLASS =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-taupe-200 bg-taupe-50 px-5 py-3 text-sm font-semibold text-plum-700 transition-colors hover:border-plum-500 hover:bg-taupe-100';

/** The contact surface for the Connect page. */
export default async function ContactPanel() {
  const t = await getTranslations('footer');

  return (
    <>
      <BentoCard span={2} rows={2} className="flex flex-col justify-between p-7 md:p-9">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-plum-900 lg:text-3xl">
            {t('connect')}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-plum-700 text-pretty">
            {t('freelancePrompt')}
          </p>
          <p className="mt-2 text-sm text-plum-700/75">{t('freelanceNote')}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-plum-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-plum-700"
          >
            <FiLinkedin size={18} />
            {t('linkedinCta')}
          </a>
          <a
            href={PERSON.zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className={SECONDARY_LINK_CLASS}
          >
            <SiZalo size={17} />
            Zalo · {PERSON.phone}
          </a>
          <a
            href={PERSON.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={SECONDARY_LINK_CLASS}
          >
            <SiWhatsapp size={17} />
            WhatsApp · {PERSON.phone}
          </a>
        </div>
      </BentoCard>

      <BentoCard span={2} rows={2} tone="tint" className="flex flex-col justify-center gap-4 p-7 md:p-8">
        <a
          href={PERSON.gmailComposeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-taupe-200 bg-surface px-5 py-4 transition-colors hover:border-plum-500"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-taupe-100 text-plum-700 transition-colors group-hover:bg-plum-500 group-hover:text-white">
            <LuMail className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-plum-700">
              Email
            </span>
            <span className="block truncate text-sm font-bold text-plum-900">
              {PERSON.email}
            </span>
          </span>
        </a>

        <a
          href={PERSON.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-taupe-200 bg-surface px-5 py-4 transition-colors hover:border-plum-500"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-taupe-100 text-plum-700 transition-colors group-hover:bg-plum-500 group-hover:text-white">
            <FiGithub className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-plum-700">
              {t('github')}
            </span>
            <span className="block truncate text-sm font-bold text-plum-900">
              hankimthuy
            </span>
          </span>
        </a>

        <a
          href={PERSON.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-taupe-200 bg-surface px-5 py-4 transition-colors hover:border-plum-500"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-taupe-100 text-plum-700 transition-colors group-hover:bg-plum-500 group-hover:text-white">
            <FiLinkedin className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-plum-700">
              {t('linkedin')}
            </span>
            <span className="block truncate text-sm font-bold text-plum-900">
              thuyhankim
            </span>
          </span>
        </a>
      </BentoCard>
    </>
  );
}
