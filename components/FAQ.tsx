'use client';

import { useState } from 'react';
import { LuMail } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { SECTION_INNER, SECTION_SCROLL_MARGIN } from '@/lib/layout';
import { PERSON, SITE_URL } from '@/lib/seo';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-[8px] bg-[#EDF0F9]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-4 text-left lg:p-8"
      >
        <p className="flex-1 pr-2 text-base font-bold leading-[1.28] text-[#242A41] lg:text-lg">
          {question}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          className={`transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path
            d="M8 12L16 20L24 12"
            stroke="#242A41"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 lg:px-8 lg:pb-8">
          <p className="text-sm font-normal leading-[1.41] text-[#585F6F] lg:text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const t = useTranslations('faq');
  const tPerson = useTranslations('person');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const brandName = tPerson('brandName');
  const faqItems = t.raw('items') as Array<{ question: string; answer: string }>;

  const resolvedItems = faqItems.map((item) => ({
    question: item.question,
    answer: item.answer
      .replace('{email}', PERSON.email)
      .replace('{siteUrl}', SITE_URL)
      .replace('{brandName}', brandName),
  }));

  return (
    <section id="faq" className={`${SECTION_SCROLL_MARGIN} bg-white`}>
      <div className={SECTION_INNER}>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[60px]">
          <div className="w-full lg:w-auto lg:flex-1">
            <div className="mb-6 lg:mb-12">
              <h2 className="mb-4 text-3xl font-bold leading-[1.23] text-[#242A41] lg:mb-8 lg:text-[47px]">
                {t('title')}
              </h2>

              <p className="mb-4 text-sm font-normal leading-[1.5] text-[#1D2130] lg:mb-5 lg:text-base">
                {t('contactLine', { brandName })}
              </p>
              <a
                href={`mailto:${PERSON.email}`}
                className="flex items-center gap-2 text-sm font-normal text-[#242A41] hover:underline lg:text-base"
              >
                <LuMail /> {PERSON.email}
              </a>
            </div>
          </div>

          <div className="w-full space-y-4 lg:w-auto lg:flex-1 lg:space-y-5">
            {resolvedItems.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
