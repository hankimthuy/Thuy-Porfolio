export type ProjectCategory = 'company' | 'side';

export interface ProjectStructure {
  id: string;
  category: ProjectCategory;
  tags: string[];
  /** External live site (opens in new tab) */
  ctaHref?: string;
  schemaUrl?: string;
}

export const COMPANY_PROJECTS: ProjectStructure[] = [
  {
    id: 'manufacturing-lifecycle',
    category: 'company',
    tags: ['Angular 20+', 'Figma', 'Restful API'],
  },
  {
    id: 'talent-development',
    category: 'company',
    tags: ['Angular', 'Spring Boot'],
  },
];

export const SIDE_PROJECTS: ProjectStructure[] = [
  {
    id: 'content-platform',
    category: 'side',
    tags: ['Next.js', 'React', 'Figma', 'Headless CMS', 'Technical SEO'],
  },
  {
    id: 'aura-self-ai',
    category: 'side',
    tags: ['React', 'Spring Boot', 'AI Reflection', 'PRM'],
    ctaHref: 'https://www.mimose.io.vn/',
  },
  {
    id: 'time-machine',
    category: 'side',
    tags: ['Next.js', 'React', 'Storytelling'],
    ctaHref: 'https://journey.hankimthuy.com/',
    schemaUrl: 'https://journey.hankimthuy.com/',
  },
];

export const ALL_PROJECTS: ProjectStructure[] = [...COMPANY_PROJECTS, ...SIDE_PROJECTS];

/**
 * Showcases' display order: one continuous story instead of two disconnected
 * "independent vs. enterprise" groups — small personal builds, through
 * enterprise scale, closing on the personal/creative side project.
 */
export const SHOWCASE_ORDER: ProjectStructure[] = [
  SIDE_PROJECTS[0], // content-platform
  SIDE_PROJECTS[1], // aura-self-ai
  COMPANY_PROJECTS[1], // talent-development
  COMPANY_PROJECTS[0], // manufacturing-lifecycle
  SIDE_PROJECTS[2], // time-machine
];

export const GOOGLE_UX_CREDENTIAL = {
  name: 'Google UX Design Professional Certificate',
  credentialId: 'K0EK4KJTLR3S',
  pdfPath: '/pdf/Coursera K0EK4KJTLR3S.pdf',
  issuer: 'Google',
} as const;

export const BOSCH_EMPLOYER = {
  name: 'Bosch Global Software Technologies',
  url: 'https://www.bosch.com/',
} as const;

/**
 * Technologies surfaced on the home page. Every entry is attested elsewhere in
 * the site content — the skills cards or a project's tags.
 */
export const CORE_TECH = [
  'React',
  'Angular',
  'TypeScript',
  'Next.js',
  'Spring Boot',
  'Figma',
] as const;
