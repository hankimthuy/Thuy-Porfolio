import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import JsonLd from '@/components/JsonLd';
import Analytics from '@/components/Analytics';
import { routing, type Locale } from '@/i18n/routing';
import { getLocaleMetadata } from '@/lib/metadata';

/**
 * One family for headings and body — hierarchy comes from weight and size.
 * The `vietnamese` subset is required: the VI copy is full of diacritics.
 */
const sans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  return getLocaleMetadata(locale as Locale);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={sans.variable} suppressHydrationWarning>
      <head>
        <JsonLd locale={locale as Locale} />
        {/*
          Runs before hydration so the page never flashes the wrong theme.
          Mirrors ThemeToggle's storage key and time boundary (06:00–17:59 =
          light) — keep the two in sync if either changes.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme-preference');var d;if(s==='light'||s==='dark'){d=s==='dark';}else{var h=new Date().getHours();d=h<6||h>=18;}document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="flex min-h-screen flex-col bg-taupe-50 text-foreground antialiased"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
