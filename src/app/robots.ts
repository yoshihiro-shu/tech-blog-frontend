import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteURL = process.env.SITE_URL|| "https://yoshihiro-shu.com";
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteURL}/sitemap.xml`,
  }
}