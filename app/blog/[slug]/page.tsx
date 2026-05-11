import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog-posts';
import BlogContent from '@/components/BlogContent';
import BlogCard from '@/components/BlogCard';
import { breadcrumbSchema, articleSchema } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const canonicalUrl = `https://www.aboveservicesboston.com/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishDate,
      authors: ['Above Services'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const categoryColors: Record<string, string> = {
  Maintenance: 'bg-blue-100 text-blue-700',
  Repairs:     'bg-orange-100 text-orange-700',
  Education:   'bg-green-100 text-green-700',
  Safety:      'bg-red-100 text-red-700',
  Installation:'bg-purple-100 text-purple-700',
};

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.relatedPosts).slice(0, 3);

  const crumbSchema = breadcrumbSchema([
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ]);

  const jsonLd = articleSchema({
    title: post.title,
    description: post.metaDescription,
    slug: post.slug,
    publishDate: post.publishDate,
  });

  const badgeClass = categoryColors[post.category] ?? 'bg-amber-100 text-amber-700';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article header */}
      <section className="bg-navy-950 text-white pt-12 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-blue-200 truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeClass}`}>
              {post.category}
            </span>
            <span className="text-blue-300 text-sm">{post.publishDate}</span>
            <span className="text-blue-500 text-sm">·</span>
            <span className="text-blue-300 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[2.625rem] font-bold leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex gap-10 lg:gap-16 items-start">

            {/* Main content */}
            <article className="flex-1 min-w-0">
              <BlogContent blocks={post.content} />

              {/* Back to blog */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6 w-72 flex-shrink-0">

              {/* Related Services */}
              <div className="bg-navy-950 text-white rounded-2xl p-6">
                <h3 className="font-bold text-base mb-4 text-white">Related Services</h3>
                <ul className="space-y-2 mb-5">
                  {post.relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2.5 text-blue-200 hover:text-amber-400 transition-colors text-sm py-1"
                      >
                        <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+17819216228"
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm w-full"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (781) 921-6228
                </a>
              </div>

              {/* Related Guides */}
              {relatedPosts.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-base text-navy-950 mb-4">Related Guides</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <li key={rp.slug}>
                        <Link href={`/blog/${rp.slug}`} className="group block">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[rp.category] ?? 'bg-amber-100 text-amber-700'}`}>
                            {rp.category}
                          </span>
                          <p className="text-sm font-semibold text-navy-950 group-hover:text-amber-600 transition-colors leading-snug mt-1.5">
                            {rp.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">{rp.readTime}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* About box */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <p className="text-sm font-bold text-navy-950 mb-1">Written by Above Services</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  CSIA-certified chimney specialists serving Greater Boston since 2013. Our crew
                  handles everything from annual cleanings to full rebuilds.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts — full width at bottom */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl font-bold text-navy-950 mb-7">More Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <BlogCard key={rp.slug} post={rp} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
              >
                View all articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-navy-950 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-3">Need Service in Greater Boston?</h2>
          <p className="text-blue-200 mb-6">
            CSIA-certified crew. Upfront quotes. We serve Boston, Cambridge, Brookline, Newton,
            Somerville, Quincy, Medford, and surrounding towns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17819216228"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-3.5 px-7 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (781) 921-6228
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3.5 px-7 rounded-xl hover:bg-white hover:text-navy-950 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
