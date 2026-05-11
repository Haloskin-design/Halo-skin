import { ProductCard } from '@/components/ui/ProductCard'
import type { Product } from '@/lib/products'

interface Props {
  products: Product[]
  heading:  string
  eyebrow:  string
}

export function ProductGrid({ products, heading, eyebrow }: Props) {
  return (
    <section
      aria-label={heading}
      style={{
        paddingTop:    'clamp(4rem, 8vw, 8rem)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
        paddingLeft:   'clamp(1.5rem, 5vw, 5rem)',
        paddingRight:  'clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display:        'flex',
          alignItems:     'flex-end',
          justifyContent: 'space-between',
          marginBottom:   'clamp(2.5rem, 5vw, 4.5rem)',
          paddingBottom:  '1.5rem',
          borderBottom:   '1px solid rgba(255,255,255,0.05)',
        }}
        className="flex-col items-start gap-3 md:!flex-row md:items-end"
      >
        <div>
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.7)',
              marginBottom:  '0.75rem',
            }}
          >
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    200,
              fontSize:      'clamp(2rem, 4vw, 3.4rem)',
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              color:         'rgba(237, 232, 226, 0.9)',
            }}
          >
            {heading}
          </h2>
        </div>

        <p
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.58rem',
            fontWeight:    300,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:         'rgba(237, 232, 226, 0.22)',
            whiteSpace:    'nowrap',
          }}
        >
          {products.length} formulas
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
          gap:                 'clamp(2rem, 4vw, 3.5rem)',
          maxWidth:            '1480px',
        }}
      >
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={i < 2}
          />
        ))}
      </div>

      {/* Trust signals */}
      <div
        style={{
          display:       'flex',
          flexWrap:      'wrap',
          gap:           '2.5rem',
          marginTop:     'clamp(3rem, 6vw, 5rem)',
          paddingTop:    'clamp(2rem, 4vw, 3rem)',
          borderTop:     '1px solid rgba(255,255,255,0.05)',
          justifyContent: 'center',
        }}
      >
        {[
          'vegan formulas',
          'cruelty free',
          'no parabens',
          'no sulphates',
          'sustainably made in the uk',
        ].map(signal => (
          <span
            key={signal}
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.56rem',
              fontWeight:    300,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         'rgba(237, 232, 226, 0.22)',
            }}
          >
            {signal}
          </span>
        ))}
      </div>
    </section>
  )
}
