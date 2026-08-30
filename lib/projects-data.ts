export type ProjectCategory = 'company' | 'side';

export interface ProjectStructure {
  id: string;
  category: ProjectCategory;
  tags: string[];
  illustrationVariant?: 'manufacturing' | 'ai' | 'talent';
  /** External live site (opens in new tab) */
  ctaHref?: string;
  /** Inline concept slider on the project card */
  caseStudy?: 'content-platform' | 'mimose';
  schemaUrl?: string;
}

export const COMPANY_PROJECTS: ProjectStructure[] = [
  {
    id: 'manufacturing-lifecycle',
    category: 'company',
    tags: ['Angular 20+', 'Figma', 'Restful API'],
    illustrationVariant: 'manufacturing',
  },
  {
    id: 'talent-development',
    category: 'company',
    tags: ['Angular', 'Spring Boot'],
    illustrationVariant: 'talent',
  },
];

export const SIDE_PROJECTS: ProjectStructure[] = [
  {
    id: 'content-platform',
    category: 'side',
    tags: ['Next.js', 'React', 'Figma', 'Headless CMS', 'Technical SEO'],
    // TODO: Concept demo — bật lại khi có ví dụ: caseStudy: 'content-platform',
  },
  {
    id: 'mimose',
    category: 'side',
    tags: ['React', 'Spring Boot', 'Leading-self', 'AI', 'Figma'],
    illustrationVariant: 'ai',
    // TODO: Concept demo — bật lại khi có ví dụ: caseStudy: 'mimose',
  },
];

export const ALL_PROJECTS: ProjectStructure[] = [...COMPANY_PROJECTS, ...SIDE_PROJECTS];

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
