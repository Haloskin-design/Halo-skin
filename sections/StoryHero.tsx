import Image from 'next/image'

interface StoryHeroProps {
  eyebrow:         string
  headingLine1:    string
  headingLine2:    string
  sub:             string
  imageSrc:        string
  imageAlt?:       string
  objectPosition?: string
  height?:         string
}

export function StoryHero({
  eyebrow,
  headingLine1,
  headingLine2,
  sub,
  imageSrc,
  imageAlt        = '',
  objectPosition  = 'center center',
  height          = '65vh',
}: StoryHeroProps) {
  return (
    <section
      aria-label={eyebrow}
      style={{
        position:   'relative',
        width:      '100%',
        height:     height,
        minHeight:  '400px',
        maxHeight:  '680px',
        display:    'flex',
        alignItems: 'flex-end',
        overflow:   'hidden',
      }}
    >
      {/* Image */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit:      'cover',
            objectPosition: objectPosition,
            filter:         'grayscale(100%) contrast(1.05) brightness(0.4)',
          }}
        />
      </div>

      {/* Gradient */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          background:    'linear-gradient(to top, rgba(24,21,19,1) 0%, rgba(24,21,19,0.75) 25%, rgba(24,21,19,0.15) 60%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position:     'relative',
          zIndex:       2,
          width:        '100%',
          paddingLeft:  'clamp(1.5rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        }}
      >
        <p
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.58rem',
            fontWeight:    300,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color:         'rgba(212, 170, 122, 0.7)',
            marginBottom:  '1.25rem',
          }}
        >
          {eyebrow}
        </p>

        <h1
          style={{
            fontFamily:    "'Cormorant Garamond', Georgia, serif",
            fontWeight:    200,
            lineHeight:    0.92,
            letterSpacing: '-0.03em',
            fontSize:      'clamp(2.4rem, 5vw, 4.8rem)',
            color:         'rgba(237, 232, 226, 0.95)',
            marginBottom:  '1.25rem',
          }}
        >
          {headingLine1}
          <br />
          <em style={{ fontStyle: 'italic', color: 'rgba(237, 232, 226, 0.45)' }}>
            {headingLine2}
          </em>
        </h1>

        <p
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.82rem',
            fontWeight:    300,
            letterSpacing: '0.06em',
            color:         'rgba(237, 232, 226, 0.48)',
            maxWidth:      '460px',
          }}
        >
          {sub}
        </p>
      </div>
    </section>
  )
}
