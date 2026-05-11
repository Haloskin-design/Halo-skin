import type { Metadata } from 'next'
import { Hero } from '@/sections/Hero'
import { ProductGrid } from '@/sections/ProductGrid'
import { Footer } from '@/components/ui/Footer'
import { himProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'shop him — hālo skincare',
  description: 'Face and body skincare for him. Performance formulas, sustainably made in the UK.',
}

export default function HimPage() {
  return (
    <>
      <Hero
        imageSrc="/images/him_hero.jpg"
        objectPosition="center 13%"
        eyebrow="for him"
        headingLine1="his pace."
        headingLine2="confidence, refined."
        sub="face · body · performance"
        showCtas={false}
      />
      <ProductGrid
        products={himProducts}
        heading="his collection"
        eyebrow="shop him"
      />
      <Footer />
    </>
  )
}
