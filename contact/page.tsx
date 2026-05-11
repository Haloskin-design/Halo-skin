import type { Metadata } from 'next'
import { StoryHero } from '@/sections/StoryHero'
import { ContactForm } from '@/components/ui/ContactForm'
import { Footer } from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'contact — hālo skincare',
  description: 'Get in touch with hālo. Questions, wholesale enquiries, press.',
}

export default function ContactPage() {
  return (
    <>
      <StoryHero
        eyebrow="contact"
        headingLine1="get in"
        headingLine2="touch."
        sub="questions, press & wholesale enquiries."
        imageSrc="/images/contact_hero.webp"
        objectPosition="center center"
        height="50vh"
      />

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
          gap:           'clamp(4rem, 10vw, 10rem)',
        }}
        className="grid-cols-1 md:!grid-cols-2"
      >
        {/* Info */}
        <div>
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.65)',
              marginBottom:  '3rem',
            }}
          >
            how to reach us
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[
              { label: 'general enquiries', value: 'hello@haloskincare.co.uk' },
              { label: 'press & media',      value: 'press@haloskincare.co.uk' },
              { label: 'wholesale',          value: 'trade@haloskincare.co.uk' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily:    "'DM Sans', sans-serif",
                    fontSize:      '0.56rem',
                    fontWeight:    300,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color:         'rgba(212, 170, 122, 0.55)',
                    marginBottom:  '0.625rem',
                  }}
                >
                  {label}
                </p>
                <a
                  href={`mailto:${value}`}
                  style={{
                    fontFamily:    "'Cormorant Garamond', serif",
                    fontWeight:    300,
                    fontSize:      'clamp(1rem, 2vw, 1.2rem)',
                    letterSpacing: '0.01em',
                    color:         'rgba(237, 232, 226, 0.65)',
                    transition:    'color 0.4s ease',
                  }}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* Response time */}
          <div
            style={{
              marginTop:   '3.5rem',
              paddingTop:  '2rem',
              borderTop:   '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize:   '0.78rem',
                fontWeight: 300,
                lineHeight: 1.85,
                color:      'rgba(237, 232, 226, 0.3)',
              }}
            >
              We aim to respond to all enquiries within 2 business days.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.65)',
              marginBottom:  '3rem',
            }}
          >
            send a message
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  )
}
