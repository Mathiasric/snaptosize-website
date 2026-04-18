import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";

const appUrl =
  "https://app.snaptosize.com?source=seo_etsy-anime-manga-art-sizes&kind=guide";

export const metadata: Metadata = {
  title: "Anime Art Print Sizes for Etsy — Seller Guide",
  description:
    "Best anime & manga print sizes for Etsy: 8×12, 11×17, 12×18, A4, A3 and more. Pixel dimensions at 300 DPI, Japanese B-series formats, and batch export.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-anime-manga-art-sizes",
  },
  openGraph: {
    title: "Anime Art Print Sizes for Etsy | SnapToSize",
    description:
      "Complete anime & manga print sizing guide for Etsy sellers. 2:3 portrait formats, Japanese B-series, A-series for international buyers, and batch export.",
    url: "https://snaptosize.com/etsy-anime-manga-art-sizes",
    images: [
      {
        url: "/assets/og/etsy-anime-manga-art-sizes.png",
        width: 1200,
        height: 630,
        alt: "Anime & Manga Art Print Sizes for Etsy — Seller Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Art Print Sizes for Etsy — Seller Guide",
    description:
      "Best anime & manga print sizes for Etsy: 8×12, 11×17, 12×18, A4, A3 and more. Pixel dimensions at 300 DPI, Japanese B-series formats, and batch export.",
    images: ["/assets/og/etsy-anime-manga-art-sizes.png"],
  },
  keywords: [
    "etsy anime art print sizes",
    "anime print sizes etsy",
    "manga art print sizes",
    "anime poster sizes etsy",
    "etsy digital download anime sizes",
    "anime print dimensions 300 dpi",
    "japanese b-series poster sizes",
    "anime wall art sizes etsy",
  ],
};

export default function EtsyAnimeMangaArtSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Anime & Manga Art Print Sizes for Etsy: The Complete Seller Guide",
    description:
      "Complete anime and manga print sizing guide for Etsy sellers. Covers the best-selling 2:3 portrait sizes, Japanese B-series formats, ISO A-series for international buyers, DPI requirements for fine linework, gallery wall sets, and a full recommended size bundle.",
    url: "https://snaptosize.com/etsy-anime-manga-art-sizes",
    datePublished: "2026-04-15",
    dateModified: "2026-04-15",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://snaptosize.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Etsy Print Sizes",
        item: "https://snaptosize.com/etsy-print-sizes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Anime & Manga Art Print Sizes",
        item: "https://snaptosize.com/etsy-anime-manga-art-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What size are most anime posters?",
      answer:
        "Most anime posters sold on Etsy are 11×17 inches or 12×18 inches — both use the 2:3 portrait ratio that suits character art. Official Japanese merchandise commonly uses B2 (approx 20×28in) and B3 (approx 14×20in) formats. For digital downloads, 11×17 and 12×18 are the practical Western equivalents.",
    },
    {
      question: "What pixel dimensions should anime prints be at 300 DPI?",
      answer:
        "At 300 DPI: 8×12 = 2400×3600px, 11×17 = 3300×5100px, 12×18 = 3600×5400px, 18×24 = 5400×7200px. For A4 (210×297mm): 2480×3508px. For A3 (297×420mm): 3508×4961px. Always work from the highest resolution source file you have.",
    },
    {
      question: "Should I offer A4 and A3 sizes for anime prints on Etsy?",
      answer:
        "Yes — absolutely. A large portion of anime art buyers are in the UK, EU, Australia, and Japan, where A4 and A3 are the standard frame sizes. Not including these sizes means losing international sales. A4 (210×297mm / 2480×3508px at 300 DPI) and A3 (297×420mm / 3508×4961px at 300 DPI) should be in every anime listing.",
    },
    {
      question: "What DPI do I need for anime art prints?",
      answer:
        "300 DPI is the minimum for anime and manga art. Fine linework, screentone patterns, and gradient shading all reveal blurriness at lower resolutions in ways that solid-color art does not. At 300 DPI, 8×12 requires a 2400×3600px source file. For sizes above 18×24, start from the highest resolution digital file possible.",
    },
    {
      question: "How many sizes should an Etsy anime print listing include?",
      answer:
        "A solid minimum bundle is 6–8 sizes: 5×7, 8×10, 8×12, 11×17, 12×18, A4, and A3. Top anime art sellers often offer 10–15 sizes. More sizes mean more saves, fewer buyer questions about fit, and higher perceived value. SnapToSize generates all sizes from a single upload.",
    },
    {
      question: "What is the difference between JIS B-series and ISO B-series?",
      answer:
        "JIS B-series (used in Japan) and ISO B-series (used internationally) are different standards. JIS B3 is 364×515mm (approx 14×20in); ISO B3 is 353×500mm. For Etsy sellers, the safest approach is to list sizes in inches and mm rather than 'B3', since the same label means different things to buyers in different countries.",
    },
    {
      question: "Does SnapToSize support anime print sizes?",
      answer:
        "Yes. SnapToSize accepts any high-resolution image and generates every standard print size at 300 DPI — including 8×12, 11×17, 12×18, 18×24, A4, A3, and more. Upload once and get up to 70 print-ready files across all ratio packs, ready to upload directly to Etsy.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — manga panel-inspired */}
      <section
        style={{ background: "#0B0C1A" }}
        className="relative overflow-hidden"
      >
        {/* Manga panel border accents */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          {/* Top-left panel block */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              width: "180px",
              height: "260px",
              border: "3px solid #4A1D96",
              borderRadius: "2px",
              opacity: 0.55,
            }}
          />
          {/* Offset inner panel — top left */}
          <div
            style={{
              position: "absolute",
              top: "28px",
              left: "28px",
              width: "140px",
              height: "200px",
              border: "2px solid #6D28D9",
              borderRadius: "1px",
              opacity: 0.35,
            }}
          />
          {/* Bottom-right large panel */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              width: "220px",
              height: "320px",
              border: "3px solid #1E3A5F",
              borderRadius: "2px",
              opacity: 0.5,
            }}
          />
          {/* Offset inner panel — bottom right */}
          <div
            style={{
              position: "absolute",
              bottom: "32px",
              right: "32px",
              width: "170px",
              height: "250px",
              border: "2px solid #2563EB",
              borderRadius: "1px",
              opacity: 0.3,
            }}
          />
          {/* Mid glow orb — purple */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "300px",
              background:
                "radial-gradient(ellipse, rgba(109,40,217,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {/* Speed lines suggestion — diagonal stripes */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "240px",
              width: "2px",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent, rgba(109,40,217,0.25), transparent)",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "256px",
              width: "1px",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent, rgba(37,99,235,0.2), transparent)",
              opacity: 0.5,
            }}
          />
        </div>

        <Container>
          <div className="relative z-10 py-20 md:py-28 max-w-[1200px] mx-auto text-center">
            {/* Trust pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "2:3 Portrait Formats",
                "Japanese B-Series Covered",
                "300 DPI Specs",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(109,40,217,0.2)",
                    border: "1px solid rgba(109,40,217,0.5)",
                    color: "#C4B5FD",
                  }}
                >
                  <Check size={11} />
                  {pill}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Anime &amp; Manga Art Print Sizes for Etsy:{" "}
              <span style={{ color: "#A78BFA" }}>The Complete Seller Guide</span>
            </h1>

            <p className="text-lg md:text-xl mb-8" style={{ color: "#CBD5E1" }}>
              Character art demands tall portrait formats — here are every size,
              pixel dimension, and ratio you need for a complete anime print
              listing.
            </p>

            {/* CTA 1 — Package all your anime print sizes at once */}
            <a href={appUrl}>
              <Button>Package all your anime print sizes at once</Button>
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12 space-y-16">

          {/* Quick Answer */}
          <QuickAnswer question="What sizes should anime art prints be on Etsy?">
            The most popular anime art print sizes on Etsy are{" "}
            <strong>8×12, 11×17, 12×18, and 18×24</strong> (all 2:3 ratio
            portrait), plus <strong>A4 and A3</strong> for international buyers
            — matching the tall portrait format that character art and full-figure
            poses demand.
          </QuickAnswer>

          <ListingOutputShowcase artwork="mysthical_portal" />

          {/* Section 1 — Most Popular Sizes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Most Popular Anime Art Print Sizes for Etsy
            </h2>
            <p className="text-slate-300 mb-4">
              Portrait orientation dominates anime and manga art sales. Character
              art, full-figure poses, and panel-style compositions all favor tall
              formats — which is why the 2:3 ratio family drives the most
              conversions. The 4:5 ratio sizes (8×10, 11×14) appear too but are
              secondary for this niche.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 font-semibold text-slate-200">Size</th>
                    <th className="py-2 pr-4 font-semibold text-slate-200">Ratio</th>
                    <th className="py-2 pr-4 font-semibold text-slate-200">
                      Pixels at 300 DPI
                    </th>
                    <th className="py-2 font-semibold text-slate-200">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[
                    ["5×7 in", "2:3", "1500 × 2100 px", "Entry-level, impulse buys"],
                    ["8×10 in", "4:5", "2400 × 3000 px", "Top seller overall on Etsy"],
                    ["8×12 in", "2:3", "2400 × 3600 px", "Core anime portrait format"],
                    ["11×14 in", "4:5", "3300 × 4200 px", "Popular for framed display"],
                    ["11×17 in", "~2:3", "3300 × 5100 px", "Closest to B3 poster format"],
                    ["12×18 in", "2:3", "3600 × 5400 px", "Best-selling anime poster size"],
                    ["16×20 in", "4:5", "4800 × 6000 px", "Statement piece / wall art"],
                    ["18×24 in", "3:4", "5400 × 7200 px", "Large format, high impact"],
                  ].map(([size, ratio, px, notes]) => (
                    <tr key={size} className="border-b border-slate-800">
                      <td className="py-2 pr-4 font-medium text-white">{size}</td>
                      <td className="py-2 pr-4">{ratio}</td>
                      <td className="py-2 pr-4 font-mono text-xs">{px}</td>
                      <td className="py-2 text-slate-400 text-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-400 text-sm">
              See also:{" "}
              <Link
                href="/etsy-11x17-print-size"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                11×17 print size guide
              </Link>{" "}
              for full pixel specs and framing details.
            </p>
          </section>

          {/* Section 2 — Japanese B-Series */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Japanese B-Series Poster Formats: B2 and B3 Explained
            </h2>
            <p className="text-slate-300 mb-4">
              Official anime merchandise in Japan uses the JIS B-series — a
              different standard from the ISO B-series used in Europe. If a buyer
              asks for &ldquo;B3&rdquo; or &ldquo;B2&rdquo;, they almost certainly
              mean the Japanese sizes.
            </p>
            <p className="text-slate-300 mb-5">
              The practical Western equivalents to include in your Etsy listing:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 font-semibold text-slate-200">
                      Japanese Format
                    </th>
                    <th className="py-2 pr-4 font-semibold text-slate-200">
                      Dimensions
                    </th>
                    <th className="py-2 pr-4 font-semibold text-slate-200">
                      Western Equivalent
                    </th>
                    <th className="py-2 font-semibold text-slate-200">
                      Pixels at 300 DPI
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[
                    [
                      "JIS B4",
                      "257×364 mm",
                      "~10×14 in (use 11×14)",
                      "3300 × 4200 px",
                    ],
                    [
                      "JIS B3",
                      "364×515 mm (~14×20 in)",
                      "11×17 or 14×20",
                      "3300 × 5100 px",
                    ],
                    [
                      "JIS B2",
                      "515×728 mm (~20×28 in)",
                      "18×24 or 20×28",
                      "5400 × 7200 px",
                    ],
                  ].map(([fmt, dim, equiv, px]) => (
                    <tr key={fmt} className="border-b border-slate-800">
                      <td className="py-2 pr-4 font-medium text-white">{fmt}</td>
                      <td className="py-2 pr-4">{dim}</td>
                      <td className="py-2 pr-4">{equiv}</td>
                      <td className="py-2 font-mono text-xs">{px}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-400 text-sm">
              Important: ISO B3 (353×500 mm) and JIS B3 (364×515 mm) are not the
              same. Listing sizes in inches and mm — rather than &ldquo;B3&rdquo;
              — avoids buyer confusion.
            </p>
          </section>

          {/* Section 3 — A-Series for International Buyers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              ISO A-Series Sizes for International Anime Buyers
            </h2>
            <p className="text-slate-300 mb-4">
              Anime fandom is global. Buyers in the UK, EU, Australia, and Japan
              default to metric frame sizes — and A4 and A3 are the most-stocked
              standard. Not offering them means missing a significant share of
              international traffic.
            </p>

            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 font-semibold text-slate-200">Size</th>
                    <th className="py-2 pr-4 font-semibold text-slate-200">
                      Dimensions (mm)
                    </th>
                    <th className="py-2 pr-4 font-semibold text-slate-200">
                      Pixels at 300 DPI
                    </th>
                    <th className="py-2 font-semibold text-slate-200">Market</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[
                    ["A5", "148×210 mm", "1748 × 2480 px", "Small prints, bookmarks"],
                    ["A4", "210×297 mm", "2480 × 3508 px", "UK, EU, AU, Japan — must-have"],
                    ["A3", "297×420 mm", "3508 × 4961 px", "Gallery-worthy, high demand"],
                    ["A2", "420×594 mm", "4961 × 7016 px", "Large statement pieces"],
                  ].map(([size, mm, px, market]) => (
                    <tr key={size} className="border-b border-slate-800">
                      <td className="py-2 pr-4 font-medium text-white">{size}</td>
                      <td className="py-2 pr-4">{mm}</td>
                      <td className="py-2 pr-4 font-mono text-xs">{px}</td>
                      <td className="py-2 text-slate-400 text-xs">{market}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-300">
              A4 and A3 are non-negotiable for any anime listing targeting
              international buyers. See the full{" "}
              <Link
                href="/etsy-a3-print-size"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                A3 print size guide
              </Link>{" "}
              for framing notes and exact pixel specs.
            </p>
          </section>

          {/* Section 4 — DPI Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              DPI and Resolution Requirements for Anime Art Prints
            </h2>
            <p className="text-slate-300 mb-4">
              Anime and manga linework is uniquely demanding at print time. Fine
              line details, screentone dot patterns, and smooth cel-shading
              gradients all expose blurriness at resolutions that look acceptable
              in other styles. The standard rule — 300 DPI minimum — is not
              optional here.
            </p>
            <p className="text-slate-300 mb-4">
              Print-on-demand platforms like INPRNT accept a minimum of 150 DPI,
              but their own guidelines recommend 300 DPI for artwork with fine
              details. For Etsy digital downloads, buyers print locally, often at
              home or through services like Costco or Walmart Photo — where thin
              lines will look muddy below 300 DPI.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Work from the highest-resolution original file — never upscale a low-res source",
                "300 DPI = resolution × physical size. For 12×18 at 300 DPI: 3600×5400px source",
                "Screentone patterns are especially sensitive — at 150 DPI they print as blurry grey",
                "Check your export at 100% zoom in your art software before uploading",
              ].map((tip) => (
                <li key={tip} className="flex gap-2 text-slate-300">
                  <Check size={16} className="text-violet-400 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 — Gallery Wall Triptychs */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Set-of-3 Gallery Wall Sizing for Anime Prints
            </h2>
            <p className="text-slate-300 mb-4">
              Coordinated triptych sets are one of the top-performing Etsy listing
              formats for anime art — three prints from the same series or
              character, sold together. The key is consistent ratio across all
              three, so frames align cleanly on the wall.
            </p>
            <p className="text-slate-300 mb-4">
              Common gallery wall configurations that work for anime:
            </p>
            <ul className="space-y-2 mb-5">
              {[
                "3× 5×7 — small set, good for desks or small walls. Budget-friendly.",
                "3× 8×12 — the most popular anime triptych. Bold without overwhelming.",
                "8×12 center + two 5×7 flanks — hero + supporting characters layout.",
                "3× 11×17 — large statement set for dedicated anime walls.",
              ].map((config) => (
                <li key={config} className="flex gap-2 text-slate-300">
                  <Check size={16} className="text-violet-400 shrink-0 mt-0.5" />
                  <span>{config}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-300">
              All prints in a set should share one ratio family. Mixing 2:3 and
              4:5 in the same frame cluster looks mismatched. See{" "}
              <Link
                href="/etsy-gallery-wall-print-sizes"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                gallery wall print sizes
              </Link>{" "}
              for full multi-piece configuration guidance.
            </p>
          </section>

          {/* Section 6 — What Sizes to Include + CTA 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Sizes to Include in Your Etsy Anime Print Listing
            </h2>
            <p className="text-slate-300 mb-4">
              Listings that offer more sizes get more saves, fewer buyer questions
              about fit, and better conversion. Here is the minimum viable bundle
              and the full recommended set.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 font-semibold text-slate-200">Tier</th>
                    <th className="py-2 pr-4 font-semibold text-slate-200">Sizes</th>
                    <th className="py-2 font-semibold text-slate-200">Coverage</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[
                    [
                      "Minimum (6 sizes)",
                      "5×7, 8×10, 8×12, 11×17, A4, A3",
                      "US buyers + international basics",
                    ],
                    [
                      "Recommended (10 sizes)",
                      "5×7, 8×10, 8×12, 11×14, 11×17, 12×18, 18×24, A4, A3, A2",
                      "Full US + full international + large format",
                    ],
                    [
                      "Complete (15+ sizes)",
                      "All above + 4×6, 16×20, 20×30, A5",
                      "Maximizes saves and perceived value",
                    ],
                  ].map(([tier, sizes, coverage]) => (
                    <tr key={tier} className="border-b border-slate-800">
                      <td className="py-2 pr-4 font-medium text-white">{tier}</td>
                      <td className="py-2 pr-4 text-xs">{sizes}</td>
                      <td className="py-2 text-slate-400 text-xs">{coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA 2 — distinct angle: skip the manual export process */}
            <Card accent>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">
                    Skip the manual export process
                  </p>
                  <p className="text-sm text-slate-300">
                    Upload your anime artwork once — SnapToSize generates every
                    size in this table as print-ready files, organized and named
                    for direct Etsy upload.
                  </p>
                </div>
                <a href={appUrl} className="shrink-0">
                  <Button variant="secondary">Try it free</Button>
                </a>
              </div>
            </Card>
          </section>

          {/* Lifestyle mockup */}
          <section>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/assets/visuals/etsy-anime-manga-art-sizes-mockup.jpg"
                alt="Anime art prints in matching dark frames on a teenager's bedroom wall with decorative lighting"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Three coordinating anime prints — 8×12, 11×17, and A3 — in matching
              dark frames for a gallery wall display.
            </p>
          </section>

          {/* FinalCTA — CTA 3 */}
          <FinalCTA
            heading="Ship every anime print size in one upload."
            stat="28 sizes. One pack."
            description="Upload your design once — SnapToSize delivers every ratio at 300 DPI in a ZIP under Etsy's 20MB limit. No manual resizing."
            appUrl={appUrl}
            buttonText="Resize your anime art free →"
          />

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </section>

          <RelatedPages currentSlug="etsy-anime-manga-art-sizes" />
        </div>
      </Container>
    </>
  );
}
