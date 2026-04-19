import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { Button } from "@/components/Button";
import { Check, AlertTriangle, ArrowRight, FileText, Archive, Zap } from "lucide-react";

const CTA_URL =
  "https://app.snaptosize.com?source=seo_etsy-digital-download-file-size&kind=guide";

export const metadata: Metadata = {
  title: "Etsy Digital Download File Size Guide (2026)",
  description:
    "Etsy allows 5 files per listing, each max 20MB. Learn what file sizes work for 300 DPI digital prints and how to stay under Etsy's limits.",
  openGraph: {
    title: "Etsy Digital Download File Size Guide (2026)",
    description:
      "Etsy allows 5 files per listing, each max 20MB. Learn what file sizes work for 300 DPI digital prints and how to stay under Etsy's limits.",
    url: "https://snaptosize.com/etsy-digital-download-file-size",
    type: "article",
    images: [
      {
        url: "/assets/og/etsy-digital-download-file-size.png",
        width: 1200,
        height: 630,
        alt: "Etsy Digital Download File Size Guide",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptosize.com/etsy-digital-download-file-size",
  },
};

const faqItems = [
  {
    question: "What is the maximum file size for Etsy digital downloads?",
    answer:
      "Each file in an Etsy digital download listing can be a maximum of 20MB. You can attach up to 5 files per listing, giving you a total of up to 100MB of downloads per listing.",
  },
  {
    question: "How many files can I attach to an Etsy digital listing?",
    answer:
      "Etsy allows up to 5 files per digital listing. This is why many sellers use ZIP files — you can package multiple sizes or formats into a single file and stay within the 5-file limit.",
  },
  {
    question: "How large is a 300 DPI JPEG for an 8×10 print?",
    answer:
      "A 300 DPI JPEG at 8×10 inches (2400×3000 pixels) is typically 3–6MB depending on image complexity. High-detail artwork like photography can reach 8–12MB, while simpler designs like typography or minimal line art are usually under 4MB.",
  },
  {
    question: "Should I use JPEG or PNG for Etsy digital downloads?",
    answer:
      "JPEG is strongly recommended for Etsy digital downloads. PNG files are 3–5x larger than equivalent JPEGs at 300 DPI, making it very easy to exceed Etsy's 20MB limit. JPEG at quality 90–95 is visually identical to PNG for print-ready art.",
  },
  {
    question: "What happens if my file is too large to upload to Etsy?",
    answer:
      "Etsy will show an error: 'File size exceeds the 20MB limit.' The upload will fail. The fix is to switch from PNG to JPEG, reduce image dimensions slightly, or compress the file. For print-ready art, JPEG at quality 90 is sufficient.",
  },
  {
    question: "Will a ZIP file count as one of my 5 Etsy files?",
    answer:
      "Yes — a ZIP file counts as exactly one of your 5 Etsy files, regardless of how many files it contains. This is how SnapToSize's ratio-pack ZIPs work: 5 ZIPs (one per ratio group) = 5 Etsy files, each under 20MB.",
  },
  {
    question: "How do I keep my print files under 20MB without losing quality?",
    answer:
      "Save as JPEG at quality 90–95 instead of PNG. Avoid embedding ICC profiles or large metadata. For very large prints (24×36 at 300 DPI), slightly reducing to 200 DPI is acceptable — most buyers' printers top out at 200 DPI anyway.",
  },
];

const jsonLd = {
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Digital Download File Size Guide (2026)",
    description:
      "Etsy allows 5 files per listing, each max 20MB. Learn what file sizes work for 300 DPI digital prints and how to stay under Etsy's limits.",
    datePublished: "2026-04-19",
    dateModified: "2026-04-19",
    author: { "@type": "Organization", name: "SnapToSize" },
    publisher: {
      "@type": "Organization",
      name: "SnapToSize",
      logo: {
        "@type": "ImageObject",
        url: "https://snaptosize.com/assets/favicon/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://snaptosize.com/etsy-digital-download-file-size",
    },
  },
  breadcrumb: {
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
        name: "Etsy Digital Download File Size",
        item: "https://snaptosize.com/etsy-digital-download-file-size",
      },
    ],
  },
  faq: {
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
  },
  howto: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Keep Etsy Digital Download Files Under 20MB",
    description: "Four steps to fix or prevent Etsy digital download files that exceed the 20MB limit.",
    step: [
      { "@type": "HowToStep", name: "Switch from PNG to JPEG", text: "Save as JPEG at quality 90-95 instead of PNG. This alone reduces file size by 60-80% with no visible difference at print." },
      { "@type": "HowToStep", name: "Remove embedded metadata", text: "Strip ICC color profiles and EXIF data using any image editor. This can save 1-2MB per file." },
      { "@type": "HowToStep", name: "Use ZIP packaging", text: "Package multiple size files into a single ZIP. ZIP compression on JPEG saves 5-15% additional space and lets you bundle many sizes into one Etsy file slot." },
      { "@type": "HowToStep", name: "Use SnapToSize", text: "Upload your artwork once. SnapToSize generates all 70 sizes as optimized JPEGs, automatically keeps each ZIP under 20MB with progressive quality fallback." },
    ],
  },
};

export default function EtsyDigitalDownloadFileSizePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.howto) }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">

        {/* ── HERO ── */}
        <section className="pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-5 text-xs text-foreground-60 flex items-center gap-1.5">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/etsy-print-sizes" className="hover:text-foreground transition-colors">Etsy Print Sizes</Link>
              <span>/</span>
              <span className="text-foreground">Etsy File Size</span>
            </nav>

            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-accent-light">
              Etsy File Limits — Complete Guide
            </p>

            <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Etsy Digital Download{" "}
              <span className="text-accent-light">File Size</span>{" "}
              — What Sellers Need to Know
            </h1>

            <p className="mb-8 text-lg text-foreground-60 md:text-xl max-w-[680px]">
              Etsy limits each digital file to 20MB and each listing to 5 files. Here&apos;s exactly what that means for your 300 DPI print files — and how to stay within the limits without sacrificing quality.
            </p>

            {/* Trust pills */}
            <div className="mb-10 flex flex-wrap gap-3">
              {[
                { icon: <Check className="h-4 w-4" />, label: "20MB limit explained" },
                { icon: <Check className="h-4 w-4" />, label: "JPEG vs PNG guide" },
                { icon: <Check className="h-4 w-4" />, label: "Exact file sizes at 300 DPI" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent-light/30 bg-accent-light/10 px-3 py-1 text-sm text-accent-light"
                >
                  {pill.icon}
                  {pill.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={CTA_URL}>
                <Button>
                  Generate All Sizes — Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/print-sizes-at-300-dpi">
                <Button variant="secondary">
                  See 300 DPI Pixel Chart
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden md:block">
            <img
              src="/assets/visuals/etsy-digital-download-file-size-lifestyle.jpg"
              alt="Etsy seller viewing organized digital download file sizes on laptop"
              className="rounded-2xl w-full object-cover"
              style={{ maxHeight: "480px" }}
            />
          </div>
          </div>
        </section>

        {/* ── QUICK ANSWER BOX ── */}
        <section className="mb-16">
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, #0d1f1e 0%, #091918 100%)",
              border: "1px solid rgba(45,212,191,0.25)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0 rounded-lg bg-accent-light/20 p-2">
                <Zap className="h-5 w-5 text-accent-light" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-light">
                  Quick Answer
                </p>
                <p className="text-base text-foreground md:text-lg">
                  <strong>Etsy allows up to 5 files per listing, each max 20MB.</strong> Digital prints at 300 DPI typically range from 1–15MB as JPEG. PNG files are 3–5× larger and routinely exceed the limit — use JPEG for all Etsy print files.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: Etsy's limits explained ── */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            Etsy&apos;s File Size Limits — The Rules
          </h2>
          <p className="mb-6 text-foreground-60 max-w-[680px]">
            When you list a digital product on Etsy, two hard limits apply:
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {[
              {
                icon: <FileText className="h-6 w-6 text-accent-light" />,
                title: "20MB per file",
                description:
                  "Each individual file — JPEG, PNG, PDF, or ZIP — must be under 20MB. Etsy will reject uploads that exceed this, with no exceptions.",
              },
              {
                icon: <Archive className="h-6 w-6 text-accent-light" />,
                title: "5 files per listing",
                description:
                  "A single listing can have at most 5 downloadable files. If you want to offer 70 print sizes, you need to package them into 5 ZIP files.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-6"
                style={{
                  background: "linear-gradient(135deg, #0c1520 0%, #080e18 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="mb-3">{card.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-foreground-60">{card.description}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground-60 max-w-[680px]">
            These limits haven&apos;t changed since Etsy introduced digital downloads. See our{" "}
            <Link
              href="/etsy-20mb-file-limit"
              className="text-accent-light hover:underline"
            >
              full 20MB limit guide
            </Link>{" "}
            for workarounds when your files are too large.
          </p>
        </section>

        {/* ── SECTION 2: Typical file sizes at 300 DPI ── */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            Typical File Sizes for 300 DPI Digital Wall Art
          </h2>
          <p className="mb-6 text-foreground-60 max-w-[680px]">
            How large your print files actually are depends on format (JPEG vs PNG), image complexity, and print dimensions. Here&apos;s a realistic breakdown:
          </p>

          <div className="overflow-x-auto rounded-2xl mb-6" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr
                  className="text-left text-xs font-semibold uppercase tracking-wider text-foreground-60"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <th className="px-4 py-3">Print Size</th>
                  <th className="px-4 py-3">Pixels at 300 DPI</th>
                  <th className="px-4 py-3">JPEG size</th>
                  <th className="px-4 py-3">PNG size</th>
                  <th className="px-4 py-3">Safe for Etsy?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "4×6\"", pixels: "1200×1800 px", jpeg: "0.5–2 MB", png: "2–8 MB", safe: true },
                  { size: "5×7\"", pixels: "1500×2100 px", jpeg: "0.8–3 MB", png: "3–12 MB", safe: true },
                  { size: "8×10\"", pixels: "2400×3000 px", jpeg: "2–6 MB", png: "6–20 MB", safe: "JPEG only" },
                  { size: "11×14\"", pixels: "3300×4200 px", jpeg: "4–10 MB", png: "12–40 MB", safe: "JPEG only" },
                  { size: "16×20\"", pixels: "4800×6000 px", jpeg: "8–16 MB", png: "25–70 MB", safe: "JPEG only" },
                  { size: "24×36\"", pixels: "7200×10800 px", jpeg: "15–30 MB", png: "80–150 MB", safe: "Compress JPEG" },
                ].map((row) => (
                  <tr key={row.size} className="border-t border-white/5">
                    <td className="px-4 py-3 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-foreground-60 font-mono text-xs">{row.pixels}</td>
                    <td className="px-4 py-3 text-green-400">{row.jpeg}</td>
                    <td className="px-4 py-3 text-orange-400">{row.png}</td>
                    <td className="px-4 py-3">
                      {row.safe === true ? (
                        <span className="inline-flex items-center gap-1 text-green-400">
                          <Check className="h-3.5 w-3.5" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-yellow-400">
                          <AlertTriangle className="h-3.5 w-3.5" /> {row.safe}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-foreground-60 max-w-[680px]">
            JPEG file sizes vary with image complexity — a detailed watercolor takes more space than a minimal typography print. The ranges above reflect typical Etsy wall art.
          </p>
          <p className="mt-4 text-sm text-foreground-60 max-w-[680px]">
            Need exact pixel dimensions for each size? See the{" "}
            <Link href="/print-sizes-at-300-dpi" className="text-accent-light hover:underline">
              complete 300 DPI pixel chart
            </Link>{" "}
            — every Etsy print size with exact pixel dimensions by ratio.
          </p>
        </section>

        {/* ── SECTION 3: JPEG vs PNG ── */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            JPEG vs PNG for Etsy Digital Downloads
          </h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div
              className="rounded-xl p-6"
              style={{
                background: "linear-gradient(135deg, #0b1e14 0%, #071410 100%)",
                border: "1px solid rgba(74,222,128,0.2)",
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">JPEG — Recommended</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground-60">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" />
                  3–5× smaller than PNG at identical quality
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" />
                  Stays under 20MB for all standard print sizes
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" />
                  Prints look identical to PNG on paper
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-400" />
                  What SnapToSize exports automatically
                </li>
              </ul>
            </div>

            <div
              className="rounded-xl p-6"
              style={{
                background: "linear-gradient(135deg, #1e0d0b 0%, #140806 100%)",
                border: "1px solid rgba(251,146,60,0.2)",
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-400" />
                <h3 className="text-lg font-semibold text-orange-400">PNG — Avoid for Etsy</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground-60">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange-400" />
                  8×10 at 300 DPI is already 6–20MB
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange-400" />
                  11×14 and larger will exceed 20MB limit
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange-400" />
                  Buyers can&apos;t see the difference when printed
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange-400" />
                  Only use PNG if artwork has transparency
                </li>
              </ul>
            </div>
          </div>

          <p className="text-foreground-60 max-w-[680px]">
            For wall art, JPEG at quality 90–95 is indistinguishable from PNG when printed. See our{" "}
            <Link href="/best-file-format-etsy-printables" className="text-accent-light hover:underline">
              complete file format guide
            </Link>{" "}
            for more detail on JPEG quality settings.
          </p>
        </section>

                {/* Mid-page CTA */}
        <section className="mb-16">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, #0d2420 0%, #091a17 100%)",
              border: "1px solid rgba(45,212,191,0.3)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-light">
                  Stop resizing manually
                </p>
                <p className="text-2xl font-bold md:text-3xl max-w-[480px]">
                  Upload once. Get 70 files — all under 20MB, Etsy-ready.
                </p>
              </div>
              <a href={CTA_URL} className="flex-shrink-0">
                <Button>
                  Try SnapToSize Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── LISTING OUTPUT SHOWCASE ── */}
        <section className="mb-16">
          <ListingOutputShowcase
            artwork="fox"
            heading="One upload. Five ratio-correct ZIP packs — all under 20MB."
            subtext="SnapToSize generates every Etsy print size at 300 DPI as optimized JPEG files, automatically packaged within Etsy's file size limits."
          />
        </section>

        {/* ── SECTION 4: Why ZIPs stay under 20MB ── */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            How ZIP-Packs Stay Under 20MB
          </h2>
          <p className="mb-6 text-foreground-60 max-w-[680px]">
            SnapToSize groups your files into 5 ratio-based ZIP packs — one per aspect ratio group. Each ZIP contains only the sizes that share that ratio, keeping the total well under 20MB:
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 mb-8">
            {[
              { pack: "Pack 2×3", sizes: "4×6, 6×9, 8×12, 12×18, 24×36", typical: "~8–14 MB" },
              { pack: "Pack 3×4", sizes: "6×8, 9×12, 12×16", typical: "~6–12 MB" },
              { pack: "Pack 4×5", sizes: "4×5, 8×10, 16×20", typical: "~6–10 MB" },
              { pack: "Pack ISO", sizes: "A5, A4, A3, A2, A1", typical: "~8–15 MB" },
              { pack: "Extras", sizes: "5×7, 11×14, 18×24, square", typical: "~8–16 MB" },
            ].map((p) => (
              <div
                key={p.pack}
                className="rounded-xl p-4"
                style={{
                  background: "linear-gradient(135deg, #0c0d14 0%, #080910 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p className="mb-1 text-sm font-semibold text-accent-light">{p.pack}</p>
                <p className="mb-2 text-xs text-foreground-60">{p.sizes}</p>
                <p className="text-xs font-medium text-foreground">{p.typical}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground-60 max-w-[680px]">
            All 5 ZIPs = all 5 Etsy file slots used. Buyers get every size they could need. No manual splitting required. If a ZIP would exceed 20MB, SnapToSize automatically reduces JPEG quality until it fits. Learn more in our{" "}
            <Link href="/how-to-upload-more-than-5-files-etsy" className="text-accent-light hover:underline">
              5-file limit workaround guide
            </Link>
            .
          </p>
        </section>

        {/* ── SECTION 5: What happens when file is too large ── */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            What Happens When Your File Is Too Large
          </h2>

          <div
            className="mb-8 rounded-2xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, #1e0d0b 0%, #140806 100%)",
              border: "1px solid rgba(251,146,60,0.25)",
            }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-orange-400" />
              <div>
                <p className="mb-2 font-semibold text-orange-400">
                  Etsy error: &quot;The file you&apos;re trying to upload is too large.&quot;
                </p>
                <p className="text-sm text-foreground-60">
                  This appears when a single file exceeds 20MB. The upload silently fails — Etsy won&apos;t save it.
                </p>
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-semibold">How to fix it:</h3>
          <ol className="space-y-4 mb-6">
            {[
              {
                step: "1",
                title: "Switch from PNG to JPEG",
                desc: "This alone reduces file size by 60–80%. Use quality 90–95 to maintain print fidelity.",
              },
              {
                step: "2",
                title: "Remove embedded metadata",
                desc: "ICC color profiles and EXIF data can add 1–2MB. Strip them with any image editor or export tool.",
              },
              {
                step: "3",
                title: "Use ZIP packaging",
                desc: "ZIP compression on JPEG files saves 5–15% additional space. More importantly, ZIPs let you group many sizes into one Etsy file.",
              },
              {
                step: "4",
                title: "Use SnapToSize",
                desc: "Upload your artwork once. SnapToSize generates all sizes as optimized JPEGs, automatically keeps each ZIP under 20MB, and applies progressive quality fallback if needed.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-light/20 text-sm font-bold text-accent-light">
                  {item.step}
                </span>
                <div>
                  <p className="mb-1 font-semibold">{item.title}</p>
                  <p className="text-sm text-foreground-60">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── SECTION 6: Tips for smaller files without quality loss ── */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            Tips for Smaller Files Without Losing Quality
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {[
              {
                title: "JPEG quality 90–95",
                desc: "The sweet spot for print. Quality 95 is virtually identical to lossless PNG. Quality 90 saves another 20–30% space with no visible difference.",
              },
              {
                title: "sRGB color space",
                desc: "Save in sRGB without embedded profiles. Buyers&apos; printers use sRGB, and stripping the ICC profile saves 0.5–2MB per file.",
              },
              {
                title: "Skip the alpha channel",
                desc: "Transparency requires PNG. For wall art on white backgrounds, flatten to JPEG — you lose nothing visible but save 3–5× in file size.",
              },
              {
                title: "Progressive quality fallback",
                desc: "If a ZIP would breach 20MB, reduce JPEG quality in steps (95 → 90 → 85) until it fits. A well-composed 300 DPI ratio pack rarely needs to go below 90.",
              },
              {
                title: "Batch generate with SnapToSize",
                desc: "Instead of manually exporting each size from Illustrator or Photoshop, upload once and let SnapToSize handle all 70 files at the right quality.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl p-5"
                style={{
                  background: "linear-gradient(135deg, #0c0d14 0%, #080910 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h3 className="mb-2 font-semibold text-foreground">{tip.title}</h3>
                <p className="text-sm text-foreground-60">{tip.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground-60 max-w-[680px]">
            Need to understand which ratios your buyers need? See our{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              Etsy print ratios guide
            </Link>{" "}
            — it explains why 5 ZIP packs cover 95% of buyer requests.
          </p>
        </section>

        {/* ── FINAL CTA ── */}
        <FinalCTA
          heading="Stop worrying about file sizes — let SnapToSize handle it"
          stat="Up to 70 files from a single upload"
          description="Upload your artwork once. Get 5 ratio-correct ZIP packs, all 300 DPI, all under 20MB. Ready to attach directly to your Etsy listing."
          buttonText="Generate All Sizes Free"
          appUrl={CTA_URL}
        />

        {/* ── FAQ ── */}
        <section className="mt-16 mb-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="mb-12">
          <RelatedPages currentSlug="etsy-digital-download-file-size" />
        </section>
      </div>
    </>
  );
}
