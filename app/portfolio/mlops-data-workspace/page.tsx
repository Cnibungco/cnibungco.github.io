import Link from 'next/link';

export default function MLOpsDataWorkspaceCaseStudy() {
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
      <div className="mb-16 pb-12 border-b border-white/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded">
            AI/ML
          </span>
        </div>
        <p className="text-text-secondary text-sm tracking-widest mb-3">
          ENTERPRISE MLOPS · 2024-PRESENT
        </p>
        <h1 className="text-3xl lg:text-5xl font-serif mb-6">
          MLOps Data Workspace
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Redesigning a fragmented data platform into a unified, connection-scoped ML workspace
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm mt-8">
          <div>
            <p className="text-text-tertiary mb-1">ROLE</p>
            <p>Lead UX Designer</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">SCOPE</p>
            <p>End-to-end ownership</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">STATUS</p>
            <p>Core modules in QA</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-32">
        <div className="bg-image-placeholder rounded overflow-hidden">
          <img
            src="/MLOps%20Data%20Workspace/Hero.png"
            alt="MLOps Data Workspace"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* The Problem */}
      <div className="mb-20">
        <h2 className="text-2xl font-serif mb-6">The Problem</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          The MLOps platform had no unified entry point for data. Users (data scientists and analysts 
          building ML pipelines on healthcare data) navigated three separate interfaces with three different 
          interaction patterns: a Lakehouse query interface, a Data Catalog browser, and a file upload tool.
        </p>
        <p className="text-text-secondary leading-relaxed mb-6">
          None of them connected. There was no path from the catalog to the SQL editor. Uploads had no 
          queryable destination. And as the platform scaled toward 70+ customers and 140+ connections, 
          the same datasets appeared duplicated across connections with no way to orient yourself before 
          querying.
        </p>
        <div className="mt-8 max-w-3xl mx-auto mb-8">
          <div className="bg-image-placeholder rounded overflow-hidden">
            <img
              src="/MLOps%20Data%20Workspace/OldMLOps.png"
              alt="Previous MLOps platform experience before the Data Workspace redesign"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="bg-white/5 border-l-2 border-accent p-6">
          <p className="text-text-secondary italic">
            The result was a platform that required users to already know where to look before they could 
            understand what they were working with.
          </p>
        </div>
      </div>

      {/* The Reframe */}
      <div className="mb-20">
        <h2 className="text-2xl font-serif mb-6">The Reframe</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          The original structure treated data access as three separate products. But users didn't think in 
          those terms. They thought in terms of <em>what can I query right now, in this connection, for 
          this project.</em>
        </p>
        <p className="text-text-secondary leading-relaxed">
          That reframe drove every major structural decision that followed. The platform isn't a catalog 
          browser or a file manager. It's a <strong className="text-text-primary">governed, connection-scoped 
          SQL and ML workspace</strong>. The UI needed to reflect that from the moment a user lands.
        </p>
      </div>

      {/* The Decisions */}
      <div className="mb-20">
        <h2 className="text-2xl font-serif mb-6">The Decisions</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl mb-3">Connection-first as the organizing principle</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The core architectural constraint (SQL queries are connection-scoped, cross-connection joins 
              are not supported) wasn't reflected anywhere in the UI. Users landed in a flat catalog of all 
              datasets without understanding which ones were actually accessible.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I made connection selection the entry point. Everything (the asset catalog, the AI assistant, 
              the SQL editor) refreshes based on the active connection. This grounds users in their 
              authorization scope before they see any data and eliminates the confusion of seeing datasets 
              they can't query.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <div className="bg-image-placeholder rounded overflow-hidden">
                <img
                  src="/MLOps%20Data%20Workspace/manageconnections.png"
                  alt="Connection management and selection in the MLOps Data Workspace"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">Three surfaces → one unified Explore</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              I collapsed the three disconnected data source screens into a single queryable asset discovery 
              page. Lakehouse tables, curated datasets, and uploaded files all surface in Explore, 
              differentiated by type badges rather than separate destinations.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The "Select Data Source" card-picker screen (which forced a decision before users had any 
              context) was eliminated entirely. Before moving to hi-fi, I structured a developer alignment 
              session around four blocking backend decisions: shared schema feasibility, connection scope 
              model, upload query execution path, and catalog taxonomy. IA decisions preceded component work.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <div className="bg-image-placeholder rounded overflow-hidden">
                <img
                  src="/MLOps%20Data%20Workspace/SQLEditor.png"
                  alt="SQL editor in the unified MLOps Data Workspace Explore experience"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">Two distinct asset detail treatments, not one</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Lakehouse tables and curated datasets look similar in a list but serve different purposes in 
              detail. Lakehouse is schema-first: users in the SQL editor need column names and types 
              immediately. Curated datasets are documentation-first: users are evaluating whether a dataset 
              is right for their use case before writing a single query.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I designed two distinct detail treatments rather than forcing one layout to serve both: a 
              schema-first overlay for Lakehouse, and a tabbed panel with Documentation as the default for 
              curated assets. The schema component is shared. The priority, not the component, changes.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <div className="bg-image-placeholder rounded overflow-hidden">
                <img
                  src="/MLOps%20Data%20Workspace/AssetDetails.png"
                  alt="Asset detail treatments for Lakehouse and curated datasets"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Outcome */}
      <div className="mb-20">
        <h2 className="text-2xl font-serif mb-6">The Outcome</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">70+</p>
            <p className="text-text-secondary text-sm">Enterprise customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">140+</p>
            <p className="text-text-secondary text-sm">Data connections</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">3→1</p>
            <p className="text-text-secondary text-sm">Interface consolidation</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-accent mb-2">1,000+</p>
            <p className="text-text-secondary text-sm">Clusters at scale</p>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed mb-8">
          <strong className="text-text-primary font-normal">Design Process: </strong>
          Conducted developer alignment sessions on 4 blocking backend decisions (shared schema
          feasibility, connection scope model, upload query execution path, catalog taxonomy) before
          moving to hi-fi. Designed 2 distinct asset detail treatments (schema-first for Lakehouse,
          documentation-first for curated datasets) rather than forcing one layout to serve both
          contexts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Data scientists shadowed
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              3 ML engineers shadowed for 2 weeks
            </p>
          </div>
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Backend alignment sessions
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              4 blocking technical decisions resolved
            </p>
          </div>
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">
              Asset types unified
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Lakehouse + Catalog + Upload = 1 Explore
            </p>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed mb-6">
          A platform IA that reflects how healthcare data scientists actually work: connection-scoped, 
          with a clear progression from asset discovery to query authorship.
        </p>
        <p className="text-text-secondary leading-relaxed mb-6">
          The unified Explore surface eliminated three separate navigation patterns and the cognitive cost 
          of pre-committing to a data source before seeing any data.
        </p>
        <p className="text-text-secondary leading-relaxed mb-8">
          The Data Workspace module is complete and in engineering QA.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-image-placeholder rounded overflow-hidden">
            <img
              src="/MLOps%20Data%20Workspace/sidebyside.png"
              alt="Lakehouse and curated asset detail views compared side by side"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Skills Applied */}
      <div className="mb-20 bg-white/5 border border-white/20 p-8">
        <h3 className="text-lg mb-4">Design Capabilities Applied</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Information Architecture
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Systems Thinking
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Developer Experience (DX)
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Enterprise Scalability
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Cross-Functional Alignment
          </span>
          <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm">
            Healthcare Data Infrastructure
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-white/20 pt-12 flex justify-between">
        <Link
          href="/portfolio/caloptima-dashboard"
          className="text-text-secondary hover:text-white transition-colors text-sm"
        >
          ← Previous Project
        </Link>
        <Link
          href="/portfolio/intelligent-error-management"
          className="text-text-secondary hover:text-white transition-colors text-sm"
        >
          Next Project →
        </Link>
      </div>

    </div>
  );
}
