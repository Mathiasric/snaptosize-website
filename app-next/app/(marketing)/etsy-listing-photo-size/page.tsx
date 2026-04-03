import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, Camera, Image, Grid3X3, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title:
    "Etsy Listing Photo Size Guide (2026) — Dimensions, Specs & Best Practices",
  description:
    "Exact Etsy listing photo dimensions for 2026: minimum 2000x2000px, recommended 3000x3000px. Covers thumbnail cropping, all 20 photo slots, listing photo vs. print file specs, and common mistakes that cost sales.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-listing-photo-size",
  },
  openGraph: {
    title: "Etsy Listing Photo Size Guide (2026) | SnapToSize",
    description:
      "Exact Etsy listing photo dimensions, thumbnail crop rules, 20-slot strategy for digital downloads, and the critical difference between listing photos and print files.",
    url: "https://snaptosize.com/etsy-listing-photo-size",
    images: [
      {
        url: "/assets/og/etsy-listing-photo-size.png",
        width: 1200,
        height: 630,
        alt: "Etsy Listing Photo Size Guide — Dimensions & Best Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Listing Photo Size Guide (2026) — Dimensions & Specs",
    description:
      "2000x2000px minimum, 3000x3000px recommended. Thumbnail cropping rules, 20-slot strategy, and listing photo vs. print file specs.",
    images: ["/assets/og/etsy-listing-photo-size.png"],
  },
};

export default function EtsyListingPhotoSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Etsy Listing Photo Size Guide (2026) — Dimensions, Specs & Best Practices",
    description:
      "Complete guide to Etsy listing photo dimensions for 2026. Covers minimum and recommended sizes, thumbnail cropping, all 20 photo slots, listing photo vs. print file specs, and common mistakes.",
    url: "https://snaptosize.com/etsy-listing-photo-size",
    datePublished: "2026-04-03",
    dateModified: "2026-04-03",
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
        name: "How to Sell Digital Downloads on Etsy",
        item: "https://snaptosize.com/how-to-sell-digital-downloads-on-etsy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Etsy Listing Photo Size",
        item: "https://snaptosize.com/etsy-listing-photo-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best size for Etsy listing photos in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Etsy recommends at least 2000\u00d72000 pixels. For the sharpest zoom experience, upload at 3000\u00d73000px. Keep file size under 1MB for fast loading. Square format works best since Etsy crops thumbnails to square on mobile search results.",
        },
      },
      {
        "@type": "Question",
        name: "Are listing photos the same as my digital download files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Listing photos are the preview images buyers see when browsing your shop (72 DPI, 2000\u20133000px, optimized for web). Digital download files are the high-resolution print files customers receive after purchase (300 DPI, much larger pixel dimensions like 2400\u00d73000px for an 8\u00d710). Never upload your print files as listing photos.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my listing photo look blurry on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Etsy compresses uploaded images for fast web display. If your source image is at least 2000px on the shortest side, the zoom feature will work and the image will look sharp. Images under 2000px cannot zoom and appear soft. Also check that you are exporting in sRGB color profile.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio should I use for Etsy listing photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Square (1:1) is safest because Etsy crops thumbnails to square on mobile and 4:3 on desktop. If you prefer rectangular, use 4:3 landscape and keep the main subject centered to survive cropping. Avoid tall portrait-oriented listing photos \u2014 they get heavily cropped in search.",
        },
      },
      {
        "@type": "Question",
        name: "How many listing photos should I use on Etsy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use all 20 slots. Listings with more photos convert better. Use slot 1 for a hero mockup, slots 2\u20135 for lifestyle shots in different rooms, slots 6\u20138 for size variants, and slots 9\u201310 for a \u201cwhat\u2019s included\u201d graphic and size chart. Use the remaining slots for detail close-ups, printing instructions, and additional room scenes.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need different listing photos for each print size I sell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For digital downloads offering multiple sizes (like 5\u00d77 through 24\u00d736), you don\u2019t need separate listing photos for each size. Instead, use one listing photo as a \u201cwhat\u2019s included\u201d graphic showing all available sizes. Your mockup photos should show the art in its most popular size (usually 8\u00d710 or 16\u00d720) in a realistic room setting.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com/app/quick-export?source=seo_listing-photo&kind=guide";

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
            "linear-gradient(160deg, #fafbfc 0%, #f0f2f5 30%, #e8ecf1 55%, #f2f0ed 80%, #faf9f7 100%)",
        }}
      >
        {/* Subtle dot grid pattern — suggests pixel grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4a5568 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Soft blue-gray blob top-right */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #94a3b8, transparent 70%)",
          }}
        />
        {/* Warm accent blob bottom-left */}
        <div
          className="absolute bottom-[-15%] left-[-6%] w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #c4b5a0, transparent 70%)",
          }}
        />

        {/* CSS Photo Grid — right side, suggests Etsy listing thumbnails */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative" style={{ width: "360px", height: "320px" }}>
            {/* Row 1: Three thumbnail frames */}
            <div
              className="absolute rounded-md"
              style={{
                width: "100px",
                height: "100px",
                top: "0",
                left: "0",
                background: "#fff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-full h-full rounded-[4px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f1f5f9, #e8edf3)" }}
              >
                <div className="text-center">
                  <Image className="w-6 h-6 mx-auto mb-1" style={{ color: "#94a3b8" }} />
                  <span
                    className="text-[7px] font-mono tracking-wider block"
                    style={{ color: "#64748b" }}
                  >
                    2000px
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute rounded-md"
              style={{
                width: "100px",
                height: "100px",
                top: "0",
                left: "112px",
                background: "#fff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-full h-full rounded-[4px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #faf5f0, #f0ebe4)" }}
              >
                <div className="text-center">
                  <Camera className="w-6 h-6 mx-auto mb-1" style={{ color: "#a8977e" }} />
                  <span
                    className="text-[7px] font-mono tracking-wider block"
                    style={{ color: "#8a7e68" }}
                  >
                    HERO
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute rounded-md"
              style={{
                width: "100px",
                height: "100px",
                top: "0",
                left: "224px",
                background: "#fff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-full h-full rounded-[4px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f0f7f4, #e4ede8)" }}
              >
                <div className="text-center">
                  <Grid3X3 className="w-6 h-6 mx-auto mb-1" style={{ color: "#7a9e8a" }} />
                  <span
                    className="text-[7px] font-mono tracking-wider block"
                    style={{ color: "#5a7a6a" }}
                  >
                    4:3
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2: Two thumbnails + dimension annotation */}
            <div
              className="absolute rounded-md"
              style={{
                width: "100px",
                height: "100px",
                top: "112px",
                left: "0",
                background: "#fff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-full h-full rounded-[4px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f5f0fa, #ece4f4)" }}
              >
                <div className="text-center">
                  <span className="text-[7px] font-mono block" style={{ color: "#8a7ab0" }}>
                    MOCKUP
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute rounded-md"
              style={{
                width: "100px",
                height: "100px",
                top: "112px",
                left: "112px",
                background: "#fff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-full h-full rounded-[4px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f9f7f0, #f0eee4)" }}
              >
                <div className="text-center">
                  <span className="text-[7px] font-mono block" style={{ color: "#8a8060" }}>
                    SIZES
                  </span>
                </div>
              </div>
            </div>

            {/* Dimension annotation arrow */}
            <div
              className="absolute flex items-center"
              style={{
                top: "140px",
                left: "232px",
              }}
            >
              <div
                className="border-l-2 border-dashed h-12"
                style={{ borderColor: "rgba(100,116,139,0.3)" }}
              />
              <div className="ml-2">
                <span
                  className="text-[9px] font-mono block"
                  style={{ color: "#64748b" }}
                >
                  3000 &times; 3000
                </span>
                <span
                  className="text-[8px] block mt-0.5"
                  style={{ color: "#94a3b8" }}
                >
                  recommended
                </span>
              </div>
            </div>

            {/* Row 3: Smaller items */}
            <div
              className="absolute rounded-md"
              style={{
                width: "100px",
                height: "75px",
                top: "224px",
                left: "0",
                background: "#fff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-full h-full rounded-[4px] flex items-center justify-center"
                style={{ background: "#f8fafc" }}
              >
                <span className="text-[7px] font-mono" style={{ color: "#94a3b8" }}>
                  1:1 CROP
                </span>
              </div>
            </div>

            <div
              className="absolute rounded-md"
              style={{
                width: "132px",
                height: "75px",
                top: "224px",
                left: "112px",
                background: "#fff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-full h-full rounded-[4px] flex items-center justify-center"
                style={{ background: "#f8fafc" }}
              >
                <span className="text-[7px] font-mono" style={{ color: "#94a3b8" }}>
                  4:3 DESKTOP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8" style={{ background: "rgba(100,116,139,0.4)" }} />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "#64748b" }}
              >
                Seller Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-1.5"
                style={{ color: "#1e293b" }}
              >
                Etsy Listing Photo Size Guide
              </span>
              <span
                className="block text-xl md:text-2xl lg:text-3xl font-semibold"
                style={{ color: "#475569" }}
              >
                Exact dimensions, thumbnail cropping &amp;&nbsp;all&nbsp;20&nbsp;photo&nbsp;slots
              </span>
            </h1>
            <p className="text-base mb-5 max-w-lg" style={{ color: "#64748b" }}>
              The definitive reference for Etsy listing image specs in 2026.
              Minimum pixels, recommended sizes, how Etsy crops your thumbnails,
              and the critical difference between listing photos and print&nbsp;files.
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-8">
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  borderColor: "rgba(100,116,139,0.25)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#64748b" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "#334155" }}>
                  2026 specs verified
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  borderColor: "rgba(100,116,139,0.25)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#64748b" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "#334155" }}>
                  All 20 photo slots covered
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-md backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  borderColor: "rgba(100,116,139,0.25)",
                }}
              >
                <Check className="h-3 w-3 flex-shrink-0" style={{ color: "#64748b" }} />
                <span className="text-[11px] sm:text-xs font-medium" style={{ color: "#334155" }}>
                  Listing photo vs. print file explained
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
            <QuickAnswer question="What size should Etsy listing photos be?">
              <strong>Minimum 2000&times;2000 pixels</strong>, recommended
              3000&times;3000px for the sharpest zoom. Upload in JPG or PNG,
              keep files under 1&nbsp;MB, and use square format to avoid
              thumbnail cropping on mobile.
            </QuickAnswer>

            {/* --- H2 1: What Size Should Etsy Listing Photos Be? --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Size Should Etsy Listing Photos Be?
              </h2>
              <p className="text-foreground-60 mb-4">
                Etsy requires listing photos to be at least{" "}
                <strong className="text-foreground">2000&times;2000 pixels</strong>{" "}
                on the shortest side for the zoom feature to work. Images below
                this threshold display at a reduced size and cannot be zoomed,
                which directly hurts buyer confidence.
              </p>
              <p className="text-foreground-60 mb-4">
                The recommended size is{" "}
                <strong className="text-foreground">3000&times;3000px</strong>.
                Some sellers report that 2400&times;2400px hits a sweet spot for
                sharpness without slow uploads. The absolute minimum for your
                first image is 635px &mdash; below that, Etsy may demote the
                listing in search results.
              </p>
              <p className="text-foreground-60 mb-6">
                DPI does not matter for listing photos. Etsy displays them on
                screens at 72&nbsp;DPI regardless of what you set in your image
                editor. Only total pixel count matters for web display. This is
                fundamentally different from{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  print file resolution
                </Link>
                , where 300&nbsp;DPI is the professional standard.
              </p>

              <Card className="p-5 md:p-6">
                <h3 className="font-semibold mb-4 text-lg">
                  Etsy Listing Photo Specs at a Glance
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-foreground/10">
                        <th className="text-left py-2 pr-4 font-semibold">Spec</th>
                        <th className="text-left py-2 font-semibold">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-60">
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Minimum size</td>
                        <td className="py-2.5">2000&times;2000px (shortest side)</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Recommended size</td>
                        <td className="py-2.5">3000&times;3000px</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">File formats</td>
                        <td className="py-2.5">JPG, PNG, GIF, SVG, HEIC</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Max file size</td>
                        <td className="py-2.5">Under 1&nbsp;MB for reliable upload (larger may fail)</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Photos per listing</td>
                        <td className="py-2.5">Up to 20</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Color profile</td>
                        <td className="py-2.5">sRGB (Etsy converts automatically)</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">DPI</td>
                        <td className="py-2.5">Irrelevant &mdash; only pixels matter for web</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-medium text-foreground">Listing video</td>
                        <td className="py-2.5">5&ndash;15 seconds, up to 100&nbsp;MB, no audio</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
              <p className="text-sm text-foreground-60 mt-3">
                Note: PNG files with transparency render as black backgrounds on Etsy.
                Always flatten your images before uploading.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-listing-photo-mockup.jpg" alt="Etsy seller at a laptop showing the seller dashboard with product listing thumbnails, with framed photography prints on the wall behind — a mountain landscape and a flower close-up" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- H2 2: Listing Photo vs. Print File --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Listing Photo vs. Print File: The #1 Confusion
              </h2>
              <p className="text-foreground-60 mb-4">
                This is where most digital download sellers trip up. Your listing
                photos and your print files are completely different things that
                serve completely different purposes.
              </p>

              <Card className="p-5 md:p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-foreground/10">
                        <th className="text-left py-2 pr-4 font-semibold w-1/3"></th>
                        <th className="text-left py-2 pr-4 font-semibold">Listing Photo</th>
                        <th className="text-left py-2 font-semibold">Print File</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-60">
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Purpose</td>
                        <td className="py-2.5 pr-4">Buyer preview on Etsy</td>
                        <td className="py-2.5">Customer downloads to print</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">DPI</td>
                        <td className="py-2.5 pr-4">72 DPI (screen)</td>
                        <td className="py-2.5">300 DPI (print quality)</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Typical size</td>
                        <td className="py-2.5 pr-4">2000&ndash;3000px</td>
                        <td className="py-2.5">2400&ndash;10800px</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2.5 pr-4 font-medium text-foreground">Example (8&times;10)</td>
                        <td className="py-2.5 pr-4">~2000&times;2500px mockup</td>
                        <td className="py-2.5">2400&times;3000px at 300 DPI</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-medium text-foreground">Who sees it</td>
                        <td className="py-2.5 pr-4">Everyone browsing Etsy</td>
                        <td className="py-2.5">Only paying customers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                Uploading your full-resolution 300&nbsp;DPI print file as a
                listing photo is a common mistake. It wastes bandwidth (buyers
                wait longer for images to load), risks art theft (high-res files
                can be scraped), and does not improve display quality &mdash;
                Etsy compresses everything to web resolution anyway.
              </p>
              <p className="text-foreground-60 mb-4">
                Use mockup images for your listing photos. Show the art in a
                frame, on a wall, in a room setting. An{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10 print
                </Link>{" "}
                needs 2400&times;3000 pixels at 300&nbsp;DPI as a print file
                &mdash; that is a completely different spec from a 2000&times;2000px
                listing photo.
              </p>
              <p className="text-foreground-60">
                For a deeper dive into print file specs, see our guide on the{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1: Bridge CTA — listing photos sorted, now handle print files --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Listing Photos Sorted. What About Your Print Files?
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Your listing photos bring buyers in. Your print files keep them
                  happy. SnapToSize turns one upload into up to 70 print-ready
                  files at 300&nbsp;DPI &mdash; all 5 ratio packs, portrait and
                  landscape, organized in ZIPs.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate Print Files Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- H2 3: 20 Photo Slots Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Use Your Listing Photo Slots
              </h2>
              <p className="text-foreground-60 mb-6">
                As of August 2025, Etsy gives you up to 20 photo slots per
                listing (plus one optional video). Sellers who fill more slots
                consistently outperform those who use 3&ndash;5. Here is a
                slot-by-slot strategy for the first 10 &mdash; the most
                important slots for digital download sellers.
              </p>

              <div className="space-y-4">
                <Card className="p-4 md:p-5">
                  <div className="flex gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#f0f4f8", color: "#475569" }}
                    >
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hero Mockup (Thumbnail Image)</h4>
                      <p className="text-sm text-foreground-60">
                        Your most important image. This becomes the thumbnail in
                        search results. Use a room-scene mockup showing your art
                        in a frame. Square or 4:3 format prevents cropping.
                        Center the art &mdash; Etsy crops from the edges.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 md:p-5">
                  <div className="flex gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#f0f4f8", color: "#475569" }}
                    >
                      2&ndash;4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Lifestyle Mockups in Different Rooms</h4>
                      <p className="text-sm text-foreground-60">
                        Show the art above a sofa, in a bedroom, in a home
                        office. Different settings help buyers visualize the
                        piece in their own space. Vary the frame styles and
                        wall colors.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 md:p-5">
                  <div className="flex gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#f0f4f8", color: "#475569" }}
                    >
                      5&ndash;7
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Size Variants &amp; Detail Shots</h4>
                      <p className="text-sm text-foreground-60">
                        Show the art at different print sizes (e.g.,{" "}
                        <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">5&times;7</Link> on
                        a desk vs.{" "}
                        <Link href="/etsy-24x36-print-size" className="text-accent-light hover:underline">24&times;36</Link> as a statement piece). Include at
                        least one close-up detail shot so buyers can see
                        texture and quality.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 md:p-5">
                  <div className="flex gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#f0f4f8", color: "#475569" }}
                    >
                      8&ndash;9
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">&ldquo;What&apos;s Included&rdquo; Graphic</h4>
                      <p className="text-sm text-foreground-60">
                        A flat-lay graphic showing all sizes the buyer will
                        receive. List each file with dimensions. This reduces
                        &ldquo;what do I get?&rdquo; questions and increases
                        perceived value. See{" "}
                        <Link
                          href="/etsy-print-sizes"
                          className="text-accent-light hover:underline"
                        >
                          all Etsy print sizes
                        </Link>{" "}
                        to decide which sizes to include.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 md:p-5">
                  <div className="flex gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#f0f4f8", color: "#475569" }}
                    >
                      10
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Size Chart or Printing Instructions</h4>
                      <p className="text-sm text-foreground-60">
                        A simple graphic explaining how to download, which file
                        to use for which size, and recommended print services.
                        This prevents confusion after purchase and reduces
                        refund requests.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- H2 4: How Etsy Crops Your Photos --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How Etsy Crops Your Photos (Thumbnails &amp; Search)
              </h2>
              <p className="text-foreground-60 mb-4">
                Etsy does not display your listing photos exactly as you upload
                them. In search results, your first image gets cropped
                differently depending on the device.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                      style={{ background: "#f0f4f8", color: "#475569" }}
                    >
                      M
                    </span>
                    Mobile Search
                  </h4>
                  <p className="text-sm text-foreground-60 mb-2">
                    Thumbnails are cropped to <strong className="text-foreground">1:1 (square)</strong>.
                    A rectangular image loses the top and bottom (or sides)
                    entirely.
                  </p>
                  <p className="text-sm text-foreground-60">
                    Center your subject. Do not place important elements near
                    edges.
                  </p>
                </Card>

                <Card className="p-5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                      style={{ background: "#f0f4f8", color: "#475569" }}
                    >
                      D
                    </span>
                    Desktop Search
                  </h4>
                  <p className="text-sm text-foreground-60 mb-2">
                    Thumbnails historically cropped to <strong className="text-foreground">4:3 (landscape)</strong>,
                    but Etsy has been moving toward square (1:1) crops on desktop
                    as well. Either way, portrait images get cropped.
                  </p>
                  <p className="text-sm text-foreground-60">
                    If your art is vertical, use a square mockup with the art
                    centered and white space around it.
                  </p>
                </Card>
              </div>

              <div
                className="rounded-lg p-4 flex gap-3"
                style={{ background: "#fef9ee", border: "1px solid #f5e6c8" }}
              >
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#c4960a" }} />
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "#92710a" }}>
                    Avoid tall portrait listing photos
                  </p>
                  <p className="text-sm" style={{ color: "#a5850e" }}>
                    Even though many printable artworks are portrait-oriented,
                    your listing photos should be square or slightly landscape.
                    The art inside the mockup can be portrait &mdash; but the
                    mockup image itself should be square to survive both mobile
                    and desktop cropping.
                  </p>
                </div>
              </div>
            </div>

            {/* --- H2 5: Common Listing Photo Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Listing Photo Mistakes That Cost Sales
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#fef2f2" }}>
                    <span className="text-xs" style={{ color: "#dc2626" }}>&times;</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Uploading raw print files as listing images</h4>
                    <p className="text-sm text-foreground-60">
                      Your 300&nbsp;DPI print files are for customers, not for
                      Etsy&apos;s display. Use mockups instead. This protects
                      your work and loads faster.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#fef2f2" }}>
                    <span className="text-xs" style={{ color: "#dc2626" }}>&times;</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Images under 2000px</h4>
                    <p className="text-sm text-foreground-60">
                      Zoom does not work on small images. Buyers can&apos;t
                      inspect details, which erodes trust and reduces conversions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#fef2f2" }}>
                    <span className="text-xs" style={{ color: "#dc2626" }}>&times;</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No mockup images</h4>
                    <p className="text-sm text-foreground-60">
                      A flat artwork file on a white background does not sell.
                      Buyers need to see the art in context &mdash; framed, on a
                      wall, in a real room.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#fef2f2" }}>
                    <span className="text-xs" style={{ color: "#dc2626" }}>&times;</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ignoring mobile thumbnail crop</h4>
                    <p className="text-sm text-foreground-60">
                      Over 60% of Etsy traffic is mobile. If your hero image is
                      landscape and the key visual is at the top, mobile&apos;s
                      square crop may cut it off entirely.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#fef2f2" }}>
                    <span className="text-xs" style={{ color: "#dc2626" }}>&times;</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No &ldquo;what&apos;s included&rdquo; graphic</h4>
                    <p className="text-sm text-foreground-60">
                      Digital download buyers want to know exactly{" "}
                      <Link href="/what-files-to-include-etsy-digital-download" className="text-accent-light hover:underline">
                        what files are included
                      </Link>
                      . A graphic showing all included sizes reduces
                      pre-sale questions and post-sale refund requests.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#fef2f2" }}>
                    <span className="text-xs" style={{ color: "#dc2626" }}>&times;</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Inconsistent style across listings</h4>
                    <p className="text-sm text-foreground-60">
                      When a buyer visits your shop, all listing thumbnails are
                      visible at once. Mismatched mockup styles, lighting, and
                      backgrounds look unprofessional and reduce shop-wide
                      conversion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- H2 6: Creating Listing Photos for Digital Downloads --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create Listing Photos for Digital Downloads
              </h2>
              <p className="text-foreground-60 mb-4">
                For{" "}
                <Link href="/how-to-sell-digital-downloads-on-etsy" className="text-accent-light hover:underline">
                  digital download sellers
                </Link>
                , listing photos are mockup images
                &mdash; not the actual files buyers receive. The workflow is
                straightforward.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#f0f4f8", color: "#475569" }}
                  >
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pick a mockup template</h4>
                    <p className="text-sm text-foreground-60">
                      Use room-scene mockups from Creative Market, Envato, or
                      free options in Canva and similar tools. Choose scenes that
                      match your art style.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#f0f4f8", color: "#475569" }}
                  >
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Insert your art and export</h4>
                    <p className="text-sm text-foreground-60">
                      Place your artwork into the mockup&apos;s smart object or
                      frame. Export at 2000&ndash;3000px square, JPG format,
                      sRGB color profile. Keep the file under 1&nbsp;MB.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#f0f4f8", color: "#475569" }}
                  >
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create a &ldquo;what&apos;s included&rdquo; graphic</h4>
                    <p className="text-sm text-foreground-60">
                      Show thumbnails of every size the buyer receives, with
                      dimensions labeled (see{" "}
                      <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
                        how many sizes to offer
                      </Link>). This is one of the highest-converting
                      listing images for digital downloads. For guidance on which
                      sizes to include, see our{" "}
                      <Link
                        href="/how-to-package-digital-wall-art-for-etsy"
                        className="text-accent-light hover:underline"
                      >
                        guide to packaging digital wall art for Etsy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#f0f4f8", color: "#475569" }}
                  >
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fill all 20 slots</h4>
                    <p className="text-sm text-foreground-60">
                      Follow the slot strategy above. Vary your room scenes,
                      show different sizes in context, and end with your size
                      chart and printing instructions.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-foreground-60">
                The listing photos are the marketing side. The print files are
                the product side. For the complete print file workflow &mdash;
                including{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to resize images for Etsy
                </Link>{" "}
                at the correct DPI and pixel dimensions &mdash; that is where
                tools like SnapToSize come in.
              </p>
            </div>

            {/* --- CTA 2: FinalCTA --- */}
            <div>
              <FinalCTA
                heading="One Upload, Every Print Size at 300 DPI"
                stat="Up to 70 print-ready files across 5 ratio packs"
                description="Your listing photos sell the dream. Your print files deliver the product. SnapToSize handles the print file side — one upload, every size, organized in ZIPs."
                buttonText="Try SnapToSize Free"
                appUrl={appUrl}
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
                      "What is the best size for Etsy listing photos in 2026?",
                    answer:
                      "Etsy recommends at least 2000\u00d72000 pixels. For the sharpest zoom experience, upload at 3000\u00d73000px. Keep file size under 1\u00a0MB for fast loading. Square format works best since Etsy crops thumbnails to square on mobile search results.",
                  },
                  {
                    question:
                      "Are listing photos the same as my digital download files?",
                    answer:
                      "No. Listing photos are the preview images buyers see when browsing your shop (72 DPI, 2000\u20133000px, optimized for web). Digital download files are the high-resolution print files customers receive after purchase (300 DPI, much larger pixel dimensions like 2400\u00d73000px for an 8\u00d710). Never upload your print files as listing photos.",
                  },
                  {
                    question:
                      "Why does my listing photo look blurry on Etsy?",
                    answer:
                      "Etsy compresses uploaded images for fast web display. If your source image is at least 2000px on the shortest side, the zoom feature will work and the image will look sharp. Images under 2000px cannot zoom and appear soft. Also check that you\u2019re exporting in sRGB color profile.",
                  },
                  {
                    question:
                      "What aspect ratio should I use for Etsy listing photos?",
                    answer:
                      "Square (1:1) is safest because Etsy crops thumbnails to square on mobile and 4:3 on desktop. If you prefer rectangular, use 4:3 landscape and keep the main subject centered to survive cropping. Avoid tall portrait-oriented listing photos \u2014 they get heavily cropped in search.",
                  },
                  {
                    question:
                      "How many listing photos should I use on Etsy?",
                    answer:
                      "Use all 20 slots. Listings with more photos convert better. Use slot 1 for a hero mockup, slots 2\u20135 for lifestyle shots in different rooms, slots 6\u20138 for size variants, and slots 9\u201310 for a \u201cwhat\u2019s included\u201d graphic and size chart. Use the remaining slots for detail close-ups, printing instructions, and additional room scenes.",
                  },
                  {
                    question:
                      "Do I need different listing photos for each print size I sell?",
                    answer:
                      "For digital downloads offering multiple sizes (like 5\u00d77 through 24\u00d736), you don\u2019t need separate listing photos for each size. Instead, use one listing photo as a \u201cwhat\u2019s included\u201d graphic showing all available sizes. Your mockup photos should show the art in its most popular size (usually 8\u00d710 or 16\u00d720) in a realistic room setting.",
                  },
                ]}
              />
            </div>

            {/* --- CTA 3: ContextualCTA after FAQ --- */}
            <div className="pb-12">
              <ContextualCTA
                problem="Spending hours manually resizing print files for every listing?"
                solution="Upload once and download every standard print size at 300 DPI. All 5 ratio packs, portrait and landscape, organized and ready for Etsy."
                buttonText="Generate All Print Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-listing-photo-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
