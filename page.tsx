import type { Metadata } from 'next'
import { Hero } from '@/sections/Hero'
import { Footer } from '@/components/ui/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'hālo — the art of radiance',
  description: 'Premium skincare for him & her. High-performance formulas, honestly made. Vegan, cruelty free, sustainably produced in the UK.',
}

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="/images/home_hero.webp"
        objectPosition="center 22%"
        eyebrow="him & her · the art of radiance"
        headingLine1="skincare that works."
        headingLine2="structured for individuality."
        sub="vegan · cruelty free · made sustainably in the uk"
        showCtas
      />

      {/* ── SPLIT PANELS ──────────────────────────────────────── */}
      <section
        aria-label="Shop by category"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          height:              'clamp(420px, 55vw, 680px)',
        }}
        className="grid-cols-1 sm:!grid-cols-2"
      >
        {/* Her */}
        <Link
          href="/her"
          style={{
            position:   'relative',
            overflow:   'hidden',
            display:    'flex',
            alignItems: 'flex-end',
            cursor:     'pointer',
          }}
          aria-label="Shop her collection"
        >
          <Image
            src="/images/her_hero.jpg"
            alt="hālo for her"
            fill
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 18%',
              filter:         'grayscale(100%) contrast(1.05) brightness(0.42)',
              transition:     'filter 1s ease, transform 1.2s ease',
            }}
            className="panel-img"
          />
          <div
            style={{
              position:      'absolute',
              inset:         0,
              pointerEvents: 'none',
              background:    'linear-gradient(to top, rgba(14,12,10,0.85) 0%, transparent 55%)',
            }}
          />
          <div
            style={{
              position:     'relative',
              zIndex:       2,
              padding:      'clamp(1.5rem, 4vw, 3.5rem)',
              paddingBottom: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <p style={{ fontFamily: "'DM Sans'", fontSize: '0.56rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(212,170,122,0.7)', marginBottom: '0.6rem', fontWeight: 300 }}>for her</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 200, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 0.92, letterSpacing: '-0.025em', color: 'rgba(237,232,226,0.92)', marginBottom: '1.25rem' }}>
              radiance,<br /><em style={{ fontStyle: 'italic', color: 'rgba(237,232,226,0.45)' }}>refined.</em>
            </h2>
            <span style={{ fontFamily: "'DM Sans'", fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(212,170,122,0.6)' }}>
              explore →
            </span>
          </div>
        </Link>

        {/* Him */}
        <Link
          href="/him"
          style={{
            position:   'relative',
            overflow:   'hidden',
            display:    'flex',
            alignItems: 'flex-end',
            cursor:     'pointer',
            borderLeft: '1px solid rgba(255,255,255,0.04)',
          }}
          aria-label="Shop him collection"
        >
          <Image
            src="/images/him_hero.jpg"
            alt="hālo for him"
            fill
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 14%',
              filter:         'grayscale(100%) contrast(1.05) brightness(0.42)',
              transition:     'filter 1s ease, transform 1.2s ease',
            }}
            className="panel-img"
          />
          <div
            style={{
              position:      'absolute',
              inset:         0,
              pointerEvents: 'none',
              background:    'linear-gradient(to top, rgba(14,12,10,0.85) 0%, transparent 55%)',
            }}
          />
          <div
            style={{
              position:     'relative',
              zIndex:       2,
              padding:      'clamp(1.5rem, 4vw, 3.5rem)',
              paddingBottom: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <p style={{ fontFamily: "'DM Sans'", fontSize: '0.56rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(212,170,122,0.7)', marginBottom: '0.6rem', fontWeight: 300 }}>for him</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 200, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 0.92, letterSpacing: '-0.025em', color: 'rgba(237,232,226,0.92)', marginBottom: '1.25rem' }}>
              confidence,<br /><em style={{ fontStyle: 'italic', color: 'rgba(237,232,226,0.45)' }}>refined.</em>
            </h2>
            <span style={{ fontFamily: "'DM Sans'", fontSize: '0.6rem', fontWeight: 300, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(212,170,122,0.6)' }}>
              explore →
            </span>
          </div>
        </Link>
      </section>

      {/* Panel hover styles */}
      <style>{`
        a:hover .panel-img {
          filter: grayscale(0%) contrast(1.0) brightness(0.55) !important;
          transform: scale(1.03) !important;
        }
      `}</style>

      {/* ── BRAND STATEMENT ───────────────────────────────────── */}
      <section
        style={{
          paddingTop:    'clamp(5rem, 10vw, 10rem)',
          paddingBottom: 'clamp(5rem, 10vw, 10rem)',
          paddingLeft:   'clamp(1.5rem, 5vw, 5rem)',
          paddingRight:  'clamp(1.5rem, 5vw, 5rem)',
          maxWidth:      '1480px',
          margin:        '0 auto',
          display:       'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:           'clamp(3rem, 8vw, 8rem)',
          alignItems:    'center',
        }}
        className="grid-cols-1 md:!grid-cols-2"
      >
        <div>
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.65)',
              marginBottom:  '1.75rem',
            }}
          >
            the philosophy
          </p>
          <h2
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    200,
              fontSize:      'clamp(2.2rem, 4.5vw, 4.2rem)',
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              color:         'rgba(237, 232, 226, 0.9)',
            }}
          >
            every ingredient
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(237, 232, 226, 0.38)' }}>
              earns its place.
            </em>
          </h2>
        </div>
        <div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize:   '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color:      'rgba(237, 232, 226, 0.48)',
              marginBottom: '2rem',
            }}
          >
            hālo formulas are built around high-quality, carefully sourced ingredients — selected for what they do, not how they sound. Vegan, cruelty free, and tested for real results.
          </p>
          <Link href="/story" className="btn-link">
            our story →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
