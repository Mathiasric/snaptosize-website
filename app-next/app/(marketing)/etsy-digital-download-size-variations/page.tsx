import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Check, AlertTriangle, Info } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContextualCTA } from "@/components/ContextualCTA";
import { FinalCTA } from "@/components/FinalCTA";
import RelatedPages from "@/components/RelatedPages";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ListingOutputShowcase } from "@/components/ListingOutputShowcase";

export const metadata: Metadata = {
  title: "Etsy Digital Download Size Variations — The Right Workaround",
  description:
    "Etsy doesn't support size variations for digital downloads. Here's why, and how to include all sizes as separate files in one ZIP to cover every buyer.",
  alternates: {
    canonical: "https://snaptosize.com/etsy-digital-download-size-variations",
  },
  openGraph: {
    title: "Etsy Digital Download Size Variations | SnapToSize",
    description:
      "Etsy doesn't support size variations for digital downloads. Learn the correct workaround: bundle all sizes as files in one ZIP under the 20MB limit.",
    url: "https://snaptosize.com/etsy-digital-download-size-variations",
    images: [
      {
        url: "/assets/og/etsy-digital-download-size-variations.png",
        width: 1200,
        height: 630,
        alt: "Etsy Digital Download Size Variations — The Right Workaround",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Digital Download Size Variations — The Right Workaround",
    description:
      "Etsy doesn't support size variations for digital downloads. Bundle all sizes as files in one ZIP instead.",
    images: ["/assets/og/etsy-digital-download-size-variations.png"],
  },
};

export default function EtsyDigitalDownloadSizeVariationsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Etsy Digital Download Size Variations — The Right Workaround",
    description:
      "Etsy doesn't support size variations for digital downloads. This guide explains why, and how to bundle all sizes as separate files in a ZIP so every buyer gets what they need.",
    url: "https://snaptosize.com/etsy-digital-download-size-variations",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    author: {
      "@type": "Organization",
      name: "SnapToSize",
      url: "https://snaptosize.com",
    },
    publisher: {
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
        name: "Etsy Digital Download Size Variations",
        item: "https://snaptosize.com/etsy-digital-download-size-variations",
      },
    ],
  };

  const faqItems = [
    {
      question: "Can Etsy digital products have size variations?",
      answer:
        "No. Etsy does not support variations for digital download listings. When a buyer purchases a digital item, they receive all uploaded files immediately — there is no mechanism for them to choose a variant before downloading. The workaround is to include every size you offer as a separate file inside your listing's ZIP.",
    },
    {
      question: "How do I offer different sizes for digital downloads on Etsy?",
      answer:
        "Include each size as a separate file in the ZIP you upload to your listing. For example, if you sell a wall art print, upload one ZIP containing 8×10, 11×14, 16×20, 18×24, 24×36, A4, and A3 files. The buyer downloads the ZIP and uses the size they need. This is the standard approach used by top-selling Etsy digital sellers.",
    },
    {
      question: "Can you add variations to a digital listing on Etsy?",
      answer:
        "Variations are only available for physical listings on Etsy — not digital ones. According to Etsy's help documentation, digital downloads do not support the variations feature because buyers receive all files at the moment of purchase rather than placing a fulfillment order.",
    },
    {
      question: "How many files can you upload to an Etsy digital listing?",
      answer:
        "Etsy allows up to 5 files per digital listing, and each file must be under 20MB. The standard workaround is to group your sizes into ZIPs — for example one ZIP per ratio family (2:3, 3:4, 4:5, ISO, extras). This keeps you within the 5-file limit while offering a full range of sizes.",
    },
    {
      question: "Do Etsy buyers get all files or choose one?",
      answer:
        "Buyers get all uploaded files immediately upon purchase — they do not choose. This is why size variations are unnecessary and unsupported: just bundle every size in your ZIPs and buyers pick the file they need after downloading.",
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
    "https://app.snaptosize.com?source=seo_etsy-digital-download-size-variations&kind=guide";

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
        className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0B0B12 0%, #121022 40%, #0F0D1A 100%)",
        }}
      >
        {/* Gradient orbs */}
        <div
          className="absolute top-[-10%] left-[8%] w-[520px] h-[520px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[-6%] w-[460px] h-[460px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
                <Link href="/" className="hover:text-white/60">Home</Link>
                <span>/</span>
                <span className="text-white/60">Digital Download Size Variations</span>
              </nav>

              <p className="text-[10px] font-mono tracking-[0.2em] text-purple-400/70 uppercase mb-3">
                ETSY SELLER GUIDE
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Etsy Digital Download Size Variations
              </h1>
              <p className="text-white/60 text-base mb-6 leading-relaxed">
                Etsy doesn&apos;t support size variations for digital listings — buyers get all files the moment they buy. The fix is simple: include every size as a file in your ZIP. Here&apos;s exactly how to do it.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {["Variations not supported", "Bundle all sizes", "5-file limit", "ZIP strategy"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] text-white/70 border border-white/[0.08]"
                  >
                    <Check className="w-3 h-3 text-teal-400" />
                    {pill}
                  </span>
                ))}
              </div>

              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <Button className="text-sm px-6 py-2.5">
                  Bundle all sizes automatically →
                </Button>
              </a>
            </div>

            {/* Right: visual — 5-ZIP pack diagram */}
            <div className="hidden md:flex flex-col items-center justify-center gap-4">
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">
                5 ZIPs · 28 sizes · 300 DPI
              </div>
              <div className="flex flex-col gap-2 w-full max-w-[260px]">
                {[
                  { label: "ZIP 1", desc: "2:3 ratio  ·  4×6, 8×12, 16×24 + 4 more", color: "purple" },
                  { label: "ZIP 2", desc: "3:4 ratio  ·  6×8, 9×12, 12×16, 18×24 + 1", color: "teal" },
                  { label: "ZIP 3", desc: "4:5 ratio  ·  8×10, 12×15, 16×20 + 2 more", color: "purple" },
                  { label: "ZIP 4", desc: "ISO  ·  A5, A4, A3, A2, A1", color: "teal" },
                  { label: "ZIP 5", desc: "Extras  ·  5×7, 8.5×11, 11×14, 13×19 + 2", color: "purple" },
                ].map((zip) => (
                  <div
                    key={zip.label}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 ${
                      zip.color === "purple"
                        ? "border-purple-500/30 bg-purple-500/[0.07]"
                        : "border-teal-500/30 bg-teal-500/[0.07]"
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold ${zip.color === "purple" ? "text-purple-300" : "text-teal-300"}`}>
                      {zip.label}
                    </span>
                    <span className="text-[11px] text-white/50">{zip.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-white/20 text-center max-w-[220px] mt-1">
                One upload → 5 ZIPs + square &amp; landscape in Quick Export
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] py-12">

        {/* ===== QUICK ANSWER ===== */}
        <div className="mb-10">
          <QuickAnswer question="Can Etsy digital downloads have size variations?">
            <strong>No.</strong> Etsy does not support variations for digital listings.{" "}
            <a
              href="https://help.etsy.com/hc/en-us/articles/115015664047"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:underline"
            >
              According to Etsy&apos;s help documentation
            </a>
            , variations are only available for physical items. The correct approach for digital sellers is to <strong>include all sizes as separate files</strong> inside the ZIP you upload to your listing.
          </QuickAnswer>
        </div>

        {/* ===== SECTION 1: Why Etsy doesn't support digital variations ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why Etsy doesn&apos;t support variations for digital products
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The variations feature on Etsy exists so buyers can specify what they want before a seller fulfills and ships a physical item — color, size, personalization. For digital downloads, fulfillment is instant and automatic: the buyer pays and immediately receives access to every file you uploaded.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There&apos;s no fulfillment window where a variation choice could be acted upon. Because of this, Etsy simply doesn&apos;t show the variations UI for digital listings — it&apos;s not a bug or oversight, it&apos;s by design.
          </p>
          <div className="bg-blue-950/30 border border-blue-800/40 rounded-lg p-4 flex gap-3 mb-4">
            <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-200/80">
              <strong>From Etsy&apos;s help center:</strong> &ldquo;Digital downloads don&apos;t support variations because buyers receive the files immediately after purchase.&rdquo;{" "}
              <a
                href="https://help.etsy.com/hc/en-us/articles/115015664047"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-100"
              >
                Source: Etsy Help Center
              </a>
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The practical implication: if you want to offer multiple sizes, you must include all of them in your listing files. The buyer gets everything and uses what they need.
          </p>
        </section>

        {/* ===== SECTION 2: The right approach ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The right approach: include all sizes as separate files
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Top-selling Etsy digital sellers don&apos;t offer fewer sizes — they offer more. A listing that says &ldquo;includes 8×10, 11×14, 16×20, 18×24, A4, and A3&rdquo; in the title converts higher than a listing that says &ldquo;8×10 only, message for other sizes.&rdquo;
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The buyer doesn&apos;t need to choose before downloading. They download all sizes, print the one that fits their frame or print shop, and move on. You never get a support message asking for a different size.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4">
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">More sizes = better search ranking</p>
                <p className="text-sm text-muted-foreground">Etsy&apos;s search algorithm favors listings that match more buyer queries. A listing with 8×10, A4, and 11×14 in the description matches buyers searching any of those terms.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4">
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Fewer refund requests</p>
                <p className="text-sm text-muted-foreground">When a buyer can&apos;t find the right size in your listing, they open a case or request a refund. Bundling all sizes eliminates the problem before it starts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4">
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">No custom order overhead</p>
                <p className="text-sm text-muted-foreground">Sellers who offer &ldquo;message me for other sizes&rdquo; end up doing manual resizing per order. Bundling all sizes upfront means zero ongoing fulfillment work.</p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For data on how size count affects conversion, see{" "}
            <Link href="/how-many-sizes-etsy-printable" className="text-accent-light hover:underline">
              how many sizes to include in an Etsy printable listing
            </Link>
            .
          </p>
        </section>

        {/* ===== CTA 1 ===== */}
        <div className="mb-20 md:mb-24">
          <ContextualCTA
            problem="Manually resizing one design into 6–8 sizes at 300 DPI takes 20–30 minutes per listing. Do that across a full shop and size coverage becomes the bottleneck."
            solution="Upload your design once to SnapToSize. It exports every size — 8×10, 11×14, 16×20, 18×24, 24×36, A4, A3 — at 300 DPI in one ZIP under Etsy's 20MB limit. No manual resizing."
            appUrl={appUrl}
            buttonText="Auto-resize all sizes free →"
          />
        </div>

        {/* ===== LISTING SHOWCASE ===== */}
        <div className="mb-20 md:mb-24">
          <ListingOutputShowcase
            artwork="floral_vase"
            heading="One upload. Every size your buyers need."
            subtext="SnapToSize takes your design and outputs all standard print sizes — 2:3, 3:4, 4:5, ISO — in a ZIP ready to upload directly to your Etsy listing."
          />
        </div>

        {/* ===== SECTION 3: 5-file limit & ZIP strategy ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Staying under the 5-file limit: ratio-pack strategy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Etsy allows up to 5 files per digital listing, with each file capped at 20MB. If you&apos;re offering 10–15 individual size files, you can&apos;t upload them one by one — you need to group them into ZIPs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The cleanest approach is to group by ratio family. Buyers who print on standard US frames are in the 2:3 or 4:5 family. International buyers printing on ISO paper are in the ISO family. This grouping also makes your listing description easier to write.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border mb-6">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03] border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">ZIP</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Ratio family</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Sizes included</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Who needs it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">ZIP 1</td>
                  <td className="py-3 px-4 text-muted-foreground">2:3</td>
                  <td className="py-3 px-4 text-muted-foreground">4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30</td>
                  <td className="py-3 px-4 text-muted-foreground">Most common US wall art sizes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">ZIP 2</td>
                  <td className="py-3 px-4 text-muted-foreground">3:4</td>
                  <td className="py-3 px-4 text-muted-foreground">6×8, 9×12, 12×16, 15×20, 18×24</td>
                  <td className="py-3 px-4 text-muted-foreground">Gallery-wall and mid-size frames</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">ZIP 3</td>
                  <td className="py-3 px-4 text-muted-foreground">4:5</td>
                  <td className="py-3 px-4 text-muted-foreground">8×10, 12×15, 16×20, 20×25, 24×30</td>
                  <td className="py-3 px-4 text-muted-foreground">Standard US frame buyers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">ZIP 4</td>
                  <td className="py-3 px-4 text-muted-foreground">ISO (A-series)</td>
                  <td className="py-3 px-4 text-muted-foreground">A5, A4, A3, A2, A1</td>
                  <td className="py-3 px-4 text-muted-foreground">UK, EU, and AU buyers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">ZIP 5</td>
                  <td className="py-3 px-4 text-muted-foreground">Extras</td>
                  <td className="py-3 px-4 text-muted-foreground">5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24</td>
                  <td className="py-3 px-4 text-muted-foreground">IKEA-frame, tabloid, and large-format buyers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200/80">
              <strong>Keep each ZIP under 20MB.</strong> High-resolution 300 DPI files add up fast — a single 24×36 JPEG can be 10–15MB on its own. Use JPEG quality 90 (not 100) and sRGB color space. SnapToSize applies progressive quality fallback automatically to keep ZIPs within the limit.
            </p>
          </div>
        </section>

        {/* ===== SECTION 4: SnapToSize automates the process ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How SnapToSize automates your size packs
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Building a full size pack manually means: open design in Canva or Photoshop → resize to 8×10 at 300 DPI → export → resize to 11×14 → export → repeat for 6–8 sizes → zip → check ZIP is under 20MB → re-export at lower quality if not → upload. Per listing. Per design update.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SnapToSize collapses that into one step. Upload your design at any size. Select which ratio packs you want. Download a ZIP per pack — all at 300 DPI, all under 20MB, ready to upload directly to Etsy.
          </p>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <span>Upload once — get 2:3, 3:4, 4:5, ISO packs simultaneously</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <span>All files at 300 DPI — print-shop ready out of the box</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <span>Progressive quality fallback keeps every ZIP under Etsy&apos;s 20MB cap</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <span>No account required — 5 free exports per day, no watermark on first pack</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For the full technical breakdown of what&apos;s in each pack, see our{" "}
            <Link href="/etsy-print-sizes" className="text-accent-light hover:underline">
              Etsy print sizes guide
            </Link>
            {" "}and the{" "}
            <Link href="/etsy-print-ratios" className="text-accent-light hover:underline">
              Etsy print ratios reference
            </Link>
            .
          </p>
        </section>

        {/* ===== CTA 2: FinalCTA ===== */}
        <div className="mb-20 md:mb-24">
          <FinalCTA
            heading="Skip the resizing. Ship the full size pack."
            stat="1 upload → 5 ZIPs → every buyer covered."
            description="SnapToSize takes your design and outputs all ratio packs at 300 DPI — 2:3, 3:4, 4:5, ISO, and extras — each under Etsy's 20MB limit. No manual resizing, no Canva back-and-forth."
            appUrl={appUrl}
            buttonText="Create your size packs free →"
          />
        </div>

        {/* ===== FAQ ===== */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>

        {/* ===== RELATED PAGES ===== */}
        <RelatedPages currentSlug="etsy-digital-download-size-variations" />
      </div>
    </>
  );
}
