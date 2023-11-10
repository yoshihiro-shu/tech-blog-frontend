import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteURL = process.env.SITE_URL|| "https://yoshihiro-shu.com";
  return [
    {
      url: siteURL,
      lastModified: new Date(),
    },
    {
      url: `${siteURL}/profile`,
      lastModified: new Date(),
    },
    {
      url: `${siteURL}/new/1`,
      lastModified: new Date(),
    },
  ]
}