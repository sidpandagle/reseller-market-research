import { MetadataRoute } from 'next'
export const dynamic = 'force-dynamic'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/report/*/toc',
        '/report/*/highlights',
        '/report/*/methodology',
        '/report/*/request-sample'
      ]
    },
    sitemap: 'https://www.researchenvision.com/sitemap.xml',
  }
}