// sections/ValueBlock.tsx — alternating image/text layout
import Image from 'next/image'

interface Props {
  number:   string
  title:    string
  body:     string
  imageSrc: string
  imageAlt: string
  flip?:    boolean
}

export function ValueBlock({ number, title, body, imageSrc, imageAlt, flip = false }: Props) {
  return (
    <div className={`grid grid-cols-2 max-sm:grid-cols-1 min-h-[520px] max-sm:min-h-0 border-b border-white/[0.06] ${flip ? '' : ''}`}>

      {/* Image side */}
      <div className={`relative overflow-hidden min-h-[420px] max-sm:h-[50vw] img-overlay ${flip ? 'order-last max-sm:order-first' : ''}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width:640px) 100vw, 50vw"
          className="object-cover grayscale contrast-[1.06] brightness-[0.55] transition-all duration-700 hover:brightness-[0.45]"
        />
      </div>

      {/* Text side */}
      <div className={`flex flex-col justify-center px-16 py-20 max-lg:px-10 max-sm:px-6 max-sm:py-12 ${flip ? 'order-first max-sm:order-last' : ''}`}>
        <span className="font-display text-[4rem] font-light text-cream/8 leading-none mb-6 select-none" aria-hidden="true">
          {number}
        </span>
        <h3 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-light text-cream leading-[0.95] mb-6">
          {title}
        </h3>
        <p className="text-[0.85rem] font-light leading-[1.95] text-cream/60 max-w-md">
          {body}
        </p>
      </div>
    </div>
  )
}
