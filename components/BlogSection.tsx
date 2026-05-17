import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function BlogSection() {
  const posts = blogPosts.slice(0, 2);

  return (
    <section id="blog" className="section-container border-t border-neutral-200">
      <div className="flex items-end justify-between mb-16">
        <h2 className="section-title mb-0">Blog</h2>
        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-black transition-colors"
        >
          Lihat semua &rarr;
        </Link>
      </div>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="border-b border-neutral-200 pb-8 group-last:border-0">
              <time className="text-xs text-neutral-400">{post.date}</time>
              <h3 className="mt-2 text-xl font-medium text-black group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
