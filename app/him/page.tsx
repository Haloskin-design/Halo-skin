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
        imageAlt="hālo for him"
        objectPosition="center 12%"
        eyebrow="for him"
        heading={`his pace.\n<em>confidence, refined.</em>`}
        sub="face · body · performance"
        showCtas={false}
      />
      <ProductGrid products={himProducts} heading="his collection" eyebrow="shop him" />
      <Footer />
    </>
  )
}
