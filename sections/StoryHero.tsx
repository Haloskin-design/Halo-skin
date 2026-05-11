// sections/StoryHero.tsx — reused on story, values, contact pages
import Image from 'next/image'

interface Props {
  eyebrow:        string
  heading:        string
  sub:            string
  imageSrc:       string
  imageAlt?:      string
  objectPosition?: string
}

export function StoryHero({
  eyebrow,
  heading,
  sub,
  imageSrc,
  imageAlt = '',
  objectPosition = 'center center',
}: Props) {
  return (
    <section className="relative w-full h-[72vh] min-h-[480px] max-sm:h-[60vh] flex items-end overflow-hidden" aria-label={eyebrow}>
      {/* Image */}
      <div className="absolute inset-0 img-overlay" aria-hidden="true">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-[1.08] brightness-[0.48]"
          style={{ objectPosition }}
        />
      </div>

      {/* Gradient */}
      <div
        className="absolute inset-0 img-overlay"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to top, rgba(24,21,19,1) 0%, rgba(24,21,19,0.65) 30%, rgba(24,21,19,0.1) 70%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-12 pb-16 max-sm:px-6 max-sm:pb-12 w-full">
        <p className="t-eyebrow mb-4">{eyebrow}</p>
        <h1
          className="font-display font-light text-cream leading-[0.92] tracking-[-0.02em] mb-5"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)' }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p className="text-[0.85rem] font-light tracking-[0.06em] text-cream/60 max-w-md">
          {sub}
        </p>
      </div>
    </section>
  )
}
