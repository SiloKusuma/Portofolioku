import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";

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

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-neutral-700 hover:text-white transition-colors"
        >
          &larr; Kembali
        </Link>
        <article className="mt-8">
          <time className="text-xs text-neutral-700">{post.date}</time>
          <h1 className="mt-3 text-3xl md:text-4xl font-normal tracking-tight text-white">
            {post.title}
          </h1>
          <div className="mt-12 space-y-6 text-sm text-neutral-500 leading-relaxed">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-lg font-medium text-white mt-10 -mb-3"
                  >
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              if (para.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-base font-medium text-white mt-8 -mb-3"
                  >
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              if (para.startsWith("- ")) {
                const items = para
                  .split("\n")
                  .map((line) => line.replace(/^- /, ""));
                return (
                  <ul
                    key={i}
                    className="list-disc pl-5 space-y-1 text-neutral-500"
                  >
                    {items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (para.startsWith("1. ")) {
                const items = para
                  .split("\n")
                  .map((line) => line.replace(/^\d+\.\s/, ""));
                return (
                  <ol
                    key={i}
                    className="list-decimal pl-5 space-y-1 text-neutral-500"
                  >
                    {items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ol>
                );
              }
              const parts = para.split(/(\*{1,2}[^*]+\*{1,2})/);
              if (parts.length > 1) {
                return (
                  <p key={i}>
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={j} className="text-white">
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      if (part.startsWith("*") && part.endsWith("*")) {
                        return <em key={j}>{part.slice(1, -1)}</em>;
                      }
                      return part;
                    })}
                  </p>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
