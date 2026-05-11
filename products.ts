// lib/products.ts — single source of truth for all product data

export interface Product {
  id:          string
  name:        string
  subtitle:    string
  description: string
  price:       number
  badge?:      string
  category:    'her' | 'him'
  type:        string
  image:       string
  ingredients: string[]
}

export const products: Product[] = [
  // ── HER ──────────────────────────────────────────────────────
  {
    id:          'clarity-face-wash-her',
    name:        'hālo clarity face wash',
    subtitle:    'face · cleanse · daily',
    description: 'Gentle gel cleanser. Removes daily impurities while preserving the skin\'s natural moisture barrier.',
    price:       24,
    badge:       'bestseller',
    category:    'her',
    type:        'face',
    image:       '/images/her_img2.webp',
    ingredients: ['niacinamide', 'hyaluronic acid', 'green tea'],
  },
  {
    id:          'glow-facial-oil',
    name:        'hālo glow facial oil',
    subtitle:    'face · radiance · morning',
    description: 'Lightweight facial oil that hydrates deeply, restores natural radiance, and balances skin without heaviness.',
    price:       32,
    badge:       'new',
    category:    'her',
    type:        'face',
    image:       '/images/her_img3.webp',
    ingredients: ['rosehip', 'vitamin c', 'squalane'],
  },
  {
    id:          'brightening-face-mask',
    name:        'hālo brightening face mask',
    subtitle:    'face · treat · weekly',
    description: 'Black clay and liquorice root mask. Draws out impurities, brightens tone, and refines texture.',
    price:       28,
    category:    'her',
    type:        'face',
    image:       '/images/her_img5.webp',
    ingredients: ['black clay', 'liquorice root', 'vitamin e'],
  },
  {
    id:          'luminous-body-oil',
    name:        'hālo luminous body oil',
    subtitle:    'body · nourish · daily',
    description: 'Fast-absorbing body oil that nourishes dry skin, improves tone, and leaves a visible luminosity.',
    price:       34,
    badge:       'bestseller',
    category:    'her',
    type:        'body',
    image:       '/images/her_img6.webp',
    ingredients: ['jojoba', 'vitamin a', 'argan'],
  },

  // ── HIM ──────────────────────────────────────────────────────
  {
    id:          'clarify-face-wash-him',
    name:        'hālo clarify face wash',
    subtitle:    'face · cleanse · daily',
    description: 'Deep cleansing. Moisture balanced. Works in 60 seconds.',
    price:       24,
    badge:       'bestseller',
    category:    'him',
    type:        'face',
    image:       '/images/him_img2.webp',
    ingredients: ['salicylic acid', 'zinc', 'green tea'],
  },
  {
    id:          'daily-facial-oil',
    name:        'hālo daily facial oil',
    subtitle:    'face · hydrate · morning',
    description: 'Lightweight and non-greasy. Absorbs fast into thicker skin. Reduces post-shave redness.',
    price:       30,
    category:    'him',
    type:        'face',
    image:       '/images/him_img4.webp',
    ingredients: ['hemp seed', 'vitamin e', 'squalane'],
  },
  {
    id:          'post-shave-wash',
    name:        'hālo cucumber post-shave wash',
    subtitle:    'face · post-shave · recover',
    description: 'Calms razor burn and redness. Restores the skin barrier after shaving.',
    price:       24,
    category:    'him',
    type:        'face',
    image:       '/images/him_img5.webp',
    ingredients: ['cucumber extract', 'aloe vera', 'chamomile'],
  },
  {
    id:          'green-tea-face-mask',
    name:        'hālo green tea face mask',
    subtitle:    'face · treat · weekly',
    description: 'Anti-ageing clay mask with green tea antioxidants. Tightens, clarifies, and firms.',
    price:       28,
    category:    'him',
    type:        'face',
    image:       '/images/him_img6.webp',
    ingredients: ['green tea', 'kaolin clay', 'retinol'],
  },
]

export const herProducts  = products.filter(p => p.category === 'her')
export const himProducts  = products.filter(p => p.category === 'him')
