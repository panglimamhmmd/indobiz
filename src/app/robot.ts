import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://panglimamuhammad.me/graphql';
  return {
    rules: {
      userAgent: '*',
      allow: ['/' , '/articles', '/articles/[slug]'],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}