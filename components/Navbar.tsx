'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'WORK', href: '/portfolio', locked: true, external: false },
  { name: 'RESUME', href: 'https://drive.google.com/file/d/1Rp3y_vkNyEPsXt5ZgKyL0zfghz9MYVMr/view?usp=sharing', locked: false, external: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
            <img 
              src="/logo.png"
              alt="Camille Nibungco" 
              className="h-8 w-auto"
            />
          </Link>
            

            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => {
                const isActive = !item.external && pathname.startsWith(item.href);
                const linkClassName = `relative text-base group transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-text-secondary hover:text-white'
                }`;
                const linkContent = (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-white" />
                    )}
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </>
                );
                return item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link key={item.name} href={item.href} className={linkClassName}>
                    {linkContent}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center group"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-6 h-px bg-text-primary transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`w-6 h-px bg-text-primary transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-bg-primary"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="relative h-full flex flex-col justify-center items-center px-6">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = !item.external && pathname.startsWith(item.href);
              const linkClassName = `text-3xl sm:text-4xl font-light transition-all duration-200 ${
                isActive ? 'text-white' : 'text-text-secondary hover:text-white'
              } ${mobileMenuOpen ? 'animate-slide-down' : ''}`;
              return item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClassName}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-12 left-0 right-0 px-6">
            <div className="flex justify-center gap-8 text-sm text-text-tertiary">
              <a
                href="https://linkedin.com/in/camillenibungco"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://are.na/camille-nibungco"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Are.na
              </a>
              <a
                href="https://bandcamp.com/camillenibungco"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Bandcamp
              </a>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-white transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 lg:h-24" />
    </>
  );
}
