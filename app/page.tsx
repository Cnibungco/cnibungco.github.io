export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
      {/* Bio Section */}
      <section className="mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="rounded-[50%] w-64 h-80 lg:w-72 lg:h-96 bg-image-placeholder overflow-hidden">
              <img
                src="/profile.png"
                alt="Camille Nibungco"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6">
            <p className="font-newsreader text-lg lg:text-xl leading-relaxed text-white w-full max-w-full">
              I am a Los Angeles-based product designer and creative technologist who works at the
              intersection of AI, complex data systems, and public good. With a background in software
              engineering (ex-Amazon), I bring a developer&apos;s instinct to design problems: starting
              from the data model, building in code when it counts, and translating dense backend logic
              into interfaces that practitioners can actually trust. My work spans enterprise healthcare
              operations, MLOps tooling, and civic technology, and I care deeply about who the technology
              is actually for.
            </p>

            <div className="space-y-4 text-base">
              <p className="font-medium">A few things I've worked on in the past:</p>
              <ul className="space-y-2 text-white">
                <li>
                  • Currently improving healthcare software solutions at{' '}
                  <a href="https://cotiviti.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                    Cotiviti
                  </a>
                </li>
                <li>
                  • Collaborated with LA Housing organizations to build{' '}
                  <a href="https://antievictionmappingproject.github.io/tbor-policy-map/" className="underline hover:text-white">
                    LA Tenant Bill of Rights Map
                  </a>
                </li>
                <li>
                  • Prototyped and wrote about a community sourced platform for{' '}
                  <a href="https://collectiveaction.school/yearbook/mapping-feminist-la" className="underline hover:text-white">
                    Mapping Feminist LA
                  </a>
                </li>
                <li>
                  • Produced soundscapes for the{' '}
                  <a href="https://www.deniseshantebrown.com/feltfutures-bookcollection" className="underline hover:text-white">
                    Felt Futures Sensorium
                  </a>
                </li>
                <li>• Built an art installation called "Channel Your Fortune"</li>
                <li>
                  • Designed a new Discovery feature for{' '}
                  <a href="http://bandcamp.com" className="underline hover:text-white">
                    Bandcamp
                  </a>
                </li>
                <li>
                  • Improved Station Sequencing algorithms for{' '}
                  <a href="https://music.amazon.com" className="underline hover:text-white">
                    Amazon Music
                  </a>
                </li>
              </ul>

              <p className="text-white pt-4">
                In my logged off hours, I enjoy producing{' '}
                <a href="https://mourningsignal.bandcamp.com/" className="underline hover:text-white">
                  ambient music
                </a>
                , DJ a monthly show on{' '}
                <a href="https://bedcrumbshow.com/" className="underline hover:text-white">
                  bedcrumb radio
                </a>
                , working on new media projects, hiking, surfing. Also, I'm constantly 
                looking for new{' '}
                <a href="https://www.goodreads.com/user/show/52871995-camille" className="underline hover:text-white">
                  books
                </a>
                {' '}and{' '}
                <a href="https://letterboxd.com/camilleyonaire/" className="underline hover:text-white">
                  movies
                </a>
                {' '}to consume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section>
        <h2 className="text-2xl lg:text-3xl mb-8 lg:mb-12">Selected Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              subtitle: 'Cotiviti - Error triage systems, MLOps tooling, and operational dashboards built for analysts working at scale.',
              outcome: 'AI-assisted workflows and data operations tooling for enterprise healthcare, where accuracy and operator trust are non-negotiable.',
              image: '/EM.png',
              url: '/portfolio',
            },
            {
              subtitle: "Tenant Bill of Rights Map - Renter's Rights visualization tool for Keep LA Housed",
              outcome: 'Built with Keep LA Housed and the Anti-Eviction Mapping Project to help LA renters understand their legal protections.',
              image: '/TBOR.png',
              url: 'https://antievictionmappingproject.github.io/tbor-policy-map/',
            },
            {
              subtitle: 'Mapping Feminist LA - Prototyping intersectional community resources',
              outcome: 'Prototyped an intersectional community resource platform for collective action and feminist organizing in Los Angeles.',
              image: '/FMLA.png',
              url: 'https://collectiveaction.school/yearbook/mapping-feminist-la',
            },
            {
              subtitle: 'Felt Futures Sensorium - Soundscapes for an experimental design memoir',
              outcome: 'Produced soundscapes for an experimental design memoir exploring sensory and speculative futures.',
              image: '/feltfutures.png',
              url: 'https://www.deniseshantebrown.com/feltfutures-bookcollection',
            },
          ].map((project, i) => (
            <a
              key={i}
              href={project.url}
              target={project.url.startsWith('/') ? undefined : '_blank'}
              rel={project.url.startsWith('/') ? undefined : 'noopener noreferrer'}
              className="group block"
            >
              <div className="bg-image-placeholder rounded overflow-hidden hover:opacity-90 transition-opacity duration-200">
                <img src={project.image} alt="" className="w-full h-auto" />
              </div>
              <p className="mt-3 text-white text-sm lg:text-base">
                {project.subtitle}
              </p>
              <p className="mt-2 text-white text-sm lg:text-base">
                {project.outcome}
              </p>
            </a>
          ))}
        </div>
      </section>
</div>  
  );
}
