import type { Metadata } from 'next'
import { StoryHero } from '@/sections/StoryHero'
import Image from 'next/image'
import { Footer } from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'our story — hālo skincare',
  description: 'The story behind hālo. Why we built it, what drives us, and how every formula is made.',
}

export default function StoryPage() {
  return (
    <>
      <StoryHero
        eyebrow="our story"
        heading={`how hālo<br/><em>began.</em>`}
        sub="a brand built around one idea — skincare that genuinely works."
        imageSrc="/images/story_hero.webp"
        objectPosition="center 25%"
      />

      {/* Story body */}
      <section className="px-12 max-sm:px-6 py-24 max-sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-12">

          <div>
            <p className="t-eyebrow mb-6">the beginning</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light text-cream leading-[0.95] mb-8">
              designed for the<br />everyday ritual.
            </h2>
            <div className="space-y-5 text-[0.88rem] font-light leading-[1.95] text-cream/60">
              <p>hālo was built around a single conviction: that honest ingredients, properly formulated, produce real results. No marketing language. No filler ingredients. No compromise on sustainability.</p>
              <p>Every formula in the hālo range starts with purpose. Each ingredient earns its place — selected for skin compatibility, efficacy, and sourcing integrity. Nothing included without reason.</p>
              <p>We produce in small batches, sustainably in the UK, to maintain full control over quality and environmental impact. Vegan, cruelty free, and free from parabens and sulphates.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden img-overlay">
              <Image src="/images/story_img1.webp" alt="hālo — the ritual" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover grayscale contrast-[1.06] brightness-[0.58]" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="px-12 max-sm:px-6 pb-24 border-t border-white/[0.06] pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 max-lg:grid-cols-1">
          <div className="relative aspect-[4/3] overflow-hidden img-overlay max-lg:aspect-video">
            <Image src="/images/story_img2.webp" alt="hālo ingredients" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover grayscale contrast-[1.06] brightness-[0.55]" style={{objectPosition:'center 30%'}} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="t-eyebrow mb-6">our philosophy</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light text-cream leading-[0.95] mb-8">
              feeling your best<br /><em>in your own skin.</em>
            </h2>
            <p className="text-[0.88rem] font-light leading-[1.95] text-cream/60 mb-8">
              Effective skincare should not require ten steps. hālo is a focused range — high-performance formulas that fit simply into your routine, feel genuinely good to use, and deliver lasting results.
            </p>
            <p className="t-eyebrow text-cream/40">the art of radiance</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
