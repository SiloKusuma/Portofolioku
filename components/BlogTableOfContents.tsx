"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import type { BlogHeading } from "@/lib/blogContent";

interface Props {
  headings: BlogHeading[];
  className?: string;
}

export default function BlogTableOfContents({ headings, className = "" }: Props) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (headings.length === 0) return;

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav aria-label="On this page" className={className}>
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
        <FileText className="w-4 h-4 shrink-0" strokeWidth={1.75} />
        <span>On this page</span>
      </div>

      <ul className="relative border-l border-neutral-800">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;

          return (
            <li key={heading.id} className="relative">
              {isActive && (
                <span
                  className="absolute left-0 top-1 bottom-1 w-0.5 -translate-x-1/2 bg-emerald-400 rounded-full"
                  aria-hidden
                />
              )}
              <button
                type="button"
                onClick={() => handleClick(heading.id)}
                className={`block w-full text-left py-1.5 text-sm truncate transition-colors ${
                  heading.level === 3 ? "pl-7 pr-1" : "pl-4 pr-1"
                } ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
                title={heading.text}
              >
                {heading.text}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
