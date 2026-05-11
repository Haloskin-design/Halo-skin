import type { Metadata } from 'next'
import { Hero } from '@/sections/Hero'
import { Footer } from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'hālo — the art of radiance',
  description: 'Premium skincare for him & her. Vegan, cruelty free, made sustainably in the UK.',
  openGraph: {
    title: 'hālo — the art of radiance',
    description: 'Premium skincare for him & her. Vegan, cruelty free, made sustainably in the UK.',
    images: [{ url: '/images/home_hero.webp', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="/images/home_hero.webp"
        objectPosition="center 18%"
      />
      <Footer />
    </>
  )
}
