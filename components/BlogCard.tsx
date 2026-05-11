import Link from 'next/link';
import { BlogPost } from '@/lib/blog-posts';

const categoryColors: Record<string, string> = {
  Maintenance: 'bg-blue-100 text-blue-700',
  Repairs:     'bg-orange-100 text-orange-700',
  Education:   'bg-green-100 text-green-700',
  Safety:      'bg-red-100 text-red-700',
  Installation:'bg-purple-100 text-purple-700',
};

interface Props {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: Props) {
  const badgeClass = categoryColors[post.category] ?? 'bg-amber-100 text-amber-700';

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group col-span-full block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
      >
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeClass}`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-400 font-medium">Featured</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-950 mb-3 group-hover:text-amber-600 transition-colors leading-snug">
            {post.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 max-w-3xl">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span>{post.publishDate}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <span className="text-amber-600 font-semibold text-sm group-hover:underline">
              Read article →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass}`}>
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
        <h3 className="text-base font-bold text-navy-950 mb-2 group-hover:text-amber-600 transition-colors leading-snug flex-1">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">{post.publishDate}</span>
          <span className="text-amber-600 text-sm font-semibold group-hover:underline">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
