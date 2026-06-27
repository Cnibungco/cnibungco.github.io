export type PortfolioProject = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  year: string;
  tags?: string[];
  heroImage: string;
  /** Shown on /portfolio index. Set false for deep-link-only case studies. */
  listed: boolean;
};

/**
 * Portfolio projects in display order.
 * Reorder this array when you want to change index + prev/next navigation.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'caloptima-dashboard',
    label: 'Healthcare',
    title: 'CalOptima Encounter Operations Dashboard',
    summary:
      'Reframed pipeline monitoring from reporting to triage for a Medi-Cal managed care plan.',
    year: '2024',
    heroImage: '/CalOptima/Hero.png',
    listed: true,
  },
  {
    slug: 'mlops-data-workspace',
    label: 'Healthcare',
    title: 'MLOps Data Workspace',
    summary:
      'Unified connection-scoped ML workspace for healthcare data scientists, collapsing three fragmented interfaces into governed asset discovery.',
    year: '2024–Present',
    tags: ['AI / ML'],
    heroImage: '/MLOps%20Data%20Workspace/Hero.png',
    listed: true,
  },
  {
    slug: 'intelligent-error-management',
    label: 'Healthcare',
    title: 'Intelligent Error Management (IEM)',
    summary:
      "Redesigned AI-assisted corrections when users didn't trust the AI. Confidence reads as data, not navigation.",
    year: '2024',
    tags: ['AI / ML'],
    heroImage: '/IEM/IEMHero.png',
    listed: true,
  },
  {
    slug: 'inbound-chart-review',
    label: 'Healthcare',
    title: 'Inbound Chart Review Reconciliation Dashboard',
    summary:
      'Replacing an unreadable AI prototype with a pipeline that users could actually navigate.',
    year: '2024',
    heroImage: '/EM.png',
    listed: false,
  },
];

export const listedPortfolioProjects = portfolioProjects.filter((p) => p.listed);

export const portfolioProjectOrder = listedPortfolioProjects.map((p) => p.slug);

export type PortfolioProjectSlug = (typeof portfolioProjectOrder)[number];

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
