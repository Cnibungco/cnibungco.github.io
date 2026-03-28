import Link from 'next/link';

interface FeaturedProjectProps {
  title: string;
  category: string;
  year: string;
  description: string;
  href: string;
  imagePlaceholder: 'gradient-cyan' | 'gradient-magenta' | 'gradient-violet' | 'gradient-amber';
  stamp?: 'LIVE' | 'NEW' | 'ARCHIVE';
}

const gradientStyles = {
  'gradient-cyan': 'from-accent/20 via-accent/5 to-transparent',
  'gradient-magenta': 'from-pink-500/20 via-purple-500/5 to-transparent',
  'gradient-violet': 'from-violet-500/20 via-indigo-500/5 to-transparent',
  'gradient-amber': 'from-amber-500/20 via-orange-500/5 to-transparent',
};

export default function FeaturedProject({
  title,
  category,
  year,
  description,
  href,
  imagePlaceholder,
  stamp,
}: FeaturedProjectProps) {
  return (
    <Link
      href={href}
      className="group block"
    >
      <article className="h-full flex flex-col">
        <div className="relative aspect-[3/4] bg-bg-secondary overflow-hidden mb-6">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradientStyles[imagePlaceholder]} 
              opacity-40 group-hover:opacity-60 transition-opacity duration-700`}
          />
          
          <div
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
            style={{
              backgroundImage: `
                linear-gradient(rgba(232, 230, 227, 1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(232, 230, 227, 1) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />

          {stamp && (
            <div className="absolute top-6 right-6 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 backdrop-blur-sm border border-accent/30 
                  rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                
                <div className="relative px-4 py-2 text-xs tracking-widest-plus text-accent font-medium">
                  {stamp}
                </div>
              </div>
            </div>
          )}

          <div className="absolute inset-0 border border-text-primary/0 group-hover:border-text-primary/10 
            transition-colors duration-500" />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3 text-xs tracking-widest-plus text-text-tertiary">
            <span>{category}</span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary/40" />
            <span>{year}</span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-4 
            group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>

          <p className="text-text-secondary leading-relaxed font-light flex-1">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-text-tertiary 
            group-hover:text-accent group-hover:gap-3 transition-all duration-300">
            <span className="text-sm tracking-wide">VIEW PROJECT</span>
            <span className="text-accent">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
