import TnalakStrip from '@/components/TnalakStrip';
import GreenBanner from '@/components/GreenBanner';
import PortfolioIndexCard from '@/components/portfolio/PortfolioIndexCard';
import { listedPortfolioProjects } from '@/data/portfolio';

export default function PortfolioPage() {
  return (
    <div>
      <TnalakStrip />

      <GreenBanner patternId="portfolio-index-banner">
        <h1 className="case-banner-title">Case studies</h1>
      </GreenBanner>

      <TnalakStrip />

      <div>
        {listedPortfolioProjects.map((project, i) => (
          <PortfolioIndexCard
            key={project.slug}
            project={project}
            imagePosition={i % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>

      <TnalakStrip />
    </div>
  );
}
