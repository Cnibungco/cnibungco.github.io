import Link from 'next/link';
import { getNextProjectHref, getPreviousProjectHref } from '../projectNav';

export default function InboundChartReviewCaseStudy() {
  const previousProjectHref = getPreviousProjectHref('inbound-chart-review');
  const nextProjectHref = getNextProjectHref('inbound-chart-review');

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
          Inbound Chart Review Reconciliation Dashboard
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Replacing an unreadable AI prototype with a pipeline that users could actually navigate
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm mt-8">
          <div>
            <p className="text-text-tertiary mb-1">ROLE</p>
            <p>Design Lead</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">ARTIFACTS</p>
            <p>Figma prototype, FigJam co-design board</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">DOMAIN</p>
            <p>Payer operations</p>
          </div>
        </div>
      </div>

      {/* TODO: Add hero pipeline overview screenshot */}
      <div className="mb-32">
        <div className="min-h-[8rem] bg-image-placeholder rounded overflow-hidden">
          <div className="h-full min-h-[8rem] w-full bg-gradient-to-br from-white/5 to-transparent" />
        </div>
      </div>

      {/* The Problem */}
      <div className="mb-32">
        <div className="bg-black/10 p-8 lg:p-12 rounded-lg">
          <h2 className="text-2xl font-serif mb-8">The Problem</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
            <div>
              <p className="text-text-secondary leading-relaxed mb-6">
                The existing approach to visualizing the inbound chart review lifecycle was a Sankey
                diagram. Then later an AI-generated prototype that had evolved into an unreadable spider
                graph of nodes with no clear directionality or scannable hierarchy.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Nisar, the primary user (a data analyst whose daily workflow centers on tracking
                originator IDs and root-causing chart holds), couldn&apos;t parse the flow, couldn&apos;t
                identify where charts were falling out, and couldn&apos;t act on what he was seeing.
              </p>
            </div>

            {/* TODO: Add screenshot of unreadable legacy prototype */}
            <div className="min-h-[8rem] bg-image-placeholder rounded overflow-hidden">
              <div className="h-full min-h-[8rem] w-full bg-gradient-to-br from-white/5 to-transparent" />
            </div>
          </div>

          <div className="bg-white/5 border-l-4 border-accent rounded-r-lg p-8 mt-8">
            <p className="text-text-secondary italic">
              The PM, Sridhar, had attempted to solve it with an AI prototype. It made the problem worse.
            </p>
          </div>
        </div>
      </div>

      {/* My Approach (reframe) */}
      <div className="mb-32">
        <h2 className="text-2xl font-serif mb-8">My Approach</h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          I scrapped the existing direction entirely. Rather than iterate on the Sankey or the AI
          prototype, I stepped back to the core question:{' '}
          <strong className="text-text-primary">
            what does Nisar actually need to understand at a glance?
          </strong>
        </p>
        <p className="text-text-secondary leading-relaxed mb-8">
          The answer was linear and sequential: a file enters, moves through stages, either converts or
          falls out. A branching pipeline format mapped directly to that mental model in a way a node
          graph never could.
        </p>

        <div className="bg-white/5 rounded-lg p-8 mb-10">
          <p className="text-xs tracking-[0.18em] text-text-tertiary mb-4">DESIGN PROCESS</p>
          <p className="text-text-secondary leading-relaxed">
            I designed two options and co-designed with Sridhar to evaluate them. We aligned on the
            branching pipeline with lane-based fallout representation. Key decisions from there:
          </p>
        </div>
      </div>

      {/* The Decisions */}
      <div className="mb-32">
        <div className="bg-black/10 p-8 lg:p-12 rounded-lg">
          <h2 className="text-2xl font-serif mb-8">The Decisions</h2>

          {/* TODO: Add side-by-side design options screenshot */}
          <div className="mb-10 min-h-[8rem] bg-image-placeholder rounded overflow-hidden">
            <div className="h-full min-h-[8rem] w-full bg-gradient-to-br from-white/5 to-transparent" />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-8">
                Linked vs. Unlinked Charts as a toggle, not side-by-side panels
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Equal visual weight, no implied hierarchy between states.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-8">
                Exclusions as an amber banner above the tab bar, not a pipeline node
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Exclusions aren&apos;t part of the flow. They&apos;re a condition that affects it.
                Treating them as a node misrepresented the data model.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-8">
                Fallout branches directly from the Linked/Unlinked Charts nodes
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Not from the Submitted node. This was a data model decision that required alignment with
                engineering and changed how the branching logic was read.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-8">
                All pipeline nodes clickable with tailored popups per node type
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Each popup is scoped to what&apos;s actionable at that stage: including a Fallout
                Details popup with three tabs, a donut chart for tag distribution, horizontal bar chart
                for disposition reasons, Internal/External/All segmentation, Originator ID column, and
                Export to Excel.
              </p>
            </div>
          </div>

          {/* TODO: Add final branching pipeline interaction screenshot */}
          <div className="mt-10 min-h-[8rem] bg-image-placeholder rounded overflow-hidden">
            <div className="h-full min-h-[8rem] w-full bg-gradient-to-br from-white/5 to-transparent" />
          </div>

          <div className="mt-10 bg-white/5 border-l-4 border-accent rounded-r-lg p-8">
            <p className="text-xs tracking-[0.18em] text-accent mb-4">CO-DESIGN ARTIFACT</p>
            <p className="text-text-secondary leading-relaxed">
              I also produced an interactive HTML session template and a FigJam co-design board to
              facilitate structured PM review sessions.
            </p>
          </div>
        </div>
      </div>

      {/* The Outcome */}
      <div className="mb-32">
        <h2 className="text-2xl font-serif mb-8">The Outcome</h2>
        <p className="text-text-secondary leading-relaxed">
          A pipeline visualization that Nisar can actually navigate: with a clear lifecycle view, actionable
          fallout details, and a clickable system that routes him to the right data at each stage. The FigJam 
          co-design board enabled async alignment across stakeholders without requiring synchronous meetings 
          for every decision.
        </p>
      </div>

      {/* Skills Applied */}
      <div className="mb-32">
        <h3 className="text-lg mb-8">Design Capabilities Applied</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-white/10 border border-white/20 text-text-secondary text-base rounded-md">
            Information Architecture
          </span>
          <span className="px-4 py-2 bg-white/10 border border-white/20 text-text-secondary text-base rounded-md">
            Data Visualization
          </span>
          <span className="px-4 py-2 bg-white/10 border border-white/20 text-text-secondary text-base rounded-md">
            Co-Design Facilitation
          </span>
          <span className="px-4 py-2 bg-white/10 border border-white/20 text-text-secondary text-base rounded-md">
            Stakeholder Alignment
          </span>
          <span className="px-4 py-2 bg-white/10 border border-white/20 text-text-secondary text-base rounded-md">
            Pipeline Design
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-white/20 pt-12 flex justify-between">
        <Link
          href={previousProjectHref}
          className="text-text-secondary hover:text-white transition-colors text-sm"
        >
          ← Previous Project
        </Link>
        <Link
          href={nextProjectHref}
          className="text-text-secondary hover:text-white transition-colors text-sm"
        >
          Next Project →
        </Link>
      </div>

    </div>
  );
}
