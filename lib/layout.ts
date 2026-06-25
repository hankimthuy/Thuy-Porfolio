export const SECTION_CONTAINER = 'max-w-[1440px] mx-auto px-6 lg:px-16 xl:px-20';

/** Uniform vertical padding between page sections */
export const SECTION_PADDING = 'py-8 lg:py-16';

/** Section content wrapper: container width + horizontal + vertical padding */
export const SECTION_INNER = `${SECTION_CONTAINER} ${SECTION_PADDING}`;

/** Offset anchor scroll targets below fixed header */
export const SECTION_SCROLL_MARGIN = 'scroll-mt-16';

/** Hero top clears fixed header */
export const HERO_SECTION =
  'overflow-x-hidden scroll-mt-16 pt-20 lg:pt-24 pb-20 lg:pb-24 bg-gradient-to-b from-[#F4EEFF]/50 via-white to-[#f8f9ff]';

/** Shared rhythm: section title block → main content */
export const SECTION_HEADER_TO_CONTENT = 'mt-8 lg:mt-10';

export const HEADER_HEIGHT_PX = 64;
