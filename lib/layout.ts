/** Page shell: container width + horizontal padding */
export const SECTION_CONTAINER = 'max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10';

/** Uniform vertical padding between page sections */
export const SECTION_PADDING = 'py-10 lg:py-16';

/** Section content wrapper: container width + horizontal + vertical padding */
export const SECTION_INNER = `${SECTION_CONTAINER} ${SECTION_PADDING}`;

/** Clears the fixed header on every routed page */
export const PAGE_SHELL = `${SECTION_CONTAINER} pt-24 pb-16 lg:pt-28 lg:pb-24`;

/** Shared rhythm: section title block -> main content */
export const SECTION_HEADER_TO_CONTENT = 'mt-8 lg:mt-10';

/** Four-column bento that collapses to two at md and one on mobile */
export const BENTO_GRID =
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5';

/** Shared look of every bento tile */
export const BENTO_CARD_BASE =
  'relative overflow-hidden rounded-2xl border border-ocean-200 shadow-bento';

export const HEADER_HEIGHT_PX = 64;
