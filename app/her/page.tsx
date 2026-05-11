import type { Metadata } from 'next'
import { Hero } from '@/sections/Hero'
import { ProductGrid } from '@/sections/ProductGrid'
import { Footer } from '@/components/ui/Footer'
import { herProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'shop her — hālo skincare',
  description: 'Face and body rituals for her. Vegan, cruelty free, made sustainably in the UK.',
}

export default function HerPage() {
  return (
    <>
      <Hero
        imageSrc="/images/her_hero.jpg"
        imageAlt="hālo for her"
        objectPosition="center 15%"
        eyebrow="for her"
        heading="her space.\n<em>radiance, refined.</em>"
        sub="face · body · radiance"
        showCtas={false}
      />
      <ProductGrid products={herProducts} heading="her collection" eyebrow="shop her" />
      <Footer />
    </>
  )
}
