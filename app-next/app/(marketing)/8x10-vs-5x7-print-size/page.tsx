import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { Check, ArrowRight, Ruler } from "lucide-react";

const CTA_URL =
  "https://app.snaptosize.com?source=seo_8x10-vs-5x7-print-size&kind=guide";

const SLUG = "8x10-vs-5x7-print-size";

export const metadata: Metadata = {
  title: "8×10 vs 5×7 Print Size: What's the Difference? (Pixels at 300 DPI)",
  description:
    "8×10 is 128% larger than 5×7 and uses a different aspect ratio (4:5 vs 5:7) — so the same file won't fit both. See exact pixel dimensions at 300 DPI and which size sells more on Etsy.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "8×10 vs 5×7 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "8×10 is 128% larger than 5×7 with a different ratio. Exact pixels at 300 DPI, ratio comparison, and Etsy selling guide.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "8×10 vs 5×7 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "8×10 is 128% larger than 5×7. Exact pixels, ratio guide, and Etsy selling advice.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
  {
    label: "5×7 (portrait)",
    inches: '5×7"',
    ratio: "5:7",
    pixels: "1500×2100",
    area: "35 sq in",
    pack: "Extras Pack",
    inPack: true,
  },
  {
    label: "5×7 (landscape)",
    inches: '7×5"',
    ratio: "7:5",
    pixels: "2100×1500",
    area: "35 sq in",
    pack: "Extras Pack",
    inPack: true,
  },
  {
    label: "8×10 (portrait)",
    inches: '8×10"',
    ratio: "4:5",
    pixels: "2400×3000",
    area: "80 sq in",
    pack: "4:5 Pack",
    inPack: true,
  },
  {
    label: "8×10 (landscape)",
    inches: '10×8"',
    ratio: "5:4",
    pixels: "3000×2400",
    area: "80 sq in",
    pack: "4:5 Pack",
    inPack: true,
  },
];

const faqs = [
  {
    question: "Is 8×10 bigger than 5×7?",
    answer:
      "Yes. An 8×10 print covers 80 square inches versus 35 square inches for a 5×7 — that's 128% more surface area. On a wall, 8×10 is a clear statement; 5×7 is compact and works well in clusters, on desks, or as gift prints.",
  },
  {
    question: "What are the pixel dimensions for 5×7 and 8×10 at 300 DPI?",
    answer:
      "At 300 DPI: a 5×7 print requires 1500×2100 pixels (portrait) or 2100×1500 pixels (landscape). An 8×10 print requires 2400×3000 pixels (portrait) or 3000×2400 pixels (landscape). Both must be exported at 300 DPI for sharp print-shop quality.",
  },
  {
    question: "Can I use the same file for both 5×7 and 8×10?",
    answer:
      "No. They have different aspect ratios: 5×7 is 5:7 (0.714) and 8×10 is 4:5 (0.800). Stretching a 5:7 file to fill an 8×10 frame will letterbox it or crop the edges. You need two separate exports at the correct pixel dimensions for each size.",
  },
  {
    question: "Which print size sells better on Etsy?",
    answer:
      "Both are strong sellers for different buyers. 8×10 is the most popular wall art size on Etsy — it fits standard IKEA and Target frames buyers already own. 5×7 sells well as gift prints, desk art, and for buyers wanting affordable statement pieces. Offering both in one listing maximises your reach.",
  },
  {
    question: "What is the aspect ratio of 5×7 and 8×10?",
    answer:
      "5×7 is a 5:7 ratio (0.714). 8×10 is a 4:5 ratio (0.800). The 5:7 ratio is slightly taller relative to its width than 4:5. These ratios look similar at a glance but are not interchangeable — you will see cropping or distortion if you use one file for both frames.",
  },
  {
    question: "Does SnapToSize export 5×7 and 8×10 files?",
    answer:
      "Yes. Upload your design once and select the Extras pack to get your 5×7 at 1500×2100 px, or the 4:5 pack to get your 8×10 at 2400×3000 px — both at 300 DPI with no cropping. You can run both packs in sequence from a single upload.",
  },
];

export default function EightByTenVsFiveBySevenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "8×10 vs 5×7 Print Size: What's the Difference, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 8×10 and 5×7 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, which sells better on Etsy, and how to export both without cropping.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
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
        name: "8×10 vs 5×7 Print Size",
        item: `https://snaptosize.com/${SLUG}`,
      },
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
      {/* JSON-LD */}
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
        className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f0fdf9 0%, #f8faff 50%, #fdf4ff 100%)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/etsy-print-sizes"
              className="hover:text-slate-600 transition-colors"
            >
              Etsy Print Sizes
            </Link>
            <span>/</span>
            <span className="text-slate-600">8×10 vs 5×7</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-xs font-semibold tracking-wide uppercase"
                style={{ background: "rgba(45,212,191,0.12)", color: "#0f766e" }}
              >
                <Ruler className="w-3.5 h-3.5" />
                Size Comparison
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                8×10 vs 5×7 Print Size:{" "}
                <span style={{ color: "#2DD4BF" }}>What&apos;s the Difference</span>{" "}
                and Which Sells More?
              </h1>

              <p
                className="text-lg text-slate-600 leading-relaxed mb-6"
                style={{ maxWidth: "42rem" }}
              >
                8×10 is 128% larger than 5×7, and they use different aspect ratios —
                so the same file won&apos;t work for both. Here are the exact pixel
                dimensions at 300 DPI, when to use each size, and how to export both
                from one upload.
              </p>

              {/* Quick answer inline */}
              <div
                className="rounded-xl p-4 mb-7"
                style={{
                  background: "rgba(45,212,191,0.06)",
                  border: "1px solid rgba(45,212,191,0.18)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#0f766e" }}>
                  Quick Answer
                </p>
                <p className="text-sm leading-relaxed text-slate-700">
                  <strong>8×10 is 128% larger than 5×7</strong> (80 vs 35 sq in). At 300 DPI:{" "}
                  <strong>5×7 = 1500×2100 px</strong>, <strong>8×10 = 2400×3000 px</strong>.
                  They have different ratios (5:7 vs 4:5) so you need separate exports — one file
                  can&apos;t serve both without cropping.
                </p>
              </div>

              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border mb-8"
                style={{
                  background: "rgba(45,212,191,0.08)",
                  borderColor: "rgba(45,212,191,0.25)",
                }}
              >
                <Check className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm">
                  Both sizes have dedicated packs in SnapToSize — export each at the
                  correct pixels in one click.
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Export Both Sizes Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: visual size comparison */}
            <div className="flex items-end justify-center gap-10 pt-8 pb-4">
              {/* 5×7 block */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "100px",
                    height: "140px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    5×7
                  </span>
                  <span className="font-mono text-xs text-slate-500 mt-2">
                    1500×2100
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    px @ 300 DPI
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-700">
                    5×7 inches
                  </div>
                  <div className="text-xs text-slate-500">35 sq in · ratio 5:7</div>
                </div>
              </div>

              {/* vs label */}
              <div className="flex flex-col items-center pb-10">
                <span className="text-slate-300 font-light text-2xl">vs</span>
              </div>

              {/* 8×10 block */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "160px",
                    height: "200px",
                    background: "rgba(45,212,191,0.08)",
                    borderColor: "rgba(45,212,191,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "#2DD4BF", color: "#fff" }}
                  >
                    8×10
                  </span>
                  <span className="font-mono text-xs text-slate-500 mt-2">
                    2400×3000
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    px @ 300 DPI
                  </span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#0f766e" }}
                  >
                    128% more area
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-700">
                    8×10 inches
                  </div>
                  <div className="text-xs text-slate-500">80 sq in · ratio 4:5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 5×7 and 8×10 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            These are the exact pixel dimensions print shops and Etsy require for sharp output. Always export at 300 DPI — lower resolution produces blurry prints.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Pixels (300 DPI)</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Ratio</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Area</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">SnapToSize</th>
                </tr>
              </thead>
              <tbody>
                {sizeTable.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    <td className="px-4 py-3 font-medium text-slate-800">
                      {row.label}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-700">
                      {row.pixels} px
                    </td>
                    <td className="px-4 py-3 text-slate-600">{row.ratio}</td>
                    <td className="px-4 py-3 text-slate-600">{row.area}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          row.inPack
                            ? "bg-teal-50 text-teal-700"
                            : "bg-purple-50 text-purple-700"
                        }`}
                      >
                        {row.inPack && <Check className="w-3 h-3" />}
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
            How Much Bigger Is 8×10 Than 5×7?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            An 8×10 print covers <strong>80 square inches</strong>, while a 5×7 covers only{" "}
            <strong>35 square inches</strong>. That means 8×10 has 128% more surface area — more
            than double the size. On a wall, that difference is impossible to miss: 5×7 reads as
            an accent piece or gift print, while 8×10 commands the space and works as a
            standalone statement.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            For Etsy sellers, the difference matters at the product level too. 5×7 buyers
            typically want affordable gift prints, greeting-card-style art, or filler pieces for
            gallery walls. 8×10 buyers are decorating — they want something that fills a frame
            and looks finished from across the room.
          </p>
        </section>

        {/* Aspect ratio section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why the Same File Won&apos;t Work for Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            5×7 and 8×10 may both look like &quot;portrait rectangles,&quot; but their aspect
            ratios are different — and that difference forces separate exports:
          </p>

          {/* Ratio comparison visual */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">5:7</div>
              <div className="text-sm text-foreground/60 mb-2">5×7 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.714</div>
              <div className="mt-3 text-xs text-foreground/50">
                Unique to 5×7 prints
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">4:5</div>
              <div className="text-sm text-foreground/60 mb-2">8×10 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.800</div>
              <div className="mt-3 text-xs text-foreground/50">
                Same as 16×20, 20×25, Instagram square
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            The gap is 0.714 vs 0.800 — significant enough that cropping a 5:7 file to fit an
            8×10 frame clips roughly 11% of the image height. For designs with text near the
            edges, borders, or tight compositions, that cropping ruins the piece.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The correct approach: export two separate files. One at <strong>1500×2100 px</strong>{" "}
            for 5×7 and one at <strong>2400×3000 px</strong> for 8×10. SnapToSize generates
            both from a single upload — no Photoshop, no manual resizing, no guessing.
          </p>
        </section>

        {/* Which sells better */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Which Size Sells Better on Etsy?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>8×10 is the most popular single print size on Etsy</strong> because it fits
            standard frames buyers already own — IKEA RIBBA, Target, Amazon basics. No mat, no
            custom framing needed. Buyers add it to their cart with confidence.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>5×7 is the top-selling size for gift prints and smaller art.</strong>{" "}
            Buyers searching for 5×7 typically want something affordable and easy to frame — a
            birthday gift, a desk piece, or a small addition to a gallery wall. The lower price
            point also reduces checkout hesitation.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The strongest Etsy listings <strong>include both sizes</strong>. A buyer browsing
            for a 5×7 gift print finds you; if they love the design, they buy the 8×10 for their
            own wall too. Two exports from one upload doubles your potential order value with no
            extra design work.
          </p>
        </section>

        {/* SnapToSize CTA block */}
        <ContextualCTA
          problem="Exporting 5×7 and 8×10 separately means two Photoshop sessions, two manual resizes, and hoping neither crops your design edges."
          solution="Upload once. SnapToSize generates both sizes at the correct pixel dimensions — no cropping, guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related pages */}
        <RelatedPages currentSlug={SLUG} />
      </main>

      <FinalCTA
        heading="Export 5×7 and 8×10 in Seconds"
        stat="1,500×2,100 px · 2,400×3,000 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
