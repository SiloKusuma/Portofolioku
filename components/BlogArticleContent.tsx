import { createHeadingIdIterator } from "@/lib/blogContent";

interface Props {
  content: string;
}

export default function BlogArticleContent({ content }: Props) {
  const paragraphs = content.trim().split("\n\n");
  const nextHeadingId = createHeadingIdIterator(content);

  return (
    <div className="space-y-6 text-sm text-neutral-500 leading-relaxed">
      {paragraphs.map((para, i) => {
        if (para.startsWith("## ")) {
          const id = nextHeadingId();
          return (
            <h2
              key={i}
              id={id}
              className="scroll-mt-28 text-lg font-medium text-white mt-10 -mb-3"
            >
              {para.replace("## ", "")}
            </h2>
          );
        }

        if (para.startsWith("### ")) {
          const id = nextHeadingId();
          return (
            <h3
              key={i}
              id={id}
              className="scroll-mt-28 text-base font-medium text-white mt-8 -mb-3"
            >
              {para.replace("### ", "")}
            </h3>
          );
        }

        if (para.startsWith("- ")) {
          const items = para.split("\n").map((line) => line.replace(/^- /, ""));
          return (
            <ul key={i} className="list-disc pl-5 space-y-1 text-neutral-500">
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
            <ol key={i} className="list-decimal pl-5 space-y-1 text-neutral-500">
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
  );
}
