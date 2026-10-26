const canonicalUrl = `https://www.aboveservices.us/blog/${post.slug}`;

return {
  title: post.metaTitle,
  description: post.metaDescription,
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
    </>
  );
}
