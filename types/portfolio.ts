export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  role: string;
  scope: string;
  outcome: string;
  tags: string[];
  year: string;
  nda: boolean;
  
  // Full case study content
  overview?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  results?: string;
  learnings?: string;
  
  // Media
  heroImage?: string;
  images?: string[];
  
  // Metadata
  publishedAt?: string;
  featured?: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'enterprise-design-system',
    title: 'Enterprise Design System',
    client: 'Financial Services Platform',
    role: 'Lead Product Designer',
    scope: '18 months · Team of 4',
    outcome: 'Reduced design-to-dev handoff time by 60%, established component library serving 12 product teams',
    tags: ['Design Systems', 'Component Library', 'Design Tokens', 'Documentation'],
    year: '2023–2024',
    nda: false,
    featured: true,
  },
  {
    slug: 'b2b-onboarding',
    title: 'B2B SaaS Onboarding Redesign',
    client: 'Confidential Client',
    role: 'Senior UX Designer',
    scope: '6 months · Cross-functional team',
    outcome: 'Improved trial-to-paid conversion by 34%, reduced time-to-first-value from 14 days to 3 days',
    tags: ['User Research', 'Onboarding', 'Conversion Optimization', 'SaaS'],
    year: '2023',
    nda: true,
    featured: true,
  },
  {
    slug: 'mobile-checkout',
    title: 'Mobile-First E-Commerce Checkout',
    client: 'Direct-to-Consumer Brand',
    role: 'Product Designer',
    scope: '4 months · Solo contributor',
    outcome: 'Increased mobile checkout completion by 28%, reduced cart abandonment from 73% to 51%',
    tags: ['Mobile Design', 'E-Commerce', 'User Testing', 'A/B Testing'],
    year: '2022',
    nda: false,
    featured: false,
  },
  {
    slug: 'patient-portal',
    title: 'Healthcare Patient Portal',
    client: 'Regional Health System',
    role: 'UX Lead',
    scope: '12 months · Agile pod',
    outcome: 'Achieved 4.6/5 user satisfaction score, reduced support tickets by 41%, WCAG AA compliant',
    tags: ['Healthcare', 'Accessibility', 'HIPAA', 'Patient Experience'],
    year: '2021–2022',
    nda: true,
    featured: false,
  },
  {
    slug: 'analytics-dashboard',
    title: 'Internal Analytics Dashboard',
    client: 'SaaS Startup (Series B)',
    role: 'Product Designer',
    scope: '3 months · Embedded in engineering',
    outcome: 'Enabled data-driven decisions for 200+ employees, 89% daily active usage rate',
    tags: ['Data Visualization', 'Dashboards', 'Internal Tools', 'Stakeholder Management'],
    year: '2021',
    nda: false,
    featured: false,
  },
];
