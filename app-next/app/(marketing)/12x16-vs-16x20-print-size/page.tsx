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
  "https://app.snaptosize.com?source=seo_12x16-vs-16x20-print-size&kind=guide";

const SLUG = "12x16-vs-16x20-print-size";

export const metadata: Metadata = {
  title: "12×16 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
  description:
    "16×20 is 67% bigger than 12×16 (320 vs 192 sq in) and uses a different 4:5 ratio vs 12×16's 3:4. One file won't fit both. Exact pixels at 300 DPI, frame and mat combos, and when to offer each.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "12×16 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "16×20 is 67% bigger than 12×16, with a 4:5 ratio vs 3:4. Exact pixels at 300 DPI, frame and mat combos, and when to offer each.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-25T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "12×16 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "16×20 is 67% bigger than 12×16, with a 4:5 ratio vs 3:4. Exact pixels at 300 DPI and when to offer each on Etsy.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
  {
    label: "12×16 (portrait)",
    inches: '12×16"',
    ratio: "3:4",
    pixels: "3600×4800",
    area: "192 sq in",
    pack: "3:4 Pack",
    color: "teal",
  },
  {
    label: "12×16 (landscape)",
    inches: '16×12"',
    ratio: "4:3",
    pixels: "4800×3600",
    area: "192 sq in",
    pack: "3:4 Pack",
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
    question: "Is 16×20 bigger than 12×16?",
    answer:
      "Yes, clearly. A 16×20 print covers 320 square inches versus 192 for a 12×16 — that is 67% more surface area. Both are large frame sizes, but 16×20 reads as a true statement piece while 12×16 is the mid-large size that fits more walls.",
  },
  {
    question: "What is the aspect ratio of 12×16 and 16×20?",
    answer:
      "12×16 is a 3:4 ratio (0.750). 16×20 is a 4:5 ratio (0.800). They are close but not the same — 12×16 is slightly taller in proportion. Because the ratios differ, a file built for one shows white bars or needs a crop in the other; they are not interchangeable.",
  },
  {
    question: "How many pixels is 12×16 and 16×20 at 300 DPI?",
    answer:
      "At 300 DPI, 12×16 needs 3600×4800 pixels and 16×20 needs 4800×6000 pixels (portrait). 300 DPI keeps both sharp at these larger sizes; printing below it shows softness once the piece is on the wall.",
  },
  {
    question: "Can you put a 12×16 print in a 16×20 frame?",
    answer:
      "Yes — with a mat. A 16×20 frame with a 12×16 mat opening bridges the gap and gives the print a clean bordered, gallery look. Without a mat, a 12×16 print sits loose inside a 16×20 frame, so always pair it with the matching mat. A 16×20 print will not fit a 12×16 frame.",
  },
  {
    question: "Can I scale my 12×16 design up to 16×20?",
    answer:
      "Not cleanly. The ratios differ (3:4 vs 4:5), so a straight scale leaves thin white bars and stretching distorts the artwork. Export each at its own ratio, or use a controlled, distortion-free crop to 4:5 when you specifically want the 16×20 from 12×16-ratio art.",
  },
  {
    question: "Which sells better on Etsy — 12×16 or 16×20?",
    answer:
      "16×20 is the more popular large size because it shares the 4:5 ratio with the best-selling 8×10, so buyers pair them naturally. 12×16 wins for art designed at 3:4 and for buyers who want large-but-not-huge. The strongest listings offer both. SnapToSize generates 12×16 in the 3:4 pack and 16×20 in the 4:5 pack from one upload.",
  },
];

export default function TwelveBySixteenVsSixteenByTwentyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "12×16 vs 16×20 Print Size: Which Is Bigger, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 12×16 and 16×20 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, frame and mat combos, when to offer each on Etsy, and how to export both without cropping.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
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
      { "@type": "ListItem", position: 3, name: "12×16 vs 16×20 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
            <span className="text-slate-300">12×16 vs 16×20</span>
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
                12×16 vs 16×20
                <span className="block mt-1 text-[#2DD4BF]">
                  Two Big Sizes, Two Ratios
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Both are large frame sizes, but{" "}
                <strong className="text-white">16×20 is 67% bigger</strong> than a 12×16, and
                they use <strong className="text-white">different ratios</strong> (4:5 vs 3:4) —
                so one file won&apos;t fit both without white bars or a crop.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "12×16 = 3600×4800 px",
                  "16×20 = 4800×6000 px",
                  "Both at 300 DPI",
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

            {/* Right: proportional size visual — to scale, visible on mobile */}
            <div className="flex items-end justify-center gap-6 sm:gap-10">
              {/* 12×16 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "135px",
                    height: "180px",
                    background: "rgba(45,212,191,0.08)",
                    borderColor: "rgba(45,212,191,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#2DD4BF", color: "#fff" }}
                  >
                    12×16
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">3600×4800</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#0f766e" }}
                  >
                    ratio 3:4
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">12×16 inches</div>
                  <div className="text-xs text-slate-500">192 sq in · mid-large</div>
                </div>
              </div>

              {/* 16×20 — bigger */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "173px",
                    height: "216px",
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
        <QuickAnswer question="What is the difference between 12×16 and 16×20 print size?">
          <strong>16×20</strong> is a 4:5 ratio (4800×6000 px at 300 DPI) covering 320 square
          inches — 67% bigger and the standard large statement size. <strong>12×16</strong> is a
          3:4 ratio (3600×4800 px at 300 DPI) covering 192 square inches — the large-but-not-huge
          size. The ratios differ, so one file won&apos;t fill both cleanly. Generate 12×16 (3:4
          pack) and 16×20 (4:5 pack) from one upload with{" "}
          <Link href="/" className="text-accent-light hover:underline">
            SnapToSize
          </Link>
          , free and no signup.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 25, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 12×16 and 16×20 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            Exact pixel dimensions print shops and home printers need for sharp output.
            Always export at 300 DPI so a large print stays crisp once it is framed.
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
            How Much Bigger Is 16×20 Than 12×16?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            A 16×20 print covers <strong>320 square inches</strong>, while a 12×16 covers{" "}
            <strong>192 square inches</strong> — <strong>67% more surface area</strong>. On the
            wall, 16×20 anchors a space as a statement piece, while 12×16 is the large-but-easy
            size that fits more rooms without dominating them.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Because the size gap is real, buyers tend to choose by the space they have, not
            interchange the two. That makes them a natural pair to offer together: the anchor
            piece and the size that fills in around it.
          </p>
        </section>

        {/* Ratio section — the core education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why One File Won&apos;t Fit Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            12×16 and 16×20 are both large, but their{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratios
            </Link>{" "}
            are different enough to force separate exports:
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">3:4</div>
              <div className="text-sm text-foreground/60 mb-2">12×16 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.750</div>
              <div className="mt-3 text-xs text-foreground/50">
                Same as 6×8, 18×24
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
                Same as 8×10, 20×25
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            Scale a 12×16 design to fill a 16×20 and you get thin white bars on two edges; stretch
            it to fill and the artwork distorts. Keep each size at its own ratio. When you
            specifically need 16×20 from artwork built at 3:4, a{" "}
            <Link href="/distortion-free-crop" className="text-accent-light hover:underline">
              Perfect Fit
            </Link>{" "}
            crop reframes it to 4:5 without stretching — you choose what stays in frame.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            The clean approach: export <strong>3600×4800 px</strong> for 12×16 and{" "}
            <strong>4800×6000 px</strong> for 16×20. SnapToSize generates both from a single
            upload — no Photoshop, no manual resizing, no guessing which edge to crop.
          </p>
        </section>

        {/* Real output proof — homepage two-mode framing */}
        <ComparisonProof
          subject="Misty Nordic art"
          a={{ src: "/assets/modes-demo/ratios/misty-3x4.jpg", label: "12×16", px: "3600 × 4800", ratio: "3:4", aspect: "3/4", h: "h-40 sm:h-52" }}
          b={{ src: "/assets/modes-demo/ratios/misty-4x5.jpg", label: "16×20", px: "4800 × 6000", ratio: "4:5", aspect: "4/5", h: "h-44 sm:h-56" }}
        />

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Offering 12×16 and 16×20 means two canvases, two exports, and double-checking neither one cropped the edges or came out soft."
          solution="Upload once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI, each ratio handled — guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* The frame + mat combo — high-intent real-world question */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Put a 12×16 Print in a 16×20 Frame?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes — with a mat. A <strong>16×20 frame with a 12×16 mat opening</strong> closes the
            gap and frames the print with a clean border, giving a 12×16 a larger, gallery-style
            footprint. Without a mat, a 12×16 print sits loose inside a 16×20 frame, so always
            include the matching mat.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            The reverse does not work: a 16×20 print is too large for a 12×16 frame and would
            have to be cropped down. If you sell either size, naming the right frame-and-mat
            pairing in your listing answers a common buyer question and heads off
            mismatched-frame refunds. For more, see the{" "}
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
              <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">
                16×20
              </Link>{" "}
              is the popular statement size.
            </strong>{" "}
            It shares the 4:5 ratio with the best-selling 8×10, so buyers scale up within the
            same proportions and pair the two naturally. For most large-art listings, 16×20 is
            the size shoppers expect.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-12x16-print-size" className="text-accent-light hover:underline">
                12×16
              </Link>{" "}
              serves the 3:4 crowd.
            </strong>{" "}
            It is the right size for art designed at 3:4 (the same family as 18×24) and for buyers
            who want large impact in a slightly smaller, more flexible footprint.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>Offer both and one listing covers both ratios</strong> — the 4:5 buyer scaling
            up from 8×10 and the 3:4 buyer matching an 18×24 — from a single upload, no extra
            design work.
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
        heading="Export 12×16 and 16×20 in Seconds"
        stat="3,600×4,800 px · 4,800×6,000 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
