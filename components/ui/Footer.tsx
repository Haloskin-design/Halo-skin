// components/ui/Footer.tsx
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import Link from 'next/link'

const LINKS = {
  shop:    [{ label: 'shop her', href: '/her' }, { label: 'shop him', href: '/him' }],
  brand:   [{ label: 'our story', href: '/story' }, { label: 'our values', href: '/values' }, { label: 'contact', href: '/contact' }],
  legal:   [{ label: 'privacy policy', href: '/privacy' }, { label: 'terms', href: '/terms' }],
}

export function Footer() {
  return (
    <footer className="bg-mocha border-t border-white/[0.06] mt-32" role="contentinfo">
      <div className="max-w-7xl mx-auto px-12 max-sm:px-6 py-20 max-sm:py-14">

        {/* Top row */}
        <div className="grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 mb-20">

          {/* Brand */}
          <div className="col-span-1">
            <Link
              href="/"
              className="font-logo font-black text-[1.6rem] text-sand/70 hover:text-sand transition-colors duration-300 block mb-4"
              aria-label="hālo home"
            >
              hālo
            </Link>
            <p className="text-[0.78rem] text-cream/45 leading-[1.9] max-w-[220px]">
              Premium skincare for him &amp; her. Vegan, cruelty free, made sustainably in the UK.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="t-eyebrow mb-5">shop</h3>
            <ul className="space-y-3">
              {LINKS.shop.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-[0.78rem] text-cream/50 hover:text-sand transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h3 className="t-eyebrow mb-5">brand</h3>
            <ul className="space-y-3">
              {LINKS.brand.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-[0.78rem] text-cream/50 hover:text-sand transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="t-eyebrow mb-5">stay connected</h3>
            <p className="text-[0.75rem] text-cream/45 leading-[1.85] mb-5">
              New formulas, rituals, and early access.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between border-t border-white/[0.05] pt-8 max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <p className="text-[0.65rem] tracking-[0.18em] text-cream/30">
            © {new Date().getFullYear()} hālo skincare ltd. all rights reserved.
          </p>
          <div className="flex gap-6">
            {LINKS.legal.map(({ label, href }) => (
              <Link key={href} href={href} className="text-[0.62rem] tracking-[0.14em] text-cream/42 hover:text-cream/55 transition-colors">
                {label}
              </Link>
            ))}
          </div>
          <p className="text-[0.62rem] tracking-[0.18em] text-cream/38 uppercase">
            made sustainably in the uk
          </p>
        </div>
      </div>
    </footer>
  )
}
