'use client';

import { useState, useEffect } from 'react';
import { LuChevronUp } from 'react-icons/lu';
import { useTranslations } from 'next-intl';

export default function ScrollToTop() {
  const t = useTranslations('common');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t('scrollToTop')}
        aria-hidden={!isVisible}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#A6B1E1]/70 bg-white/95 text-[#424874] shadow-md shadow-[#242A41]/8 backdrop-blur-sm transition-all duration-300 hover:border-[#583FBC]/50 hover:bg-[#F4EEFF] hover:text-[#583FBC] hover:shadow-lg hover:shadow-[#583FBC]/15 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#583FBC]/40 focus-visible:ring-offset-2 ${
          isVisible
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <LuChevronUp className="h-5 w-5" strokeWidth={2.25} aria-hidden />
      </button>
    </div>
  );
}
