import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { QuickAnswer } from "@/components/QuickAnswer";
import RelatedPages from "@/components/RelatedPages";
import { ContextualCTA } from "@/components/ContextualCTA";
import { RatioPackFan, type FanPrint } from "@/components/RatioPackFan";

export const metadata: Metadata = {
  title: "Frame Size for 11×14 Print with Mat — 16×20 Frame Guide (2026)",
  description:
    "11×14 prints fit in a 16×20 frame with mat (2.5-inch borders, mat window 10.75×13.75 in). Full specs: mat window, border widths, pixel dimensions at 300 DPI for Etsy digital sellers.",
  alternates: {
    canonical: "https://snaptosize.com/frame-size-for-11x14-print-with-mat",
  },
  openGraph: {
    title: "Frame Size for 11×14 Print with Mat | SnapToSize",
    description:
      "11×14 print → 16×20 frame with mat. Mat window 10.75×13.75 in, 2.5-inch borders, 3300×4200 px at 300 DPI. Full guide for Etsy digital sellers.",
    url: "https://snaptosize.com/frame-size-for-11x14-print-with-mat",
    images: [
      {
        url: "/assets/og/frame-size-for-11x14-print-with-mat.png",
        width: 1200,
        height: 630,
        alt: "Frame Size for 11×14 Print with Mat — 16×20 Frame Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frame Size for 11×14 Print with Mat — 16×20 Frame Guide",
    description:
      "11×14 print fits 16×20 frame with mat. Window 10.75×13.75 in, 2.5-inch borders, 3300×4200 px at 300 DPI.",
    images: ["/assets/og/frame-size-for-11x14-print-with-mat.png"],
  },
};

export default function FrameSizeFor11x14PrintWithMatPage() {
  const appUrl =
    "https://app.snaptosize.com/?source=seo_frame-size-for-11x14-print-with-mat&kind=guide";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Frame Size for 11×14 Print with Mat — 16×20 Frame Guide",
    description:
      "11×14 prints fit in a 16×20 frame with mat. Mat window is 10.75×13.75 in with 2.5-inch borders. Full pixel dimensions and Etsy seller guide.",
    url: "https://snaptosize.com/frame-size-for-11x14-print-with-mat",
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
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
        name: "Print Sizes",
        item: "https://snaptosize.com/etsy-print-sizes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mat Sizes for Frames",
        item: "https://snaptosize.com/print-mat-sizes-for-frames",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Frame Size for 11×14 Print with Mat",
        item: "https://snaptosize.com/frame-size-for-11x14-print-with-mat",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What frame size do I need for an 11×14 print with a mat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'A 16×20 frame is the standard choice for an 11×14 print with a mat. The mat window is typically 10.75×13.75 inches, leaving a 0.125-inch lip to hold the print securely. This gives you a 2.5-inch mat border on the left/right sides and roughly 3.1-inch borders on top/bottom — a classic gallery proportion.',
        },
      },
      {
        "@type": "Question",
        name: "What is the mat window size for an 11×14 print in a 16×20 frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Standard mat window for an 11×14 print in a 16×20 frame is 10.75×13.75 inches. This undercuts the print by 0.125 inches on each side so the mat lip holds the print in place from behind, keeping it flat and preventing it from falling through.',
        },
      },
      {
        "@type": "Question",
        name: "Can I use a 14×18 frame for an 11×14 print with a mat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Yes — a 14×18 frame works for an 11×14 print with a narrower mat (1.5-inch borders). Mat window would be 10.75×13.75 in. This gives a tighter, more modern look. A 16×20 frame with wider borders is more traditional and gives gallery proportions. Both are valid depending on your aesthetic.',
        },
      },
      {
        "@type": "Question",
        name: "How many pixels is an 11×14 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'An 11×14 inch print at 300 DPI is 3,300×4,200 pixels. This is the standard resolution for professional print quality. At 150 DPI it would be 1,650×2,100 px — acceptable for home printing but not Etsy-quality. Always deliver 300 DPI files to buyers.',
        },
      },
      {
        "@type": "Question",
        name: "What is the aspect ratio of an 11×14 print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: '11×14 is a 11:14 ratio, approximately 0.786:1 (portrait). It sits between the 3:4 ratio (0.75) and the 4:5 ratio (0.8). This means 11×14 does not match standard 3:4 or 4:5 artwork directly — a small amount of cropping or white border padding is usually needed when resizing other aspect ratios to 11×14.',
        },
      },
      {
        "@type": "Question",
        name: "Should I include bleed on my 11×14 Etsy digital file?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'For Etsy digital downloads intended for home printing, bleed is optional. For print-ready files or print-on-demand, add 0.125-inch bleed on all sides (making the file 11.25×14.25 in, or 3,375×4,275 px at 300 DPI). Most home printers cannot use bleed, so a clean 11×14 at 300 DPI is the standard digital download format.',
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between mat window size and print size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'The mat window is always slightly smaller than the print. For an 11×14 print, the mat window is typically 10.75×13.75 in — 0.25 inches narrower and shorter than the print. This is intentional: the mat overlaps the print edges by 0.125 inches on each side, holding the print in place and preventing it from slipping through the opening.',
        },
      },
    ],
  };

  const deerPrints: FanPrint[] = [
    { src: "/assets/modes-demo/resize/deer-3x4.jpg", size: "6×8 in", tag: "3:4", ratio: 0.75 },
    { src: "/assets/modes-demo/resize/deer-iso.jpg", size: "A4", tag: "ISO A", ratio: 0.707 },
    { src: "/assets/modes-demo/resize/deer-2x3.jpg", size: "8×12 in", tag: "2:3", ratio: 0.667 },
    { src: "/assets/modes-demo/resize/deer-4x5.jpg", size: "8×10 in", tag: "4:5", ratio: 0.8 },
    { src: "/assets/modes-demo/resize/deer-extras.jpg", size: "11×14 in", tag: "Extras", ratio: 0.786 },
  ];

  return (
    <main>
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
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #09090F 0%, #0C0B14 40%, #090C10 70%, #070A0D 100%)",
        }}
      >
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(45,212,191,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(45,212,191,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Teal radial glow */}
        <div
          className="absolute top-[-10%] right-[10%] w-[600px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #2DD4BF, transparent 70%)" }}
        />

        <Container>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* Left: Content */}
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#2DD4BF] uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/5">
                <span>Frame + Mat Guide</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Frame Size for 11×14 Print
                <span className="block text-[#2DD4BF] mt-1">with Mat</span>
              </h1>

              <p className="text-foreground-60 text-base md:text-lg mb-6">
                A <strong>16×20 frame</strong> is the standard for an 11×14 print with mat. Mat
                window: 10.75×13.75 in. Border: ~2.5 inches per side. Pixel spec: 3,300×4,200 px at 300 DPI.
              </p>

              <QuickAnswer question="What size frame fits an 11×14 print with a mat?">
                A <strong>16×20 frame</strong> is the standard choice. The mat window is{" "}
                <strong>10.75×13.75 in</strong> — 0.125 inches smaller than the print on each side
                so the mat lip holds the print in place. This gives <strong>~2.5-inch borders</strong>{" "}
                on the sides and <strong>~3.1-inch borders</strong> top and bottom — classic
                gallery proportions.
              </QuickAnswer>

              <div className="mt-6">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm md:text-base px-6 py-3">
                    Export 11×14 at 300 DPI Free
                  </Button>
                </a>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["16×20 frame matchup", "Mat window: 10.75×13.75 in", "3300×4200 px at 300 DPI"].map((pill) => (
                    <span
                      key={pill}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(45,212,191,0.07)",
                        color: "rgba(45,212,191,0.7)",
                        border: "1px solid rgba(45,212,191,0.18)",
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-foreground-60 mt-3">
                  No account needed · No credit card required
                </p>
              </div>
            </div>

            {/* Right: Blueprint dimension diagram */}
            <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
              <div className="relative" style={{ width: "320px", height: "380px" }}>
                {/* Outer frame (16×20 proportional) */}
                <svg
                  viewBox="0 0 320 380"
                  width="320"
                  height="380"
                  style={{ position: "absolute", inset: 0 }}
                >
                  {/* Frame outer rect */}
                  <rect x="10" y="10" width="300" height="360" rx="2"
                    fill="none" stroke="rgba(45,212,191,0.3)" strokeWidth="1.5" strokeDasharray="4 2" />

                  {/* Frame label */}
                  <text x="160" y="6" textAnchor="middle" fill="rgba(45,212,191,0.5)" fontSize="9" fontFamily="monospace">16×20 FRAME</text>

                  {/* Mat area (shaded) */}
                  <rect x="24" y="28" width="272" height="324" rx="1"
                    fill="rgba(232,228,220,0.07)" stroke="rgba(232,228,220,0.2)" strokeWidth="1" />

                  {/* Print window */}
                  <rect x="70" y="66" width="180" height="248" rx="1"
                    fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.5)" strokeWidth="1.5" />

                  {/* Print label */}
                  <text x="160" y="196" textAnchor="middle" fill="rgba(45,212,191,0.6)" fontSize="10" fontFamily="monospace" fontWeight="bold">11×14</text>
                  <text x="160" y="210" textAnchor="middle" fill="rgba(45,212,191,0.4)" fontSize="8" fontFamily="monospace">PRINT</text>

                  {/* Dimension line — horizontal border */}
                  <line x1="24" y1="356" x2="70" y2="356" stroke="rgba(45,212,191,0.4)" strokeWidth="1" />
                  <line x1="24" y1="350" x2="24" y2="362" stroke="rgba(45,212,191,0.4)" strokeWidth="1" />
                  <line x1="70" y1="350" x2="70" y2="362" stroke="rgba(45,212,191,0.4)" strokeWidth="1" />
                  <text x="47" y="372" textAnchor="middle" fill="rgba(45,212,191,0.5)" fontSize="8" fontFamily="monospace">~2.5"</text>

                  {/* Dimension line — vertical border */}
                  <line x1="308" y1="28" x2="308" y2="66" stroke="rgba(45,212,191,0.4)" strokeWidth="1" />
                  <line x1="302" y1="28" x2="314" y2="28" stroke="rgba(45,212,191,0.4)" strokeWidth="1" />
                  <line x1="302" y1="66" x2="314" y2="66" stroke="rgba(45,212,191,0.4)" strokeWidth="1" />
                  <text x="318" y="50" textAnchor="start" fill="rgba(45,212,191,0.5)" fontSize="8" fontFamily="monospace">~3.1"</text>

                  {/* Mat window label */}
                  <text x="160" y="60" textAnchor="middle" fill="rgba(232,228,220,0.4)" fontSize="8" fontFamily="monospace">MAT WINDOW</text>
                  <text x="160" y="70" textAnchor="middle" fill="rgba(232,228,220,0.3)" fontSize="7" fontFamily="monospace">10.75 × 13.75 in</text>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== SECTION 1: Core spec table ===== */}
      <section className="py-14 md:py-20 border-b border-border">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            11×14 Print — Frame &amp; Mat Specifications
          </h2>
          <p className="text-foreground-60 mb-8 max-w-2xl">
            Everything in one table: the recommended frame, mat window, border widths, and pixel
            dimensions for your Etsy digital file.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Measurement</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Value</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Print size", "11×14 in", "Portrait orientation"],
                  ["Print size (mm)", "279×356 mm", "International buyers"],
                  ["Recommended frame", "16×20 in", "Standard gallery proportion"],
                  ["Alt frame (tighter mat)", "14×18 in", "~1.5-inch borders"],
                  ["Mat window", "10.75×13.75 in", "0.125 in lip holds print"],
                  ["Mat border (sides)", "~2.5 in each", "(16 − 10.75) ÷ 2 ≈ 2.63 in"],
                  ["Mat border (top/bottom)", "~3.1 in each", "(20 − 13.75) ÷ 2 ≈ 3.13 in"],
                  ["Aspect ratio", "11:14 ≈ 0.786", "Between 3:4 and 4:5"],
                  ["300 DPI pixels", "3,300 × 4,200 px", "Etsy / print quality"],
                  ["150 DPI pixels", "1,650 × 2,100 px", "Home printing minimum"],
                  ["With bleed (0.125 in)", "11.25 × 14.25 in", "3,375 × 4,275 px at 300 DPI"],
                  ["File size estimate", "~8–18 MB", "300 DPI JPEG, quality 90–100"],
                ].map(([measurement, value, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-surface/50"}>
                    <td className="px-4 py-3 font-medium text-foreground">{measurement}</td>
                    <td className="px-4 py-3 font-mono text-[#2DD4BF]">{value}</td>
                    <td className="px-4 py-3 text-foreground-60 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ===== SECTION 2: Mat border options ===== */}
      <section className="py-14 md:py-20 border-b border-border">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Mat Border Width Options for 11×14
          </h2>
          <p className="text-foreground-60 mb-8 max-w-2xl">
            The width of the mat border changes the feel significantly. Standard gallery uses 2–3 inch
            borders. Wider borders read as more premium.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                frame: "16×20 frame",
                border: "~2.5–3 in",
                window: "10.75×13.75 in",
                label: "Gallery Standard",
                desc: "Most popular. Proportional borders, works in any room. This is the matchup most frame shops stock pre-cut mats for.",
                accent: "#2DD4BF",
              },
              {
                frame: "14×18 frame",
                border: "~1.5 in",
                window: "10.75×13.75 in",
                label: "Modern / Tight",
                desc: "Narrower border gives a contemporary, graphic look. Less traditional than 16×20. Good for photography and minimalist art.",
                accent: "#A78BFA",
              },
              {
                frame: "18×24 frame",
                border: "~3.5–3.6 in",
                window: "10.75×13.75 in",
                label: "Gallery Overmat",
                desc: "Wide borders signal premium framing. Often used in gallery contexts to draw attention to smaller prints. Dramatic effect.",
                accent: "#F59E0B",
              },
            ].map(({ frame, border, window, label, desc, accent }) => (
              <div
                key={label}
                className="rounded-lg border border-border p-6"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3 px-2 py-1 rounded inline-block"
                  style={{ color: accent, background: `${accent}12`, border: `1px solid ${accent}25` }}
                >
                  {label}
                </div>
                <div className="text-xl font-bold mb-1">{frame}</div>
                <div className="font-mono text-sm mb-1" style={{ color: accent }}>
                  Border: {border}
                </div>
                <div className="text-xs text-foreground-60 font-mono mb-4">
                  Window: {window}
                </div>
                <p className="text-sm text-foreground-60">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg border border-border bg-surface/50">
            <p className="text-sm text-foreground-60">
              <strong className="text-foreground">Mat window vs print size:</strong> The mat window
              (10.75×13.75 in) is always 0.25 in smaller than the print (11×14 in) — 0.125 in per
              side. This is intentional. The mat lip overlaps the print edge and holds it in place,
              preventing the print from slipping through the opening.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== MID-PAGE PROOF BLOCK ===== */}
      <RatioPackFan prints={deerPrints} subject="Wall art exported at every print ratio" />
      <ContextualCTA
        problem="Selling an 11×14 digital print on Etsy? Most buyers also want 8×10, 5×7, A4, and other sizes — but resizing each one manually eats hours."
        solution="SnapToSize exports up to 70 print-ready files from one upload — all at 300 DPI, organized into ZIPs by ratio. Export your 11×14 and every other size your buyers need in one click."
        buttonText="Export All Print Sizes Free"
        appUrl={appUrl}
      />

      {/* ===== SECTION 3: DPI pixel reference ===== */}
      <section className="py-14 md:py-20 border-b border-border">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            11×14 Print — DPI &amp; Pixel Reference
          </h2>
          <p className="text-foreground-60 mb-8 max-w-2xl">
            Your Etsy digital file must be high enough resolution for buyers to print without
            pixelation. 300 DPI is the standard for professional print quality.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold">DPI</th>
                  <th className="text-left px-4 py-3 font-semibold">Pixels (W×H)</th>
                  <th className="text-left px-4 py-3 font-semibold">Use case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["300 DPI", "3,300 × 4,200 px", "Etsy standard — professional print quality"],
                  ["240 DPI", "2,640 × 3,360 px", "Inkjet minimum — acceptable for home printing"],
                  ["150 DPI", "1,650 × 2,100 px", "Screen only — will look blurry when printed"],
                  ["72 DPI", "792 × 1,008 px", "Web only — never use for printables"],
                ].map(([dpi, pixels, use], i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-surface/50"}>
                    <td className="px-4 py-3 font-mono font-bold text-[#2DD4BF]">{dpi}</td>
                    <td className="px-4 py-3 font-mono text-foreground">{pixels}</td>
                    <td className="px-4 py-3 text-foreground-60">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-lg border border-[#2DD4BF]/20 bg-[#2DD4BF]/5">
            <p className="text-sm text-foreground-60">
              <strong className="text-[#2DD4BF]">Etsy rule:</strong> Always deliver 300 DPI.
              Buyers print at home on a variety of printers — a 300 DPI file prints sharply on
              everything from basic inkjets to professional Epson photo printers. 3,300×4,200 px is
              your target.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== SECTION 4: Etsy seller tips ===== */}
      <section className="py-14 md:py-20 border-b border-border">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Etsy Seller Tips for 11×14 Digital Prints
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Include multiple sizes",
                body: "Buyers shopping for an 11×14 often also want 8×10 or 16×20. Offering a size bundle (5×7, 8×10, 11×14, 16×20) in one listing dramatically increases perceived value and reduces buyer questions about sizing.",
              },
              {
                title: "Note the 11:14 aspect ratio",
                body: "11×14 is not a 3:4 or 4:5 ratio — it falls in between. If your artwork is 3:4 (like a phone photo), it will need slight cropping or white borders to fit 11×14. Mention this in your listing so buyers know what to expect.",
              },
              {
                title: "16×20 frame = widely available",
                body: "16×20 frames are stocked at IKEA (Ribba 16×20), Target, Walmart, Amazon, and Michael's. This makes 11×14 a very practical size for buyers — they can walk into any store and find a frame with a mat already cut for it.",
              },
              {
                title: "Etsy file size limit",
                body: "Etsy allows up to 20 MB per file. A 300 DPI 11×14 JPEG at quality 90 is typically 8–14 MB — well within limits. If you sell multiple sizes in one listing, ZIP the files together (ZIPs count as one file toward the 5-file limit).",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#2DD4BF]/15 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-foreground-60">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-border p-5 bg-surface/30">
              <div className="text-2xl font-bold text-[#2DD4BF] mb-1">3,300×4,200</div>
              <div className="text-sm text-foreground-60">px at 300 DPI — required resolution</div>
            </div>
            <div className="rounded-lg border border-border p-5 bg-surface/30">
              <div className="text-2xl font-bold text-[#2DD4BF] mb-1">16×20 in</div>
              <div className="text-sm text-foreground-60">standard frame — available everywhere</div>
            </div>
            <div className="rounded-lg border border-border p-5 bg-surface/30">
              <div className="text-2xl font-bold text-[#2DD4BF] mb-1">10.75×13.75</div>
              <div className="text-sm text-foreground-60">in — standard mat window</div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-14 md:py-20 border-b border-border">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion
            items={[
              {
                question: "What frame size do I need for an 11×14 print with a mat?",
                answer:
                  "A 16×20 frame is the standard choice for an 11×14 print with a mat. The mat window is typically 10.75×13.75 inches, leaving a 0.125-inch lip to hold the print securely. This gives you a 2.5-inch mat border on the left/right sides and roughly 3.1-inch borders on top/bottom — classic gallery proportions.",
              },
              {
                question: "What is the mat window size for an 11×14 print in a 16×20 frame?",
                answer:
                  "Standard mat window for an 11×14 print in a 16×20 frame is 10.75×13.75 inches. This undercuts the print by 0.125 inches on each side so the mat lip holds the print in place from behind, keeping it flat and preventing it from falling through.",
              },
              {
                question: "Can I use a 14×18 frame for an 11×14 print with a mat?",
                answer:
                  "Yes — a 14×18 frame works for an 11×14 print with a narrower mat (1.5-inch borders). Mat window would be 10.75×13.75 in. This gives a tighter, more modern look. A 16×20 frame with wider borders is more traditional and gives gallery proportions. Both are valid depending on your aesthetic.",
              },
              {
                question: "How many pixels is an 11×14 print at 300 DPI?",
                answer:
                  "An 11×14 inch print at 300 DPI is 3,300×4,200 pixels. This is the standard resolution for professional print quality. At 150 DPI it would be 1,650×2,100 px — acceptable for home printing but not Etsy-quality. Always deliver 300 DPI files to buyers.",
              },
              {
                question: "What is the aspect ratio of an 11×14 print?",
                answer:
                  "11×14 is an 11:14 ratio, approximately 0.786:1 (portrait). It sits between the 3:4 ratio (0.75) and the 4:5 ratio (0.8). This means 11×14 does not match standard 3:4 or 4:5 artwork directly — a small amount of cropping or white border padding is usually needed when resizing other aspect ratios to 11×14.",
              },
              {
                question: "Should I include bleed on my 11×14 Etsy digital file?",
                answer:
                  "For Etsy digital downloads intended for home printing, bleed is optional. For print-ready files or print-on-demand, add 0.125-inch bleed on all sides (making the file 11.25×14.25 in, or 3,375×4,275 px at 300 DPI). Most home printers cannot use bleed, so a clean 11×14 at 300 DPI is the standard digital download format.",
              },
              {
                question: "What is the difference between mat window size and print size?",
                answer:
                  "The mat window is always slightly smaller than the print. For an 11×14 print, the mat window is typically 10.75×13.75 in — 0.25 inches narrower and shorter than the print. This is intentional: the mat overlaps the print edges by 0.125 inches on each side, holding the print in place and preventing it from slipping through the opening.",
              },
            ]}
          />
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <FinalCTA
        headline="Export Your 11×14 Print at 300 DPI"
        subheadline="One upload → up to 70 print-ready files at every size your buyers need. 11×14, 8×10, 5×7, A4 and more — organized ZIPs, ready to upload to Etsy."
        buttonText="Export 11×14 Free"
        appUrl={appUrl}
      />

      {/* ===== RELATED PAGES ===== */}
      <RelatedPages
        pages={[
          {
            href: "/print-mat-sizes-for-frames",
            title: "Print Mat Sizes for All Standard Frames",
            description:
              "Complete mat size chart — every standard print size mapped to its frame, mat window, and border widths.",
          },
          {
            href: "/etsy-11x14-print-size",
            title: "11×14 Print Size Guide",
            description:
              "Full pixel spec, DPI chart, aspect ratio breakdown, and Etsy file delivery guide for 11×14.",
          },
          {
            href: "/print-size-for-frame-guide",
            title: "Print-to-Frame Size Guide",
            description:
              "Which print fits which frame — the complete matchup chart for all standard frame sizes.",
          },
          {
            href: "/ikea-ribba-frame-print-sizes",
            title: "IKEA Ribba Frame Print Sizes",
            description:
              "Exact print sizes that fit every IKEA Ribba frame, with and without mat.",
          },
          {
            href: "/8x10-vs-11x14-print-size",
            title: "8×10 vs 11×14 — Size Comparison",
            description:
              "Side-by-side comparison of 8×10 and 11×14 — dimensions, frames, ratios, and when to use each.",
          },
          {
            href: "/etsy-print-sizes",
            title: "All Etsy Print Sizes",
            description:
              "Complete reference: every standard print size with pixels at 300 DPI, aspect ratios, and frame matchups.",
          },
        ]}
      />
    </main>
  );
}
