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
  "https://app.snaptosize.com?source=seo_8x10-vs-8-5x11-print-size&kind=guide";

const SLUG = "8x10-vs-8-5x11-print-size";

export const metadata: Metadata = {
  title: "8×10 vs 8.5×11 Print Size: What's the Difference? (Pixels at 300 DPI)",
  description:
    "8.5×11 is US Letter — it fits home printers. 8×10 fits photo frames. Different aspect ratios (4:5 vs 17:22) mean the same file won't work for both. Exact pixels at 300 DPI inside.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "8×10 vs 8.5×11 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "8.5×11 fits home printers. 8×10 fits photo frames. Different ratios — separate exports required. Exact pixels at 300 DPI.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-02T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "8×10 vs 8.5×11 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "8.5×11 is US Letter (home printer). 8×10 is photo frame size. Different ratios — you need two separate files.",
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
    label: "8.5×11 (portrait)",
    inches: '8.5×11"',
    ratio: "17:22",
    pixels: "2550×3300",
    area: "93.5 sq in",
    pack: "Extras Pack",
    color: "purple",
  },
  {
    label: "8.5×11 (landscape)",
    inches: '11×8.5"',
    ratio: "22:17",
    pixels: "3300×2550",
    area: "93.5 sq in",
    pack: "Extras Pack",
    color: "purple",
  },
];

const faqs = [
  {
    question: "Is 8.5×11 bigger than 8×10?",
    answer:
      "Yes. An 8.5×11 print covers 93.5 square inches versus 80 square inches for an 8×10 — that is 16.9% more surface area. The difference is subtle on paper, but 8.5×11 is US Letter, sized to fill a standard home printer page, while 8×10 is sized to fit photo frames sold at IKEA, Target, and most framing shops.",
  },
  {
    question: "What is the aspect ratio of 8×10 and 8.5×11?",
    answer:
      "8×10 is a 4:5 ratio (0.800). 8.5×11 is a 17:22 ratio (0.773). They look similar at a glance but are not interchangeable — a file sized for 4:5 placed in a 17:22 frame will show white borders on the sides or distort your artwork if stretched.",
  },
  {
    question: "How many pixels is 8.5×11 at 300 DPI?",
    answer:
      "An 8.5×11 print at 300 DPI requires 2550×3300 pixels in portrait orientation, or 3300×2550 pixels in landscape. This is the US Letter size used by home printers and office printers.",
  },
  {
    question: "Can I print an 8×10 on 8.5×11 paper?",
    answer:
      "Yes, but with 0.25-inch white borders on each side. The 8×10 design at 4:5 ratio does not fill the full 17:22 sheet. Some sellers design at 8×10 and tell buyers to trim the paper, but this adds friction. For a clean buyer experience — especially for planners or wall art — provide a separate 8.5×11 file that fills the sheet exactly.",
  },
  {
    question: "Which size sells better on Etsy — 8×10 or 8.5×11?",
    answer:
      "8×10 is the stronger seller for framed wall art because it fits standard photo frames. 8.5×11 sells better for printable planners, worksheets, coloring pages, and anything buyers print at home. The best Etsy listings offer both, since they serve different buyer intents.",
  },
  {
    question: "Does SnapToSize export 8×10 and 8.5×11?",
    answer:
      "Yes. The 4:5 Pack generates 8×10 at 2400×3000 px at 300 DPI. The Extras Pack generates 8.5×11 at 2550×3300 px at 300 DPI. Run both packs in sequence from a single upload — no Photoshop, no manual resizing.",
  },
];

export default function EightByTenVsEightPointFiveByElevenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "8×10 vs 8.5×11 Print Size: What's the Difference, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 8×10 and 8.5×11 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, when to offer each on Etsy, and how to export both without cropping.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
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
      { "@type": "ListItem", position: 3, name: "8×10 vs 8.5×11 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
            <span className="text-slate-300">8×10 vs 8.5×11</span>
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
                8×10 vs 8.5×11
                <span className="block mt-1 text-[#2DD4BF]">
                  Frame Size vs Printer Size
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                They look nearly identical — just 0.5 inches wider, 1 inch taller. But{" "}
                <strong className="text-white">8×10 fits photo frames</strong> and{" "}
                <strong className="text-white">8.5×11 fits home printers</strong>.
                Different aspect ratios mean the same file won&apos;t work for both.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "8×10 = 2400×3000 px",
                  "8.5×11 = 2550×3300 px",
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

            {/* Right: proportional size visual */}
            <div className="hidden md:flex items-end justify-center gap-10">
              {/* 8×10 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "152px",
                    height: "190px",
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
                  <span className="font-mono text-xs text-slate-400 mt-2">2400×3000</span>
                  <span className="font-mono text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#0f766e" }}
                  >
                    ratio 4:5
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">8×10 inches</div>
                  <div className="text-xs text-slate-500">80 sq in · photo frames</div>
                </div>
              </div>

              {/* 8.5×11 — slightly larger */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "161px",
                    height: "209px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    8.5×11
                  </span>
                  <span className="font-mono text-xs text-slate-400 mt-2">2550×3300</span>
                  <span className="font-mono text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    ratio 17:22
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">8.5×11 inches</div>
                  <div className="text-xs text-slate-500">93.5 sq in · US Letter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between 8×10 and 8.5×11 print size?">
          <strong>8×10</strong> is a 4:5 ratio (2400×3000 px at 300 DPI) — sized for
          standard photo frames. <strong>8.5×11</strong> is a 17:22 ratio (2550×3300 px
          at 300 DPI) — the US Letter standard that fits home and office printers. They
          are 16.9% different in area and cannot share the same file without white borders
          or distortion.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 2, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 8×10 and 8.5×11 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            Exact pixel dimensions print shops and home printers require for sharp output.
            Always export at 300 DPI for professional print quality.
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
            How Much Bigger Is 8.5×11 Than 8×10?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            An 8.5×11 print covers <strong>93.5 square inches</strong>, while an 8×10 covers{" "}
            <strong>80 square inches</strong> — a difference of 13.5 square inches, or{" "}
            <strong>16.9% more surface area</strong> for the letter size. On paper the difference
            looks subtle. The problem is asymmetric: 8.5×11 is 0.5 inches wider and 1 inch taller
            than 8×10. That uneven growth is why the two sizes cannot share a file.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Stretching a 4:5 design into a 17:22 frame compresses the height differently than the
            width — faces, text, and any horizontal elements in the artwork will appear slightly
            squashed. Neither white-border nor stretch output looks intentional to a buyer.
          </p>
        </section>

        {/* Ratio section — the core education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why the Same File Won&apos;t Work for Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            8×10 and 8.5×11 look like near-identical rectangles, but their{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratios
            </Link>{" "}
            differ enough to force separate exports:
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
                Photo frames · same as 16×20, 20×25
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">17:22</div>
              <div className="text-sm text-foreground/60 mb-2">8.5×11 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.773</div>
              <div className="mt-3 text-xs text-foreground/50">
                US Letter · home + office printers
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            A 0.027 ratio difference means a 4:5 file scaled to fill an 8.5×11 frame will
            show 0.25-inch white bars on each side — or if stretched to fill, the image
            will appear slightly squashed. Neither looks like a professional listing.
          </p>

          <div
            className="rounded-xl p-5 border-l-4 mb-4"
            style={{ background: "rgba(167,139,250,0.08)", borderColor: "#A78BFA" }}
          >
            <p className="text-sm text-foreground/80 leading-relaxed">
              <strong>The cut-down trap:</strong> A common workaround is designing at 8.5×11,
              printing on letter paper, and trimming down to 8×10. This works mechanically but
              requires you to warn buyers to trim 0.25″ from each side — and most buyers
              don&apos;t read instructions. Offering both files as separate exports eliminates
              the confusion entirely.
            </p>
          </div>

          <p className="text-foreground/70 leading-relaxed">
            The correct approach: export two separate files. One at <strong>2400×3000 px</strong>{" "}
            for 8×10 and one at <strong>2550×3300 px</strong> for 8.5×11. SnapToSize generates
            both from a single upload — no Photoshop, no manual resizing, no guessing.
          </p>
        </section>

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Offering 8×10 and 8.5×11 means two separate Photoshop canvases, two exports, and hoping you didn't accidentally crop the edges on either."
          solution="Upload once. SnapToSize generates both sizes at the correct pixel dimensions — no cropping, guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

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
              dominates Etsy wall art searches.
            </strong>{" "}
            It fits the most popular photo frames — IKEA RIBBA, Target, Walmart — and buyers
            purchasing framed wall decor know this size by heart. For art prints, 8×10 is
            non-negotiable.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>8.5×11 is the standard for printable downloads.</strong> Buyers shopping
            for planners, worksheets, affirmation prints, invitations, or anything they plan
            to print at home on a standard printer expect US Letter. If your product lives
            in a binder or on a desk, 8.5×11 is the right size.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>The strongest Etsy listings include both.</strong> A buyer looking for an
            affirmation print might want 8.5×11 to print at home today, and 8×10 to frame
            next week. Two exports from one upload expands your listing&apos;s reach with no
            extra design work.
          </p>
        </section>

        {/* Can you print 8x10 on letter paper — answers Reddit search intent */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Print 8×10 on 8.5×11 Paper?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes — but you&apos;ll get <strong>0.25 inches of white border on each side</strong> and
            0.5 inches at the bottom. The 8×10 design at 4:5 ratio doesn&apos;t fill the full
            17:22 sheet. The image prints at the correct resolution and sharpness — it just
            doesn&apos;t fill the page.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Some sellers work around this by designing at 8×10 and asking buyers to trim.
            It works, but adds friction. For a cleaner buyer experience — especially for
            planners or wall art intended for immediate printing — provide a separate 8.5×11
            file that fills the sheet exactly.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The reverse is more problematic: printing an 8.5×11 file on letter paper then
            trying to fit it in an 8×10 frame means the proportions are wrong. The image
            will be cropped or squashed unless it was specifically resized first — which
            defeats the purpose of a ready-to-use digital download.
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
        heading="Export 8×10 and 8.5×11 in Seconds"
        stat="2,400×3,000 px · 2,550×3,300 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
