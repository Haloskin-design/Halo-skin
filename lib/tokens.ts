// lib/tokens.ts
// Single source of truth for all design tokens

export const colors = {
  espresso: '#181513',
  mocha:    '#211D1A',
  charcoal: '#2B2622',
  warmChar: '#332C27',
  bronze:   '#8A684E',
  caramel:  '#B88A5A',
  sand:     '#D6B08A',
  cream:    '#E7DED4',
  dim:      '#A89F96',
} as const

export const fonts = {
  display: '"Cormorant Garamond", serif',
  ui:      '"DM Sans", sans-serif',
  logo:    '"Nunito", sans-serif',
} as const

export const nav = {
  links: [
    { label: 'shop her',   href: '/her'     },
    { label: 'shop him',   href: '/him'     },
    { label: 'our story',  href: '/story'   },
    { label: 'our values', href: '/values'  },
    { label: 'contact',    href: '/contact' },
  ],
} as const
