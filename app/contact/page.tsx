import type { Metadata } from 'next'
import { StoryHero } from '@/sections/StoryHero'
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

          {/* Info */}
          <div>
            <p className="t-eyebrow mb-8">how to reach us</p>
            <div className="space-y-10">
              {[
                { label: 'general enquiries', value: 'hello@haloskincare.co.uk' },
                { label: 'press & media', value: 'press@haloskincare.co.uk' },
                { label: 'wholesale', value: 'trade@haloskincare.co.uk' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="t-eyebrow mb-2">{label}</p>
                  <a href={`mailto:${value}`} className="text-[0.92rem] text-cream/70 hover:text-sand transition-colors duration-300">
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={e => e.preventDefault()} className="space-y-6" aria-label="Contact form">
            {[
              { id: 'name', label: 'your name', type: 'text', auto: 'name' },
              { id: 'email', label: 'email address', type: 'email', auto: 'email' },
            ].map(({ id, label, type, auto }) => (
              <div key={id}>
                <label htmlFor={id} className="t-eyebrow block mb-2">{label}</label>
                <input
                  id={id} type={type} autoComplete={auto} required
                  className="w-full bg-transparent border-b border-white/[0.12] py-3 text-[0.88rem] text-cream placeholder:text-cream/20 focus:outline-none focus:border-sand/40 transition-colors"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="t-eyebrow block mb-2">message</label>
              <textarea
                id="message" rows={5} required
                className="w-full bg-transparent border-b border-white/[0.12] py-3 text-[0.88rem] text-cream placeholder:text-cream/20 focus:outline-none focus:border-sand/40 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-ghost mt-2"
            >
              send message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
