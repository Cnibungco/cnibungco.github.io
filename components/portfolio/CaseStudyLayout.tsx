import Link from 'next/link';

interface CaseStudyLayoutProps {
  title: string;
  client: string;
  year: string;
  role: string;
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  title,
  client,
  year,
  role,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12">
      <nav className="py-8 border-b divider-thin mb-12">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary 
            transition-colors duration-200 text-sm tracking-wide group"
        >
          <span className="text-accent group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>
          <span>BACK TO PORTFOLIO</span>
        </Link>
      </nav>

      <header className="mb-16 lg:mb-24">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-text-secondary text-lg">{client}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t divider-thin">
          <div>
            <dt className="text-xs tracking-widest-plus text-text-tertiary mb-2">YEAR</dt>
            <dd className="text-text-secondary">{year}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest-plus text-text-tertiary mb-2">ROLE</dt>
            <dd className="text-text-secondary">{role}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-xs tracking-widest-plus text-text-tertiary mb-2">STATUS</dt>
            <dd className="text-text-secondary">Shipped</dd>
          </div>
        </div>
      </header>

      <div className="pb-24">
        {children}
      </div>

      <nav className="border-t divider-thin pt-12 pb-24">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary 
            transition-colors duration-200 group"
        >
          <span>VIEW NEXT PROJECT</span>
          <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Link>
      </nav>
    </div>
  );
}
