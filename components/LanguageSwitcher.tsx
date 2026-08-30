'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import LocaleSwitchOverlay from '@/components/LocaleSwitchOverlay';

const MIN_OVERLAY_MS = 420;

type LanguageSwitcherProps = {
  className?: string;
  variant?: 'desktop' | 'mobile';
};

export default function LanguageSwitcher({
  className = '',
  variant = 'desktop',
}: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('header');
  const [isPending, startTransition] = useTransition();
  const [showOverlay, setShowOverlay] = useState(false);
  const [targetLocale, setTargetLocale] = useState<Locale | null>(null);
  const switchStartedAt = useRef<number | null>(null);

  const buttonClass =
    variant === 'desktop' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm';

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale || showOverlay) return;

    switchStartedAt.current = Date.now();
    setTargetLocale(newLocale);
    setShowOverlay(true);

    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      if (hash) {
        requestAnimationFrame(() => {
          window.location.hash = hash;
        });
      }
    });
  };

  useEffect(() => {
    if (!showOverlay || isPending || !targetLocale || locale !== targetLocale) return;

    const elapsed = Date.now() - (switchStartedAt.current ?? 0);
    const remaining = Math.max(0, MIN_OVERLAY_MS - elapsed);

    const timer = setTimeout(() => {
      setShowOverlay(false);
      setTargetLocale(null);
      switchStartedAt.current = null;
    }, remaining);

    return () => clearTimeout(timer);
  }, [locale, isPending, showOverlay, targetLocale]);

  useEffect(() => {
    if (!showOverlay) return;

    const fallback = setTimeout(() => {
      setShowOverlay(false);
      setTargetLocale(null);
      switchStartedAt.current = null;
    }, 8000);

    return () => clearTimeout(fallback);
  }, [showOverlay]);

  return (
    <>
      <div
        className={`inline-flex items-center rounded-lg border border-sand-200 bg-sand-100 p-0.5 font-semibold ${className}`}
        role="group"
        aria-label={t('switchLanguage')}
      >
        {routing.locales.map((loc) => (
          <button
            key={loc}
            type="button"
            disabled={showOverlay}
            onClick={() => switchLocale(loc)}
            className={`${buttonClass} rounded-md uppercase tracking-wide transition-colors disabled:cursor-wait disabled:opacity-60 ${
              locale === loc
                ? 'bg-ocean-500 text-white shadow-sm'
                : 'text-ocean-700 hover:bg-surface hover:text-ocean-900'
            }`}
            aria-current={locale === loc ? 'true' : undefined}
          >
            {loc}
          </button>
        ))}
      </div>

      <LocaleSwitchOverlay visible={showOverlay} label={t('switchingLanguage')} />
    </>
  );
}
