import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog | Marvin Silo Kusuma",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-neutral-500 mb-16">
          Tulisan-tulisan ringan seputar development dan teknologi.
        </p>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border-b border-neutral-200 pb-12">
                <time className="text-xs text-neutral-400">{post.date}</time>
                <h2 className="mt-2 text-2xl font-medium text-black group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-xl">
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
