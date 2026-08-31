import { Link } from '@/i18n/navigation';
import { BENTO_CARD_BASE } from '@/lib/layout';

export type BentoSpan = 1 | 2 | 3 | 'full';
export type BentoTone = 'surface' | 'ink' | 'tint' | 'accent';

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

// `!border-*` because BENTO_CARD_BASE already sets a border color; Tailwind
// resolves same-specificity utility clashes by source order, not by class
// string order, so a tone's own border color needs `!important` to reliably
// win over the shared hairline border.
const TONE_CLASS: Record<BentoTone, string> = {
  surface: 'bg-surface text-plum-900',
  ink: 'bg-gradient-to-br from-plum-900 to-plum-700 text-white !border-plum-900',
  // taupe-100 sat almost on top of the taupe-50 page background, so the
  // "tinted" card had no real contrast and looked like it sank into the page
  // next to a white card. taupe-200 + a slightly deeper hairline gives it the
  // same visual weight as a surface card.
  tint: 'bg-taupe-200 text-plum-900 !border-taupe-300',
  accent: 'bg-magenta-50 text-plum-900 !border-magenta-500/15',
};

const INTERACTIVE_CLASS =
  'transition duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-bento-hover motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum-500 focus-visible:ring-offset-2 focus-visible:ring-offset-taupe-50';

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
