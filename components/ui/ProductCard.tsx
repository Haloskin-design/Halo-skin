// components/ui/ProductCard.tsx
import Image from 'next/image'
import type { Product } from '@/lib/products'

interface Props {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: Props) {
  return (
    <article
      className="group relative flex flex-col"
      aria-label={product.name}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal mb-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover grayscale contrast-[1.05] brightness-[0.75] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-[0.65] group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 t-eyebrow bg-espresso/90 px-3 py-1.5">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <p className="t-eyebrow mb-2">{product.subtitle}</p>
        <h3 className="font-display text-[1.25rem] font-light text-cream leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-[0.82rem] text-cream/55 leading-[1.8] mb-4 flex-1">
          {product.description}
        </p>

        {/* Ingredients */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.ingredients.map(ing => (
            <span
              key={ing}
              className="text-[0.48rem] tracking-[0.22em] uppercase text-bronze/70 border border-bronze/20 px-2 py-1"
            >
              {ing}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="font-display text-[1.1rem] font-light text-cream/80">
            £{product.price}
          </span>
          <button
            type="button"
            className="text-[0.58rem] tracking-[0.26em] uppercase text-cream/60 border border-cream/18 px-5 py-2.5 transition-all duration-300 hover:border-sand/50 hover:text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40"
            aria-label={`Add ${product.name} to bag`}
          >
            add to bag
          </button>
        </div>
      </div>
    </article>
  )
}
