import { scrapItems } from '../data/scrapItems'

export default function sitemap() {
  const baseUrl = 'https://example.com'
  const pages = ['/', '/scrap', '/about', '/contact']

  const scrapPages = scrapItems.map((s) => `/scrap/${s.slug}`)

  return [...pages, ...scrapPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString()
  }))
}
