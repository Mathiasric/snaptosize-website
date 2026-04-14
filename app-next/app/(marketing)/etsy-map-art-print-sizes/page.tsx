import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Etsy Map Art Print Sizes — Sizing Guide",
  description:
    "Best print sizes for map art on Etsy. City maps, custom map prints, travel art — DPI requirements, landscape vs portrait ratios, and US vs EU A3 sizing covered.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-map-art-print-sizes",
  },
  openGraph: {
    title: "Etsy Map Art Print Sizes | SnapToSize",
    description:
      "Best sizes for map art on Etsy. City maps, custom prints, travel art — DPI requirements, landscape vs portrait ratios, and A3 sizing for international buyers.",
    url: "https://snaptosize.com/etsy-map-art-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-map-art-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Etsy Map Art Print Sizes — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Map Art Print Sizes — Sizing Guide",
    description:
      "Best sizes for map art on Etsy. City maps, travel art — DPI requirements, landscape vs portrait ratios, and A3 sizing explained.",
    images: ["/assets/og/etsy-map-art-print-sizes.png"],
  },
};

export default function EtsyMapArtPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Map Art Print Sizes — Complete Sizing Guide",
    description:
      "Best print sizes for map art on Etsy. City maps, custom map prints, travel art — DPI requirements, landscape vs portrait ratios, and US vs EU sizing explained.",
    url: "https://snaptosize.com/etsy-map-art-print-sizes",
    datePublished: "2026-04-14",
    dateModified: "2026-04-14",
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
        name: "Map Art Print Sizes for Etsy",
        item: "https://snaptosize.com/etsy-map-art-print-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What print sizes should I offer for map art on Etsy?",
      answer:
        "Offer 8×10, 11×14, 16×20, 18×24, 24×36, and A3 as your core set. City maps with lots of street-label detail need large formats — 16×20 minimum for readability. Always include 24×36 for statement walls and A3 for EU buyers, where map prints are a top housewarming and anniversary gift.",
    },
    {
      question: "Should map art prints be landscape or portrait?",
      answer:
        "It depends on the geography. Most city maps and regional maps fit best in portrait (2:3 or 3:4) because cities expand more vertically than horizontally. Coastline maps, river routes, and highway travel routes often need landscape (4:3 or 16:9). Offer both orientations if your design genuinely works in both — never include a rotated version just to pad the listing.",
    },
    {
      question: "What resolution do I need for map art prints?",
      answer:
        "300 DPI minimum, but map art is more resolution-sensitive than abstract work because of fine street labels and thin road lines. At 150 DPI, street names become illegible at 8×10 and larger. For maps with dense label grids (city centre districts), 350–400 DPI gives a safety margin. Vector-based maps (SVG, Illustrator) are ideal — they're resolution-independent.",
    },
    {
      question: "Should I offer A3 for city map prints on Etsy?",
      answer:
        "Yes — always. City map prints are a top housewarming, wedding anniversary, and travel gift in the UK, Germany, and Scandinavia. Those buyers print on A3 paper. A3 (11.7×16.5 in) is NOT the same as 11×14 (a common mistake) — your A3 file must be exactly 3508×4961 pixels at 300 DPI or buyers get cut-off margins.",
    },
    {
      question: "How do I fit a wide city map into a portrait print without cutting off geography?",
      answer:
        "Use a 3:4 ratio (12×16 or 18×24) rather than 2:3 if your map area is wider than it is tall. A 3:4 frame gives you more horizontal space than 2:3 while still being portrait. Alternatively, offer both a portrait crop (focused city centre) and a landscape version (wider geographic area) as separate files in the same listing.",
    },
    {
      question: "What is the easiest way to resize map art for all Etsy print sizes?",
      answer:
        "Upload your map design once to SnapToSize and it generates every size — 8×10, 11×14, 16×20, 18×24, 24×36, A3, and more — at 300 DPI in a single ZIP under 20MB. No manual exports, no Photoshop batch actions, no per-size resizing.",
    },
    {
      question: "How do I price map art listings with multiple sizes?",
      answer:
        "Map prints are premium gift items — housewarming, anniversary, marathon finish line. Sellers typically charge $5–$15 for a digital download. Including multiple sizes in one ZIP justifies the price and reduces buyer questions about whether their frame size is included. A listing with 6+ sizes at $8 outperforms a single-size listing at $3 on perceived value.",
    },
    {
      question: "What is the easiest way to resize map art for all Etsy print sizes?",
      answer:
        "SnapToSize handles the full multi-format export in one upload — portrait sizes (8×10, 11×14, 18×24), landscape sizes (16×20, 24×36), and EU A3 all in one ZIP under 20MB. Upload once, download all sizes instantly.",
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

      {/* ===== HERO ===== */}
      <section
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0B0B12 0%, #0D1020 40%, #0B0F1A 100%)",
        }}
      >
        {/* Gradient orbs */}
        <div
          className="absolute top-[-5%] right-[5%] w-[480px] h-[480px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[280px] h-[280px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
                <Link href="/" className="hover:text-white/60">Home</Link>
                <span>/</span>
                <span className="text-white/60">Map Art Print Sizes</span>
              </nav>

              <p className="text-[10px] font-mono tracking-[0.2em] text-teal-400/70 uppercase mb-3">
                PRINT SIZE REFERENCE
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Etsy Map Art Print Sizes
              </h1>
              <p className="text-white/60 text-base mb-6 leading-relaxed">
                City maps and travel art have unique sizing needs: street labels need high resolution, geographic shapes dictate orientation, and EU buyers demand A3. This guide covers every print size for map art listings.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {["300 DPI ready", "Portrait + landscape", "A3 for EU buyers", "ZIP under 20MB"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] text-white/70 border border-white/[0.08]"
                  >
                    <Check className="w-3 h-3 text-teal-400" />
                    {pill}
                  </span>
                ))}
              </div>

              <a
                href="https://app.snaptosize.com?source=seo_etsy-map-art-print-sizes&kind=guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="text-sm px-6 py-2.5">
                  Resize your map prints free →
                </Button>
              </a>
            </div>

            {/* Right: visual — map grid with orientation labels */}
            <div className="hidden md:flex flex-col items-center justify-center gap-3">
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">
                Map art orientations
              </div>
              <div className="flex items-end gap-5">
                {/* Portrait: 2:3 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-teal-500/30 bg-teal-500/[0.08] flex items-center justify-center relative overflow-hidden"
                    style={{ width: 60, height: 90 }}
                  >
                    {/* Subtle map grid lines */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: "linear-gradient(rgba(45,212,191,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.3) 1px, transparent 1px)",
                      backgroundSize: "12px 12px"
                    }} />
                    <span className="text-[9px] font-mono text-teal-300/90 z-10">2:3</span>
                  </div>
                  <span className="text-[9px] text-white/30">Portrait</span>
                </div>
                {/* Portrait: 3:4 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-purple-500/30 bg-purple-500/[0.08] flex items-center justify-center relative overflow-hidden"
                    style={{ width: 68, height: 90 }}
                  >
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
                      backgroundSize: "12px 12px"
                    }} />
                    <span className="text-[9px] font-mono text-purple-300/90 z-10">3:4</span>
                  </div>
                  <span className="text-[9px] text-white/30">18×24</span>
                </div>
                {/* Landscape: 4:3 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg border border-teal-400/25 bg-teal-400/[0.06] flex items-center justify-center relative overflow-hidden"
                    style={{ width: 90, height: 68 }}
                  >
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: "linear-gradient(rgba(45,212,191,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.3) 1px, transparent 1px)",
                      backgroundSize: "12px 12px"
                    }} />
                    <span className="text-[9px] font-mono text-teal-200/80 z-10">4:3</span>
                  </div>
                  <span className="text-[9px] text-white/30">Landscape</span>
                </div>
              </div>
              <p className="text-[9px] text-white/20 mt-2 text-center max-w-[220px]">
                Geographic shape determines orientation — portrait for city centres, landscape for coastlines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 max-w-3xl py-12">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-10">
          <QuickAnswer question="What print sizes should I offer for map art on Etsy?">
            Offer <strong>8×10, 11×14, 16×20, 18×24, 24×36, and A3</strong> as your core set. Map art needs large formats — street labels become illegible below 8×10 at 300 DPI. Always include 24×36 for statement walls and A3 for EU/UK buyers, where map prints are a top housewarming gift.
          </QuickAnswer>
        </div>

        {/* ===== SECTION 1: Why Map Art Has Unique Sizing Needs ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why map art has unique sizing needs
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Map prints face a challenge that abstract wall art doesn't: legibility. A city map with street labels and district names needs enough physical size and pixel density for those details to be readable when printed. Too small or too low-res, and the map becomes decorative noise rather than a meaningful keepsake.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There are three main map art sub-types on Etsy, each with different size requirements:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>City map prints:</strong> Street grids with labels need 16×20 minimum for readability. A city map at 8×10 is decorative; at 16×20 or 24×36, street names become legible and the print becomes a keepsake.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Custom location / neighbourhood maps:</strong> Zoomed-in area maps with landmarks can work at 8×10 and 11×14. Less text density means the legibility threshold is lower.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Travel / route art:</strong> Coastlines, river routes, trail maps — these are more abstract and can be sold at smaller sizes. Orientation often needs to be landscape to follow the geographic shape.</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For buyers building a travel gallery wall, see{" "}
            <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">
              gallery wall print sizes for Etsy
            </Link>{" "}
            — map prints are a popular anchor piece in travel-themed sets.
          </p>
        </section>

        {/* ===== SECTION 2: Best Print Sizes Table ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Best print sizes for map art on Etsy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The table below covers the full size range for map art listings. All pixel dimensions are at 300 DPI.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03] border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Pixels at 300 DPI</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-8x10-print-size" className="hover:underline text-accent-light">8×10</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">2400×3000</td>
                  <td className="py-3 px-4 text-muted-foreground">4:5</td>
                  <td className="py-3 px-4 text-muted-foreground">Neighbourhood maps, location art with minimal text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-11x14-print-size" className="hover:underline text-accent-light">11×14</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">3300×4200</td>
                  <td className="py-3 px-4 text-muted-foreground">11:14</td>
                  <td className="py-3 px-4 text-muted-foreground">Gallery-standard, good for mid-detail city sections</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-16x20-print-size" className="hover:underline text-accent-light">16×20</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">4800×6000</td>
                  <td className="py-3 px-4 text-muted-foreground">4:5</td>
                  <td className="py-3 px-4 text-muted-foreground">City maps — minimum size for readable street labels</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-18x24-print-size" className="hover:underline text-accent-light">18×24</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">5400×7200</td>
                  <td className="py-3 px-4 text-muted-foreground">3:4</td>
                  <td className="py-3 px-4 text-muted-foreground">Premium city map, housewarming gift, anniversary print</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-24x36-print-size" className="hover:underline text-accent-light">24×36</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">7200×10800</td>
                  <td className="py-3 px-4 text-muted-foreground">2:3</td>
                  <td className="py-3 px-4 text-muted-foreground">Statement wall map, full city + surrounding area</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-a3-print-size" className="hover:underline text-accent-light">A3</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">3508×4961</td>
                  <td className="py-3 px-4 text-muted-foreground">~1:√2 (ISO)</td>
                  <td className="py-3 px-4 text-muted-foreground">EU/UK buyers — top gift format for city map prints</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-medium">
                    <Link href="/etsy-a4-print-size" className="hover:underline text-accent-light">A4</Link>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">2480×3508</td>
                  <td className="py-3 px-4 text-muted-foreground">~1:√2 (ISO)</td>
                  <td className="py-3 px-4 text-muted-foreground">EU/UK home printing — include for maximum international reach</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            See the full{" "}
            <Link href="/etsy-print-sizes" className="text-accent-light hover:underline">
              Etsy print sizes guide
            </Link>{" "}
            for all ratios. For large-format options, see{" "}
            <Link href="/etsy-24x36-print-size" className="text-accent-light hover:underline">
              24×36 print size for Etsy
            </Link>
            .
          </p>
        </section>

        {/* ===== CTA 1 ===== */}
        <div className="mb-14">
          <ContextualCTA
            problem="A city map listing with 6 sizes means 6 manual exports — and portrait AND landscape doubles that."
            solution="SnapToSize exports all your map art sizes in one upload at 300 DPI. Portrait, landscape, ISO — everything in one ZIP."
            appUrl="https://app.snaptosize.com?source=seo_etsy-map-art-print-sizes&kind=guide"
            buttonText="Export all map sizes at once →"
          />
        </div>

        {/* ===== SECTION 3: Landscape vs Portrait ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Landscape vs. portrait for map art
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most city maps are portrait — cities tend to expand more vertically than horizontally in their core districts. A portrait frame (2:3 or 3:4) fits the typical city centre footprint without awkward empty space at the sides.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            But geography overrides convention. Some map subjects genuinely demand landscape:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Coastlines and harbour maps</strong> — long horizontal stretches of coastline need landscape (4:3 or 3:2) to avoid heavy cropping.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Marathon and race route maps</strong> — most race courses are wider than tall; landscape 16:9 or 4:3 captures the full route without artificial vertical padding.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span><strong>Country or region outlines</strong> — some countries (Spain, the US) are naturally wider than tall and suit a landscape frame.</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For landscape-specific print sizes and ratios, see the{" "}
            <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">
              Etsy landscape print sizes guide
            </Link>
            . For photography-style compositions that share landscape ratio needs, see{" "}
            <Link href="/etsy-photography-print-sizes" className="text-accent-light hover:underline">
              photography print sizes for Etsy
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 4: Resolution for Maps ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Resolution requirements for map art
          </h2>
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-lg p-4 flex gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200/80">
              <strong>Map-specific issue:</strong> Street label legibility depends on both DPI and print size together. A map that looks fine on screen at 72 DPI will have completely unreadable street names when printed at 16×20. Always check your labels at 100% zoom at 300 DPI before uploading.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Map art needs 300 DPI minimum — higher than some art styles because of fine line detail and small text. Street names, district labels, and thin road lines are the first things to blur at low resolution. For maps with dense urban street grids, 350–400 DPI gives an extra margin of safety.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Vector-based maps (Adobe Illustrator, Inkscape, SVG exports) are the ideal source format — they're resolution-independent and will print cleanly at any size. If your map is raster-only (a screenshot or bitmap export), it must be created at 300 DPI from the start; upscaling never restores lost detail.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            See our guide on{" "}
            <Link href="/best-resolution-for-etsy-printables" className="text-accent-light hover:underline">
              best resolution for Etsy printables
            </Link>{" "}
            for how DPI, pixel dimensions, and print size interact.
          </p>
        </section>

        {/* ===== SECTION 5: EU Sizing for Map Prints ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            EU sizing for city map prints
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            City map prints are one of the top housewarming, wedding anniversary, and travel gifts in the UK, Germany, Scandinavia, and the Netherlands. Buyers in those markets print at home on A3 paper — not 18×24 or 24×36. Sellers who offer only US sizes lose a significant share of their international traffic.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A3 (11.7×16.5 in) is close to but <strong>not the same as</strong> 11×14 — a common mistake. A buyer who downloads an 11×14 file and prints it on A3 gets a small map surrounded by a large white border, or cut-off edges depending on their printer settings. Your A3 file must be exactly 3508×4961 pixels at 300 DPI.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For a full comparison of ISO A-sizes vs US sizes, see the{" "}
            <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">
              A3 print size guide for Etsy
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 6: Pricing and Packaging ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How to price and package map art listings
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Map prints are premium gift items. Buyers purchasing a city map as a housewarming or anniversary gift expect value — and a listing that includes 6+ sizes in a single ZIP justifies a higher price point and reduces buyer questions about frame compatibility.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sellers typically charge $5–$15 for a multi-size digital city map download. The{" "}
            <Link href="/etsy-20mb-file-limit" className="text-accent-light hover:underline">
              Etsy 20MB file limit
            </Link>{" "}
            matters here — large 24×36 files at 300 DPI are substantial. A 24×36 JPEG at 300 DPI is roughly 8–12MB alone, so a ZIP with 6 sizes can approach the limit. SnapToSize uses progressive quality optimization to keep all sizes in one ZIP under 20MB automatically.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For guidance on which size combinations maximize perceived value, see{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to include in an Etsy printable listing
            </Link>
            .
          </p>
        </section>

        {/* ===== LISTING OUTPUT SHOWCASE ===== */}
        <div className="mb-14">
          <ListingOutputShowcase artwork="misty_lake" />
        </div>

        {/* ===== SECTION 7: How SnapToSize Handles Map Exports ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How SnapToSize handles map art multi-pack exports
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Upload your map design once — SnapToSize outputs every size in the table above at 300 DPI: 8×10, 11×14, 16×20, 18×24, 24×36, A3, A4, and extras — all in a single ZIP under 20MB. Portrait and landscape variants are generated from the same upload based on your crop preferences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For sellers with a city map collection covering multiple cities, that's the difference between hours of per-city exports and a batch upload workflow. See{" "}
            <Link href="/how-to-package-digital-wall-art-for-etsy" className="text-accent-light hover:underline">
              how to package digital wall art for Etsy
            </Link>{" "}
            for ZIP structure best practices.
          </p>
        </section>

        {/* ===== CTA 2 ===== */}
        <div className="mb-14">
          <ContextualCTA
            problem="A city map collection with 10 cities × 6 sizes each = 60 manual exports."
            solution="Upload each map once to SnapToSize — every size is generated automatically at 300 DPI in a ZIP under 20MB."
            appUrl="https://app.snaptosize.com?source=seo_etsy-map-art-print-sizes&kind=guide"
            buttonText="Try SnapToSize free →"
          />
        </div>

        {/* ===== LIFESTYLE MOCKUP ===== */}
        <section className="mb-14">
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src="/assets/visuals/etsy-map-art-print-sizes-mockup.jpg"
              alt="City map art print displayed as a framed wall piece in a modern home"
              className="w-full object-cover"
              style={{ maxHeight: 400 }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            City map art styled as a statement wall piece — large format makes street labels readable
          </p>
        </section>

        {/* ===== CTA 3: FinalCTA ===== */}
        <div className="mb-14">
          <FinalCTA
            heading="Stop exporting map sizes one by one."
            stat="6+ sizes. One upload."
            description="Upload your city map or travel art once — SnapToSize delivers every size your buyers need at 300 DPI. Portrait, landscape, ISO — all in one ZIP under 20MB."
            appUrl="https://app.snaptosize.com?source=seo_etsy-map-art-print-sizes&kind=guide"
            buttonText="Resize your map prints free →"
          />
        </div>

        {/* ===== FAQ ===== */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* ===== RELATED PAGES ===== */}
        <RelatedPages currentSlug="etsy-map-art-print-sizes" />
      </div>
    </>
  );
}
