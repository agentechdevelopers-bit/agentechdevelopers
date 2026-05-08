import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agentechdevelopers.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-05-08'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-05-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-05-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}