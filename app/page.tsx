import HeroBanner from '@/components/HeroBanner'
import HeroBody from '@/components/HeroBody'
import TnalakStrip from '@/components/TnalakStrip'
import SectionLabel from '@/components/SectionLabel'
import ProjectTag from '@/components/ProjectTag'

const projects = [
  {
    label: 'Healthcare',
    title: 'Cotiviti',
    sub: 'AI-assisted workflows and data operations tooling for enterprise healthcare.',
    image: '/EM.png',
    url: '/portfolio',
  },
  {
    label: 'Civic',
    title: 'Tenant Bill of Rights Map',
    sub: 'Built with Keep LA Housed and the Anti-Eviction Mapping Project.',
    image: '/TBOR.png',
    url: 'https://antievictionmappingproject.github.io/tbor-policy-map/',
  },
  {
    label: 'Civic',
    title: 'Mapping Feminist LA',
    sub: 'Prototyped an intersectional community resource platform for feminist organizing.',
    image: '/FMLA.png',
    url: 'https://collectiveaction.school/yearbook/mapping-feminist-la',
  },
  {
    label: 'Creative',
    title: 'Felt Futures Sensorium',
    sub: 'Produced soundscapes for an experimental design memoir.',
    image: '/feltfutures.png',
    url: 'https://www.deniseshantebrown.com/feltfutures-bookcollection',
  },
] as const

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HeroBody />
      <TnalakStrip />

      <SectionLabel>Selected work</SectionLabel>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.url}
            target={project.url.startsWith('/') ? undefined : '_blank'}
            rel={project.url.startsWith('/') ? undefined : 'noopener noreferrer'}
            className={`block group px-6 lg:px-12 py-6 ${
              i % 2 === 0 ? 'md:border-r border-rule' : ''
            } ${i < 2 ? 'border-b border-rule' : ''}`}
          >
            <div className="mb-3">
              <ProjectTag>{project.label}</ProjectTag>
            </div>
            <p className="font-newsreader text-lg mb-1.5 text-sand">
              {project.title}
            </p>
            <p className="case-body mb-4">
              {project.sub}
            </p>
            <div className="rounded-sm bg-image-placeholder w-fit max-w-[280px]">
              <img
                src={project.image}
                alt={project.title}
                className="block max-w-[280px] max-h-[180px] w-auto h-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
              />
            </div>
          </a>
        ))}
      </div>

      <TnalakStrip />
    </div>
  )
}
