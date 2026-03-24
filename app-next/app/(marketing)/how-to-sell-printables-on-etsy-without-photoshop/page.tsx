import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import {
  Check,
  AlertTriangle,
  Palette,
  Layers,
  Zap,
  FileCheck,
  FolderOpen,
  ArrowRight,
  X,
} from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title:
    "How to Sell Printables on Etsy Without Photoshop | SnapToSize",
  description:
    "You don't need Photoshop to sell professional digital wall art on Etsy. Learn the complete workflow — from Canva or Procreate to 30 print sizes in seconds with SnapToSize.",
  alternates: {
    canonical:
      "https://snaptosize.com/how-to-sell-printables-on-etsy-without-photoshop",
  },
  openGraph: {
    title: "How to Sell Printables on Etsy Without Photoshop",
    description:
      "You don't need Photoshop to sell professional digital wall art on Etsy. Learn the complete workflow — from Canva or Procreate to 30 print sizes in seconds.",
    url: "https://snaptosize.com/how-to-sell-printables-on-etsy-without-photoshop",
    images: [
      {
        url: "/assets/og/how-to-sell-printables-on-etsy-without-photoshop.png",
        width: 1200,
        height: 630,
        alt: "How to Sell Printables on Etsy Without Photoshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Printables on Etsy Without Photoshop",
    description:
      "You don't need Photoshop to sell professional digital wall art on Etsy. Learn the complete workflow — from Canva or Procreate to 30 print sizes in seconds.",
    images: [
      "/assets/og/how-to-sell-printables-on-etsy-without-photoshop.png",
    ],
  },
};

export default function HowToSellPrintablesWithoutPhotoshopPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Sell Printables on Etsy Without Photoshop",
    description:
      "Complete guide for Etsy sellers who want to sell professional digital wall art without Adobe Photoshop. Covers design tools, the aspect ratio bottleneck, 300 DPI workflow, and file organization.",
    url: "https://snaptosize.com/how-to-sell-printables-on-etsy-without-photoshop",
    image:
      "https://snaptosize.com/assets/og/how-to-sell-printables-on-etsy-without-photoshop.png",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
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
        name: "How to Sell Printables Without Photoshop",
        item: "https://snaptosize.com/how-to-sell-printables-on-etsy-without-photoshop",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Canva enough to sell printables on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes for design. But resizing one design into 30 sizes manually in Canva takes hours. Use Canva for creative work, then SnapToSize for the technical resizing into all 5 ratio packs.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make my files 300 DPI without Photoshop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Export at the highest resolution your design tool offers. SnapToSize ensures 300 DPI on every output file automatically — no manual DPI settings needed.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I save in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JPG for print files. It keeps file size small while maintaining quality, which is critical for staying under Etsy's 20MB per-file limit. SnapToSize outputs .jpg files automatically.",
        },
      },
      {
        "@type": "Question",
        name: "How do I offer multiple sizes without creating 30 canvases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upload one high-res design to SnapToSize. Get all 30 sizes across 5 ratio packs (2:3, 3:4, 4:5, ISO A-Series, Extras) automatically. No manual resizing needed.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a paid Canva account to sell commercially?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Canva Free allows commercial use of your own designs. Just don't use Canva Pro templates for resale without checking their content license agreement.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_no_photoshop&kind=guide";

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

      {/* ===== HERO — Photoshop Crossed Out / Simpler Tools ===== */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0f00 0%, #0d0800 40%, #0a0a0f 100%)",
        }}
      >
        {/* Warm amber glow — top left */}
        <div
          className="absolute top-[-15%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent 70%)",
          }}
        />
        {/* Subtle green glow — bottom right */}
        <div
          className="absolute bottom-[-20%] right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #22c55e, transparent 70%)",
          }}
        />

        {/* Tool comparison panel — right side (desktop) */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="space-y-3 w-[230px]">
            {/* Photoshop — crossed out */}
            <div className="relative px-4 py-3 rounded border border-red-500/20 bg-red-500/[0.04]">
              <div className="flex items-center justify-between opacity-40">
                <span className="text-sm font-mono text-white/60">
                  Photoshop
                </span>
                <span className="text-xs font-mono text-red-400/80">
                  $22.99/mo
                </span>
              </div>
              {/* Strike-through line */}
              <div className="absolute inset-y-0 left-3 right-3 flex items-center">
                <div className="w-full h-px bg-red-500/50" />
              </div>
              <div className="absolute top-1 right-1">
                <X className="w-3 h-3 text-red-400/60" />
              </div>
            </div>

            {/* Simpler tools */}
            {[
              { label: "Canva", note: "Free", color: "#f59e0b" },
              { label: "Procreate", note: "$12.99 once", color: "#f59e0b" },
              { label: "AI Tools", note: "Varies", color: "#f59e0b" },
            ].map((tool, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-3 rounded border bg-white/[0.02]"
                style={{ borderColor: `${tool.color}20` }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: tool.color }}
                  />
                  <span className="text-sm font-mono text-white/70">
                    {tool.label}
                  </span>
                </div>
                <span
                  className="text-xs font-mono"
                  style={{ color: `${tool.color}99` }}
                >
                  {tool.note}
                </span>
              </div>
            ))}

            {/* Arrow down */}
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-4 bg-amber-500/30" />
                <ArrowRight className="w-3 h-3 text-amber-500/40 rotate-90" />
              </div>
            </div>

            {/* SnapToSize */}
            <div className="flex items-center justify-between px-4 py-3 rounded border border-green-500/20 bg-green-500/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-sm font-mono text-white/70">
                  SnapToSize
                </span>
              </div>
              <span className="text-xs font-mono text-green-400/80">
                30 sizes
              </span>
            </div>

            <div className="mt-2 pt-2 border-t border-white/[0.06]">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  Photoshop needed
                </span>
                <span className="text-[10px] font-mono text-green-400/70">
                  NO
                </span>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-amber-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-amber-300/60 uppercase">
                Workflow Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                How to Sell Printables on Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-amber-200/80">
                Without Photoshop
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              You don&apos;t need a $22.99/month Adobe subscription to sell
              professional digital wall art. A free design tool plus a
              resizing tool is all it takes &mdash; design to done in
              minutes, not hours.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 50%, #92400e 100%)" }}>
                  Try SnapToSize Free
                </button>
              </a>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/[0.08] backdrop-blur-sm border border-amber-500/[0.15]">
                <Palette className="h-3 w-3 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Canva + Procreate + AI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/[0.08] backdrop-blur-sm border border-green-500/[0.15]">
                <Zap className="h-3 w-3 text-green-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  30 sizes in 60 seconds
                </span>
              </div>
            </div>

            {/* Tool comparison — mobile only */}
            <div className="mt-8 lg:hidden">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative px-3 py-2.5 rounded border border-red-500/20 bg-red-500/[0.04]">
                  <div className="flex items-center justify-between opacity-40">
                    <span className="text-xs font-mono text-white/60">Photoshop</span>
                    <span className="text-[10px] font-mono text-red-400/80">$22.99/mo</span>
                  </div>
                  <div className="absolute inset-y-0 left-2 right-2 flex items-center">
                    <div className="w-full h-px bg-red-500/50" />
                  </div>
                </div>
                {[
                  { label: "Canva", note: "Free" },
                  { label: "Procreate", note: "$12.99" },
                  { label: "AI Tools", note: "Varies" },
                ].map((tool, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded border border-amber-500/15 bg-white/[0.02]">
                    <span className="text-xs font-mono text-white/70">{tool.label}</span>
                    <span className="text-[10px] font-mono text-amber-400/70">{tool.note}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-3 px-3 py-2.5 rounded border border-green-500/20 bg-green-500/[0.04]">
                <ArrowRight className="w-3 h-3 text-green-400/60" />
                <span className="text-xs font-mono text-white/70">SnapToSize</span>
                <span className="text-[10px] font-mono text-green-400/80 ml-auto">30 sizes</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-20">
            {/* --- Section 1: The Photoshop Myth --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  The &ldquo;Photoshop Myth&rdquo; in Etsy Selling
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                There&apos;s a persistent belief that you need Adobe
                Photoshop to sell printables on Etsy. It shows up in every
                beginner guide, every YouTube tutorial, every Reddit thread.
                &ldquo;Step 1: Open Photoshop.&rdquo;
              </p>
              <p className="text-foreground-60 mb-4">
                The reality? Most successful Etsy printable sellers
                don&apos;t use Photoshop at all. Photoshop is a $22.99/month
                professional photo editing suite designed for photographers
                and graphic designers. Selling printable wall art requires
                exactly two things:
              </p>

              <div className="space-y-3 mb-4">
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-amber-400">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">A design tool</p>
                      <p className="text-foreground-60 text-sm">
                        To create your artwork. Canva, Procreate, or AI
                        generation tools all work.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-amber-400">
                        2
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">A resizing tool</p>
                      <p className="text-foreground-60 text-sm">
                        To convert one design into the 30 print sizes buyers
                        expect. This is what{" "}
                        <Link
                          href="https://app.snaptosize.com"
                          className="text-accent-light hover:underline"
                        >
                          SnapToSize
                        </Link>{" "}
                        does.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-foreground-60">
                That&apos;s it. No $275/year Adobe subscription. No steep
                learning curve. No complex layer management. The rest of
                this guide shows you exactly how to go from zero to
                listing-ready using free or inexpensive tools.
              </p>
            </div>

            {/* --- Section 2: Start With Any Design Tool --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Palette className="h-4 w-4 text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Start With Any Design Tool
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Use whatever you already know &mdash; Canva, Procreate, AI
                generators, or anything else that exports an image file.
                The design tool doesn&apos;t matter. What matters is the
                next step: turning that single design into the 30 print
                sizes Etsy buyers expect.
              </p>

              <Card className="p-5 bg-amber-500/5 border-amber-500/10">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Key rule: Start big</p>
                    <p className="text-foreground-60 text-sm">
                      Design at the highest resolution possible &mdash; at
                      least 6000 pixels on the longest side. This ensures
                      your largest print sizes (24&times;36 at
                      7200&times;10800px) look sharp at 300 DPI. You can
                      always scale down; you can never scale up without
                      losing quality.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Section 3: The Aspect Ratio Bottleneck --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20">
                  <Layers className="h-4 w-4 text-red-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  The Hidden Challenge: The Aspect Ratio Bottleneck
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Here&apos;s where Photoshop <em>used</em> to be necessary.
                Your artwork is one aspect ratio. But Etsy buyers need it in
                many different ratios for their frames. An 8&times;10 is 4:5.
                A 5&times;7 is 5:7. An A4 is ISO. A 24&times;36 is 2:3. One
                design needs to fit them all.
              </p>
              <p className="text-foreground-60 mb-4">
                Manually resizing one artwork into 30 different sizes across
                5 ratio packs takes hours &mdash; even in Photoshop. This is
                the bottleneck that kills most new Etsy printable sellers.
                They create beautiful art, then spend more time resizing than
                designing.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  The 5 ratio packs every listing needs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    {
                      ratio: "2:3 Wall Art",
                      sizes: "4x6 to 20x30",
                      count: 7,
                    },
                    {
                      ratio: "3:4 Photo Frame",
                      sizes: "6x8 to 18x24",
                      count: 5,
                    },
                    {
                      ratio: "4:5 Traditional",
                      sizes: "8x10 to 24x30",
                      count: 5,
                    },
                    {
                      ratio: "ISO A-Series",
                      sizes: "A5 to A1",
                      count: 5,
                    },
                    {
                      ratio: "Extras",
                      sizes: "5x7, 8.5x11, 11x14, 13x19...",
                      count: 5,
                    },
                  ].map((pack, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-3 py-2.5 rounded bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div>
                        <span className="text-sm font-medium">
                          {pack.ratio}
                        </span>
                        <span className="text-xs text-foreground-60 ml-2">
                          {pack.sizes}
                        </span>
                      </div>
                      <span className="text-xs text-accent-light font-mono">
                        {pack.count} sizes
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground-60 mt-4">
                  That&apos;s 30 sizes total. Top-selling Etsy shops include
                  all of them in every listing. Learn more in the{" "}
                  <Link
                    href="/etsy-print-ratios"
                    className="text-accent-light hover:underline"
                  >
                    complete ratio guide
                  </Link>
                  .
                </p>
              </Card>

              {/* CTA 1 */}
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Bottleneck
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Get all 30 sizes across 5 ratio
                  packs at 300&nbsp;DPI in about 60 seconds. No Photoshop.
                  No manual resizing.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 50%, #92400e 100%)" }}>
                    Try SnapToSize Free
                  </button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: The Modern Workflow --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20">
                  <Zap className="h-4 w-4 text-green-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  The Modern Workflow: Design to Done in 4 Steps
                </h2>
              </div>

              <p className="text-foreground-60 mb-6">
                This is the workflow that replaces Photoshop entirely. Four
                steps, no monthly subscription, and your listings look just
                as professional as sellers paying for the full Adobe suite.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    step: 1,
                    title: "Design at max resolution in your tool",
                    desc: "Create your artwork in Canva, Procreate, or your AI tool of choice. Set your canvas to at least 6000px on the longest side. For Canva, use \"Custom size\" and enter 6000 x 9000 pixels (2:3 ratio). For Procreate, create a canvas at 7200 x 10800 pixels.",
                  },
                  {
                    step: 2,
                    title: "Export as a high-res image",
                    desc: "Save your finished artwork as a JPG or PNG file. In Canva, go to Download → JPG. In Procreate, go to Share → JPEG → Best Quality. The higher the resolution of your source file, the better every resized version will look.",
                  },
                  {
                    step: 3,
                    title:
                      "Upload to SnapToSize — get 30 sizes in 60 seconds",
                    desc: "Drop your image into SnapToSize. Select your ratio packs. Hit generate. You'll get all 30 sizes across 5 ratio packs, each at 300 DPI with professional file naming — all as .jpg files.",
                  },
                  {
                    step: 4,
                    title: "Download ZIP packs, upload to Etsy",
                    desc: "Each ratio pack downloads as an organized ZIP file under 20 MB. Upload all 5 ZIPs to your Etsy listing. Your buyers get every standard frame size with one purchase.",
                  },
                ].map((item) => (
                  <Card key={item.step} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-green-400">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-foreground-60 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <p className="text-foreground-60 mb-4">
                For a complete breakdown of which files to include, see the{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  file inclusion guide
                </Link>
                .
              </p>

              {/* CTA 2 */}
              <div>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 50%, #92400e 100%)" }}>
                    Generate All Sizes Free
                  </button>
                </a>
              </div>
            </div>

            {/* --- Section 5: Ensuring 300 DPI Without Adobe --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <FileCheck className="h-4 w-4 text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Ensuring 300 DPI Without Adobe
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                300 DPI (dots per inch) is the professional standard for
                printed artwork. Files below 300 DPI look blurry or
                pixelated when printed, leading to refund requests and bad
                reviews. But you don&apos;t need Photoshop to achieve it.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  How to verify DPI in each tool
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm mb-1">Canva</p>
                    <p className="text-foreground-60 text-sm">
                      Canva exports at 300 DPI when you choose &ldquo;PDF
                      Print&rdquo; format. For JPG exports, ensure your
                      canvas pixel dimensions are large enough. A 24&times;36
                      inch print at 300 DPI needs a canvas of
                      7200&times;10800 pixels.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Procreate</p>
                    <p className="text-foreground-60 text-sm">
                      When creating a new canvas, Procreate lets you set DPI
                      directly. Enter 300 DPI and your desired dimensions in
                      inches. The app calculates the pixel count
                      automatically.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">AI tools</p>
                    <p className="text-foreground-60 text-sm">
                      Most AI tools output at 72 DPI metadata but at high
                      pixel dimensions. The pixel count is what actually
                      matters. A 4096&times;4096px AI image has enough pixels
                      for a sharp 13.6&times;13.6 inch print at 300 DPI.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-green-500/5 border-green-500/10">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">
                      SnapToSize handles this automatically
                    </p>
                    <p className="text-foreground-60 text-sm">
                      Every file SnapToSize outputs is exactly 300 DPI at
                      the correct pixel dimensions for that print size. No
                      manual DPI settings. No math. Upload your
                      highest-resolution source and every output is
                      print-ready. See all{" "}
                      <Link
                        href="/etsy-print-sizes"
                        className="text-accent-light hover:underline"
                      >
                        30 sizes with exact pixel dimensions
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* --- Section 6: Organizing Files for Etsy's 20MB Limit --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <FolderOpen className="h-4 w-4 text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Organizing Files for Etsy&apos;s 20&nbsp;MB Limit
                </h2>
              </div>

              <p className="text-foreground-60 mb-4">
                Etsy allows a maximum of 20 MB per digital download file.
                When you&apos;re offering 30 print sizes, file organization
                is critical. Without it, you hit upload limits and buyers
                get a confusing folder of randomly named files.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Professional file structure
                </h3>
                <div className="font-mono text-sm space-y-1 text-foreground-60">
                  <p className="text-white/80 font-semibold">
                    ZIP 1: 2-3_Wall_Art_Pack.zip
                  </p>
                  <p className="pl-4">artwork_4x6_300dpi.jpg</p>
                  <p className="pl-4">artwork_8x12_300dpi.jpg</p>
                  <p className="pl-4">artwork_16x24_300dpi.jpg</p>
                  <p className="pl-4 text-foreground-60/50">
                    ... (8 sizes total)
                  </p>
                  <p className="text-white/80 font-semibold mt-3">
                    ZIP 2: 3-4_Photo_Frame_Pack.zip
                  </p>
                  <p className="pl-4">artwork_6x8_300dpi.jpg</p>
                  <p className="pl-4">artwork_18x24_300dpi.jpg</p>
                  <p className="pl-4 text-foreground-60/50">
                    ... (6 sizes total)
                  </p>
                  <p className="text-white/80 font-semibold mt-3">
                    ZIP 3&ndash;5: 4:5, ISO, Extras packs
                  </p>
                </div>
              </Card>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-white/80">
                      Professional naming:
                    </strong>{" "}
                    Use the pattern{" "}
                    <code className="text-accent-light">
                      artwork_8x10_300dpi.jpg
                    </code>{" "}
                    so buyers know exactly what each file is.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-white/80">
                      Ratio-based ZIPs:
                    </strong>{" "}
                    Group sizes by ratio family so buyers can quickly find
                    the file for their frame.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-white/80">
                      Under 20 MB each:
                    </strong>{" "}
                    JPG format keeps file sizes manageable. Each ZIP stays
                    well under Etsy&apos;s limit.
                  </p>
                </div>
              </div>

              <p className="text-foreground-60">
                For the complete guide to Etsy&apos;s file size
                restrictions, see{" "}
                <Link
                  href="/etsy-20mb-file-limit"
                  className="text-accent-light hover:underline"
                >
                  how to stay under Etsy&apos;s 20 MB limit
                </Link>
                . SnapToSize produces this exact ZIP structure automatically
                &mdash; professional naming, ratio grouping, and guaranteed
                under 20 MB per pack.
              </p>
            </div>

            {/* --- Section 7: Final Checklist --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Your No-Photoshop Checklist
              </h2>
              <Card className="p-6 md:p-8">
                <div className="space-y-3">
                  {[
                    "Design tool chosen (Canva, Procreate, or AI tool)",
                    "Source artwork at 6000+ pixels on longest side",
                    "Exported as a high-resolution image (JPG or PNG)",
                    "All 30 sizes generated across 5 ratio packs (2:3, 3:4, 4:5, ISO, Extras)",
                    "Every file at 300 DPI with correct pixel dimensions",
                    "Files named professionally (artwork_8x10_300dpi.jpg)",
                    "ZIPs organized by ratio, each under 20 MB",
                    "All 5 ZIPs uploaded to Etsy listing",
                    "AI disclosure added (if applicable)",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded border border-white/20 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-60 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Ready to Ditch Photoshop?"
                stat="$0/month instead of $22.99/month — same professional output"
                description="Upload your artwork once. Get all 30 sizes across 5 ratio packs at 300 DPI — organized, named, and under 20 MB. No Photoshop. No manual resizing. Ready to list in seconds."
                buttonText="Generate All Sizes Free"
                appUrl={appUrl}
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "Is Canva enough to sell printables on Etsy?",
                    answer:
                      "Yes for design. But resizing one design into 30 sizes manually in Canva takes hours. Use Canva for the creative work — designing your artwork with templates, typography, and colors. Then use SnapToSize for the technical work — generating all 30 sizes across 5 ratio packs automatically.",
                  },
                  {
                    question:
                      "How do I make my files 300 DPI without Photoshop?",
                    answer:
                      "Export at the highest resolution your design tool offers. The key is pixel count: a 24x36 inch print at 300 DPI needs 7200x10800 pixels. SnapToSize ensures 300 DPI on every output file automatically — no manual DPI settings needed.",
                  },
                  {
                    question:
                      "What file format should I save in?",
                    answer:
                      "JPG for print files. It keeps file size small while maintaining quality, which is critical for staying under Etsy's 20MB per-file limit. PNG is unnecessary for prints and creates much larger files that can push you over Etsy's upload limits. SnapToSize outputs .jpg files automatically.",
                  },
                  {
                    question:
                      "How do I offer multiple sizes without creating 30 canvases?",
                    answer:
                      "Upload one high-res design to SnapToSize. Get all 30 sizes across 5 ratio packs (2:3, 3:4, 4:5, ISO A-Series, Extras) automatically. Each pack downloads as an organized ZIP with professional file naming. No manual resizing, no 30 separate canvases.",
                  },
                  {
                    question:
                      "Do I need a paid Canva account to sell commercially?",
                    answer:
                      "No. Canva Free allows commercial use of your own designs. Just don't use Canva Pro templates for resale without checking their content license agreement. If you create your own artwork from scratch in Canva, the free tier is all you need.",
                  },
                ]}
              />
            </div>

            {/* --- Email Capture --- */}
            <div>
              <EmailCaptureSection
                heading="Free Etsy Print Size Cheat Sheet"
                description="All 30 Etsy sizes with pixel dimensions at 300 DPI, ratio families, and file naming conventions. One page, zero guesswork."
                placeholder="Enter your email"
                buttonText="Get Free Cheat Sheet"
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="how-to-sell-printables-on-etsy-without-photoshop" />
          </div>
        </Container>
      </section>
    </>
  );
}
