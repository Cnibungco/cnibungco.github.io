import Link from 'next/link';

export default function CalOptimaCaseStudy() {
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
        <p className="text-text-secondary text-sm tracking-widest mb-3">
          HEALTHCARE OPERATIONS · 2024
        </p>
        <h1 className="text-3xl lg:text-5xl font-serif mb-6">
          CalOptima Encounter Operations Dashboard
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Claim-to-encounter pipeline monitoring for a Medi-Cal managed care plan
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
            <p className="text-text-tertiary mb-1">STATUS</p>
            <p>In engineering</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-32">
        <div className="max-w-3xl mx-auto mb-4">
          <div className="bg-image-placeholder rounded overflow-hidden">
            <img
              src="/CalOptima/Hero.png"
              alt="CalOptima Encounter Operations Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="mb-32">
        <div className="bg-black/10 p-8 lg:p-12 rounded-lg">
          <h2 className="text-2xl font-serif mb-6">The Problem</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            CalOptima&apos;s encounter operations team, the people responsible for keeping the
            claim-to-encounter submission pipeline healthy and compliant, had no system-level
            orientation layer. Every morning, they needed to answer the same set of questions: Is
            flow normal or deviating? What&apos;s driving exceptions? Who owns the fix?
          </p>
          <p className="text-text-secondary leading-relaxed">
            But to do that, they had to navigate directly inside Encounter Management&apos;s page-level
            views, piecing together a picture of system health from disconnected screens, raw volume
            metrics, and external tools like SmartTrader.
          </p>
          <div className="bg-white/5 border-l-2 border-accent p-6 mt-6">
            <p className="text-text-secondary italic">
              The result was a workflow optimized for investigation, not orientation. Users had to
              already know where to look before they could understand what was wrong.
            </p>
          </div>

          <div className="mt-8">
            <div className="max-w-xl mx-auto mb-4">
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded bg-image-placeholder">
                  <img
                    src="/CalOptima/OldDash1.png"
                    alt="Legacy dashboard view 1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded bg-image-placeholder">
                  <img
                    src="/CalOptima/OldDash2.png"
                    alt="Legacy dashboard view 2"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded bg-image-placeholder">
                  <img
                    src="/CalOptima/OldDash3.png"
                    alt="Legacy dashboard view 3"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-center text-sm italic text-text-tertiary">
                Some of the 7 dashboards they had to evaluate before.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* My Approach (reframe) */}
      <div className="mb-32">
        <h2 className="text-2xl font-serif mb-6">My Approach</h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          I reframed the dashboard&apos;s purpose from{' '}
          <strong className="text-text-primary">reporting to triage</strong>. Rather than showing
          comprehensive data, it needed to answer one question first:{' '}
          <em>Can we proceed normally today?</em> Everything else follows from that: root cause,
          ownership, and remediation.
        </p>

        <div className="max-w-2xl mx-auto mb-4">
          <div className="bg-image-placeholder rounded overflow-hidden">
            <img
              src="/CalOptima/Diagram.png"
              alt="CalOptima dashboard structure and triage framing"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* The Decisions */}
      <div className="mb-32">
        <div className="bg-black/10 p-8 lg:p-12 rounded-lg">
          <h2 className="text-2xl font-serif mb-6">The Decisions</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl mb-3">1. Exception-led monitoring over exhaustive display</h3>
              <p className="text-text-secondary leading-relaxed">
                I reduced the metric surface to six meaningful KPIs grouped into two frames: Payer
                Performance (conversion rate, first pass acceptance, revenue leakage) and Regulatory
                Compliance (completeness, accuracy, timeliness). Sparklines and stacked area trends
                visually de-emphasize healthy volume in gray so that deviations surface immediately
                without requiring cognitive effort.
              </p>
              <div className="mt-6 max-w-xl mx-auto mb-4">
                <div className="bg-image-placeholder rounded overflow-hidden">
                  <img
                    src="/CalOptima/Exceptions.gif"
                    alt="Exception-led monitoring: KPI and trend behavior in the dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">2. A three-tier interaction hierarchy</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Top level: KPI summary cards + full pipeline flow view for system orientation.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Mid level: clicking workflow nodes filters the supporting table and surfaces
                exception context via popovers, including trend data and links to the relevant
                remediation tool.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Detail level: routed into Encounter Management rather than duplicated, preserving a
                single source of truth for transaction-level action.
              </p>
              <div className="mt-6 max-w-xl mx-auto mb-4">
                <div className="bg-image-placeholder rounded overflow-hidden">
                  <img
                    src="/CalOptima/Fallout.gif"
                    alt="Three-tier interaction: pipeline flow, filters, and routing"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">3. Progressive disclosure, not information density</h3>
              <p className="text-text-secondary leading-relaxed">
                Popovers carry trend context, exception breakdowns, and outbound links. The
                dashboard surface itself stays clean. Users get what they need to decide whether to
                dig in, and exactly where to go when they do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Outcome */}
      <div className="mb-32">
        <h2 className="text-2xl font-serif mb-6">The Outcome</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">7→1</p>
            <p className="text-text-secondary text-sm">Dashboard consolidation</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">6</p>
            <p className="text-text-secondary text-sm">Key performance indicators</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">3-tier</p>
            <p className="text-text-secondary text-sm">Interaction hierarchy</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">2M+</p>
            <p className="text-text-secondary text-sm">Claims processed monthly</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Stakeholder interviews
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              12 ops team members interviewed
            </p>
          </div>
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Design iterations
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              4 rounds of usability testing
            </p>
          </div>
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Workshops facilitated
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              3 cross-functional alignment sessions
            </p>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed mb-6">
          The dashboard design addressed a critical gap for CalOptima&apos;s encounter operations team
          of 12+ staff members who previously spent hours each morning piecing together system health
          from disconnected views. By consolidating 7 separate tools into a single exception-led
          monitoring surface with 6 meaningful KPIs, the design enables the team to answer
          &apos;Can we proceed normally today?&apos; in seconds rather than hours.
        </p>
        <p className="text-text-secondary leading-relaxed mb-8">
          Design delivered on schedule and currently in engineering implementation. The dashboard
          establishes a system-level orientation layer that didn&apos;t previously exist for
          CalOptima&apos;s encounter ops team. It moves them from reactive investigation to proactive
          exception monitoring.
        </p>
        <div className="max-w-3xl mx-auto mb-4">
          <div className="bg-image-placeholder rounded overflow-hidden">
            <img
              src="/CalOptima/Outcome.png"
              alt="CalOptima Encounter Operations Dashboard outcome"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Skills Applied */}
      <div className="mb-20 bg-white/5 border border-white/20 p-8">
        <h3 className="text-lg mb-4">Design Capabilities Applied</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white/10 border border-white/20 text-text-secondary text-sm">
            Information Architecture
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 text-text-secondary text-sm">
            Progressive Disclosure
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 text-text-secondary text-sm">
            Exception-Based Design
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 text-text-secondary text-sm">
            Healthcare Operations
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 text-text-secondary text-sm">
            Data Visualization
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-white/20 pt-12 flex justify-between">
        <Link
          href="/portfolio"
          className="text-text-secondary hover:text-white transition-colors text-sm"
        >
          ← All Projects
        </Link>
        <Link
          href="/portfolio/mlops-data-workspace"
          className="text-text-secondary hover:text-white transition-colors text-sm"
        >
          Next Project →
        </Link>
      </div>
    </div>
  );
}
