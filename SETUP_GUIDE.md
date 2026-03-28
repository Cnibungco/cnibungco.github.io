# Complete Setup Guide

## Option 1: Import Into Cursor (Recommended)

### Step 1: Download the Project Files
All project files have been created in `/home/claude/portfolio-project/`

### Step 2: Open in Cursor
1. Open Cursor
2. Go to **File → Open Folder**
3. Navigate to the downloaded `portfolio-project` folder
4. Click "Open"

### Step 3: Install Dependencies
Open Cursor's terminal (View → Terminal or Ctrl+`) and run:

```bash
npm install
```

This will install:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- All required dependencies

### Step 4: Configure Environment Variables
1. Copy the example env file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and set secure credentials:
   ```env
   PORTFOLIO_USERNAME=admin
   PORTFOLIO_PASSWORD=use_a_strong_password_here
   NODE_ENV=production
   ```

   Generate a secure password:
   ```bash
   openssl rand -base64 32
   ```

### Step 5: Start Development Server
```bash
npm run dev
```

Visit:
- **Public site**: http://localhost:3000
- **Portfolio**: http://localhost:3000/portfolio (requires login)

### Step 6: Customize Content
See README.md "Customization Guide" section for:
- Updating personal information
- Adding case studies
- Changing colors
- Modifying navigation

---

## Option 2: Deploy to Vercel Directly

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. In terminal:
   ```bash
   cd portfolio-project
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

### Step 2: Import to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variables
In Vercel project settings:
1. Go to **Settings → Environment Variables**
2. Add:
   - `PORTFOLIO_USERNAME` = `admin`
   - `PORTFOLIO_PASSWORD` = `your_secure_password`
   - `NODE_ENV` = `production`
3. Click "Save"

### Step 4: Deploy
Click "Deploy" - your site will be live in ~2 minutes at:
`https://your-project.vercel.app`

---

## Option 3: Manual File-by-File Setup

If you prefer to understand each file:

### 1. Create Next.js Project
```bash
npx create-next-app@latest my-portfolio --typescript --tailwind --app --no-src-dir
cd my-portfolio
```

### 2. Copy Configuration Files
Replace/create these files from the project:

**Essential configs:**
- `tailwind.config.ts` (custom colors, animations)
- `next.config.mjs` (image optimization)
- `tsconfig.json` (TypeScript settings)
- `.gitignore` (security)
- `.env.local.example` (template for credentials)

### 3. Copy Core Files
**Authentication:**
- `middleware.ts` (HTTP Basic Auth)

**Global files:**
- `app/globals.css` (custom styles)
- `app/layout.tsx` (root layout with navbar)
- `app/page.tsx` (homepage)

### 4. Copy Components
**Public components:**
- `components/Navbar.tsx`
- `components/FeaturedProject.tsx`

**Portfolio components:**
- `components/portfolio/PortfolioHeader.tsx`
- `components/portfolio/CaseStudyCard.tsx`
- `components/portfolio/CaseStudyLayout.tsx`

### 5. Copy Portfolio Pages
- `app/portfolio/layout.tsx`
- `app/portfolio/page.tsx`

### 6. Copy Types
- `types/portfolio.ts`

### 7. Install & Run
```bash
npm install
cp .env.local.example .env.local
# Edit .env.local with your credentials
npm run dev
```

---

## Testing Your Setup

### Test 1: Public Site
```bash
# Should load without authentication
curl http://localhost:3000
```

### Test 2: Protected Portfolio
```bash
# Should return 401 Unauthorized
curl -i http://localhost:3000/portfolio
```

### Test 3: Valid Login
```bash
# Create base64 credentials
echo -n "admin:your_password" | base64

# Test with credentials (replace BASE64_STRING)
curl -i http://localhost:3000/portfolio \
  -H "Authorization: Basic BASE64_STRING"
```

### Test 4: Browser Check
1. Visit http://localhost:3000
2. Click navigation items
3. Check mobile menu (resize browser)
4. Visit http://localhost:3000/portfolio
5. Enter credentials when prompted
6. Verify portfolio loads

---

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Run `npm install` again

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Issue: Tailwind styles not loading
**Solution**:
1. Check `tailwind.config.ts` has correct content paths
2. Restart dev server
3. Clear `.next` folder: `rm -rf .next`

### Issue: Authentication not working
**Solution**:
1. Verify `.env.local` exists and has correct format
2. Check no spaces around `=` in env vars
3. Restart dev server (env changes require restart)

### Issue: TypeScript errors
**Solution**:
```bash
# Regenerate Next.js types
npm run dev
# Or check tsconfig.json matches project structure
```

---

## Next Steps After Setup

1. **Customize content** (see README.md)
2. **Add your own images** (create `/public/images/` folder)
3. **Create case study pages** (follow template in README.md)
4. **Add analytics** (Google Analytics, Plausible, etc.)
5. **Set up domain** (via Vercel or your hosting provider)
6. **Add SEO metadata** (edit metadata in layout files)

---

## File Manifest

Complete list of all files in the project:

```
portfolio-project/
├── .gitignore
├── .env.local.example
├── README.md
├── SETUP_GUIDE.md (this file)
├── package.json
├── next.config.mjs
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── middleware.ts
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── portfolio/
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── FeaturedProject.tsx
│   └── portfolio/
│       ├── PortfolioHeader.tsx
│       ├── CaseStudyCard.tsx
│       └── CaseStudyLayout.tsx
└── types/
    └── portfolio.ts
```

**Total files**: 19
**Lines of code**: ~2,000
**Bundle size**: ~45KB gzipped

---

## Questions?

- **Next.js docs**: https://nextjs.org/docs
- **Tailwind docs**: https://tailwindcss.com/docs
- **TypeScript docs**: https://www.typescriptlang.org/docs

Good luck with your portfolio! 🚀
