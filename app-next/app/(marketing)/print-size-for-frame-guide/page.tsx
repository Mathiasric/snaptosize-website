import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, Frame, Ruler, Layers } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

const appUrl =
  "https://app.snaptosize.com?source=seo_print-size-for-frame-guide&kind=guide";

export const metadata: Metadata = {
  title: "What Size Print Fits What Frame — Complete Guide",
  description:
    "Print-to-frame size matrix for buyers and Etsy sellers — every standard print, frame pairing, mat math, and the bundle that fits 90% of frames.",
  alternates: {
    canonical: "https://snaptosize.com/print-size-for-frame-guide",
  },
  openGraph: {
    title:
      "What Size Print Fits What Frame | SnapToSize",
    description:
      "Print-to-frame matrix with and without mats, IKEA Ribba sizes, US/EU standards, and the seller bundle that fits 90% of buyer frames.",
    url: "https://snaptosize.com/print-size-for-frame-guide",
    images: [
      {
        url: "/assets/og/print-size-for-frame-guide.png",
        width: 1200,
        height: 630,
        alt: "What Size Print Fits What Frame — Complete Print-to-Frame Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Size Print Fits What Frame — Guide",
    description:
      "Print-to-frame matrix with and without mats, plus the seller bundle that fits 90% of buyer frames.",
    images: ["/assets/og/print-size-for-frame-guide.png"],
  },
};

export default function PrintSizeForFrameGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "What Size Print Fits What Frame — The Complete Print-to-Frame Size Guide",
    description:
      "Neutral, comprehensive matrix of print size to frame size with and without mats, plus IKEA Ribba sizes, US/EU standard frames, mat math, and the multi-size bundle Etsy sellers should include to cover 90% of buyer frames.",
    url: "https://snaptosize.com/print-size-for-frame-guide",
    datePublished: "2026-04-17",
    dateModified: "2026-04-17",
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
        name: "Etsy Print Sizes",
        item: "https://snaptosize.com/etsy-print-sizes",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Print Size for Frame Guide",
        item: "https://snaptosize.com/print-size-for-frame-guide",
      },
    ],
  };

  const faqs = [
    {
      question: "What size frame do I need for an 8x10 print?",
      answer:
        "Use an 8x10 frame if you want the print edge-to-edge with no mat, or step up to an 11x14 frame and add an 8x10 mat opening for a more gallery-style look. The 11x14-with-mat option is the most popular framing choice for 8x10 prints because it gives the artwork breathing room.",
    },
    {
      question: "Can I put an 11x14 print in a 16x20 frame?",
      answer:
        "Yes — with a mat. An 11x14 print fits perfectly inside a 16x20 frame when you use a mat with an 11x14 opening and a 2.5-inch border. This is one of the most common framing setups because 16x20 is a stock size at IKEA, Michaels, Target, and most frame shops.",
    },
    {
      question: "What size mat fits an 8x10 print in an 11x14 frame?",
      answer:
        "A standard mat with an 11x14 outer dimension and an 8x10 opening (sometimes called a 'reveal'). Pre-cut mats typically use a 1.5 to 2 inch border, so the opening is slightly smaller than 8x10 to hold the print edges. Look for mats labeled '11x14 frame, 8x10 photo.'",
    },
    {
      question: "Why doesn't my print fit the frame even though the numbers match?",
      answer:
        "Almost always a ratio mismatch. An 8x10 print is 4:5 ratio, but a 5x7 print is close to 2:3. A 16x20 frame is 4:5, and a 16x24 frame is 2:3 — they are not interchangeable. If the frame and print use different ratios, you will either crop the image or leave white bars. See our 2:3 vs 4:5 ratio guide for the full breakdown.",
    },
    {
      question: "What are standard IKEA Ribba frame sizes?",
      answer:
        "IKEA Ribba frames come in metric sizes: 13x18 cm (roughly 5x7 inch), 21x30 cm (close to A4 / 8.3x11.7 inch), 30x40 cm (close to 12x16 inch), 40x50 cm (close to 16x20 inch), 50x70 cm (close to A2 / 19.7x27.6 inch), and 61x91 cm (close to 24x36 inch). They are metric-first, so US inch prints usually need a custom mat to fit cleanly.",
    },
    {
      question: "Do I need a mat for a frame?",
      answer:
        "No — mats are aesthetic, not required. Frames accept prints directly if the print matches the frame size exactly. Mats serve two functions: they give the print visual breathing room, and they let you use a larger frame for a smaller print. Skip the mat if you want a poster-style, edge-to-edge look.",
    },
    {
      question: "What is the most popular frame size for wall art?",
      answer:
        "In the US, 8x10, 11x14, and 16x20 are the three most stocked frame sizes at Target, Michaels, Walmart, and Amazon. Internationally, A4 and A3 dominate in Europe, the UK, and Australia. If you sell digital art, covering those five sizes plus 5x7 hits roughly 90% of buyer frames.",
    },
    {
      question: "How do I calculate frame size from print size plus mat?",
      answer:
        "Add twice the mat border width to each print dimension. A 2-inch mat around an 8x10 print needs a 12x14 frame (8+4 by 10+4). A 2.5-inch mat around an 11x14 print needs a 16x19 — which sellers round up to a stock 16x20. Standard framing uses a 2 to 3 inch mat border.",
    },
    {
      question: "What is the easiest way to resize art to all common print and frame sizes at once?",
      answer:
        "SnapToSize. Upload your artwork once and it generates every standard US print size (5x7, 8x10, 11x14, 16x20, 18x24, 24x36), every international size (A5, A4, A3, A2), and the correct 2:3, 3:4, 4:5, and ISO ratio variants — all at 300 DPI, in a single ZIP. That is the bundle that fits 90% of buyer frames on Etsy.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // Full print-to-frame matrix
  const matrix = [
    {
      print: "5x7",
      ratio: "5:7",
      frameOnly: "5x7",
      frameWithMat: "8x10 (with 5x7 mat opening)",
      matBorder: "1.5\"",
    },
    {
      print: "8x10",
      ratio: "4:5",
      frameOnly: "8x10",
      frameWithMat: "11x14 (with 8x10 mat opening)",
      matBorder: "2\"",
    },
    {
      print: "11x14",
      ratio: "~4:5",
      frameOnly: "11x14",
      frameWithMat: "16x20 (with 11x14 mat opening)",
      matBorder: "2.5\"",
    },
    {
      print: "12x16",
      ratio: "3:4",
      frameOnly: "12x16",
      frameWithMat: "16x20 (with 12x16 mat opening)",
      matBorder: "2\"",
    },
    {
      print: "16x20",
      ratio: "4:5",
      frameOnly: "16x20",
      frameWithMat: "20x24 (with 16x20 mat opening)",
      matBorder: "2\"",
    },
    {
      print: "18x24",
      ratio: "3:4",
      frameOnly: "18x24",
      frameWithMat: "24x30 (with 18x24 mat opening)",
      matBorder: "3\"",
    },
    {
      print: "24x36",
      ratio: "2:3",
      frameOnly: "24x36",
      frameWithMat: "Rarely matted — poster-style direct",
      matBorder: "—",
    },
    {
      print: "A4 (8.3x11.7\")",
      ratio: "ISO",
      frameOnly: "A4 frame",
      frameWithMat: "A3 frame (with A4 mat opening)",
      matBorder: "~2\"",
    },
    {
      print: "A3 (11.7x16.5\")",
      ratio: "ISO",
      frameOnly: "A3 frame",
      frameWithMat: "A2 frame (with A3 mat opening)",
      matBorder: "~2\"",
    },
  ];

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

      {/* HERO — CSS-only */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Purple blob */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.09]"
          style={{
            background:
              "radial-gradient(circle, #a78bfa, transparent 70%)",
          }}
        />
        {/* Teal blob */}
        <div
          className="absolute bottom-[-15%] left-[-8%] w-[450px] h-[450px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #2DD4BF, transparent 70%)",
          }}
        />

        {/* Right-side frame diagram */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative" style={{ width: "320px", height: "300px" }}>
            {/* Outer frame (16x20) */}
            <div
              className="absolute inset-0 rounded-sm"
              style={{
                border: "2px solid rgba(167,139,250,0.45)",
                background: "rgba(255,255,255,0.02)",
                boxShadow:
                  "0 8px 30px rgba(0,0,0,0.3), inset 0 0 0 6px rgba(255,255,255,0.015)",
              }}
            />
            {/* Mat area */}
            <div
              className="absolute rounded-sm"
              style={{
                top: "36px",
                left: "36px",
                right: "36px",
                bottom: "36px",
                border: "1px dashed rgba(45,212,191,0.35)",
                background: "rgba(255,255,255,0.015)",
              }}
            />
            {/* Inner print (8x10 opening) */}
            <div
              className="absolute rounded-sm flex items-center justify-center"
              style={{
                top: "70px",
                left: "70px",
                right: "70px",
                bottom: "70px",
                border: "2px solid rgba(212,165,116,0.5)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div className="text-center">
                <Frame
                  className="w-5 h-5 mx-auto mb-1"
                  style={{ color: "rgba(212,165,116,0.65)" }}
                />
                <span
                  className="text-[9px] font-mono tracking-wider block"
                  style={{ color: "rgba(212,165,116,0.6)" }}
                >
                  8&times;10 PRINT
                </span>
              </div>
            </div>
            {/* Labels */}
            <span
              className="absolute text-[9px] font-mono tracking-widest"
              style={{
                top: "8px",
                left: "12px",
                color: "rgba(167,139,250,0.6)",
              }}
            >
              FRAME 16&times;20
            </span>
            <span
              className="absolute text-[9px] font-mono tracking-widest"
              style={{
                top: "44px",
                left: "46px",
                color: "rgba(45,212,191,0.55)",
              }}
            >
              MAT 2.5&#8243;
            </span>
            {/* Corner tick marks */}
            <div
              className="absolute"
              style={{
                top: "-8px",
                left: "-8px",
                width: "16px",
                height: "16px",
                borderTop: "1px solid rgba(167,139,250,0.4)",
                borderLeft: "1px solid rgba(167,139,250,0.4)",
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: "-8px",
                right: "-8px",
                width: "16px",
                height: "16px",
                borderBottom: "1px solid rgba(167,139,250,0.4)",
                borderRight: "1px solid rgba(167,139,250,0.4)",
              }}
            />
          </div>
        </div>

        <div className="relative py-16 md:py-24"><Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#a78bfa]/60" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#a78bfa]/80">
                PRINT-TO-FRAME REFERENCE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
              What Size Print Fits What Frame
            </h1>
            <p className="text-lg md:text-xl text-foreground-60 mb-7 leading-relaxed">
              The complete print-to-frame size guide for buyers and Etsy
              sellers. Every standard print size, every matching frame (with
              and without mats), and the bundle that fits 90% of buyer frames.
            </p>

            <div className="flex flex-wrap gap-3 mb-7">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Resize for All Frame Sizes
                </Button>
              </a>
              <Link href="/etsy-print-sizes">
                <Button variant="secondary" className="text-sm px-6 py-2.5">
                  Full Etsy Size Pillar
                </Button>
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground-60">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a78bfa]" />
                9 print sizes, every frame pairing
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a78bfa]" />
                Mat math + IKEA Ribba sizes
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a78bfa]" />
                Seller bundle: 90% frame coverage
              </li>
            </ul>
          </div>
        </Container></div>
      </section>

      {/* SECTION 1 — Quick answer + 30-second answer */}
      <section className="py-20 md:py-24">
        <Container>
          <QuickAnswer question="What size print fits what frame?">
            Every standard print size has two frame options: the matching
            frame size (print edge-to-edge, no mat) or the next size up with
            a 2 to 2.5 inch mat opening. An 8x10 print fits an 8x10 frame or
            an 11x14 frame with mat. An 11x14 print fits an 11x14 frame or a
            16x20 frame with mat. A 16x20 print fits a 16x20 frame or a
            20x24 frame with mat. Ratio mismatches (e.g. a 4:5 print in a
            2:3 frame) are the #1 reason prints don&apos;t fit — so always
            confirm ratio before buying a frame.
          </QuickAnswer>

          <div className="max-w-3xl mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The 30-Second Answer
            </h2>
            <p className="text-foreground-60 mb-6">
              Most print sizes have a simple two-frame rule: same-size frame
              for a poster look, or the next stock size up with a mat for a
              gallery look. Here are the six pairings covering almost every
              real-world scenario:
            </p>

            <ul className="space-y-3 text-foreground-70">
              <li className="flex gap-3">
                <span className="text-[#a78bfa] font-mono text-sm mt-1">→</span>
                <span>
                  <strong className="text-foreground">5x7 print</strong> — fits
                  a 5x7 frame, or an 8x10 frame with a 5x7 mat opening.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a78bfa] font-mono text-sm mt-1">→</span>
                <span>
                  <strong className="text-foreground">8x10 print</strong> —
                  fits an 8x10 frame, or an 11x14 frame with an 8x10 mat
                  opening.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a78bfa] font-mono text-sm mt-1">→</span>
                <span>
                  <strong className="text-foreground">11x14 print</strong> —
                  fits an 11x14 frame, or a 16x20 frame with an 11x14 mat
                  opening.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a78bfa] font-mono text-sm mt-1">→</span>
                <span>
                  <strong className="text-foreground">16x20 print</strong> —
                  fits a 16x20 frame, or a 20x24 frame with a 16x20 mat
                  opening.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a78bfa] font-mono text-sm mt-1">→</span>
                <span>
                  <strong className="text-foreground">18x24 print</strong> —
                  fits an 18x24 frame, or a 24x30 frame with an 18x24 mat
                  opening.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a78bfa] font-mono text-sm mt-1">→</span>
                <span>
                  <strong className="text-foreground">24x36 print</strong> —
                  fits a 24x36 frame directly. Rarely matted (poster-style).
                </span>
              </li>
            </ul>
          </div>

          {/* Listing showcase — one upload, every frame-ready ratio */}
          <div className="mt-20 md:mt-24">
            <ListingOutputShowcase
              artwork="geometric"
              heading="One upload. Every frame-ready ratio."
              subtext="SnapToSize exports 2×3, 4×5, 3×4, 11×14 and A4 from a single file — the five ratios that match 90% of buyer frames, US and international."
            />
          </div>
        </Container>
      </section>

      {/* SECTION 2 — Full matrix */}
      <section className="py-20 md:py-24 bg-white/[0.02] border-y border-white/[0.05]">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Full Print-to-Frame Matrix
            </h2>
            <p className="text-foreground-60">
              Every common print size, with the matching frame-only option and
              the next-size-up with mat. Use this as your reference before
              buying a frame — or, if you sell on{" "}
              <Link
                href="/etsy-print-sizes"
                className="text-[#a78bfa] underline decoration-dotted underline-offset-4 hover:text-[#c4b5fd]"
              >
                Etsy
              </Link>
              , copy these pairings into your listing description to cut
              buyer support tickets.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03]">
                <tr className="text-left">
                  <th className="px-4 py-3 font-mono text-xs tracking-wider text-foreground-60 uppercase">
                    Print size
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-wider text-foreground-60 uppercase">
                    Ratio
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-wider text-foreground-60 uppercase">
                    Frame (no mat)
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-wider text-foreground-60 uppercase">
                    Frame + mat option
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-wider text-foreground-60 uppercase">
                    Mat border
                  </th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr
                    key={row.print}
                    className={
                      i % 2 === 0
                        ? "border-t border-white/[0.05]"
                        : "border-t border-white/[0.05] bg-white/[0.015]"
                    }
                  >
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {row.print}
                    </td>
                    <td className="px-4 py-3 text-foreground-60 font-mono text-xs">
                      {row.ratio}
                    </td>
                    <td className="px-4 py-3 text-foreground-70">
                      {row.frameOnly}
                    </td>
                    <td className="px-4 py-3 text-foreground-70">
                      {row.frameWithMat}
                    </td>
                    <td className="px-4 py-3 text-foreground-60">
                      {row.matBorder}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mid-content inline purple CTA */}
          <div className="mt-10 max-w-2xl mx-auto">
            <Card accent>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#a78bfa]/15 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    Want to ship every frame-friendly size of your art?
                  </h3>
                  <p className="text-sm text-foreground-60 mb-4">
                    SnapToSize resizes one upload into all of these sizes —
                    5x7, 8x10, 11x14, 16x20, 18x24, 24x36 plus A4 and A3 — at
                    300 DPI, organized by ratio.
                  </p>
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="text-sm px-5 py-2">
                      Generate the full pack free
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — Mat math + Popular frame brands */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Matting Math, Explained
              </h2>
              <p className="text-foreground-60 mb-4">
                The standard framing rule is a 2 to 3 inch mat border on all
                four sides. To calculate the frame size you need from a print
                + mat, add twice the border width to each dimension:
              </p>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 font-mono text-sm space-y-2">
                <div className="text-foreground-70">
                  <span className="text-[#2DD4BF]">8x10 print</span> + 2&#8243;
                  mat = 12x14 frame
                </div>
                <div className="text-foreground-70">
                  <span className="text-[#2DD4BF]">11x14 print</span> +
                  2.5&#8243; mat = 16x19 (rounded up to stock 16x20)
                </div>
                <div className="text-foreground-70">
                  <span className="text-[#2DD4BF]">16x20 print</span> + 2&#8243;
                  mat = 20x24 frame
                </div>
              </div>
              <p className="text-sm text-foreground-60 mt-4">
                Pre-cut mats typically label the outer dimension first, then
                the print opening second — e.g. &quot;11x14 / 8x10.&quot;
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Popular Frame Brands &amp; Their Stock Sizes
              </h2>
              <ul className="space-y-4 text-foreground-70">
                <li>
                  <div className="flex items-center gap-2 mb-1">
                    <Ruler className="w-4 h-4 text-[#a78bfa]" />
                    <strong className="text-foreground">IKEA Ribba</strong>
                  </div>
                  <p className="text-sm text-foreground-60">
                    Metric-first: 13x18 cm (~5x7&#8243;), 21x30 cm (~A4), 30x40
                    cm (~12x16&#8243;), 40x50 cm (~16x20&#8243;), 50x70 cm
                    (~A2), 61x91 cm (~24x36&#8243;).
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-2 mb-1">
                    <Ruler className="w-4 h-4 text-[#a78bfa]" />
                    <strong className="text-foreground">
                      Target, Michaels, Walmart (US)
                    </strong>
                  </div>
                  <p className="text-sm text-foreground-60">
                    Inch-first: 4x6, 5x7, 8x10, 11x14, 16x20, 18x24, 24x36.
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-2 mb-1">
                    <Ruler className="w-4 h-4 text-[#a78bfa]" />
                    <strong className="text-foreground">
                      Crate &amp; Barrel, West Elm, Pottery Barn
                    </strong>
                  </div>
                  <p className="text-sm text-foreground-60">
                    US inch stock sizes with gallery-style mats pre-cut for
                    8x10 and 11x14 openings.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Lifestyle: framed prints in a real room */}
          <div className="mt-20 md:mt-24">
            <figure>
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <Image
                  src="/assets/visuals/print-size-for-frame-guide-lifestyle.jpg"
                  alt="Framed prints on a living room wall — mixed sizes in IKEA Ribba and standard US frames showing how ratio-correct files fit cleanly without cropping"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-xs text-muted-foreground text-center mt-3">
                Ratio-correct files drop into any stock frame — no awkward cropping, no white bars.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — Seller bundle + ratios */}
      <section className="py-20 md:py-24 bg-white/[0.02] border-y border-white/[0.05]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              For Etsy Sellers: The Bundle That Fits 90% of Buyer Frames
            </h2>
            <p className="text-foreground-60 mb-6">
              If your digital download ships with these eight sizes, nearly
              every buyer will already own a frame it fits — drastically
              cutting refund requests and &quot;do you have this in...&quot;
              messages:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                "5x7",
                "8x10",
                "11x14",
                "16x20",
                "18x24",
                "24x36",
                "A4",
                "A3",
              ].map((s) => (
                <div
                  key={s}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-center font-mono text-sm"
                >
                  {s}
                </div>
              ))}
            </div>

            <p className="text-foreground-60 mb-4">
              That covers US stock frames (5x7 → 24x36) and international ISO
              frames (A4 and A3, which dominate the UK, EU, and Australia). To
              decide whether to go bigger, read our guide on{" "}
              <Link
                href="/how-many-sizes-etsy-printable"
                className="text-[#a78bfa] underline decoration-dotted underline-offset-4 hover:text-[#c4b5fd]"
              >
                how many sizes to include in an Etsy printable listing
              </Link>
              . For international buyers specifically, see the{" "}
              <Link
                href="/etsy-a4-print-size"
                className="text-[#a78bfa] underline decoration-dotted underline-offset-4 hover:text-[#c4b5fd]"
              >
                A4 print size guide
              </Link>{" "}
              and the{" "}
              <Link
                href="/etsy-a3-print-size"
                className="text-[#a78bfa] underline decoration-dotted underline-offset-4 hover:text-[#c4b5fd]"
              >
                A3 print size guide
              </Link>
              .
            </p>

            <h3 className="text-xl font-bold mt-10 mb-3">
              Ratios matter: why a 4:5 print will not fit a 2:3 frame
            </h3>
            <p className="text-foreground-60 mb-4">
              Frames are built around aspect ratios, not just inch
              measurements. A 16x20 frame (4:5) and a 16x24 frame (2:3) are
              totally different shapes — putting a 4:5 print into a 2:3 frame
              either crops the image or leaves white gaps. Always confirm
              ratio first.
            </p>
            <ul className="space-y-2 text-foreground-70 text-sm">
              <li>
                <strong className="text-foreground">2:3 ratio</strong> — 4x6,
                8x12, 16x24, 24x36 frames. See{" "}
                <Link
                  href="/2-3-vs-4-5-ratio"
                  className="text-[#a78bfa] underline decoration-dotted underline-offset-4 hover:text-[#c4b5fd]"
                >
                  2:3 vs 4:5 ratio
                </Link>
                .
              </li>
              <li>
                <strong className="text-foreground">4:5 ratio</strong> — 8x10,
                11x14, 16x20 frames.
              </li>
              <li>
                <strong className="text-foreground">3:4 ratio</strong> — 12x16,
                18x24 frames.
              </li>
              <li>
                <strong className="text-foreground">ISO (A-series)</strong> —
                A5, A4, A3, A2 frames. See the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-[#a78bfa] underline decoration-dotted underline-offset-4 hover:text-[#c4b5fd]"
                >
                  Etsy print ratios guide
                </Link>{" "}
                for the full breakdown.
              </li>
            </ul>

            <p className="text-foreground-60 mt-6">
              Building a gallery wall listing? Cross-reference your sizes with
              the{" "}
              <Link
                href="/etsy-gallery-wall-print-sizes"
                className="text-[#a78bfa] underline decoration-dotted underline-offset-4 hover:text-[#c4b5fd]"
              >
                gallery wall print size guide
              </Link>{" "}
              so every frame in the set ships in a buyer-ready ratio.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 5 — Final CTA + FAQ + Email capture */}
      <section className="py-20 md:py-24">
        <Container>
          <FinalCTA
            heading="Upload once. Get every frame-ready size."
            stat="9 print sizes × 4 ratios · 300 DPI · Under 20 MB per ZIP"
            description="SnapToSize turns one artwork into the 8-size bundle that fits 90% of buyer frames — including US inch sizes and ISO (A4/A3). Free to try, no credit card."
            buttonText="Try SnapToSize Free"
            appUrl={appUrl}
          />

          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Frame &amp; Print Size FAQ
            </h2>
            <FAQAccordion items={faqs} />
          </div>

          <div className="mt-16">
            <RelatedPages currentSlug="print-size-for-frame-guide" />
          </div>
        </Container>
      </section>
    </>
  );
}
