import { Link } from '@/i18n/navigation';
import { BENTO_CARD_BASE } from '@/lib/layout';

export type BentoSpan = 1 | 2 | 3 | 'full';
export type BentoTone = 'surface' | 'ink' | 'tint';

/**
 * Tailwind cannot see class names built at runtime, so every span/tone
 * combination is spelled out here.
 */
const SPAN_CLASS: Record<BentoSpan, string> = {
  1: 'lg:col-span-1',
  2: 'md:col-span-2 lg:col-span-2',
  3: 'md:col-span-2 lg:col-span-3',
  full: 'md:col-span-2 lg:col-span-4',
};

const ROW_CLASS: Record<1 | 2, string> = {
  1: '',
  2: 'lg:row-span-2',
};

const TONE_CLASS: Record<BentoTone, string> = {
  surface: 'bg-surface text-ocean-900',
  ink: 'bg-ocean-900 text-white border-ocean-900',
  tint: 'bg-sand-100 text-ocean-900',
};

const INTERACTIVE_CLASS =
  'transition duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-bento-hover motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50';

type BentoCardProps = {
  children: React.ReactNode;
  /** Columns to occupy in the 4-column bento. */
  span?: BentoSpan;
  /** Rows to occupy (only meaningful at lg, where the grid is 4 columns). */
  rows?: 1 | 2;
  tone?: BentoTone;
  /** Internal route. Renders the card as a link and makes it keyboard-focusable. */
  href?: string;
  className?: string;
};

export default function BentoCard({
  children,
  span = 1,
  rows = 1,
  tone = 'surface',
  href,
  className = '',
}: BentoCardProps) {
  const classes = [
    BENTO_CARD_BASE,
    SPAN_CLASS[span],
    ROW_CLASS[rows],
    TONE_CLASS[tone],
    href ? `group block ${INTERACTIVE_CLASS}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
