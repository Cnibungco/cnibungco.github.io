import Link from 'next/link';
import TnalakStrip from '@/components/TnalakStrip';
import GreenBanner from '@/components/GreenBanner';
import ProjectTag from '@/components/ProjectTag';
import { getPortfolioProject, portfolioProjectOrder, type PortfolioProjectSlug } from '@/data/portfolio';
import {
  getNextProjectHref,
  getPreviousProjectHref,
} from '@/app/portfolio/projectNav';

interface CaseStudyLayoutProps {
  slug: string;
  tagline: string;
  role: string;
  scope: string;
  status: string;
  statusLabel?: string;
  category?: string;
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  slug,
  tagline,
  role,
  scope,
  status,
  statusLabel = 'Status',
  category,
  children,
}: CaseStudyLayoutProps) {
  const project = getPortfolioProject(slug);
  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-sand-dim hover:text-sand transition-colors"
        >
          <span className="text-accent">←</span>
          Back to work
        </Link>
        <p className="case-body mt-8">This project could not be found.</p>
      </div>
    );
  }

  const previousHref = getPreviousProjectHref(slug);
  const nextHref = getNextProjectHref(slug);
  const isInNav = portfolioProjectOrder.includes(slug as PortfolioProjectSlug);

  return (
    <div>
      <TnalakStrip />

      <GreenBanner patternId={`case-banner-${slug}`}>
        <h1 className="case-banner-title max-w-4xl">{project.title}</h1>
      </GreenBanner>

      <TnalakStrip />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-8 pb-10 lg:pb-14">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-sand-dim hover:text-sand transition-colors mb-8 group"
        >
          <span className="text-accent group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to work
        </Link>

        <header className="relative pl-4 border-b border-rule pb-10">
          <div className="accent-bar" aria-hidden />
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <ProjectTag>{project.label}</ProjectTag>
            {project.tags?.map((tag) => (
              <ProjectTag key={tag}>{tag}</ProjectTag>
            ))}
          </div>
          <p className="label-caps text-sand-dim mb-3">
            {category ?? project.label.toUpperCase()} · {project.year}
          </p>
          <p className="font-newsreader text-lg lg:text-xl text-sand-dim leading-relaxed max-w-3xl">
            {tagline}
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm mt-8">
            <div>
              <dt className="label-caps text-sand-dim mb-1">Role</dt>
              <dd className="text-sand">{role}</dd>
            </div>
            <div>
              <dt className="label-caps text-sand-dim mb-1">Scope</dt>
              <dd className="text-sand">{scope}</dd>
            </div>
            <div>
              <dt className="label-caps text-sand-dim mb-1">{statusLabel}</dt>
              <dd className="text-sand">{status}</dd>
            </div>
          </dl>
        </header>
      </div>

      <TnalakStrip />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 lg:py-16 space-y-16 lg:space-y-24">
        {children}

        {isInNav && (
          <nav className="border-t border-rule pt-10 flex justify-between text-sm">
            <Link
              href={previousHref}
              className="text-sand-dim hover:text-sand transition-colors"
            >
              ← Previous
            </Link>
            <Link
              href={nextHref}
              className="text-sand-dim hover:text-sand transition-colors"
            >
              Next →
            </Link>
          </nav>
        )}
      </div>

      <TnalakStrip />
    </div>
  );
}
