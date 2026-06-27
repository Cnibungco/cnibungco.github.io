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
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
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
      <body className="bg-ink text-sand antialiased">
        <Navbar />

        <main className="relative z-[1] min-h-screen">
          {children}
        </main>

        <footer className="relative z-[1] py-12 border-t border-rule">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <p className="text-sm text-sand-muted">
                © {new Date().getFullYear()} Camille Nibungco. All rights reserved.
              </p>

              <div className="flex gap-8 text-sm">
                <a
                  href="https://linkedin.com/in/camillenibungco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sand-dim hover:text-sand transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://are.na/camille-nibungco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sand-dim hover:text-sand transition-colors duration-200"
                >
                  Are.na
                </a>
                <a
                  href="https://bandcamp.com/camillenibungco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sand-dim hover:text-sand transition-colors duration-200"
                >
                  Bandcamp
                </a>
                <a
                  href="mailto:camille.nibungco@gmail.com"
                  className="text-sm text-sand-dim hover:text-sand transition-colors duration-200"
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
