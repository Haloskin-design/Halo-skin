import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  imageSrc:        string
  imageAlt?:       string
  objectPosition?: string
  eyebrow?:        string
  headingLine1?:   string
  headingLine2?:   string
  sub?:            string
  showCtas?:       boolean
}

export function Hero({
  imageSrc,
  imageAlt         = 'hālo skincare',
  objectPosition   = 'center 20%',
  eyebrow          = 'him & her · the art of radiance',
  headingLine1     = 'skincare that works.',
  headingLine2     = 'structured for individuality.',
  sub              = 'vegan · cruelty free · made sustainably in the uk',
  showCtas         = true,
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      style={{
        position:   'relative',
        width:      '100%',
        height:     'calc(100svh - var(--nav-h))',
        minHeight:  '520px',
        maxHeight:  '900px',
        display:    'flex',
        alignItems: 'flex-end',
        overflow:   'hidden',
      }}
    >
      {/* ── BACKGROUND IMAGE ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          userSelect:    'none',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit:      'cover',
            objectPosition: objectPosition,
            filter:         'grayscale(100%) contrast(1.06) brightness(0.38)',
            animation:      'kenBurns 22s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* ── GRADIENT OVERLAYS ──────────────────────────────────── */}
      {/* Bottom gradient — guarantees text legibility */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          background: [
            'linear-gradient(to top, rgba(24,21,19,1) 0%, rgba(24,21,19,0.88) 18%, rgba(24,21,19,0.3) 45%, transparent 70%)',
            'radial-gradient(ellipse 90% 70% at 50% 80%, rgba(14,12,10,0.6) 0%, transparent 70%)',
          ].join(', '),
        }}
      />

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <div
        style={{
          position:     'relative',
          zIndex:       2,
          width:        '100%',
          paddingLeft:  'clamp(1.5rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
        }}
      >
        <div style={{ maxWidth: '640px' }}>

          {/* Eyebrow */}
          <div
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           '0.75rem',
              marginBottom:  '1.5rem',
            }}
          >
            <span
              style={{
                display:         'block',
                width:           '2rem',
                height:          '1px',
                backgroundColor: 'rgba(201, 169, 110, 0.5)',
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.58rem',
                fontWeight:    300,
                letterSpacing: '0.34em',
                textTransform: 'uppercase',
                color:         'rgba(212, 170, 122, 0.7)',
              }}
            >
              {eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    200,
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              fontSize:      'clamp(2.6rem, 5.5vw, 5.2rem)',
              color:         'rgba(237, 232, 226, 0.95)',
              marginBottom:  '1.25rem',
            }}
          >
            {headingLine1}
            <br />
            <em
              style={{
                fontStyle: 'italic',
                color:     'rgba(237, 232, 226, 0.45)',
              }}
            >
              {headingLine2}
            </em>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.8rem',
              fontWeight:    300,
              letterSpacing: '0.12em',
              color:         'rgba(237, 232, 226, 0.5)',
              marginBottom:  showCtas ? '2.75rem' : 0,
              maxWidth:      '380px',
            }}
          >
            {sub}
          </p>

          {/* CTAs */}
          {showCtas && (
            <div
              style={{
                display:    'flex',
                flexWrap:   'wrap',
                gap:        '1rem',
                alignItems: 'center',
              }}
            >
              <Link href="/her" className="btn-primary">
                shop her
              </Link>
              <Link href="/him" className="btn-secondary">
                shop him
              </Link>
              <Link
                href="/film.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                <span aria-hidden="true" style={{ fontSize: '0.6rem' }}>▶</span>
                watch our story
              </Link>
            </div>
          )}
        </div>

        {/* Decorative vertical text — desktop only */}
        <div
          aria-hidden="true"
          style={{
            position:  'absolute',
            right:     'clamp(1.5rem, 5vw, 5rem)',
            bottom:    'clamp(3rem, 6vw, 5.5rem)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.52rem',
            fontWeight:    300,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color:         'rgba(237, 232, 226, 0.18)',
            userSelect:    'none',
          }}
          className="hidden lg:block"
        >
          the art of radiance · haloskincare.co.uk
        </div>
      </div>
    </section>
  )
}
