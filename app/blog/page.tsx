import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';
import BlogCard from '@/components/BlogCard';
import { breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Blog — Boston Homeowner Guides | Above Services',
  description:
    'Practical chimney guides. Covering cleaning schedules, repair signs, liner types, waterproofing, fireplace safety, and more for Greater Boston homeowners.',
  alternates: {
    canonical: 'https://www.aboveservices.us/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.aboveservices.us/blog',
    title: 'Chimney Blog — Boston Homeowner Guides | Above Services',
    description:
      'Practical chimney guides from our CSIA-certified crew. Covering cleaning, repair, liner types, waterproofing, and fireplace safety for Greater Boston homeowners.',
  },
};

const crumbSchema = breadcrumbSchema([{ name: 'Blog', href: '/blog' }]);

const categories = ['All', 'Maintenance', 'Repairs', 'Education', 'Safety'];

export default function BlogIndexPage() {
  const sorted = [...blogPosts].reverse();
  const [featured, ...rest] = sorted;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy-950 text-white pt-16 pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Blog</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">
              Above Services — Boston Chimney Guides
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Chimney Guides for Boston Homeowners
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical advice from our CSIA-certified crew — cleaning schedules, repair signs,
              liner types, waterproofing, and fireplace safety. No fluff, just what you need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="border-b border-gray-200 bg-white sticky top-16 md:top-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`flex-shrink-0 text-sm font-medium px-4 py-1.5 rounded-full border transition-colors cursor-default ${
                  cat === 'All'
                    ? 'bg-navy-950 text-white border-navy-950'
                    : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured && <BlogCard post={featured} featured />}
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-950 text-white py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Need a Hand, Not Just an Article?
          </h2>
          <p className="text-blue-200 mb-7 text-lg">
            Our CSIA-certified crew serves Boston, Cambridge, Brookline, Newton, Somerville, and
            surrounding towns. Same-day availability most weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17819216228"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-3.5 px-7 rounded-xl transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (781) 921-6228
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3.5 px-7 rounded-xl hover:bg-white hover:text-navy-950 transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
