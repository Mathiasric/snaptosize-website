import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "11×14 Print Size for Etsy — Pixels, DPI & Frame Guide",
  description:
    "11×14 print specs for Etsy: 3300×4200 px at 300 DPI, 11:14 ratio (not 4:5), 16×20 frame matting, and file setup for digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-11x14-print-size" },
  openGraph: {
    title:
      "11×14 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 11×14 print guide for Etsy sellers. 3300×4200 pixels at 300 DPI, 11:14 ratio (not 4:5), and 16×20 frame matting tips.",
    url: "https://snaptosize.com/etsy-11x14-print-size",
    images: [
      {
        url: "/assets/og/etsy-11x14-print-size.png",
        width: 1200,
        height: 630,
        alt: "11×14 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "11×14 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 11×14 print guide for Etsy sellers. 3300×4200 pixels at 300 DPI, 11:14 ratio, and 16×20 frame matting.",
    images: ["/assets/og/etsy-11x14-print-size.png"],
  },
};

export default function Etsy11x14PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "11×14 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 11×14 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 11:14 aspect ratio specs, 16×20 frame matting, and file requirements.",
    url: "https://snaptosize.com/etsy-11x14-print-size",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
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
        name: "11×14 Print Size",
        item: "https://snaptosize.com/etsy-11x14-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for an 11×14 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3300×4200 pixels exactly. Multiply each dimension by 300: 11×300=3300, 14×300=4200. Typical JPEG file size: 4-7 MB — well under Etsy's 20 MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 11×14?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "11:14 (0.786 decimal). This is NOT 4:5 (0.800). A 4:5 image resized to 11×14 requires minor cropping — about 1.8% off the width.",
        },
      },
      {
        "@type": "Question",
        name: "Does 11×14 fit a standard frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — 11×14 is one of the most common US frame sizes. Available at IKEA, Target, Walmart, Michaels, and Amazon. It's also the standard mat opening for 16×20 frames.",
        },
      },
      {
        "@type": "Question",
        name: "Should I include 11×14 in my Etsy printable listing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It's one of the top 5 most-requested print sizes. Listings that include 11×14 alongside 8×10 and 16×20 convert better because buyers have the exact size they need.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use my 8×10 file for 11×14?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not directly. 8×10 is 4:5 ratio; 11×14 is 11:14. Stretching distorts the image. You need either a separate 11:14 export or accept slight cropping from a 4:5 source.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_11x14&kind=guide";

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
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />

        {/* 11:14 Frame blueprint — right side */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer frame — 11:14 proportions (220px × 280px) */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "220px", height: "280px" }}
          >
            {/* Inner frame with accent border */}
            <div className="absolute inset-3 border border-purple-500/20 rounded-sm" />

            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-purple-400/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-purple-400/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-purple-400/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-purple-400/30" />

            {/* Dimension label — width */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap">
                11 in &middot; 3300 px
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Dimension label — height */}
            <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
              <div className="w-px flex-1 bg-white/10" />
              <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                14 in &middot; 4200 px
              </span>
              <div className="w-px flex-1 bg-white/10" />
            </div>

            {/* Ratio badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-3 py-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-mono text-white/20 tracking-[0.2em]">
                  11 : 14
                </span>
              </div>
            </div>

            {/* Tick marks — top edge (12 ticks for 11 inches) */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-3">
              {[...Array(12)].map((_, i) => (
                <div key={`tt-${i}`} className="w-px h-1.5 bg-white/[0.06]" />
              ))}
            </div>

            {/* Tick marks — left edge (15 ticks for 14 inches) */}
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-3">
              {[...Array(15)].map((_, i) => (
                <div key={`tl-${i}`} className="h-px w-1.5 bg-white/[0.06]" />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-purple-500/40" />
              <span className="text-xs font-mono tracking-[0.15em] text-purple-300/60 uppercase">
                Print Size Reference
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                11&times;14 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the size buyers
                expect but sellers forget
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              3300&times;4200 pixels. 11:14 aspect ratio &mdash; not 4:5.
              Standard mat opening for 16&times;20 frames. Here&apos;s
              everything you need to set up 11&times;14 digital downloads that
              sell.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, get 11&times;14 + every other Etsy
                size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  3300&times;4200 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  11:14 aspect ratio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Standard US frame size
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
            {/* --- Quick Answer --- */}
            <QuickAnswer question="What pixel dimensions do I need for 11×14 prints at 300 DPI?">
              <strong>3300 × 4200 pixels</strong> for portrait, <strong>4200 × 3300</strong> for landscape.
              11×14 is a standard photo mat size — widely available at every frame store.
              Part of the Extras pack.
            </QuickAnswer>

            {/* --- Section 1: Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                11&times;14 at 300 DPI &mdash; Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">11 &times; 14 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">3300 &times; 4200 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">11:14 (0.786) &mdash; not 4:5</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Megapixels</span>
                    <span className="font-semibold">13.86 MP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Color Profile</span>
                    <span className="font-semibold">sRGB</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                The calculation: multiply each dimension in inches by 300.
                11&nbsp;&times;&nbsp;300&nbsp;=&nbsp;3300 pixels wide,
                14&nbsp;&times;&nbsp;300&nbsp;=&nbsp;4200 pixels tall. That
                gives you 13.86 megapixels &mdash; any modern camera or design
                tool handles this comfortably.
              </p>
              <p className="text-foreground-60 mb-4">
                As a JPG (also called JPEG), the file typically weighs 4&ndash;7&nbsp;MB
                &mdash; well under Etsy&apos;s 20&nbsp;MB limit, even when
                bundled with other sizes in a ZIP.
              </p>
              <p className="text-foreground-60">
                The critical detail most guides miss: 11:14 is{" "}
                <strong>not</strong> the same ratio as 4:5. The decimal ratio is
                0.786 vs 0.800. That 1.8% difference means you cannot simply
                scale an{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10 file
                </Link>{" "}
                to 11&times;14 without cropping or letterboxing. For the full
                DPI explanation, see the{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  best resolution for Etsy printables
                </Link>{" "}
                guide.
              </p>

              {/* Size comparison diagram */}
              <div className="mt-8 rounded-xl overflow-hidden border border-white/[0.06]">
                <Image
                  src="/assets/visuals/etsy-11x14-size-comparison.png"
                  alt="11x14 print size comparison diagram showing 8x10, 8.5x11, 11x14, 12x16, and A3 at scale"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* --- Section 2: Why Essential --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 11&times;14 Is Essential for Etsy Sellers
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Universally Available Frame Size
                  </h3>
                  <p className="text-foreground-60">
                    11&times;14 frames are stocked at IKEA, Target, Walmart,
                    Michaels, and Amazon. Buyers don&apos;t need to hunt for
                    custom frames or pay premium prices. Low friction means
                    higher conversion for your listings.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The Standard Mat Opening for 16&times;20 Frames
                  </h3>
                  <p className="text-foreground-60">
                    This is the detail that separates professional sellers from
                    the rest. An 11&times;14 print matted inside a{" "}
                    <Link
                      href="/etsy-16x20-print-size"
                      className="text-accent-light hover:underline"
                    >
                      16&times;20 frame
                    </Link>{" "}
                    creates the gallery-wall look buyers pay premium for. The
                    white mat border adds perceived value and a professional
                    finish.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    The &ldquo;Missing Middle&rdquo; Size
                  </h3>
                  <p className="text-foreground-60">
                    11&times;14 bridges the gap between the common 8&times;10
                    and the large 16&times;20. Buyers who want something bigger
                    than a desk frame but not a statement piece choose
                    11&times;14 for bedrooms, offices, and hallways. Sellers who
                    skip this size lose an entire buyer segment.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Section 3: Aspect Ratio --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                11&times;14 Aspect Ratio &mdash; Not Exactly 4:5
              </h2>

              <Card className="p-6 md:p-8 mb-8 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      This trips up Etsy sellers constantly
                    </h3>
                    <p className="text-foreground-60 text-sm">
                      11:14 = 0.786 &nbsp;|&nbsp; 4:5 = 0.800. That 1.8%
                      difference means a 4:5 image resized to 11&times;14 will
                      either crop ~1.8% off the width or add thin letterbox
                      bars. It&apos;s subtle but visible &mdash; especially with
                      centered text or geometric designs.
                    </p>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                Most sellers design at 4:5 (for{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>
                , 16&times;20, etc.) and assume 11&times;14 is the same. It
                isn&apos;t. The 11:14 ratio is slightly narrower than 4:5. When
                you force-fit a 4:5 design into 11:14, one of two things
                happens:
              </p>

              <ul className="space-y-2 text-foreground-60 mb-6 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light font-bold mt-0.5">&bull;</span>
                  <span>
                    <strong>Cropping:</strong> ~1.8% sliced off the left and
                    right edges. Fine for abstract art, problematic for
                    <Link href="/etsy-quote-wall-art-sizes" className="text-accent-light hover:underline">typography</Link> or bordered designs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light font-bold mt-0.5">&bull;</span>
                  <span>
                    <strong>Letterboxing:</strong> Thin white bars added to the
                    top and bottom. Looks unfinished when printed.
                  </span>
                </li>
              </ul>

              <p className="text-foreground-60 mb-4">
                The professional solution: create a separate 11:14 source file,
                or use a tool that handles ratio-aware resizing automatically.
                For a deeper dive on all Etsy ratios, see the{" "}
                <Link
                  href="/etsy-print-ratios"
                  className="text-accent-light hover:underline"
                >
                  Etsy print ratios guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Ratio Math
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. SnapToSize generates pixel-perfect
                  11&times;14 files (and every other Etsy size) at
                  300&nbsp;DPI. No cropping guesswork.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 4: Companion Sizes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Sizes That Pair With 11&times;14
              </h2>
              <p className="text-foreground-60 mb-6">
                Buyers don&apos;t purchase one size in isolation. They plan
                gallery walls, matching sets, and room arrangements. The
                strongest Etsy listings bundle 11&times;14 with complementary
                sizes that cover the most common frame options.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  The Seller Trifecta: 8&times;10 + 11&times;14 + 16&times;20
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      <Link
                        href="/etsy-8x10-print-size"
                        className="text-accent-light hover:underline"
                      >
                        8&times;10
                      </Link>
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Small &mdash; desk, shelf, nightstand
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 bg-accent/5">
                    <span className="font-semibold">
                      11&times;14{" "}
                      <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                        Popular
                      </span>
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Medium &mdash; bedroom, office, hallway
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      <Link
                        href="/etsy-16x20-print-size"
                        className="text-accent-light hover:underline"
                      >
                        16&times;20
                      </Link>
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Large &mdash; living room, gallery wall focal point
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                For gallery wall sets, buyers combine 11&times;14 with smaller{" "}
                <Link
                  href="/etsy-5x7-print-size"
                  className="text-accent-light hover:underline"
                >
                  5&times;7
                </Link>{" "}
                and 8&times;10 prints in a curated arrangement. Including all
                three sizes in one listing makes your download pack the obvious
                choice over competitors offering single sizes.
              </p>
              <p className="text-foreground-60 mb-4">
                Note the ratio grouping: 8&times;10 and 16&times;20 share the
                4:5 ratio, while 11&times;14 sits in its own 11:14 group. This
                means you need at least two source compositions &mdash; one for
                4:5 and one for 11:14. For guidance on how many sizes to offer
                per listing, see{" "}
                <Link
                  href="/how-many-sizes-etsy-printable"
                  className="text-accent-light hover:underline"
                >
                  how many sizes to include in an Etsy printable
                </Link>
                .
              </p>
              <p className="text-foreground-60 mb-4">
                Sellers expanding to larger formats often add{" "}
                <Link
                  href="/etsy-18x24-print-size"
                  className="text-accent-light hover:underline"
                >
                  18&times;24
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-24x36-print-size"
                  className="text-accent-light hover:underline"
                >
                  24&times;36
                </Link>{" "}
                for buyers who want large-scale statement pieces. Covering small
                through large sizes in one listing maximizes perceived value.
              </p>
              <p className="text-foreground-60">
                For a broader overview of what files buyers expect, check{" "}
                <Link
                  href="/what-files-to-include-etsy-digital-download"
                  className="text-accent-light hover:underline"
                >
                  what files to include in an Etsy digital download
                </Link>
                . For the full list of all Etsy print sizes and their pixel
                dimensions, see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- Section 5: File Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Format, Color Profile &amp; Naming
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    JPG / JPEG at 300 DPI
                  </h3>
                  <p className="text-foreground-60">
                    JPG (also called JPEG) is the standard for Etsy print files. At
                    11&times;14, a JPEG typically weighs 4&ndash;7&nbsp;MB &mdash;
                    well under Etsy&apos;s 20&nbsp;MB limit, even when bundled
                    with other sizes. PNG files are typically 3&ndash;5&times;
                    larger with no visible print quality benefit.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    sRGB Color Profile
                  </h3>
                  <p className="text-foreground-60">
                    Always embed sRGB IEC61966-2.1. Most home printers and
                    online print services expect it. Files in Adobe RGB or
                    ProPhoto RGB will shift colors when printed &mdash; reds
                    go orange, blues go purple. In Photoshop: Edit &rarr;
                    Convert to Profile &rarr; sRGB.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional File Naming
                  </h3>
                  <p className="text-foreground-60">
                    Use clear names like{" "}
                    <code className="text-accent-light">
                      artwork_11x14_300dpi.jpg
                    </code>
                    . Buyers should find the right file instantly in their
                    downloads folder. Avoid generic names like
                    &ldquo;print1.jpg&rdquo; or version numbers that mean
                    nothing to customers.
                  </p>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Staying Under Etsy&apos;s 20 MB Limit
                </h3>
                <ul className="space-y-2 text-foreground-60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Use JPEG, not PNG &mdash; 3&ndash;5&times; smaller files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Flatten all layers before export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Group by ratio &mdash; 11:14 files in one ZIP, 4:5 files
                      in another
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Or use SnapToSize &mdash; auto-optimizes and organizes
                      every file
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* --- Section 6: Framing & Matting --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Matting Options for 11&times;14
              </h2>
              <p className="text-foreground-60 mb-6">
                11&times;14 is one of the most versatile frame sizes. It works
                as a standalone framed print or &mdash; more commonly &mdash;
                as the matted centerpiece of a 16&times;20 frame. Mentioning
                specific frame options in your listing description reduces buyer
                hesitation and increases perceived value.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">11&times;14 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Direct fit, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 bg-accent/5">
                    <span className="font-semibold">
                      16&times;20 frame + 11&times;14 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Most popular &mdash; gallery look
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      14&times;18 frame + 11&times;14 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Narrow mat, compact gallery feel
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Where Buyers Find 11&times;14 Frames
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">IKEA</span>
                    <span className="text-foreground-60 text-sm">
                      RIBBA, FISKBO
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">Target</span>
                    <span className="text-foreground-60 text-sm">
                      Room Essentials, Threshold
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">Michaels</span>
                    <span className="text-foreground-60 text-sm">
                      Studio D&eacute;cor, custom framing
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">Walmart</span>
                    <span className="text-foreground-60 text-sm">
                      Mainstays, Better Homes &amp; Gardens
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Amazon</span>
                    <span className="text-foreground-60 text-sm">
                      Dozens of options under $15
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Listing tip:
                    </strong>{" "}
                    Add &ldquo;Fits any standard 11&times;14 frame (IKEA RIBBA,
                    Target, Amazon). For a gallery look, mat in a 16&times;20
                    frame.&rdquo; to your Etsy description. This single line
                    reduces buyer questions and builds confidence.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Section 7: Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 11&times;14 Files
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Assuming 11&times;14 is the same ratio as 8&times;10
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        8&times;10 is 4:5 (0.800). 11&times;14 is 11:14
                        (0.786). Resizing a 4:5 file to fit 11&times;14 crops
                        about 1.8% off the edges. For text-heavy or bordered
                        designs, this cuts into your composition. Always create
                        a separate 11:14 export.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Exporting at 72 DPI instead of 300 DPI
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        72 DPI is screen resolution. An 11&times;14 at 72 DPI
                        is only 792&times;1008 pixels &mdash; prints will be
                        pixelated and blurry. The file must be 3300&times;4200
                        pixels. Always verify pixel dimensions before uploading.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Not including 11&times;14 at all
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        11&times;14 is one of the top 5 most-requested print
                        sizes. 80% of US university diplomas are 11&times;14,
                        so most households already own frames this size. Sellers
                        who skip it lose buyers to competitors who include it.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Wrong color profile
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Files in Adobe RGB or ProPhoto RGB display incorrect
                        colors when printed &mdash; reds appear orange, blues
                        shift purple. Convert to sRGB before exporting. Every
                        time.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Never Export the Wrong Dimensions
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Get 3300&times;4200&nbsp;px files (and every other Etsy size)
                  in seconds. No manual math required.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Try SnapToSize Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Section 8: How to Create Without Manual Resizing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Create 11&times;14 Without Manual Resizing
              </h2>

              <p className="text-foreground-60 mb-4">
                The manual workflow is painful: calculate 3300&times;4200,
                remember that 11:14 isn&apos;t 4:5, export separately from your
                4:5 sizes, manage two ratio groups, name every file, verify
                pixel dimensions, then ZIP everything under 20&nbsp;MB.
              </p>
              <p className="text-foreground-60 mb-4">
                Multiply that by every listing and every new artwork. Most
                sellers either skip 11&times;14 entirely (losing buyers) or
                force-fit their 4:5 files (delivering cropped artwork).
              </p>
              <p className="text-foreground-60 mb-6">
                SnapToSize handles all of this from one upload. It detects your
                source ratio, generates correct 11&times;14 files at
                3300&times;4200&nbsp;px, exports every other Etsy size at
                300&nbsp;DPI, names files professionally, and keeps everything
                under the file limit. For the full resizing workflow, see{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to resize images for Etsy
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Add 11×14 to Every Listing"
                stat="70+ print-ready files from a single upload"
                description="Upload once, get 11×14 plus all popular Etsy sizes at 300 DPI. Production-ready files in seconds, not hours. See pricing for Pro features."
                buttonText="Start Free — Generate Sizes Now"
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
                      "What pixel dimensions do I need for an 11×14 print at 300 DPI?",
                    answer:
                      "3300×4200 pixels exactly. Multiply each dimension by 300: 11×300 = 3300 pixels wide, 14×300 = 4200 pixels tall. Typical JPEG file size: 4-7 MB — well under Etsy's 20 MB limit.",
                  },
                  {
                    question: "What aspect ratio is 11×14?",
                    answer:
                      "11:14 (0.786 decimal). This is NOT 4:5 (0.800). A 4:5 image resized to 11×14 requires minor cropping — about 1.8% off the width. You need a separate 11:14 export or accept slight cropping from a 4:5 source.",
                  },
                  {
                    question: "Does 11×14 fit a standard frame?",
                    answer:
                      "Yes — 11×14 is one of the most common US frame sizes. Available at IKEA (RIBBA, FISKBO), Target, Walmart, Michaels, and Amazon. It's also the standard mat opening for 16×20 frames.",
                  },
                  {
                    question:
                      "Should I include 11×14 in my Etsy printable listing?",
                    answer:
                      "Yes. It's one of the top 5 most-requested print sizes. Listings that include 11×14 alongside 8×10 and 16×20 convert better because buyers have the exact size they need.",
                  },
                  {
                    question: "Can I use my 8×10 file for 11×14?",
                    answer:
                      "Not directly. 8×10 is 4:5 ratio; 11×14 is 11:14. Stretching distorts the image. You need either a separate 11:14 export or accept slight cropping from a 4:5 source. Tools like SnapToSize handle this automatically.",
                  },
                ]}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Still exporting 11×14 files manually for every listing?"
                solution="Upload once, get 11×14 plus 29 other sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
                buttonText="Get All Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-11x14-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
