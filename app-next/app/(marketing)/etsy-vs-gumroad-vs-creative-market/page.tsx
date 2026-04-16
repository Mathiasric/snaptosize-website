import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, ArrowRight, X, DollarSign, Globe, Package } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title:
    "Etsy vs Gumroad vs Creative Market for Digital Art (2026)",
  description:
    "Compare Etsy, Gumroad, and Creative Market for selling digital art. Fees, file limits, traffic, and print size packaging strategies.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-vs-gumroad-vs-creative-market",
  },
  openGraph: {
    title:
      "Etsy vs Gumroad vs Creative Market for Digital Art (2026)",
    description:
      "Compare Etsy, Gumroad, and Creative Market for selling digital art. Fees, file limits, traffic, and print size packaging strategies.",
    url: "https://snaptosize.com/etsy-vs-gumroad-vs-creative-market",
    type: "article",
    images: [
      {
        url: "/assets/og/etsy-vs-gumroad-vs-creative-market.png",
        width: 1200,
        height: 630,
        alt: "Etsy vs Gumroad vs Creative Market comparison for digital art sellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Etsy vs Gumroad vs Creative Market for Digital Art (2026)",
    description:
      "Compare fees, file limits, traffic, and print size packaging strategies across the three biggest platforms for digital art.",
    images: [
      "/assets/og/etsy-vs-gumroad-vs-creative-market.png",
    ],
  },
};

export default function EtsyVsGumroadVsCreativeMarketPage() {
  const appUrl =
    "https://app.snaptosize.com/app/quick-export?source=seo_etsy-vs-gumroad-vs-creative-market&kind=comparison";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy vs Gumroad vs Creative Market for Digital Art (2026)",
    description:
      "Compare Etsy, Gumroad, and Creative Market for selling digital art. Fees, file limits, traffic, and print size packaging strategies.",
    url: "https://snaptosize.com/etsy-vs-gumroad-vs-creative-market",
    datePublished: "2026-04-16",
    dateModified: "2026-04-16",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://snaptosize.com/etsy-vs-gumroad-vs-creative-market",
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
        name: "Guides",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Etsy vs Gumroad vs Creative Market",
        item: "https://snaptosize.com/etsy-vs-gumroad-vs-creative-market",
      },
    ],
  };

  const faqItems = [
    {
      question:
        "Can I sell the same digital art on Etsy, Gumroad, and Creative Market?",
      answer:
        "Yes — none of these platforms require exclusivity for digital products. You can list the same art on all three simultaneously, though you may want to adjust file packaging and sizes for each platform's audience expectations.",
    },
    {
      question: "Which platform has the lowest fees for digital art?",
      answer:
        "Gumroad charges a flat 10% + $0.50 per sale with no listing fees — payment processing is included. Etsy charges $0.20 per listing plus 6.5% per transaction plus payment processing (3% + $0.25 in the US, varies by country). Creative Market takes a flat 50% commission on each sale. On a $10 item, you keep ~$8.60 on Etsy (86%), ~$8.50 on Gumroad (85%), and ~$5.00 on Creative Market (50%).",
    },
    {
      question:
        "What file sizes can I upload to Etsy vs Gumroad vs Creative Market?",
      answer:
        "Etsy allows up to 5 digital files per listing, each capped at 20MB. Gumroad allows much larger files (up to 16GB per product). Creative Market allows files up to 1.5GB. This difference directly affects how many print sizes you can bundle per listing — on Etsy, you need to be strategic about which sizes to include in each ZIP file.",
    },
    {
      question:
        "Do I need different print sizes for each platform?",
      answer:
        "Etsy buyers expect specific frame-ready sizes like 8×10, 5×7, and 16×20. Gumroad buyers often prefer maximum-resolution source files. Creative Market buyers typically want editable assets or specific design formats. Tailoring your size selection to each platform's audience increases sales.",
    },
    {
      question:
        "What is the easiest way to resize art for multiple selling platforms?",
      answer:
        "SnapToSize lets you upload one high-resolution file and instantly generate all the sizes you need for Etsy, Gumroad, and Creative Market — organized into ratio packs with correct DPI and naming. It handles Etsy's 20MB file limit automatically, so each ZIP stays within platform constraints.",
    },
    {
      question: "Is Etsy or Gumroad better for beginners selling digital art?",
      answer:
        "Etsy is generally better for beginners because it provides built-in marketplace traffic — over 90 million active buyers can discover your art through Etsy search without you having an existing audience. Gumroad requires you to drive your own traffic through social media, email lists, or a blog. However, Gumroad gives you more brand control and audience ownership from day one.",
    },
    {
      question:
        "What tools help resize digital art for Etsy, Gumroad, and Creative Market?",
      answer:
        "SnapToSize is a dedicated resizing tool for digital art sellers. It takes one high-resolution file and generates all standard print sizes across 5 ratio packs (2:3, 3:4, 4:5, ISO, and extras) in under 30 seconds. Each output ZIP stays within Etsy's 20MB limit, while Gumroad and Creative Market versions can include larger bundles. This eliminates manual resizing across platforms.",
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

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
        {/* CSS-only background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B12] via-[#12101f] to-[#0B0B12]" />
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.05]"
            style={{
              background:
                "radial-gradient(circle, #2DD4BF 0%, transparent 70%)",
            }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-mono tracking-widest text-[#A78BFA]/70 uppercase mb-4">
                Platform Comparison
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Etsy vs Gumroad vs Creative Market:{" "}
                <span className="text-[#2DD4BF]">
                  Where to Sell Digital Art in 2026
                </span>
              </h1>
              <p className="text-lg text-foreground-60 mb-6 max-w-xl">
                Each platform has different fees, file limits, and buyer
                expectations. Here&apos;s how they compare — and how to package
                your art for each one.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-foreground-60">
                <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-full">
                  <DollarSign className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  Fee breakdown per platform
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-full">
                  <Package className="w-3.5 h-3.5 text-[#A78BFA]" />
                  File limit comparison
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-full">
                  <Globe className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  Traffic & discovery analysis
                </span>
              </div>
            </div>

            {/* Right side visual — CSS-only comparison graphic */}
            <div className="hidden md:flex flex-col gap-3">
              {[
                {
                  name: "Etsy",
                  color: "#F56B2A",
                  pros: ["90M+ buyers", "Built-in search"],
                  cons: ["5×20MB file cap", "6.5% + listing fees"],
                },
                {
                  name: "Gumroad",
                  color: "#FF90E8",
                  pros: ["16GB file limit", "Own your audience"],
                  cons: ["No marketplace", "10% + $0.50/sale"],
                },
                {
                  name: "Creative Market",
                  color: "#71C285",
                  pros: ["Design-focused", "10M+ members"],
                  cons: ["50% rev share", "Curated approval"],
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: p.color }}
                    />
                    <span className="font-semibold text-sm">{p.name}</span>
                  </div>
                  <div className="flex gap-4 text-xs text-foreground-60">
                    <div className="flex-1 space-y-1">
                      {p.pros.map((pro) => (
                        <div key={pro} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#2DD4BF]" />
                          {pro}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 space-y-1">
                      {p.cons.map((con) => (
                        <div key={con} className="flex items-center gap-1">
                          <X className="w-3 h-3 text-red-400/60" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 1: QuickAnswer + Overview ==================== */}
      <section className="py-12 md:py-16">
        <Container>
          <QuickAnswer question="Which platform is best for selling digital art — Etsy, Gumroad, or Creative Market?">
            Etsy gives you built-in traffic and discovery (but charges listing
            fees + 6.5% per sale), Gumroad gives you brand control and audience
            ownership (10% + $0.50/sale fee, no marketplace traffic), and Creative Market
            targets designers specifically (50% revenue share). Most
            successful sellers use 2–3 platforms — but each has different{" "}
            <Link
              href="/etsy-20mb-file-limit"
              className="text-[#2DD4BF] underline"
            >
              file size limits
            </Link>
            , image requirements, and buyer expectations for{" "}
            <Link
              href="/etsy-print-sizes"
              className="text-[#2DD4BF] underline"
            >
              print sizes
            </Link>
            .
          </QuickAnswer>

          <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6">
            Platform Overview: Etsy, Gumroad, and Creative Market at a Glance
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            Before diving into fees and file limits, here&apos;s the fundamental
            tradeoff: marketplace traffic vs. brand ownership vs. niche
            audience. Each platform optimizes for a different part of the
            selling experience.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 font-semibold text-foreground-60">
                    Feature
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">Etsy</th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Gumroad
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Creative Market
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Monthly Fee
                  </td>
                  <td className="py-3 px-4">
                    $0 (+ $0.20/listing)
                  </td>
                  <td className="py-3 px-4">$0 (free plan)</td>
                  <td className="py-3 px-4">$0</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Transaction Fee
                  </td>
                  <td className="py-3 px-4">6.5%</td>
                  <td className="py-3 px-4">10% + $0.50</td>
                  <td className="py-3 px-4">50% rev share</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Built-in Traffic
                  </td>
                  <td className="py-3 px-4">
                    <Check className="w-4 h-4 text-[#2DD4BF] inline" /> 90M+
                    buyers
                  </td>
                  <td className="py-3 px-4">
                    <X className="w-4 h-4 text-red-400/60 inline" /> None
                  </td>
                  <td className="py-3 px-4">
                    <Check className="w-4 h-4 text-[#2DD4BF] inline" /> 10M+
                    members
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    File Limits
                  </td>
                  <td className="py-3 px-4">5 files × 20MB each</td>
                  <td className="py-3 px-4">Up to 16GB</td>
                  <td className="py-3 px-4">Up to 1.5GB</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">
                    Best For
                  </td>
                  <td className="py-3 px-4">
                    Printable wall art, frame-ready sizes
                  </td>
                  <td className="py-3 px-4">
                    High-res files, creator audience
                  </td>
                  <td className="py-3 px-4">
                    Design assets, templates
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-foreground-60 max-w-3xl">
            The key question isn&apos;t which platform is &ldquo;best&rdquo; —
            it&apos;s which combination matches your art style, audience, and
            workflow. A seller listing{" "}
            <Link
              href="/etsy-print-sizes"
              className="text-[#2DD4BF] underline"
            >
              frame-ready print sizes on Etsy
            </Link>{" "}
            has very different packaging needs than someone selling
            high-resolution source files on Gumroad.
          </p>
        </Container>
      </section>

      {/* ==================== Lifestyle Image ==================== */}
      <div className="px-4 md:px-8 max-w-5xl mx-auto pb-4">
        <div className="rounded-xl overflow-hidden border border-white/[0.08]">
          <img
            src="/assets/visuals/etsy-vs-gumroad-vs-creative-market-mockup.jpg"
            alt="Digital art displayed on multiple devices representing different selling platforms"
            width={1200}
            height={800}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* ==================== SECTION 2: File Limits + Print Sizes ==================== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            File Size Limits and Delivery: What Each Platform Allows
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            This is the most practical difference between platforms — and the
            one that directly affects how you package your digital art. Etsy&apos;s
            strict{" "}
            <Link
              href="/etsy-20mb-file-limit"
              className="text-[#2DD4BF] underline"
            >
              20MB-per-file limit
            </Link>{" "}
            forces you to be strategic about which sizes go into each ZIP.
            Gumroad and Creative Market are far more generous.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 font-semibold text-foreground-60">
                    Platform
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Max File Size
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Files per Listing
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Packaging Strategy
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Etsy
                  </td>
                  <td className="py-3 px-4">20MB per file</td>
                  <td className="py-3 px-4">5 files max</td>
                  <td className="py-3 px-4">
                    Group sizes by ratio into separate ZIPs. Each ZIP must stay
                    under 20MB.
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Gumroad
                  </td>
                  <td className="py-3 px-4">16GB per product</td>
                  <td className="py-3 px-4">Unlimited</td>
                  <td className="py-3 px-4">
                    Include everything — all sizes, all ratios, source files.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">
                    Creative Market
                  </td>
                  <td className="py-3 px-4">1.5GB per product</td>
                  <td className="py-3 px-4">Multiple files</td>
                  <td className="py-3 px-4">
                    Organized folders with clear naming for design-savvy buyers.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card accent className="mb-8">
            <div className="p-6">
              <p className="text-sm font-medium mb-2 text-[#A78BFA]">
                Why this matters for multi-platform sellers
              </p>
              <p className="text-foreground-60 text-sm">
                If you sell on both Etsy and Gumroad, you need two different
                packaging strategies. On Etsy, you might split your sizes across
                ratio-based ZIPs to{" "}
                <Link
                  href="/how-to-package-digital-wall-art-for-etsy"
                  className="text-[#2DD4BF] underline"
                >
                  stay under the 20MB limit
                </Link>
                . On Gumroad, you can bundle everything into one comprehensive
                download. Managing these different packages manually for every
                artwork is where most sellers lose hours.
              </p>
            </div>
          </Card>

          <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6">
            Print Size Expectations by Platform
          </h2>
          <p className="text-foreground-60 mb-6 max-w-3xl">
            Each platform attracts a different buyer — and different buyers
            expect different things. Understanding these expectations is
            critical for maximizing sales on each platform.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#F56B2A" }}
                />
                Etsy Buyers
              </h3>
              <p className="text-sm text-foreground-60 mb-3">
                Want frame-ready, print-at-home sizes. They&apos;re buying art
                for their walls — not raw design files.
              </p>
              <div className="text-sm text-foreground-60 space-y-1">
                <p>
                  <strong className="text-foreground">Expect:</strong>{" "}
                  <Link
                    href="/etsy-8x10-print-size"
                    className="text-[#2DD4BF] underline"
                  >
                    8×10
                  </Link>
                  ,{" "}
                  <Link
                    href="/etsy-5x7-print-size"
                    className="text-[#2DD4BF] underline"
                  >
                    5×7
                  </Link>
                  ,{" "}
                  <Link
                    href="/etsy-16x20-print-size"
                    className="text-[#2DD4BF] underline"
                  >
                    16×20
                  </Link>
                  , 11×14, 24×36
                </p>
                <p>
                  <strong className="text-foreground">Format:</strong> JPEG/PNG
                  at 300 DPI
                </p>
                <p>
                  <strong className="text-foreground">Key:</strong> Clear file
                  naming, ratio-organized ZIPs
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#FF90E8" }}
                />
                Gumroad Buyers
              </h3>
              <p className="text-sm text-foreground-60 mb-3">
                Often other creators or print-on-demand sellers. They want
                maximum resolution source files they can resize themselves.
              </p>
              <div className="text-sm text-foreground-60 space-y-1">
                <p>
                  <strong className="text-foreground">Expect:</strong>{" "}
                  High-res master files (4000px+)
                </p>
                <p>
                  <strong className="text-foreground">Format:</strong> PNG, PSD,
                  or vector
                </p>
                <p>
                  <strong className="text-foreground">Key:</strong> Resolution
                  quality, editable layers
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#71C285" }}
                />
                Creative Market Buyers
              </h3>
              <p className="text-sm text-foreground-60 mb-3">
                Professional designers who need specific asset formats for
                client projects, presentations, and templates.
              </p>
              <div className="text-sm text-foreground-60 space-y-1">
                <p>
                  <strong className="text-foreground">Expect:</strong> Editable
                  assets, multiple formats
                </p>
                <p>
                  <strong className="text-foreground">Format:</strong> AI, EPS,
                  SVG, PNG bundles
                </p>
                <p>
                  <strong className="text-foreground">Key:</strong> Professional
                  organization, compatibility
                </p>
              </div>
            </div>
          </div>

          <p className="text-foreground-60 max-w-3xl">
            The takeaway: your Etsy listing needs{" "}
            <Link
              href="/how-many-sizes-etsy-printable"
              className="text-[#2DD4BF] underline"
            >
              specific frame sizes
            </Link>{" "}
            organized into clean ZIPs. Your Gumroad product can be a single
            high-resolution file. And Creative Market needs polished,
            professional asset bundles. Selling on all three from a single
            artwork means producing three different packages.
          </p>
        </Container>
      </section>

      {/* ==================== CTA 1 ==================== */}
      <section className="py-10">
        <Container>
          <ContextualCTA
            problem="Selling on multiple platforms?"
            solution="Upload one high-res file and get every size you need for Etsy, Gumroad, and Creative Market — organized into ratio packs with correct naming and DPI."
            buttonText="Generate All Sizes Free"
            appUrl={appUrl}
          />
        </Container>
      </section>

      {/* ==================== SECTION 3: Traffic + Fees ==================== */}
      <section className="py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Traffic and Discovery: Marketplace vs. Self-Driven
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            The biggest strategic difference between these platforms isn&apos;t
            fees — it&apos;s where your customers come from. This single factor
            should drive your platform strategy more than anything else.
          </p>

          <div className="space-y-6 mb-10">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Etsy: Built-in marketplace discovery
              </h3>
              <p className="text-sm text-foreground-60">
                Etsy&apos;s search algorithm puts your art in front of 90
                million+ active buyers. New sellers can get sales without an
                existing audience — your listing SEO matters more than your
                social following. This is why Etsy remains the default starting
                point for most digital art sellers, even with higher fees.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Gumroad: You bring the traffic
              </h3>
              <p className="text-sm text-foreground-60">
                Gumroad has no marketplace — zero built-in discovery. Every sale
                comes from your own marketing: social media, email list, blog,
                or YouTube. The upside is you own the customer relationship
                completely. You get buyer emails, can build a mailing list, and
                aren&apos;t competing with similar listings on the same page.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Creative Market: Curated but smaller
              </h3>
              <p className="text-sm text-foreground-60">
                Creative Market has 10 million+ members with curated discovery
                and editorial features. Volume is lower than Etsy, but the
                audience is design-focused — they&apos;re professionals willing
                to pay premium prices for quality assets. Getting accepted
                requires a portfolio review.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6">
            Fees and Profit Margins Compared
          </h2>
          <p className="text-foreground-60 mb-6 max-w-3xl">
            Let&apos;s compare what you actually keep when selling a $9.99
            digital art pack on each platform. The numbers might surprise you.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 px-4 font-semibold text-foreground-60">
                    Cost Item
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">Etsy</th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Gumroad
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Creative Market
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground-60">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Sale Price
                  </td>
                  <td className="py-3 px-4">$9.99</td>
                  <td className="py-3 px-4">$9.99</td>
                  <td className="py-3 px-4">$9.99</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Listing Fee
                  </td>
                  <td className="py-3 px-4">−$0.20</td>
                  <td className="py-3 px-4">$0</td>
                  <td className="py-3 px-4">$0</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Transaction Fee
                  </td>
                  <td className="py-3 px-4">−$0.65 (6.5%)</td>
                  <td className="py-3 px-4">−$1.50 (10% + $0.50)</td>
                  <td className="py-3 px-4">−$5.00 (50%)</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 font-medium text-foreground">
                    Payment Processing
                  </td>
                  <td className="py-3 px-4">−$0.25 + 3%</td>
                  <td className="py-3 px-4">Included</td>
                  <td className="py-3 px-4">Included</td>
                </tr>
                <tr className="bg-white/[0.03]">
                  <td className="py-3 px-4 font-semibold text-foreground">
                    You Keep
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#2DD4BF]">
                    ~$8.59 (86%)
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#2DD4BF]">
                    ~$8.50 (85%)
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#2DD4BF]">
                    ~$5.00 (50%)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-foreground-60 max-w-3xl">
            Etsy and Gumroad are surprisingly close on fees — ~86% vs ~85% kept on a $10 item. Etsy&apos;s edge is built-in traffic from 90M+ buyers. Gumroad&apos;s 10% + $0.50 flat fee (processing included) is simpler, but you
            need to drive every visitor yourself. Creative Market&apos;s revenue share is steep,
            but their audience pays premium prices — your average sale price may
            be higher there. If you want to{" "}
            <Link
              href="/how-to-price-etsy-printables"
              className="text-[#2DD4BF] underline"
            >
              optimize your pricing strategy
            </Link>
            , consider the full picture: fees, traffic cost, and average order
            value.
          </p>
        </Container>
      </section>

      {/* ==================== CTA 2 ==================== */}
      <section className="py-10 bg-white/[0.02]">
        <Container>
          <ContextualCTA
            problem="Packaging files for 3 platforms is exhausting"
            solution="SnapToSize generates Etsy-compliant ZIPs that stay under 20MB, plus high-res bundles for Gumroad — from a single upload."
            buttonText="Try the Free Tier"
            appUrl={appUrl}
          />
        </Container>
      </section>

      {/* ==================== SECTION 4: Multi-Channel + Decision Guide ==================== */}
      <section className="py-14">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Selling on Multiple Platforms: The Multi-Channel Strategy
          </h2>
          <p className="text-foreground-60 mb-8 max-w-3xl">
            Most successful digital art sellers don&apos;t choose just one
            platform — they use two or three simultaneously. The challenge is
            that each platform requires different file packages, different size
            expectations, and different listing optimization. Here&apos;s how to
            manage it without losing your mind.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Start with one master high-resolution file
                </h3>
                <p className="text-sm text-foreground-60">
                  Create your artwork at the highest resolution possible (at
                  least 300 DPI at your largest intended print size). This single
                  file is your source for every platform. Learn more about{" "}
                  <Link
                    href="/best-resolution-for-etsy-printables"
                    className="text-[#2DD4BF] underline"
                  >
                    optimal resolution for printables
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Generate platform-specific packages
                </h3>
                <p className="text-sm text-foreground-60">
                  For Etsy: ratio-organized ZIPs under 20MB with{" "}
                  <Link
                    href="/what-files-to-include-etsy-digital-download"
                    className="text-[#2DD4BF] underline"
                  >
                    standard frame sizes
                  </Link>
                  . For Gumroad: a single ZIP with all sizes plus the high-res
                  master. For Creative Market: professionally organized folders
                  with format variety.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Maintain consistent quality across platforms
                </h3>
                <p className="text-sm text-foreground-60">
                  Every platform version should be 300 DPI, properly named, and
                  correctly sized. One bad review about &ldquo;blurry
                  prints&rdquo; on any platform hurts your brand everywhere.
                  Check{" "}
                  <Link
                    href="/how-to-resize-images-for-etsy"
                    className="text-[#2DD4BF] underline"
                  >
                    resizing best practices
                  </Link>{" "}
                  to avoid quality loss.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-14 mb-6">
            Which Platform Should You Choose?
          </h2>
          <p className="text-foreground-60 mb-6 max-w-3xl">
            Your ideal platform mix depends on where you are in your selling
            journey and what kind of art you create.
          </p>

          <div className="space-y-4 mb-8">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Just starting out → Etsy first
              </h3>
              <p className="text-sm text-foreground-60">
                If you don&apos;t have an existing audience, Etsy&apos;s
                marketplace traffic is invaluable. Focus on{" "}
                <Link
                  href="/how-to-sell-digital-downloads-on-etsy"
                  className="text-[#2DD4BF] underline"
                >
                  optimizing your Etsy listings
                </Link>{" "}
                first, then expand to other platforms once you have consistent
                sales.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Have an audience → Add Gumroad
              </h3>
              <p className="text-sm text-foreground-60">
                If you have a social media following, email list, or blog, add
                Gumroad as your second platform. The higher per-sale margin
                makes sense when you&apos;re driving your own traffic — and you
                keep the customer relationship.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Create design assets → Creative Market
              </h3>
              <p className="text-sm text-foreground-60">
                If your art is used by other designers (patterns, textures,
                illustrations, templates), Creative Market&apos;s focused
                audience can drive premium-priced sales. The revenue share is
                steep, but the average sale price is often higher.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-semibold mb-2">
                Scaling up → Etsy + Gumroad together
              </h3>
              <p className="text-sm text-foreground-60">
                The most common multi-platform strategy: Etsy for discovery and
                volume, Gumroad for audience ownership and higher margins. List
                the same art on both with platform-specific packaging. This is
                where automated{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-[#2DD4BF] underline"
                >
                  ratio-based sizing
                </Link>{" "}
                saves the most time — producing two different packages from one
                upload instead of manually resizing for each platform.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== FinalCTA ==================== */}
      <section className="py-14 bg-white/[0.02]">
        <Container>
          <FinalCTA
            heading="One upload. Every platform covered."
            stat="70 files from a single artwork — organized by ratio, named correctly, under 20MB for Etsy"
            description="Stop manually resizing for each platform. SnapToSize generates Etsy-ready ZIPs, Gumroad bundles, and everything in between."
            appUrl={`${appUrl}&kind=cta`}
          />

          {/* ==================== FAQ ==================== */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* ==================== RelatedPages ==================== */}
      <section className="py-14">
        <Container>
          <RelatedPages currentSlug="etsy-vs-gumroad-vs-creative-market" />
        </Container>
      </section>
    </>
  );
}
