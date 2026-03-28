import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work: Camille Nibungco',
  description: 'Selected projects and case studies',
  robots: 'noindex, nofollow',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="portfolio-context">
      {children}
    </div>
  );
}
