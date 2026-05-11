'use client'

// components/ui/ContactForm.tsx
export function ContactForm() {
  return (
    <form onSubmit={e => e.preventDefault()} className="space-y-6" aria-label="Contact form">
      {[
        { id: 'name',  label: 'your name',     type: 'text',  auto: 'name'  },
        { id: 'email', label: 'email address',  type: 'email', auto: 'email' },
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
      <button type="submit" className="btn-ghost mt-2">
        send message
      </button>
    </form>
  )
}
