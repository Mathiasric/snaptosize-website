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
  "https://app.snaptosize.com?source=seo_8x10-vs-12x16-print-size&kind=guide";

const SLUG = "8x10-vs-12x16-print-size";

export const metadata: Metadata = {
  title: "8×10 vs 12×16 Print Size: What's the Difference? (Pixels at 300 DPI)",
  description:
    "8×10 is 4:5; 12×16 is a taller 3:4. They're different ratios, so one file won't fit both — and 12×16 is 2.4× the area. Exact pixels at 300 DPI, frame and mat combos, and when to offer each.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "8×10 vs 12×16 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "8×10 (4:5) vs 12×16 (3:4) — different ratios, so one file won't fit both. 12×16 is 2.4× the area. Exact pixels at 300 DPI and when to offer each.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-26T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "8×10 vs 12×16 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "8×10 (4:5) vs 12×16 (3:4) — different ratios, 12×16 is 2.4× bigger. Exact pixels at 300 DPI.",
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
    label: "12×16 (portrait)",
    inches: '12×16"',
    ratio: "3:4",
    pixels: "3600×4800",
    area: "192 sq in",
    pack: "3:4 Pack",
    color: "purple",
  },
  {
    label: "12×16 (landscape)",
    inches: '16×12"',
    ratio: "4:3",
    pixels: "4800×3600",
    area: "192 sq in",
    pack: "3:4 Pack",
    color: "purple",
  },
];

const faqs = [
  {
    question: "Is 12×16 bigger than 8×10?",
    answer:
      "Yes, considerably. A 12×16 print covers 192 square inches versus 80 for an 8×10 — about 2.4× the area. 12×16 is also a different shape: it is taller in proportion, so it reads as a larger, more poster-like piece while 8×10 fits standard photo frames.",
  },
  {
    question: "What is the aspect ratio of 8×10 and 12×16?",
    answer:
      "8×10 is a 4:5 ratio (0.800). 12×16 is a 3:4 ratio (0.750). They are different proportions — 12×16 is taller and narrower relative to its width — which is why a file built for one shows white bars or needs a crop in the other. They are not interchangeable.",
  },
  {
    question: "How many pixels is 8×10 and 12×16 at 300 DPI?",
    answer:
      "At 300 DPI, 8×10 needs 2400×3000 pixels and 12×16 needs 3600×4800 pixels (portrait). 300 DPI is the standard for sharp prints at both sizes; printing below it shows softness once the piece is framed.",
  },
  {
    question: "Can I scale my 8×10 design up to 12×16?",
    answer:
      "Not cleanly. Because the ratios differ (4:5 vs 3:4), a straight scale leaves white bars and stretching distorts the artwork. Export each at its own ratio, or use a controlled, distortion-free crop to 3:4 when you specifically want the 12×16 from 8×10-ratio art.",
  },
  {
    question: "Can you put an 8×10 print in a 12×16 frame?",
    answer:
      "Yes, with a mat. A 12×16 frame with an 8×10 mat opening bridges the gap and gives the print a clean bordered look. Without a mat, an 8×10 sits loose inside a 12×16 frame, so always include the matching mat. A 12×16 print will not fit an 8×10 frame.",
  },
  {
    question: "Which sells better on Etsy — 8×10 or 12×16?",
    answer:
      "8×10 is the dependable volume seller that fits the most frames. 12×16 wins for art designed at 3:4 (the same family as 18×24) and for buyers who want a larger, more poster-like piece. They suit different needs, so many listings offer both. SnapToSize generates 8×10 in the 4:5 pack and 12×16 in the 3:4 pack from one upload.",
  },
];

export default function EightByTenVsTwelveBySixteenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "8×10 vs 12×16 Print Size: What's the Difference, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 8×10 and 12×16 print sizes — pixel dimensions at 300 DPI, aspect ratios (4:5 vs 3:4), area difference, frame and mat combos, when to offer each on Etsy, and how to export both without cropping.",
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
      { "@type": "ListItem", position: 3, name: "8×10 vs 12×16 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
            <span className="text-slate-300">8×10 vs 12×16</span>
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
                8×10 vs 12×16
                <span className="block mt-1 text-[#2DD4BF]">
                  Standard Frame vs Taller Print
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                12×16 is <strong className="text-white">2.4× the area</strong> of an 8×10 and a
                taller <strong className="text-white">3:4 shape</strong> versus 8×10&apos;s 4:5
                — so one file won&apos;t fit both without white bars or a crop.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "8×10 = 2400×3000 px",
                  "12×16 = 3600×4800 px",
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
              {/* 8×10 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "144px",
                    height: "180px",
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

              {/* 12×16 — taller, bigger */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "162px",
                    height: "216px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    12×16
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">3600×4800</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    ratio 3:4
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">12×16 inches</div>
                  <div className="text-xs text-slate-500">192 sq in · larger</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between 8×10 and 12×16 print size?">
          <strong>8×10</strong> is a 4:5 ratio (2400×3000 px at 300 DPI) covering 80 square
          inches — the standard frame size. <strong>12×16</strong> is a taller 3:4 ratio
          (3600×4800 px at 300 DPI) covering 192 square inches — about 2.4× the area. The
          ratios differ, so one file won&apos;t fill both cleanly. Generate 8×10 (4:5 pack) and
          12×16 (3:4 pack) from one upload with{" "}
          <Link href="/" className="text-accent-light hover:underline">
            SnapToSize
          </Link>
          , free and no signup.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 26, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 8×10 and 12×16 at 300 DPI
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
            How Much Bigger Is 12×16 Than 8×10?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            A 12×16 print covers <strong>192 square inches</strong>, while an 8×10 covers{" "}
            <strong>80 square inches</strong> — about <strong>2.4× the area</strong>. It is a
            real step up in presence, and because 12×16 is proportionally taller, it fills more
            vertical space on a wall than the jump in inches suggests.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            8×10 is the everyday frame size; 12×16 is the larger, more dramatic option for art
            that benefits from height. Buyers often pick by the wall they are filling, so the
            two serve different spaces rather than competing.
          </p>
        </section>

        {/* Ratio section — the core education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why One File Won&apos;t Fit Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            8×10 and 12×16 are not just different sizes — their{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratios
            </Link>{" "}
            are different too, which forces separate exports:
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
                Standard frame · same as 16×20, 20×25
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">3:4</div>
              <div className="text-sm text-foreground/60 mb-2">12×16 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.750</div>
              <div className="mt-3 text-xs text-foreground/50">
                Taller format · same as 6×8, 18×24
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            Scale an 8×10 design to fill a 12×16 and the top and bottom either show white bars or
            the image stretches taller and distorts. Keep each at its own ratio — and when you
            specifically need 12×16 from artwork built at 4:5, a{" "}
            <Link href="/distortion-free-crop" className="text-accent-light hover:underline">
              Perfect Fit
            </Link>{" "}
            crop reframes it to 3:4 without stretching, with you choosing what stays in frame.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            The clean approach: export <strong>2400×3000 px</strong> for 8×10 and{" "}
            <strong>3600×4800 px</strong> for 12×16. SnapToSize generates both from a single
            upload — no Photoshop, no manual resizing, no guessing which edge to crop.
          </p>
        </section>

        {/* Real output proof — homepage two-mode framing */}
        <ComparisonProof
          subject="Misty Nordic art"
          a={{ src: "/assets/modes-demo/ratios/misty-4x5.jpg", label: "8×10", px: "2400 × 3000", ratio: "4:5", aspect: "4/5", h: "h-32 sm:h-40" }}
          b={{ src: "/assets/modes-demo/ratios/misty-3x4.jpg", label: "12×16", px: "3600 × 4800", ratio: "3:4", aspect: "3/4", h: "h-44 sm:h-56" }}
        />

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Offering 8×10 and 12×16 means two ratios, two exports, and double-checking you didn't crop the edges on either one."
          solution="Upload once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI, each ratio handled — guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* The frame + mat combo — high-intent real-world question */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Put an 8×10 Print in a 12×16 Frame?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes — with a mat. A <strong>12×16 frame with an 8×10 mat opening</strong> closes the
            gap and frames the print with a clean border, giving an 8×10 a larger footprint.
            Without a mat, an 8×10 print sits loose inside a 12×16 frame, so always include the
            matching mat.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The reverse does not work: a 12×16 print is too large for an 8×10 frame and would
            have to be cropped down. For framing details across common sizes, see the{" "}
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
            It fits the most common photo frames and is the size most buyers search for first.
            For almost any art listing in the 4:5 family, 8×10 is essential.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-12x16-print-size" className="text-accent-light hover:underline">
                12×16
              </Link>{" "}
              serves the 3:4 crowd.
            </strong>{" "}
            It is the right size for art designed at 3:4 (the same family as 18×24) and for
            buyers who want a larger, taller piece with more drama.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>Offer both and one listing covers both ratios</strong> — the 4:5 buyer and
            the 3:4 buyer — from a single upload, with no extra design work.
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
        heading="Export 8×10 and 12×16 in Seconds"
        stat="2,400×3,000 px · 3,600×4,800 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
