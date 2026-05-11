import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // hālo brand palette
        espresso:  '#181513',
        mocha:     '#211D1A',
        charcoal:  '#2B2622',
        warmChar:  '#332C27',
        bronze:    '#8A684E',
        caramel:   '#B88A5A',
        sand:      '#D6B08A',
        cream:     '#E7DED4',
        dim:       '#A89F96',
        rule:      'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        ui:      ['"DM Sans"', 'sans-serif'],
        logo:    ['"Nunito"', 'sans-serif'],
      },
      fontSize: {
        'nav':     ['0.72rem', { letterSpacing: '0.2em', lineHeight: '1' }],
        'eyebrow': ['0.55rem', { letterSpacing: '0.38em', lineHeight: '1' }],
        'hero':    ['clamp(2.4rem,4vw,3.8rem)', { lineHeight: '0.92' }],
        'hero-xl': ['clamp(3.5rem,7vw,6rem)',   { lineHeight: '0.92' }],
      },
      spacing: {
        'nav-h':    '82px',
        'nav-h-sm': '64px',
      },
      animation: {
        'slow-zoom': 'slowZoom 14s ease-in-out infinite alternate',
        'fade-in':   'fadeIn 0.7s ease forwards',
      },
      keyframes: {
        slowZoom: {
          'from': { transform: 'scale(1.0)' },
          'to':   { transform: 'scale(1.06)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to':   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
