import type { Metadata } from 'next'
import { Hero } from '@/sections/Hero'
import { ProductGrid } from '@/sections/ProductGrid'
import { Footer } from '@/components/ui/Footer'
import { herProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'shop her — hālo skincare',
  description: 'Face and body rituals for her. High-performance formulas, sustainably made in the UK.',
}

export default function HerPage() {
  return (
    <>
      <Hero
        imageSrc="/images/her_hero.jpg"
        objectPosition="center 16%"
        eyebrow="for her"
        headingLine1="her space."
        headingLine2="radiance, refined."
        sub="face · body · ritual"
        showCtas={false}
      />
      <ProductGrid
        products={herProducts}
        heading="her collection"
        eyebrow="shop her"
      />
      <Footer />
    </>
  )
}
