import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    //   disallow: '/members/',
    },
    // sitemap: 'https://tjc.sg/sitemap.xml',
  }
}