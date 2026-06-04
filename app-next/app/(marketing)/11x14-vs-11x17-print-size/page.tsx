import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AuthorByline } from "@/components/AuthorByline";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { Check, ArrowRight } from "lucide-react";

const CTA_URL =
  "https://app.snaptosize.com?source=seo_11x14-vs-11x17-print-size&kind=guide";

const SLUG = "11x14-vs-11x17-print-size";

export const metadata: Metadata = {
  title: "11×14 vs 11×17 Print Size: Exact Pixels, Ratio & Etsy Guide (2026)",
  description:
    "11×14 and 11×17 are both 11 inches wide — but 11×17 is 3 inches taller and 21% larger. At 300 DPI: 11×14 = 3,300×4,200 px · 11×17 = 3,300×5,100 px. Frame guide, ratio breakdown, and Etsy tips.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "11×14 vs 11×17 Print Size: Pixels, Ratios & Etsy Guide (2026)",
    description:
      "11×14 and 11×17 share the same 11-inch width — but 11×17 is a poster format, not a standard photo frame size. Full pixel comparison at 300 DPI with frame guide and Etsy seller tips.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "11×14 vs 11×17 Print Size: Pixels, Ratios & Etsy Guide (2026)",
    description:
      "11×14 = 3,300×4,200 px · 11×17 = 3,300×5,100 px. Same width, very different use cases. Full comparison for Etsy print sellers.",
  },
};

export default function ElevenByFourteenVsElevenBySeventeenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "11×14 vs 11×17 Print Size: Exact Pixels, Ratio Difference & Etsy Guide",
    description:
      "Complete comparison of 11×14 and 11×17 print sizes with pixel dimensions at 300 DPI, ratio differences, frame size guide, and Etsy seller tips.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
      logo: {
        "@type": "ImageObject",
        url: "https://snaptosize.com/logo.png",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
      { "@type": "ListItem", position: 2, name: "Etsy Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
      { "@type": "ListItem", position: 3, name: "11×14 vs 11×17", item: `https://snaptosize.com/${SLUG}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between 11×14 and 11×17 print size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both are 11 inches wide, but 11×17 is 3 inches taller (21% more area). At 300 DPI: 11×14 = 3,300×4,200 px (154 sq in) and 11×17 = 3,300×5,100 px (187 sq in). 11×14 fits standard photo frames; 11×17 is a poster/tabloid format requiring a dedicated poster frame.",
        },
      },
      {
        "@type": "Question",
        name: "Is 11×17 the same as tabloid paper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 11×17 inches is the US Tabloid paper size (also called Ledger when landscape). It is a standard print shop paper size, which makes 11×17 prints affordable and widely available to produce.",
        },
      },
      {
        "@type": "Question",
        name: "What frame size fits an 11×14 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard 11×14 photo frame — widely available at IKEA, Target, and Amazon. Note that many 11×14 frames include a mat with a smaller opening (often 8×10). Buy a frame without a mat, or one with an 11×14 opening, to display the full print.",
        },
      },
      {
        "@type": "Question",
        name: "What frame size fits an 11×17 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An 11×17 print requires a dedicated poster frame, not a standard photo frame. Look for '11×17 poster frames' or 'tabloid frames'. These are less common in physical retail stores but widely available online.",
        },
      },
      {
        "@type": "Question",
        name: "Can you print an 11×14 design on 11×17 paper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but the design won't fill the sheet — you'll have approximately 1.5 inches of white space on top and bottom. This works if buyers know to trim, but it's not ideal for a seamless print experience. For best results, provide separate files at the correct dimensions for each size.",
        },
      },
      {
        "@type": "Question",
        name: "Does SnapToSize export both 11×14 and 11×17?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Both sizes are included in SnapToSize's Extras exports — generated from a single upload at 300 DPI, correctly sized, and under Etsy's 20 MB file limit. No Photoshop or manual resizing needed.",
        },
      },
    ],
  };

  const sizeTable = [
    {
      label: "11×14 in",
      pixels: "3,300 × 4,200",
      ratio: "11:14 (≈ 4:5)",
      area: "154 sq in",
      pack: "Extras",
      highlight: true,
    },
    {
      label: "11×17 in",
      pixels: "3,300 × 5,100",
      ratio: "11:17 (≈ 2:3)",
      area: "187 sq in",
      pack: "Extras",
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "What is the difference between 11×14 and 11×17 print size?",
      answer:
        "Both are 11 inches wide, but 11×17 is 3 inches taller — 21% more total area. At 300 DPI: 11×14 = 3,300×4,200 px (154 sq in); 11×17 = 3,300×5,100 px (187 sq in). 11×14 fits standard large photo frames; 11×17 is a poster/tabloid size requiring a dedicated poster frame.",
    },
    {
      question: "Is 11×17 the same as tabloid paper?",
      answer:
        "Yes — 11×17 inches is the US Tabloid paper size (also called Ledger in landscape orientation). It's a standard print shop paper size, which is why 11×17 prints are affordable to produce and widely supported at print shops like FedEx, Staples, and local printers.",
    },
    {
      question: "What frame size fits an 11×14 print?",
      answer:
        "A standard 11×14 photo frame — widely available at IKEA, Target, Walmart, and Amazon. Many 11×14 frames include a mat with a smaller opening (often 8×10 mat). To display the full 11×14 print, buy a frame without a mat or with a full 11×14 opening.",
    },
    {
      question: "What frame size fits an 11×17 print?",
      answer:
        "An 11×17 print requires a dedicated poster frame. Look for '11×17 poster frames' or 'tabloid frames' — these aren't as common in physical stores as standard photo frame sizes, but are widely available online. Standard poster frames (11×17, 12×18, 18×24) all work well for this format.",
    },
    {
      question: "Can I print an 11×14 design on 11×17 paper?",
      answer:
        "Yes, but the 11×14 design won't fill an 11×17 sheet — you'll get roughly 1.5 inches of blank space on the top and bottom. The image prints at full resolution but sits centered on the larger sheet. This works if buyers know to trim the paper, but providing separate 11×14 and 11×17 files gives buyers a better experience.",
    },
    {
      question: "Does SnapToSize export both 11×14 and 11×17?",
      answer:
        "Yes. Both sizes are included automatically in SnapToSize's Extras exports — generated from a single upload at 300 DPI, correctly sized, and under Etsy's 20 MB per-file limit. No Photoshop, no manual resizing, no guessing at pixel counts.",
    },
  ];

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
            "linear-gradient(135deg, #0f172a 0%, #1a1030 50%, #0f172a 100%)",
        }}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Ambient glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 25% 60%, rgba(45,212,191,0.12) 0%, transparent 50%), radial-gradient(circle at 75% 40%, rgba(167,139,250,0.12) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/etsy-print-sizes" className="hover:text-slate-300 transition-colors">Etsy Print Sizes</Link>
            <span>/</span>
            <span className="text-slate-300">11×14 vs 11×17</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              {/* Category badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: "rgba(45,212,191,0.12)",
                  border: "1px solid rgba(45,212,191,0.25)",
                  color: "#2DD4BF",
                }}
              >
                Size Comparison · Etsy Print Sizes
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
                11×14 vs 11×17{" "}
                <span className="text-slate-400">Print Size</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                Same 11-inch width — but 11×17 is 3 inches taller and 21% larger.
                One fits a photo frame. The other needs a poster frame. Here&apos;s the
                full breakdown with exact pixel dimensions at 300 DPI.
              </p>

              {/* Stats chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "11×14 = 3,300×4,200 px",
                  "11×17 = 3,300×5,100 px",
                  "Both at 300 DPI",
                ].map((stat) => (
                  <span
                    key={stat}
                    className="inline-flex items-center text-sm font-mono px-3 py-1.5 rounded-lg"
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

            {/* Right: proportional size visual */}
            <div className="hidden md:flex items-end justify-center gap-12">
              {/* 11×14 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "110px",
                    height: "140px",
                    background: "rgba(45,212,191,0.08)",
                    borderColor: "rgba(45,212,191,0.4)",
                  }}
                >
                  <span className="text-2xl font-bold text-teal-400">11×14</span>
                  <span className="text-xs text-slate-500 mt-1">photo frame</span>
                  {/* Corner markers */}
                  {[
                    "top-1.5 left-1.5",
                    "top-1.5 right-1.5",
                    "bottom-1.5 left-1.5",
                    "bottom-1.5 right-1.5",
                  ].map((pos) => (
                    <div
                      key={pos}
                      className={`absolute ${pos} w-2 h-2 rounded-sm`}
                      style={{ background: "rgba(45,212,191,0.5)" }}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">11×14 inches</div>
                  <div className="text-xs text-slate-500">154 sq in · photo mat</div>
                </div>
              </div>

              {/* 11×17 — taller */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "110px",
                    height: "170px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span className="text-2xl font-bold text-purple-400">11×17</span>
                  <span className="text-xs text-slate-500 mt-1">poster frame</span>
                  {[
                    "top-1.5 left-1.5",
                    "top-1.5 right-1.5",
                    "bottom-1.5 left-1.5",
                    "bottom-1.5 right-1.5",
                  ].map((pos) => (
                    <div
                      key={pos}
                      className={`absolute ${pos} w-2 h-2 rounded-sm`}
                      style={{ background: "rgba(167,139,250,0.5)" }}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">11×17 inches</div>
                  <div className="text-xs text-slate-500">187 sq in · tabloid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between 11×14 and 11×17 print size?">
          <strong>Both are 11 inches wide</strong>, but 11×17 is 3 inches taller (21% more area).
          At 300 DPI: <strong>11×14 = 3,300×4,200 px</strong> (154 sq in) and{" "}
          <strong>11×17 = 3,300×5,100 px</strong> (187 sq in). 11×14 fits standard large photo
          frames; 11×17 is US Tabloid — a poster format requiring a dedicated poster frame.
          They are different ratios (11:14 vs 11:17), so a design made for one will not
          fill the other without cropping or white space.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 4, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 11×14 and 11×17 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            These are the exact pixel dimensions required for sharp, print-ready output.
            Always export at 300 DPI — screen-resolution files (72–96 DPI) produce blurry
            prints regardless of file size.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Pixels (300 DPI)</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Ratio</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Area</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">SnapToSize Pack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sizeTable.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.label}</td>
                    <td className="px-4 py-3 font-mono text-slate-700">{row.pixels} px</td>
                    <td className="px-4 py-3 text-slate-600">{row.ratio}</td>
                    <td className="px-4 py-3 text-slate-600">{row.area}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                          row.highlight
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

        {/* How much bigger is 11×17? */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            How Much Bigger Is 11×17 Than 11×14?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            An 11×17 print covers <strong>187 square inches</strong>, while an 11×14 covers{" "}
            <strong>154 square inches</strong> — a difference of 33 square inches, or{" "}
            <strong>21.4% more area</strong>. In practical terms: the two prints are the same
            width held side by side, but 11×17 is noticeably taller — 3 full inches.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            At pixel level, both start at 3,300 px wide. The height difference is where
            they diverge: 4,200 px vs 5,100 px — a gap of 900 pixels at 300 DPI. That extra
            height is why 11×17 needs an entirely different frame than 11×14, and why
            a design made for one won&apos;t fill the other.
          </p>

          {/* Inline comparison strip */}
          <div
            className="rounded-xl mt-6 p-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex-1 text-center sm:text-left px-4">
              <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">11×14</div>
              <div className="font-mono text-sm text-foreground/80">3,300 × 4,200 px</div>
              <div className="text-xs text-foreground/40 mt-0.5">154 sq in</div>
            </div>
            <div
              className="shrink-0 self-center px-4 py-2 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: "rgba(45,212,191,0.12)", color: "#2DD4BF" }}
            >
              +21% taller
            </div>
            <div className="flex-1 text-center sm:text-right px-4">
              <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">11×17</div>
              <div className="font-mono text-sm text-foreground/80">3,300 × 5,100 px</div>
              <div className="text-xs text-foreground/40 mt-0.5">187 sq in</div>
            </div>
          </div>
        </section>

        {/* Ratio difference — why they need separate files */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why 11×14 and 11×17 Need Separate Files
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            11×14 has a ratio of 11:14 (close to 4:5). 11×17 has a ratio of 11:17 (close
            to 2:3). Different ratios mean a design sized for one will not fit the other
            without either <strong>cropping</strong> or leaving <strong>white space</strong>.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            If you take an 11×14 design (3,300×4,200 px) and try to use it for an 11×17
            listing, it will either be cropped at the top and bottom to fill the frame,
            or it will print with 1.5 inches of blank space on the long edges. Neither
            result is what your buyer expects from a ready-to-print file.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The correct approach: export two separate files — one at <strong>3,300×4,200 px</strong>{" "}
            for 11×14 and one at <strong>3,300×5,100 px</strong> for 11×17. SnapToSize generates
            both from a single upload — no Photoshop, no manual resizing, no pixel math.
          </p>
        </section>

        {/* When to offer each on Etsy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            When to Offer Each Size on Etsy
          </h2>

          <div className="space-y-5">
            {/* 11x14 */}
            <div
              className="rounded-xl p-5 border"
              style={{
                background: "rgba(45,212,191,0.04)",
                borderColor: "rgba(45,212,191,0.18)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: "rgba(45,212,191,0.15)", color: "#2DD4BF" }}
                >
                  14
                </div>
                <div>
                  <h3 className="font-semibold mb-1">11×14 — Standard large art print</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Best for wall art, portraits, and prints buyers will frame. 11×14 is a
                    photo mat standard — buyers can find frames at any home goods store.
                    It&apos;s the dominant large-format size for Etsy wall art listings and
                    converts well because the framing path is familiar and cheap for buyers.
                    Ratio is approximately 4:5, so it pairs naturally with 8×10 designs.
                  </p>
                </div>
              </div>
            </div>

            {/* 11x17 */}
            <div
              className="rounded-xl p-5 border"
              style={{
                background: "rgba(167,139,250,0.04)",
                borderColor: "rgba(167,139,250,0.18)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: "rgba(167,139,250,0.15)", color: "#A78BFA" }}
                >
                  17
                </div>
                <div>
                  <h3 className="font-semibold mb-1">11×17 — Poster and tabloid format</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Best for posters, quote prints designed for a tall poster frame, and
                    content that benefits from the extra vertical space — song lyrics, long
                    inspirational quotes, multi-item lists, or art with a strong vertical
                    composition. Buyers interested in 11×17 often have a specific poster
                    frame in mind. It&apos;s also a standard size at print shops (FedEx, Staples),
                    so home printing is straightforward.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-foreground/60 text-sm leading-relaxed">
              <strong className="text-foreground/80">Best practice for Etsy sellers:</strong>{" "}
              Include both sizes in your listing. A buyer looking for large wall art might
              want 11×14 to fit their existing frame, or 11×17 because they have a poster
              frame. Offering both — with clear file names — eliminates the most common
              &ldquo;do you have this in a different size?&rdquo; message and expands your
              listing&apos;s appeal at zero extra design cost.
            </p>
          </div>
        </section>

        {/* Frame guide */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Frame Size Guide: 11×14 vs 11×17
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-5">
            The frame options for these two sizes are completely different — which is the
            most practical reason they require separate print files.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Frame type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Availability</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Where to find</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-slate-800">11×14</td>
                  <td className="px-4 py-3 text-slate-700">Standard photo frame</td>
                  <td className="px-4 py-3 text-slate-600">Very common</td>
                  <td className="px-4 py-3 text-slate-600">IKEA, Target, Walmart, Amazon</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-800">11×17</td>
                  <td className="px-4 py-3 text-slate-700">Poster frame / tabloid frame</td>
                  <td className="px-4 py-3 text-slate-600">Less common in stores</td>
                  <td className="px-4 py-3 text-slate-600">Amazon, specialty frame shops</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-foreground/50 mt-3 leading-relaxed">
            Note: many 11×14 frames include a mat with an 8×10 opening. If your buyer is
            printing an 11×14 file, remind them to look for a frame with a full 11×14 opening
            or no mat — otherwise the edges of their print will be hidden.
          </p>
        </section>

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Offering 11×14 and 11×17 in your Etsy listing means two separate export workflows — different canvas sizes, different pixel counts, and hoping you didn't accidentally use the wrong one."
          solution="Upload once. SnapToSize generates both sizes at the exact pixel dimensions — 3,300×4,200 px and 3,300×5,100 px — no Photoshop, no cropping, guaranteed under 20 MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* Is 11x17 tabloid? */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Is 11×17 the Same as Tabloid Paper?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes — 11×17 inches is the US Tabloid paper size (also called{" "}
            <strong>Ledger</strong> when oriented landscape). It&apos;s a standard paper size
            at print shops nationwide, which means 11×17 prints are affordable to produce
            and support is universal at FedEx Office, Staples, Walgreens, and local printers.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            For Etsy sellers, this is actually an advantage: buyers looking for an 11×17
            print can easily take your file to any print shop and get a quality result without
            special ordering. Pair that with a clean, properly sized 3,300×5,100 px file at
            300 DPI and your buyers will rarely have printing issues.
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
        heading="Export 11×14 and 11×17 in Seconds"
        stat="3,300×4,200 px · 3,300×5,100 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions — no Photoshop, no cropping, guaranteed under 20 MB."
        appUrl={CTA_URL}
        buttonText="Export Both Sizes Free"
      />
    </>
  );
}
