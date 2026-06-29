import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { QuickAnswer } from "@/components/QuickAnswer";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Print Mat Sizes for Frames — Which Mat Fits Your Print?",
  description:
    "Frame mat sizes for every standard print: 5×7 print fits 8×10 frame with mat, 8×10 fits 11×14, 11×14 fits 16×20. Mat window sizes, border widths, and pixel dimensions.",
  alternates: {
    canonical: "https://snaptosize.com/print-mat-sizes-for-frames",
  },
  openGraph: {
    title: "Print Mat Sizes for Standard Frames | SnapToSize",
    description:
      "Frame mat sizes for every standard print: 5×7→8×10 frame, 8×10→11×14 frame, 11×14→16×20 frame. Mat window sizes, border widths, and pixel dimensions at 300 DPI.",
    url: "https://snaptosize.com/print-mat-sizes-for-frames",
    images: [
      {
        url: "/assets/og/print-mat-sizes-for-frames.png",
        width: 1200,
        height: 630,
        alt: "Print Mat Sizes for Standard Frames — Complete Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Mat Sizes for Standard Frames — Which Mat Fits Your Print?",
    description:
      "5×7→8×10 frame, 8×10→11×14, 11×14→16×20. Mat window sizes, border widths, and 300 DPI pixel dimensions for Etsy sellers.",
    images: ["/assets/og/print-mat-sizes-for-frames.png"],
  },
};

export default function PrintMatSizesForFramesPage() {
  const appUrl =
    "https://app.snaptosize.com/?source=seo_print-mat-sizes-for-frames&kind=guide";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Print Mat Sizes for Standard Frames — Complete Guide",
    description:
      "Standard mat sizes for every common print size. Maps print size to mat window, mat border width, and frame size. Includes pixel dimensions at 300 DPI for Etsy sellers.",
    url: "https://snaptosize.com/print-mat-sizes-for-frames",
    datePublished: "2026-06-28",
    dateModified: "2026-06-28",
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
        name: "Print Mat Sizes for Frames",
        item: "https://snaptosize.com/print-mat-sizes-for-frames",
      },
    ],
  };

  const faqItems = [
    {
      question: "What size frame do I need for an 8×10 print with a mat?",
      answer:
        "An 8×10 print needs an 11×14 frame to accommodate a mat. The standard mat window is approximately 7.75×9.75 inches, leaving 1.5-inch borders on each side. You can find 11×14 frames at IKEA, Target, Amazon, and most frame stores.",
    },
    {
      question: "What size frame fits an 11×14 print with a mat?",
      answer:
        "An 11×14 print fits in a 16×20 frame with a mat. The mat window is approximately 10.5×13.5 inches. This is the most common large-format framing combination for wall art prints.",
    },
    {
      question: "How much border should a mat have?",
      answer:
        "Standard mat borders are 1.5–2 inches on all sides. Some framers use a slightly wider bottom border (bottom-weighted matting) for a formal gallery look — for example, 1.5 inch sides/top with a 2 inch bottom. For casual framing, equal borders look clean.",
    },
    {
      question: "Should I include mat size information in my Etsy listing?",
      answer:
        "Yes — listing which frame fits your print removes buyer hesitation. Example: 'This 8×10 print fits standard 11×14 frames with a mat (available at IKEA, Target, or Amazon).' Buyers who know the frame size are more likely to purchase.",
    },
    {
      question: "Can I create a print sized to fill the mat window exactly?",
      answer:
        "Yes — this is called a 'full bleed to mat window' or 'mat opening size' print. If your mat window is 7.75×9.75 inches, create your artwork at exactly those dimensions (2325×2925 pixels at 300 DPI). The mat hides the edges, so your composition should allow for the border overlap.",
    },
    {
      question:
        "What is the pixel size for an 8×10 print at 300 DPI for matting?",
      answer:
        "The full 8×10 print at 300 DPI is 2400×3000 pixels. If you want to size to the mat window (7.75×9.75 inches), that's 2325×2925 pixels at 300 DPI. Export both versions so customers can choose whether to show a white border inside the mat or fill it completely.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0D0B0A 0%, #120E0C 35%, #0F0C0A 65%, #0A0807 100%)",
        }}
      >
        {/* Subtle linen/noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Warm glow top-left */}
        <div
          className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #2DD4BF, transparent 70%)",
          }}
        />

        <Container>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left: Content */}
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#2DD4BF] uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/5">
                <span>Frame Guide</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Print Mat Sizes for Standard Frames
                <span className="block text-[#2DD4BF] mt-1">
                  — Complete Guide
                </span>
              </h1>

              <p className="text-foreground-60 text-base md:text-lg mb-6">
                Find the right frame and mat for any print size. Standard
                matchups, mat window dimensions, and pixel sizes for Etsy
                digital sellers.
              </p>

              <QuickAnswer question="Which frame fits my print with a mat?">
                Standard mat sizes: a <strong>5×7 print</strong> fits in an{" "}
                <strong>8×10 frame</strong> with 1.5-inch mat borders (mat
                window ~4.75×6.75). An <strong>8×10 print</strong> fits in
                an <strong>11×14 frame</strong> (mat window ~7.75×9.75). An{" "}
                <strong>11×14 print</strong> fits in a{" "}
                <strong>16×20 frame</strong> (mat window ~10.75×13.75). Mats
                typically add 1.5–3 inches on each side.
              </QuickAnswer>

              <div className="mt-6">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm md:text-base px-6 py-3">
                    Export the Exact Size for Your Frame
                  </Button>
                </a>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["12 frame matchups", "Mat window sizes", "300 DPI pixels"].map((pill) => (
                    <span
                      key={pill}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(45,212,191,0.08)",
                        color: "rgba(45,212,191,0.7)",
                        border: "1px solid rgba(45,212,191,0.2)",
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

            {/* Right: CSS Frame Diagram */}
            <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
              <div className="relative" style={{ width: "300px", height: "360px" }}>
                {/* Outer frame */}
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background: "#1C1612",
                    border: "12px solid #2A2118",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                />

                {/* Mat (cream/off-white) */}
                <div
                  className="absolute"
                  style={{
                    inset: "32px",
                    background: "#E8E4DC",
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Print area */}
                <div
                  className="absolute"
                  style={{
                    inset: "80px",
                    background: "linear-gradient(135deg, #0F1419 0%, #1A1F2E 50%, #111827 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Decorative print content */}
                  <div className="flex flex-col items-center gap-1 opacity-40">
                    <div className="w-8 h-0.5 bg-[#2DD4BF]" />
                    <div className="w-5 h-0.5 bg-[#2DD4BF]" />
                    <div className="w-3 h-0.5 bg-[#2DD4BF]" />
                  </div>
                </div>

                {/* Labels */}
                {/* Frame label */}
                <div
                  className="absolute text-[10px] font-mono text-[#2DD4BF]"
                  style={{ top: "8px", left: "50%", transform: "translateX(-50%)" }}
                >
                  Frame
                </div>

                {/* Mat label */}
                <div
                  className="absolute text-[10px] font-mono text-[#9CA3AF]"
                  style={{ top: "48px", right: "8px" }}
                >
                  Mat
                </div>
                <div
                  className="absolute text-[10px] font-mono text-[#9CA3AF]"
                  style={{ top: "48px", right: "38px" }}
                >
                  1.5″
                </div>

                {/* Print label */}
                <div
                  className="absolute text-[10px] font-mono text-[#2DD4BF]"
                  style={{ bottom: "90px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
                >
                  Print
                </div>

                {/* Dimension arrows */}
                <div
                  className="absolute text-[9px] font-mono text-[#2DD4BF]/60"
                  style={{ bottom: "20px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
                >
                  e.g. 8×10 print → 11×14 frame
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <Container>
        <div className="max-w-3xl mx-auto py-12 md:py-16 space-y-12">

          {/* Section 1: How mats work */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How Print Mats Work</h2>
            <p className="text-foreground-60 mb-4">
              A mat (or mount) is a flat border placed between your print and
              the frame glass. It serves two purposes: it prevents the print
              from touching the glass (which can cause condensation damage), and
              it creates visual breathing room that draws the eye to your
              artwork.
            </p>
            <p className="text-foreground-60 mb-4">
              The <strong>mat window</strong> is the opening cut in the mat
              board — the part where your print shows through. The window is
              always slightly smaller than your print size, so the mat overlaps
              your print edges by a few millimeters and holds it in place.
            </p>
            <ul className="space-y-2 text-foreground-60">
              {[
                "Mat border: the visible white/cream space between frame edge and print",
                "Mat window: the cut opening (slightly smaller than print, overlaps edges ~3–6mm)",
                "Standard border width: 1.5 inches on all sides (gallery standard)",
                "Bottom-weighted: 1.5\" sides/top, 2\" bottom — traditional formal look",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#2DD4BF] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2: Main table */}
          <section>
            <h2 className="text-2xl font-bold mb-2">
              Standard Frame Sizes for Common Prints
            </h2>
            <p className="text-foreground-60 mb-4 text-sm">
              Mat window sizes are approximate standard cuts. Verify with your
              specific frame or matboard supplier — exact openings can vary
              ±0.125 inches.
            </p>
            <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                    <th className="text-left px-4 py-3 font-semibold">
                      Print Size
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Mat Window
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Mat Border
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-[#2DD4BF]">
                      Frame Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["4×6", "~3.75×5.75\"", "~1 inch", "5×7"],
                    ["5×7", "~4.75×6.75\"", "~1.5 inch", "8×10"],
                    ["8×10", "~7.75×9.75\"", "~1.5 inch", "11×14"],
                    ["8.5×11", "~8×10.5\"", "~1.25 inch", "11×14"],
                    ["11×14", "~10.5×13.5\"", "~1.5 inch", "16×20"],
                    ["12×16", "~11.5×15.5\"", "~1.5 inch", "16×20"],
                    ["16×20", "~15×19\"", "~1.5–2 inch", "18×24"],
                    ["18×24", "~17×23\"", "~1.5 inch", "20×26 or 24×30"],
                    ["20×24", "~18.5×22.5\"", "~1.5–2 inch", "24×30"],
                    ["20×30", "~19×29\"", "~1.5 inch", "24×36"],
                    ["A4", "~7.75×11.25\"", "~1.5 inch", "11×14"],
                    ["A3", "~11×16\"", "~1.5 inch", "16×20"],
                  ].map(([print, window, border, frame], i) => (
                    <tr
                      key={print}
                      className={`border-b border-white/[0.05] ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
                    >
                      <td className="px-4 py-3 font-mono font-medium">
                        {print}
                      </td>
                      <td className="px-4 py-3 text-foreground-60 font-mono">
                        {window}
                      </td>
                      <td className="px-4 py-3 text-foreground-60">{border}</td>
                      <td className="px-4 py-3 font-medium text-[#2DD4BF]">
                        {frame}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* --- CTA 1: Mid-content Card --- */}
          <Card accent className="p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Know the exact pixels for any frame size
            </h3>
            <p className="text-foreground-60 mb-4 text-sm md:text-base">
              Upload your artwork once — SnapToSize exports the exact pixel
              dimensions for your print size at 300 DPI. No manual
              calculations, no size chart hunting.
            </p>
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              <Button className="text-sm px-6 py-2.5">
                Export All Sizes Free
              </Button>
            </a>
          </Card>

          {/* Section 3: Mat window pixel dimensions */}
          <section>
            <h2 className="text-2xl font-bold mb-2">
              Mat Window Pixel Dimensions at 300 DPI
            </h2>
            <p className="text-foreground-60 mb-4">
              If you want your digital file sized to fill the mat window exactly
              (so the mat overlaps only the very edge of your artwork), use
              these pixel dimensions. This is called sizing to the{" "}
              <strong>mat opening</strong>.
            </p>
            <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                    <th className="text-left px-4 py-3 font-semibold">
                      Print Size
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Mat Window
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-[#2DD4BF]">
                      Pixels @ 300 DPI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["4×6", "3.75×5.75\"", "1125×1725 px"],
                    ["5×7", "4.75×6.75\"", "1425×2025 px"],
                    ["8×10", "7.75×9.75\"", "2325×2925 px"],
                    ["11×14", "10.5×13.5\"", "3150×4050 px"],
                  ].map(([print, window, pixels], i) => (
                    <tr
                      key={print}
                      className={`border-b border-white/[0.05] ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
                    >
                      <td className="px-4 py-3 font-mono font-medium">
                        {print}
                      </td>
                      <td className="px-4 py-3 text-foreground-60 font-mono">
                        {window}
                      </td>
                      <td className="px-4 py-3 font-mono font-medium text-[#2DD4BF]">
                        {pixels}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-foreground-60 mt-3">
              Full print dimensions differ from mat window dimensions. The full
              8×10 at 300 DPI is 2400×3000 px; the mat window version (to fill
              the mat opening exactly) is 2325×2925 px.
            </p>
          </section>

          {/* Section 4: How to include mat info in Etsy listings */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Include Mat Info in Your Etsy Listings
            </h2>
            <p className="text-foreground-60 mb-4">
              Buyers who know exactly which frame to buy are more likely to
              purchase. Add a sentence to your listing description mentioning
              the recommended frame size.
            </p>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-5 space-y-3">
              <p className="text-sm font-medium text-foreground-60 uppercase tracking-wide">
                Example listing copy
              </p>
              {[
                "\"This 8×10 print fits standard 11×14 frames with a mat. Available at IKEA (SILVERHÖJDEN), Target, and Amazon.\"",
                "\"Download includes 8×10 (full bleed) and 8×10 mat-window version (7.75×9.75) — use whichever your framer prefers.\"",
                "\"Fits 16×20 frames with a 1.5-inch mat. IKEA KNOPPÄNG frames work perfectly.\"",
              ].map((example) => (
                <div
                  key={example}
                  className="text-sm text-foreground-60 border-l-2 border-[#2DD4BF]/30 pl-3"
                >
                  {example}
                </div>
              ))}
            </div>
            <p className="text-foreground-60 mt-4">
              Consider offering both the full print size and the mat-window
              size in one ZIP file. Buyers with pre-cut mats can use the
              smaller version; buyers cutting their own mat use the full size.
            </p>
          </section>

          {/* Section 5: Wide mat vs standard mat */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Standard Mat vs Wide Mat — Aesthetic Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-5">
                <h3 className="font-semibold mb-2 text-[#2DD4BF]">
                  Standard (1.5 inch borders)
                </h3>
                <ul className="space-y-1.5 text-sm text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2DD4BF] mt-0.5 flex-shrink-0" />
                    Most common — works with off-the-shelf frames
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2DD4BF] mt-0.5 flex-shrink-0" />
                    Casual, modern, everyday framing
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#2DD4BF] mt-0.5 flex-shrink-0" />
                    1 frame size up from print (8×10→11×14)
                  </li>
                </ul>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-5">
                <h3 className="font-semibold mb-2 text-[#A78BFA]">
                  Wide (2.5–4 inch borders)
                </h3>
                <ul className="space-y-1.5 text-sm text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    Gallery-style — creates impact around smaller prints
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    Formal, museum, luxury aesthetic
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    2 frame sizes up from print (8×10→16×20)
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-foreground-60 text-sm mt-4">
              For Etsy listings targeting the gallery wall market, mention that
              prints look great with wide mats. Buyers shopping for a
              &ldquo;gallery look&rdquo; often prefer 2.5+ inch borders, which
              means a larger frame size than the standard matchups above.
            </p>
          </section>

          {/* Section 6: Internal link to frame guide */}
          <section className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
            <h3 className="font-semibold mb-2">
              Related: IKEA Frame Sizes for Prints
            </h3>
            <p className="text-foreground-60 text-sm mb-3">
              IKEA frames are the most common off-the-shelf choice for Etsy
              print buyers. See which print sizes fit IKEA RIBBA, KNOPPÄNG, and
              SILVERHÖJDEN frames.
            </p>
            <Link
              href="/ikea-ribba-frame-print-sizes"
              className="text-[#2DD4BF] text-sm font-medium hover:underline"
            >
              IKEA Frame Print Size Guide →
            </Link>
          </section>

          {/* --- CTA 2: FinalCTA --- */}
          <FinalCTA
            heading="Get the exact pixel dimensions for your frame size"
            stat="Export 16+ sizes from one upload"
            description="SnapToSize calculates the exact pixel dimensions for any print size at 300 DPI. Upload your artwork once and get all the files your buyers need — including sizes that fit standard frames."
            buttonText="Export All Sizes Free"
            appUrl={appUrl}
          />

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </section>

          {/* --- Related Pages --- */}
          <RelatedPages currentSlug="print-mat-sizes-for-frames" />
        </div>
      </Container>
    </>
  );
}
