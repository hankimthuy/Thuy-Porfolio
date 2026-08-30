'use client';

import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { useTranslations } from 'next-intl';
import { SECTION_HEADER_TO_CONTENT } from '@/lib/layout';
import { PERSON, SITE_URL } from '@/lib/seo';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ocean-200 bg-surface">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-ocean-50 lg:p-6"
      >
        <span className="flex-1 text-base font-bold leading-snug text-ocean-900">
          {question}
        </span>
        <LuChevronDown
          className={`h-5 w-5 shrink-0 text-ocean-700 transition-transform duration-200 motion-reduce:transition-none ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <p className="px-5 pb-5 text-sm leading-relaxed text-ocean-700 lg:px-6 lg:pb-6">
          {answer}
        </p>
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
    <section className="mt-14 lg:mt-20">
      <h2 className="text-2xl font-extrabold tracking-tight text-ocean-900 lg:text-3xl">
        {t('title')}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ocean-700 lg:text-base">
        {t('contactLine', { brandName })}
      </p>

      <div className={`${SECTION_HEADER_TO_CONTENT} grid items-start gap-3 lg:grid-cols-2 lg:gap-4`}>
        {resolvedItems.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
