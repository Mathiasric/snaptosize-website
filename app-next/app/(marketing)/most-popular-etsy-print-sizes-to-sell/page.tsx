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
      "8×10, 5×7, 11×14 — the sizes Etsy buyers actually purchase. A complete seller guide with aspect ratios, room-by-room sizing, and how to cover all sizes from one upload.",
    url: "https://snaptosize.com/most-popular-etsy-print-sizes-to-sell",
    type: "article",
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
      "Yes — listings with more size options appear in more searches and convert buyers who have specific frame sizes. Offering 5–8 sizes (covering 4:5, 2:3, 3:4, 5:7 ratios) captures the full range of buyer demand without overwhelming your listing.",
  },
  {
    question: "What aspect ratios cover the most popular Etsy print sizes?",
    answer:
      "Four ratios cover the top 10 best-selling Etsy print sizes: 4:5 (8×10, 16×20), 2:3 (4×6, 12×18, 20×30), 3:4 (9×12, 18×24), and 5:7. Add A4/A3 for international buyers. SnapToSize generates all of these from a single artwork upload.",
  },
  {
    question: "What is the best tool to resize artwork for all Etsy print sizes?",
    answer:
      "SnapToSize is purpose-built for Etsy sellers. Upload your artwork once and it automatically generates print-ready files at 8×10, 5×7, 11×14, 16×20, 18×24, A4, A3, and more — all at 300 DPI, correctly cropped to each ratio. No Photoshop required.",
  },
  {
    question: "Do I need to offer A4 and A3 sizes on Etsy?",
    answer:
      "If you want to sell to UK and European buyers, yes. A4 (297×210 mm) is the European equivalent of the US 8×10 frame size. Adding A4 and A3 to your listings opens your shop to international buyers who shop in millimetres and own ISO-standard frames.",
  },
];

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
      <main className="py-12 md:py-16">
        <Container>
          {/* Hero */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wide">
              Etsy Seller Guide · 2026
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Most Popular Etsy Print Sizes to Sell
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Not all print sizes sell equally. 8×10 accounts for the largest share of Etsy print sales — but if you only offer one or two sizes, you&apos;re leaving buyers (and revenue) behind. Here&apos;s exactly which sizes to offer, why they sell, and how to cover all of them without manual resizing.
            </p>

            {/* QuickAnswer */}
            <QuickAnswer question="What are the most popular Etsy print sizes to sell?">
              The top 5 most popular Etsy print sizes are: 8×10 (4:5 ratio), 5×7, 11×14, 16×20 (4:5 ratio), and 18×24 (3:4 ratio). 8×10 dominates because it fits standard frames available everywhere. Together, these 5 sizes cover the full range of buyer demand for wall art, gifts, and gallery walls.
            </QuickAnswer>
          </div>

          {/* Top 5 sizes */}
          <div className="max-w-4xl mx-auto mb-14">
            <h2 className="text-2xl font-bold mb-6">
              Top 5 Print Sizes Ranked by Popularity
            </h2>

            {/* Ratio visual blocks */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              {[
                { size: "8×10", w: 80, h: 100, color: "bg-teal-500/20 border-teal-500/40" },
                { size: "5×7", w: 70, h: 98, color: "bg-purple-500/20 border-purple-500/40" },
                { size: "11×14", w: 77, h: 98, color: "bg-emerald-500/20 border-emerald-500/40" },
                { size: "16×20", w: 80, h: 100, color: "bg-teal-500/20 border-teal-500/40" },
                { size: "18×24", w: 75, h: 100, color: "bg-amber-500/20 border-amber-500/40" },
              ].map((block) => (
                <div key={block.size} className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`border-2 rounded ${block.color} flex items-center justify-center`}
                    style={{ width: `${block.w * 0.6}px`, height: `${block.h * 0.6}px` }}
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
                    <th className="text-left py-3 pr-4 font-semibold">#</th>
                    <th className="text-left py-3 pr-4 font-semibold">Size</th>
                    <th className="text-left py-3 pr-4 font-semibold">Resolution</th>
                    <th className="text-left py-3 pr-4 font-semibold">Ratio</th>
                    <th className="text-left py-3 pr-4 font-semibold">Why it sells</th>
                    <th className="text-left py-3 font-semibold">Typical price</th>
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

          {/* Room-by-room guide */}
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl font-bold mb-4">
              Best Print Size by Room and Use Case
            </h2>
            <p className="text-muted-foreground mb-6">
              Buyers shop by room. Listing your prints in multiple sizes lets buyers find the right fit for their space — and increases the chance they purchase.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { room: "Living Room", sizes: "16×20, 18×24, 20×30", note: "Statement sizes. Buyers want impact. Price higher." },
                { room: "Bedroom", sizes: "8×10, 11×14, 5×7 sets", note: "Single focal point or gallery wall pairs." },
                { room: "Nursery / Kids Room", sizes: "5×7, 8×10, A4", note: "Smaller frames are common. Sets of 2–3 prints popular." },
                { room: "Home Office / Desk", sizes: "5×7, 4×6, 8×10", note: "Compact frames. Motivational and minimal styles." },
                { room: "Kitchen / Hallway", sizes: "5×7, 4×6, A5", note: "Small accent pieces. Often sold in matching sets." },
                { room: "Gallery Wall", sizes: "Mix of 5×7 + 8×10 + 11×14", note: "Buyers want size variety. Bundle listings convert well." },
              ].map((item) => (
                <div key={item.room} className="p-4 rounded-lg border border-border bg-card">
                  <p className="font-semibold mb-1">{item.room}</p>
                  <p className="text-sm text-accent font-medium mb-1">{item.sizes}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Loss aversion */}
          <div className="max-w-3xl mx-auto mb-14 p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <h2 className="text-xl font-bold mb-3">
              Why offering fewer sizes costs you sales
            </h2>
            <p className="text-muted-foreground mb-4">
              Etsy search shows listings that match the buyer&apos;s intent. If a buyer searches for &quot;11×14 botanical print&quot; and your listing only offers 8×10, you won&apos;t appear — even if your art is exactly what they want.
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
                <span>International buyers (UK, EU) search for A4/A3 — missing these loses a whole market segment</span>
              </li>
            </ul>
          </div>

          {/* Ratio insight */}
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl font-bold mb-4">
              All top sizes map to just 4 aspect ratios
            </h2>
            <p className="text-muted-foreground mb-6">
              You don&apos;t need a separate design file for every size. The top Etsy print sizes share only 4 aspect ratios — which means you only need 4 crops of your original artwork.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { ratio: "4:5", sizes: "8×10, 16×20", color: "border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400" },
                { ratio: "2:3", sizes: "4×6, 12×18, 20×30", color: "border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400" },
                { ratio: "3:4", sizes: "9×12, 18×24", color: "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
                { ratio: "5:7", sizes: "5×7", color: "border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400" },
              ].map((r) => (
                <div key={r.ratio} className={`p-4 rounded-lg border-2 ${r.color} text-center`}>
                  <p className="text-2xl font-bold mb-1">{r.ratio}</p>
                  <p className="text-xs font-medium opacity-80">{r.sizes}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              SnapToSize generates all sizes from a single upload — automatically cropped to each ratio, at 300 DPI, ready to attach to your Etsy listing.
            </p>
          </div>

          {/* Mid-page CTA */}
          <div className="max-w-3xl mx-auto mb-14">
            <ContextualCTA
              problem="Still resizing your artwork separately for each size?"
              solution="Upload once → SnapToSize generates 8×10, 5×7, 11×14, 16×20, 18×24, A4, A3 and more — all print-ready at 300 DPI."
              buttonText="Try Free — Generate All Sizes"
              appUrl={appUrl}
            />
          </div>

          {/* International sizes */}
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl font-bold mb-4">
              International print sizes (UK &amp; EU buyers)
            </h2>
            <p className="text-muted-foreground mb-5">
              Adding ISO A-series sizes opens your shop to UK and European buyers who shop in millimetres and own standard European frames.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold">Size</th>
                    <th className="text-left py-3 pr-4 font-semibold">mm</th>
                    <th className="text-left py-3 pr-4 font-semibold">Pixels (300 DPI)</th>
                    <th className="text-left py-3 font-semibold">US equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "A4", mm: "210×297 mm", px: "2480×3508 px", eq: "≈ 8×11" },
                    { size: "A3", mm: "297×420 mm", px: "3508×4961 px", eq: "≈ 11×16" },
                    { size: "A5", mm: "148×210 mm", px: "1748×2480 px", eq: "≈ 5×8" },
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
              heading="Cover Every Popular Print Size — From One Upload"
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
