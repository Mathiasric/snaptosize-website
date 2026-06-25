import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AuthorByline } from "@/components/AuthorByline";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { Check, ArrowRight, Ruler } from "lucide-react";

const CTA_URL =
  "https://app.snaptosize.com?source=seo_11x14-vs-16x20-print-size&kind=guide";

const SLUG = "11x14-vs-16x20-print-size";

export const metadata: Metadata = {
  title: "11×14 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
  description:
    "16×20 is more than double the area of 11×14 (320 vs 154 sq in). They also use different aspect ratios, so one file won't scale to both cleanly. Exact pixels at 300 DPI, frame and mat combos, and when to offer each.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "11×14 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "16×20 is ~2× the area of 11×14, and they use different ratios. Exact pixels at 300 DPI, the 16×20 frame + 11×14 mat combo, and when to offer each.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-25T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "11×14 vs 16×20 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "16×20 is ~2× the area of 11×14, with a different aspect ratio. Exact pixels at 300 DPI and when to offer each on Etsy.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
  {
    label: "11×14 (portrait)",
    inches: '11×14"',
    ratio: "11:14",
    pixels: "3300×4200",
    area: "154 sq in",
    pack: "Extras Pack",
    color: "purple",
  },
  {
    label: "11×14 (landscape)",
    inches: '14×11"',
    ratio: "14:11",
    pixels: "4200×3300",
    area: "154 sq in",
    pack: "Extras Pack",
    color: "purple",
  },
  {
    label: "16×20 (portrait)",
    inches: '16×20"',
    ratio: "4:5",
    pixels: "4800×6000",
    area: "320 sq in",
    pack: "4:5 Pack",
    color: "teal",
  },
  {
    label: "16×20 (landscape)",
    inches: '20×16"',
    ratio: "5:4",
    pixels: "6000×4800",
    area: "320 sq in",
    pack: "4:5 Pack",
    color: "teal",
  },
];

const faqs = [
  {
    question: "Is 16×20 bigger than 11×14?",
    answer:
      "Yes, substantially. A 16×20 print covers 320 square inches versus 154 square inches for an 11×14 — that is 108% more surface area, just over double. On the wall, 16×20 reads as a statement piece while 11×14 is a comfortable mid-size. Both are standard frame sizes stocked at IKEA, Target, Michaels, and Amazon.",
  },
  {
    question: "What is the aspect ratio of 11×14 and 16×20?",
    answer:
      "11×14 is an 11:14 ratio (0.786). 16×20 is a 4:5 ratio (0.800). They sit close together, but they are not the same — a file built for one will not fill the other exactly. Scaling 11×14 artwork to 16×20 leaves thin white bars, and 16×20 art forced into 11×14 needs a crop.",
  },
  {
    question: "How many pixels is 11×14 and 16×20 at 300 DPI?",
    answer:
      "At 300 DPI, 11×14 needs 3300×4200 pixels (portrait) or 4200×3300 (landscape). 16×20 needs 4800×6000 pixels (portrait) or 6000×4800 (landscape). 300 DPI is the standard for sharp prints at these sizes — anything lower looks soft once framed.",
  },
  {
    question: "Can you put an 11×14 print in a 16×20 frame?",
    answer:
      "Yes — with a mat. A 16×20 frame with an 11×14 mat opening is one of the most common matted combinations sold, and it gives the print a gallery look with a clean border. Without a mat, an 11×14 print sits loose inside a 16×20 frame, so always pair it with the matching mat.",
  },
  {
    question: "Can I scale my 11×14 design up to 16×20?",
    answer:
      "Not cleanly. Because the ratios differ (11:14 vs 4:5), a straight scale leaves thin white bars, and stretching to fill distorts the artwork. The clean options are to export each at its own ratio, or use a controlled, distortion-free crop to 4:5 when you specifically want the 16×20. Either way, design once and let the tool handle the geometry.",
  },
  {
    question: "Which sells better on Etsy — 11×14 or 16×20?",
    answer:
      "16×20 commands higher pricing as a statement piece and anchors gallery walls, while 11×14 is the accessible mid-size buyers add to fill a wall. They serve different moments, so the strongest listings offer both. SnapToSize generates 16×20 in the 4:5 pack and 11×14 in the Extras pack from a single upload.",
  },
];

export default function ElevenByFourteenVsSixteenByTwentyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "11×14 vs 16×20 Print Size: Which Is Bigger, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 11×14 and 16×20 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, the 16×20 frame and 11×14 mat combo, when to offer each on Etsy, and how to export both without cropping.",
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
      { "@type": "ListItem", position: 3, name: "11×14 vs 16×20 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
            <span className="text-slate-300">11×14 vs 16×20</span>
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
                11×14 vs 16×20
                <span
                  className="block mt-1"
                  style={{
                    background: "linear-gradient(90deg, #2DD4BF, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Mid-Size vs Statement Piece
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Both are standard frame sizes, but{" "}
                <strong className="text-white">16×20 is just over double the area</strong>{" "}
                of an 11×14, and they use{" "}
                <strong className="text-white">different aspect ratios</strong> — so one
                file won&apos;t scale to both without white bars or a crop.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "11×14 = 3300×4200 px",
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
              {/* 11×14 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "132px",
                    height: "168px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    11×14
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">3300×4200</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    ratio 11:14
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">11×14 inches</div>
                  <div className="text-xs text-slate-500">154 sq in · mid-size</div>
                </div>
              </div>

              {/* 16×20 — larger */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "168px",
                    height: "210px",
                    background: "rgba(45,212,191,0.08)",
                    borderColor: "rgba(45,212,191,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#2DD4BF", color: "#fff" }}
                  >
                    16×20
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">4800×6000</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#0f766e" }}
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
        <QuickAnswer question="What is the difference between 11×14 and 16×20 print size?">
          <strong>16×20</strong> is a 4:5 ratio (4800×6000 px at 300 DPI) and covers 320
          square inches — a statement piece. <strong>11×14</strong> is an 11:14 ratio
          (3300×4200 px at 300 DPI) and covers 154 square inches — a mid-size. 16×20 is
          just over double the area, and the two ratios differ, so one file won&apos;t fill
          both cleanly. Generate 16×20 (4:5 pack) and 11×14 (Extras pack) from one upload
          with{" "}
          <Link href="/" className="text-accent-light hover:underline">
            SnapToSize
          </Link>
          , free and no signup.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 25, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 11×14 and 16×20 at 300 DPI
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
            How Much Bigger Is 16×20 Than 11×14?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            A 16×20 print covers <strong>320 square inches</strong>, while an 11×14 covers{" "}
            <strong>154 square inches</strong> — that is <strong>108% more surface area</strong>,
            just over double. Unlike sizes that are a hair apart, this is a real jump you can see
            across a room: 16×20 anchors a wall, 11×14 fills in around it.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Because the gap is this large, buyers rarely treat them as substitutes. They pick
            16×20 when they want a single focal piece, and 11×14 when they are building out a
            gallery wall or matching an existing frame. Offering both lets one listing serve
            both intents.
          </p>
        </section>

        {/* Ratio section — the core education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why One File Won&apos;t Fill Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            11×14 and 16×20 sit close together, but their{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratios
            </Link>{" "}
            are not identical — and that small gap is enough to force separate exports:
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">11:14</div>
              <div className="text-sm text-foreground/60 mb-2">11×14 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.786</div>
              <div className="mt-3 text-xs text-foreground/50">
                Standard mid-size frame · gallery walls
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">4:5</div>
              <div className="text-sm text-foreground/60 mb-2">16×20 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.800</div>
              <div className="mt-3 text-xs text-foreground/50">
                Statement frame · same as 8×10, 20×25
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            Scale an 11×14 design up to fill a 16×20 and you get thin white bars on two edges;
            stretch it to fill and the artwork distorts. The fix is to keep each size at its own
            ratio. When you specifically need 16×20 from artwork built at the 11×14 ratio, a{" "}
            <Link href="/distortion-free-crop" className="text-accent-light hover:underline">
              Perfect Fit
            </Link>{" "}
            crop reframes it to 4:5 without stretching — you choose what stays in frame, and
            nothing gets squashed.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            The clean approach: export <strong>3300×4200 px</strong> for 11×14 and{" "}
            <strong>4800×6000 px</strong> for 16×20. SnapToSize generates both from a single
            upload — no Photoshop, no manual resizing, no guessing which edge to crop.
          </p>
        </section>

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Offering 11×14 and 16×20 means two canvases, two exports, and double-checking you didn't crop the edges on either one."
          solution="Upload once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI — no cropping, guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* The frame + mat combo — high-intent real-world question */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Put an 11×14 Print in a 16×20 Frame?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes, and it is one of the most popular framing setups: a{" "}
            <strong>16×20 frame with an 11×14 mat opening</strong>. The mat fills the gap
            between the print and the frame, adds a clean white border, and gives an 11×14 print
            a gallery-grade presentation. Frame shops and IKEA, Michaels, and Amazon all stock
            this exact mat-and-frame combination.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Without a mat, an 11×14 print sits loose inside a 16×20 frame and shifts around, so
            always pair the print with the matching mat. If you sell 11×14 art, mentioning the
            16×20-frame-plus-11×14-mat option in your listing answers a question buyers ask
            constantly — and reduces refund requests from mismatched frames.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Going the other way, a 16×20 print does not fit an 11×14 frame at all — it is far too
            large and would need to be cropped down. For framing details across common sizes, see
            the{" "}
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
              is your statement size.
            </strong>{" "}
            It carries premium pricing, anchors a gallery wall, and fits the large standard
            frames buyers reach for when they want one piece to fill a space. For art prints
            meant to make an impression, 16×20 is the size that converts browsers into buyers.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">
                11×14
              </Link>{" "}
              is the accessible mid-size.
            </strong>{" "}
            It is the print buyers add to round out a wall, gift at a friendly price point, or
            slot into an existing 11×14 frame. It is also the classic gallery-wall companion to a
            larger anchor piece.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>The strongest listings include both.</strong> A buyer might want a 16×20 as
            the centerpiece and two 11×14 prints flanking it. Offering the pair from one upload
            captures the whole gallery-wall purchase instead of a single piece.
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
        heading="Export 11×14 and 16×20 in Seconds"
        stat="3,300×4,200 px · 4,800×6,000 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
