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

export const metadata: Metadata = {
  title: "5×7 Print Size for Etsy — Pixels, DPI & File Setup",
  description:
    "5×7 is the #2 most popular Etsy print size. Get exact pixel dimensions at 300 DPI (1500×2100), 5:7 ratio specs, framing tips, and file format rules for digital downloads.",
  alternates: { canonical: "https://snaptosize.com/etsy-5x7-print-size" },
  openGraph: {
    title:
      "5×7 Print Size for Etsy — Pixel Dimensions at 300 DPI | SnapToSize",
    description:
      "Complete 5×7 print guide for Etsy sellers. Exact pixels at 300 DPI, 5:7 ratio explained, framing & matting tips, and file format rules.",
    url: "https://snaptosize.com/etsy-5x7-print-size",
    images: [
      {
        url: "/assets/og/etsy-5x7-print-size.png",
        width: 1200,
        height: 630,
        alt: "5×7 Print Size for Etsy — Pixel Dimensions at 300 DPI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5×7 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete 5×7 print guide for Etsy sellers. 1500×2100 pixels at 300 DPI, 5:7 ratio, framing & file setup.",
    images: ["/assets/og/etsy-5x7-print-size.png"],
  },
};

export default function Etsy5x7PrintSizePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "5×7 Print Size for Etsy — Pixel Dimensions at 300 DPI",
    description:
      "Complete technical guide to 5×7 print dimensions for Etsy sellers, including exact pixel dimensions at 300 DPI, 5:7 ratio specs, framing tips, and file requirements.",
    url: "https://snaptosize.com/etsy-5x7-print-size",
    datePublished: "2026-03-14",
    dateModified: "2026-03-14",
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
        name: "5×7 Print Size",
        item: "https://snaptosize.com/etsy-5x7-print-size",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pixel dimensions do I need for a 5×7 print at 300 DPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 5×7 inch print at 300 DPI requires exactly 1500×2100 pixels. Multiply each dimension by 300: 5×300=1500, 7×300=2100. As a JPEG, the file weighs 1.5-2 MB — well under Etsy's 20 MB limit.",
        },
      },
      {
        "@type": "Question",
        name: "What aspect ratio is 5×7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "5×7 has a unique shape (5:7) that's different from 8×10 (4:5) and 4×6 (2:3). You can't just resize an 8×10 to make a 5×7 — it will cut off parts of your design. Because of its unique shape, SnapToSize includes 5×7 in the Extras pack.",
        },
      },
      {
        "@type": "Question",
        name: "Does 5×7 fit a standard frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — 5×7 frames are ubiquitous at Target, Walmart, IKEA, Amazon, and even dollar stores. It's also the most common matted size inside an 8×10 frame for a gallery-style look.",
        },
      },
      {
        "@type": "Question",
        name: "Is 5×7 the same ratio as 8×10?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — they have different shapes. If you try to resize an 8×10 design to fit 5×7, it will cut off the top or sides of your artwork. You need a separate file for each size, or use a tool like SnapToSize that creates each size without cutting anything off.",
        },
      },
      {
        "@type": "Question",
        name: "What file format should I use for 5×7 Etsy prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Save as JPEG at 300 DPI. JPEG keeps file sizes small while looking great when printed. Avoid PNG for print files — PNG files are much larger and won't look any better when printed. If you use Canva, just download as JPG and you're good to go.",
        },
      },
      {
        "@type": "Question",
        name: "Can buyers print 5×7 at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A 5×7 print fits easily on standard letter paper (8.5×11 inches). Most home inkjet printers handle 5×7 with no special settings — buyers just select '5×7' as the paper size or print on letter paper and trim.",
        },
      },
    ],
  };

  const appUrl =
    "https://app.snaptosize.com?source=seo_5x7&kind=guide";

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
      <section className="relative py-14 md:py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #030712 0%, #0a0f1e 40%, #0d1117 100%)" }}>
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
          className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-25%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />

        {/* Nested frames illustration — 5×7 inside 8×10 (matting relationship) */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block">
          {/* Outer 8×10 frame (ghost frame) */}
          <div
            className="relative border border-white/[0.08] rounded-sm"
            style={{ width: "240px", height: "300px" }}
          >
            {/* Mat area label */}
            <div className="absolute top-2 right-3">
              <span className="text-[9px] font-mono text-white/25 tracking-wider">8×10 frame</span>
            </div>

            {/* Mat fill — subtle diagonal lines */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #a78bfa 0px, #a78bfa 1px, transparent 1px, transparent 8px)",
              }}
            />

            {/* Inner 5×7 frame (hero focus) — centered inside 8×10 */}
            <div
              className="absolute border-2 border-purple-400/35 rounded-sm"
              style={{
                width: "180px",
                height: "252px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Inner accent border */}
              <div className="absolute inset-2 border border-purple-500/20 rounded-sm" />

              {/* Small rounded corner accents (different from 8×10's sharp corners) */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-purple-400/50 rounded-tl-sm" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-purple-400/50 rounded-tr-sm" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-purple-400/50 rounded-bl-sm" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-purple-400/50 rounded-br-sm" />

              {/* Ratio badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-3 py-1.5 rounded-full border border-purple-400/25 bg-purple-500/[0.08]">
                  <span className="text-xs font-mono text-purple-300/50 tracking-[0.2em]">
                    5 : 7
                  </span>
                </div>
              </div>

              {/* Greeting card icon — small decorative element */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 opacity-20">
                  <div className="w-3 h-4 border border-purple-300/40 rounded-[1px]" />
                  <div className="w-3 h-4 border border-purple-300/30 rounded-[1px] -rotate-6" />
                </div>
              </div>

              {/* Dimension label — width */}
              <div className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-purple-300/15" />
                <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap">
                  5 in &middot; 1500 px
                </span>
                <div className="h-px flex-1 bg-purple-300/15" />
              </div>

              {/* Dimension label — height */}
              <div className="absolute -right-24 top-0 bottom-0 flex flex-col items-center justify-center gap-2 w-20">
                <div className="w-px flex-1 bg-purple-300/15" />
                <span className="text-[10px] font-mono text-purple-300/50 tracking-widest whitespace-nowrap -rotate-90">
                  7 in &middot; 2100 px
                </span>
                <div className="w-px flex-1 bg-purple-300/15" />
              </div>
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
                5×7 Print Size for Etsy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Exact pixel dimensions at 300&nbsp;DPI &mdash; the #2 most
                popular print size explained
              </span>
            </h1>
            <p className="text-base text-white/60 mb-5 max-w-lg">
              1500×2100 pixels at 300 DPI. Fits every standard frame
              and prints on regular paper at home. Here&apos;s everything you
              need to set up 5×7 digital downloads that sell.
            </p>

            <div className="mb-4">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Get All Print Sizes Instantly
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload once, download 5×7 + 29 more sizes across
                every ratio.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  1500×2100 px at 300 DPI
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Unique 5:7 shape
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]">
                <Check className="h-3 w-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white/70 font-medium">
                  Fits in 8×10 frame with border
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
            {/* --- Exact Dimensions --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                5×7 at 300 DPI — Exact Pixel Dimensions
              </h2>

              <Card className="p-6 md:p-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Print Size</span>
                    <span className="font-semibold">5 × 7 inches</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      Pixel Dimensions
                    </span>
                    <span className="font-semibold">1500 × 2100 px</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Resolution</span>
                    <span className="font-semibold">300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">Aspect Ratio</span>
                    <span className="font-semibold">5:7 (unique shape)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-foreground-60">
                      JPEG File Size
                    </span>
                    <span className="font-semibold">1.5–2 MB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-60">Etsy limit</span>
                    <span className="font-semibold">Well under 20 MB</span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                To get the right file size for sharp prints, set your design to
                1500 pixels wide by 2100 pixels tall. In Canva, create a
                custom design with these exact dimensions.
              </p>
              <p className="text-foreground-60 mb-4">
                Saved as a JPEG, the file is only 1.5-2&nbsp;MB &mdash;
                well under Etsy&apos;s 20&nbsp;MB upload limit. You can easily
                bundle multiple sizes in a single ZIP download.
              </p>
              <p className="text-foreground-60">
                <strong className="text-foreground">Important:</strong> 5×7 has a different shape than
                8×10 and 4×6. You can&apos;t just resize an 8×10 design to make
                a 5×7 &mdash; it will cut off the edges of your artwork.
                Each size needs its own file, or you can use a tool that
                creates each size automatically without cutting anything off.
              </p>
            </div>

            {/* --- 5:7 Aspect Ratio Explained --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 5×7 Has a Different Shape Than 8×10
              </h2>

              <p className="text-foreground-60 mb-6">
                This catches many sellers off guard: 5×7 and 8×10 are{" "}
                <strong className="text-foreground">not the same shape</strong>.
                You can&apos;t just shrink an 8×10 to make a 5×7. If you try,
                parts of your design will get cut off.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Each Size Has a Different Shape
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">5×7</span>
                    <span className="text-foreground-60">
                      Slightly taller &amp; narrower &mdash; <span className="text-purple-400 font-semibold">Extras pack</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">4×6</span>
                    <span className="text-foreground-60">
                      Even taller &amp; narrower (think photos)
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">8×10</span>
                    <span className="text-foreground-60">
                      Wider &amp; shorter (most popular)
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">A4</span>
                    <span className="text-foreground-60">
                      International standard &mdash; close to 5×7 but not the same
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">11×14</span>
                    <span className="text-foreground-60">
                      Another unique shape &mdash; popular mat size
                    </span>
                  </div>
                </div>
              </Card>

              <p className="text-foreground-60 mb-4">
                Think of it like this: a 4×6 photo is long and narrow (like a
                postcard), an 8×10 is almost square, and 5×7 is somewhere in
                between. They&apos;re all slightly different shapes, so resizing
                between them will always cut something off.
              </p>
              <p className="text-foreground-60">
                Because 5×7 has its own unique shape, SnapToSize includes it
                in the{" "}
                <strong className="text-foreground">Extras pack</strong>{" "}
                alongside other popular &ldquo;odd&rdquo; sizes like{" "}
                <Link href="/etsy-8-5x11-print-size" className="text-accent-light hover:underline">
                  8.5×11 (US Letter)
                </Link>,{" "}
                <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">
                  11×14
                </Link>, 13×19, and 20×24. These are all sizes buyers
                frequently ask for that don&apos;t share a shape with the
                main ratio groups.
              </p>
            </div>

            {/* --- CTA 1 --- */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Skip the Manual Resizing
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload your artwork once. Get 5×7 and 29 other sizes across
                  every ratio &mdash; organized, named, and under 20&nbsp;MB.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Generate All Sizes Instantly
                  </Button>
                </a>
              </Card>
            </div>

            {/* --- Why #2 Most Popular --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why 5×7 Is the #2 Most Popular Etsy Print Size
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Affordable Frames Everywhere
                  </h3>
                  <p className="text-foreground-60">
                    5×7 frames start at $1 at dollar stores and are stocked at
                    every major retailer &mdash; Target, Walmart, IKEA, Amazon.
                    The low frame cost makes 5×7 prints an impulse-friendly
                    purchase for buyers. No special ordering, no waiting.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Greeting Card &amp; Small Gift Use
                  </h3>
                  <p className="text-foreground-60">
                    5×7 is the standard greeting card size. Buyers purchase 5×7
                    digital prints not just for framing &mdash; they use them as
                    cards, desk prints, nursery accents, and small gifts.
                    This expands your addressable market beyond wall art
                    collectors.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Buyers Purchase Multiples
                  </h3>
                  <p className="text-foreground-60">
                    Because 5×7 is small and affordable to print, buyers
                    frequently purchase multiple designs at once for gallery
                    walls, nursery sets, or gift bundles. A single buyer might
                    purchase 4-6 of your 5×7 prints in one order.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Perfect Gallery Wall Companion
                  </h3>
                  <p className="text-foreground-60">
                    5×7 prints pair naturally with 8×10 in gallery walls. The
                    most popular gallery arrangement uses a mix of 8×10 and 5×7
                    frames. Offering both sizes in your listings increases
                    average order value and gives buyers more layout flexibility.
                  </p>
                </Card>
              </div>
            </div>

            {/* --- Where Buyers Print 5×7 --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Where Buyers Print 5×7
              </h2>

              <p className="text-foreground-60 mb-6">
                One of 5×7&apos;s biggest advantages is how easy it is to print.
                Unlike larger formats that require professional services, 5×7
                fits on standard letter paper and prints at home with zero setup.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Home Printers &mdash; The #1 Option
                  </h3>
                  <p className="text-foreground-60">
                    5×7 fits comfortably on standard 8.5×11 letter paper. Most
                    home inkjet printers handle this size with no special
                    settings. Buyers can also buy dedicated 5×7 photo paper
                    packs (available at any office supply store for $5-10).
                    This makes 5×7 the most accessible print size for your
                    customers.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Drugstore Printing &mdash; $3-5 Per Print
                  </h3>
                  <p className="text-foreground-60">
                    Walgreens, CVS, and Walmart offer same-day 5×7 photo
                    printing for $3-5. Buyers upload the file online and pick up
                    the print within hours. This is the second most popular
                    printing method for Etsy digital download buyers.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Costco &amp; Online Services
                  </h3>
                  <p className="text-foreground-60">
                    For higher volumes, Costco prints 5×7 photos at $0.59 each.
                    Online services like Shutterfly and Nations Photo Lab offer
                    similar pricing with delivery. Buyers printing gallery
                    wall sets often use these bulk-friendly options.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-accent/10 border-accent/20 mt-6">
                <div className="flex gap-4">
                  <Check className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-60 text-sm">
                    <strong className="text-foreground">
                      Listing tip:
                    </strong>{" "}
                    Add &ldquo;Print at home on letter paper or pick up at
                    Walgreens for $3-5&rdquo; to your Etsy description. This
                    removes the &ldquo;how do I print this?&rdquo; hesitation
                    that stops first-time digital download buyers from
                    purchasing.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- CTA 2 --- */}
            <div>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-base px-6 py-2.5">
                  Generate 5×7 + 29 Other Sizes in Seconds
                </Button>
              </a>
            </div>

            {/* --- Framing & Matting --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Framing &amp; Matting &mdash; What Buyers Need to Know
              </h2>
              <p className="text-foreground-60 mb-6">
                5×7 prints fit directly into standard 5×7 frames. But the
                most popular look is a 5×7 print inside an 8×10 frame with
                a white border around it (called a &ldquo;mat&rdquo;) &mdash;
                this is the most common frame combination in home decor.
              </p>

              <Card className="p-6 md:p-8 mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Common Frame + Mat Combinations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">5×7 frame, no mat</span>
                    <span className="text-foreground-60 text-sm">
                      Budget-friendly, print fills frame
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      8×10 frame + 5×7 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Most popular matted combo in home decor
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-medium">
                      11×14 frame + 5×7 mat
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Wide border, dramatic gallery look
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Multi-opening frame
                    </span>
                    <span className="text-foreground-60 text-sm">
                      Collage frames with 3-5 openings for 5×7 prints
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
                    Add &ldquo;Fits any standard 5×7 frame (Target, IKEA,
                    Amazon, dollar stores). For a gallery look, mat inside an
                    8×10 frame.&rdquo; to your Etsy description. This answers
                    the framing question before buyers ask it.
                  </p>
                </div>
              </Card>
            </div>

            {/* --- Extras Pack Table --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The Extras Pack &mdash; Where 5×7 Lives
              </h2>
              <p className="text-foreground-60 mb-6">
                Because 5×7 has a different shape than the main size groups,
                SnapToSize includes it in the Extras pack with other popular
                &ldquo;odd&rdquo; sizes. These are all sizes buyers frequently
                ask for that don&apos;t share a shape with the standard groups.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        Print Size
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        File Size (pixels)
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Shape
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">
                        Common Use
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 bg-accent/5">
                      <td className="py-3 px-4 font-semibold">5×7</td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500 × 2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5:7
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Greeting cards, small frames, desk prints
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8.5×11</td>
                      <td className="py-3 px-4 text-foreground-60">
                        2550 × 3300
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        17:22
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        US Letter, home printing standard
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">11×14</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 × 4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11:14
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Standard mat frame for 8×10
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">11×17</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300 × 5100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        11:17
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Tabloid / ledger size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">13×19</td>
                      <td className="py-3 px-4 text-foreground-60">
                        3900 × 5700
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        13:19
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Fine art / poster size
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">20×24</td>
                      <td className="py-3 px-4 text-foreground-60">
                        6000 × 7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5:6
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large portrait, studio photography
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 mb-4">
                Including the Extras pack alongside your ratio packs means
                buyers get the sizes they actually search for &mdash; like 5×7
                and 8.5×11 &mdash; not just mathematically related sizes they
                may not recognize.
              </p>
              <p className="text-foreground-60">
                For the full breakdown of all 30 sizes across every ratio pack
                (2:3, 3:4, 4:5, ISO, and Extras), see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print sizes guide
                </Link>
                .
              </p>
            </div>

            {/* --- File Format --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                File Setup &amp; Naming
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Save as JPEG (Not PNG)
                  </h3>
                  <p className="text-foreground-60">
                    JPEG is the go-to format for Etsy print files. A 5×7 JPEG
                    is only 1.5-2&nbsp;MB &mdash; small enough to bundle many
                    sizes in one ZIP. PNG files are much bigger and won&apos;t
                    look any better when printed. In Canva, just download as
                    &ldquo;JPG&rdquo; and you&apos;re set.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Make Sure Colors Print Correctly
                  </h3>
                  <p className="text-foreground-60">
                    If you use Canva, good news &mdash; it automatically uses
                    the right color settings for printing. If you use Photoshop
                    or Illustrator, make sure your file uses &ldquo;sRGB&rdquo;
                    colors (this is a setting in your export options). Wrong
                    color settings can make reds print orange or blues print
                    purple.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Name Your Files Clearly
                  </h3>
                  <p className="text-foreground-60">
                    Use names like{" "}
                    <code className="text-accent-light">
                      artwork_5x7_300dpi.jpg
                    </code>
                    {" "}so buyers can find the right file instantly in their
                    downloads folder. Since 5×7 is also a greeting card size,
                    some sellers add{" "}
                    <code className="text-accent-light">
                      artwork_greeting_card_5x7.jpg
                    </code>{" "}
                    as an extra option.
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
                    <span>Use JPEG, not PNG &mdash; 5×7 JPEG is only 1.5-2 MB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>Download as a flat image (in Canva: download as JPG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Bundle by pack &mdash; the entire Extras pack in one ZIP
                      stays well under 20 MB
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      Or use SnapToSize &mdash; auto-optimizes every file to
                      stay under the limit
                    </span>
                  </li>
                </ul>
                <p className="text-foreground-60 text-sm mt-4">
                  For more detail, see{" "}
                  <Link
                    href="/etsy-20mb-file-limit"
                    className="text-accent-light hover:underline"
                  >
                    Etsy 20 MB file limit guide
                  </Link>
                  .
                </p>
              </Card>
            </div>

            {/* --- Common Mistakes --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Mistakes With 5×7 Digital Prints
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        File too small &mdash; prints come out blurry
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        If your file is smaller than 1500×2100 pixels, the
                        print will look blurry and pixelated. In Canva, create
                        a custom design at exactly 1500×2100 px. If you see
                        &ldquo;72 DPI&rdquo; in your export settings, change
                        it to 300 DPI &mdash; that&apos;s the standard for
                        sharp prints.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Resizing an 8×10 or 4×6 to make a 5×7
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        This is the #1 mistake with 5×7 files. Sellers take
                        their 8×10 design and resize it to 5×7, but because
                        they&apos;re different shapes, it cuts off the edges of
                        the artwork. Your buyers will see a different design
                        than what&apos;s shown in your listing preview. Create
                        each size separately, or use a tool that handles this
                        automatically.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Not including 5×7 in your listings
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Some sellers skip 5×7 because it&apos;s &ldquo;small&rdquo;
                        or because it doesn&apos;t match their other ratios.
                        This is leaving money on the table. 5×7 is the #2 most
                        requested size in buyer messages. Buyers who want
                        greeting cards, nursery accents, or desk prints
                        specifically search for 5×7.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Offering only one size per listing
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        Listings with a single size convert poorly compared to
                        multi-size bundles. Buyers expect digital print
                        downloads to include multiple sizes. Including 5×7
                        alongside 8×10, 4×6, and other popular sizes
                        dramatically increases perceived value and
                        conversion rate.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Colors look wrong when printed
                      </h3>
                      <p className="text-foreground-60 text-sm">
                        If your prints come out with weird colors (reds looking
                        orange, blues looking purple), your color settings may
                        be wrong. Canva users don&apos;t need to worry &mdash;
                        Canva handles this automatically. If you use Photoshop,
                        make sure you&apos;re exporting with &ldquo;sRGB&rdquo;
                        colors selected.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* --- CTA 3 --- */}
            <div>
              <FinalCTA
                heading="Get 5×7 + 29 Other Sizes in One Click"
                stat="30 print-ready files from a single upload"
                description="Upload your artwork once and instantly get 5×7 + 29 other sizes across every ratio at 300 DPI. No cropping, no manual resizing. Production-ready in seconds."
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
                      "What pixel dimensions do I need for a 5×7 print at 300 DPI?",
                    answer:
                      "Exactly 1500×2100 pixels. Multiply each dimension by 300: 5×300 = 1500 pixels wide, 7×300 = 2100 pixels tall. As a JPEG, the file weighs 1.5-2 MB — well under Etsy's 20 MB limit.",
                  },
                  {
                    question: "What shape is a 5×7 print?",
                    answer:
                      "5×7 has its own unique shape (5:7 ratio) — it's narrower than 8×10 and wider than 4×6. You can't just resize between these sizes without cutting off part of your design. Because of its unique shape, SnapToSize includes 5×7 in the Extras pack alongside 8.5×11, 11×14, 11×17, 13×19, and 20×24.",
                  },
                  {
                    question: "Does 5×7 fit a standard frame?",
                    answer:
                      "Yes — 5×7 frames are ubiquitous at Target, Walmart, IKEA, Amazon, and even dollar stores. It's also the most common matted size inside an 8×10 frame, which is the single most popular matted frame combination in home decor.",
                  },
                  {
                    question: "Is 5×7 the same shape as 8×10?",
                    answer:
                      "No — they're different shapes. If you try to resize an 8×10 design to fit 5×7, it will cut off the top or sides of your artwork. You need a separate file for each size, or use a tool like SnapToSize that creates each size without cutting anything off.",
                  },
                  {
                    question:
                      "What file format should I use for 5×7 Etsy prints?",
                    answer:
                      "Save as JPEG at 300 DPI. JPEG keeps files small while looking great when printed — a 5×7 JPEG is only 1.5-2 MB, so you can bundle many sizes in one ZIP without hitting Etsy's 20 MB limit. In Canva, just download as JPG.",
                  },
                  {
                    question: "Can buyers print 5×7 at home?",
                    answer:
                      "Yes. A 5×7 print fits easily on standard letter paper (8.5×11 inches). Most home inkjet printers handle 5×7 with no special settings — buyers just select '5×7' as the paper size or print on letter paper and trim. Dedicated 5×7 photo paper is also available at any office supply store.",
                  },
                ]}
              />
            </div>

            <div className="pb-12">
              <ContextualCTA
                problem="Still exporting 5×7 files manually for every listing?"
                solution="Upload once, get 5×7 plus 29 other sizes at 300 DPI. Organized in ratio packs, ready for Etsy."
                buttonText="Get All Sizes"
                appUrl={appUrl}
              />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-5x7-print-size" />
          </div>
        </Container>
      </section>
    </>
  );
}
