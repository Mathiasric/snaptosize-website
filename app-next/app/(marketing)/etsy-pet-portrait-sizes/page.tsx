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
  title: "Pet Portrait Sizes for Etsy Sellers — Complete Sizing Guide",
  description:
    "Pet portrait sizing guide for Etsy sellers. Best sizes for watercolor, digital, minimalist, royal, and memorial pet portraits. All ratio packs from one upload.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-pet-portrait-sizes",
  },
  openGraph: {
    title: "Pet Portrait Sizes for Etsy | SnapToSize",
    description:
      "Best sizes for pet portraits on Etsy. Sub-style breakdowns, single vs multi-pet sizing, frame-ready dimensions, and batch resizing from one upload.",
    url: "https://snaptosize.com/etsy-pet-portrait-sizes",
    images: [
      {
        url: "/assets/og/etsy-pet-portrait-sizes.png",
        width: 1200,
        height: 630,
        alt: "Pet Portrait Sizes for Etsy — Sizing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Portrait Sizes for Etsy Sellers — Complete Sizing Guide",
    description:
      "Best sizes for pet portraits on Etsy. Sub-style breakdowns, single vs multi-pet sizing, frame-ready dimensions, and batch resizing from one upload.",
    images: ["/assets/og/etsy-pet-portrait-sizes.png"],
  },
};

export default function EtsyPetPortraitSizesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Pet Portrait Sizes for Etsy Sellers — Complete Sizing Guide",
    description:
      "Complete pet portrait sizing guide for Etsy sellers. Covers best-selling sizes, sub-style breakdowns (watercolor, digital illustration, minimalist, royal, pop art, memorial), single vs multi-pet composition sizing, frame-ready dimensions, common mistakes, and how to generate every size from one upload.",
    url: "https://snaptosize.com/etsy-pet-portrait-sizes",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
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
        name: "Pet Portrait Sizes",
        item: "https://snaptosize.com/etsy-pet-portrait-sizes",
      },
    ],
  };

  const faqItems = [
    {
      question: "What is the best-selling pet portrait size on Etsy?",
      answer:
        "8\u00d710 is the number one seller for pet portraits, followed closely by 11\u00d714. However, memorial pet portraits and royal or renaissance styles over-index on larger sizes like 16\u00d720 and 18\u00d724, where buyers want the portrait displayed prominently. Offering at minimum 5\u00d77, 8\u00d710, 11\u00d714, and 16\u00d720 covers over 80% of buyer demand.",
    },
    {
      question:
        "How many sizes should I offer for a pet portrait listing?",
      answer:
        "Top pet portrait sellers offer 8\u201312 sizes per listing. At minimum include 5\u00d77, 8\u00d710, 11\u00d714, 16\u00d720, and A4. More sizes increase perceived value and reduce \u201cdo you have this in X size?\u201d messages. SnapToSize generates all standard sizes from one upload.",
    },
    {
      question:
        "Should pet portraits be vertical or horizontal?",
      answer:
        "Single pet portraits (head and shoulders) are almost always vertical \u2014 this matches how we naturally frame a face. Full-body portraits of long dogs like dachshunds or greyhounds may work better horizontal. Multi-pet portraits with two to three pets side by side work well in landscape or square formats. Offer both orientations as separate listings to maximize catalog coverage.",
    },
    {
      question: "What size is best for a pet memorial portrait?",
      answer:
        "Memorial pet portraits are purchased as meaningful tributes, so buyers lean toward larger sizes: 11\u00d714, 16\u00d720, and 18\u00d724 are the most popular for memorials. These sizes are large enough to be a room focal point without being overwhelming. Always include at least one large format option in memorial portrait listings.",
    },
    {
      question:
        "Do I need square sizes for pet portraits?",
      answer:
        "Yes, if you sell pop art, cartoon, or Instagram-style pet portraits. Square formats like 10\u00d710, 12\u00d712, and 16\u00d716 are popular for these sub-styles because they match social media aesthetics and modern gallery wall trends. For traditional and watercolor portraits, square is less common \u2014 4:5 and 3:4 ratios dominate.",
    },
    {
      question:
        "What resolution do I need for large pet portrait prints?",
      answer:
        "300 DPI is the industry standard for print-quality output. For a 16\u00d720 print, that means your source file needs to be at least 4800\u00d76000 pixels. For 24\u00d736, you need 7200\u00d710800 pixels. Start with the highest resolution source possible \u2014 SnapToSize maintains 300 DPI across all output sizes, but cannot upscale a low-resolution original.",
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
    "https://app.snaptosize.com/app/quick-export?source=seo_pet-portrait&kind=guide";

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
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #1a1510 0%, #18140e 25%, #15120d 50%, #171410 75%, #131110 100%)",
        }}
      >
        {/* Warm ambient glow */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 40%, rgba(245,158,11,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(217,119,6,0.4) 0%, transparent 45%)",
          }}
        />

        {/* Amber glow — top right */}
        <div
          className="absolute top-[-10%] right-[15%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #f59e0b, transparent 70%)",
          }}
        />
        {/* Copper glow — bottom left */}
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #d97706, transparent 70%)",
          }}
        />

        {/* CSS-only Paw Print Frame Wall — right side */}
        <div className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="relative"
            style={{ width: "380px", height: "380px" }}
          >
            {/* Frame 1 — large, 16x20 proportions */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "130px",
                height: "162px",
                top: "10px",
                left: "0px",
                border: "2px solid rgba(245,158,11,0.15)",
                background: "rgba(245,158,11,0.03)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                transform: "rotate(-2deg)",
              }}
            >
              {/* Paw print inside frame 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "50px", height: "55px" }}>
                {/* Pad */}
                <div className="absolute" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)", width: "26px", height: "20px", borderRadius: "40% 40% 50% 50%", background: "rgba(245,158,11,0.18)" }} />
                {/* Toe 1 */}
                <div className="absolute rounded-full" style={{ top: "0", left: "4px", width: "10px", height: "10px", background: "rgba(245,158,11,0.15)" }} />
                {/* Toe 2 */}
                <div className="absolute rounded-full" style={{ top: "2px", left: "17px", width: "9px", height: "9px", background: "rgba(245,158,11,0.15)" }} />
                {/* Toe 3 */}
                <div className="absolute rounded-full" style={{ top: "2px", left: "29px", width: "9px", height: "9px", background: "rgba(245,158,11,0.15)" }} />
                {/* Toe 4 */}
                <div className="absolute rounded-full" style={{ top: "0", left: "38px", width: "10px", height: "10px", background: "rgba(245,158,11,0.15)" }} />
              </div>
            </div>

            {/* Frame 2 — small square, 8x10 proportions */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "90px",
                height: "112px",
                top: "30px",
                left: "155px",
                border: "2px solid rgba(217,119,6,0.15)",
                background: "rgba(217,119,6,0.03)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                transform: "rotate(1.5deg)",
              }}
            >
              {/* Paw print inside frame 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "36px", height: "40px" }}>
                <div className="absolute" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)", width: "19px", height: "15px", borderRadius: "40% 40% 50% 50%", background: "rgba(217,119,6,0.20)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "2px", width: "7px", height: "7px", background: "rgba(217,119,6,0.17)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "11px", width: "7px", height: "7px", background: "rgba(217,119,6,0.17)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "20px", width: "7px", height: "7px", background: "rgba(217,119,6,0.17)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "27px", width: "7px", height: "7px", background: "rgba(217,119,6,0.17)" }} />
              </div>
            </div>

            {/* Frame 3 — wide, 11x14 proportions */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "108px",
                height: "85px",
                top: "0px",
                right: "10px",
                border: "2px solid rgba(245,158,11,0.12)",
                background: "rgba(245,158,11,0.02)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                transform: "rotate(-1deg)",
              }}
            >
              {/* Paw print inside frame 3 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "30px", height: "33px" }}>
                <div className="absolute" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)", width: "16px", height: "12px", borderRadius: "40% 40% 50% 50%", background: "rgba(245,158,11,0.16)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "1px", width: "6px", height: "6px", background: "rgba(245,158,11,0.13)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "8px", width: "6px", height: "6px", background: "rgba(245,158,11,0.13)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "16px", width: "6px", height: "6px", background: "rgba(245,158,11,0.13)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "23px", width: "6px", height: "6px", background: "rgba(245,158,11,0.13)" }} />
              </div>
            </div>

            {/* Frame 4 — tall, 5x7 proportions */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "75px",
                height: "105px",
                bottom: "30px",
                left: "50px",
                border: "2px solid rgba(217,119,6,0.13)",
                background: "rgba(217,119,6,0.02)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                transform: "rotate(2deg)",
              }}
            >
              {/* Paw print inside frame 4 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "28px", height: "32px" }}>
                <div className="absolute" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)", width: "15px", height: "11px", borderRadius: "40% 40% 50% 50%", background: "rgba(217,119,6,0.18)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "1px", width: "6px", height: "6px", background: "rgba(217,119,6,0.15)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "7px", width: "5px", height: "5px", background: "rgba(217,119,6,0.15)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "14px", width: "5px", height: "5px", background: "rgba(217,119,6,0.15)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "20px", width: "6px", height: "6px", background: "rgba(217,119,6,0.15)" }} />
              </div>
            </div>

            {/* Frame 5 — medium, 18x24 proportions */}
            <div
              className="absolute rounded-sm"
              style={{
                width: "100px",
                height: "133px",
                bottom: "10px",
                right: "25px",
                border: "2px solid rgba(245,158,11,0.10)",
                background: "rgba(245,158,11,0.02)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                transform: "rotate(-1.5deg)",
              }}
            >
              {/* Paw print inside frame 5 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "38px", height: "42px" }}>
                <div className="absolute" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)", width: "20px", height: "16px", borderRadius: "40% 40% 50% 50%", background: "rgba(245,158,11,0.14)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "2px", width: "8px", height: "8px", background: "rgba(245,158,11,0.12)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "12px", width: "7px", height: "7px", background: "rgba(245,158,11,0.12)" }} />
                <div className="absolute rounded-full" style={{ top: "1px", left: "22px", width: "7px", height: "7px", background: "rgba(245,158,11,0.12)" }} />
                <div className="absolute rounded-full" style={{ top: "0", left: "30px", width: "8px", height: "8px", background: "rgba(245,158,11,0.12)" }} />
              </div>
            </div>

            {/* Size labels — floating, monospaced */}
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                top: "178px",
                left: "45px",
                color: "rgba(245,158,11,0.30)",
              }}
            >
              16&times;20
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "18px",
                left: "175px",
                color: "rgba(217,119,6,0.28)",
              }}
            >
              8&times;10
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                top: "88px",
                right: "5px",
                color: "rgba(245,158,11,0.25)",
              }}
            >
              11&times;14
            </div>
            <div
              className="absolute text-[7px] font-mono tracking-wider"
              style={{
                bottom: "120px",
                left: "30px",
                color: "rgba(217,119,6,0.25)",
              }}
            >
              5&times;7
            </div>
            <div
              className="absolute text-[8px] font-mono tracking-wider"
              style={{
                bottom: "0px",
                right: "55px",
                color: "rgba(245,158,11,0.22)",
              }}
            >
              18&times;24
            </div>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 max-w-[680px]">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="h-px w-8"
                style={{ background: "rgba(245,158,11,0.5)" }}
              />
              <span
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: "rgba(245,158,11,0.7)" }}
              >
                Niche Guide
              </span>
            </div>

            <h1 className="font-bold tracking-tight mb-5">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{ color: "#f5f0eb" }}
              >
                Pet Portrait Sizes for Etsy Sellers
              </span>
              <span
                className="block text-lg md:text-xl lg:text-2xl font-semibold"
                style={{ color: "rgba(245,240,235,0.6)" }}
              >
                Every style, every size, one&nbsp;upload
              </span>
            </h1>
            <p
              className="text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(245,240,235,0.5)" }}
            >
              Pet portraits are one of Etsy&rsquo;s most beloved art categories
              &mdash; and every sub-style has different sizing sweet spots. This
              guide covers best-selling sizes, sub-style breakdowns, single vs
              multi-pet composition sizing, and how to generate every size from
              a single upload.
            </p>

            <div className="mb-10">
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Generate All Pet Portrait Sizes
                </Button>
              </a>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(245,240,235,0.35)" }}
              >
                Free &rarr; upload once, get every size at 300&nbsp;DPI.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(245,240,235,0.6)" }}
                >
                  Up to 70 print-ready files
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(245,240,235,0.6)" }}
                >
                  All 5 ratio packs
                </span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-sm border text-[11px] sm:text-xs sm:px-2.5"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  borderColor: "rgba(167,139,250,0.15)",
                }}
              >
                <Check
                  className="h-3 w-3 flex-shrink-0"
                  style={{ color: "#a78bfa" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "rgba(245,240,235,0.6)" }}
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
            <QuickAnswer question="What sizes work best for pet portraits on Etsy?">
              <strong>8&times;10, 11&times;14, and 16&times;20</strong> are the top-selling pet portrait sizes. Memorial and royal-style portraits over-index on larger sizes like 18&times;24. Offer at least five sizes per listing to cover the widest range of buyers.
            </QuickAnswer>

            {/* --- H2 1: Why Pet Portraits Need Their Own Sizing Strategy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Pet Portraits Need Their Own Sizing Strategy
              </h2>
              <p className="text-foreground-60 mb-4">
                Pet portraits are not generic wall art. The subject &mdash; a
                beloved pet &mdash; creates a level of emotional attachment that
                drives buyers toward larger, premium display sizes. Unlike
                abstract or botanical prints, pet portraits have a clear focal
                point: the pet&rsquo;s face and eyes. That focal point must
                remain centered and sharp across every size variant you offer.
              </p>
              <p className="text-foreground-60 mb-4">
                Cropping a pet portrait carelessly risks cutting off ears, tails,
                or paws &mdash; details that buyers notice immediately. A golden
                retriever&rsquo;s ears clipped at{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>{" "}
                that looked fine at{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>{" "}
                will generate a refund request, not a five-star review.
              </p>
              <p className="text-foreground-60">
                Generic size guides fail pet portrait sellers because they
                don&rsquo;t account for the emotional weight of the purchase
                &mdash; especially memorial portraits, where buyers want a
                prominent tribute, not a small desk frame. This guide covers
                sizing strategy tailored specifically to pet portrait sub-styles,
                compositions, and buyer expectations. For the broader picture,
                see the{" "}
                <Link
                  href="/etsy-print-sizes"
                  className="text-accent-light hover:underline"
                >
                  complete Etsy print size guide
                </Link>
                .
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src="/assets/visuals/etsy-pet-portrait-mockup.jpg" alt="Cozy living room with three framed pet portraits above a cream sofa — watercolor golden retriever, detailed tabby cat illustration, and minimalist line art of a small dog" width={1200} height={800} className="w-full h-auto" loading="lazy" />
            </div>

            {/* --- H2 2: The 8 Best-Selling Pet Portrait Sizes on Etsy --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                The 8 Best-Selling Pet Portrait Sizes on Etsy
              </h2>
              <p className="text-foreground-60 mb-6">
                These sizes cover the core of pet portrait buyer demand. Every
                pixel dimension is at 300 DPI &mdash; the professional print
                standard. The{" "}
                <Link
                  href="/etsy-8x10-print-size"
                  className="text-accent-light hover:underline"
                >
                  8&times;10
                </Link>{" "}
                and{" "}
                <Link
                  href="/etsy-11x14-print-size"
                  className="text-accent-light hover:underline"
                >
                  11&times;14
                </Link>{" "}
                dominate overall sales, but{" "}
                <Link
                  href="/etsy-16x20-print-size"
                  className="text-accent-light hover:underline"
                >
                  16&times;20
                </Link>{" "}
                is the fastest-growing size as buyers increasingly want pet art
                as a room focal point.
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
                          href="/etsy-5x7-print-size"
                          className="text-accent-light hover:underline"
                        >
                          5&times;7
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        1500&times;2100
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Desk display, shelf, gift
                      </td>
                    </tr>
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
                        #1 seller. Bedroom, home office, hallway
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-11x14-print-size"
                          className="text-accent-light hover:underline"
                        >
                          11&times;14
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3300&times;4200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        Extras
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        #2 seller. Photo mat standard, versatile mid-size
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        12&times;16
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        3600&times;4800
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        European frames. Bridge between mid and large
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
                        Fastest growing. Living room focal point, memorials
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">
                        <Link
                          href="/etsy-18x24-print-size"
                          className="text-accent-light hover:underline"
                        >
                          18&times;24
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-foreground-60">
                        5400&times;7200
                      </td>
                      <td className="py-3 px-4 text-foreground-60">3:4</td>
                      <td className="py-3 px-4 text-foreground-60">
                        Large format. Memorial tributes, statement pieces
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
                        International poster. Pet portraits sell globally
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground-60 text-sm">
                Pet portrait sales skew toward mid-to-large sizes compared to
                other Etsy art niches. Buyers purchasing a portrait of their pet
                want it displayed prominently &mdash; not tucked away on a small
                shelf. For the complete pixel reference, see our{" "}
                <Link
                  href="/best-resolution-for-etsy-printables"
                  className="text-accent-light hover:underline"
                >
                  300 DPI resolution guide
                </Link>
                .
              </p>
            </div>

            {/* --- CTA 1: Efficiency angle — after best-selling sizes --- */}
            <ContextualCTA
              problem="Creating 8 size files for every pet portrait manually? That's hours of repetitive work per listing."
              solution="Upload one high-res portrait and SnapToSize generates every size instantly. All ratio packs, organized ZIPs, ready for Etsy."
              buttonText="Generate All Pet Portrait Sizes Free"
              appUrl="https://app.snaptosize.com/app/quick-export?source=seo_petportrait&kind=sizes"
            />

            {/* --- H2 3: Sizing by Pet Portrait Sub-Style --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Sizing by Pet Portrait Sub-Style
              </h2>
              <p className="text-foreground-60 mb-8">
                Different pet portrait styles attract different buyers and
                perform best at different sizes. Match your size offerings to
                your specific style for higher conversions and fewer
                &ldquo;do you have this in X size?&rdquo; messages.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Watercolor */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-sky-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.3), rgba(56,189,248,0.1))", border: "1.5px solid rgba(56,189,248,0.4)" }} />
                    Watercolor Pet Portraits
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Delicate brushwork and soft washes shine at mid sizes where
                    individual fur strokes are visible. A watercolor golden
                    retriever at 11&times;14 captures enough detail to show
                    texture without overwhelming the composition.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      12&times;16 (3:4)
                    </span>
                  </div>
                </div>

                {/* Digital Illustration */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-teal-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 flex-shrink-0 rounded-md" style={{ background: "linear-gradient(135deg, rgba(45,212,191,0.3), rgba(45,212,191,0.1))", border: "1.5px solid rgba(45,212,191,0.4)" }} />
                    Digital Illustration / Cartoon
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Bold outlines and flat colors scale beautifully at any size.
                    Offer the full range from{" "}
                    <Link href="/etsy-5x7-print-size" className="text-accent-light hover:underline">5&times;7</Link>{" "}
                    desk prints through large-format wall art. Clean lines stay
                    crisp even at poster dimensions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      All ratios
                    </span>
                  </div>
                </div>

                {/* Minimalist Line Art */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-neutral-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 flex-shrink-0 rounded-sm" style={{ background: "linear-gradient(135deg, rgba(163,163,163,0.25), rgba(163,163,163,0.08))", border: "1.5px solid rgba(163,163,163,0.4)" }} />
                    Minimalist Line Art
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Single continuous lines and simple contours have the most
                    visual impact at smaller sizes where the negative space
                    feels intentional. Popular for{" "}
                    <Link href="/etsy-minimalist-wall-art-sizes" className="text-accent-light hover:underline">minimalist wall art</Link>{" "}
                    collections and gallery wall sets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-5x7-print-size" className="hover:underline">5&times;7</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-8x10-print-size" className="hover:underline">8&times;10</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A5
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      A4
                    </span>
                  </div>
                </div>

                {/* Royal / Renaissance */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-amber-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 flex-shrink-0 rounded-sm" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(245,158,11,0.1))", border: "1.5px solid rgba(245,158,11,0.4)" }} />
                    Royal / Renaissance
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Pets in regal attire demand large, commanding formats that
                    match the grandeur of the concept. Small sizes undercut the
                    humor and drama. These are statement pieces that buyers hang
                    prominently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link> (3:4)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-24x36-print-size" className="hover:underline">24&times;36</Link>
                    </span>
                  </div>
                </div>

                {/* Pop Art */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-pink-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(135deg, rgba(244,114,182,0.3), rgba(244,114,182,0.1))", border: "1.5px solid rgba(244,114,182,0.4)", borderRadius: "50%" }} />
                    Pop Art
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Bold colors and graphic treatments work at large sizes and
                    especially in square formats. Pop art pet portraits are popular
                    for Instagram-style gallery walls and modern interiors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link>+
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      Square (1:1)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link>
                    </span>
                  </div>
                </div>

                {/* Memorial */}
                <div className="rounded-lg border border-border bg-surface p-6 border-l-[3px] border-l-purple-400">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 flex-shrink-0 rounded-sm" style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.3), rgba(167,139,250,0.1))", border: "1.5px solid rgba(167,139,250,0.4)" }} />
                    Memorial Portraits
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Memorial portraits are purchased as meaningful tributes.
                    Buyers want their pet remembered at a size that commands
                    attention &mdash; not hidden on a nightstand. Always include
                    at least one large-format option in memorial listings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-11x14-print-size" className="hover:underline">11&times;14</Link>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-16x20-print-size" className="hover:underline">16&times;20</Link> (4:5)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light">
                      <Link href="/etsy-18x24-print-size" className="hover:underline">18&times;24</Link> (3:4)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- H2 4: Single Pet vs Multi-Pet — How Composition Affects Sizing --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Single Pet vs Multi-Pet &mdash; How Composition Affects Sizing
              </h2>
              <p className="text-foreground-60 mb-4">
                The number of pets in a portrait changes which sizes and ratios
                work best. A single pet head-and-shoulders shot has very
                different proportional needs than three cats sitting side by side.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Single Pet &mdash; Head &amp; Shoulders
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    The classic pet portrait composition. Works best in 4:5 and
                    3:4 portrait ratios that frame the face naturally, just like
                    a human portrait. These ratios give enough space above the
                    head and below the chest without wasting canvas.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Best sizes:</strong>{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>,{" "}
                    <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link>,{" "}
                    12&times;16,{" "}
                    <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link>
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Single Pet &mdash; Full Body
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Full-body portraits of standing or sitting pets need taller
                    2:3 ratios to avoid cropping paws or tails. Long dogs like
                    dachshunds and greyhounds may work better in landscape
                    orientation at these sizes.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Best sizes:</strong> 8&times;12, 12&times;18,{" "}
                    <Link href="/etsy-20x30-print-size" className="text-accent-light hover:underline">20&times;30</Link>{" "}
                    (2:3 ratio pack)
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Multi-Pet Portraits (2&ndash;3 Pets)
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Two or three pets arranged side by side need wider formats.
                    Landscape orientation and square formats become essential
                    &mdash; portrait-only sizing will force awkward cropping or
                    excessive empty space above and below the subjects.
                  </p>
                  <p className="text-foreground-60 text-sm">
                    <strong>Best sizes:</strong> Landscape versions of{" "}
                    <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>,{" "}
                    <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link>,{" "}
                    plus square formats (1:1). See our{" "}
                    <Link href="/etsy-gallery-wall-print-sizes" className="text-accent-light hover:underline">gallery wall sizing guide</Link>{" "}
                    for multi-pet gallery wall sets.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Pet with Owner
                  </h3>
                  <p className="text-foreground-60 text-sm mb-3">
                    Pet-with-owner portraits need at least{" "}
                    <Link href="/etsy-11x14-print-size" className="text-accent-light hover:underline">11&times;14</Link>{" "}
                    to show both subjects clearly. Smaller sizes force the
                    artist to shrink both faces below comfortable viewing
                    distance. These compositions also work well at{" "}
                    <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link>{" "}
                    and above.
                  </p>
                </div>
              </div>
            </div>

            {/* --- H2 5: Frame-Ready Sizes — Why Standard Dimensions Matter --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frame-Ready Sizes &mdash; Why Standard Dimensions Matter for Pet Portraits
              </h2>
              <p className="text-foreground-60 mb-4">
                Pet portrait buyers frame their purchases at a higher rate than
                almost any other Etsy art category. This is a portrait of a
                family member &mdash; it goes on the wall, not in a drawer.
                Offering non-standard sizes frustrates buyers who cannot find
                matching frames at their local store.
              </p>
              <p className="text-foreground-60 mb-6">
                The top pet portrait sellers on Etsy stick to standard frame
                sizes exclusively. Here are the ten most common ready-made frame
                dimensions:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {[
                  { size: "5\u00d77", href: "/etsy-5x7-print-size" },
                  { size: "8\u00d710", href: "/etsy-8x10-print-size" },
                  { size: "11\u00d714", href: "/etsy-11x14-print-size" },
                  { size: "12\u00d716", href: null },
                  { size: "16\u00d720", href: "/etsy-16x20-print-size" },
                  { size: "18\u00d724", href: "/etsy-18x24-print-size" },
                  { size: "24\u00d736", href: "/etsy-24x36-print-size" },
                  { size: "A4", href: "/etsy-a4-print-size" },
                  { size: "A3", href: "/etsy-a3-print-size" },
                  { size: "A2", href: "/etsy-a2-print-size" },
                ].map((item) => (
                  <div
                    key={item.size}
                    className="rounded-lg border border-border bg-surface p-3 text-center"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-accent-light hover:underline font-semibold text-sm"
                      >
                        {item.size}
                      </Link>
                    ) : (
                      <span className="font-semibold text-sm">{item.size}</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-foreground-60 text-sm">
                Every size above is available as a standard ready-made frame at
                most retailers. Sticking to these dimensions means your buyers
                can print and frame the same day they download. For more on
                how to{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  resize images for Etsy
                </Link>
                , see our process guide.
              </p>
            </div>

            {/* --- H2 6: Common Sizing Mistakes Pet Portrait Sellers Make --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Common Sizing Mistakes Pet Portrait Sellers Make
              </h2>
              <p className="text-foreground-60 mb-6">
                These five mistakes cost pet portrait sellers sales every day.
                Each one is easy to fix once you know what to look for.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-surface p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Only offering 8&times;10
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Memorial buyers want large 16&times;20+ tributes. Royal
                        portrait buyers expect statement-size formats. Offering
                        only{" "}
                        <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>{" "}
                        means losing premium buyers to competitors who offer
                        the full range.
                      </p>
                      <p className="text-sm">
                        <Check className="h-3.5 w-3.5 inline mr-1 text-teal-400" />
                        <span className="text-foreground-60">
                          <strong className="text-foreground">Fix:</strong> Offer
                          at least 5&times;7 through 18&times;24 for every
                          listing.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Cropping too tight on the pet&rsquo;s head
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        A head-only crop at one ratio cuts ears or adds awkward
                        whitespace when resized to a different ratio. The
                        composition breaks across size variants.
                      </p>
                      <p className="text-sm">
                        <Check className="h-3.5 w-3.5 inline mr-1 text-teal-400" />
                        <span className="text-foreground-60">
                          <strong className="text-foreground">Fix:</strong> Leave
                          generous breathing room around the pet in your source
                          file. SnapToSize resizes without cropping, preserving
                          the full composition at every size.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Ignoring square formats
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Pop art and cartoon pet portraits are hugely popular in
                        square formats. Instagram-style gallery walls also demand
                        1:1 ratios. Skipping squares means missing an entire
                        buyer segment.
                      </p>
                      <p className="text-sm">
                        <Check className="h-3.5 w-3.5 inline mr-1 text-teal-400" />
                        <span className="text-foreground-60">
                          <strong className="text-foreground">Fix:</strong> Include
                          square sizes (10&times;10, 12&times;12, 16&times;16)
                          for pop art and cartoon styles.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Skipping A-series sizes for international buyers
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        Pet portraits are globally popular. Buyers in the UK, EU,
                        and Australia expect{" "}
                        <Link href="/etsy-a4-print-size" className="text-accent-light hover:underline">A4</Link>{" "}
                        and{" "}
                        <Link href="/etsy-a3-print-size" className="text-accent-light hover:underline">A3</Link>{" "}
                        frame sizes. Missing A-series means losing international
                        buyers.
                      </p>
                      <p className="text-sm">
                        <Check className="h-3.5 w-3.5 inline mr-1 text-teal-400" />
                        <span className="text-foreground-60">
                          <strong className="text-foreground">Fix:</strong> Include
                          A4 and A3 at minimum. SnapToSize&rsquo;s ISO pack
                          generates A5 through A1 automatically.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Low-resolution source files
                      </h3>
                      <p className="text-foreground-60 text-sm mb-2">
                        A source file that looks fine at{" "}
                        <Link href="/etsy-8x10-print-size" className="text-accent-light hover:underline">8&times;10</Link>{" "}
                        may pixelate badly at{" "}
                        <Link href="/etsy-16x20-print-size" className="text-accent-light hover:underline">16&times;20</Link>{" "}
                        or above. Pet portrait detail &mdash; individual fur
                        strands, eye reflections &mdash; reveals resolution
                        problems at larger sizes.
                      </p>
                      <p className="text-sm">
                        <Check className="h-3.5 w-3.5 inline mr-1 text-teal-400" />
                        <span className="text-foreground-60">
                          <strong className="text-foreground">Fix:</strong> Always
                          work at 300 DPI for your largest intended output size.
                          Check our{" "}
                          <Link href="/best-resolution-for-etsy-printables" className="text-accent-light hover:underline">resolution guide</Link>{" "}
                          for exact pixel requirements.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- H2 7: How to Generate All Pet Portrait Sizes from One Upload --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Generate All Pet Portrait Sizes from One Upload
              </h2>
              <p className="text-foreground-60 mb-4">
                A pet portrait seller offering ten sizes across fifty portrait
                listings faces five hundred individual resize operations.
                Manually creating each file in an image editor is tedious,
                error-prone, and eats into time you could spend creating new
                portraits.
              </p>
              <p className="text-foreground-60 mb-6">
                SnapToSize reduces this to fifty uploads. Here is the workflow:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-sm font-semibold text-teal-400">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Upload your pet portrait</h3>
                    <p className="text-foreground-60 text-sm">
                      Upload one high-resolution source file. Start with the
                      largest size you want to offer &mdash; SnapToSize scales
                      down, never up. Leave generous space around the pet for
                      ratio flexibility.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-sm font-semibold text-teal-400">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Select your ratio packs</h3>
                    <p className="text-foreground-60 text-sm">
                      Choose from 4:5, 3:4, 2:3, ISO (A-series), and Extras.
                      For pet portraits, 4:5 and 3:4 cover the core demand.
                      Add ISO for international reach. Each pack generates
                      multiple sizes automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-sm font-semibold text-teal-400">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Download organized ZIPs</h3>
                    <p className="text-foreground-60 text-sm">
                      Every output is 300 DPI, organized by ratio pack, and
                      under 20 MB per ZIP &mdash; Etsy&rsquo;s file size limit.
                      No cropping &mdash; the full composition is preserved at
                      every size. Upload directly to your Etsy listing.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-foreground-60 text-sm">
                Estimated time savings: 1&ndash;2 hours of manual resizing per
                portrait reduced to about 30 seconds. For the complete process,
                see our guide on{" "}
                <Link
                  href="/how-to-resize-images-for-etsy"
                  className="text-accent-light hover:underline"
                >
                  how to resize images for Etsy
                </Link>
                .
              </p>
            </div>

            {/* --- FinalCTA --- */}
            <div>
              <FinalCTA
                heading="Start Resizing Your Pet Portraits"
                stat="Up to 70 print-ready files from a single upload"
                description="Upload your pet portrait once and get every size your buyers need. Portrait, landscape, and square. No cropping, 300 DPI, organized ZIPs ready for Etsy."
                buttonText="Resize Pet Portraits Free"
                appUrl="https://app.snaptosize.com/app/quick-export?source=seo_petportrait&kind=cta"
              />
            </div>

            {/* --- FAQ --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                FAQ &mdash; Pet Portrait Sizes for Etsy
              </h2>
              <FAQAccordion items={faqItems} />
            </div>

            {/* --- Related Pages --- */}
            <RelatedPages currentSlug="etsy-pet-portrait-sizes" />
          </div>
        </Container>
      </section>
    </>
  );
}
