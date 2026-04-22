import type { MetadataRoute } from 'next'
import { siteUrl } from '../src/configs/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }> = [
    { path: '', changeFrequency: 'monthly', priority: 1 },
    { path: '/about', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/practice_focus', changeFrequency: 'yearly', priority: 0.9 },
    { path: '/experience', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/representative_experience', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/presentations', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
