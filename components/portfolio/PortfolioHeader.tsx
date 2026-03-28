export default function PortfolioHeader() {
  return (
    <header className="py-16 lg:py-24 mb-16 border-b divider-thin">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <span className="text-xs tracking-widest-plus text-text-tertiary">
            AUTHENTICATED SESSION
          </span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 leading-tight">
          Product & UX Design Work
        </h1>

        <p className="text-text-secondary text-lg lg:text-xl leading-relaxed font-light max-w-2xl">
          Selected case studies from enterprise design systems, B2B SaaS products, and
          consumer-facing digital experiences. Focus on user research, interaction design,
          and measurable business outcomes.
        </p>
      </div>
    </header>
  );
}
