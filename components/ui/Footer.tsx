import Link from 'next/link'
import { NewsletterForm } from '@/components/ui/NewsletterForm'

const LINKS = {
  shop:  [{ label: 'shop her', href: '/her' }, { label: 'shop him', href: '/him' }],
  brand: [{ label: 'our story', href: '/story' }, { label: 'our values', href: '/values' }, { label: 'contact', href: '/contact' }],
  legal: [{ label: 'privacy policy', href: '/privacy' }, { label: 'terms & conditions', href: '/terms' }],
}

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: '#141210',
        borderTop:       '1px solid rgba(255,255,255,0.05)',
        marginTop:       'clamp(5rem, 10vw, 10rem)',
      }}
    >
      <div
        style={{
          maxWidth:      '1480px',
          margin:        '0 auto',
          paddingLeft:   'clamp(1.5rem, 5vw, 5rem)',
          paddingRight:  'clamp(1.5rem, 5vw, 5rem)',
          paddingTop:    'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:                 'clamp(3rem, 6vw, 5rem)',
            marginBottom:        'clamp(3rem, 6vw, 5.5rem)',
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily:    "'Nunito', sans-serif",
                fontWeight:    700,
                fontSize:      '1.7rem',
                letterSpacing: '0.03em',
                color:         'rgba(201, 169, 110, 0.7)',
                display:       'block',
                marginBottom:  '1.25rem',
                transition:    'color 0.4s ease',
              }}
              aria-label="hālo home"
              className="footer-logo"
            >
              hālo
            </Link>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize:   '0.8rem',
                fontWeight: 300,
                lineHeight: 1.85,
                color:      'rgba(237, 232, 226, 0.35)',
                maxWidth:   '220px',
              }}
            >
              Premium skincare for him &amp; her.<br />
              Vegan, cruelty free, made sustainably in the UK.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.56rem',
                fontWeight:    300,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color:         'rgba(212, 170, 122, 0.55)',
                marginBottom:  '1.5rem',
              }}
            >
              shop
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {LINKS.shop.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily:    "'DM Sans', sans-serif",
                      fontSize:      '0.8rem',
                      fontWeight:    300,
                      color:         'rgba(237, 232, 226, 0.42)',
                      transition:    'color 0.4s ease',
                    }}
                    className="footer-link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand links */}
          <div>
            <h3
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.56rem',
                fontWeight:    300,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color:         'rgba(212, 170, 122, 0.55)',
                marginBottom:  '1.5rem',
              }}
            >
              brand
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {LINKS.brand.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize:   '0.8rem',
                      fontWeight: 300,
                      color:      'rgba(237, 232, 226, 0.42)',
                      transition: 'color 0.4s ease',
                    }}
                    className="footer-link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.56rem',
                fontWeight:    300,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color:         'rgba(212, 170, 122, 0.55)',
                marginBottom:  '0.875rem',
              }}
            >
              stay connected
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize:   '0.78rem',
                fontWeight: 300,
                lineHeight: 1.75,
                color:      'rgba(237, 232, 226, 0.32)',
                marginBottom: '1.25rem',
              }}
            >
              New formulas and rituals.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            paddingTop:     '1.75rem',
            borderTop:      '1px solid rgba(255,255,255,0.04)',
            flexWrap:       'wrap',
            gap:            '1rem',
          }}
        >
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.62rem',
              fontWeight:    300,
              letterSpacing: '0.12em',
              color:         'rgba(237, 232, 226, 0.2)',
            }}
          >
            © {new Date().getFullYear()} hālo skincare ltd. all rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '2rem' }}>
            {LINKS.legal.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily:    "'DM Sans', sans-serif",
                  fontSize:      '0.6rem',
                  fontWeight:    300,
                  letterSpacing: '0.12em',
                  color:         'rgba(237, 232, 226, 0.2)',
                  transition:    'color 0.4s ease',
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color:         'rgba(237, 232, 226, 0.15)',
            }}
          >
            made in the uk
          </p>
        </div>
      </div>

      {/* Hover styles */}
      <style>{`
        .footer-link:hover { color: rgba(212,170,122,0.8) !important; }
        .footer-logo:hover { color: rgba(212,170,122,1) !important; }
      `}</style>
    </footer>
  )
}
