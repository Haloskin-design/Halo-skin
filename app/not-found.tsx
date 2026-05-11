// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="t-eyebrow mb-6">404</p>
      <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-cream leading-[0.92] mb-6">
        page not found.
        <br />
        <em className="text-cream/45 not-italic">but radiance remains.</em>
      </h1>
      <p className="text-[0.85rem] text-cream/50 leading-[1.9] max-w-sm mb-12">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="btn-ghost"
      >
        return home
      </Link>
    </div>
  )
}
