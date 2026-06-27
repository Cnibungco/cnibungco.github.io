import { portfolioProjects } from '@/data/portfolio';

const allProjectSlugs = portfolioProjects.map((p) => p.slug);

function getProjectIndex(slug: string): number {
  return allProjectSlugs.indexOf(slug);
}

export function getNextProjectHref(currentSlug: string): string {
  const currentIndex = getProjectIndex(currentSlug);
  if (currentIndex === -1) return '/portfolio';

  const nextIndex = (currentIndex + 1) % allProjectSlugs.length;
  return `/portfolio/${allProjectSlugs[nextIndex]}`;
}

export function getPreviousProjectHref(currentSlug: string): string {
  const currentIndex = getProjectIndex(currentSlug);
  if (currentIndex === -1) return '/portfolio';

  const previousIndex =
    (currentIndex - 1 + allProjectSlugs.length) % allProjectSlugs.length;
  return `/portfolio/${allProjectSlugs[previousIndex]}`;
}

export {
  portfolioProjectOrder,
} from '@/data/portfolio';
