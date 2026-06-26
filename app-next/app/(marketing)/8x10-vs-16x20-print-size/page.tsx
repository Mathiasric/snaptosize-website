import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AuthorByline } from "@/components/AuthorByline";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { ComparisonProof } from "@/components/ComparisonProof";
import { Check, ArrowRight, Ruler } from "lucide-react";

const CTA_URL =
  "https://app.snaptosize.com?source=seo_8x10-vs-16x20-print-size&kind=guide";

const SLUG = "8x10-vs-16x20-print-size";

export const metadata: Metadata = {
  title: "8×10 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
  description:
    "16×20 is exactly 4× the area of 8×10 — but they share the same 4:5 ratio, so one design covers both with no cropping. Exact pixels at 300 DPI, the 16×20 frame + 8×10 mat combo, and when to offer each.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "8×10 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "16×20 is 4× the area of 8×10 but the same 4:5 ratio — one design covers both, no cropping. Exact pixels at 300 DPI and when to offer each.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-26T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "8×10 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "16×20 is 4× the area of 8×10, same 4:5 ratio — one design covers both. Exact pixels at 300 DPI.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
  {
    label: "8×10 (portrait)",
    inches: '8×10"',
    ratio: "4:5",
    pixels: "2400×3000",
    area: "80 sq in",
    pack: "4:5 Pack",
    color: "teal",
  },
  {
    label: "8×10 (landscape)",
    inches: '10×8"',
    ratio: "5:4",
    pixels: "3000×2400",
    area: "80 sq in",
    pack: "4:5 Pack",
    color: "teal",
  },
  {
    label: "16×20 (portrait)",
    inches: '16×20"',
    ratio: "4:5",
    pixels: "4800×6000",
    area: "320 sq in",
    pack: "4:5 Pack",
    color: "purple",
  },
  {
    label: "16×20 (landscape)",
    inches: '20×16"',
    ratio: "5:4",
    pixels: "6000×4800",
    area: "320 sq in",
    pack: "4:5 Pack",
    color: "purple",
  },
];

const faqs = [
  {
    question: "Is 16×20 bigger than 8×10?",
    answer:
      "Yes, much bigger. A 16×20 print covers 320 square inches versus 80 for an 8×10 — exactly 4× the area, because 16×20 is double the width and double the height. On the wall, 8×10 is a comfortable standard frame size while 16×20 reads as a large statement piece.",
  },
  {
    question: "Do 8×10 and 16×20 use the same aspect ratio?",
    answer:
      "Yes. Both are a 4:5 ratio (0.800) — the same shape, just different scale. That is the key difference from most size comparisons: because they share a ratio, one design fits both. You can scale an 8×10 up to 16×20 (or down) with no cropping and no distortion.",
  },
  {
    question: "How many pixels is 8×10 and 16×20 at 300 DPI?",
    answer:
      "At 300 DPI, 8×10 needs 2400×3000 pixels and 16×20 needs 4800×6000 pixels (portrait). Because 16×20 is exactly double 8×10 in each dimension, design at the larger size and it scales down to 8×10 perfectly sharp.",
  },
  {
    question: "Can I use the same file for 8×10 and 16×20?",
    answer:
      "You can use the same design, but not the same exported file. They share the 4:5 ratio, so nothing is cropped, but you still want each delivered at its own pixel dimensions — 2400×3000 for 8×10 and 4800×6000 for 16×20 — so buyers print at full 300 DPI quality at either size. SnapToSize generates both from one upload.",
  },
  {
    question: "Can you put an 8×10 print in a 16×20 frame?",
    answer:
      "Yes — with a mat. A 16×20 frame with an 8×10 mat opening is a very common matted combination and gives an 8×10 print a large, gallery-style presentation. Without a mat, the 8×10 sits loose inside a 16×20 frame, so always pair it with the matching mat.",
  },
  {
    question: "Which sells better on Etsy — 8×10 or 16×20?",
    answer:
      "8×10 is the volume seller — it fits the most common frames and is the size buyers reach for first. 16×20 carries premium pricing as a statement piece and anchors gallery walls. Since they share the 4:5 ratio, the strongest move is to offer both from a single design. SnapToSize exports both in the 4:5 pack from one upload.",
  },
];

export default function EightByTenVsSixteenByTwentyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "8×10 vs 16×20 Print Size: Which Is Bigger, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 8×10 and 16×20 print sizes — both 4:5 ratio, pixel dimensions at 300 DPI, the 4× area difference, the 16×20 frame and 8×10 mat combo, when to offer each on Etsy, and how to export both from one design.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
      "@type": "Organization",
      name: "The SnapToSize Team",
      url: "https://snaptosize.com",
      logo: {
        "@type": "ImageObject",
        url: "https://snaptosize.com/logo.png",
      },
    },
    image: `https://snaptosize.com/assets/og/${SLUG}.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://snaptosize.com/${SLUG}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
      { "@type": "ListItem", position: 2, name: "Etsy Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
      { "@type": "ListItem", position: 3, name: "8×10 vs 16×20 Print Size", item: `https://snaptosize.com/${SLUG}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer as string },
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
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(167,139,250,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(45,212,191,0.15) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/etsy-print-sizes" className="hover:text-slate-300 transition-colors">
              Etsy Print Sizes
            </Link>
            <span>/</span>
            <span className="text-slate-300">8×10 vs 16×20</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: "rgba(45,212,191,0.12)",
                  border: "1px solid rgba(45,212,191,0.25)",
                  color: "#2DD4BF",
                }}
              >
                <Ruler className="w-3.5 h-3.5" />
                Print Size Guide
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5">
                8×10 vs 16×20
                <span className="block mt-1 text-[#2DD4BF]">
                  Same 4:5 Ratio, 4× the Size
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                16×20 is <strong className="text-white">exactly 4× the area</strong> of an
                8×10 — but they share the{" "}
                <strong className="text-white">same 4:5 ratio</strong>, so one design covers
                both with no cropping. Offer the pair from a single upload.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "8×10 = 2400×3000 px",
                  "16×20 = 4800×6000 px",
                  "Both 4:5 at 300 DPI",
                ].map((stat) => (
                  <span
                    key={stat}
                    className="inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#94a3b8",
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <Button
                href={CTA_URL}
                variant="primary"
                className="group inline-flex items-center gap-2"
              >
                Export Both Sizes Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>

            {/* Right: proportional size visual — same shape, 16×20 larger, visible on mobile */}
            <div className="flex items-end justify-center gap-6 sm:gap-10">
              {/* 8×10 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "128px",
                    height: "160px",
                    background: "rgba(45,212,191,0.08)",
                    borderColor: "rgba(45,212,191,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#2DD4BF", color: "#fff" }}
                  >
                    8×10
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">2400×3000</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#0f766e" }}
                  >
                    ratio 4:5
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">8×10 inches</div>
                  <div className="text-xs text-slate-500">80 sq in · standard</div>
                </div>
              </div>

              {/* 16×20 — same shape, larger */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "176px",
                    height: "220px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    16×20
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">4800×6000</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    ratio 4:5
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">16×20 inches</div>
                  <div className="text-xs text-slate-500">320 sq in · statement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between 8×10 and 16×20 print size?">
          <strong>16×20</strong> is a 4:5 ratio (4800×6000 px at 300 DPI) covering 320 square
          inches. <strong>8×10</strong> is the same 4:5 ratio (2400×3000 px at 300 DPI)
          covering 80 square inches. 16×20 is exactly 4× the area, but the identical shape —
          so one design covers both with no cropping. Generate 8×10 and 16×20 from one upload
          with{" "}
          <Link href="/" className="text-accent-light hover:underline">
            SnapToSize
          </Link>
          , free and no signup.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 26, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 8×10 and 16×20 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            Exact pixel dimensions print shops and home printers need for sharp output.
            Always export at 300 DPI so the print stays crisp once it is framed.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Pixels (300 DPI)</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Ratio</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Area</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">SnapToSize</th>
                </tr>
              </thead>
              <tbody>
                {sizeTable.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 font-medium text-slate-800">{row.label}</td>
                    <td className="px-4 py-3 font-mono text-slate-700">{row.pixels} px</td>
                    <td className="px-4 py-3 text-slate-600">{row.ratio}</td>
                    <td className="px-4 py-3 text-slate-600">{row.area}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          row.color === "teal"
                            ? "bg-teal-50 text-teal-700"
                            : "bg-purple-50 text-purple-700"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                        {row.pack}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Size difference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            How Much Bigger Is 16×20 Than 8×10?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            A 16×20 print covers <strong>320 square inches</strong>, while an 8×10 covers{" "}
            <strong>80 square inches</strong> — <strong>exactly 4× the area</strong>. That is
            because 16×20 is double the width and double the height of 8×10. Doubling each side
            quadruples the surface, which is why the jump feels so dramatic on the wall.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            8×10 is the everyday standard that fits the most frames; 16×20 is the same image
            blown up into a statement piece. Buyers often want the small size for a shelf or
            gallery wall and the large size as a focal point, so the two pair naturally in one
            listing.
          </p>
        </section>

        {/* Same-ratio section — the core, positive education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Same Ratio: One Design Covers Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            This is the part most size comparisons get to complain about — but here it is good
            news. 8×10 and 16×20 share the exact same{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratio
            </Link>
            :
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">4:5</div>
              <div className="text-sm text-foreground/60 mb-2">8×10 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.800</div>
              <div className="mt-3 text-xs text-foreground/50">
                Standard frame · 2400×3000 px
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">4:5</div>
              <div className="text-sm text-foreground/60 mb-2">16×20 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.800</div>
              <div className="mt-3 text-xs text-foreground/50">
                Statement frame · 4800×6000 px
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            Because the ratio is identical, a single design fills both sizes with{" "}
            <strong>no cropping and no white bars</strong>. Scaling an 8×10 up to 16×20 (or
            down) keeps the whole composition exactly as you designed it — the same 4:5 family
            also covers{" "}
            <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">
              other 4:5 sizes
            </Link>{" "}
            like 20×25 and 24×30.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            The one thing to get right: deliver each at its own pixel dimensions —{" "}
            <strong>2400×3000 px</strong> for 8×10 and <strong>4800×6000 px</strong> for 16×20 —
            so buyers print at full 300 DPI at either size. SnapToSize generates both from a
            single upload, no Photoshop, no manual resizing.
          </p>
        </section>

        {/* Real output proof — homepage two-mode framing */}
        <ComparisonProof
          subject="Misty Nordic art"
          a={{ src: "/assets/modes-demo/ratios/misty-4x5.jpg", label: "8×10", px: "2400 × 3000", ratio: "4:5", aspect: "4/5", h: "h-32 sm:h-40" }}
          b={{ src: "/assets/modes-demo/ratios/misty-4x5.jpg", label: "16×20", px: "4800 × 6000", ratio: "4:5", aspect: "4/5", h: "h-44 sm:h-56" }}
        />

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Even when 8×10 and 16×20 share a ratio, you still need each exported at its own pixel dimensions — and a 16×20 at 300 DPI is a big file to keep under Etsy's limit."
          solution="Upload once. SnapToSize generates 8×10 and 16×20 from the same design at the correct pixel dimensions and 300 DPI — no cropping, guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* The frame + mat combo — high-intent real-world question */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Put an 8×10 Print in a 16×20 Frame?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes, and it is one of the most popular framing setups: a{" "}
            <strong>16×20 frame with an 8×10 mat opening</strong>. The wide mat border turns a
            small print into a gallery-grade piece, and the exact combination is stocked at
            IKEA, Michaels, and Amazon. If you sell 8×10 art, mentioning this option in your
            listing answers a question buyers ask constantly.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Without a mat, an 8×10 print floats loose inside a 16×20 frame, so always pair it
            with the matching mat. A 16×20 print, of course, does not fit an 8×10 frame at all.
            For framing details across common sizes, see the{" "}
            <Link href="/print-size-for-frame-guide" className="text-accent-light hover:underline">
              print size for frame guide
            </Link>
            .
          </p>
        </section>

        {/* When to offer each on Etsy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            When to Offer Each Size on Etsy
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">
                8×10
              </Link>{" "}
              is the volume seller.
            </strong>{" "}
            It fits the most common photo frames, sits at an easy price point, and is the size
            most buyers search for first. For almost any art listing, 8×10 is non-negotiable.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">
                16×20
              </Link>{" "}
              is the statement upgrade.
            </strong>{" "}
            Same design, four times the presence — it anchors a wall and carries premium pricing.
            Buyers who love your 8×10 will often want the 16×20 to match.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>Offer both from one design</strong> and you capture the whole range — the
            shelf print and the focal piece — with zero extra work, since the shared 4:5 ratio
            means no separate redesign.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        <RelatedPages currentSlug={SLUG} />
      </main>

      <FinalCTA
        heading="Export 8×10 and 16×20 in Seconds"
        stat="2,400×3,000 px · 4,800×6,000 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI — same 4:5 ratio, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
