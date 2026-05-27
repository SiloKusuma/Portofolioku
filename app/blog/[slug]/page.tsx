import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import { getBlogHeadings } from "@/lib/blogContent";
import BlogArticleContent from "@/components/BlogArticleContent";
import BlogTableOfContents from "@/components/BlogTableOfContents";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — silokusuma.dev`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const headings = getBlogHeadings(post.content);

  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-neutral-700 hover:text-white transition-colors"
        >
          &larr; Kembali
        </Link>

        <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 xl:gap-20">
          <article className="min-w-0">
            <time className="text-xs text-neutral-700">{post.date}</time>
            <h1 className="mt-3 text-3xl md:text-4xl font-normal tracking-tight text-white">
              {post.title}
            </h1>

            {headings.length > 0 && (
              <BlogTableOfContents
                headings={headings}
                className="mt-10 lg:hidden"
              />
            )}

            <div className="mt-12">
              <BlogArticleContent content={post.content} />
            </div>
          </article>

          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <BlogTableOfContents
                headings={headings}
                className="sticky top-28"
              />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
