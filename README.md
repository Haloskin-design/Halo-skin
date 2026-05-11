# hālo skincare — Next.js Static Export

## Quick Start

```bash
npm install
npm run dev        # Development at localhost:3000
npm run build      # Production build → creates /out folder
```

---

## Deploy to Netlify

### Option A — GitHub → Netlify (recommended, fully automatic)

1. Push this folder to GitHub:
```bash
cd halo-nextjs
git init
git add .
git commit -m "hālo — production"
git remote add origin https://github.com/YOUR-USERNAME/halo-skincare
git push -u origin main
```

2. Go to **app.netlify.com → Add new site → Import from GitHub**
3. Select your repo
4. Settings are pre-filled from `netlify.toml`:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `out`
5. Click **Deploy** — live in ~2 minutes

### Option B — Manual drag-and-drop (pre-built)

1. Run build locally:
```bash
npm install
npm run build
```
2. The `/out` folder is created
3. Drag the **`out` folder** (not the zip) to **netlify.com/drop**
4. Live immediately — no build needed

> ⚠️ Do NOT drag the source zip directly. Netlify cannot run `npm build` from a zip drop.
> You must either: (a) connect via GitHub, or (b) pre-build and drag the `/out` folder.

---

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout (Navbar + globals.css)
  page.tsx              # Homepage
  her/page.tsx          # Shop Her
  him/page.tsx          # Shop Him
  story/page.tsx        # Our Story
  values/page.tsx       # Our Values
  contact/page.tsx      # Contact
  not-found.tsx         # Custom 404

components/
  nav/Navbar.tsx        # Navigation — sticky, hide-on-scroll, mobile menu
  ui/Footer.tsx         # Site footer with newsletter
  ui/ProductCard.tsx    # Product card with hover reveal
  ui/ContactForm.tsx    # Contact form (client component)
  ui/NewsletterForm.tsx # Newsletter signup (client component)

sections/
  Hero.tsx              # Full-viewport hero
  StoryHero.tsx         # Section hero (story/values/contact)
  ProductGrid.tsx       # Product grid with trust signals
  ValueBlock.tsx        # Alternating image/text blocks

lib/
  products.ts           # Product data
  tokens.ts             # Design tokens

styles/
  globals.css           # Tailwind + full design system

public/
  images/               # 35 optimised images (WebP + JPG)
  sitemap.xml           # Static sitemap
  robots.txt            # Static robots
```

---

## Design System

### Colours
| Token | Value | Usage |
|---|---|---|
| `--espresso` | `#181513` | Primary background |
| `--mocha` | `#211D1A` | Secondary background |
| `--charcoal` | `#2B2622` | Card backgrounds |
| `--gold` | `#C9A96E` | Primary accent |
| `--caramel` | `#B88A5A` | Secondary accent |
| `--sand` | `#D4AA7A` | Hover states |
| `--ivory` | `#EDE8E2` | Primary text |
| `--stone` | `#B0A396` | Secondary text |

### Typography
| Class | Font | Weight | Use |
|---|---|---|---|
| `.t-display` | Cormorant Garamond | 200 | Headlines |
| `.t-eyebrow` | DM Sans | 300 | Labels |
| `.t-nav` | DM Sans | 300 | Navigation |
| `.t-body` | DM Sans | 300 | Body copy |
| `.t-logo` | Nunito | 700 | Logo mark |

### Buttons
| Class | Style |
|---|---|
| `.btn-primary` | Ghost with cream hover fill |
| `.btn-secondary` | Subtle ghost |
| `.btn-link` | Text with gold colour |
| `.btn-bag` | Cream fill (product CTA) |

---

## Next Steps After Deployment

1. Connect Shopify Storefront API for real cart
2. Connect Klaviyo for email newsletter
3. Add Google Analytics
4. Set `metadataBase` to live domain in `app/layout.tsx`
