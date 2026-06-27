import CaseStudyLayout from '@/components/portfolio/CaseStudyLayout';
import CaseStudySection from '@/components/portfolio/CaseStudySection';
import CaseStudyPullQuote from '@/components/portfolio/CaseStudyPullQuote';
import CaseStudyFigure from '@/components/portfolio/CaseStudyFigure';
import {
  CaseStudyStat,
  CaseStudyMetaItem,
  CaseStudyTags,
} from '@/components/portfolio/CaseStudyBlocks';

const img = '/MLOps%20Data%20Workspace';

export default function MLOpsDataWorkspaceCaseStudy() {
  return (
    <CaseStudyLayout
      slug="mlops-data-workspace"
      category="Enterprise MLOps"
      tagline="Redesigning a fragmented data platform into a unified, connection-scoped ML workspace"
      role="Lead UX Designer"
      scope="End-to-end ownership"
      status="Core modules in QA"
    >
      <CaseStudyFigure src={`${img}/Hero.png`} alt="MLOps Data Workspace" />

      <CaseStudySection title="The Problem">
        <p className="case-body mb-6">
          The MLOps platform had no unified entry point for data. Users (data scientists and analysts
          building ML pipelines on healthcare data) navigated three separate interfaces with three different
          interaction patterns: a Lakehouse query interface, a Data Catalog browser, and a file upload tool.
        </p>
        <p className="case-body mb-8">
          None of them connected. There was no path from the catalog to the SQL editor. Uploads had no
          queryable destination. And as the platform scaled toward 70+ customers and 140+ connections,
          the same datasets appeared duplicated across connections with no way to orient yourself before
          querying.
        </p>
        <CaseStudyFigure
          src={`${img}/OldMLOps.png`}
          alt="Previous MLOps platform experience before the Data Workspace redesign"
        />
        <CaseStudyPullQuote>
          The result was a platform that required users to already know where to look before they could
          understand what they were working with.
        </CaseStudyPullQuote>
      </CaseStudySection>

      <CaseStudySection title="The Reframe" variant="panel">
        <p className="case-body mb-6">
          The original structure treated data access as three separate products. But users didn&apos;t think in
          those terms. They thought in terms of <em>what can I query right now, in this connection, for
          this project.</em>
        </p>
        <p className="case-body">
          That reframe drove every major structural decision that followed. The platform isn&apos;t a catalog
          browser or a file manager. It&apos;s a{' '}
          <strong className="text-sand font-normal">governed, connection-scoped SQL and ML workspace</strong>.
          The UI needed to reflect that from the moment a user lands.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Decisions">
        <div className="space-y-10">
          <div>
            <h3 className="case-h3">Connection-first as the organizing principle</h3>
            <p className="case-body mb-4">
              The core architectural constraint (SQL queries are connection-scoped, cross-connection joins
              are not supported) wasn&apos;t reflected anywhere in the UI. Users landed in a flat catalog of all
              datasets without understanding which ones were actually accessible.
            </p>
            <p className="case-body">
              I made connection selection the entry point. Everything (the asset catalog, the AI assistant,
              the SQL editor) refreshes based on the active connection. This grounds users in their
              authorization scope before they see any data and eliminates the confusion of seeing datasets
              they can&apos;t query.
            </p>
            <div className="mt-6">
              <CaseStudyFigure
                src={`${img}/manageconnections.png`}
                alt="Connection management and selection in the MLOps Data Workspace"
              />
            </div>
          </div>

          <div>
            <h3 className="case-h3">Three surfaces → one unified Explore</h3>
            <p className="case-body mb-4">
              I collapsed the three disconnected data source screens into a single queryable asset discovery
              page. Lakehouse tables, curated datasets, and uploaded files all surface in Explore,
              differentiated by type badges rather than separate destinations.
            </p>
            <p className="case-body">
              The &quot;Select Data Source&quot; card-picker screen (which forced a decision before users had any
              context) was eliminated entirely. Before moving to hi-fi, I structured a developer alignment
              session around four blocking backend decisions: shared schema feasibility, connection scope
              model, upload query execution path, and catalog taxonomy. IA decisions preceded component work.
            </p>
            <div className="mt-6">
              <CaseStudyFigure
                src={`${img}/SQLEditor.png`}
                alt="SQL editor in the unified MLOps Data Workspace Explore experience"
              />
            </div>
          </div>

          <div>
            <h3 className="case-h3">Two distinct asset detail treatments, not one</h3>
            <p className="case-body mb-4">
              Lakehouse tables and curated datasets look similar in a list but serve different purposes in
              detail. Lakehouse is schema-first: users in the SQL editor need column names and types
              immediately. Curated datasets are documentation-first: users are evaluating whether a dataset
              is right for their use case before writing a single query.
            </p>
            <p className="case-body">
              I designed two distinct detail treatments rather than forcing one layout to serve both: a
              schema-first overlay for Lakehouse, and a tabbed panel with Documentation as the default for
              curated assets. The schema component is shared. The priority, not the component, changes.
            </p>
            <div className="mt-6">
              <CaseStudyFigure
                src={`${img}/AssetDetails.png`}
                alt="Asset detail treatments for Lakehouse and curated datasets"
              />
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="The Outcome" variant="panel">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <CaseStudyStat value="70+" label="Enterprise customers" />
          <CaseStudyStat value="140+" label="Data connections" />
          <CaseStudyStat value="3→1" label="Interface consolidation" />
          <CaseStudyStat value="1,000+" label="Clusters at scale" />
        </div>

        <p className="case-body mb-8">
          <strong className="text-sand font-normal">Design Process: </strong>
          Conducted developer alignment sessions on 4 blocking backend decisions (shared schema
          feasibility, connection scope model, upload query execution path, catalog taxonomy) before
          moving to hi-fi. Designed 2 distinct asset detail treatments (schema-first for Lakehouse,
          documentation-first for curated datasets) rather than forcing one layout to serve both
          contexts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-rule pt-8">
          <CaseStudyMetaItem label="Data scientists shadowed" value="3 ML engineers shadowed for 2 weeks" />
          <CaseStudyMetaItem label="Backend alignment sessions" value="4 blocking technical decisions resolved" />
          <CaseStudyMetaItem label="Asset types unified" value="Lakehouse + Catalog + Upload = 1 Explore" />
        </div>

        <p className="case-body mb-6">
          A platform IA that reflects how healthcare data scientists actually work: connection-scoped,
          with a clear progression from asset discovery to query authorship.
        </p>
        <p className="case-body mb-6">
          The unified Explore surface eliminated three separate navigation patterns and the cognitive cost
          of pre-committing to a data source before seeing any data.
        </p>
        <p className="case-body mb-8">
          The Data Workspace module is complete and in engineering QA.
        </p>

        <CaseStudyFigure
          src={`${img}/sidebyside.png`}
          alt="Lakehouse and curated asset detail views compared side by side"
          size="medium"
        />
      </CaseStudySection>

      <CaseStudyTags
        tags={[
          'Information Architecture',
          'Systems Thinking',
          'Developer Experience (DX)',
          'Enterprise Scalability',
          'Cross-Functional Alignment',
          'Healthcare Data Infrastructure',
        ]}
      />
    </CaseStudyLayout>
  );
}
