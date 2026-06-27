import Link from 'next/link';
import type { PortfolioProject } from '@/data/portfolio';
import ProjectTag from '@/components/ProjectTag';

interface PortfolioIndexCardProps {
  project: PortfolioProject;
  imagePosition: 'left' | 'right';
}

export default function PortfolioIndexCard({
  project,
  imagePosition,
}: PortfolioIndexCardProps) {
  const href = `/portfolio/${project.slug}`;
  const imageFirst = imagePosition === 'left';

  const image = (
    <Link href={href} className="block group/image">
      <div className="rounded-sm bg-image-placeholder overflow-hidden flex items-center justify-center h-[220px] sm:h-[260px] lg:h-[300px] group-hover/image:opacity-90 transition-opacity duration-200">
        <img
          src={project.heroImage}
          alt={`${project.title} preview`}
          className="max-w-full max-h-full w-auto h-auto object-contain"
        />
      </div>
    </Link>
  );

  const text = (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <ProjectTag>{project.label}</ProjectTag>
        {project.tags?.map((tag) => (
          <ProjectTag key={tag}>{tag}</ProjectTag>
        ))}
        <span className="text-sm text-sand-dim">{project.year}</span>
      </div>
      <Link href={href}>
        <h2 className="font-newsreader text-xl lg:text-2xl mb-3 text-sand group-hover:opacity-80 transition-opacity">
          {project.title}
        </h2>
      </Link>
      <p className="case-body mb-4">
        {project.summary}
      </p>
      <Link
        href={href}
        className="label-caps inline-flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
      >
        View case study
        <span aria-hidden>→</span>
      </Link>
    </div>
  );

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-6 lg:px-12 py-12 lg:py-16 border-b border-rule group">
      <div className={imageFirst ? 'order-1' : 'order-1 lg:order-2'}>{image}</div>
      <div className={imageFirst ? 'order-2' : 'order-2 lg:order-1'}>{text}</div>
    </article>
  );
}
