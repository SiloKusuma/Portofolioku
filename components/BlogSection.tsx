import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function BlogSection() {
  const posts = blogPosts.slice(0, 2);

  return (
    <section id="blog" className="section-container border-t border-neutral-900">
      <div className="flex items-end justify-between mb-16">
        <p className="section-label animate-fade-up">Blog</p>
        <Link
          href="/blog"
          className="text-sm text-neutral-700 hover:text-white transition-colors"
        >
          Lihat semua &rarr;
        </Link>
      </div>
      <div className="space-y-12">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
            style={{ animationDelay: `${0.15 * i}s` }}
          >
            <article className="border-b border-neutral-900 pb-10 group-last:border-0 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-3 text-sm text-neutral-700 mb-3">
                <time>{post.date}</time>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-3 text-base text-neutral-600 leading-relaxed max-w-xl group-hover:text-neutral-400 transition-colors">
                {post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
