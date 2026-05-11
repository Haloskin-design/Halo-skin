'use client'

// components/ui/NewsletterForm.tsx
export function NewsletterForm() {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex gap-0"
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        placeholder="your@email.com"
        autoComplete="email"
        required
        className="flex-1 min-w-0 bg-charcoal border border-white/[0.08] px-4 py-3 text-[0.7rem] text-cream placeholder:text-cream/25 focus:outline-none focus:border-sand/30 transition-colors"
      />
      <button
        type="submit"
        className="bg-sand/10 border border-sand/25 px-4 py-3 text-[0.6rem] tracking-[0.22em] uppercase text-sand/80 hover:bg-sand/20 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/40 whitespace-nowrap"
      >
        join
      </button>
    </form>
  )
}
