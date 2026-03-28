export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
      <h1 className="text-2xl lg:text-3xl mb-12 pb-8 border-b border-white/20 glitch-hover">Projects</h1>

      <div className="space-y-16 lg:space-y-24">
        {/* Project 1 - CalOptima Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center group">
          <a href="/portfolio/caloptima-dashboard">
            <div className="bg-image-placeholder rounded overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="/CalOptima/Hero.png"
                alt="CalOptima Encounter Operations Dashboard preview"
                className="w-full h-auto"
              />
            </div>
          </a>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-text-tertiary text-sm">2024</span>
            </div>
            <a href="/portfolio/caloptima-dashboard">
              <h2 className="text-xl lg:text-2xl mb-3 group-hover:opacity-70 transition-opacity">
                CalOptima Encounter Operations Dashboard
              </h2>
            </a>
            <p className="text-text-secondary">
              Reframed pipeline monitoring from reporting to triage for a Medi-Cal managed care plan.
            </p>
          </div>
        </div>

        {/* Project 2 - MLOps Data Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center group">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-accent/10 border border-accent/30 text-accent rounded">
                AI/ML
              </span>
              <span className="text-text-tertiary text-sm">2024-Present</span>
            </div>
            <a href="/portfolio/mlops-data-workspace">
              <h2 className="text-xl lg:text-2xl mb-3 group-hover:opacity-70 transition-opacity">
                MLOps Data Workspace
              </h2>
            </a>
            <p className="text-text-secondary">
              Unified connection-scoped ML workspace for healthcare data scientists, collapsing three fragmented interfaces into governed asset discovery.
            </p>
          </div>
          <a href="/portfolio/mlops-data-workspace" className="order-1 lg:order-2">
            <div className="bg-image-placeholder rounded overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="/MLOps%20Data%20Workspace/Hero.png"
                alt="MLOps Data Workspace preview"
                className="w-full h-auto"
              />
            </div>
          </a>
        </div>

        {/* Project 3 - Intelligent Error Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center group">
          <a href="/portfolio/intelligent-error-management">
            <div className="bg-image-placeholder rounded overflow-hidden hover:opacity-90 transition-opacity">
              <img
                src="/IEM/IEMHero.png"
                alt="Intelligent Error Management (IEM) preview"
                className="w-full h-auto"
              />
            </div>
          </a>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-accent/10 border border-accent/30 text-accent rounded">
                AI/ML
              </span>
              <span className="text-text-tertiary text-sm">2024</span>
            </div>
            <a href="/portfolio/intelligent-error-management">
              <h2 className="text-xl lg:text-2xl mb-3 group-hover:opacity-70 transition-opacity">
                Intelligent Error Management (IEM)
              </h2>
            </a>
            <p className="text-text-secondary">
              Redesigned AI-assisted corrections when users didn&apos;t trust the AI. Confidence reads as data, not navigation.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
