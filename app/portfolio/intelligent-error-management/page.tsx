import CaseStudyLayout from '@/components/portfolio/CaseStudyLayout';
import CaseStudySection from '@/components/portfolio/CaseStudySection';
import CaseStudyPullQuote from '@/components/portfolio/CaseStudyPullQuote';
import CaseStudyFigure from '@/components/portfolio/CaseStudyFigure';
import {
  CaseStudyStat,
  CaseStudyMetaItem,
  CaseStudyTags,
  CaseStudyCallout,
  CaseStudyInsight,
} from '@/components/portfolio/CaseStudyBlocks';

const img = '/IEM';

export default function IntelligentErrorManagementCaseStudy() {
  return (
    <CaseStudyLayout
      slug="intelligent-error-management"
      category="AI/ML design"
      tagline="Redesigning AI-assisted encounter correction when users didn't trust the AI"
      role="Solo Designer"
      scope="End-to-end ownership"
      status="AI-assisted corrections"
      statusLabel="Domain"
    >
      <CaseStudyFigure src={`${img}/IEMHero.png`} alt="Intelligent Error Management (IEM)" />

      <CaseStudySection title="The Problem" variant="panel">
        <p className="case-body mb-6">
          The original IEM design treated AI confidence tiers as navigation gates. Users moved
          through a flow that routed them based on how confident the AI was about a correction.
        </p>
        <p className="case-body mb-8">
          In practice, this created two problems that user testing surfaced clearly: users were
          confused by the conflation of DELETE and CHANGE corrections in a single queue, and they
          didn&apos;t trust the AI enough to act on its recommendations without visual confirmation.
        </p>
        <CaseStudyFigure
          src={`${img}/OldIEM.png`}
          alt="Previous Intelligent Error Management interface before the redesign"
        />
        <CaseStudyPullQuote>
          The confidence tier framing was also architecturally wrong. Confidence is a property of
          a row: a data attribute, not a stage in a workflow. Treating it as navigation created
          a mental model mismatch that made the interface harder to use, not easier.
        </CaseStudyPullQuote>
      </CaseStudySection>

      <CaseStudySection title="My Approach">
        <p className="case-lede">
          The core reframe: Confidence tiers are data attributes, not navigation gates.
        </p>
        <p className="case-body">
          That single insight restructured the entire design.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Decisions" variant="panel">
        <div className="space-y-8">
          <div>
            <h3 className="case-h3">DELETE and CHANGE corrections as separate exception queues</h3>
            <p className="case-body">
              Cross-team pattern work with a peer designer on Claims Management confirmed this was the
              right separation. The two correction types require different mental models and different
              actions. Conflating them was the root cause of user confusion.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <div className="rounded-sm bg-image-placeholder overflow-hidden">
                <img src={`${img}/ChangeTable.png`} alt="CHANGE correction queue table" className="w-full h-auto" />
              </div>
              <div className="rounded-sm bg-image-placeholder overflow-hidden">
                <img src={`${img}/DeleteTable.png`} alt="DELETE correction queue table" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="case-h3">High-confidence encounters batch-approved via a shortcut button</h3>
            <p className="case-body">
              Rather than routing high-confidence rows through a separate flow, they surface in the
              same table with a batch action available. Users stay in one place; the AI&apos;s
              confidence level informs their action, not their navigation path.
            </p>
            <div className="mt-6">
              <CaseStudyFigure
                src={`${img}/Show%20All%20Encounters.gif`}
                alt="High-confidence encounters: batch action and table view"
                size="medium"
              />
            </div>
          </div>

          <div>
            <h3 className="case-h3">Medium and low confidence rows visible by default</h3>
            <p className="case-body">
              These are where attention is actually needed. The design makes the exceptions prominent
              without hiding the full picture.
            </p>
            <div className="mt-6">
              <CaseStudyFigure
                src={`${img}/ChangeTable.png`}
                alt="CHANGE correction queue: medium and low confidence rows visible by default"
                size="medium"
              />
            </div>
          </div>
        </div>

        <CaseStudyCallout label="Cross-product alignment">
          The redesign also involved ongoing cross-product pattern alignment with a peer designer
          working on Claims Management, using a FigJam comparison workspace to identify shared
          patterns and avoid divergence across products.
        </CaseStudyCallout>

        <div className="mt-8">
          <CaseStudyFigure
            src={`${img}/ErrorCorrectionComparison.png`}
            alt="Error correction patterns compared across IEM and Claims Management"
            size="medium"
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="The Outcome">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <CaseStudyStat value="2" label="Queue types (DELETE/CHANGE)" />
          <CaseStudyStat value="3" label="Confidence tiers as data" />
          <CaseStudyStat value="100%" label="Pattern alignment with Claims" />
        </div>

        <p className="case-body mb-8">
          <strong className="text-sand font-normal">Cross-Product Alignment: </strong>
          Collaborated with Claims Management designer using a FigJam comparison workspace to establish
          shared correction patterns across both products. The DELETE/CHANGE queue separation,
          validated through user testing, became a standard pattern preventing divergence as both
          products evolved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-rule pt-8">
          <CaseStudyMetaItem label="Test participants" value="5 clinical coders tested across 3 sessions" />
          <CaseStudyMetaItem label="Confusion reduction" value="Eliminated DELETE/CHANGE conflation issue" />
          <CaseStudyMetaItem label="Cross-team pattern work" value="FigJam workspace with Claims Management designer" />
        </div>

        <p className="case-body mb-6">
          A correction workflow where the AI&apos;s role is transparent and inspectable. Users can see
          confidence levels as data, act on high-confidence corrections efficiently, and give focused
          attention to the exceptions that actually need it.
        </p>
        <p className="case-body mb-8">
          The cross-product alignment work established shared patterns that will carry forward as both
          products evolve.
        </p>

        <CaseStudyFigure
          src={`${img}/AIDesignPrinciples.png`}
          alt="AI design principles applied in Intelligent Error Management"
          size="medium"
        />
      </CaseStudySection>

      <CaseStudyInsight title="Design principle: AI trust through transparency">
        Users don&apos;t need to understand how the AI works. But they need to understand{' '}
        <em>what</em> it&apos;s recommending and <em>why</em>, and they need the ability to override
        it without friction. Confidence tiers work when they inform user action, not when they gate
        navigation.
      </CaseStudyInsight>

      <CaseStudyTags
        tags={[
          'AI Transparency Design',
          'Human-in-the-Loop Workflows',
          'Confidence Level UX',
          'Cross-Product Pattern Systems',
          'Exception-Based Design',
        ]}
      />
    </CaseStudyLayout>
  );
}
