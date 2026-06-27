# Camille Nibungco — Personal Site

A personal website built with Next.js 15, featuring a public homepage and a password-protected UX portfolio at `/portfolio`.

## Features

### Public homepage (`/`)
- Dark editorial layout with green accent and T'nalak-inspired decorative strips
- Hero banner, bio, and selected creative/civic work grid
- Inter + Newsreader typography
- Mobile-responsive navigation with full-screen overlay

### Private portfolio (`/portfolio`)
- HTTP Basic Auth via Next.js middleware (server-side only)
- Case study index with alternating screenshot layout
- Long-form case studies with shared layout components
- Prev/next navigation across all projects (including deep-link-only pages)

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (sans), Newsreader (serif)
- **Auth:** HTTP Basic Auth (`middleware.ts`)
- **Analytics:** Vercel Analytics + Speed Insights

## Quick start

```bash
cd portfolio-project
npm install
cp .env.local.example .env.local   # set PORTFOLIO_USERNAME and PORTFOLIO_PASSWORD
npm run dev
```

- Public site: [http://localhost:3000](http://localhost:3000)
- Portfolio (auth required): [http://localhost:3000/portfolio](http://localhost:3000/portfolio)

```bash
npm run build
npm start
```

## Project structure

```
portfolio-project/
├── app/
│   ├── globals.css              # Design system component classes
│   ├── layout.tsx               # Root layout, navbar, footer
│   ├── page.tsx                 # Homepage
│   └── portfolio/
│       ├── layout.tsx           # Portfolio shell
│       ├── page.tsx             # Case study index
│       ├── projectNav.ts        # Prev/next href helpers
│       ├── caloptima-dashboard/
│       ├── mlops-data-workspace/
│       ├── intelligent-error-management/
│       └── inbound-chart-review/  # deep-link only (not on index)
├── components/
│   ├── Navbar.tsx
│   ├── HeroBanner.tsx / HeroBody.tsx
│   ├── GreenBanner.tsx          # Accent banner with pattern
│   ├── TnalakStrip.tsx
│   ├── SectionLabel.tsx / ProjectTag.tsx
│   └── portfolio/
│       ├── CaseStudyLayout.tsx  # Shared case study shell
│       ├── CaseStudySection.tsx
│       ├── CaseStudyBlocks.tsx  # Callouts, stats, tags
│       ├── CaseStudyFigure.tsx
│       ├── CaseStudyPullQuote.tsx
│       └── PortfolioIndexCard.tsx
├── data/
│   └── portfolio.ts             # Single source of truth for projects
├── middleware.ts                # Basic auth for /portfolio routes
└── tailwind.config.ts           # Color tokens and fonts
```

## Customization

### Add or reorder portfolio projects

Edit `data/portfolio.ts`. The array order controls the index display and prev/next navigation.

```typescript
{
  slug: 'my-new-project',
  label: 'Healthcare',
  title: 'Project Title',
  summary: 'One-line description for the index.',
  year: '2024',
  heroImage: '/MyProject/Hero.png',
  listed: true,   // false = deep-link only, hidden from index
}
```

Then create `app/portfolio/my-new-project/page.tsx` using `CaseStudyLayout` and the case study components.

### Update homepage selected work

Edit the `projects` array in `app/page.tsx`. This section is separate from the protected portfolio case studies.

### Design tokens

Colors and typography live in `tailwind.config.ts` and `app/globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `ink` | `#141820` | Page background |
| `base-2` | `#181d27` | Alternate surfaces |
| `accent` | `#7FB069` | Links, tags, banners |
| `sand` | `#DDD0BC` | Primary text |

**Note:** Avoid naming a Tailwind color `base` — it conflicts with the `text-base` font-size utility.

### Navigation and footer

- Nav links: `components/Navbar.tsx`
- Footer links: `app/layout.tsx`
- Site metadata: `app/layout.tsx`

## Security

1. **HTTPS required in production** — Basic Auth sends credentials base64-encoded
2. **Never commit `.env.local`**
3. Set `PORTFOLIO_USERNAME` and `PORTFOLIO_PASSWORD` in your hosting provider
4. Use a strong password: `openssl rand -base64 32`

```bash
# Test auth locally
curl -i http://localhost:3000/portfolio                          # expect 401
curl -i http://localhost:3000/portfolio -u "username:password"     # expect 200
```

## Deployment (Vercel)

1. Push to GitHub
2. Import the `portfolio-project` directory (or repo root) in Vercel
3. Set environment variables: `PORTFOLIO_USERNAME`, `PORTFOLIO_PASSWORD`
4. Deploy

## License

MIT — use as a template for your own portfolio.
