'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div
        style={{
          paddingTop:  '3rem',
          paddingBottom: '3rem',
        }}
      >
        <span
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.58rem',
            fontWeight:    300,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color:         'rgba(212, 170, 122, 0.7)',
            display:       'block',
            marginBottom:  '1.25rem',
          }}
        >
          message sent
        </span>
        <p
          style={{
            fontFamily:    "'Cormorant Garamond', serif",
            fontWeight:    200,
            fontSize:      '1.8rem',
            lineHeight:    1.0,
            letterSpacing: '-0.02em',
            color:         'rgba(237, 232, 226, 0.85)',
          }}
        >
          thank you.
          <br />
          <em style={{ color: 'rgba(237, 232, 226, 0.38)', fontStyle: 'italic' }}>
            we will be in touch.
          </em>
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
      style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
    >
      {[
        { id: 'name',  label: 'your name',    type: 'text',  auto: 'name'  },
        { id: 'email', label: 'email address', type: 'email', auto: 'email' },
      ].map(({ id, label, type, auto }) => (
        <div key={id}>
          <label
            htmlFor={id}
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.56rem',
              fontWeight:    300,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color:         'rgba(237, 232, 226, 0.3)',
              display:       'block',
              marginBottom:  '0.75rem',
            }}
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            autoComplete={auto}
            required
            style={{
              width:        '100%',
              background:   'transparent',
              border:       'none',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding:      '0.875rem 0',
              fontFamily:   "'DM Sans', sans-serif",
              fontSize:     '0.9rem',
              fontWeight:   300,
              color:        'rgba(237, 232, 226, 0.85)',
              outline:      'none',
              transition:   'border-color 0.4s ease',
            }}
            onFocus={e => { e.currentTarget.style.borderBottomColor = 'rgba(201, 169, 110, 0.4)' }}
            onBlur={e => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.1)' }}
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.56rem',
            fontWeight:    300,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color:         'rgba(237, 232, 226, 0.3)',
            display:       'block',
            marginBottom:  '0.75rem',
          }}
        >
          message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          style={{
            width:        '100%',
            background:   'transparent',
            border:       'none',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding:      '0.875rem 0',
            fontFamily:   "'DM Sans', sans-serif",
            fontSize:     '0.9rem',
            fontWeight:   300,
            color:        'rgba(237, 232, 226, 0.85)',
            outline:      'none',
            resize:       'none',
            transition:   'border-color 0.4s ease',
          }}
          onFocus={e => { e.currentTarget.style.borderBottomColor = 'rgba(201, 169, 110, 0.4)' }}
          onBlur={e => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.1)' }}
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ alignSelf: 'flex-start' }}
      >
        send message
      </button>
    </form>
  )
}
