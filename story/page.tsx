import type { Metadata } from 'next'
import { StoryHero } from '@/sections/StoryHero'
import { Footer } from '@/components/ui/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'our story — hālo skincare',
  description: 'The story behind hālo. Why we built it, what drives us, and how every formula is made.',
}

export default function StoryPage() {
  return (
    <>
      <StoryHero
        eyebrow="our story"
        headingLine1="how hālo"
        headingLine2="began."
        sub="a brand built around one idea — skincare that genuinely works."
        imageSrc="/images/story_hero.webp"
        objectPosition="center 28%"
      />

      {/* Story body — grid section */}
      <section
        style={{
          paddingTop:    'clamp(4rem, 8vw, 8rem)',
          paddingBottom: 'clamp(4rem, 8vw, 8rem)',
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
            the beginning
          </p>

          <h2
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    200,
              fontSize:      'clamp(2rem, 4vw, 3.6rem)',
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              color:         'rgba(237, 232, 226, 0.9)',
              marginBottom:  '2rem',
            }}
          >
            designed for the
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(237, 232, 226, 0.4)' }}>
              everyday ritual.
            </em>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              'hālo was built around a single conviction: that honest ingredients, properly formulated, produce real results. No marketing language. No filler ingredients. No compromise on sustainability.',
              'Every formula in the hālo range starts with purpose. Each ingredient earns its place — selected for skin compatibility, efficacy, and sourcing integrity. Nothing included without reason.',
              'We produce in small batches, sustainably in the UK, to maintain full control over quality and environmental impact.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize:   '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color:      'rgba(237, 232, 226, 0.48)',
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          style={{
            position:  'relative',
            aspectRatio: '3 / 4',
            overflow:  'hidden',
          }}
        >
          <Image
            src="/images/story_img1.webp"
            alt="hālo — the ritual"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 20%',
              filter:         'grayscale(100%) contrast(1.05) brightness(0.52)',
            }}
          />
        </div>
      </section>

      {/* Philosophy section — reversed */}
      <section
        style={{
          borderTop:     '1px solid rgba(255,255,255,0.05)',
          paddingTop:    'clamp(4rem, 8vw, 8rem)',
          paddingBottom: 'clamp(4rem, 8vw, 8rem)',
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
        {/* Image — left on desktop */}
        <div
          style={{
            position:    'relative',
            aspectRatio: '4 / 3',
            overflow:    'hidden',
          }}
        >
          <Image
            src="/images/story_img2.webp"
            alt="hālo ingredients"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 30%',
              filter:         'grayscale(100%) contrast(1.05) brightness(0.5)',
            }}
          />
        </div>

        {/* Text */}
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
            our philosophy
          </p>
          <h2
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    200,
              fontSize:      'clamp(2rem, 4vw, 3.6rem)',
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              color:         'rgba(237, 232, 226, 0.9)',
              marginBottom:  '2rem',
            }}
          >
            feeling your best
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(237, 232, 226, 0.4)' }}>
              in your own skin.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize:   '0.9rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color:      'rgba(237, 232, 226, 0.48)',
              marginBottom: '2.5rem',
              maxWidth:   '440px',
            }}
          >
            Effective skincare should not require ten steps. hālo is a focused range — high-performance formulas that fit simply into your routine, feel genuinely good to use, and deliver lasting results.
          </p>
          <Link href="/values" className="btn-link">
            our values →
          </Link>
        </div>
      </section>

      {/* Film link — editorial CTA */}
      <section
        style={{
          paddingTop:     'clamp(3rem, 6vw, 6rem)',
          paddingBottom:  'clamp(4rem, 8vw, 8rem)',
          paddingLeft:    'clamp(1.5rem, 5vw, 5rem)',
          paddingRight:   'clamp(1.5rem, 5vw, 5rem)',
          maxWidth:       '1480px',
          margin:         '0 auto',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          textAlign:      'center',
          borderTop:      '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <p
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.58rem',
            fontWeight:    300,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color:         'rgba(212, 170, 122, 0.6)',
            marginBottom:  '1.5rem',
            marginTop:     'clamp(3rem, 6vw, 6rem)',
          }}
        >
          the film
        </p>
        <h2
          style={{
            fontFamily:    "'Cormorant Garamond', Georgia, serif",
            fontWeight:    200,
            fontSize:      'clamp(2.2rem, 5vw, 4.8rem)',
            lineHeight:    0.92,
            letterSpacing: '-0.03em',
            color:         'rgba(237, 232, 226, 0.88)',
            marginBottom:  '2.5rem',
          }}
        >
          watch our story.
        </h2>
        <Link
          href="/film.html"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <span style={{ fontSize: '0.6rem' }}>▶</span>
          watch the film
        </Link>
      </section>

      <Footer />
    </>
  )
}
