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
  "https://app.snaptosize.com?source=seo_11x14-vs-12x16-print-size&kind=guide";

const SLUG = "11x14-vs-12x16-print-size";

export const metadata: Metadata = {
  title: "11×14 vs 12×16 Print Size: What's the Difference? (Pixels at 300 DPI)",
  description:
    "11×14 and 12×16 look similar but have different aspect ratios (11:14 vs 3:4) — they're not interchangeable. See exact pixels at 300 DPI, area difference, and which pack covers each size.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "11×14 vs 12×16 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "11×14 vs 12×16 — different ratios, different packs. Exact pixels at 300 DPI and Etsy selling guide.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-02T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "11×14 vs 12×16 Print Size: What's the Difference? (Pixels at 300 DPI)",
    description:
      "11×14 is 11:14 ratio (Extras Pack). 12×16 is 3:4 ratio (3:4 Pack). Not the same size — separate exports required.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

const sizeTable = [
  {
    label: "11×14 (portrait)",
    ratio: "11:14",
    pixels: "3300×4200",
    area: "154 sq in",
    pack: "Extras Pack",
    color: "purple",
  },
  {
    label: "11×14 (landscape)",
    ratio: "14:11",
    pixels: "4200×3300",
    area: "154 sq in",
    pack: "Extras Pack",
    color: "purple",
  },
  {
    label: "12×16 (portrait)",
    ratio: "3:4",
    pixels: "3600×4800",
    area: "192 sq in",
    pack: "3:4 Pack",
    color: "teal",
  },
  {
    label: "12×16 (landscape)",
    ratio: "4:3",
    pixels: "4800×3600",
    area: "192 sq in",
    pack: "3:4 Pack",
    color: "teal",
  },
];

const faqs = [
  {
    question: "Is 12×16 bigger than 11×14?",
    answer:
      "Yes. A 12×16 print covers 192 square inches versus 154 square inches for an 11×14 — that is 24.7% more surface area. On a wall, 12×16 reads as a noticeably larger statement piece; 11×14 fits standard photo mats and framing templates used by most print shops.",
  },
  {
    question: "What is the aspect ratio of 11×14 and 12×16?",
    answer:
      "11×14 is an 11:14 ratio (0.786). 12×16 is a 3:4 ratio (0.750). Despite looking similar, these ratios differ enough that placing a 3:4 file in an 11:14 frame will show white borders on the sides or crop the edges of your artwork.",
  },
  {
    question: "How many pixels is 12×16 at 300 DPI?",
    answer:
      "A 12×16 print at 300 DPI requires 3600×4800 pixels in portrait orientation, or 4800×3600 pixels in landscape. This is a 3:4 ratio, the same proportional family as 6×8, 9×12, and 15×20 prints.",
  },
  {
    question: "How many pixels is 11×14 at 300 DPI?",
    answer:
      "An 11×14 print at 300 DPI requires 3300×4200 pixels in portrait, or 4200×3300 pixels in landscape. The 11:14 ratio is unique — it does not share proportions with other common sizes, which is why it needs its own export.",
  },
  {
    question: "Can I use my 12×16 file for an 11×14 print?",
    answer:
      "No. A 3:4 (12×16) file scaled to fill an 11:14 frame will show 0.35-inch white bars on each side, or if stretched, will distort the artwork. Print shops sometimes substitute 11×14 for 12×16 orders — providing both files prevents refund disputes.",
  },
  {
    question: "Does SnapToSize export 11×14 and 12×16?",
    answer:
      "Yes. The Extras Pack generates 11×14 at 3300×4200 px at 300 DPI. The 3:4 Pack generates 12×16 at 3600×4800 px at 300 DPI — along with 6×8, 9×12, and 15×20 in the same pack. Run both packs from a single upload.",
  },
];

export default function ElevenByFourteenVsTwelveByEighteenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "11×14 vs 12×16 Print Size: What's the Difference, Exact Pixels at 300 DPI, and Etsy Guide",
    description:
      "Complete comparison of 11×14 and 12×16 print sizes — pixel dimensions at 300 DPI, aspect ratios, area difference, which SnapToSize pack covers each, and how to avoid the print supplier substitution trap.",
    url: `https://snaptosize.com/${SLUG}`,
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    author: {
      "@type": "Organization",
      name: "The SnapToSize Team",
      url: "https://snaptosize.com",
      logo: { "@type": "ImageObject", url: "https://snaptosize.com/logo.png" },
    },
    image: `https://snaptosize.com/assets/og/${SLUG}.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://snaptosize.com/${SLUG}` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
      { "@type": "ListItem", position: 2, name: "Etsy Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
      { "@type": "ListItem", position: 3, name: "11×14 vs 12×16 Print Size", item: `https://snaptosize.com/${SLUG}` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
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
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/etsy-print-sizes" className="hover:text-slate-300 transition-colors">Etsy Print Sizes</Link>
            <span>/</span>
            <span className="text-slate-300">11×14 vs 12×16</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-xs font-semibold tracking-wide uppercase"
                style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.25)", color: "#2DD4BF" }}
              >
                <Ruler className="w-3.5 h-3.5" />
                Print Size Guide
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5">
                11×14 vs 12×16
                <span
                  className="block mt-1"
                  style={{
                    background: "linear-gradient(90deg, #2DD4BF, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Not the Same Size
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                They look close — just 1 inch wider, 2 inches taller. But{" "}
                <strong className="text-white">11×14 is the photo mat standard</strong> and{" "}
                <strong className="text-white">12×16 is a proportional 3:4 size</strong>.
                Different ratios, different packs, and print suppliers have been known to ship one when you ordered the other.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["11×14 = 3300×4200 px", "12×16 = 3600×4800 px", "Both at 300 DPI"].map((stat) => (
                  <span
                    key={stat}
                    className="inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "#94a3b8" }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <Button href={CTA_URL} variant="primary" className="group inline-flex items-center gap-2">
                Export Both Sizes Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>

            {/* Right: size visual — hidden on mobile to prevent overflow */}
            <div className="hidden md:flex items-end justify-center gap-10">
              {/* 11×14 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{ width: "154px", height: "196px", background: "rgba(167,139,250,0.08)", borderColor: "rgba(167,139,250,0.4)" }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#A78BFA", color: "#fff" }}
                  >
                    11×14
                  </span>
                  <span className="font-mono text-xs text-slate-400 mt-2">3300×4200</span>
                  <span className="font-mono text-xs text-slate-500">px @ 300 DPI</span>
                  <span className="absolute bottom-3 text-xs font-semibold" style={{ color: "#7c3aed" }}>
                    ratio 11:14
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">11×14 inches</div>
                  <div className="text-xs text-slate-500">154 sq in · photo mat</div>
                </div>
              </div>

              {/* 12×16 — slightly larger */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{ width: "168px", height: "224px", background: "rgba(45,212,191,0.08)", borderColor: "rgba(45,212,191,0.4)" }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "#2DD4BF", color: "#fff" }}
                  >
                    12×16
                  </span>
                  <span className="font-mono text-xs text-slate-400 mt-2">3600×4800</span>
                  <span className="font-mono text-xs text-slate-500">px @ 300 DPI</span>
                  <span className="absolute bottom-3 text-xs font-semibold" style={{ color: "#0f766e" }}>
                    ratio 3:4
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">12×16 inches</div>
                  <div className="text-xs text-slate-500">192 sq in · 24.7% larger</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <QuickAnswer question="What is the difference between 11×14 and 12×16 print size?">
          <strong>11×14</strong> is an 11:14 ratio (3300×4200 px at 300 DPI) — the photo mat standard used by most frame shops.{" "}
          <strong>12×16</strong> is a 3:4 ratio (3600×4800 px at 300 DPI) — part of the proportional family that includes 6×8, 9×12, and 15×20.
          They are 24.7% different in area and cannot share the same file without white borders or distortion.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 2, 2026" />

        {/* Size data table */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Pixel Dimensions for 11×14 and 12×16 at 300 DPI</h2>
          <p className="text-foreground/70 mb-6">
            Exact pixel dimensions for sharp print output at 300 DPI — what print shops and Etsy both require.
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
                          row.color === "teal" ? "bg-teal-50 text-teal-700" : "bg-purple-50 text-purple-700"
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
          <h2 className="text-2xl font-bold mb-4">How Much Bigger Is 12×16 Than 11×14?</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            A 12×16 print covers <strong>192 square inches</strong>, while an 11×14 covers{" "}
            <strong>154 square inches</strong> — a difference of 38 square inches, or{" "}
            <strong>24.7% more surface area</strong> for the 12×16. The extra size comes from an
            extra inch in width and two extra inches in height, but because those increases are
            asymmetric, they also shift the aspect ratio.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            At arm&apos;s length, 11×14 and 12×16 can look similar. Side by side, the 12×16 is
            clearly more imposing — it fills more of a wall and is better suited for statement
            pieces. The 11×14 sits better in traditional picture frames and mat-cut openings
            used by retail frame shops.
          </p>
        </section>

        {/* Ratio section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Why the Same File Won&apos;t Work for Both</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            11×14 and 12×16 are not part of the same proportional family. Their ratios diverge
            enough to make file substitution visible:
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">11:14</div>
              <div className="text-sm text-foreground/60 mb-2">11×14 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.786</div>
              <div className="mt-3 text-xs text-foreground/50">Photo mat standard · unique ratio</div>
            </div>
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.18)" }}
            >
              <div className="text-3xl font-bold mb-1">3:4</div>
              <div className="text-sm text-foreground/60 mb-2">12×16 ratio</div>
              <div className="font-mono text-xs text-foreground/50">= 0.750</div>
              <div className="mt-3 text-xs text-foreground/50">Same as 6×8, 9×12, 15×20</div>
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-4">
            Placing a 3:4 file (12×16) in an 11:14 frame produces 0.35-inch white bars on each
            side — just enough to look like an error, not intentional matting. Stretching to fill
            slightly squashes the image width, which is visible on portraits and text-heavy designs.
          </p>

          {/* 3:4 proportional family visual */}
          <div
            className="rounded-xl p-6 mb-4"
            style={{ background: "rgba(45,212,191,0.06)", border: "1px solid rgba(45,212,191,0.18)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2DD4BF" }}>
              The 3:4 proportional family
            </p>
            <div className="flex items-end justify-center gap-5 mb-5">
              {[
                { label: "6×8", w: 42, h: 56, sub: "1800×2400 px" },
                { label: "9×12", w: 63, h: 84, sub: "2700×3600 px" },
                { label: "12×16", w: 84, h: 112, sub: "3600×4800 px", highlight: true },
                { label: "15×20", w: 105, h: 140, sub: "4500×6000 px" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-lg flex items-center justify-center text-xs font-bold relative"
                    style={{
                      width: s.w,
                      height: s.h,
                      background: s.highlight ? "rgba(45,212,191,0.20)" : "rgba(45,212,191,0.08)",
                      border: s.highlight ? "2px solid rgba(45,212,191,0.6)" : "1px solid rgba(45,212,191,0.25)",
                      color: s.highlight ? "#2DD4BF" : "#5eead4",
                    }}
                  >
                    {s.label}
                  </div>
                  <span className="font-mono text-[10px] text-foreground/40 text-center leading-tight">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/70 text-center">
              All share the same 3:4 ratio — same composition, different scale.{" "}
              <strong className="text-foreground/90">The 3:4 Pack generates all four from one upload.</strong>
            </p>
          </div>

          <p className="text-foreground/70 leading-relaxed">
            The correct approach: export two separate files. One at <strong>3300×4200 px</strong>{" "}
            for 11×14 and one at <strong>3600×4800 px</strong> for 12×16. SnapToSize generates
            both from a single upload — no Photoshop, no manual resizing.
          </p>
        </section>

        <ContextualCTA
          problem="Offering 11×14 and 12×16 separately means two Photoshop canvases, two exports, and a support ticket when a buyer&apos;s print shop delivers the wrong one."
          solution="Upload once. SnapToSize generates both sizes at the correct pixel dimensions — no cropping, guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export Both Sizes Free"
        />

        {/* When to offer each */}
        <section>
          <h2 className="text-2xl font-bold mb-4">When to Offer Each Size on Etsy</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>11×14 is the go-to for matted prints.</strong> Retail frame shops stock 11×14
            mat openings — it&apos;s the standard for gallery-style framing. Buyers who want
            their print professionally framed will specifically request 11×14. It also fits the
            IKEA RIBBA 13×18 frame with a mat.
          </p>

          {/* Frame availability comparison */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-xl p-4" style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)" }}>
              <div className="text-sm font-bold mb-2" style={{ color: "#A78BFA" }}>11×14 frames</div>
              <ul className="text-xs text-foreground/60 space-y-1">
                <li>✓ IKEA RIBBA (with mat)</li>
                <li>✓ Target, Walmart, Amazon</li>
                <li>✓ Most print lab mat cuts</li>
                <li>✓ Standard gallery framing</li>
              </ul>
            </div>
            <div className="rounded-xl p-4" style={{ background: "rgba(45,212,191,0.08)", border: "1px solid rgba(45,212,191,0.15)" }}>
              <div className="text-sm font-bold mb-2" style={{ color: "#2DD4BF" }}>12×16 frames</div>
              <ul className="text-xs text-foreground/60 space-y-1">
                <li>✓ Custom frame shops</li>
                <li>✓ Online framers (Framebridge)</li>
                <li>✓ POD canvas stretchers</li>
                <li>△ Rarely in-store retail</li>
              </ul>
            </div>
          </div>
          <p className="text-foreground/70 leading-relaxed mb-4">
            <strong>12×16 is for proportional scaling.</strong> If you already sell 8×10 (4:5 pack)
            and want a large-format option, 12×16 is not the right scale-up — 16×20 is. But if you
            sell in the 3:4 family (6×8, 9×12), then 12×16 is the natural large-format companion
            at the same ratio.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>The safest move: offer both.</strong> Buyers searching for a large print will
            check multiple sizes. Two exports from one upload gives you coverage across both the
            photo mat buyers and the proportional-scaling buyers.
          </p>
        </section>

        {/* The supplier substitution problem */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why Print Suppliers Sometimes Deliver the Wrong Size
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            This is a real Etsy seller pain point: a buyer orders a 12×16 print, but the POD
            (print-on-demand) supplier fulfils it as 11×14. The supplier substitutes because
            the sizes{" "}
            <em>look</em> similar to a human — but the output is smaller and the wrong ratio,
            which buyers notice when they try to frame it.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            The root cause: many suppliers stock standard paper sizes. 11×14 is a common stock
            size; 12×16 is less common and may require special ordering. Suppliers sometimes
            substitute without disclosing it.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            <strong>How to protect yourself:</strong> Provide both files in your digital download
            listing. When a buyer gets their own print done, they choose the file that matches
            the paper size available to them. Providing the exact 12×16 file (3600×4800 px) and
            the exact 11×14 file (3300×4200 px) eliminates ambiguity — and eliminates refund
            requests.
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
        heading="Export 11×14 and 12×16 in Seconds"
        stat="3,300×4,200 px · 3,600×4,800 px"
        description="Upload your design once. SnapToSize generates both sizes at the correct pixel dimensions — no Photoshop, no cropping, guaranteed under 20MB."
        buttonText="Export Both Sizes Free"
        appUrl={CTA_URL}
      />
    </>
  );
}
