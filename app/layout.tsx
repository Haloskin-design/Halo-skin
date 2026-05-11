import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { Navbar } from '@/components/nav/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://haloskincare.co.uk'),
  title: {
    default: 'hālo — the art of radiance',
    template: '%s | hālo',
  },
  description: 'Premium skincare for him & her. Vegan, cruelty free, made sustainably in the UK.',
  keywords: ['skincare', 'luxury skincare', 'vegan skincare', 'UK skincare', 'him and her'],
  authors: [{ name: 'hālo skincare' }],
  creator: 'hālo skincare',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://haloskincare.co.uk',
    siteName: 'hālo skincare',
    title: 'hālo — the art of radiance',
    description: 'Premium skincare for him & her. Vegan, cruelty free, made sustainably in the UK.',
    images: [{ url: '/images/home_hero.webp', width: 1200, height: 630, alt: 'hālo skincare' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hālo — the art of radiance',
    description: 'Premium skincare for him & her. Vegan, cruelty free, made sustainably in the UK.',
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
      <body className="bg-espresso text-cream antialiased">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  )
}
