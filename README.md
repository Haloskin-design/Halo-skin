# hālo skincare — Next.js Production Build

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Netlify

### Option A — Netlify UI (recommended)

1. Push this folder to a GitHub repo
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click **Add new site → Import an existing project**
4. Connect GitHub → select your repo
5. Netlify auto-detects Next.js — settings will be pre-filled:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Plugin:** `@netlify/plugin-nextjs` (auto-installed)
6. Click **Deploy site**
7. Your live URL appears in ~2 minutes

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Netlify Build Settings (if manual)

| Setting | Value |
|---|---|
| Base directory | *(leave blank)* |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | `20` |
| Plugin | `@netlify/plugin-nextjs` |

### Custom Domain

In Netlify dashboard → **Domain management** → Add `haloskincare.co.uk`

---

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout — Navbar, metadata, fonts
  page.tsx              # Homepage
  her/page.tsx          # Shop Her
  him/page.tsx          # Shop Him
  story/page.tsx        # Our Story
  values/page.tsx       # Our Values
  contact/page.tsx      # Contact
  not-found.tsx         # Custom 404
  sitemap.ts            # Auto-generated sitemap.xml
  robots.ts             # Auto-generated robots.txt

components/
  nav/Navbar.tsx        # Navigation (desktop + mobile)
  ui/ProductCard.tsx    # Product card component
  ui/Footer.tsx         # Site footer

sections/
  Hero.tsx              # Full-viewport hero (all pages)
  StoryHero.tsx         # Section hero (story/values/contact)
  ProductGrid.tsx       # Product grid layout
  ValueBlock.tsx        # Alternating image/text blocks

lib/
  products.ts           # All product data
  tokens.ts             # Design tokens

styles/
  globals.css           # Tailwind base + CSS variables

public/
  images/               # 35 optimised images (WebP + JPG)

netlify.toml            # Netlify deployment configuration
next.config.js          # Next.js configuration
tailwind.config.ts      # Brand design system
```

---

## Routes

| Route | Page |
|---|---|
| `/` | Homepage |
| `/her` | Shop Her (4 products) |
| `/him` | Shop Him (4 products) |
| `/story` | Our Story |
| `/values` | Our Values |
| `/contact` | Contact |
| `/404` | Custom not-found |
| `/sitemap.xml` | Auto-generated |
| `/robots.txt` | Auto-generated |

---

## Environment Variables

Copy `.env.example` to `.env.local`.  
No environment variables are required for basic deployment.

Optional integrations:
- **Klaviyo** — email newsletter
- **Shopify Storefront API** — cart/checkout
- **Google Analytics** — tracking

---

## Why Navigation Works (the original bug, solved)

The old single-file site had `filter:grayscale()` on hero images.  
CSS `filter` creates a new stacking context — this disrupted click event  
propagation and made navigation completely non-interactive.

In this Next.js rebuild:
- `next/image` wraps images with `pointer-events:none` automatically
- `filter` is applied to the `<img>` element only — no stacking context on parent
- Navigation uses Next.js `<Link>` — browser routing, zero JavaScript onclick
- Desktop and mobile nav are completely separate component trees
- `isolation:isolate` on the nav header
- `z-index: var(--z-nav)` = 2147483647 — guaranteed top layer

---

## Adding Products

Edit `lib/products.ts` — add to the `products` array:

```typescript
{
  id:          'your-product-id',
  name:        'hālo product name',
  subtitle:    'face · type · usage',
  description: 'One to two sentences.',
  price:       28,
  badge:       'new',          // optional
  category:    'her',          // 'her' | 'him'
  type:        'face',
  image:       '/images/your-image.webp',
  ingredients: ['ingredient 1', 'ingredient 2'],
}
```

---

## Next Integration Steps

1. **Shopify** — add Storefront API for real cart/checkout
2. **Klaviyo** — connect email forms
3. **Vercel Analytics** or Google Analytics
4. **Contentful/Sanity** — CMS for copy and product data

---

*hālo skincare — the art of radiance*
