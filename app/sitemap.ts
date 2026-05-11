import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

const BASE_URL = 'https://www.aboveservicesboston.com';

type SitemapEntry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] };

const pages: SitemapEntry[] = [
  { path: '',                            priority: 1.0, changeFrequency: 'weekly'  },
  { path: '/chimney-cleaning',           priority: 0.9, changeFrequency: 'monthly' },
  { path: '/chimney-repair',             priority: 0.9, changeFrequency: 'monthly' },
  { path: '/chimney-inspection',         priority: 0.9, changeFrequency: 'monthly' },
  { path: '/chimney-rebuilds',           priority: 0.8, changeFrequency: 'monthly' },
  { path: '/chimney-liner-installation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/chimney-cap-installation',   priority: 0.8, changeFrequency: 'monthly' },
  { path: '/chimney-crown-repair',       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/smoke-chamber-repair',       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/fireplace-repair',           priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gas-fireplace-services',    priority: 0.8, changeFrequency: 'monthly' },
  { path: '/chimney-leak-repair',       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tuckpointing',              priority: 0.8, changeFrequency: 'monthly' },
  { path: '/service-areas',              priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog',                       priority: 0.7, changeFrequency: 'weekly'  },
];

const citySlugsMa = [
  'boston', 'cambridge', 'somerville', 'brookline', 'newton',
  'quincy', 'medford', 'malden', 'waltham', 'arlington',
  'nashua', 'salem', 'manchester', 'derry', 'londonderry',
  'hudson', 'windham', 'merrimack', 'bedford',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const cityEntries = citySlugsMa.map((slug) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries, ...blogEntries];
}
