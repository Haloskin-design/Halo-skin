import Image from 'next/image'

interface Props {
  number:          string
  title:           string
  body:            string
  imageSrc:        string
  imageAlt:        string
  flip?:           boolean
  objectPosition?: string
}

export function ValueBlock({
  number,
  title,
  body,
  imageSrc,
  imageAlt,
  flip            = false,
  objectPosition  = 'center center',
}: Props) {
  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight:           'clamp(400px, 55vw, 620px)',
        borderBottom:        '1px solid rgba(255,255,255,0.05)',
      }}
      className="grid-cols-1 md:!grid-cols-2"
    >
      {/* Image */}
      <div
        style={{
          position:  'relative',
          overflow:  'hidden',
          minHeight: 'clamp(280px, 40vw, 520px)',
          order:     flip ? 2 : 1,
          pointerEvents: 'none',
        }}
        className={flip ? 'order-2 md:order-2' : 'order-1 md:order-1'}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit:      'cover',
            objectPosition: objectPosition,
            filter:         'grayscale(100%) contrast(1.05) brightness(0.48)',
            transition:     'filter 0.9s cubic-bezier(0.25,0.1,0,1)',
          }}
        />
        {/* Subtle inner vignette */}
        <div
          style={{
            position:      'absolute',
            inset:         0,
            pointerEvents: 'none',
            background:    flip
              ? 'linear-gradient(to right, transparent 60%, rgba(24,21,19,0.4) 100%)'
              : 'linear-gradient(to left, transparent 60%, rgba(24,21,19,0.4) 100%)',
          }}
        />
      </div>

      {/* Text */}
      <div
        style={{
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          paddingTop:     'clamp(3rem, 6vw, 6rem)',
          paddingBottom:  'clamp(3rem, 6vw, 6rem)',
          paddingLeft:    flip ? 'clamp(1.5rem, 5vw, 5rem)' : 'clamp(2.5rem, 7vw, 7rem)',
          paddingRight:   flip ? 'clamp(2.5rem, 7vw, 7rem)' : 'clamp(1.5rem, 5vw, 5rem)',
          order:          flip ? 1 : 2,
        }}
        className={flip ? 'order-1 md:order-1' : 'order-2 md:order-2'}
      >
        {/* Large decorative number */}
        <span
          aria-hidden="true"
          style={{
            fontFamily:    "'Cormorant Garamond', serif",
            fontSize:      'clamp(3.5rem, 8vw, 7rem)',
            fontWeight:    200,
            color:         'rgba(255,255,255,0.04)',
            lineHeight:    1,
            marginBottom:  '1rem',
            userSelect:    'none',
            display:       'block',
          }}
        >
          {number}
        </span>

        <h3
          style={{
            fontFamily:    "'Cormorant Garamond', Georgia, serif",
            fontWeight:    200,
            fontSize:      'clamp(1.6rem, 3vw, 2.6rem)',
            lineHeight:    0.95,
            letterSpacing: '-0.02em',
            color:         'rgba(237, 232, 226, 0.9)',
            marginBottom:  '1.5rem',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize:   '0.875rem',
            fontWeight: 300,
            lineHeight: 1.9,
            color:      'rgba(237, 232, 226, 0.48)',
            maxWidth:   '420px',
          }}
        >
          {body}
        </p>
      </div>
    </div>
  )
}
