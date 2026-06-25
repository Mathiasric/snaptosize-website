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
  "https://app.snaptosize.com?source=seo_16x20-vs-18x24-print-size&kind=guide";

const SLUG = "16x20-vs-18x24-print-size";

export const metadata: Metadata = {
  title: "16×20 vs 18×24 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
  description:
    "18×24 is 35% bigger than 16×20 (432 vs 320 sq in) and uses a taller 3:4 poster ratio vs 16×20's 4:5. One file won't fill both. Exact pixels at 300 DPI, frame and mat combos, and when to offer each.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "16×20 vs 18×24 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "18×24 is 35% bigger than 16×20 and uses a 3:4 poster ratio vs 16×20's 4:5. Exact pixels at 300 DPI, frame and mat combos, and when to offer each.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-25T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "16×20 vs 18×24 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "18×24 is 35% bigger than 16×20, with a 3:4 poster ratio vs 4:5. Exact pixels at 300 DPI and when to offer each on Etsy.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
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
  {
    label: "18×24 (portrait)",
    inches: '18×24"',
    ratio: "3:4",
    pixels: "5400×7200",
    area: "432 sq in",
    pack: "3:4 Pack",
    color: "purple",
  },
  {
    label: "18×24 (landscape)",
    inches: '24×18"',
    ratio: "4:3",
    pixels: "7200×5400",
    area: "432 sq in",
    pack: "3:4 Pack",
    color: "purple",
  },
];

const faqs = [
  {
    question: "Is 18×24 bigger than 16×20?",
    answer:
      "Yes. An 18×24 print covers 432 square inches versus 320 square inches for a 16×20 — that is 35% more surface area. Both are large statement sizes, but 18×24 is the classic poster format, noticeably taller and grander on the wall, while 16×20 fits the most common large photo frames.",
  },
  {
    question: "What is the aspect ratio of 16×20 and 18×24?",
    answer:
      "16×20 is a 4:5 ratio (0.800). 18×24 is a 3:4 ratio (0.750). That 0.05 gap is bigger than it looks: 18×24 is visibly taller and narrower in proportion, which is why it reads as a poster while 16×20 reads as a framed print. The two are not interchangeable.",
  },
  {
    question: "How many pixels is 16×20 and 18×24 at 300 DPI?",
    answer:
      "At 300 DPI, 16×20 needs 4800×6000 pixels (portrait) or 6000×4800 (landscape). 18×24 needs 5400×7200 pixels (portrait) or 7200×5400 (landscape). At these large sizes, 300 DPI keeps the print sharp; dropping below it shows softness the moment the piece is hung.",
  },
  {
    question: "Can you put a 16×20 print in an 18×24 frame?",
    answer:
      "Yes — with a mat. An 18×24 frame with a 16×20 mat opening bridges the gap and gives the print a bordered, gallery look. Without a mat, a 16×20 print floats loosely inside an 18×24 frame, so pair it with the matching mat. A 16×20 frame cannot hold an 18×24 print — it is too large and would have to be cropped.",
  },
  {
    question: "Can I scale my 16×20 design up to 18×24?",
    answer:
      "Not cleanly. The ratios differ (4:5 vs 3:4), so a straight scale leaves white bars and stretching distorts the artwork — and the gap here is wide enough to be obvious. Export each at its own ratio, or use a controlled, distortion-free crop to 3:4 when you specifically want the 18×24 from 16×20-ratio art.",
  },
  {
    question: "Which sells better on Etsy — 16×20 or 18×24?",
    answer:
      "16×20 is the dependable large framed-art size; 18×24 wins for posters, typography, movie-style prints, and bold graphic art that benefits from a taller format. They suit different products, so many top listings offer both. SnapToSize generates 16×20 in the 4:5 pack and 18×24 in the 3:4 pack from one upload.",
  },
];

export default function SixteenByTwentyVsEighteenByTwentyFourPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "16×20 vs 18×24 Print Size: Which Is Bigger, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 16×20 and 18×24 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, frame and mat combos, when to offer each on Etsy, and how to export both without cropping.",
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
      { "@type": "ListItem", position: 3, name: "16×20 vs 18×24 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
            <span className="text-slate-300">16×20 vs 18×24</span>
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
                16×20 vs 18×24
                <span
                  className="block mt-1"
                  style={{
                    background: "linear-gradient(90deg, #2DD4BF, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Framed Print vs Poster Size
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Both are statement sizes, but{" "}
                <strong className="text-white">18×24 is 35% bigger</strong> and uses a
                taller <strong className="text-white">3:4 poster ratio</strong> versus
                16×20&apos;s 4:5 — so one file won&apos;t fill both without white bars or a
                crop.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "16×20 = 4800×6000 px",
                  "18×24 = 5400×7200 px",
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
              {/* 16×20 */}
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
                  <div className="text-xs text-slate-500">320 sq in · framed art</div>
                </div>
              </div>

              {/* 18×24 — larger, taller poster */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "168px",
                    height: "224px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    18×24
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">5400×7200</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    ratio 3:4
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">18×24 inches</div>
                  <div className="text-xs text-slate-500">432 sq in · poster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between 16×20 and 18×24 print size?">
          <strong>18×24</strong> is a 3:4 poster ratio (5400×7200 px at 300 DPI) covering 432
          square inches — 35% bigger and taller in proportion. <strong>16×20</strong> is a 4:5
          ratio (4800×6000 px at 300 DPI) covering 320 square inches — the standard large framed
          size. The ratios differ, so one file won&apos;t fill both cleanly. Generate 16×20 (4:5
          pack) and 18×24 (3:4 pack) from one upload with{" "}
          <Link href="/" className="text-accent-light hover:underline">
            SnapToSize
          </Link>
          , free and no signup.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 25, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 16×20 and 18×24 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            Exact pixel dimensions print shops and home printers need for sharp output.
            Always export at 300 DPI so a large print stays crisp once it is on the wall.
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
            How Much Bigger Is 18×24 Than 16×20?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            An 18×24 print covers <strong>432 square inches</strong>, while a 16×20 covers{" "}
            <strong>320 square inches</strong> — <strong>35% more surface area</strong>. Both are
            large, so the size jump is less dramatic than the gap from a mid-size, but 18×24
            still reads as the bigger, bolder piece, especially because it is taller in
            proportion.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            The proportion is the real story here. 18×24 stretches taller relative to its width,
            which is exactly why posters use it — it gives type, figures, and graphic layouts room
            to breathe vertically. 16×20 is squarer and sits more naturally among framed photos
            and art prints.
          </p>
        </section>

        {/* Ratio section — the core education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why One File Won&apos;t Fill Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            16×20 and 18×24 are both large, but their{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratios
            </Link>{" "}
            are different enough to be obvious — and that forces separate exports:
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">4:5</div>
              <div className="text-sm text-foreground/60 mb-2">16×20 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.800</div>
              <div className="mt-3 text-xs text-foreground/50">
                Standard large frame · same as 8×10, 20×25
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">3:4</div>
              <div className="text-sm text-foreground/60 mb-2">18×24 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.750</div>
              <div className="mt-3 text-xs text-foreground/50">
                Poster format · same as 6×8, 12×16
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            Scale a 16×20 design to fill an 18×24 and the top and bottom either show white bars
            or the image stretches taller and distorts. With a 0.05 ratio gap, that distortion is
            easy to spot. Keep each size at its own ratio — and when you specifically need 18×24
            from artwork built at 4:5, a{" "}
            <Link href="/distortion-free-crop" className="text-accent-light hover:underline">
              Perfect Fit
            </Link>{" "}
            crop reframes it to 3:4 without stretching, with you choosing what stays in frame.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            The clean approach: export <strong>4800×6000 px</strong> for 16×20 and{" "}
            <strong>5400×7200 px</strong> for 18×24. SnapToSize generates both from a single
            upload — no Photoshop, no manual resizing, no guessing which edge to crop.
          </p>
        </section>

        {/* Real output proof — one upload, both sizes (show, don't tell) */}
        <ComparisonProof
          subject="Misty Nordic art"
          a={{ src: "/assets/modes-demo/ratios/misty-4x5.jpg", label: "16×20", px: "4800 × 6000", ratio: "4:5", aspect: "4/5", h: "h-40 sm:h-52" }}
          b={{ src: "/assets/modes-demo/ratios/misty-3x4.jpg", label: "18×24", px: "5400 × 7200", ratio: "3:4", aspect: "3/4", h: "h-44 sm:h-56" }}
          note="Upload once. SnapToSize exports 16×20 and 18×24 at 300 DPI — the full image kept, no cropping, every file under 20MB."
        />

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="Offering 16×20 and 18×24 means two canvases, two exports, and re-checking that neither one cropped the edges or came out soft."
          solution="Upload once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI — no cropping, guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* The frame + mat combo — high-intent real-world question */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Put a 16×20 Print in an 18×24 Frame?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes — with a mat. An <strong>18×24 frame with a 16×20 mat opening</strong> closes the
            gap and frames the print with a clean border, which is a common way to give a 16×20 a
            larger, gallery-style footprint. Without a mat, a 16×20 print shifts around inside an
            18×24 frame, so always include the matching mat.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            The reverse does not work: an 18×24 print is too large for a 16×20 frame and would
            have to be cropped down, which defeats the point of a ready-to-print file. If you sell
            either size, naming the right frame-and-mat pairing in your listing saves buyers a
            search and heads off mismatched-frame refunds.
          </p>
          <p className="text-foreground/70 leading-relaxed">
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
              <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">
                16×20
              </Link>{" "}
              is the dependable large framed size.
            </strong>{" "}
            It fits the most common large photo frames, suits photography and art prints, and is
            the size buyers reach for when they want a framed focal piece without going
            poster-scale.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">
                18×24
              </Link>{" "}
              is the poster size.
            </strong>{" "}
            Its taller 3:4 proportion is made for typography, movie-style prints, bold graphic art,
            and anything that wants vertical drama. Buyers shopping for a poster expect 18×24 by
            name.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>Offer both and you cover both shoppers</strong> — the one framing a 16×20 art
            print and the one hanging an 18×24 poster — from a single upload, with no extra design
            work.
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
        heading="Export 16×20 and 18×24 in Seconds"
        stat="4,800×6,000 px · 5,400×7,200 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions and 300 DPI — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
