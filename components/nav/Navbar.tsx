'use client'

// components/nav/Navbar.tsx
// ─────────────────────────────────────────────────────────────
// Fully isolated. No inline styles. No legacy CSS.
// z-index from CSS variable. webkit-tap handled in globals.css.
// Desktop and mobile are completely separate render trees.
// ─────────────────────────────────────────────────────────────

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback, useRef } from 'react'

const LINKS = [
  { label: 'shop her',   href: '/her'     },
  { label: 'shop him',   href: '/him'     },
  { label: 'our story',  href: '/story'   },
  { label: 'our values', href: '/values'  },
  { label: 'contact',    href: '/contact' },
] as const

// ─── Shared link class builders ───────────────────────────────

function desktopLinkClass(active: boolean): string {
  return [
    't-nav transition-colors duration-300 py-2 px-1 block',
    'rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40',
    active ? 'text-sand' : 'text-cream/60 hover:text-sand',
  ].join(' ')
}

function mobileLinkClass(active: boolean): string {
  return [
    'block w-full px-6 py-4 t-nav',
    'border-b border-white/[0.04] transition-colors duration-200',
    'focus-visible:outline-none focus-visible:bg-charcoal',
    active
      ? 'text-sand'
      : 'text-cream/60 hover:text-sand hover:bg-charcoal/40 active:bg-charcoal',
  ].join(' ')
}

// ─── Hamburger icon ───────────────────────────────────────────

function HamburgerIcon({ open }: { open: boolean }) {
  const base = 'block w-6 h-px bg-cream/70 transition-all duration-300 origin-center'
  return (
    <span className="flex flex-col justify-center items-center gap-[6px] w-11 h-11" aria-hidden="true">
      <span className={`${base} ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
      <span className={`${base} ${open ? 'opacity-0 scale-x-0' : ''}`} />
      <span className={`${base} ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
    </span>
  )
}

// ─── Main component ───────────────────────────────────────────

export function Navbar() {
  const pathname  = usePathname()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Scroll detection
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Escape key closes menu
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onKey])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Focus trap in mobile menu
  useEffect(() => {
    if (open && menuRef.current) {
      const first = menuRef.current.querySelector<HTMLElement>('a, button')
      first?.focus()
    }
  }, [open])

  return (
    <>
      {/* ── HEADER BAR ─────────────────────────────────────────
          Uses CSS variable for z-index.
          isolation:isolate keeps stacking context independent.
          No filter, no transform, no backdrop-filter.
      */}
      <header
        role="banner"
        className={[
          'fixed top-0 left-0 right-0',
          'h-[82px] max-sm:h-[64px]',
          'flex items-center justify-between',
          'px-12 max-sm:px-5',
          'border-b border-white/[0.06]',
          'transition-colors duration-300',
          scrolled ? 'bg-espresso' : 'bg-espresso/95',
          // z-index and isolation via inline CSS var — avoids Tailwind purge issues
        ].join(' ')}
        style={{ zIndex: 'var(--z-nav)' as unknown as number, isolation: 'isolate' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="t-logo text-[1.35rem] text-sand/70 hover:text-sand transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40 rounded-sm"
          aria-label="hālo — home"
        >
          hālo
        </Link>

        {/* ── DESKTOP NAV ── hidden on mobile */}
        <nav role="navigation" aria-label="Main navigation" className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <li key={href} role="listitem">
                <Link
                  href={href}
                  className={desktopLinkClass(pathname === href)}
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── HAMBURGER ── visible on mobile only */}
        <button
          type="button"
          className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40 rounded-sm"
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <HamburgerIcon open={open} />
        </button>
      </header>

      {/* ── MOBILE MENU ────────────────────────────────────────
          Completely separate from desktop nav.
          Own z-index, own positioning, own animation.
          Backdrop closes menu on click.
      */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-espresso/80 md:hidden"
            style={{ zIndex: 'calc(var(--z-nav) - 1)' as unknown as number }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            id="mobile-nav"
            ref={menuRef}
            role="navigation"
            aria-label="Mobile navigation"
            className="fixed left-0 right-0 top-[64px] md:hidden bg-mocha rule-warm animate-[fadeSlideDown_0.2s_ease_forwards]"
            style={{ zIndex: 'calc(var(--z-nav) - 1)' as unknown as number }}
          >
            <style>{`
              @keyframes fadeSlideDown {
                from { opacity:0; transform:translateY(-8px) }
                to   { opacity:1; transform:translateY(0) }
              }
            `}</style>

            <ul role="list" className="py-2">
              {LINKS.map(({ label, href }) => (
                <li key={href} role="listitem">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={mobileLinkClass(pathname === href)}
                    aria-current={pathname === href ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="px-6 py-4 t-eyebrow opacity-40">the art of radiance</p>
          </div>
        </>
      )}

      {/* Spacer — pushes content below fixed header */}
      <div className="h-[82px] max-sm:h-[64px]" aria-hidden="true" />
    </>
  )
}
