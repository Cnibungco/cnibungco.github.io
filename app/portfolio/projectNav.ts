export const portfolioProjectOrder = [
  'caloptima-dashboard',
  'inbound-chart-review',
  'intelligent-error-management',
] as const;

type ProjectSlug = (typeof portfolioProjectOrder)[number];

function getProjectIndex(slug: string): number {
  return portfolioProjectOrder.indexOf(slug as ProjectSlug);
}

export function getNextProjectHref(currentSlug: string): string {
  const currentIndex = getProjectIndex(currentSlug);
  if (currentIndex === -1) return '/portfolio';

  const nextIndex = (currentIndex + 1) % portfolioProjectOrder.length;
  return `/portfolio/${portfolioProjectOrder[nextIndex]}`;
}

export function getPreviousProjectHref(currentSlug: string): string {
  const currentIndex = getProjectIndex(currentSlug);
  if (currentIndex === -1) return '/portfolio';

  const previousIndex =
    (currentIndex - 1 + portfolioProjectOrder.length) %
    portfolioProjectOrder.length;
  return `/portfolio/${portfolioProjectOrder[previousIndex]}`;
}
