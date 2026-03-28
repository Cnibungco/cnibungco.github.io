# Creative Portfolio Website

A modern, dual-access personal website built with Next.js 15, featuring public creative work and a private UX/design portfolio protected by HTTP Basic Auth.

## Features

### Public Site
- **Clean, editorial design** with goth/cyberpunk influences
- **Featured creative projects** (DJ sets, VJ installations, music, visuals)
- **Mobile-responsive** with full-screen navigation overlay
- **Minimal JavaScript** for optimal performance

### Private Portfolio (`/portfolio`)
- **HTTP Basic Auth protection** via Next.js middleware
- **Professional UX case studies** with NDA-friendly presentation
- **Role, scope, and outcome metrics** for each project
- **Server-side authentication** (no client-side bypass possible)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: HTTP Basic Auth (middleware)
- **Deployment**: Vercel-ready

## Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set your credentials:

```env
PORTFOLIO_USERNAME=admin
PORTFOLIO_PASSWORD=your_secure_password_here
NODE_ENV=production
```

**Security Note**: Generate a strong password using:
```bash
openssl rand -base64 32
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see the public site.

Visit `http://localhost:3000/portfolio` to test the protected portfolio (you'll be prompted for credentials).

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-project/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navbar
│   ├── page.tsx              # Homepage
│   └── portfolio/
│       ├── layout.tsx        # Portfolio-specific layout
│       └── page.tsx          # Portfolio index (case studies)
├── components/
│   ├── Navbar.tsx            # Global navigation
│   ├── FeaturedProject.tsx   # Project card component
│   └── portfolio/
│       ├── PortfolioHeader.tsx
│       ├── CaseStudyCard.tsx
│       └── CaseStudyLayout.tsx
├── types/
│   └── portfolio.ts          # TypeScript interfaces
├── middleware.ts             # Auth middleware
├── tailwind.config.ts        # Tailwind configuration
└── next.config.mjs           # Next.js configuration
```

## Customization Guide

### 1. Update Personal Information

**Root layout** (`app/layout.tsx`):
- Line 14-16: Update metadata (title, description, keywords)
- Line 33-54: Update footer social links

**Navbar** (`components/Navbar.tsx`):
- Line 23: Update "YOUR NAME" text
- Line 101-123: Update mobile menu social links

**Homepage** (`app/page.tsx`):
- Line 11-14: Update hero statement
- Line 17-19: Update location
- Line 34-67: Update featured projects

### 2. Add New Case Studies

Edit `app/portfolio/page.tsx` and add a new `<CaseStudyCard />`:

```tsx
<CaseStudyCard
  title="Your Case Study Title"
  client="Client Name"
  role="Your Role"
  scope="Duration · Team size"
  outcome="Quantified business impact"
  tags={['Tag1', 'Tag2', 'Tag3']}
  href="/portfolio/your-slug"
  year="2024"
  nda={false}
/>
```

### 3. Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  'bg-primary': '#0a0a0a',      // Near-black background
  'text-primary': '#e8e6e3',    // Warm off-white
  'accent': '#00d9ff',          // Electric cyan (change this!)
}
```

### 4. Modify Navigation

Edit `components/Navbar.tsx` lines 7-13:

```typescript
const navItems = [
  { name: 'YOUR LINK', href: '/your-route', locked: false },
  // Add more items...
];
```

## Security Best Practices

### Production Deployment

1. **HTTPS is mandatory** - Basic Auth sends credentials in base64
2. **Never commit `.env.local`** - It's in `.gitignore` by default
3. **Set environment variables** in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
4. **Rotate credentials periodically**
5. **Use strong passwords** (see Quick Start #2)

### Testing Authentication

```bash
# Test protected route (should return 401)
curl -i http://localhost:3000/portfolio

# Test with credentials (should return 200)
echo -n "admin:your_password" | base64
curl -i http://localhost:3000/portfolio \
  -H "Authorization: Basic <base64_output>"
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables:
   - `PORTFOLIO_USERNAME`
   - `PORTFOLIO_PASSWORD`
4. Deploy

### Other Platforms

Works on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## Adding Content

### Create a New Case Study Page

1. Create file: `app/portfolio/[slug]/page.tsx`

```typescript
import CaseStudyLayout from '@/components/portfolio/CaseStudyLayout';

export default function CaseStudyPage() {
  return (
    <CaseStudyLayout
      title="Your Case Study"
      client="Client Name"
      year="2024"
      role="Your Role"
    >
      {/* Add your case study content here */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-light mb-4">Overview</h2>
          <p className="text-text-secondary leading-relaxed">
            Your case study content...
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
```

2. Add route to portfolio index (`app/portfolio/page.tsx`)

### Add Public Project Pages

Create routes in `app/` directory:
- `app/music/[slug]/page.tsx`
- `app/play/[slug]/page.tsx`

## Performance Optimizations

- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible
- ✅ Minimal JavaScript (< 50KB)
- ✅ CSS-only animations
- ✅ Optimized web fonts (Inter via next/font)
- ✅ Automatic image optimization (Next.js)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ `prefers-reduced-motion` support
- ✅ Color contrast meets WCAG AA

## License

MIT License - feel free to use this as a template for your own portfolio.

## Support

For questions or issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Search GitHub issues or create a new one

---

Built with Next.js 15 and Tailwind CSS.
