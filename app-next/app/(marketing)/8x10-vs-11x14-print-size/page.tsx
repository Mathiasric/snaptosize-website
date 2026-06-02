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
  "https://app.snaptosize.com?source=seo_8x10-vs-11x14-print-size&kind=guide";

const SLUG = "8x10-vs-11x14-print-size";

export const metadata: Metadata = {
  title: "8×10 vs 11×14 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
  description:
    "11×14 is 92% larger than 8×10. See exact pixel dimensions at 300 DPI, the ratio difference that forces separate files, and which size sells more wall art on Etsy.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "8×10 vs 11×14 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "11×14 is 92% larger than 8×10. Exact pixels at 300 DPI, ratio difference, and Etsy wall art selling guide.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "8×10 vs 11×14 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "11×14 is 92% larger than 8×10. Exact pixels, ratio guide, and Etsy selling advice.",
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
  {
    label: "11×14 (portrait)",
    inches: '11×14"',
    ratio: "11:14",
    pixels: "3300×4200",
    area: "154 sq in",
    pack: "Extras Pack",
    inPack: true,
  },
  {
    label: "11×14 (landscape)",
    inches: '14×11"',
    ratio: "14:11",
    pixels: "4200×3300",
    area: "154 sq in",
    pack: "Extras Pack",
    inPack: true,
  },
];

const faqs = [
  {
    question: "Is 11×14 bigger than 8×10?",
    answer:
      "Yes. An 11×14 print covers 154 square inches versus 80 square inches for 8×10 — about 92% more surface area. In practical terms, 11×14 is a statement wall piece that fills space noticeably; 8×10 is the most popular standard frame size for portraits and desk art.",
  },
  {
    question: "What are the pixel dimensions for 8×10 and 11×14 at 300 DPI?",
    answer:
      "At 300 DPI: an 8×10 print requires 2400×3000 pixels (portrait) or 3000×2400 pixels (landscape). An 11×14 print requires 3300×4200 pixels (portrait) or 4200×3300 pixels (landscape). Both must be at 300 DPI for print-shop quality.",
  },
  {
    question: "Can I use the same file for both 8×10 and 11×14?",
    answer:
      "No. They have different aspect ratios: 8×10 is 4:5 and 11×14 is 11:14. These ratios are close but not equal — stretching or cropping a 4:5 file to fill an 11:14 frame will clip edges or distort your artwork. You need two separate exports at the correct pixel dimensions for each.",
  },
  {
    question: "Which print size sells better on Etsy?",
    answer:
      "8×10 is the single most popular print size on Etsy — it fits standard IKEA and Target frames buyers already own. 11×14 sells well for statement wall art and gallery walls where buyers want impact. Offering both in your listing maximises the audience you reach without redesigning your artwork.",
  },
  {
    question: "What is the aspect ratio of 8×10 and 11×14?",
    answer:
      "8×10 is a 4:5 ratio (0.800). 11×14 is an 11:14 ratio (0.786). They look similar at a glance but are not interchangeable — the 11:14 ratio is slightly taller relative to its width than 4:5.",
  },
  {
    question: "Does SnapToSize export 8×10 and 11×14 files?",
    answer:
      "Yes. Upload your design once and the 4:5 pack automatically generates 8×10 along with 16×20 and other 4:5 sizes at 300 DPI. For 11×14, use the Extras pack — SnapToSize resizes to the exact pixel dimensions without cropping or distorting your artwork.",
  },
];

export default function EightByTenVsElevenByFourteenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "8×10 vs 11×14 Print Size: Which Is Bigger, Exact Pixels at 300 DPI, and Etsy Wall Art Guide",
    description:
      "Complete comparison of 8×10 and 11×14 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, which sells better on Etsy, and how to export both without cropping.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    author: {
      "@type": "Organization",
      name: "The SnapToSize Team",
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
        name: "8×10 vs 11×14 Print Size",
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
      acceptedAnswer: { "@type": "Answer", text: f.answer },
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

      <AuthorByline lastUpdated="June 1, 2026" />

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
            <span className="text-slate-600">8×10 vs 11×14</span>
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
                8×10 vs 11×14 Print Size:{" "}
                <span style={{ color: "#2DD4BF" }}>Which Is Bigger</span> and
                What Are the Pixels?
              </h1>

              <p
                className="text-lg text-slate-600 leading-relaxed mb-6"
                style={{ maxWidth: "42rem" }}
              >
                11×14 is 92% larger than 8×10, but they use different aspect
                ratios — so the same file won&apos;t work for both. Here are
                exact pixel dimensions at 300 DPI, which fills a wall better,
                and how to export both from one upload.
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
                  <strong>11×14 is 92% larger than 8×10</strong> (154 vs 80 sq in). At 300 DPI:{" "}
                  <strong>8×10 = 2400×3000 px</strong>, <strong>11×14 = 3300×4200 px</strong>.
                  They have different ratios (4:5 vs 11:14) so you need separate exports — one file
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
                  8×10 is auto-covered by the 4:5 pack. 11×14 is in the Extras
                  pack — both export in one click.
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
            <div className="hidden md:flex items-end justify-center gap-10 pt-8 pb-4">
              {/* 8×10 block */}
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
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-700">
                    8×10 inches
                  </div>
                  <div className="text-xs text-slate-500">80 sq in · ratio 4:5</div>
                </div>
              </div>

              {/* vs label */}
              <div className="flex flex-col items-center pb-10">
                <span className="text-slate-300 font-light text-2xl">vs</span>
              </div>

              {/* 11×14 block */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "176px",
                    height: "224px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    11×14
                  </span>
                  <span className="font-mono text-xs text-slate-500 mt-2">
                    3300×4200
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    px @ 300 DPI
                  </span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7C3AED" }}
                  >
                    92% more area
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-700">
                    11×14 inches
                  </div>
                  <div className="text-xs text-slate-500">154 sq in · ratio 11:14</div>
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
            Pixel Dimensions for 8×10 and 11×14 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            These are the exact pixel dimensions print shops and Etsy require for high-quality output. Always export at 300 DPI — lower resolution produces blurry prints.
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
            How Much Bigger Is 11×14 Than 8×10?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            An 11×14 print covers <strong>154 square inches</strong>, while an 8×10 covers{" "}
            <strong>80 square inches</strong>. That means 11×14 has nearly double the surface area
            — 92.5% more, to be precise. On a wall, you feel that difference immediately: 8×10 is
            a focused, refined print; 11×14 fills space and draws attention across a room.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            For Etsy buyers decorating a gallery wall, 11×14 is the statement piece.
            For portrait photography, desk art, or gift prints, 8×10 is the sweet spot — it fits
            the frames already sitting in most homes.
          </p>
        </section>

        {/* Aspect ratio section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why the Same File Won&apos;t Work for Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            8×10 and 11×14 look similar — both portrait, both close to square-ish — but their
            aspect ratios are different:
          </p>

          {/* Ratio comparison visual */}
          <div className="grid grid-cols-2 gap-4 mb-6">
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
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">11:14</div>
              <div className="text-sm text-foreground/60 mb-2">11×14 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.786</div>
              <div className="mt-3 text-xs text-foreground/50">
                Unique ratio — needs its own export
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            The difference is small — 0.800 vs 0.786 — but enough that scaling a 2400×3000 px
            file directly into an 11×14 frame will crop about 1.7% off each side of your artwork.
            For text-heavy designs, quotes, or detailed illustrations, that clipping is visible.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The correct approach: export two separate files. One at <strong>2400×3000 px</strong>{" "}
            for 8×10 and one at <strong>3300×4200 px</strong> for 11×14. SnapToSize generates
            both from a single upload — no Photoshop, no manual resizing.
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
            <strong>11×14 sells well for statement and gallery wall pieces.</strong> Buyers
            searching for 11×14 have a specific decorating goal — they want presence. Your listing
            competes in a smaller pool, but buyer intent is strong.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The highest-performing Etsy print listings offer <strong>both sizes in one listing</strong>.
            A buyer searching for 8×10 finds you; if they love the design, they upgrade to 11×14.
            The extra export takes seconds with SnapToSize and doubles your potential order value.
          </p>
        </section>

        {/* SnapToSize CTA block */}
        <ContextualCTA
          problem="Exporting 8×10 and 11×14 separately means two Photoshop sessions, two manual resizes, and hoping neither crops your design."
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
        heading="Export 8×10 and 11×14 in Seconds"
        stat="2,400×3,000 px · 3,300×4,200 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
