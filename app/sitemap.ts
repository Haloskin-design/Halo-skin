import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://halo-skin-ashen.vercel.app'
  return [
    { url: base,            lastModified: new Date(), priority: 1.0 },
    { url: `${base}/her`,   lastModified: new Date(), priority: 0.9 },
    { url: `${base}/him`,   lastModified: new Date(), priority: 0.9 },
    { url: `${base}/story`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/values`,lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`,lastModified: new Date(), priority: 0.7 },
  ]
}
