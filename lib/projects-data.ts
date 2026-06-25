export type ProjectCategory = 'company' | 'side';

export interface ProjectData {
  id: string;
  category: ProjectCategory;
  title: string;
  tags: string[];
  problemText: string;
  solutionText: string;
  impactText: string;
  problemHighlights?: string[];
  solutionHighlights?: string[];
  impactHighlights?: string[];
  cta?: {
    label: string;
    href: string;
  };
  illustrationVariant?: 'manufacturing' | 'ai' | 'talent';
  /** Plain-text summary for JSON-LD */
  schemaDescription: string;
  schemaUrl?: string;
}

export const COMPANY_PROJECTS: ProjectData[] = [
  {
    id: 'manufacturing-lifecycle',
    category: 'company',
    title: 'Centralized Manufacturing Lifecycle',
    tags: ['Angular 20+', 'Figma', 'Restful API'],
    problemText:
      'Fragmented workflows and data silos made tracking the end-to-end manufacturing lifecycle impossible.',
    problemHighlights: ['Fragmented workflows', 'data silos'],
    solutionText:
      'Architected a unified platform integrating inventory, BOM management, invoicing, and compliance audits.',
    solutionHighlights: ['unified platform', 'BOM management', 'compliance audits'],
    impactText: 'Replaced manual Excel tracking with a unified digital tool and eliminating data redundancy.',
    illustrationVariant: 'manufacturing',
    schemaDescription:
      'Enterprise Angular platform at Bosch digitalizing manufacturing lifecycle, BOM, and inventory management.',
  },
  {
    id: 'talent-development',
    category: 'company',
    title: 'Talent Development Platform',
    tags: ['Angular', 'Spring Boot'],
    problemText:
      'Alignment gap between individual aspirations and organizational goals.',
    problemHighlights: ['individual aspirations'],
    solutionText:
      'Developed an end-to-end platform for managers and L&D teams to co-create personalized learning roadmaps.',
    solutionHighlights: ['personalized learning roadmaps'],
    impactText:
      'Streamlined performance evaluation and enhanced employee engagement.',
    impactHighlights: ['performance evaluation'],
    illustrationVariant: 'talent',
    schemaDescription:
      'Angular and Spring Boot talent development platform for personalized learning roadmaps at Bosch.',
  },
];

export const SIDE_PROJECTS: ProjectData[] = [
  {
    id: 'mimose',
    category: 'side',
    title: 'MimoSe: Make Sense of Me',
    tags: ['React', 'Spring Boot', 'Leading-self', 'AI', 'Figma'],
    problemText:
      'High friction in traditional journaling leads to inconsistent self-awareness.',
    problemHighlights: ['High friction'],
    solutionText:
      'A Low-Friction Framework powered by Proactive AI—acting as a companion through the Innerverse and Outerverse.',
    solutionHighlights: ['Low-Friction Framework', 'Proactive AI', 'Innerverse', 'Outerverse'],
    impactText: 'Empowered Personal Autonomy using AI-driven insights.',
    impactHighlights: ['Personal Autonomy'],
    // Temporarily shut down — hide dev link until MimoSe is back online
    // cta: {
    //   label: 'Visit MimoSE',
    //   href: 'https://dev.mimose.io.vn/',
    // },
    illustrationVariant: 'ai',
    schemaDescription:
      'AI-powered self-awareness journaling app built with React and Spring Boot.',
    // schemaUrl: 'https://dev.mimose.io.vn/',
  },
  {
    id: 'ps-invest',
    category: 'side',
    title: 'Phụng Sự Đầu Tư (Headless CMS)',
    tags: ['Next.js', 'React', 'Ant Design', 'Headless CMS', 'Technical SEO'],
    problemText:
      'Editors needed to publish blogs, books, and landing pages on their own — with technical SEO built in — without waiting on a dev for every release.',
    problemHighlights: ['publish blogs, books, and landing pages', 'technical SEO'],
    solutionText:
      'Shipped a headless CMS admin (React, Ant Design, RBAC) and a Next.js 15 storefront with SSR, Apollo GraphQL, and SEO (metadata, JSON-LD, sitemap, slug redirects). Defined content modules & editor workflows for blogs, books, categories, and site-wide SEO.',
    solutionHighlights: [
      'headless CMS admin',
      'Next.js 15 storefront',
      'content modules & editor workflows',
    ],
    impactText:
      'Live at psinvest.vn — content team self-publishes; storefront serves structured SEO on articles and the High Margin landing.',
    impactHighlights: ['Live at psinvest.vn'],
    cta: {
      label: 'View live site',
      href: 'https://psinvest.vn/',
    },
    schemaDescription:
      'Custom headless CMS admin and Next.js storefront with technical SEO — built for Phụng Sự Đầu Tư.',
    schemaUrl: 'https://psinvest.vn/',
  },
];

export const ALL_PROJECTS: ProjectData[] = [...COMPANY_PROJECTS, ...SIDE_PROJECTS];

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
