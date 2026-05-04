import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Most Popular Etsy Print Sizes to Sell (2026 Seller Guide)",
  description:
    "Which print sizes do Etsy buyers actually purchase? 8×10, 5×7, 11×14, and 16×20 dominate sales. Covers buyer demand signals, aspect ratios, and how to offer every popular size from one upload with SnapToSize.",
  alternates: {
    canonical: "https://snaptosize.com/most-popular-etsy-print-sizes-to-sell",
  },
  openGraph: {
    title: "Most Popular Etsy Print Sizes to Sell (2026 Seller Guide)",
    description:
      "8×10, 5×7, 11×14: the sizes Etsy buyers actually purchase. A complete seller guide with aspect ratios, room-by-room sizing, and how to cover all sizes from one upload.",
    url: "https://snaptosize.com/most-popular-etsy-print-sizes-to-sell",
    type: "article",
    images: [
      {
        url: "/assets/og/etsy-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Most Popular Etsy Print Sizes to Sell: 2026 Seller Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Popular Etsy Print Sizes to Sell (2026 Seller Guide)",
    description:
      "8×10, 5×7, 11×14: the sizes Etsy buyers actually purchase. A complete seller guide with aspect ratios, room-by-room sizing, and how to cover all sizes from one upload.",
    images: ["/assets/og/etsy-print-sizes.png"],
  },
};

const appUrl = "https://app.snaptosize.com/app/quick-export";

const topSizes = [
  {
    rank: 1,
    size: "8×10",
    pixels: "2400×3000 px",
    ratio: "4:5",
    why: "Most common frame size in North America. Found in every home goods store. The default size buyers search for first.",
    price: "$4–$12",
  },
  {
    rank: 2,
    size: "5×7",
    pixels: "1500×2100 px",
    ratio: "5:7",
    why: "Popular for desk frames and gifts. Often purchased alongside 8×10 as a matching set.",
    price: "$3–$8",
  },
  {
    rank: 3,
    size: "11×14",
    pixels: "3300×4200 px",
    ratio: "11:14",
    why: "Statement piece for living rooms. Higher price point, strong margins.",
    price: "$6–$18",
  },
  {
    rank: 4,
    size: "16×20",
    pixels: "4800×6000 px",
    ratio: "4:5",
    why: "Gallery wall anchor. Buyers investing in art for impact choose this size.",
    price: "$8–$25",
  },
  {
    rank: 5,
    size: "18×24",
    pixels: "5400×7200 px",
    ratio: "3:4",
    why: "Poster format. Popular for motivational prints and nursery art.",
    price: "$10–$30",
  },
];

const faqItems = [
  {
    question: "What size print sells most on Etsy?",
    answer:
      "8×10 is consistently the best-selling print size on Etsy. It fits standard frames widely available at IKEA, Target, and Walmart. Most North American buyers own or can easily find 8×10 frames, making it the lowest-friction purchase. 5×7 is the second most popular, often bought as a gift or desk piece.",
  },
  {
    question: "Should I offer all print sizes in my Etsy listing?",
    answer:
      "Yes: listings with more size options appear in more searches and convert buyers who have specific frame sizes. Offering 5–8 sizes (covering 4:5, 2:3, 3:4, 5:7 ratios) captures the full range of buyer demand without overwhelming your listing.",
  },
  {
    question: "What aspect ratios cover the most popular Etsy print sizes?",
    answer:
      "Four ratios cover the top 10 best-selling Etsy print sizes: 4:5 (8×10, 16×20), 2:3 (4×6, 12×18, 20×30), 3:4 (9×12, 18×24), and 5:7. Add A4/A3 for international buyers. SnapToSize generates all of these from a single artwork upload.",
  },
  {
    question: "What is the best tool to resize artwork for all Etsy print sizes?",
    answer:
      "SnapToSize is purpose-built for Etsy sellers. Upload your artwork once and it automatically generates print-ready files at 8×10, 5×7, 11×14, 16×20, 18×24, A4, A3, and more, all at 300 DPI, correctly cropped to each ratio. No Photoshop required.",
  },
  {
    question: "Do I need to offer A4 and A3 sizes on Etsy?",
    answer:
      "If you want to sell to UK and European buyers, yes. A4 (297×210 mm) is the European equivalent of the US 8×10 frame size. Adding A4 and A3 to your listings opens your shop to international buyers who shop in millimetres and own ISO-standard frames.",
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

export default function MostPopularEtsyPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Most Popular Etsy Print Sizes to Sell: The 2026 Seller Guide",
    description:
      "Which print sizes do Etsy buyers actually purchase? 8×10, 5×7, 11×14, and 16×20 dominate sales. This guide covers the top sellers, their aspect ratios, and how to offer every popular size from one upload.",
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://snaptosize.com/most-popular-etsy-print-sizes-to-sell",
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
        name: "Most Popular Print Sizes to Sell",
        item: "https://snaptosize.com/most-popular-etsy-print-sizes-to-sell",
      },
    ],
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
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-5">
                <span className="text-xs font-semibold text-accent tracking-wide">
                  Etsy Seller Guide · 2026
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-white">
                The Sizes Etsy Buyers Actually Search For
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
                A buyer searching for an 11×14 print scrolls past listings that only offer 8×10 — your art never appears. Here are the 5 sizes that cover the full range of buyer demand, and how to offer them all from a single upload.
              </p>
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={appUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-[#030712] font-semibold rounded-lg text-sm hover:bg-accent/90 transition-colors"
                >
                  Cover All 5 Sizes — Try Free
                </a>
                <a
                  href="#top-sizes"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 font-medium rounded-lg text-sm hover:border-white/40 transition-colors"
                >
                  See Top 5 Sizes
                </a>
              </div>
            </div>

            {/* Right: CSS-only size proportion visual — sorted small→large */}
            <div className="hidden lg:flex items-end justify-center gap-3 h-72">
              {[
                { label: "5×7", w: 5, h: 7, color: "bg-purple-500/20 border-purple-500/40", rank: "#2" },
                { label: "8×10", w: 8, h: 10, color: "bg-accent/25 border-accent/50", rank: "#1" },
                { label: "11×14", w: 11, h: 14, color: "bg-emerald-500/20 border-emerald-500/40", rank: "#3" },
                { label: "16×20", w: 16, h: 20, color: "bg-accent/20 border-accent/30", rank: "#4" },
                { label: "18×24", w: 18, h: 24, color: "bg-amber-500/20 border-amber-500/40", rank: "#5" },
              ].map((block) => {
                const SCALE = 9; // px per inch
                const pxW = block.w * SCALE;
                const pxH = block.h * SCALE;
                return (
                  <div key={block.label} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <span className="text-[9px] font-mono text-white/40">{block.rank}</span>
                    <div
                      className={`border-2 rounded-sm ${block.color} flex flex-col items-center justify-end pb-1.5`}
                      style={{ width: `${pxW}px`, height: `${pxH}px` }}
                    >
                      <span className="text-[10px] font-mono font-semibold text-white/80">{block.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="py-12 md:py-16">
        <Container>
          {/* QuickAnswer */}
          <div className="max-w-3xl mx-auto mb-12">
            <QuickAnswer question="What are the most popular Etsy print sizes to sell?">
              The top 5 most popular Etsy print sizes are: 8×10 (4:5 ratio), 5×7, 11×14, 16×20 (4:5 ratio), and 18×24 (3:4 ratio). 8×10 dominates because it fits standard frames available everywhere. Together, these 5 sizes cover the full range of buyer demand for wall art, gifts, and gallery walls.
            </QuickAnswer>
          </div>

          {/* Top 5 sizes */}
          <div className="max-w-4xl mx-auto mb-14">
            <h2 id="top-sizes" className="text-2xl font-bold mb-6">
              Top 5 Print Sizes Ranked by Popularity
            </h2>

            {/* Ratio visual blocks — taller for visibility */}
            <div
              role="img"
              aria-label="Visual comparison of top 5 Etsy print size proportions"
              className="flex gap-6 mb-8 overflow-x-auto pb-2 items-end"
            >
              {[
                { size: "8×10", wPx: 48, hPx: 60, color: "bg-accent/15 border-accent/30" },
                { size: "5×7", wPx: 43, hPx: 60, color: "bg-purple-500/15 border-purple-500/30" },
                { size: "11×14", wPx: 46, hPx: 58, color: "bg-emerald-500/15 border-emerald-500/30" },
                { size: "16×20", wPx: 48, hPx: 60, color: "bg-accent/15 border-accent/30" },
                { size: "18×24", wPx: 45, hPx: 60, color: "bg-amber-500/15 border-amber-500/30" },
              ].map((block) => (
                <div key={block.size} className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`border-2 rounded-lg ${block.color} flex items-end justify-center pb-2`}
                    style={{ width: `${block.wPx * 2}px`, height: `${Math.max(block.hPx * 2, 80)}px` }}
                  >
                    <span className="text-xs font-mono font-semibold">{block.size}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="text-left py-3 pr-4 font-semibold">#</th>
                    <th scope="col" className="text-left py-3 pr-4 font-semibold">Size</th>
                    <th scope="col" className="text-left py-3 pr-4 font-semibold">Resolution</th>
                    <th scope="col" className="text-left py-3 pr-4 font-semibold">Ratio</th>
                    <th scope="col" className="text-left py-3 pr-4 font-semibold">Why it sells</th>
                    <th scope="col" className="text-left py-3 font-semibold">Typical price</th>
                  </tr>
                </thead>
                <tbody>
                  {topSizes.map((s) => (
                    <tr key={s.size} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-3 pr-4 font-semibold text-accent">{s.rank}</td>
                      <td className="py-3 pr-4 font-semibold">{s.size}&quot;</td>
                      <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{s.pixels}</td>
                      <td className="py-3 pr-4">
                        <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium">
                          {s.ratio}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground max-w-xs">{s.why}</td>
                      <td className="py-3 font-medium">{s.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Room-by-room guide — subtle background */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="py-14 bg-muted/20 rounded-2xl px-6">
              <h2 className="text-2xl font-bold mb-4">
                Best Print Size by Room and Use Case
              </h2>
              <p className="text-muted-foreground mb-6">
                Buyers shop by room. Listing your prints in multiple sizes lets buyers find the right fit for their space, which increases the chance they purchase.
              </p>
              <div className="divide-y divide-border/60">
                {[
                  { room: "Living Room", emoji: "🛋️", sizes: ["16×20", "18×24", "20×30"], note: "Statement sizes. Price higher." },
                  { room: "Bedroom", emoji: "🛏️", sizes: ["8×10", "11×14", "5×7"], note: "Focal point or gallery wall pairs." },
                  { room: "Nursery", emoji: "🧸", sizes: ["5×7", "8×10", "A4"], note: "Sets of 2 to 3 prints popular." },
                  { room: "Home Office", emoji: "💻", sizes: ["5×7", "4×6", "8×10"], note: "Compact frames. Minimal styles." },
                  { room: "Kitchen / Hallway", emoji: "🍃", sizes: ["5×7", "4×6", "A5"], note: "Small accents, often in sets." },
                  { room: "Gallery Wall", emoji: "🖼️", sizes: ["5×7", "8×10", "11×14"], note: "Mix sizes. Bundle listings convert well." },
                ].map((item) => (
                  <div key={item.room} className="flex items-center gap-4 py-3.5 flex-wrap md:flex-nowrap">
                    <div className="flex items-center gap-2 w-36 shrink-0">
                      <span className="text-base">{item.emoji}</span>
                      <p className="font-semibold text-sm">{item.room}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {item.sizes.map((s) => (
                        <span key={s} className="px-2 py-0.5 text-xs font-mono rounded-md bg-accent/10 text-accent border border-accent/20">{s}</span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground w-44 shrink-0 hidden md:block">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Loss aversion */}
          <div className="max-w-3xl mx-auto mb-14 p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <h2 className="text-xl font-bold mb-3">
              Why offering fewer sizes costs you sales
            </h2>
            <p className="text-muted-foreground mb-4">
              Etsy search shows listings that match the buyer&apos;s intent. If a buyer searches for &quot;11×14 botanical print&quot; and your listing only offers 8×10, you won&apos;t appear, even if your art is exactly what they want.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold mt-0.5">→</span>
                <span>Listings with 5+ sizes appear in more search queries</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold mt-0.5">→</span>
                <span>Buyers who already own a specific frame size won&apos;t buy a different size</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500 font-bold mt-0.5">→</span>
                <span>International buyers (UK, EU) search for A4/A3; missing these loses a whole market segment</span>
              </li>
            </ul>
          </div>

          {/* Ratio insight */}
          <div className="max-w-3xl mx-auto mb-14">
            <div className="bg-muted/10 rounded-2xl p-8 border border-border/40">
            <h2 className="text-2xl font-bold mb-3">
              One upload covers every popular size — and then some
            </h2>
            <p className="text-muted-foreground mb-1 text-sm font-medium">
              Up to 70 print-ready files from a single artwork. 5 organized packs, all at 300 DPI.
            </p>
            <p className="text-muted-foreground mb-6 text-sm">
              SnapToSize organizes sizes into 5 ratio packs. Upload once: each pack is auto-cropped to the correct ratio, named, and zipped — ready to attach to your Etsy listing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                {
                  pack: "2:3 Pack",
                  desc: "Wall art standard",
                  sizes: "4×6, 8×12, 12×18, 16×24, 20×30",
                  color: "border-accent/30 bg-accent/5 text-accent",
                  badge: "7 sizes",
                },
                {
                  pack: "3:4 Pack",
                  desc: "Classic photo frames",
                  sizes: "6×8, 9×12, 12×16, 15×20, 18×24",
                  color: "border-purple-500/30 bg-purple-500/5 text-purple-400",
                  badge: "5 sizes",
                },
                {
                  pack: "4:5 Pack",
                  desc: "Home of the 8×10",
                  sizes: "8×10, 12×15, 16×20, 20×25, 24×30",
                  color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
                  badge: "5 sizes",
                },
                {
                  pack: "ISO A-Series",
                  desc: "UK, EU & international",
                  sizes: "A5, A4, A3, A2, A1",
                  color: "border-sky-500/30 bg-sky-500/5 text-sky-400",
                  badge: "5 sizes",
                },
                {
                  pack: "Extras Pack",
                  desc: "Common sizes that don't fit a single ratio",
                  sizes: "5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24",
                  color: "border-amber-500/30 bg-amber-500/5 text-amber-400",
                  badge: "6 sizes",
                },
              ].map((p) => (
                <div key={p.pack} className={`p-4 rounded-lg border ${p.color}`}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sm">{p.pack}</p>
                    <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${p.color} opacity-80`}>{p.badge}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{p.desc}</p>
                  <p className="text-xs font-mono text-foreground/60">{p.sizes}</p>
                </div>
              ))}
              <div className="p-4 rounded-lg border border-border/40 bg-muted/10 flex flex-col justify-center">
                <p className="text-xs text-muted-foreground mb-1">Plus Quick Export</p>
                <p className="text-sm font-medium">Square sizes + oversized prints</p>
                <p className="text-xs font-mono text-foreground/60 mt-1">5×5 → 24×24, 24×36, A0</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Every pack is generated in both <strong>portrait and landscape</strong> — that&apos;s up to 70 files from a single upload. All 300 DPI JPEG, organized by ratio.
            </p>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div className="max-w-3xl mx-auto mb-14">
            <ContextualCTA
              problem="Every size you don't offer is a sale you can't win."
              solution="Upload your artwork once: SnapToSize generates all 5 top sizes plus A4, A3 and more, correctly cropped at 300 DPI — no Photoshop needed."
              buttonText="Stop Missing Sales — Try Free"
              appUrl={appUrl}
            />
          </div>

          {/* International sizes — subtle background */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="py-14 bg-muted/20 rounded-2xl px-6">
              <h2 className="text-2xl font-bold mb-4">
                International print sizes (UK, EU &amp; Scandinavia)
              </h2>
              <p className="text-muted-foreground mb-5">
                Adding ISO A-series sizes opens your shop to UK and European buyers who shop in millimetres and own standard European frames. 50×70 cm is the standard Scandinavian poster size — extremely common in Nordic home décor.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="text-left py-3 pr-4 font-semibold">Size</th>
                      <th scope="col" className="text-left py-3 pr-4 font-semibold">mm</th>
                      <th scope="col" className="text-left py-3 pr-4 font-semibold">Pixels (300 DPI)</th>
                      <th scope="col" className="text-left py-3 font-semibold">US equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "A4", mm: "210×297 mm", px: "2480×3508 px", eq: "≈ 8×11" },
                      { size: "A3", mm: "297×420 mm", px: "3508×4961 px", eq: "≈ 11×16" },
                      { size: "A5", mm: "148×210 mm", px: "1748×2480 px", eq: "≈ 5×8" },
                      { size: "50×70 cm", mm: "500×700 mm", px: "5906×8268 px", eq: "≈ 20×28" },
                    ].map((r) => (
                      <tr key={r.size} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="py-3 pr-4 font-semibold">{r.size}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{r.mm}</td>
                        <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{r.px}</td>
                        <td className="py-3 text-muted-foreground">{r.eq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-6 p-4 rounded-lg bg-muted/40 border border-border">
                <strong>International note:</strong> Add the <strong>ISO A-series</strong> (A4, A3) to reach UK and EU buyers who shop in millimetres. A4 (2480×3508 px) is the European equivalent of US Letter and is the most-requested international size on Etsy.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>

          {/* Final CTA */}
          <div className="max-w-3xl mx-auto mb-14">
            <FinalCTA
              heading="Cover Every Popular Print Size, From One Upload"
              stat="8×10, 5×7, 11×14, 16×20, 18×24, A4, A3 and more"
              description="Stop manually resizing. Upload your artwork once and get every standard Etsy print size at 300 DPI, organized in ratio packs and ready to list."
              buttonText="Try SnapToSize Free"
              appUrl={appUrl}
            />
          </div>

          {/* Related pages */}
          <div className="mt-12">
            <RelatedPages currentSlug="most-popular-etsy-print-sizes-to-sell" />
          </div>
        </Container>
      </main>
    </>
  );
}
