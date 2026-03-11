import Link from "next/link";
import pageRegistry from "@/data/page-registry.json";

interface RelatedPagesProps {
  currentSlug: string;
  max?: number;
}

export default function RelatedPages({ currentSlug, max = 6 }: RelatedPagesProps) {
  const current = pageRegistry.find((p) => p.slug === currentSlug);
  if (!current) return null;

  // Start with explicit relatedSlugs, then fill with same-cluster pages
  const seen = new Set<string>([currentSlug]);
  const related: typeof pageRegistry = [];

  // 1. Explicit related slugs
  for (const slug of current.relatedSlugs) {
    if (seen.has(slug)) continue;
    const page = pageRegistry.find((p) => p.slug === slug);
    if (page) {
      related.push(page);
      seen.add(slug);
    }
    if (related.length >= max) break;
  }

  // 2. Same cluster pages
  if (related.length < max) {
    for (const page of pageRegistry) {
      if (seen.has(page.slug)) continue;
      if (page.cluster === current.cluster) {
        related.push(page);
        seen.add(page.slug);
      }
      if (related.length >= max) break;
    }
  }

  if (related.length === 0) return null;

  return (
    <div className="text-sm text-foreground-60 space-y-2 pb-8">
      <p>
        <strong>Related:</strong>{" "}
        {related.map((page, i) => (
          <span key={page.slug}>
            {i > 0 && " · "}
            <Link
              href={`/${page.slug}`}
              className="text-accent-light hover:underline"
            >
              {page.title}
            </Link>
          </span>
        ))}
      </p>
    </div>
  );
}
