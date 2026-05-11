import type { Metadata } from 'next'
import { StoryHero } from '@/sections/StoryHero'
import { ValueBlock } from '@/sections/ValueBlock'
import { Footer } from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'our values — hālo skincare',
  description: 'What we believe in and how we work. Honest ingredients, sustainable production, real results.',
}

const VALUES = [
  {
    number: '01',
    title: 'carefully sourced ingredients.',
    body: 'Science-backed actives and carefully sourced botanicals. Nothing included without purpose. Every ingredient is selected for skin compatibility, efficacy, and sourcing integrity.',
    imageSrc: '/images/values_img1.webp',
    imageAlt: 'carefully sourced',
  },
  {
    number: '02',
    title: 'sustainably made in the uk.',
    body: 'Formulated and produced in the UK under strict quality controls. Small-batch production means full oversight from formula to bottle — and a significantly smaller environmental footprint.',
    imageSrc: '/images/values_img2.webp',
    imageAlt: 'sustainably made',
    flip: true,
  },
  {
    number: '03',
    title: 'honest formulation.',
    body: 'No parabens, no sulphates, no unnecessary fillers. Vegan and cruelty free. Every formula is tested for real results on real skin — not optimised for marketing claims.',
    imageSrc: '/images/values_img3.webp',
    imageAlt: 'honest formulation',
  },
  {
    number: '04',
    title: 'minimal impact.',
    body: 'Responsible packaging, considered logistics, and a commitment to reducing waste at every stage. Premium should not come at the planet\'s expense.',
    imageSrc: '/images/values_img4.webp',
    imageAlt: 'minimal impact',
    flip: true,
  },
  {
    number: '05',
    title: 'structured for individuality.',
    body: 'Separate ranges for him and her — because different skin has different needs. Same commitment to quality and sustainability, calibrated for individual biology.',
    imageSrc: '/images/values_img5.webp',
    imageAlt: 'for him and her',
  },
]

export default function ValuesPage() {
  return (
    <>
      <StoryHero
        eyebrow="our values"
        heading={`what we<br/><em>believe in.</em>`}
        sub="high-performance formulas · carefully sourced · sustainably made"
        imageSrc="/images/values_hero.webp"
        objectPosition="center center"
      />
      <section aria-label="Our values">
        {VALUES.map((v, i) => (
          <ValueBlock key={v.number} {...v} flip={v.flip ?? false} />
        ))}
      </section>
      <Footer />
    </>
  )
}
