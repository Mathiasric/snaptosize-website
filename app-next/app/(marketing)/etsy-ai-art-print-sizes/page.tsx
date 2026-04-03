import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "AI Art Print Sizes for Etsy — From Midjourney to Print-Ready",
  description:
    "AI art sizing guide for Etsy sellers. Covers AI output resolutions, upscaling requirements, best-selling print sizes, and how to turn one AI design into 70 print-ready files.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-ai-art-print-sizes",
  },
  openGraph: {
    title: "AI Art Print Sizes for Etsy | SnapToSize",
    description:
      "Best print sizes for AI-generated art on Etsy. AI output resolutions vs print requirements, upscaling guide, and batch resizing from one upload.",
    url: "https://snaptosize.com/etsy-ai-art-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-ai-art-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "AI Art Print Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Art Print Sizes for Etsy — From Midjourney to Print-Ready",
    description:
      "Best print sizes for AI-generated art on Etsy. AI output resolutions vs print requirements, upscaling guide, and batch resizing from one upload.",
    images: ["/assets/og/etsy-ai-art-print-sizes.png"],
  },
};

export default function EtsyAiArtPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "AI Art Print Sizes for Etsy — From Midjourney to Print-Ready",
    description:
      "Complete AI art sizing guide for Etsy sellers. Covers AI output resolutions from Midjourney, DALL-E, and Stable Diffusion, upscaling requirements for 300 DPI printing, best-selling sizes by AI sub-style, gallery wall sets, and how to generate every print size from one AI design.",
    url: "https://snaptosize.com/etsy-ai-art-print-sizes",
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
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
        name: "AI Art Print Sizes",
        item: "https://snaptosize.com/etsy-ai-art-print-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What resolution do I need for AI art prints?",
      answer:
        "300 DPI is the professional standard, but AI art looks sharp well below that. A 1024\u00d71024 image works great up to 5\u00d77, and DALL-E\u2019s 1024\u00d71792 looks good up to 8\u00d712. For larger sizes like 16\u00d720 or 24\u00d736, upscaling to 4096+ pixels first gives the sharpest results. Upload directly to SnapToSize at any resolution \u2014 it handles the rest.",
    },
    {
      question: "Can I sell AI-generated art on Etsy?",
      answer:
        "Yes. Etsy allows AI-generated art in the digital downloads category. However, you must disclose that the artwork was created using AI tools. Etsy updated its seller policies to require transparency about AI involvement. Many top-selling digital art shops now include AI-generated designs alongside traditional digital art.",
    },
    {
      question: "What\u2019s the best AI art size for Etsy?",
      answer:
        "8\u00d710 (2400\u00d73000px at 300 DPI) is the best-selling size overall on Etsy, and AI art is no exception. However, AI art buyers also favor large statement sizes like 16\u00d720 and 24\u00d736 because AI designs often have the bold, high-impact look that works well at scale. Offering 8\u201315 sizes per listing captures the full market.",
    },
    {
      question: "Do I need to upscale AI art for printing?",
      answer:
        "For small to mid sizes (up to 8\u00d712), raw AI output looks great \u2014 just upload directly to SnapToSize. For larger prints like 16\u00d720 or 24\u00d736, upscaling to 4096+ pixels first gives the sharpest results. The higher your source resolution, the more large-format sizes you can offer with maximum quality.",
    },
    {
      question: "How many sizes should an AI art listing include?",
      answer:
        "Top AI art sellers offer 8\u201315 sizes per listing. At minimum, include 5\u00d77, 8\u00d710, 11\u00d714, 16\u00d720, 24\u00d736, A4, and A3. More sizes increase perceived value, reduce customer questions, and improve Etsy search visibility. SnapToSize generates up to 70 print-ready files from a single upload.",
    },
    {
      question: "Does SnapToSize work with AI-generated images?",
      answer:
        "Yes. SnapToSize accepts any image format and resolution. Upload your upscaled AI artwork and generate every standard print size at 300 DPI \u2014 up to 70 files across all 5 ratio packs, in portrait and landscape orientations. The output is organized in ZIPs with professional naming, ready to upload directly to Etsy.",
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

  const appUrl =
    "https://app.snaptosize.com/app/quick-export?source=seo_ai-art&kind=guide";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0d0d1a 0%, #111127 25%, #0a0a1f 50%, #0f0f24 75%, #080818 100%)",
        }}
      >
        {/* Pixel grid pattern — AI aesthetic */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Cyan glow — top right */}
        <div
          className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #06b6d4, transparent 70%)",
          }}
        />
        {/* Purple glow — bottom left */}
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #a78bfa, transparent 70%)",
          }}
        />

        {/* CSS-only Neural Network / AI Composition — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "320px", height: "340px" }}
          >
            {/* Neural network nodes */}
            <div
              className="absolute rounded-full"
              style={{
                width: "10px",
                height: "10px",
                top: "40px",
                left: "40px",
                background: "rgba(6,182,212,0.25)",
                boxShadow: "0 0 12px rgba(6,182,212,0.15)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "8px",
                height: "8px",
                top: "100px",
                left: "100px",
                background: "rgba(167,139,250,0.25)",
                boxShadow: "0 0 10px rgba(167,139,250,0.12)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "12px",
                height: "12px",
                top: "60px",
                right: "80px",
                background: "rgba(6,182,212,0.20)",
                boxShadow: "0 0 14px rgba(6,182,212,0.10)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "7px",
                height: "7px",
                top: "160px",
                left: "60px",
                background: "rgba(167,139,250,0.20)",
                boxShadow: "0 0 8px rgba(167,139,250,0.10)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "9px",
                height: "9px",
                top: "200px",
                right: "60px",
                background: "rgba(6,182,212,0.22)",
                boxShadow: "0 0 10px rgba(6,182,212,0.12)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "11px",
                height: "11px",
                bottom: "80px",
                left: "120px",
                background: "rgba(167,139,250,0.22)",
                boxShadow: "0 0 12px rgba(167,139,250,0.12)",
              }}
            />

            {/* Connection lines between nodes */}
            <div
              className="absolute"
              style={{
                width: "80px",
                height: "1px",
                top: "45px",
                left: "50px",
                background: "linear-gradient(90deg, rgba(6,182,212,0.15), rgba(167,139,250,0.08))",
                transform: "rotate(40deg)",
                transformOrigin: "left center",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "1px",
                top: "105px",
                left: "108px",
                background: "linear-gradient(90deg, rgba(167,139,250,0.12), rgba(6,182,212,0.08))",
                transform: "rotate(-20deg)",
                transformOrigin: "left center",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "70px",
                height: "1px",
                top: "165px",
                left: "68px",
                background: "linear-gradient(90deg, rgba(167,139,250,0.10), rgba(6,182,212,0.10))",
                transform: "rotate(25deg)",
                transformOrigin: "left center",
              }}
            />

            {/* Floating frame outlines — print sizes */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "100px",
                height: "125px",
                top: "20px",
                left: "140px",
                border: "1px solid rgba(6,182,212,0.10)",
              }}
            />
            <div
              className="absolute rounded-sm"
              style={{
                width: "70px",
                height: "88px",
                bottom: "40px",
                right: "40px",
                border: "1px solid rgba(167,139,250,0.08)",
              }}
            />

            {/* Size labels */}
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "8px",
                left: "168px",
                color: "rgba(6,182,212,0.30)",
              }}
            >
              16&times;20
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "28px",
                right: "48px",
                color: "rgba(167,139,250,0.25)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "32px",
                left: "32px",
                color: "rgba(6,182,212,0.22)",
              }}
            >
              A4
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                bottom: "68px",
                left: "108px",
                color: "rgba(167,139,250,0.20)",
              }}
            >
              24&times;36
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="h-px w-8"
                style={{ background: "rgba(6,182,212,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(6,182,212,0.7)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#f0f0ff" }}
              >
                AI Art Print Sizes for Etsy
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(240,240,255,0.6)" }}
              >
                From Midjourney to print-ready&nbsp;files
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(240,240,255,0.5)" }}
            >
              AI-generated art is the fastest-growing digital download niche on
              Etsy. This guide covers the unique sizing challenges of AI art,
              output resolutions vs print requirements, and how to turn one
              AI design into every size your buyers need.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All AI Art Sizes
                </Button>
              </a>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(240,240,255,0.35)" }}
              >
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(6,182,212,0.06)",
                  borderColor: "rgba(6,182,212,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#06b6d4" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,240,255,0.6)" }}
                >
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(6,182,212,0.06)",
                  borderColor: "rgba(6,182,212,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#06b6d4" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,240,255,0.6)" }}
                >
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(6,182,212,0.06)",
                  borderColor: "rgba(6,182,212,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#06b6d4" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(240,240,255,0.6)" }}
                >
                  Portrait, landscape &amp; square
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            <QuickAnswer question="What sizes work best for AI art on Etsy?">
              <strong>8&times;10, 16&times;20, and 24&times;36</strong> are the top sellers. AI art&apos;s bold, high-impact aesthetic works at every scale. Upload your AI image directly to SnapToSize &mdash; it handles the resizing to every standard print size.
            </QuickAnswer>

            {/* --- H2 1: Why AI Art Has Unique Sizing Challenges --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why AI Art Has Unique Sizing Challenges
              </h2>
              <p className="text-foreground-60 mb-4">
                AI art tools generate images at fixed, non-standard resolutions.
                Midjourney outputs 1024&times;1024 pixels by default. DALL-E
                generates at 1024&times;1792. Stable Diffusion XL produces
                1024&times;1024. None of these match standard print sizes at
                300 DPI &mdash; the professional print standard.
              </p>
              <p className="text-foreground-60 mb-4">
                At 300 DPI, a 1024&times;1024 image only covers 3.4&times;3.4
                inches &mdash; but AI art looks sharp well below 300 DPI. In
                practice, 1024px images work well for prints up to{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7
                </Link>
                , and higher-res outputs like DALL-E&apos;s 1024&times;1792
                look great up to 8&times;12. For larger sizes, upscaling helps
                &mdash; but it&apos;s not always required.
              </p>
              <p className="text-foreground-60">
                Beyond resolution, AI tools output at aspect ratios that
                don&apos;t align with standard print sizes. A 1024&times;1792
                image is roughly 4:7 &mdash; not a standard frame ratio.
                Converting to{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  standard Etsy print sizes
                </Link>{" "}
                requires careful handling to avoid distortion. See our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  300 DPI resolution guide
                </Link>{" "}
                for the full technical breakdown.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-ai-art-print-mockup.jpg" alt="Home office with two framed AI-generated art prints on the wall — a large vivid surreal landscape and a smaller abstract portrait in jewel tones, in natural oak frames above a clean wooden desk" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- H2 2: AI Output Resolutions vs Print Requirements --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                AI Output Resolutions vs Print Requirements
              </h2>
              <p className="text-foreground-60 mb-6">
                Every AI tool outputs at a fixed resolution. This table shows
                what you actually get and the maximum print size at 300 DPI.
                In practice, AI art looks sharp well below 300 DPI &mdash;
                most buyers won&apos;t notice a difference down to ~150 DPI.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        AI Tool / Setting
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Output (px)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Print Size @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Verdict
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Midjourney v6 (default)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1024&times;1024
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3.4&times;3.4&Prime;
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-yellow-400 text-xs font-medium">Good up to 5&times;7</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Midjourney --ar 2:3
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1024&times;1536
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3.4&times;5.1&Prime;
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-green-400 text-xs font-medium">Good up to 8&times;10</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        DALL-E 3 (portrait)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1024&times;1792
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3.4&times;6&Prime;
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-green-400 text-xs font-medium">Good up to 8&times;12</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        Stable Diffusion XL
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1024&times;1024
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3.4&times;3.4&Prime;
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-yellow-400 text-xs font-medium">Good up to 5&times;7</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        After 4x upscale
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4096&times;4096
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        13.6&times;13.6&Prime;
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-green-400 text-xs font-medium">Covers most sizes</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">
                        After 8x upscale
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        8192&times;8192
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        27.3&times;27.3&Prime;
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-green-400 text-xs font-medium">Covers all sizes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Key takeaway:
                    </strong>{" "}
                    Raw AI images work great for small to mid sizes straight
                    out of the tool. Upload directly to SnapToSize &mdash; it
                    handles the resizing. For large prints (16&times;20+),
                    upscaling to 4096+ pixels first gives the sharpest results.
                    An 8x upscale covers every size including{" "}
                    <Link
                      href="/etsy-24x36-print-size"
                      className="text-accent-light hover:underline"
                    >
                      24&times;36
                    </Link>
                    .
                  </p>
                </div>
              </Card>
            </div>

            {/* --- H2 3: Best-Selling AI Art Print Sizes on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best-Selling AI Art Print Sizes on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                These sizes cover the core of AI art buyer demand. Every pixel
                dimension is at 300 DPI. For the full chart, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Pixels @ 300 DPI
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Ratio Pack
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-8x10-print-size"
                          className="text-accent-light hover:underline"
                        >
                          8&times;10
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2400&times;3000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Best-selling overall. Desk, shelf, bathroom
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        5&times;7
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500&times;2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Small frames, gifts, gallery wall filler
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        11&times;14
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Photo mat standard. Mid-size statement
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-16x20-print-size"
                          className="text-accent-light hover:underline"
                        >
                          16&times;20
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4800&times;6000
                      </td>
                      <td className="py-3 px-4 text-foreground-60">4:5</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Above sofa/bed. Bold AI art statement piece
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        18&times;24
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format. Hallway, entryway
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-24x36-print-size"
                          className="text-accent-light hover:underline"
                        >
                          24&times;36
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        7200&times;10800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Quick Export
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Oversized poster. Living room focal point
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a4-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A4
                        </Link>{" "}
                        <span className="text-foreground-60 text-xs">
                          (210&times;297 mm)
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        2480&times;3508
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        International buyers (UK, EU, AUS)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-a3-print-size"
                          className="text-accent-light hover:underline"
                        >
                          A3
                        </Link>{" "}
                        <span className="text-foreground-60 text-xs">
                          (297&times;420 mm)
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3508&times;4961
                      </td>
                      <td className="py-3 px-4 text-foreground-60">ISO</td>
                      <td className="py-3 px-4 text-foreground-60">
                        International poster. Strong in EU markets
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm">
                AI art over-indexes on large statement sizes like{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36
                </Link>{" "}
                because the bold, high-detail aesthetic of AI-generated imagery
                commands attention at scale. For precise pixel calculations, use
                the{" "}
                <Link
                  href="/etsy-print-size-calculator"
                  className="text-accent-light hover:underline"
                >
                  print size calculator
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1: After best-selling sizes --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Turn One AI Design Into Every Print Size
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your upscaled AI artwork and get 30+ sizes across all
                  5 ratio packs. Portrait,{" "}
                  <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">
                    landscape
                  </Link>
                  , and{" "}
                  <Link href="/etsy-square-print-sizes" className="text-accent-light hover:underline">
                    square
                  </Link>{" "}
                  &mdash; up to 70 print-ready files, organized and named for
                  Etsy.
                </p>
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 4: AI Art Sub-Styles and Their Best Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                AI Art Sub-Styles and Their Best Sizes
              </h2>
              <p className="text-foreground-60 mb-8">
                Different AI art styles have distinct sizing preferences. Match
                your size offerings to your style for higher conversion rates.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    AI Portraits
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Faces and character art dominate in portrait orientation.
                    The 4:5 ratio is the natural fit for close-up compositions.
                    Large sizes let buyers appreciate the fine details AI
                    generates in skin textures, hair, and eyes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      11&times;14 (Extras)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A3 (ISO)
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    AI Landscapes
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Sweeping vistas, fantasy worlds, and surreal environments.
                    Landscape orientation is essential &mdash; buyers want these
                    above sofas and mantels. The wider 2:3 and 3:4 ratios
                    complement panoramic compositions. See our{" "}
                    <Link
                      href="/etsy-landscape-print-sizes"
                      className="text-accent-light hover:underline"
                    >
                      landscape print sizes guide
                    </Link>{" "}
                    for complete sizing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;18 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      18&times;24 (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-24x36-print-size" className="hover:underline">24&times;36</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      20&times;30 (2:3)
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    AI Abstract Art
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Abstract compositions are the most flexible for sizing
                    because they have no fixed orientation. Offer every ratio
                    pack for maximum reach. Square formats work particularly
                    well for symmetrical abstract pieces.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-square-print-sizes" className="hover:underline">Square</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      All packs
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    AI Anime &amp; Illustration
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Character-focused like portraits but often with more dynamic
                    compositions. Portrait orientation dominates, but action
                    scenes benefit from wider ratios. This sub-niche has a
                    strong collector audience that values multiple size options.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      8&times;12 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4 (ISO)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    AI Photography-Style
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Photorealistic AI images that mimic real photography. These
                    follow traditional photo sizing conventions. The 4:5 and 2:3
                    ratios align with standard photo frames. Buyers expect the
                    same sizes they would order for real photographs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;18 (2:3)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4 (ISO)
                    </span>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- H2 5: Gallery Wall Sets with AI Art --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Gallery Wall Sets with AI Art
              </h2>
              <p className="text-foreground-60 mb-6">
                AI art is uniquely suited for gallery wall sets because you can
                generate thematically cohesive collections from a single prompt
                style. Buyers love curated sets where every piece shares the same
                visual language. For full gallery wall strategy, see our{" "}
                <Link
                  href="/etsy-gallery-wall-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  gallery wall print sizes guide
                </Link>
                .
              </p>

              <div className="space-y-4 mb-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Matching Set Sizes (Most Popular)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    All prints the same size. Generate 3&ndash;6 AI images with
                    a consistent style prompt, then offer the set in multiple
                    size options within a single Etsy listing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3&times;{" "}
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link>{" "}
                      (small)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3&times; 11&times;14 (medium)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3&times;{" "}
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link>{" "}
                      (large)
                    </span>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">
                    Mixed-Size Arrangements
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    One large center piece flanked by smaller prints. Works well
                    for AI art series where one image is the hero and others are
                    supporting compositions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1&times; 16&times;20 + 2&times; 8&times;10
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1&times; 18&times;24 + 2&times; 11&times;14
                    </span>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60 text-sm">
                The key advantage of AI art for gallery walls is creative
                consistency. You can generate dozens of thematically matched
                pieces and offer them as sets &mdash; something that takes
                significantly more effort with traditional digital art. Run each
                design through SnapToSize to ensure every print in the set is
                exactly the same dimensions. See{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include
                </Link>{" "}
                for listing strategy.
              </p>
            </div>

            {/* --- H2 6: How SnapToSize Handles AI Art --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How SnapToSize Handles AI Art
              </h2>
              <p className="text-foreground-60 mb-6">
                AI art sellers with 50+ designs offering 30 sizes each face
                1,500+ individual resize operations. Here is how to eliminate
                that entirely. For a general walkthrough, see our{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  complete resize guide
                </Link>
                .
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        color: "#06b6d4",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Upload Your AI Artwork
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Upload your AI image to SnapToSize &mdash; any
                        resolution and aspect ratio works. Raw AI output is
                        fine for most sizes. For the largest prints, upscaling
                        first gives the sharpest results.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        color: "#06b6d4",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Select All 5 Ratio Packs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Choose all packs to cover every buyer preference.
                        Up to 70 files from a single upload &mdash; portrait
                        and landscape orientations included. SnapToSize handles
                        the aspect ratio differences between your AI output and
                        standard print sizes.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        color: "#06b6d4",
                      }}
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Download Organized ZIPs
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Get organized ZIP packs with professional file naming
                        (e.g., <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded">artwork_8x10_300dpi.jpg</code>).
                        All at 300 DPI, all under Etsy&apos;s 20 MB limit.
                        Upload directly to your Etsy listing.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-5 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      AI art workflow:
                    </strong>{" "}
                    Generate in your AI tool &rarr; upload to SnapToSize
                    &rarr; get every standard print size at 300 DPI. One AI
                    design becomes a complete Etsy listing with up to 70
                    print-ready files. Upscale first only if you need the
                    largest sizes (16&times;20+).
                  </p>
                </div>
              </Card>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Turn Every AI Design Into a Complete Listing"
                stat="Up to 70 print-ready files from a single upload"
                description="Upload your AI artwork once and get every size your buyers need. Portrait, landscape, and square. Organized by ratio, named for buyers, and ready for Etsy."
                buttonText="Generate All Sizes Free"
                appUrl="https://app.snaptosize.com/app/quick-export?source=seo_ai-art&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; AI Art Print Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Contextual CTA --- */}
            <div className="pb-12">
              <ContextualCTA
                problem="Selling AI art on Etsy? Each design needs dozens of print sizes to maximize sales."
                solution="Upload once. SnapToSize generates every size — statement pieces, gallery wall sets, small frames — in organized ZIPs."
                buttonText="Resize Your AI Art"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-ai-art-print-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
