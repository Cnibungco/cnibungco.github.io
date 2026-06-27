import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink': '#141820',
        'base-2': '#181d27',
        'accent': '#7FB069',
        'sand': '#DDD0BC',
        'sand-dim': 'rgba(221,208,188,0.78)',
        'sand-muted': 'rgba(221,208,188,0.62)',
        'sand-dimmer': 'rgba(221,208,188,0.48)',
        'rule': 'rgba(221,208,188,0.08)',
        'accent-rule': 'rgba(127,176,105,0.15)',
        'image-placeholder': '#1a2030',
        // Legacy aliases — portfolio case studies still reference these
        'bg-primary': '#141820',
        'bg-secondary': '#181d27',
        'text-primary': '#DDD0BC',
        'text-secondary': 'rgba(221,208,188,0.85)',
        'text-tertiary': 'rgba(221,208,188,0.68)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        newsreader: ['var(--font-newsreader)', 'serif'],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
