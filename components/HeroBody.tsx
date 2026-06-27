export default function HeroBody() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
      <div className="relative px-6 lg:px-12 py-8 lg:py-10 lg:border-r border-rule">
        <div className="accent-bar" aria-hidden />
        <div className="pl-4 space-y-4">
          <p className="case-body lg:text-lg">
            I am a Los Angeles-based product designer and creative technologist
            who works at the intersection of AI, complex data systems, and public
            good. With a background in software engineering (ex-Amazon), I bring
            a developer&apos;s instinct to design problems: starting from the data
            model, building in code when it counts, and translating dense backend
            logic into interfaces that practitioners can actually trust.
          </p>
          <ul className="space-y-2 case-body-sm">
            <li>
              • Currently improving healthcare software solutions at{' '}
              <a href="https://cotiviti.com" target="_blank" rel="noopener noreferrer" className="link-accent">
                Cotiviti
              </a>
            </li>
            <li>
              • Collaborated with LA Housing organizations to build{' '}
              <a href="https://antievictionmappingproject.github.io/tbor-policy-map/" className="link-accent">
                LA Tenant Bill of Rights Map
              </a>
            </li>
            <li>
              • Prototyped and wrote about a community sourced platform for{' '}
              <a href="https://collectiveaction.school/yearbook/mapping-feminist-la" className="link-accent">
                Mapping Feminist LA
              </a>
            </li>
            <li>
              • Produced soundscapes for the{' '}
              <a href="https://www.deniseshantebrown.com/feltfutures-bookcollection" className="link-accent">
                Felt Futures Sensorium
              </a>
            </li>
            <li>• Built an art installation called &quot;Channel Your Fortune&quot;</li>
            <li>
              • Designed a new Discovery feature for{' '}
              <a href="http://bandcamp.com" className="link-accent">Bandcamp</a>
            </li>
            <li>
              • Improved Station Sequencing algorithms for{' '}
              <a href="https://music.amazon.com" className="link-accent">Amazon Music</a>
            </li>
          </ul>
          <p className="case-body-sm">
            In my logged off hours, I enjoy producing{' '}
            <a href="https://mourningsignal.bandcamp.com/" className="link-accent">ambient music</a>,
            DJ a monthly show on{' '}
            <a href="https://bedcrumbshow.com/" className="link-accent">bedcrumb radio</a>,
            working on new media projects, hiking, surfing. Also constantly looking for new{' '}
            <a href="https://www.goodreads.com/user/show/52871995-camille" className="link-accent">books</a>
            {' '}and{' '}
            <a href="https://letterboxd.com/camilleyonaire/" className="link-accent">movies</a> to consume.
          </p>
        </div>
      </div>

      <div className="flex justify-center px-6 lg:px-12 py-8 lg:py-10 bg-base-2 lg:h-full lg:items-center">
        <div className="overflow-hidden w-[220px] h-[252px] lg:w-[300px] lg:h-[342px] rounded-[50%/45%] border border-accent/20 shrink-0">
          <img
            src="/profile.png"
            alt="Camille Nibungco"
            className="w-full h-full object-cover grayscale contrast-[1.05]"
          />
        </div>
      </div>
    </div>
  );
}
