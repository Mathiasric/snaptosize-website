import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, AlertTriangle, Camera, Aperture } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title:
    "Etsy Photography Print Sizes: 3:2 Ratio Guide for Camera Images (2026)",
  description:
    "Camera photos are 3:2 ratio — most Etsy print sizes aren't. Learn exact pixel dimensions and how to adapt your photography for 8×10, 11×14, A4, and more.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-photography-print-sizes",
  },
  openGraph: {
    title: "Etsy Photography Print Sizes: 3:2 Ratio Guide for Camera Images (2026)",
    description:
      "Map camera sensor ratios (3:2, 4:3) to Etsy print sizes. Zero-crop sizing for DSLR, mirrorless, drone, and phone photography.",
    url: "https://snaptosize.com/etsy-photography-print-sizes",
    images: [
      {
        url: "/assets/og/etsy-photography-print-sizes.png",
        width: 1200,
        height: 630,
        alt: "Photography Print Sizes for Etsy — Camera Ratio to Print Size Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Photography Print Sizes: 3:2 Ratio Guide for Camera Images (2026)",
    description:
      "Your camera shoots 3:2. Here are the exact print sizes that match — zero cropping needed. Plus best sizes for every photography niche.",
    images: ["/assets/og/etsy-photography-print-sizes.png"],
  },
};

export default function EtsyPhotographyPrintSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy Photography Print Sizes: 3:2 Ratio Guide for Camera Images (2026)",
    description:
      "Complete guide to photography print sizes for Etsy sellers. Covers camera sensor ratios mapped to print dimensions, best sizes by photography niche, gallery wall sets, and the cropping problem with non-native ratios.",
    url: "https://snaptosize.com/etsy-photography-print-sizes",
    datePublished: "2026-04-03",
    dateModified: "2026-04-29",
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
        name: "Photography Print Sizes",
        item: "https://snaptosize.com/etsy-photography-print-sizes",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best print size for photography on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For photographers, the 2:3 ratio family (4\u00d76 through 20\u00d730) is ideal because it matches the native 3:2 sensor ratio of most DSLR and mirrorless cameras \u2014 zero cropping needed. However, you should also include 4:5 sizes (especially 8\u00d710 and 16\u00d720) since those are the most common frame sizes buyers already own. Offering both ratio families maximizes your addressable market.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to crop my photos for every print size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not for sizes in your camera's native ratio. If you shoot on a full-frame or APS-C camera (3:2 ratio), sizes like 4\u00d76, 8\u00d712, 12\u00d718, 16\u00d724, and 20\u00d730 need no cropping at all. Sizes in other ratios (like 8\u00d710 at 4:5) will require some cropping \u2014 about 16% of the image width for 3:2-to-4:5 conversion.",
        },
      },
      {
        "@type": "Question",
        name: "What resolution do I need for large photography prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For print-quality output at 300 DPI, a 20\u00d730 inch print requires 6000\u00d79000 pixels. Most modern cameras (24MP+) can handle this natively. For a 16\u00d724 print, you need 4800\u00d77200 pixels. Always export from your raw processor at maximum resolution before resizing for each print size.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include ISO/A-series sizes for my photography prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, especially if you sell to international buyers. A4 and A3 are the most popular paper sizes outside the US. The A-series uses a 1:1.414 ratio, which is between 3:2 and 4:3, so minimal cropping is needed from either camera format. Including ISO sizes opens up the European, Australian, and Asian markets.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between photography print sizes and art print sizes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The key difference is the starting ratio. Cameras output in 3:2 (DSLR/mirrorless) or 4:3 (Micro Four Thirds/phones), while digital artists typically design at whatever ratio they choose \u2014 often 4:5 for the popular 8\u00d710 size. This means photographers face a cropping challenge that artists do not. Photography sellers should lead with the 2:3 ratio pack and add 4:5 sizes as a complement, while art sellers often lead with 4:5.",
        },
      },
      {
        "@type": "Question",
        name: "How do I handle panoramic and ultra-wide photography for Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Panoramic shots (16:9 or wider) don't fit standard print sizes well. Your best options are: offer them as-is with specific panoramic dimensions, crop to 2:3 for standard sizes (losing significant top/bottom), or include them as bonus files alongside your standard ratio packs. Many sellers offer panoramics as separate listings rather than including them in multi-size bundles.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com/app/quick-export?source=seo_photography&kind=guide";

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
        className="relative pt-[8vh] md:pt-[12vh] pb-16 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #1a1d21 0%, #1e2328 30%, #22272d 55%, #1c2026 80%, #181b1f 100%)",
        }}
      >
        {/* Subtle grid pattern — technical/precision feel */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Aperture-inspired radial glow — top right */}
        <div
          className="absolute top-[-8%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #60a5fa, transparent 65%)",
          }}
        />
        {/* Warm accent glow — bottom left */}
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent 65%)",
          }}
        />

        {/* CSS Viewfinder / Photo Frames with Ratio Labels — right side */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden md:block">
          <div className="relative" style={{ width: "360px", height: "340px" }}>
            {/* Viewfinder crosshair — center circle */}
            <div
              className="absolute rounded-full"
              style={{
                width: "160px",
                height: "160px",
                top: "70px",
                left: "90px",
                border: "1.5px solid rgba(96,165,250,0.25)",
              }}
            />
            {/* Inner crosshair ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: "100px",
                height: "100px",
                top: "100px",
                left: "120px",
                border: "1px solid rgba(96,165,250,0.15)",
              }}
            />
            {/* Crosshair lines */}
            <div
              className="absolute"
              style={{
                width: "1px",
                height: "200px",
                top: "50px",
                left: "170px",
                background: "linear-gradient(transparent, rgba(96,165,250,0.2), transparent)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "200px",
                height: "1px",
                top: "150px",
                left: "70px",
                background: "linear-gradient(transparent, rgba(96,165,250,0.2), transparent)",
              }}
            />

            {/* Photo frame — 3:2 ratio (hero) */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "120px",
                height: "80px",
                top: "10px",
                left: "10px",
                border: "2px solid rgba(96,165,250,0.35)",
                background: "rgba(96,165,250,0.06)",
                boxShadow: "0 4px 16px rgba(96,165,250,0.08)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <span
                    className="text-[10px] font-mono tracking-widest block font-semibold"
                    style={{ color: "rgba(96,165,250,0.8)" }}
                  >
                    3:2
                  </span>
                  <span
                    className="text-[7px] font-mono tracking-wider block mt-0.5"
                    style={{ color: "rgba(96,165,250,0.5)" }}
                  >
                    NATIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Photo frame — 4:5 ratio */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "72px",
                height: "90px",
                top: "20px",
                left: "260px",
                border: "1.5px solid rgba(245,158,11,0.3)",
                background: "rgba(245,158,11,0.04)",
                boxShadow: "0 3px 12px rgba(245,158,11,0.06)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <span
                    className="text-[9px] font-mono tracking-widest block"
                    style={{ color: "rgba(245,158,11,0.7)" }}
                  >
                    4:5
                  </span>
                  <span
                    className="text-[6px] font-mono tracking-wider block mt-0.5"
                    style={{ color: "rgba(245,158,11,0.45)" }}
                  >
                    CROP
                  </span>
                </div>
              </div>
            </div>

            {/* Photo frame — 3:4 ratio */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "75px",
                height: "100px",
                top: "200px",
                left: "0px",
                border: "1.5px solid rgba(168,162,158,0.3)",
                background: "rgba(168,162,158,0.04)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <span
                    className="text-[9px] font-mono tracking-widest block"
                    style={{ color: "rgba(168,162,158,0.6)" }}
                  >
                    3:4
                  </span>
                  <span
                    className="text-[6px] font-mono tracking-wider block mt-0.5"
                    style={{ color: "rgba(168,162,158,0.4)" }}
                  >
                    M4/3
                  </span>
                </div>
              </div>
            </div>

            {/* Small square frame — 1:1 */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "56px",
                height: "56px",
                top: "250px",
                left: "260px",
                border: "1px solid rgba(168,162,158,0.2)",
                background: "rgba(168,162,158,0.03)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-[8px] font-mono tracking-widest"
                  style={{ color: "rgba(168,162,158,0.45)" }}
                >
                  1:1
                </span>
              </div>
            </div>

            {/* Aperture blades suggestion — decorative arcs */}
            <div
              className="absolute rounded-full"
              style={{
                width: "300px",
                height: "300px",
                top: "20px",
                left: "30px",
                border: "1px solid rgba(96,165,250,0.06)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "rgba(96,165,250,0.5)" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(96,165,250,0.8)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-1.5"
                style={{ color: "#f0f2f5" }}
              >
                Photography Print Sizes for Etsy
              </span>
              <span
                className="block text-xl md:text-2xl lg:text-3xl font-semibold"
                style={{ color: "rgba(96,165,250,0.85)" }}
              >
                Your camera shoots 3:2. Here are the print sizes&nbsp;that&nbsp;match.
              </span>
            </h1>
            <p className="text-base mb-5 max-w-lg" style={{ color: "rgba(209,213,219,0.8)" }}>
              Cameras output a fixed sensor ratio that most print sizes
              don&apos;t match. This guide maps every camera format to the
              exact Etsy print dimensions that work &mdash; with zero
              cropping for native ratios and minimal loss for the rest.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Photography Sizes
                </Button>
              </a>
              <p className="text-sm mt-1.5" style={{ color: "rgba(156,163,175,0.8)" }}>
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(96,165,250,0.08)",
                  borderColor: "rgba(96,165,250,0.2)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "rgba(96,165,250,0.8)" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "rgba(209,213,219,0.9)" }}>
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(96,165,250,0.08)",
                  borderColor: "rgba(96,165,250,0.2)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "rgba(96,165,250,0.8)" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "rgba(209,213,219,0.9)" }}>
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(96,165,250,0.08)",
                  borderColor: "rgba(96,165,250,0.2)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "rgba(96,165,250,0.8)" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "rgba(209,213,219,0.9)" }}>
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
            <QuickAnswer question="What are the best print sizes for photography on Etsy?">
              The <strong>2:3 ratio family</strong> (4x6, 8x12, 12x18, 16x24, 20x30) matches the native 3:2 sensor output of most DSLR and mirrorless cameras &mdash; <strong>zero cropping needed</strong>. Add 4:5 sizes (8x10, 16x20) for buyers with standard frames, and A4/A3 for international customers.
            </QuickAnswer>

            {/* --- H2 1: Why Photography Prints Have Unique Sizing Challenges --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Photography Prints Need Different Sizes Than Art Prints
              </h2>
              <p className="text-foreground-60 mb-4">
                Digital artists design their work at any ratio they choose.
                Photographers don&apos;t have that luxury. Every photo comes
                out of the camera at a fixed sensor ratio &mdash; and that
                ratio rarely matches standard print frame sizes.
              </p>
              <p className="text-foreground-60 mb-4">
                <strong className="text-foreground">The core problem: 3:2 vs 4:5.</strong>{" "}
                Most DSLR and mirrorless cameras shoot in 3:2. The most
                popular print size on Etsy &mdash;{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8x10
                </Link>{" "}
                &mdash; is 4:5. Printing a 3:2 photo at 8x10 means cropping
                roughly 16% of the image width. For a deep dive into the math,
                see our{" "}
                <Link
                  href="/2-3-vs-4-5-ratio"
                  className="text-accent-light hover:underline"
                >
                  2:3 vs 4:5 ratio guide
                </Link>.
              </p>
              <p className="text-foreground-60 mb-4">
                <strong className="text-foreground">Art sellers start in Photoshop at 8x10.</strong>{" "}
                They design to the frame. Photographers start with a sensor
                output they can&apos;t change. That means your sizing strategy
                must begin with your camera&apos;s native ratio and expand
                outward &mdash; not the other way around.
              </p>
              <p className="text-foreground-60">
                <strong className="text-foreground">The solution: lead with native-ratio sizes.</strong>{" "}
                Offer the 2:3 family first (where your photos fit perfectly),
                then add 4:5 and other ratios as complementary options. This
                gives buyers the best quality files while covering the most
                popular frame sizes.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-photography-print-mockup.jpg" alt="Gallery wall with six framed photography prints — golden hour mountains, coastal aerial, city skyline, white flower close-up, brutalist architecture, and mountain lake landscape — in black frames above a mid-century modern credenza" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- H2 2: Camera Sensor Ratios Explained --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Camera Sensor Ratios: 3:2, 4:3, and 16:9
              </h2>
              <p className="text-foreground-60 mb-6">
                Your camera type determines which print sizes fit your
                photos without cropping. Here&apos;s what each sensor
                format outputs &mdash; and which{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  print ratios
                </Link>{" "}
                match natively.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Camera Type
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Native Ratio
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Zero-Crop Print Sizes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        Full-Frame &amp; APS-C
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3:2
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4x6, 6x9, 8x12, 10x15, 12x18, 16x24, 20x30
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        Micro Four Thirds
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:3
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6x8, 9x12, 12x16, 15x20, 18x24
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">
                        Smartphones (photo mode)
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:3
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6x8, 9x12, 12x16, 15x20, 18x24
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">
                        DJI Mavic / Pro Drones
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3:2
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4x6, 6x9, 8x12, 10x15, 12x18, 16x24, 20x30
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">
                        DJI Mini / Consumer Drones
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        4:3
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        6x8, 9x12, 12x16, 15x20, 18x24
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60">
                The key insight: <strong className="text-foreground">most serious photography
                comes from 3:2 sensors</strong>. That means the 2:3 ratio
                pack &mdash; with its 7 sizes from 4x6 to 20x30 &mdash; is
                your primary set. Every file in that pack preserves
                100% of your original composition.
              </p>
            </div>

            {/* --- H2 3: The Complete Photography Print Size Chart --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Photography Print Size Chart: Every Size Mapped to Camera Ratios
              </h2>
              <p className="text-foreground-60 mb-6">
                This chart shows every standard Etsy print size, organized
                by ratio family. The &ldquo;Crop from 3:2&rdquo; column
                tells you exactly how much of your DSLR/mirrorless photo
                gets cut when printing at that size.
              </p>

              {/* 2:3 Sizes */}
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#60a5fa" }} />
                2:3 Ratio &mdash; Native for DSLR &amp; Mirrorless (Zero Crop)
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2.5 px-4 font-semibold">Size</th>
                      <th className="text-left py-2.5 px-4 font-semibold">Pixels @ 300 DPI</th>
                      <th className="text-left py-2.5 px-4 font-semibold">Crop from 3:2</th>
                      <th className="text-left py-2.5 px-4 font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-2.5 px-4 font-semibold">
                        <Link href="/etsy-4x6-print-size" className="text-accent-light hover:underline">4x6</Link>
                      </td>
                      <td className="py-2.5 px-4 text-foreground-60">1200 x 1800</td>
                      <td className="py-2.5 px-4 text-green-400 text-xs font-mono">0%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Postcards, small gifts</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-2.5 px-4 font-semibold">6x9</td>
                      <td className="py-2.5 px-4 text-foreground-60">1800 x 2700</td>
                      <td className="py-2.5 px-4 text-green-400 text-xs font-mono">0%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Small wall prints</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2.5 px-4 font-semibold">8x12</td>
                      <td className="py-2.5 px-4 text-foreground-60">2400 x 3600</td>
                      <td className="py-2.5 px-4 text-green-400 text-xs font-mono">0%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Travel gifts, desk prints</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-2.5 px-4 font-semibold">10x15</td>
                      <td className="py-2.5 px-4 text-foreground-60">3000 x 4500</td>
                      <td className="py-2.5 px-4 text-green-400 text-xs font-mono">0%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Mid-size wall art</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2.5 px-4 font-semibold">
                        <Link href="/etsy-12x18-print-size" className="text-accent-light hover:underline">12x18</Link>
                      </td>
                      <td className="py-2.5 px-4 text-foreground-60">3600 x 5400</td>
                      <td className="py-2.5 px-4 text-green-400 text-xs font-mono">0%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Popular photo print size</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-2.5 px-4 font-semibold">16x24</td>
                      <td className="py-2.5 px-4 text-foreground-60">4800 x 7200</td>
                      <td className="py-2.5 px-4 text-green-400 text-xs font-mono">0%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Large landscape prints</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold">
                        <Link href="/etsy-20x30-print-size" className="text-accent-light hover:underline">20x30</Link>
                      </td>
                      <td className="py-2.5 px-4 text-foreground-60">6000 x 9000</td>
                      <td className="py-2.5 px-4 text-green-400 text-xs font-mono">0%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Statement wall art, flagship size</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4:5 Sizes */}
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#f59e0b" }} />
                4:5 Ratio &mdash; Most Popular Frames (Requires Crop from 3:2)
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2.5 px-4 font-semibold">Size</th>
                      <th className="text-left py-2.5 px-4 font-semibold">Pixels @ 300 DPI</th>
                      <th className="text-left py-2.5 px-4 font-semibold">Crop from 3:2</th>
                      <th className="text-left py-2.5 px-4 font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-2.5 px-4 font-semibold">
                        <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8x10</Link>
                      </td>
                      <td className="py-2.5 px-4 text-foreground-60">2400 x 3000</td>
                      <td className="py-2.5 px-4 text-amber-400 text-xs font-mono">~16%</td>
                      <td className="py-2.5 px-4 text-foreground-60">#1 frame size, must-include</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-2.5 px-4 font-semibold">12x15</td>
                      <td className="py-2.5 px-4 text-foreground-60">3600 x 4500</td>
                      <td className="py-2.5 px-4 text-amber-400 text-xs font-mono">~16%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Mid-range photo mat</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2.5 px-4 font-semibold">
                        <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16x20</Link>
                      </td>
                      <td className="py-2.5 px-4 text-foreground-60">4800 x 6000</td>
                      <td className="py-2.5 px-4 text-amber-400 text-xs font-mono">~16%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Gallery-quality portrait prints</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-2.5 px-4 font-semibold">20x25</td>
                      <td className="py-2.5 px-4 text-foreground-60">6000 x 7500</td>
                      <td className="py-2.5 px-4 text-amber-400 text-xs font-mono">~16%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Large format prints</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold">24x30</td>
                      <td className="py-2.5 px-4 text-foreground-60">7200 x 9000</td>
                      <td className="py-2.5 px-4 text-amber-400 text-xs font-mono">~16%</td>
                      <td className="py-2.5 px-4 text-foreground-60">Statement prints</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20 mb-6">
                <div className="flex gap-4">
                  <Camera className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Key takeaway:</strong>{" "}
                    8x10 is still the #1 most-purchased frame size, so you must
                    include it despite the crop. But lead your listings with the
                    2:3 sizes where your photos look their absolute best &mdash;
                    every pixel preserved, exactly as you shot it.
                  </p>
                </div>
              </Card>

              <p className="text-foreground-60">
                For the complete list of all 28 sizes across all 5 ratio
                packs, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  full Etsy print size guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1: After Size Charts --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Your Camera Shoots 3:2. Our 2:3 Pack Was Built for That.
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload one photo, get 7 native-ratio sizes plus every
                  standard frame size &mdash; all at 300&nbsp;DPI, organized
                  in ZIPs, ready for your Etsy listing.
                </p>
                <a
                  href="https://app.snaptosize.com/app/quick-export?source=seo_photography&kind=sizes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 4: Best Sizes for Each Photography Niche --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best Print Sizes for Each Photography Niche
              </h2>
              <p className="text-foreground-60 mb-6">
                Different photography sub-niches attract different buyers
                with different wall space. Here are the sizes that
                perform best in each category.
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa" }}
                    >
                      <span className="text-lg">&#9968;</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Landscape &amp; Nature Photography
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Large formats dominate. Buyers want panoramic wall
                        pieces that fill a living room. Best sizes: 16x24,{" "}
                        <Link href="/etsy-20x30-print-size" className="text-accent-light hover:underline">20x30</Link>,
                        and 12x18. The 2:3 ratio matches camera output
                        natively. For all horizontal print options, see our{" "}
                        <Link href="/etsy-landscape-print-sizes" className="text-accent-light hover:underline">
                          landscape print sizes reference
                        </Link>. Beach and ocean photography has its own sizing strategy &mdash; see our{" "}
                        <Link href="/etsy-coastal-wall-art-sizes" className="text-accent-light hover:underline">
                          coastal wall art sizes guide
                        </Link>.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          2:3 native
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Large format
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(245,158,11,0.1)", color: "#f59e0b" }}
                    >
                      <span className="text-lg">&#9992;</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Travel &amp; Street Photography
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Mix of gift-sized and statement prints. 8x12 and
                        12x18 sell well as gifts. 16x24 and 20x30 for
                        travelers decorating with their own adventures.
                        Include both 2:3 and 4:5 packs to cover all buyers. Also pairs well with <Link href="/etsy-map-art-print-sizes" className="text-accent-light hover:underline">map art print sizes</Link> for travel-themed bundles.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Multi-ratio
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Gift + statement sizes
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(168,162,158,0.1)", color: "#a8a29e" }}
                    >
                      <span className="text-lg">&#9960;</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Architecture &amp; Urban Photography
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Compositions are often deliberately cropped for
                        specific framing. Offer all ratio packs &mdash;
                        buyers choose based on their wall space, not the
                        original sensor ratio. Key sizes:{" "}
                        <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8x10</Link>,{" "}
                        <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16x20</Link>,{" "}
                        <Link href="/etsy-18x24-print-size" className="text-accent-light hover:underline">18x24</Link>,
                        and 13x19.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          All ratios
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          13x19 fine art
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa" }}
                    >
                      <Aperture className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Aerial &amp; Drone Photography
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Depends on your drone model. DJI Mavic shoots 3:2
                        (use the 2:3 pack). DJI Mini shoots 4:3 (use the 3:4
                        pack). Include both ratio families to cover all drone
                        photographers. Large formats (16x24, 20x30) sell
                        best &mdash; aerial shots demand wall space.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Check your drone model
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Large format
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}
                    >
                      <span className="text-lg">&#127807;</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Nature Close-Up &amp; Macro Photography
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Square crops are common for Instagram-first sellers.
                        Mid-range sizes perform best &mdash; macro details
                        shine at 8x10, 11x14, and{" "}
                        <Link href="/etsy-12x16-print-size" className="text-accent-light hover:underline">12x16</Link>.
                        Consider adding{" "}
                        <Link href="/etsy-square-print-sizes" className="text-accent-light hover:underline">
                          square formats
                        </Link>{" "}
                        for this sub-niche.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Mid-size + square
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          Detail-oriented
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(244,114,182,0.1)", color: "#f472b6" }}
                    >
                      <span className="text-lg">&#128247;</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Portrait Photography
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        8x10 is the traditional portrait frame &mdash; you
                        must include it despite the 3:2 crop. 11x14 and 16x20
                        are the next most popular portrait sizes. The 4:5
                        ratio pack is essential for this niche. For the fast-growing{" "}
                        <Link href="/etsy-pet-portrait-sizes" className="text-accent-light hover:underline">
                          pet portrait
                        </Link>{" "}
                        sub-niche, these same sizes apply. For{" "}
                        <Link href="/etsy-black-and-white-art-sizes" className="text-accent-light hover:underline">black and white photography prints</Link>,{" "}
                        prioritize 4:5 and 2:3 ratios at 300+ DPI for sharp contrast.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          4:5 essential
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                          8x10 is standard
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- H2 5: Gallery Wall Sets with Photography --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Gallery Wall Sets for Photography Prints
              </h2>
              <p className="text-foreground-60 mb-6">
                Photography gallery walls are one of the highest-revenue
                formats on Etsy. A curated set of 3-6 landscape or travel
                photographs, sized consistently, commands premium pricing.
                For detailed arrangement layouts, see our{" "}
                <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">
                  gallery wall print sizes guide
                </Link>.
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Landscape Photography Triptych
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3 x 12x18
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3 x 16x24
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      3 x 20x30
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    Three horizontal landscape photos in matching 2:3
                    frames. Zero crop from camera output. Offer the set
                    in small, medium, and large options within one listing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Travel Photography Grid
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      6 x 8x12
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      6 x 8x10
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    Six travel photos in a 2x3 grid. The 8x12 option
                    preserves the full 3:2 frame. The 8x10 option fits
                    the most common off-the-shelf frames. Include both
                    versions for maximum buyer flexibility.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">
                    Mixed-Size Statement Wall
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      1 x 20x30
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      2 x 8x12
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      2 x 4x6
                    </span>
                  </div>
                  <p className="text-foreground-60 text-sm">
                    One hero photo surrounded by smaller supporting shots.
                    All sizes from the 2:3 pack &mdash; consistent ratio
                    across the entire wall. This salon-style arrangement
                    is increasingly popular for photography collections.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Revenue tip:</strong>{" "}
                    A 3-piece photography set in 3 size options means 9
                    individual files. A 6-piece set in 3 sizes means 18
                    files. SnapToSize generates every size from each upload
                    in seconds &mdash; you spend time curating the collection,
                    not fighting export settings.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- H2 6: How SnapToSize Handles Photography --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How SnapToSize Handles Photography Print Sizes
              </h2>
              <p className="text-foreground-60 mb-6">
                The 2:3 ratio pack was practically designed for photographers.
                Your camera outputs 3:2. The pack contains 7 sizes &mdash;
                4x6, 6x9, 8x12, 10x15, 12x18, 16x24, and 20x30 &mdash;
                all at exactly that ratio. Zero cropping. Full composition
                preserved.
              </p>

              <div className="rounded-xl overflow-hidden border border-white/[0.08] mb-8">
                <img
                  src="/assets/photography-ratio-split.png"
                  alt="One photo upload generates all ratio packs — 3:4, 4:5, ISO, and Extras — via SnapToSize"
                  width={1000}
                  height={1500}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Native 3:2 match</strong>{" "}
                    &mdash; 7 sizes that preserve 100% of your original photo
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">All 5 ratio packs available</strong>{" "}
                    &mdash; add 4:5, 3:4, ISO, and Extras for complete frame coverage
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">300 DPI on every output</strong>{" "}
                    &mdash; professional print quality guaranteed
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Under 20 MB per ZIP</strong>{" "}
                    &mdash; meets Etsy&apos;s file size limit every time
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground-60 text-sm">
                    <strong className="text-foreground">Up to 70 print-ready files</strong>{" "}
                    &mdash; portrait and landscape orientations from one upload
                  </span>
                </div>
              </div>

              <p className="text-foreground-60 mb-4">
                Instead of batch-exporting from your raw processor at 12+
                different dimensions, you upload once and get every standard
                print size your buyers need. That&apos;s especially valuable
                for photographers managing dozens or hundreds of listings.
              </p>
              <p className="text-foreground-60">
                For full details on the resolution requirements for each size,
                see{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>
                . For the complete resizing workflow, see our{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  resizing guide for Etsy
                </Link>.
              </p>
            </div>

            {/* --- CTA 2: FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Resize Your Photography for Etsy in Seconds"
                stat="7 native-ratio sizes from the 2:3 pack alone — zero cropping"
                description="Upload one photo and receive every print size at 300 DPI. Your 3:2 camera output stays intact across every dimension."
                buttonText="Try SnapToSize Free"
                appUrl="https://app.snaptosize.com/app/quick-export?source=seo_photography&kind=guide"
              />
            </div>

            {/* --- H2 7: FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "What is the best print size for photography on Etsy?",
                    answer: (
                      <>
                        For photographers, the 2:3 ratio family (4x6 through 20x30) is ideal because it matches the native 3:2 sensor ratio of most DSLR and mirrorless cameras &mdash; zero cropping needed. However, you should also include 4:5 sizes (especially{" "}
                        <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8x10</Link>{" "}
                        and{" "}
                        <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16x20</Link>)
                        since those are the most common frame sizes buyers already own. Offering both ratio families maximizes your addressable market.
                      </>
                    ),
                  },
                  {
                    question:
                      "Do I need to crop my photos for every print size?",
                    answer:
                      "Not for sizes in your camera\u2019s native ratio. If you shoot on a full-frame or APS-C camera (3:2 ratio), sizes like 4\u00d76, 8\u00d712, 12\u00d718, 16\u00d724, and 20\u00d730 need no cropping at all. Sizes in other ratios (like 8\u00d710 at 4:5) will require some cropping \u2014 about 16% of the image width for 3:2-to-4:5 conversion.",
                  },
                  {
                    question:
                      "What resolution do I need for large photography prints?",
                    answer:
                      "For print-quality output at 300 DPI, a 20\u00d730 inch print requires 6000\u00d79000 pixels. Most modern cameras (24MP+) can handle this natively. For a 16\u00d724 print, you need 4800\u00d77200 pixels. Always export from your raw processor at maximum resolution before resizing for each print size.",
                  },
                  {
                    question:
                      "Should I include ISO/A-series sizes for my photography prints?",
                    answer:
                      "Yes, especially if you sell to international buyers. A4 and A3 are the most popular paper sizes outside the US. The A-series uses a 1:1.414 ratio, which is between 3:2 and 4:3, so minimal cropping is needed from either camera format. Including ISO sizes opens up the European, Australian, and Asian markets.",
                  },
                  {
                    question:
                      "What is the difference between photography print sizes and art print sizes?",
                    answer: (
                      <>
                        The key difference is the starting ratio. Cameras output in 3:2 (DSLR/mirrorless) or 4:3 (Micro Four Thirds/phones), while digital artists typically design at whatever ratio they choose &mdash; often 4:5 for the popular 8x10 size. This means photographers face a cropping challenge that artists do not. Photography sellers should lead with the 2:3 ratio pack and add 4:5 sizes as a complement. See our{" "}
                        <Link href="/2-3-vs-4-5-ratio" className="text-accent-light hover:underline">2:3 vs 4:5 ratio guide</Link>{" "}
                        for the full comparison.
                      </>
                    ),
                  },
                  {
                    question:
                      "How do I handle panoramic and ultra-wide photography for Etsy?",
                    answer:
                      "Panoramic shots (16:9 or wider) don\u2019t fit standard print sizes well. Your best options are: offer them as-is with specific panoramic dimensions, crop to 2:3 for standard sizes (losing significant top/bottom), or include them as bonus files alongside your standard ratio packs. Many sellers offer panoramics as separate listings rather than including them in multi-size bundles.",
                  },
                ]}
              />
            </div>

            {/* --- Contextual CTA --- */}
            <div className="pb-12">
              <ContextualCTA
                problem="Selling photography as digital downloads? Your buyers expect every standard frame size."
                solution="One photo upload → every print size in seconds. The 2:3 pack matches your camera's native ratio — zero cropping, full composition preserved."
                buttonText="Resize Your Photos"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-photography-print-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
