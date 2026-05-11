import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // hālo brand palette — dark cinematic luxury
        'ink':       '#0E0C0A',
        'espresso':  '#181513',
        'mocha':     '#211D1A',
        'charcoal':  '#2B2622',
        'warm-dark': '#332C27',
        'taupe':     '#5C5248',
        'mink':      '#8A7B6E',
        'stone':     '#B0A396',
        'parchment': '#D8D0C6',
        'ivory':     '#EDE8E2',
        'bronze':    '#8A684E',
        'caramel':   '#B88A5A',
        'sand':      '#D4AA7A',
        'gold':      '#C9A96E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        logo:    ['"Nunito"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        // Precise typographic scale
        '2xs':  ['0.625rem',  { lineHeight: '1',    letterSpacing: '0.12em' }],
        'xs':   ['0.75rem',   { lineHeight: '1.4',  letterSpacing: '0.06em' }],
        'sm':   ['0.875rem',  { lineHeight: '1.7',  letterSpacing: '0.02em' }],
        'base': ['1rem',      { lineHeight: '1.7',  letterSpacing: '0.01em' }],
        'lg':   ['1.125rem',  { lineHeight: '1.5',  letterSpacing: '0em'   }],
        'xl':   ['1.25rem',   { lineHeight: '1.4',  letterSpacing: '-0.01em' }],
        '2xl':  ['1.5rem',    { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
        '3xl':  ['2rem',      { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        '4xl':  ['2.5rem',    { lineHeight: '1.0',  letterSpacing: '-0.03em' }],
        '5xl':  ['3.25rem',   { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '6xl':  ['4.25rem',   { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        '7xl':  ['5.5rem',    { lineHeight: '0.90', letterSpacing: '-0.04em' }],
        '8xl':  ['7rem',      { lineHeight: '0.88', letterSpacing: '-0.04em' }],
      },
      spacing: {
        'nav':    '76px',
        'nav-sm': '60px',
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '42':  '10.5rem',
        '46':  '11.5rem',
        '50':  '12.5rem',
        '68':  '17rem',
        '76':  '19rem',
        '88':  '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        'site':    '1480px',
        'content': '1200px',
        'narrow':  '720px',
        'text':    '580px',
      },
      screens: {
        'xs':  '480px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.0, 1.0)',
        'reveal': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'fade':   'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400':  '400ms',
        '600':  '600ms',
        '800':  '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1500': '1500ms',
      },
      animation: {
        'fade-up':   'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':   'fadeIn 0.8s ease forwards',
        'slow-zoom': 'slowZoom 18s ease-in-out infinite alternate',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to':   { opacity: '1' },
        },
        slowZoom: {
          'from': { transform: 'scale(1.00)' },
          'to':   { transform: 'scale(1.06)' },
        },
        kenBurns: {
          'from': { transform: 'scale(1.04) translate(0%, 0%)' },
          'to':   { transform: 'scale(1.00) translate(-0.5%, 0.5%)' },
        },
        lineGrow: {
          'from': { transform: 'scaleX(0)', transformOrigin: 'left' },
          'to':   { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      aspectRatio: {
        'portrait':  '3 / 4',
        'landscape': '4 / 3',
        'cinematic': '21 / 9',
        'square':    '1 / 1',
        'hero':      '16 / 9',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

export default config
