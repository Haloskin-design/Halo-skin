// sections/ProductGrid.tsx
import { ProductCard } from '@/components/ui/ProductCard'
import type { Product } from '@/lib/products'

interface Props {
  products:  Product[]
  heading:   string
  eyebrow:   string
}

export function ProductGrid({ products, heading, eyebrow }: Props) {
  return (
    <section className="px-12 max-sm:px-6 py-24 max-sm:py-16" aria-label={heading}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div>
            <p className="t-eyebrow mb-3">{eyebrow}</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-cream leading-[0.95]">
              {heading}
            </h2>
          </div>
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-cream/35">
            {products.length} products
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={i < 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
