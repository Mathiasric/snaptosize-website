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
  "https://app.snaptosize.com?source=seo_18x24-vs-24x36-print-size&kind=guide";

const SLUG = "18x24-vs-24x36-print-size";

export const metadata: Metadata = {
  title: "18×24 vs 24×36 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
  description:
    "24×36 is exactly double the area of 18×24 (864 vs 432 sq in) and uses a different 2:3 ratio vs 18×24's 3:4. One file won't fill both. Exact pixels at 300 DPI, poster framing, and when to offer each.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "18×24 vs 24×36 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "24×36 is exactly 2× the area of 18×24, with a 2:3 ratio vs 3:4. Exact pixels at 300 DPI, poster framing, and when to offer each.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-25T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "18×24 vs 24×36 Print Size: Which Is Bigger? (Pixels at 300 DPI)",
    description:
      "24×36 is exactly 2× the area of 18×24, with a 2:3 poster ratio vs 3:4. Exact pixels at 300 DPI and when to offer each.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
  {
    label: "18×24 (portrait)",
    inches: '18×24"',
    ratio: "3:4",
    pixels: "5400×7200",
    area: "432 sq in",
    pack: "3:4 Pack",
    color: "teal",
  },
  {
    label: "18×24 (landscape)",
    inches: '24×18"',
    ratio: "4:3",
    pixels: "7200×5400",
    area: "432 sq in",
    pack: "3:4 Pack",
    color: "teal",
  },
  {
    label: "24×36 (portrait)",
    inches: '24×36"',
    ratio: "2:3",
    pixels: "7200×10800",
    area: "864 sq in",
    pack: "2:3 Pack",
    color: "purple",
  },
  {
    label: "24×36 (landscape)",
    inches: '36×24"',
    ratio: "3:2",
    pixels: "10800×7200",
    area: "864 sq in",
    pack: "2:3 Pack",
    color: "purple",
  },
];

const faqs = [
  {
    question: "Is 24×36 bigger than 18×24?",
    answer:
      "Yes — exactly double. A 24×36 print covers 864 square inches versus 432 square inches for an 18×24, so it is 100% more surface area. Both are poster sizes, but 24×36 is the full movie-poster scale: it commands a large wall and reads from across the room, while 18×24 fits most walls without overwhelming them.",
  },
  {
    question: "What is the aspect ratio of 18×24 and 24×36?",
    answer:
      "18×24 is a 3:4 ratio (0.750). 24×36 is a 2:3 ratio (0.667). That is the widest gap among common poster sizes — 24×36 is noticeably taller and narrower in proportion. Because the ratios differ this much, artwork built for one will not fill the other without obvious white bars or a crop.",
  },
  {
    question: "How many pixels is 18×24 and 24×36 at 300 DPI?",
    answer:
      "At 300 DPI, 18×24 needs 5400×7200 pixels and 24×36 needs 7200×10800 pixels (portrait). The 24×36 file is large — about 78 megapixels — so a full-quality JPEG can be heavy. SnapToSize exports it at 300 DPI while keeping the file under Etsy's 20MB limit, so buyers can actually download it.",
  },
  {
    question: "Can you put an 18×24 print in a 24×36 frame?",
    answer:
      "Yes — with a mat. A 24×36 frame with an 18×24 mat opening bridges the gap and gives the print a bordered, gallery look. Without a mat, an 18×24 print sits loose inside a 24×36 frame. A 24×36 print does not fit an 18×24 frame at all — it is far too large and would have to be cropped down.",
  },
  {
    question: "Can I scale my 18×24 design up to 24×36?",
    answer:
      "Not cleanly. The ratios differ (3:4 vs 2:3), and the gap is wide enough that a straight scale leaves obvious white bars while stretching badly distorts the artwork. Export each at its own ratio, or use a controlled, distortion-free crop to 2:3 when you specifically want the 24×36 from 18×24-ratio art.",
  },
  {
    question: "Which sells better on Etsy — 18×24 or 24×36?",
    answer:
      "18×24 is the versatile poster that fits the most rooms, so it is the safer everyday seller. 24×36 wins for buyers who want a grand statement piece and have the wall for it — it needs roughly 6 feet of viewing distance to look right. Many top listings offer both, since they suit different spaces. SnapToSize generates 18×24 in the 3:4 pack and 24×36 in the 2:3 pack from one upload.",
  },
];

export default function EighteenByTwentyFourVsTwentyFourByThirtySixPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "18×24 vs 24×36 Print Size: Which Is Bigger, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 18×24 and 24×36 poster print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, frame and mat combos, when to offer each on Etsy, and how to export both without cropping.",
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
      { "@type": "ListItem", position: 3, name: "18×24 vs 24×36 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
            <span className="text-slate-300">18×24 vs 24×36</span>
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
                18×24 vs 24×36
                <span
                  className="block mt-1"
                  style={{
                    background: "linear-gradient(90deg, #2DD4BF, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Standard Poster vs Big Poster
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Both are poster sizes, but{" "}
                <strong className="text-white">24×36 is exactly double the area</strong>{" "}
                of an 18×24, and it uses a different{" "}
                <strong className="text-white">2:3 ratio</strong> versus 18×24&apos;s 3:4 —
                so one file won&apos;t fill both without white bars or a crop.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "18×24 = 5400×7200 px",
                  "24×36 = 7200×10800 px",
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
              {/* 18×24 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "126px",
                    height: "168px",
                    background: "rgba(45,212,191,0.08)",
                    borderColor: "rgba(45,212,191,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#2DD4BF", color: "#fff" }}
                  >
                    18×24
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">5400×7200</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#0f766e" }}
                  >
                    ratio 3:4
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">18×24 inches</div>
                  <div className="text-xs text-slate-500">432 sq in · poster</div>
                </div>
              </div>

              {/* 24×36 — double the area, taller */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "157px",
                    height: "236px",
                    background: "rgba(167,139,250,0.08)",
                    borderColor: "rgba(167,139,250,0.4)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    24×36
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 mt-2">7200×10800</span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-3 text-xs font-semibold"
                    style={{ color: "#7c3aed" }}
                  >
                    ratio 2:3
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">24×36 inches</div>
                  <div className="text-xs text-slate-500">864 sq in · big poster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between 18×24 and 24×36 print size?">
          <strong>24×36</strong> is a 2:3 ratio (7200×10800 px at 300 DPI) covering 864
          square inches — exactly double an 18×24, at full movie-poster scale.{" "}
          <strong>18×24</strong> is a 3:4 ratio (5400×7200 px at 300 DPI) covering 432
          square inches — the versatile standard poster. The ratios differ, so one file
          won&apos;t fill both cleanly. Generate 18×24 (3:4 pack) and 24×36 (2:3 pack) from
          one upload with{" "}
          <Link href="/" className="text-accent-light hover:underline">
            SnapToSize
          </Link>
          , free and no signup.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 25, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Pixel Dimensions for 18×24 and 24×36 at 300 DPI
          </h2>
          <p className="text-foreground/70 mb-6">
            Exact pixel dimensions print shops and poster printers need for sharp output.
            Always export at 300 DPI so a large poster stays crisp up close.
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
            How Much Bigger Is 24×36 Than 18×24?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            A 24×36 print covers <strong>864 square inches</strong>, while an 18×24 covers{" "}
            <strong>432 square inches</strong> — <strong>exactly double the area</strong>.
            This is a genuine size leap: 24×36 is the format movie posters use, and it needs
            roughly 6 feet of viewing distance and a wall 8 feet wide or more to sit right.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            18×24 is the more forgiving choice. It still reads as a poster, but it fits above
            a sofa, a desk, or a bed without dominating the room. For most buyers it is the
            safer pick; 24×36 is for the ones who specifically want scale and have the wall
            for it.
          </p>
        </section>

        {/* Ratio section — the core education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why One File Won&apos;t Fill Both Sizes
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            18×24 and 24×36 are both posters, but their{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              aspect ratios
            </Link>{" "}
            are the furthest apart of any common poster pair — which makes separate exports
            non-negotiable:
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">3:4</div>
              <div className="text-sm text-foreground/60 mb-2">18×24 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.750</div>
              <div className="mt-3 text-xs text-foreground/50">
                Standard poster · same as 6×8, 12×16
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">2:3</div>
              <div className="text-sm text-foreground/60 mb-2">24×36 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.667</div>
              <div className="mt-3 text-xs text-foreground/50">
                Movie-poster scale · same as 4×6, 8×12
              </div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            With a 0.083 ratio gap — the widest among common posters — scaling an 18×24 design
            to fill a 24×36 shows clear white bars, and stretching to fill visibly distorts the
            art. Keep each at its own ratio. When you specifically need 24×36 from artwork built
            at 3:4, a{" "}
            <Link href="/distortion-free-crop" className="text-accent-light hover:underline">
              Perfect Fit
            </Link>{" "}
            crop reframes it to 2:3 without stretching, with you choosing what stays in frame.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            The clean approach: export <strong>5400×7200 px</strong> for 18×24 and{" "}
            <strong>7200×10800 px</strong> for 24×36. The 24×36 is a large, ~78-megapixel file —
            SnapToSize generates both from one upload at 300 DPI and keeps each under Etsy&apos;s
            20MB limit, so buyers can actually download them.
          </p>
        </section>

        {/* Mid-page CTA */}
        <ContextualCTA
          problem="A 24×36 at 300 DPI is a huge file, and 18×24 needs its own ratio — that is two careful exports, and an easy way to blow past Etsy's 20MB limit."
          solution="Upload once. SnapToSize generates both poster sizes at the correct pixel dimensions and 300 DPI, each optimized to stay under 20MB — no cropping, no Photoshop."
          appUrl={CTA_URL}
          buttonText="Export Both Posters Free"
        />

        {/* The frame + mat combo — high-intent real-world question */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Can You Put an 18×24 Print in a 24×36 Frame?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yes — with a mat. A <strong>24×36 frame with an 18×24 mat opening</strong> closes
            the gap and frames the print with a clean border, a common way to give an 18×24 a
            larger footprint on a big wall. Without a mat, an 18×24 print floats loosely inside
            a 24×36 frame, so always include the matching mat.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            The reverse does not work: a 24×36 print is too large for an 18×24 frame and would
            have to be cropped. Posters are also often hung unframed with a hanger or clips, in
            which case the print fills the wall at its true size — another reason to deliver each
            size at the correct dimensions rather than scaling one to fake the other.
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
              <Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">
                18×24
              </Link>{" "}
              is the everyday poster.
            </strong>{" "}
            It fits the most rooms, prints affordably, and is the size buyers reach for when they
            want poster impact without committing to a full feature wall. For most poster
            listings, 18×24 is the dependable seller.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>
              <Link href="/etsy-24x36-print-size" className="text-accent-light hover:underline">
                24×36
              </Link>{" "}
              is the statement.
            </strong>{" "}
            It is the size for buyers who want a room-defining piece and have the wall for it —
            gallery walls, lofts, studios, and bold graphic or typographic art that earns the
            scale.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>Offer both and you serve both shoppers</strong> — the one fitting an 18×24
            above the couch and the one filling a feature wall with a 24×36 — from a single
            upload, with no extra design work.
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
        heading="Export 18×24 and 24×36 in Seconds"
        stat="5,400×7,200 px · 7,200×10,800 px"
        description="Upload your design once. SnapToSize generates both poster sizes at the correct pixel dimensions and 300 DPI — each kept under 20MB, no Photoshop, no cropping."
        buttonText="Export Both Posters Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
