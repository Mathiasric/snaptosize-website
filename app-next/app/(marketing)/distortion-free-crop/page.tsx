import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Check, ArrowRight, Move, Maximize2 } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";

export const metadata: Metadata = {
  title: "Distortion-Free Crop — Reframe Art to Any Print Ratio",
  description:
    "Perfect Fit reframes your art to any Etsy print ratio with full control. Drag to choose what stays in frame, preview it live, and export every size with proportions kept exactly.",
  alternates: { canonical: "https://snaptosize.com/distortion-free-crop" },
  openGraph: {
    title:
      "Distortion-Free Crop: Reframe Art to Any Print Ratio | SnapToSize",
    description:
      "Reframe a 2:3 piece to 4:5, portrait to landscape, any ratio to any ratio, with full control. You choose what stays in frame, with a live preview before export.",
    url: "https://snaptosize.com/distortion-free-crop",
    images: [
      {
        url: "/assets/og/distortion-free-crop.png",
        width: 1200,
        height: 630,
        alt: "Perfect Fit — reframe art to any Etsy print ratio with full control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Distortion-Free Crop — Reframe Art to Any Print Ratio",
    description:
      "Reframe your art to any print ratio with full control. You choose what stays in frame, preview it live, and export every size.",
    images: ["/assets/og/distortion-free-crop.png"],
  },
};

export default function DistortionFreeCropPage() {
  const appUrl =
    "https://app.snaptosize.com/app/perfect-fit?source=seo_distortion_free_crop&kind=feature";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Distortion-Free Crop — Reframe Your Art to Any Print Ratio",
    description:
      "How to reframe artwork to a different print ratio with full control over the framing, using a focal crop. Covers portrait and landscape, every Etsy size, and a live preview before export.",
    url: "https://snaptosize.com/distortion-free-crop",
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
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
        name: "Distortion-Free Crop",
        item: "https://snaptosize.com/distortion-free-crop",
      },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SnapToSize Perfect Fit",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    url: "https://snaptosize.com/distortion-free-crop",
    description:
      "Perfect Fit reframes artwork to any print ratio with a focal crop you control — you choose the framing, in portrait or landscape, across every Etsy print size.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available; Pro removes the watermark.",
    },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I crop my artwork for different print sizes without distortion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reframe it with a focal crop you control. Perfect Fit lets you drag to choose what stays in frame for the new ratio, shows a live preview, then exports every size in that ratio at 300 DPI — so the proportions you drew stay exactly as they are.",
        },
      },
      {
        "@type": "Question",
        name: "Will Perfect Fit stretch or distort my art?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Perfect Fit reframes by cropping to the target shape around the subject you choose, so your proportions are preserved exactly. That is what makes it a great fit for highly detailed work.",
        },
      },
      {
        "@type": "Question",
        name: "Can I control what gets kept in the frame?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, that is the whole point. You drag to position the focal frame and see a live preview before exporting, so you decide exactly what stays and what falls outside the new ratio.",
        },
      },
      {
        "@type": "Question",
        name: "Does distortion-free crop work for landscape art?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Perfect Fit reframes in portrait or landscape, so you can take a portrait piece to a landscape ratio (or the reverse) and frame it exactly how you want.",
        },
      },
      {
        "@type": "Question",
        name: "How is Perfect Fit different from a Size Pack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They do different jobs. Size Packs scale your whole image to every size in a ratio family — fast, full detail, and the right call for most art. Perfect Fit crops to a new shape with you choosing the framing — reach for it when you want exact control over the composition, your piece is highly detailed, or you need a different ratio than the original.",
        },
      },
      {
        "@type": "Question",
        name: "Is distortion-free crop free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can reframe and export on the free tier (exports are watermarked). Pro removes the watermark and lifts daily limits.",
        },
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative pt-12 pb-20 md:pt-20 md:pb-44 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #050310 0%, #0b0716 45%, #0d0a1a 100%)",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gradient mesh blobs */}
        <div
          className="absolute top-[-20%] right-[-8%] w-[620px] h-[620px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-6%] w-[480px] h-[480px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #2dd4bf, transparent 70%)",
          }}
        />

        {/* Reframe visual — right side */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-7">
          {/* Source artwork with a focal frame inside */}
          <div className="relative">
            <div
              className="rounded-sm relative overflow-hidden border border-white/[0.10]"
              style={{
                width: "184px",
                height: "230px",
                background:
                  "linear-gradient(150deg, #4c1d95 0%, #6d28d9 40%, #0f766e 100%)",
              }}
            >
              {/* Subject orb */}
              <div
                className="absolute rounded-full opacity-90"
                style={{
                  width: "78px",
                  height: "78px",
                  left: "62px",
                  top: "74px",
                  background:
                    "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 70%)",
                  boxShadow: "0 0 40px rgba(245,158,11,0.35)",
                }}
              />
              {/* Movable focal frame (target ratio) */}
              <div
                className="absolute border-2 border-[#2DD4BF] rounded-[2px]"
                style={{ left: "30px", top: "44px", right: "30px", bottom: "44px" }}
              >
                <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#2DD4BF]" />
                <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#2DD4BF]" />
                <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#2DD4BF]" />
                <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#2DD4BF]" />
              </div>
              {/* Drag chip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                <Move className="h-2.5 w-2.5 text-[#2DD4BF]" />
                <span className="text-[9px] font-mono text-white/70 tracking-wide">
                  drag to frame
                </span>
              </div>
            </div>
            <div className="text-center mt-3">
              <span className="text-[10px] font-mono text-purple-300/50 tracking-wider">
                Your artwork
              </span>
            </div>
          </div>

          {/* Arrow */}
          <ArrowRight className="h-6 w-6 text-white/25" />

          {/* Two clean outputs */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <div
                className="rounded-sm border border-[#2DD4BF]/30 overflow-hidden"
                style={{
                  width: "104px",
                  height: "130px",
                  background:
                    "linear-gradient(150deg, #5b21b6 0%, #0f766e 100%)",
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "44px",
                    height: "44px",
                    left: "30px",
                    top: "30px",
                    background:
                      "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 70%)",
                  }}
                />
              </div>
              <span className="block text-center text-[9px] font-mono text-white/35 mt-1.5">
                4:5 portrait
              </span>
            </div>
            <div className="relative">
              <div
                className="rounded-sm border border-[#2DD4BF]/30 overflow-hidden"
                style={{
                  width: "130px",
                  height: "86px",
                  background:
                    "linear-gradient(150deg, #5b21b6 0%, #0f766e 100%)",
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "40px",
                    height: "40px",
                    left: "45px",
                    top: "23px",
                    background:
                      "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 70%)",
                  }}
                />
              </div>
              <span className="block text-center text-[9px] font-mono text-white/35 mt-1.5">
                3:2 landscape
              </span>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-[#2DD4BF]/50" />
              <span className="text-xs font-mono tracking-[0.15em] text-teal-300/70 uppercase">
                Perfect Fit
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 text-teal-300/80">
                NEW
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-1.5 text-white">
                Reframe your art to any ratio
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-white/80">
                Crop to the new shape with full control, made for detailed art
              </span>
            </h1>
            <p className="text-base text-white/60 mb-6 max-w-xl">
              When a piece needs a different shape &mdash; a 2:3 you also want as
              4:5, or a portrait you need in landscape &mdash; Perfect Fit lets
              you crop to the new ratio with full control. Drag to set the
              framing, see it live, and keep every detail exactly where you want
              it.
            </p>

            <div className="mb-5">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Try Perfect Fit Free
                </Button>
              </a>
              <p className="text-sm text-white/40 mt-1.5">
                Free &rarr; upload, frame, and download. No signup required.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Full framing control",
                "Made for detailed art",
                "Portrait or landscape",
                "Live preview",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-2 text-[11px] sm:text-xs sm:px-2.5 py-1 rounded-md bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]"
                >
                  <Check className="h-3 w-3 text-[#2DD4BF] flex-shrink-0" />
                  <span className="text-white/70 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Quick answer */}
            <QuickAnswer question="What is distortion-free crop?">
              Distortion-free crop reframes your artwork to a new aspect ratio by
              cropping around the subject you choose, so the proportions you drew
              are preserved. In SnapToSize this is <strong>Perfect Fit</strong>:
              drag to set the framing, preview it live, and export every print
              size in the new ratio at 300 DPI &mdash; with full control over
              what stays in frame.
            </QuickAnswer>

            {/* ===== SECTION 1: When your art needs a different shape ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                When your art needs a different shape
              </h2>
              <p className="text-foreground-60 mb-4">
                Every print size has its own aspect ratio. So a 2:3 piece you
                also want as a 4:5, or a portrait you need to run as a landscape,
                has to change shape to fit. The real question is who decides what
                stays in frame.
              </p>
              <p className="text-foreground-60">
                A generic online resizer makes that call for you. Doing it by
                hand in Photoshop puts you in control but takes real time, size
                by size. Perfect Fit gives you both &mdash; the control of
                framing it yourself, at the speed of an automatic tool.
              </p>
            </div>

            {/* ===== SECTION 2: Perfect Fit answer ===== */}
            <div>
              <Card accent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Maximize2 className="h-5 w-5 text-[#2DD4BF]" />
                  <h2 className="text-xl md:text-2xl font-bold">
                    Perfect Fit: reframe with full control
                  </h2>
                </div>
                <p className="text-foreground-60 mb-4">
                  Perfect Fit reframes your image to the target ratio by cropping
                  around the subject you choose. You decide what belongs in the
                  new shape: drag the focal frame, watch a live preview, and
                  export when it looks right. Because it crops to the new ratio,
                  the proportions you drew stay exactly as they are, which makes
                  it especially good for highly detailed work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-start gap-2 text-sm text-foreground-60">
                    <Check className="h-4 w-4 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <span>Exact proportions, every detail kept</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-foreground-60">
                    <Check className="h-4 w-4 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <span>You choose what stays in frame</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-foreground-60">
                    <Check className="h-4 w-4 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                    <span>Portrait or landscape, every Etsy size</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* ===== Real before/after demo ===== */}
            <div>
              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/assets/visuals/distortion-free-crop-demo.png"
                  alt="A 2:3 fox illustration reframed to 4:5 and 3:4 with Perfect Fit — the fox stays sharp and full width while the empty sky and grass are trimmed."
                  width={1120}
                  height={560}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm text-foreground-60 mt-3">
                Same drawing, three print ratios. Each one framed to keep the
                subject, at full detail.
              </p>
            </div>

            {/* ===== SECTION 3: How it works ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How distortion-free crop works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="text-[#2DD4BF] font-mono text-sm mb-2">
                    Step 1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Upload your art</h3>
                  <p className="text-sm text-foreground-60">
                    Drop in a JPG, PNG, or WEBP. Any shape &mdash; portrait,
                    landscape, or square.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-[#2DD4BF] font-mono text-sm mb-2">
                    Step 2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Drag to frame</h3>
                  <p className="text-sm text-foreground-60">
                    Position the focal frame for the new ratio and watch the live
                    preview. What you see is what exports.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-[#2DD4BF] font-mono text-sm mb-2">
                    Step 3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Export every size
                  </h3>
                  <p className="text-sm text-foreground-60">
                    Get the full ratio pack at 300 DPI, framed exactly as you set
                    it, in an Etsy-ready ZIP under 20&nbsp;MB.
                  </p>
                </Card>
              </div>
            </div>

            {/* ===== CTA 1 ===== */}
            <div>
              <Card accent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  See it framed before you export
                </h3>
                <p className="text-sm text-foreground-60 mb-5">
                  Upload a piece and drag the frame &mdash; the preview shows
                  exactly what you&apos;ll get at every size. Full control, no
                  guesswork.
                </p>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="text-sm px-6 py-2.5">
                    Try Perfect Fit Free
                  </Button>
                </a>
              </Card>
            </div>

            {/* ===== SECTION 4: Who it's for ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Who distortion-free crop is for
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <div className="text-purple-300 font-mono text-sm mb-2">
                    Highly detailed art
                  </div>
                  <p className="text-sm text-foreground-60">
                    Pieces where exact proportions and deliberate framing matter.
                    You set the crop yourself and keep every line precisely as you
                    drew it.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-purple-300 font-mono text-sm mb-2">
                    Cross-platform creators
                  </div>
                  <p className="text-sm text-foreground-60">
                    A Pinterest 2:3 that needs to become an Instagram 4:5, or a
                    print you also post as a banner. Reframe once, in whichever
                    orientation you need.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-purple-300 font-mono text-sm mb-2">
                    When the composition matters
                  </div>
                  <p className="text-sm text-foreground-60">
                    Maps, typography, faces, fine linework &mdash; anywhere the
                    framing has to be just so, you choose it instead of leaving it
                    to a tool.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-purple-300 font-mono text-sm mb-2">
                    Sellers who want both shapes
                  </div>
                  <p className="text-sm text-foreground-60">
                    Offer the same art as a tall statement print and a wider
                    framed piece &mdash; each framed exactly how you want it.
                  </p>
                </Card>
              </div>
            </div>

            {/* ===== SECTION 5: Comparison (vs external ways) ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Perfect Fit vs the usual ways to change ratio
              </h2>
              <p className="text-foreground-60 mb-6">
                There are a few ways to get art into a new shape. Here&apos;s
                where Perfect Fit lands against a generic online resizer and
                cropping by hand.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">
                        What you want
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-teal-300">
                        Perfect Fit
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white/70">
                        Generic resizer
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white/70">
                        By hand (Photoshop)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        want: "Choose what stays in frame",
                        pf: "Yes, you drag it",
                        gr: "Crops to center",
                        ps: "Yes, manually",
                      },
                      {
                        want: "See it before you export",
                        pf: "Live preview",
                        gr: "Rarely",
                        ps: "Yes",
                      },
                      {
                        want: "Keep exact proportions",
                        pf: "Yes",
                        gr: "Varies",
                        ps: "Yes, manually",
                      },
                      {
                        want: "Portrait and landscape",
                        pf: "Yes",
                        gr: "Varies",
                        ps: "Yes",
                      },
                      {
                        want: "Every Etsy size at once",
                        pf: "Yes, full pack",
                        gr: "One at a time",
                        ps: "One at a time",
                      },
                      {
                        want: "Time per piece",
                        pf: "Under a minute",
                        gr: "Minutes",
                        ps: "30+ minutes",
                      },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.want}
                        className={
                          i < arr.length - 1 ? "border-b border-white/10" : ""
                        }
                      >
                        <td className="py-3 px-4 font-medium">{row.want}</td>
                        <td className="py-3 px-4 text-teal-300/90">{row.pf}</td>
                        <td className="py-3 px-4 text-foreground-60">
                          {row.gr}
                        </td>
                        <td className="py-3 px-4 text-foreground-60">
                          {row.ps}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-foreground-60">
                Already the right shape and just need every size? That&apos;s
                what{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  Size Packs
                </Link>{" "}
                are for &mdash; fast, full detail, your whole composition kept.
                Perfect Fit is the companion for when the shape itself needs to
                change, or the framing has to be exact.
              </p>
            </div>

            {/* ===== FINAL CTA ===== */}
            <div>
              <FinalCTA
                heading="Reframe your art, exactly how you want it"
                stat="Every Etsy print size, framed the way you choose"
                description="Upload a piece, drag to set the framing, and export the full ratio pack at 300 DPI with every detail kept."
                buttonText="Try Perfect Fit Free"
                appUrl={appUrl}
              />
            </div>

            {/* ===== FAQ ===== */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; distortion-free crop
              </h2>
              <FAQAccordion
                items={[
                  {
                    question:
                      "How do I crop my artwork for different print sizes without distortion?",
                    answer:
                      "Reframe it with a focal crop you control. Perfect Fit lets you drag to choose what stays in frame for the new ratio, shows a live preview, then exports every size in that ratio at 300 DPI — so the proportions you drew stay exactly as they are.",
                  },
                  {
                    question: "Will Perfect Fit stretch or distort my art?",
                    answer:
                      "No. Perfect Fit reframes by cropping to the target shape around the subject you choose, so your proportions are preserved exactly. That is what makes it a great fit for highly detailed work.",
                  },
                  {
                    question: "Can I control what gets kept in the frame?",
                    answer:
                      "Yes, that is the whole point. You drag to position the focal frame and see a live preview before exporting, so you decide exactly what stays and what falls outside the new ratio.",
                  },
                  {
                    question:
                      "Does distortion-free crop work for landscape art?",
                    answer:
                      "Yes. Perfect Fit reframes in portrait or landscape, so you can take a portrait piece to a landscape ratio (or the reverse) and frame it exactly how you want.",
                  },
                  {
                    question: "How is Perfect Fit different from a Size Pack?",
                    answer: (
                      <>
                        They do different jobs.{" "}
                        <Link
                          href="/etsy-print-sizes"
                          className="text-accent-light hover:underline"
                        >
                          Size Packs
                        </Link>{" "}
                        scale your whole image to every size in a ratio family
                        &mdash; fast, full detail, and the right call for most
                        art. Perfect Fit crops to a new shape with you choosing
                        the framing &mdash; reach for it when you want exact
                        control over the composition, your piece is highly
                        detailed, or you need a different ratio than the original.
                      </>
                    ),
                  },
                  {
                    question: "Is distortion-free crop free to use?",
                    answer:
                      "Yes. You can reframe and export on the free tier (exports are watermarked). Pro removes the watermark and lifts daily limits — see pricing for details.",
                  },
                ]}
              />
            </div>

            <ContextualCTA
              problem="Need your art in a different ratio, framed exactly how you want?"
              solution="Perfect Fit reframes it with full control — you drag to choose the framing, preview it live, and export every size. Under a minute."
              appUrl={appUrl}
              buttonText="Try Perfect Fit"
            />

            {/* ===== Related Pages ===== */}
            <RelatedPages currentSlug="distortion-free-crop" />
          </div>
        </Container>
      </section>
    </>
  );
}
