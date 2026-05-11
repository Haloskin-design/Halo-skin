import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight:     'calc(100svh - var(--nav-h))',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        justifyContent: 'center',
        paddingLeft:   'clamp(1.5rem, 5vw, 5rem)',
        paddingRight:  'clamp(1.5rem, 5vw, 5rem)',
        textAlign:     'center',
      }}
    >
      <p
        style={{
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.56rem',
          fontWeight:    300,
          letterSpacing: '0.36em',
          textTransform: 'uppercase',
          color:         'rgba(212, 170, 122, 0.6)',
          marginBottom:  '1.5rem',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily:    "'Cormorant Garamond', Georgia, serif",
          fontWeight:    200,
          fontSize:      'clamp(2.5rem, 7vw, 6rem)',
          lineHeight:    0.92,
          letterSpacing: '-0.03em',
          color:         'rgba(237, 232, 226, 0.88)',
          marginBottom:  '1rem',
        }}
      >
        page not found.
        <br />
        <em
          style={{
            fontStyle: 'italic',
            color:     'rgba(237, 232, 226, 0.32)',
          }}
        >
          but radiance remains.
        </em>
      </h1>
      <p
        style={{
          fontFamily:   "'DM Sans', sans-serif",
          fontSize:     '0.875rem',
          fontWeight:   300,
          lineHeight:   1.85,
          color:        'rgba(237, 232, 226, 0.38)',
          maxWidth:     '380px',
          marginBottom: '3rem',
          marginTop:    '1.5rem',
        }}
      >
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className="btn-primary">
        return home
      </Link>
    </div>
  )
}
