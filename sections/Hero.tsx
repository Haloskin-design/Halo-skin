// sections/Hero.tsx — production polish pass
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  imageSrc:        string
  imageAlt?:       string
  objectPosition?: string
  // Optional overrides for non-homepage uses
  eyebrow?:        string
  heading?:        string  // supports <em> HTML
  sub?:            string
  // Homepage-specific (show CTAs)
  showCtas?:       boolean
}

export function Hero({
  imageSrc,
  imageAlt = 'hālo skincare',
  objectPosition = 'center 20%',
  eyebrow = 'him & her · the art of radiance',
  heading = 'skincare that works.\n<em>structured for individuality.</em>',
  sub = 'vegan · cruelty free · made sustainably in the uk',
  showCtas = true,
}: HeroProps) {
  const headingHtml = heading.replace('\n', '<br/>')

  return (
    <section
      className="relative w-full min-h-[92vh] flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — pointer-events:none, no stacking context issues */}
      <div className="absolute inset-0 img-overlay" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-[1.08] brightness-[0.42] animate-[slowZoom_14s_ease-in-out_infinite_alternate]"
          style={{ objectPosition }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 img-overlay"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(ellipse 80% 75% at 50% 25%,transparent 0%,rgba(24,21,19,0.45) 60%,rgba(24,21,19,0.95) 100%)',
            'linear-gradient(to top,rgba(24,21,19,1) 0%,rgba(24,21,19,0.82) 20%,rgba(24,21,19,0.15) 55%,transparent 100%)',
          ].join(','),
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-14 pb-20 max-lg:px-10 max-sm:px-6 max-sm:pb-14">
        <div className="max-w-xl">

          <div className="inline-flex items-center gap-2.5 mb-6 border border-white/[0.08] px-3.5 py-2 t-eyebrow" aria-label="Category">
            <span className="w-3 h-px bg-caramel/60" aria-hidden="true" />
            {eyebrow}
          </div>

          <h1
            className="t-display text-[clamp(2.6rem,5vw,4.6rem)] text-cream mb-5"
            dangerouslySetInnerHTML={{ __html: headingHtml }}
          />

          <p className="text-[0.88rem] font-light tracking-[0.05em] leading-[1.9] text-cream/65 mb-10 max-w-xs max-sm:max-w-full">
            {sub}
          </p>

          {showCtas && (
            <div className="flex flex-wrap gap-4 items-center max-sm:flex-col max-sm:items-start">
              <Link href="/her" className="inline-flex items-center gap-3 px-9 py-3.5 text-[0.62rem] font-light tracking-[0.3em] uppercase text-cream border border-cream/40 transition-all duration-300 hover:border-sand/70 hover:text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40">
                shop her
              </Link>
              <Link href="/him" className="inline-flex items-center gap-3 px-9 py-3.5 text-[0.62rem] font-light tracking-[0.3em] uppercase text-cream/60 border border-cream/18 transition-all duration-300 hover:border-cream/38 hover:text-cream/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40">
                shop him
              </Link>
              <Link href="/film.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[0.6rem] font-light tracking-[0.28em] uppercase text-bronze/80 transition-colors duration-300 hover:text-caramel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40">
                <span aria-hidden="true" className="text-[0.65rem]">▶</span>
                watch our story
              </Link>
            </div>
          )}
        </div>

        <div className="absolute bottom-16 right-14 hidden lg:flex flex-col items-end gap-2" aria-hidden="true">
          <span className="t-eyebrow text-cream/38">the art of radiance</span>
          <span className="t-eyebrow text-cream/32">made sustainably in the uk</span>
        </div>
      </div>
    </section>
  )
}
