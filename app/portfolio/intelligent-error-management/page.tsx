import Link from 'next/link';

export default function IntelligentErrorManagementCaseStudy() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
      {/* Back link */}
      <Link
        href="/portfolio"
        className="text-text-secondary hover:text-white transition-colors text-sm mb-12 inline-block"
      >
        ← Back to Work
      </Link>

      {/* Project Header */}
      <div className="bg-black/20 backdrop-blur-sm p-8 lg:p-12 rounded-lg mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded">
            AI/ML DESIGN
          </span>
        </div>
        <h1 className="text-3xl lg:text-5xl font-serif mb-6">
          Intelligent Error Management (IEM)
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Redesigning AI-assisted encounter correction when users didn&apos;t trust the AI
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm mt-8">
          <div>
            <p className="text-text-tertiary mb-1">ROLE</p>
            <p>Solo Designer</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">SCOPE</p>
            <p>End-to-end ownership</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">DOMAIN</p>
            <p>AI-assisted corrections</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-32">
        <div className="bg-image-placeholder rounded overflow-hidden">
          <img
            src="/IEM/IEMHero.png"
            alt="Intelligent Error Management (IEM)"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* The Problem */}
      <div className="mb-32">
        <div className="bg-black/10 p-8 lg:p-12 rounded-lg">
          <h2 className="text-2xl font-serif mb-6">The Problem</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The original IEM design treated AI confidence tiers as navigation gates. Users moved
            through a flow that routed them based on how confident the AI was about a correction.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            In practice, this created two problems that user testing surfaced clearly: users were
            confused by the conflation of DELETE and CHANGE corrections in a single queue, and they
            didn&apos;t trust the AI enough to act on its recommendations without visual confirmation.
          </p>
          <div className="mt-8 max-w-3xl mx-auto mb-8">
            <div className="bg-image-placeholder rounded overflow-hidden">
              <img
                src="/IEM/OldIEM.png"
                alt="Previous Intelligent Error Management interface before the redesign"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-white/5 border-l-2 border-accent p-6">
            <p className="text-text-secondary italic">
              The confidence tier framing was also architecturally wrong. Confidence is a property of
              a row: a data attribute, not a stage in a workflow. Treating it as navigation created
              a mental model mismatch that made the interface harder to use, not easier.
            </p>
          </div>
        </div>
      </div>

      {/* My Approach (reframe) */}
      <div className="mb-32">
        <h2 className="text-2xl font-serif mb-6">My Approach</h2>
        <p className="text-xl text-text-primary mb-8">
          The core reframe: Confidence tiers are data attributes, not navigation gates.
        </p>
        <p className="text-text-secondary leading-relaxed mb-8">
          That single insight restructured the entire design.
        </p>
      </div>

      {/* The Decisions */}
      <div className="mb-32">
        <div className="bg-black/10 p-8 lg:p-12 rounded-lg">
          <h2 className="text-2xl font-serif mb-6">The Decisions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">
                DELETE and CHANGE corrections as separate exception queues
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Cross-team pattern work with a peer designer on Claims Management confirmed this was the
                right separation. The two correction types require different mental models and different
                actions. Conflating them was the root cause of user confusion.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                <div className="bg-image-placeholder rounded overflow-hidden">
                  <img
                    src="/IEM/ChangeTable.png"
                    alt="CHANGE correction queue table"
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-image-placeholder rounded overflow-hidden">
                  <img
                    src="/IEM/DeleteTable.png"
                    alt="DELETE correction queue table"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">
                High-confidence encounters batch-approved via a shortcut button
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Rather than routing high-confidence rows through a separate flow, they surface in the
                same table with a batch action available. Users stay in one place; the AI&apos;s
                confidence level informs their action, not their navigation path.
              </p>
              <div className="mt-6 max-w-xl mx-auto">
                <div className="bg-image-placeholder rounded overflow-hidden">
                  <img
                    src="/IEM/Show%20All%20Encounters.gif"
                    alt="High-confidence encounters: batch action and table view"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">Medium and low confidence rows visible by default</h3>
              <p className="text-text-secondary leading-relaxed">
                These are where attention is actually needed. The design makes the exceptions prominent
                without hiding the full picture.
              </p>
              <div className="mt-6 max-w-xl mx-auto">
                <div className="bg-image-placeholder rounded overflow-hidden">
                  <img
                    src="/IEM/ChangeTable.png"
                    alt="CHANGE correction queue: medium and low confidence rows visible by default"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-accent/10 border border-accent/30 p-6">
            <p className="text-sm text-accent mb-2">CROSS-PRODUCT ALIGNMENT</p>
            <p className="text-text-secondary leading-relaxed">
              The redesign also involved ongoing cross-product pattern alignment with a peer designer
              working on Claims Management, using a FigJam comparison workspace to identify shared
              patterns and avoid divergence across products.
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-image-placeholder rounded overflow-hidden">
              <img
                src="/IEM/ErrorCorrectionComparison.png"
                alt="Error correction patterns compared across IEM and Claims Management"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Outcome */}
      <div className="mb-32">
        <h2 className="text-2xl font-serif mb-6">The Outcome</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">2</p>
            <p className="text-text-secondary text-sm">Queue types (DELETE/CHANGE)</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">3</p>
            <p className="text-text-secondary text-sm">Confidence tiers as data</p>
          </div>
          <div className="text-center col-span-2 lg:col-span-1">
            <p className="text-4xl font-serif text-accent mb-2">100%</p>
            <p className="text-text-secondary text-sm">Pattern alignment with Claims</p>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed mb-8">
          <strong className="text-text-primary font-normal">Cross-Product Alignment: </strong>
          Collaborated with Claims Management designer using a FigJam comparison workspace to establish
          shared correction patterns across both products. The DELETE/CHANGE queue separation,
          validated through user testing, became a standard pattern preventing divergence as both
          products evolved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Test participants
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              5 clinical coders tested across 3 sessions
            </p>
          </div>
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Confusion reduction
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Eliminated DELETE/CHANGE conflation issue
            </p>
          </div>
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Cross-team pattern work
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              FigJam workspace with Claims Management designer
            </p>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed mb-6">
          A correction workflow where the AI&apos;s role is transparent and inspectable. Users can see
          confidence levels as data, act on high-confidence corrections efficiently, and give focused
          attention to the exceptions that actually need it.
        </p>
        <p className="text-text-secondary leading-relaxed mb-8">
          The cross-product alignment work established shared patterns that will carry forward as both
          products evolve.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-image-placeholder rounded overflow-hidden">
            <img
              src="/IEM/AIDesignPrinciples.png"
              alt="AI design principles applied in Intelligent Error Management"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mb-20 bg-white/5 border border-white/20 p-8">
        <h3 className="text-lg mb-4">Design Principle: AI Trust Through Transparency</h3>
        <p className="text-text-secondary leading-relaxed">
          Users don&apos;t need to understand how the AI works. But they need to understand{' '}
          <em>what</em> it&apos;s recommending and <em>why</em>, and they need the ability to override
          it without friction. Confidence tiers work when they inform user action, not when they gate
          navigation.
        </p>
      </div>

      {/* Skills Applied */}
      <div className="mb-20 bg-white/5 border border-white/20 p-8">
        <h3 className="text-lg mb-4">AI/ML Design Capabilities Applied</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            AI Transparency Design
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Human-in-the-Loop Workflows
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Confidence Level UX
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Cross-Product Pattern Systems
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Exception-Based Design
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-white/20 pt-12 flex justify-between">
        <Link
          href="/portfolio/mlops-data-workspace"
          className="text-text-secondary hover:text-white transition-colors text-sm"
        >
          ← Previous Project
        </Link>
        <Link href="/portfolio" className="text-text-secondary hover:text-white transition-colors text-sm">
          All Projects →
        </Link>
      </div>
    </div>
  );
}
