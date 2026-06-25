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
  "https://app.snaptosize.com?source=seo_a4-vs-8x10-print-size&kind=guide";

const SLUG = "a4-vs-8x10-print-size";

export const metadata: Metadata = {
  title: "A4 vs 8×10 Print Size: What's the Difference? (Pixels at 300 DPI)",
  description:
    "A4 (210×297mm) is the international standard; 8×10 is the US photo-frame size. They're close — A4 is ~21% larger and taller — but use different ratios (ISO A vs 4:5), so one file won't fit both. Exact pixels at 300 DPI inside.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "A4 vs 8×10 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "A4 is the international standard, 8×10 is the US photo-frame size. Different ratios (ISO A vs 4:5) — one file won't fit both. Exact pixels at 300 DPI.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-25T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "A4 vs 8×10 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "A4 = international standard, 8×10 = US photo frame. Different ratios (ISO A vs 4:5). Exact pixels at 300 DPI and when to offer each.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
  {
    label: "A4 (portrait)",
    inches: '210×297 mm',
    ratio: "ISO A (1:√2)",
    pixels: "2480×3508",
    area: "96.7 sq in",
    pack: "ISO A Pack",
    color: "purple",
  },
  {
    label: "A4 (landscape)",
    inches: '297×210 mm',
    ratio: "ISO A (√2:1)",
    pixels: "3508×2480",
    area: "96.7 sq in",
    pack: "ISO A Pack",
    color: "purple",
  },
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
];

const faqs = [
  {
    question: "Is A4 bigger than 8×10?",
    answer:
      "Slightly. A4 measures 210×297mm (8.27×11.69 inches), so it covers about 96.7 square inches versus 80 for an 8×10 — roughly 21% more area. The bigger difference is shape: A4 is noticeably taller and a touch narrower than 8×10, because the two use different aspect ratios.",
  },
  {
    question: "What is the aspect ratio of A4 and 8×10?",
    answer:
      "A4 uses the ISO A-series ratio, 1:√2 (about 0.707) — every A size shares it. 8×10 is a 4:5 ratio (0.800). They are clearly different proportions, which is why a file built for one shows white bars or needs a crop in the other. They are not interchangeable.",
  },
  {
    question: "How many pixels is A4 and 8×10 at 300 DPI?",
    answer:
      "At 300 DPI, A4 needs 2480×3508 pixels (portrait) or 3508×2480 (landscape). 8×10 needs 2400×3000 pixels (portrait) or 3000×2400 (landscape). 300 DPI is the standard for sharp prints at these sizes.",
  },
  {
    question: "Can you print an 8×10 on A4 paper?",
    answer:
      "Yes, with white borders. An 8×10 design does not fill an A4 sheet — A4 is taller and a different shape — so you get uneven margins, larger at the top and bottom. It prints sharp, it just does not fill the page. For a clean result, provide a true A4 file sized to the sheet.",
  },
  {
    question: "Can I scale my 8×10 design up to A4?",
    answer:
      "Not cleanly. 8×10 is 4:5 and A4 is the ISO 1:√2 ratio, so a straight scale leaves white bars and stretching distorts the art. Export each at its own ratio, or use a controlled, distortion-free crop to the A-series ratio when you specifically want A4 from 4:5 artwork.",
  },
  {
    question: "Should I offer A4 or 8×10 on Etsy?",
    answer:
      "Offer both. 8×10 is the size US buyers frame; A4 is the standard in the UK, Europe, Australia, and most of Asia, where inch sizes are not sold. Including A4 alongside 8×10 opens your listing to international buyers at zero extra design work. SnapToSize generates 8×10 in the 4:5 pack and A4 in the ISO A pack from one upload.",
  },
];

export default function A4VsEightByTenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "A4 vs 8×10 Print Size: What's the Difference, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of A4 and 8×10 print sizes — pixel dimensions at 300 DPI, aspect ratios (ISO A vs 4:5), area difference, international vs US framing, when to offer each on Etsy, and how to export both without cropping.",
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
      { "@type": "ListItem", position: 3, name: "A4 vs 8×10 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
            <span className="text-slate-300">A4 vs 8×10</span>
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
                A4 vs 8×10
                <span
                  className="block mt-1"
                  style={{
                    background: "linear-gradient(90deg, #2DD4BF, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  International vs US Standard
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                They look almost the same size, but{" "}
                <strong className="text-white">A4 is the international standard</strong> and{" "}
                <strong className="text-white">8×10 is the US photo-frame size</strong> — and
                they use different ratios (ISO A vs 4:5), so one file won&apos;t fit both.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "A4 = 2480×3508 px",
                  "8×10 = 2400×3000 px",
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
              {/* A4 — taller, narrower */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "150px",
                    height: "212px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    A4
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">2480×3508</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    ISO A · 1:√2
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">A4 · 210×297 mm</div>
                  <div className="text-xs text-slate-500">96.7 sq in · international</div>
                </div>
              </div>

              {/* 8×10 — shorter, a touch wider */}
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
                  <div className="text-xs text-slate-500">80 sq in · US standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between A4 and 8×10 print size?">
          <strong>A4</strong> is the international standard (210×297mm, 2480×3508 px at 300 DPI,
          ISO A ratio 1:√2). <strong>8×10</strong> is the US photo-frame size (2400×3000 px at
          300 DPI, 4:5 ratio). A4 is about 21% larger and noticeably taller, and the ratios
          differ — so one file won&apos;t fill both cleanly. Generate 8×10 (4:5 pack) and A4
          (ISO A pack) from one upload with{" "}
          <Link href="/" className="text-accent-light hover:underline">
            SnapToSize
          </Link>
          , free and no signup.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 25, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for A4 and 8×10 at 300 DPI
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

        {/* Size + shape difference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            How Different Are A4 and 8×10, Really?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            On size, they are close: A4 covers <strong>96.7 square inches</strong> versus{" "}
            <strong>80</strong> for an 8×10, about <strong>21% more area</strong>. That small
            gap is why people assume they are interchangeable. They are not.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The real difference is shape. A4 is taller and a little narrower (8.27×11.69 inches)
            because it uses the ISO A-series ratio, while 8×10 is the squarer 4:5. Drop an 8×10
            design onto an A4 sheet and it leaves uneven margins; force it to fill and it
            distorts. Same story in reverse. The proportions, not the size, are what make them
            two separate files.
          </p>
        </section>

        {/* Ratio section — the core education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why One File Won&apos;t Fit Both
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            A4 and 8×10 come from two different sizing systems, and their{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratios
            </Link>{" "}
            reflect that:
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">ISO A</div>
              <div className="text-sm text-foreground/60 mb-2">A4 ratio</div>
              <div className="font-mono text-xs text-foreground/50">1:√2 = 0.707</div>
              <div className="mt-3 text-xs text-foreground/50">
                International · same as A5, A3, A2
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
                US photo frames · same as 16×20, 20×25
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            The ISO ratio is taller than 4:5, so an 8×10 design placed on A4 floats with extra
            space top and bottom, and an A4 design squeezed into 8×10 loses height. Keep each at
            its own ratio. When you specifically need A4 from artwork built at 4:5, a{" "}
            <Link href="/distortion-free-crop" className="text-accent-light hover:underline">
              Perfect Fit
            </Link>{" "}
            crop reframes it to the A-series ratio without stretching — you choose what stays in
            frame.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            The clean approach: export <strong>2400×3000 px</strong> for 8×10 and{" "}
            <strong>2480×3508 px</strong> for A4. SnapToSize generates both from a single upload —
            no Photoshop, no manual resizing, no guessing which edge to crop. For the full
            international picture, see{" "}
            <Link href="/iso-vs-us-print-sizes" className="text-accent-light hover:underline">
              ISO vs US print sizes
            </Link>
            .
          </p>
        </section>

        {/* Real output proof — homepage two-mode framing */}
        <ComparisonProof
          subject="Misty Nordic art"
          a={{ src: "/assets/modes-demo/ratios/misty-iso.jpg", label: "A4", px: "2480 × 3508", ratio: "ISO A", aspect: "210/297", h: "h-44 sm:h-56" }}
          b={{ src: "/assets/modes-demo/ratios/misty-4x5.jpg", label: "8×10", px: "2400 × 3000", ratio: "4:5", aspect: "4/5", h: "h-40 sm:h-52" }}
        />

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Selling to both US and international buyers means an 8×10 and an A4 — two ratios, two exports, and hoping neither came out with odd margins."
          solution="Upload once. SnapToSize generates 8×10 and A4 at the correct pixel dimensions and 300 DPI, each ratio handled — guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* Print on A4 paper — high-intent real-world question */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Print an 8×10 on A4 Paper?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes, but with white borders. A4 is taller and a different shape than 8×10, so an
            8×10 design sits inside the sheet with uneven margins — more at the top and bottom
            than the sides. It prints at full sharpness; it simply does not fill the page, which
            looks unfinished to a buyer expecting edge-to-edge art.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            The clean fix is to give international buyers a true A4 file sized to the sheet, and
            US buyers an 8×10 for their frames. That way nobody is trimming paper or living with
            lopsided borders. For the wider set of international sizes, see the{" "}
            <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">
              A4 print size guide
            </Link>
            .
          </p>
        </section>

        {/* When to offer each on Etsy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            A4 or 8×10 — Which Should You Offer on Etsy?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">
                8×10
              </Link>{" "}
              is essential for US buyers.
            </strong>{" "}
            It is the size that fits the photo frames sold at Target, Walmart, and IKEA in North
            America, and US shoppers search for it by name. For the US market, 8×10 is
            non-negotiable.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">
                A4
              </Link>{" "}
              unlocks everywhere else.
            </strong>{" "}
            The UK, Europe, Australia, and most of Asia frame and print in A-series sizes, not
            inches. If your listing skips A4, those buyers cannot use your files — and they are a
            large share of the global market.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>Offer both and you serve the whole world from one upload.</strong> It is the
            single easiest way to widen a print listing&apos;s reach, with no extra design work.
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
        heading="Export A4 and 8×10 in Seconds"
        stat="2,480×3,508 px · 2,400×3,000 px"
        description="Upload your design once. SnapToSize generates both the international A4 and the US 8×10 at the correct pixel dimensions and 300 DPI — no Photoshop, no cropping, under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
