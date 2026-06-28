export interface BlogHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

function makeSlugId(text: string, counts: Map<string, number>): string {
  const base =
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section";

  const count = counts.get(base) ?? 0;
  counts.set(base, count + 1);
  return count === 0 ? base : `${base}-${count}`;
}

export function getBlogHeadings(content: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const slugCounts = new Map<string, number>();

  for (const block of content.trim().split("\n\n")) {
    if (block.startsWith("## ")) {
      const text = block.replace("## ", "");
      headings.push({ id: makeSlugId(text, slugCounts), text, level: 2 });
    } else if (block.startsWith("### ")) {
      const text = block.replace("### ", "");
      headings.push({ id: makeSlugId(text, slugCounts), text, level: 3 });
    }
  }

  return headings;
}

export function createHeadingIdIterator(content: string) {
  const headings = getBlogHeadings(content);
  let index = 0;

  return () => {
    const heading = headings[index];
    index += 1;
    return heading?.id;
  };
}
