import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  client: string;
  role: string;
  scope: string;
  outcome: string;
  tags: string[];
  href: string;
  year: string;
  nda: boolean;
}

export default function CaseStudyCard({
  title,
  client,
  role,
  scope,
  outcome,
  tags,
  href,
  year,
  nda,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group block border-b divider-thin hover:border-text-tertiary/30 transition-colors duration-300"
    >
      <article className="py-8 lg:py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl lg:text-2xl font-light tracking-tight group-hover:text-text-primary transition-colors duration-300">
                {title}
              </h3>
              {nda && (
                <span
                  className="text-[10px] tracking-widest px-2 py-0.5 border border-text-tertiary/30 text-text-tertiary rounded-sm"
                  aria-label="This project is under NDA"
                >
                  NDA
                </span>
              )}
            </div>
            <p className="text-text-tertiary text-sm">{client}</p>
          </div>

          <div className="text-xs tracking-wide text-text-tertiary sm:text-right whitespace-nowrap">
            {year}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6">
          <div>
            <dt className="text-xs tracking-widest-plus text-text-tertiary mb-1.5">ROLE</dt>
            <dd className="text-text-secondary text-sm">{role}</dd>
          </div>

          <div>
            <dt className="text-xs tracking-widest-plus text-text-tertiary mb-1.5">SCOPE</dt>
            <dd className="text-text-secondary text-sm">{scope}</dd>
          </div>
        </div>

        <div className="mb-6">
          <dt className="text-xs tracking-widest-plus text-text-tertiary mb-2">OUTCOME</dt>
          <dd className="text-text-secondary leading-relaxed max-w-3xl">{outcome}</dd>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-wide px-3 py-1 bg-bg-secondary text-text-tertiary 
                rounded-full border border-text-tertiary/10 group-hover:border-text-tertiary/20 
                transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-text-tertiary group-hover:text-text-secondary 
          group-hover:gap-3 transition-all duration-300">
          <span className="text-xs tracking-widest-plus">VIEW CASE STUDY</span>
          <span className="text-accent">→</span>
        </div>
      </article>
    </Link>
  );
}
