import Image from 'next/image'
import type { Product } from '@/lib/products'

interface Props {
  product:   Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: Props) {
  return (
    <article className="product-card" aria-label={product.name}>

      {/* Image container */}
      <div
        className="product-card__image"
        style={{ aspectRatio: '3 / 4', marginBottom: '1.5rem' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            objectFit:      'cover',
            objectPosition: 'center 15%',
            filter:         'grayscale(100%) contrast(1.04) brightness(0.58)',
            transition:     'filter 0.9s cubic-bezier(0.25,0.1,0,1), transform 1s cubic-bezier(0.25,0.1,0,1)',
          }}
          className="product-card__img"
        />
        <div className="product-card__overlay" />

        {/* Badge */}
        {product.badge && (
          <span
            style={{
              position:      'absolute',
              top:           '1.25rem',
              left:          '1.25rem',
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.55rem',
              fontWeight:    300,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.9)',
              padding:       '0.4rem 0.75rem',
              border:        '1px solid rgba(201, 169, 110, 0.25)',
              backgroundColor: 'rgba(24, 21, 19, 0.75)',
              backdropFilter: 'blur(4px)',
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '0.5rem' }}>

        {/* Subtitle */}
        <p
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.56rem',
            fontWeight:    300,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color:         'rgba(212, 170, 122, 0.65)',
          }}
        >
          {product.subtitle}
        </p>

        {/* Name */}
        <h3
          style={{
            fontFamily:    "'Cormorant Garamond', Georgia, serif",
            fontWeight:    300,
            fontSize:      'clamp(1.1rem, 2vw, 1.35rem)',
            lineHeight:    1.15,
            letterSpacing: '-0.01em',
            color:         'rgba(237, 232, 226, 0.9)',
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize:   '0.82rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color:      'rgba(237, 232, 226, 0.45)',
            flexGrow:   1,
            marginTop:  '0.25rem',
          }}
        >
          {product.description}
        </p>

        {/* Ingredients */}
        <div
          style={{
            display:   'flex',
            flexWrap:  'wrap',
            gap:       '0.5rem',
            marginTop: '0.75rem',
          }}
        >
          {product.ingredients.map(ing => (
            <span
              key={ing}
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.5rem',
                fontWeight:    300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         'rgba(176, 163, 150, 0.55)',
                border:        '1px solid rgba(176, 163, 150, 0.12)',
                padding:       '0.3rem 0.65rem',
              }}
            >
              {ing}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            marginTop:      '1.25rem',
            paddingTop:     '1.25rem',
            borderTop:      '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <span
            style={{
              fontFamily:    "'Cormorant Garamond', serif",
              fontWeight:    300,
              fontSize:      '1.2rem',
              letterSpacing: '0.02em',
              color:         'rgba(216, 208, 198, 0.8)',
            }}
          >
            £{product.price}
          </span>

          <button
            type="button"
            className="btn-bag"
            style={{ width: 'auto', padding: '0.7rem 1.5rem' }}
            aria-label={`Add ${product.name} to bag — £${product.price}`}
          >
            add to bag
          </button>
        </div>
      </div>

      {/* Hover styles via CSS injection */}
      <style>{`
        .product-card:hover .product-card__img {
          filter: grayscale(0%) contrast(1.0) brightness(0.65) !important;
          transform: scale(1.03) !important;
        }
      `}</style>
    </article>
  )
}
