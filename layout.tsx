import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { Navbar } from '@/components/nav/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://haloskincare.co.uk'),
  title: {
    default: 'hālo — the art of radiance',
    template: '%s | hālo',
  },
  description: 'Premium skincare for him & her. High-performance formulas, honestly made. Vegan, cruelty free, sustainably produced in the UK.',
  keywords: ['luxury skincare', 'premium skincare UK', 'vegan skincare', 'him and her skincare', 'the art of radiance'],
  authors: [{ name: 'hālo skincare' }],
  creator: 'hālo skincare',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://haloskincare.co.uk',
    siteName: 'hālo skincare',
    title: 'hālo — the art of radiance',
    description: 'Premium skincare for him & her. High-performance formulas, honestly made.',
    images: [{ url: '/images/home_hero.webp', width: 1200, height: 630, alt: 'hālo — the art of radiance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hālo — the art of radiance',
    description: 'Premium skincare for him & her. High-performance formulas, honestly made.',
    images: ['/images/home_hero.webp'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#181513',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="dark">
      <body>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
      </body>
    </html>
  )
}
