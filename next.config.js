/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js for Vercel - no static export
  // Vercel runs the build and serves SSR/SSG automatically
  
  reactStrictMode: true,
  
  images: {
    // Allow unoptimized for simplicity on Vercel free tier
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
