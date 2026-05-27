import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog — silokusuma.dev",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-700 mb-3">
          Blog
        </p>
        <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">
          Tulisan
        </h1>
        <p className="text-sm text-neutral-600 mb-16">
          Catatan ringan seputar pengembangan web dan teknologi.
        </p>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border-b border-neutral-900 pb-12 hover:border-neutral-700 transition-colors">
                <time className="text-xs text-neutral-700">{post.date}</time>
                <h2 className="mt-2 text-xl font-medium text-white group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed max-w-lg group-hover:text-neutral-400 transition-colors">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
