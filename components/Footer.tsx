'use client';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { SiZalo } from 'react-icons/si';
import { PERSON } from '@/lib/seo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white border-t border-[#A6B1E1]/25">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
          <div className="max-w-md">
            <h2 className="text-2xl lg:text-[2rem] font-bold text-[#424874] tracking-tight">
              Let&apos;s connect
            </h2>
            <p className="mt-2 text-sm lg:text-base text-[#424874]/65 leading-relaxed">
              Open for product work &amp; freelance. Zalo is fastest for work inquiries.
            </p>
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
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dashed border-[#A6B1E1]/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="font-mono font-bold text-[#424874]/80">
            {PERSON.brandName}
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
              href="https://github.com/hankimthuy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#583FBC] transition-colors"
            >
              <FiGithub size={15} />
              GitHub
            </a>
          </div>

          <p className="text-[#424874]/45 text-xs sm:text-sm">
            © {year} {PERSON.brandName}
          </p>
        </div>
      </div>
    </footer>
  );
}
