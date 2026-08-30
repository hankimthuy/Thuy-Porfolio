import { BENTO_GRID } from '@/lib/layout';

type BentoGridProps = {
  children: React.ReactNode;
  className?: string;
};

/** Four-column bento at lg, two at md, one on mobile. */
export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return <div className={`${BENTO_GRID} ${className}`}>{children}</div>;
}
