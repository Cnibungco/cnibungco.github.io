import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  weight: ['400', '500', '600'],  // ← this was missing
  style: ['normal', 'italic'],    // ← this too
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Camille Nibungco — Product Designer',
  description: 'Los Angeles-based product designer and creative technologist',
  keywords: ['Product Design', 'UX Design', 'Creative Technology', 'Los Angeles'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        <div className="scanlines-background" aria-hidden />
        <Navbar />

        <main className="relative z-[1] min-h-screen">
          {children}
        </main>

        <footer className="relative z-[1] border-t border-white/20 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <p className="text-text-tertiary text-sm">
                © {new Date().getFullYear()} Camille Nibungco. All rights reserved.
              </p>
              
              <div className="flex gap-8 text-sm">
                <a
                  href="https://linkedin.com/in/camillenibungco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://are.na/camille-nibungco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-white transition-colors duration-200"
                >
                  Are.na
                </a>
                <a
                  href="https://bandcamp.com/camillenibungco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-white transition-colors duration-200"
                >
                  Bandcamp
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-text-secondary hover:text-white transition-colors duration-200"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
