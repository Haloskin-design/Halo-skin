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
        heading={`get in<br/><em>touch.</em>`}
        sub="questions, press, wholesale enquiries."
        imageSrc="/images/contact_hero.webp"
        objectPosition="center center"
      />

      <section className="px-12 max-sm:px-6 py-24 max-sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 max-lg:grid-cols-1">

          {/* Contact info — static, server rendered */}
          <div>
            <p className="t-eyebrow mb-8">how to reach us</p>
            <div className="space-y-10">
              {[
                { label: 'general enquiries', value: 'hello@haloskincare.co.uk' },
                { label: 'press & media',      value: 'press@haloskincare.co.uk' },
                { label: 'wholesale',          value: 'trade@haloskincare.co.uk' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="t-eyebrow mb-2">{label}</p>
                  <a
                    href={`mailto:${value}`}
                    className="text-[0.92rem] text-cream/70 hover:text-sand transition-colors duration-300"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form — client component (handles onSubmit) */}
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  )
}
