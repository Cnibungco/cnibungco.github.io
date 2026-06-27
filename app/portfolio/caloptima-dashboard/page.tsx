import CaseStudyLayout from '@/components/portfolio/CaseStudyLayout';
import CaseStudySection from '@/components/portfolio/CaseStudySection';
import CaseStudyPullQuote from '@/components/portfolio/CaseStudyPullQuote';
import CaseStudyFigure from '@/components/portfolio/CaseStudyFigure';
import {
  CaseStudyStat,
  CaseStudyMetaItem,
  CaseStudyTags,
} from '@/components/portfolio/CaseStudyBlocks';

export default function CalOptimaCaseStudy() {
  return (
    <CaseStudyLayout
      slug="caloptima-dashboard"
      category="Healthcare operations"
      tagline="Claim-to-encounter pipeline monitoring for a Medi-Cal managed care plan"
      role="Solo Designer"
      scope="End-to-end ownership"
      status="In engineering"
    >
      <CaseStudyFigure
        src="/CalOptima/Hero.png"
        alt="CalOptima Encounter Operations Dashboard"
      />

      <CaseStudySection title="The Problem" variant="panel">
        <p className="case-body mb-6">
          CalOptima&apos;s encounter operations team, the people responsible for keeping the
          claim-to-encounter submission pipeline healthy and compliant, had no system-level
          orientation layer. Every morning, they needed to answer the same set of questions: Is
          flow normal or deviating? What&apos;s driving exceptions? Who owns the fix?
        </p>
        <p className="case-body">
          But to do that, they had to navigate directly inside Encounter Management&apos;s page-level
          views, piecing together a picture of system health from disconnected screens, raw volume
          metrics, and external tools like SmartTrader.
        </p>
        <CaseStudyPullQuote>
          The result was a workflow optimized for investigation, not orientation. Users had to
          already know where to look before they could understand what was wrong.
        </CaseStudyPullQuote>
        <div className="mt-8">
          <div className="max-w-xl mx-auto mb-4 grid grid-cols-3 gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-image-placeholder">
              <img
                src="/CalOptima/OldDash1.png"
                alt="Legacy dashboard view 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-image-placeholder">
              <img
                src="/CalOptima/OldDash2.png"
                alt="Legacy dashboard view 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-image-placeholder">
              <img
                src="/CalOptima/OldDash3.png"
                alt="Legacy dashboard view 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="text-center text-sm italic text-sand-dim">
            Some of the 7 dashboards they had to evaluate before.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="My Approach">
        <p className="case-body mb-8">
          I reframed the dashboard&apos;s purpose from{' '}
          <strong className="text-sand font-normal">reporting to triage</strong>. Rather than showing
          comprehensive data, it needed to answer one question first:{' '}
          <em>Can we proceed normally today?</em> Everything else follows from that: root cause,
          ownership, and remediation.
        </p>
        <CaseStudyFigure
          src="/CalOptima/Diagram.png"
          alt="CalOptima dashboard structure and triage framing"
          size="medium"
        />
      </CaseStudySection>

      <CaseStudySection title="The Decisions" variant="panel">
        <div className="space-y-10">
          <div>
            <h3 className="case-h3">1. Exception-led monitoring over exhaustive display</h3>
            <p className="case-body">
              I reduced the metric surface to six meaningful KPIs grouped into two frames: Payer
              Performance (conversion rate, first pass acceptance, revenue leakage) and Regulatory
              Compliance (completeness, accuracy, timeliness). Sparklines and stacked area trends
              visually de-emphasize healthy volume in gray so that deviations surface immediately
              without requiring cognitive effort.
            </p>
            <div className="mt-6">
              <CaseStudyFigure
                src="/CalOptima/Exceptions.gif"
                alt="Exception-led monitoring: KPI and trend behavior in the dashboard"
                size="medium"
              />
            </div>
          </div>

          <div>
            <h3 className="case-h3">2. A three-tier interaction hierarchy</h3>
            <p className="case-body mb-4">
              Top level: KPI summary cards + full pipeline flow view for system orientation.
            </p>
            <p className="case-body mb-4">
              Mid level: clicking workflow nodes filters the supporting table and surfaces
              exception context via popovers, including trend data and links to the relevant
              remediation tool.
            </p>
            <p className="case-body">
              Detail level: routed into Encounter Management rather than duplicated, preserving a
              single source of truth for transaction-level action.
            </p>
            <div className="mt-6">
              <CaseStudyFigure
                src="/CalOptima/Fallout.gif"
                alt="Three-tier interaction: pipeline flow, filters, and routing"
                size="medium"
              />
            </div>
          </div>

          <div>
            <h3 className="case-h3">3. Progressive disclosure, not information density</h3>
            <p className="case-body">
              Popovers carry trend context, exception breakdowns, and outbound links. The
              dashboard surface itself stays clean. Users get what they need to decide whether to
              dig in, and exactly where to go when they do.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="The Outcome">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <CaseStudyStat value="7→1" label="Dashboard consolidation" />
          <CaseStudyStat value="6" label="Key performance indicators" />
          <CaseStudyStat value="3-tier" label="Interaction hierarchy" />
          <CaseStudyStat value="2M+" label="Claims processed monthly" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-rule pt-8">
          <CaseStudyMetaItem label="Stakeholder interviews" value="12 ops team members interviewed" />
          <CaseStudyMetaItem label="Design iterations" value="4 rounds of usability testing" />
          <CaseStudyMetaItem label="Workshops facilitated" value="3 cross-functional alignment sessions" />
        </div>

        <p className="case-body mb-6">
          The dashboard design addressed a critical gap for CalOptima&apos;s encounter operations team
          of 12+ staff members who previously spent hours each morning piecing together system health
          from disconnected views. By consolidating 7 separate tools into a single exception-led
          monitoring surface with 6 meaningful KPIs, the design enables the team to answer
          &apos;Can we proceed normally today?&apos; in seconds rather than hours.
        </p>
        <p className="case-body mb-8">
          Design delivered on schedule and currently in engineering implementation. The dashboard
          establishes a system-level orientation layer that didn&apos;t previously exist for
          CalOptima&apos;s encounter ops team. It moves them from reactive investigation to proactive
          exception monitoring.
        </p>
        <CaseStudyFigure
          src="/CalOptima/Outcome.png"
          alt="CalOptima Encounter Operations Dashboard outcome"
        />
      </CaseStudySection>

      <CaseStudyTags
        tags={[
          'Information Architecture',
          'Progressive Disclosure',
          'Exception-Based Design',
          'Healthcare Operations',
          'Data Visualization',
        ]}
      />
    </CaseStudyLayout>
  );
}
