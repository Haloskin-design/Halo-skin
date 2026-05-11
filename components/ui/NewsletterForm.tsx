'use client'

export function NewsletterForm() {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      aria-label="Newsletter signup"
      style={{ display: 'flex', gap: 0 }}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="your@email.com"
        autoComplete="email"
        required
        style={{
          flex:            '1 1 0%',
          minWidth:        0,
          background:      'rgba(255,255,255,0.03)',
          border:          '1px solid rgba(255,255,255,0.07)',
          borderRight:     'none',
          padding:         '0.75rem 1rem',
          fontFamily:      "'DM Sans', sans-serif",
          fontSize:        '0.72rem',
          fontWeight:      300,
          color:           'rgba(237, 232, 226, 0.85)',
          outline:         'none',
          transition:      'border-color 0.4s ease',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.3)' }}
        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
      />
      <button
        type="submit"
        style={{
          background:    'rgba(201, 169, 110, 0.12)',
          border:        '1px solid rgba(201, 169, 110, 0.22)',
          padding:       '0.75rem 1.25rem',
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.58rem',
          fontWeight:    300,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color:         'rgba(212, 170, 122, 0.75)',
          cursor:        'pointer',
          transition:    'all 0.4s ease',
          whiteSpace:    'nowrap',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.background = 'rgba(201, 169, 110, 0.22)'
          el.style.color = 'rgba(212, 170, 122, 1)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.background = 'rgba(201, 169, 110, 0.12)'
          el.style.color = 'rgba(212, 170, 122, 0.75)'
        }}
      >
        join
      </button>
    </form>
  )
}
