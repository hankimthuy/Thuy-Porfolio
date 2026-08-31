'use client';

import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useTranslations } from 'next-intl';

/**
 * The only explicit user choice we persist. Its absence means "follow the
 * time of day" — see `getTimeBasedTheme` below. Keep this key in sync with
 * the inline no-flash script in app/[locale]/layout.tsx, which reads the
 * same key before hydration to avoid a flash of the wrong theme.
 */
const STORAGE_KEY = 'theme-preference';

/** 06:00–17:59 local time reads as light, everything else as dark. */
function getTimeBasedTheme(): 'light' | 'dark' {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export default function ThemeToggle() {
  const t = useTranslations('footer');
  // Assume light until mounted so server and client render the same markup;
  // the inline script in <head> has already set the real class on <html>
  // before this ever paints, so this only affects which icon shows briefly.
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next: 'light' | 'dark' = isDark ? 'light' : 'dark';
    applyTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing / storage blocked — theme still applies for this load.
    }
    setIsDark(!isDark);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t('switchToLight') : t('switchToDark')}
      title={isDark ? t('switchToLight') : t('switchToDark')}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-taupe-200 text-muted transition-colors hover:border-plum-500 hover:text-foreground"
    >
      {isDark ? <LuSun className="h-4 w-4" aria-hidden /> : <LuMoon className="h-4 w-4" aria-hidden />}
    </button>
  );
}

// Re-exported so the inline no-flash script and this component can't drift
// apart on the storage key or the time boundary without a build-time hint.
export { STORAGE_KEY as THEME_STORAGE_KEY, getTimeBasedTheme };
