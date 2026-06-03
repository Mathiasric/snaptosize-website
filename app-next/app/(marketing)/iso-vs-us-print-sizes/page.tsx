import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AuthorByline } from "@/components/AuthorByline";
import { Button } from "@/components/Button";
import { ContextualCTA } from "@/components/ContextualCTA";
import { Check, ArrowRight, Globe, AlertTriangle } from "lucide-react";

const SLUG = "iso-vs-us-print-sizes";
const CTA_URL = `https://app.snaptosize.com?source=seo_${SLUG}&kind=guide`;

const isoSizes = [
  {
    label: "A5",
    inches: "5.83×8.27",
    pixels: "1748×2480",
    ratio: "1:√2",
    area: "48.2 sq in",
    use: "Greeting cards, small prints",
    color: "purple",
  },
  {
    label: "A4",
    inches: "8.27×11.69",
    pixels: "2480×3507",
    ratio: "1:√2",
    area: "96.7 sq in",
    use: "Standard planners, wall art, EU printers",
    color: "teal",
  },
  {
    label: "A3",
    inches: "11.69×16.54",
    pixels: "3508×4961",
    ratio: "1:√2",
    area: "193.5 sq in",
    use: "Posters, large wall art",
    color: "purple",
  },
  {
    label: "A2",
    inches: "16.54×23.39",
    pixels: "4961×7016",
    ratio: "1:√2",
    area: "387 sq in",
    use: "Large format posters",
    color: "teal",
  },
];

const usSizes = [
  {
    label: "Half Letter",
    inches: "5.5×8.5",
    pixels: "1650×2550",
    ratio: "17:26",
    area: "46.75 sq in",
    use: "Planners, notebooks",
    color: "purple",
  },
  {
    label: "Letter",
    inches: "8.5×11",
    pixels: "2550×3300",
    ratio: "17:22",
    area: "93.5 sq in",
    use: "Home & office printers (US standard)",
    color: "teal",
  },
  {
    label: "Legal",
    inches: "8.5×14",
    pixels: "2550×4200",
    ratio: "17:28",
    area: "119 sq in",
    use: "Legal documents, long-form prints",
    color: "purple",
  },
  {
    label: "Tabloid",
    inches: "11×17",
    pixels: "3300×5100",
    ratio: "11:17",
    area: "187 sq in",
    use: "Posters, newspapers",
    color: "teal",
  },
];

const nearestMap = [
  { iso: "A5 (5.83×8.27\")", us: "Half Letter (5.5×8.5\")", gap: "A5 is 6% taller, 6% narrower", safe: false },
  { iso: "A4 (8.27×11.69\")", us: "Letter (8.5×11\")", gap: "A4 is 3% narrower, 6% taller", safe: false },
  { iso: "A3 (11.69×16.54\")", us: "Tabloid (11×17\")", gap: "A3 is 6% narrower, 3% shorter", safe: false },
  { iso: "A2 (16.54×23.39\")", us: "No direct equivalent", gap: "Closest: 17×22\" (custom order)", safe: false },
];

const faqs = [
  {
    question: "Is A4 the same as US Letter size?",
    answer:
      "No. A4 is 8.27×11.69 inches (2480×3507 px at 300 DPI). US Letter is 8.5×11 inches (2550×3300 px at 300 DPI). A4 is 3% narrower and 6% taller. They look similar but have different aspect ratios — a file sized for one will show white borders or crop when printed on the other.",
  },
  {
    question: "What is the ISO paper size system?",
    answer:
      "The ISO 216 system (used by most of the world outside North America) is based on a 1:√2 aspect ratio. Every size is exactly half of the next: A3 = 2× A4, A4 = 2× A5. This means you can scale artwork between ISO sizes without any cropping. The US system (Letter, Legal, Tabloid) uses different aspect ratios with no such mathematical relationship.",
  },
  {
    question: "What happens if I print A4 on US Letter paper?",
    answer:
      "If you scale A4 to fill Letter width, you crop 0.35 inches from the top and bottom of your artwork. If you scale A4 to fit Letter height, you get 0.115-inch white bars on each side. Neither result is ideal for wall art or planners. You need a separate file sized correctly for each paper standard.",
  },
  {
    question: "How many pixels is A4 at 300 DPI?",
    answer:
      "A4 at 300 DPI is 2480×3508 pixels in portrait orientation (8.27×11.69 inches). Landscape is 3508×2480 pixels. This is the standard pixel dimension for EU/UK print-on-demand shops, planners sold to European buyers, and most international print labs.",
  },
  {
    question: "Do Etsy buyers in Europe use A4 or US sizes?",
    answer:
      "European buyers typically print on A4 — it is the standard home printer paper across the EU and UK. US buyers use Letter (8.5×11). If you only offer Letter files, EU buyers will experience white borders or cropping. Offering both A4 and Letter versions dramatically reduces buyer complaints from international customers.",
  },
  {
    question: "What is the nearest US equivalent to A3?",
    answer:
      "The nearest US size to A3 (11.69×16.54 inches) is Tabloid (11×17 inches). They are close but not the same — A3 is 6% narrower and 3% shorter. A file designed for A3 placed in an 11×17 frame will show white bars on the sides. For large posters, always size your file to match exactly what your buyer will print on.",
  },
  {
    question: "Can I sell one file that works for both A4 and Letter?",
    answer:
      "No. A4 (1:1.414 ratio) and Letter (17:22 = 1:1.294 ratio) have different aspect ratios. A single file cannot fill both without borders or cropping. The correct approach is to offer two separate files — one at 2480×3508 px for A4 buyers and one at 2550×3300 px for Letter buyers.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer as string },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ISO vs US Print Sizes: A4, Letter, A3, Tabloid Explained",
  description:
    "A4 and Letter look similar but have different aspect ratios. A file sized for one shows white borders or crops on the other. Complete pixel dimensions for both systems at 300 DPI.",
  url: `https://snaptosize.com/${SLUG}`,
  dateModified: "2026-06-03T00:00:00Z",
  author: { "@type": "Organization", name: "SnapToSize" },
  publisher: { "@type": "Organization", name: "SnapToSize", url: "https://snaptosize.com" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptosize.com" },
    { "@type": "ListItem", position: 2, name: "Print Sizes", item: "https://snaptosize.com/etsy-print-sizes" },
    { "@type": "ListItem", position: 3, name: "ISO vs US Print Sizes", item: `https://snaptosize.com/${SLUG}` },
  ],
};

export const metadata: Metadata = {
  title: "ISO vs US Print Sizes: A4, Letter, A3, Tabloid Explained (Pixels at 300 DPI)",
  description:
    "A4 and Letter look similar but have different aspect ratios — a file sized for one shows white borders on the other. Complete ISO and US print size chart with exact pixels at 300 DPI.",
  alternates: {
    canonical: `https://snaptosize.com/${SLUG}`,
  },
  openGraph: {
    title: "ISO vs US Print Sizes: A4, Letter, A3 Explained (Pixels at 300 DPI)",
    description:
      "A4 is not the same as Letter. A3 is not the same as Tabloid. Exact pixels for every ISO and US print size at 300 DPI — with the conversion trap explained.",
    url: `https://snaptosize.com/${SLUG}`,
    type: "article",
    images: [`/assets/og/${SLUG}.png`],
    modifiedTime: "2026-06-03T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO vs US Print Sizes: A4, Letter, A3, Tabloid at 300 DPI",
    description:
      "A4 ≠ Letter. A3 ≠ Tabloid. Here's the complete size map — and why cross-system files get white borders.",
    images: [`/assets/og/${SLUG}.png`],
  },
};

export default function IsoVsUsPrintSizesPage() {
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
            "linear-gradient(135deg, #0f172a 0%, #0c1a2e 50%, #0f172a 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, rgba(45,212,191,0.12) 0%, transparent 50%), radial-gradient(circle at 85% 50%, rgba(59,130,246,0.12) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-foreground-60 mb-8">
            <Link href="/" className="hover:text-foreground-60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/etsy-print-sizes" className="hover:text-foreground-60 transition-colors">Print Sizes</Link>
            <span>/</span>
            <span className="text-foreground-60">ISO vs US Print Sizes</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 text-teal-300 text-xs font-medium tracking-widest uppercase mb-6">
                <Globe className="w-3 h-3" />
                International Sellers Guide
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                ISO vs US Print Sizes:{" "}
                <span className="text-teal-300">A4, Letter, A3</span>{" "}
                Explained
              </h1>

              <p className="text-lg text-foreground-60 mb-8 max-w-lg">
                A4 and Letter look almost identical on screen. In print, they
                have different aspect ratios — and the wrong file gives EU or US
                buyers white borders. Here&apos;s the complete system map.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "A4 ≠ Letter",
                  "A3 ≠ Tabloid",
                  "Exact pixels at 300 DPI",
                  "Etsy seller guide",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="flex items-center gap-1.5 text-xs text-teal-300 bg-teal-400/10 border border-teal-400/20 rounded-full px-3 py-1"
                  >
                    <Check className="w-3 h-3" />
                    {pill}
                  </span>
                ))}
              </div>

              <a href={CTA_URL}>
                <Button variant="primary">
                  Export ISO + US Sizes Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <p className="text-xs text-foreground-60 mt-3">
                Upload once — get A4, Letter, A3, and Tabloid in one click
              </p>
            </div>

            {/* Right: proportional visual — hidden on mobile */}
            <div className="hidden md:flex items-end justify-center gap-12">
              {/* A4 */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "108px",
                    height: "153px",
                    borderColor: "#2DD4BF",
                    background: "rgba(45,212,191,0.07)",
                  }}
                >
                  <span className="font-mono text-sm font-bold text-teal-300">A4</span>
                  <span className="font-mono text-[10px] text-slate-400 mt-1">2480×3507</span>
                  <span className="font-mono text-[10px] text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-2 text-[10px] font-semibold"
                    style={{ color: "#2DD4BF" }}
                  >
                    8.27×11.69&quot;
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">ISO A4</div>
                  <div className="text-xs text-slate-500">96.7 sq in · 1:√2 ratio</div>
                </div>
              </div>

              {/* Letter */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl border-2 flex flex-col items-center justify-center relative"
                  style={{
                    width: "114px",
                    height: "148px",
                    borderColor: "#A78BFA",
                    background: "rgba(167,139,250,0.07)",
                  }}
                >
                  <span className="font-mono text-sm font-bold" style={{ color: "#A78BFA" }}>Letter</span>
                  <span className="font-mono text-[10px] text-slate-400 mt-1">2550×3300</span>
                  <span className="font-mono text-[10px] text-slate-500">px @ 300 DPI</span>
                  <span
                    className="absolute bottom-2 text-[10px] font-semibold"
                    style={{ color: "#A78BFA" }}
                  >
                    8.5×11&quot;
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-200">US Letter</div>
                  <div className="text-xs text-slate-500">93.5 sq in · 17:22 ratio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Quick answer for AI/GEO */}
        <QuickAnswer question="What is the difference between ISO and US print sizes?">
          The world uses two paper size systems. The <strong>ISO system</strong> (A4, A3, A5 —
          used across Europe, Asia, and Australia) is based on a 1:√2 aspect ratio where every
          size is exactly half of the next. The <strong>US system</strong> (Letter, Legal, Tabloid)
          uses different aspect ratios with no such mathematical relationship. A4 (8.27×11.69&quot;) and
          Letter (8.5×11&quot;) look nearly identical but cannot share the same file without white
          borders or cropping.
        </QuickAnswer>

        <AuthorByline lastUpdated="June 3, 2026" />

        {/* ===== ISO SIZES ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-2">ISO Paper Sizes (A-Series)</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Used in the EU, UK, Australia, and most of the world. Every size shares the same
            1:√2 aspect ratio, so scaling between sizes never crops your artwork. A3 is exactly
            twice the area of A4. A4 is exactly twice the area of A5.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Size</th>
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Inches</th>
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Pixels @ 300 DPI</th>
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Area</th>
                  <th className="text-left py-3 text-foreground/50 font-medium">Common use</th>
                </tr>
              </thead>
              <tbody>
                {isoSizes.map((s) => (
                  <tr key={s.label} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-4">
                      <span
                        className="font-bold text-sm"
                        style={{ color: s.color === "teal" ? "#2DD4BF" : "#A78BFA" }}
                      >
                        {s.label}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-mono text-xs text-foreground/80">{s.inches}&quot;</td>
                    <td className="py-3 pr-4 font-mono text-xs text-foreground/80">{s.pixels} px</td>
                    <td className="py-3 pr-4 text-xs text-foreground/60">{s.area}</td>
                    <td className="py-3 text-xs text-foreground/60">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="mt-4 rounded-xl p-4 text-xs text-foreground/70"
            style={{ background: "rgba(45,212,191,0.06)", border: "1px solid rgba(45,212,191,0.12)" }}
          >
            <strong className="text-teal-300">ISO shortcut:</strong> All A-sizes share the 1:√2 ratio (≈1.414).
            You can always halve or double artwork between sizes without any cropping — an A3 design
            scales perfectly to A4, which scales perfectly to A5.
          </div>
        </section>

        {/* ===== US SIZES ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-2">US Paper Sizes (ANSI)</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Used primarily in the United States and Canada. Based on the imperial system — sizes
            do not share a common aspect ratio, so artwork does not scale cleanly between them.
            Most US home printers take Letter (8.5×11). Tabloid (11×17) is the standard for
            large-format posters.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Size</th>
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Inches</th>
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Pixels @ 300 DPI</th>
                  <th className="text-left py-3 pr-4 text-foreground/50 font-medium">Area</th>
                  <th className="text-left py-3 text-foreground/50 font-medium">Common use</th>
                </tr>
              </thead>
              <tbody>
                {usSizes.map((s) => (
                  <tr key={s.label} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-4">
                      <span
                        className="font-bold text-sm"
                        style={{ color: s.color === "teal" ? "#2DD4BF" : "#A78BFA" }}
                      >
                        {s.label}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-mono text-xs text-foreground/80">{s.inches}&quot;</td>
                    <td className="py-3 pr-4 font-mono text-xs text-foreground/80">{s.pixels} px</td>
                    <td className="py-3 pr-4 text-xs text-foreground/60">{s.area}</td>
                    <td className="py-3 text-xs text-foreground/60">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-foreground/50 mt-3">
            US photo sizes (4×6, 5×7, 8×10, 11×14) are separate from the ANSI office paper
            system — see the{" "}
            <Link href="/etsy-print-sizes" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
              Etsy print sizes guide
            </Link>{" "}
            for photo frame sizes.
          </p>
        </section>

        {/* ===== NEAREST EQUIVALENTS ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-2">ISO ↔ US: Nearest Equivalents</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            There is no perfect cross-system equivalent. Every ISO size has a nearby US size,
            but they all differ in aspect ratio — a file designed for one will never fill the
            other cleanly.
          </p>

          <div className="space-y-3">
            {nearestMap.map((row) => (
              <div
                key={row.iso}
                className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex-1">
                  <span className="font-mono text-sm font-semibold text-teal-300">{row.iso}</span>
                  <span className="text-foreground/40 mx-3">→</span>
                  <span className="font-mono text-sm font-semibold" style={{ color: "#A78BFA" }}>{row.us}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <AlertTriangle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span className="text-foreground/60">{row.gap}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHITESPACE TRAP ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The Whitespace Trap: Why Cross-System Files Fail</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            The most common complaint international Etsy sellers receive: <em>&ldquo;There are white
            borders when I print your file.&rdquo;</em> Almost always, this is an ISO/US mismatch.
          </p>

          {/* A4 vs Letter visual breakdown */}
          <div
            className="rounded-2xl p-6 mb-6"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <h3 className="font-bold text-base mb-4 text-red-400">A4 file on Letter paper (and vice versa)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-2">Scale to fill width</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  A4 scaled to 8.5&quot; wide fills Letter horizontally, but is 11.69&quot; tall —{" "}
                  <strong className="text-red-400">0.69&quot; crops off top and bottom</strong> of your artwork.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-2">Scale to fit height</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  A4 scaled to 11&quot; tall is only 7.79&quot; wide —{" "}
                  <strong className="text-red-400">0.36&quot; white bars appear on each side</strong> when printed on Letter.
                </p>
              </div>
            </div>
            <div
              className="mt-4 rounded-xl p-3 text-xs text-foreground/60"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              The same problem occurs in reverse: a Letter file on A4 paper will either crop the sides
              or leave white bars at top and bottom. The only fix is to offer separate files — one
              sized exactly for each system.
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed">
            EU and UK buyers who purchase your digital download will print at home on A4 — the
            standard paper that comes in every European printer box. If you only include a
            Letter-sized file, they will need to manually adjust their print settings or accept
            borders. Most won&apos;t. They&apos;ll leave a review instead.
          </p>

          <p className="text-foreground/70 leading-relaxed mt-4">
            The simple fix is to include both files: one at{" "}
            <strong className="text-white">2480×3507 px for A4</strong> and one at{" "}
            <strong className="text-white">2550×3300 px for Letter</strong>. For posters,
            include both <strong className="text-white">3508×4961 px for A3</strong> and{" "}
            <strong className="text-white">3300×5100 px for Tabloid</strong>.
          </p>
        </section>

        {/* ===== MID-PAGE CTA ===== */}
        <ContextualCTA
          problem="Creating separate A4 and Letter files means two Photoshop canvases, two exports, and remembering which version is which — every time you create a new design."
          solution="Upload once. SnapToSize generates A4, Letter, A3, and Tabloid at the correct pixel dimensions in seconds — no Photoshop, no cropping, guaranteed under 20MB."
          appUrl={CTA_URL}
          buttonText="Export ISO + US Sizes Free"
        />

        {/* ===== WHEN TO OFFER EACH ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Which Sizes to Offer on Etsy</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            The answer depends on your audience. Here&apos;s a practical guide:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(45,212,191,0.07)", border: "1px solid rgba(45,212,191,0.15)" }}
            >
              <div className="text-sm font-bold mb-3" style={{ color: "#2DD4BF" }}>
                Always include Letter + A4
              </div>
              <ul className="text-xs text-foreground/70 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-teal-400 mt-0.5 flex-shrink-0" />
                  Wall art, planners, or printable journals
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-teal-400 mt-0.5 flex-shrink-0" />
                  Listings with international shipping visibility
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-teal-400 mt-0.5 flex-shrink-0" />
                  Any category popular in the EU (art prints, home decor)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-teal-400 mt-0.5 flex-shrink-0" />
                  If your shop already gets EU reviews or messages
                </li>
              </ul>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.15)" }}
            >
              <div className="text-sm font-bold mb-3" style={{ color: "#A78BFA" }}>
                Add A3 + Tabloid for posters
              </div>
              <ul className="text-xs text-foreground/70 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                  Large wall art (galleries, statement pieces)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                  Listings targeting EU buyers explicitly
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                  Print-on-demand listings (Printful, Printify, SPOD EU)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                  Shops that already sell A4 and want the upsell size
                </li>
              </ul>
            </div>
          </div>

          <div
            className="mt-6 rounded-xl p-5 border-l-4"
            style={{ borderColor: "#2DD4BF", background: "rgba(45,212,191,0.05)" }}
          >
            <p className="text-sm text-foreground/80 leading-relaxed">
              <strong className="text-white">Practical starting point:</strong> Add A4 to every
              existing listing that offers Letter. Etsy allows up to 5 digital files — use slots
              for Letter, A4, and a combined &ldquo;both sizes&rdquo; PDF with instructions. EU buyers
              appreciate the extra file and rarely leave sizing complaints.
            </p>
          </div>

          <p className="text-foreground/70 leading-relaxed mt-6">
            For more detail on individual US photo sizes, see the{" "}
            <Link href="/8x10-vs-8-5x11-print-size" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
              8×10 vs 8.5×11 comparison
            </Link>
            {" "}— the most common confusion point for US sellers. For EU-targeted wall art
            specifically, the{" "}
            <Link href="/etsy-a1-print-size" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
              A1 print size guide
            </Link>
            {" "}covers large-format ISO sizes used by European print labs. The{" "}
            <Link href="/print-sizes-at-300-dpi" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
              300 DPI pixel chart
            </Link>
            {" "}lists exact pixel dimensions for every common size including ISO and US formats.
          </p>
        </section>

        {/* ===== FAQ ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-6">FAQ: ISO vs US Print Sizes</h2>
          <FAQAccordion items={faqs} />
        </section>

      </main>

      <FinalCTA
        heading="Export A4 + Letter in Seconds"
        stat="2,480×3,507 px · 2,550×3,300 px"
        description="Upload your design once. SnapToSize generates A4, Letter, A3, and Tabloid at the correct pixel dimensions — no Photoshop, no cropping, under 20MB guaranteed."
        buttonText="Export ISO + US Sizes Free"
        appUrl={CTA_URL}
      />

      <RelatedPages currentSlug={SLUG} />
    </>
  );
}
