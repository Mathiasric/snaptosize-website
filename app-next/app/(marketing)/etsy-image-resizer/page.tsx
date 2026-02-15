import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Etsy Image Resizer – 300 DPI Print Sizes Without Cropping",
  description:
    "Resize one artwork into Etsy-ready print sizes at 300 DPI. Download clean ZIPs by ratio. No cropping or cut-off edges.",
  openGraph: {
    url: "https://snaptosize.com/etsy-image-resizer",
    images: [{ url: "https://snaptosize.com/assets/og.png" }],
    type: "website",
    title:
      "Etsy Image Resizer — 300 DPI Print Sizes in Seconds | SnapToSize",
    description:
      "Generate Etsy-ready print-size ZIPs from a single image. Fast. Clean. Predictable. No cropping.",
  },
  alternates: { canonical: "https://snaptosize.com/etsy-image-resizer" },
};

export default function EtsyImageResizerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnapToSize",
    url: "https://snaptosize.com/",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    description:
      "Resize images into Etsy-ready print sizes without cropping important details.",
    softwareHelp: "https://snaptosize.com/etsy-image-resizer",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "11.99",
      highPrice: "97",
      offerCount: "2",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="hero">
        <h1>Etsy Image Resizer (300 DPI print sizes) &mdash; in seconds</h1>

        <p className="hero-lead">
          Upload one artwork file. Download Etsy-ready print exports at{" "}
          <strong>300 DPI</strong>, delivered as <strong>clean ZIPs</strong>{" "}
          grouped by ratio. <strong>No cropping</strong>. No surprises.
        </p>

        <ul className="muted" style={{ marginTop: "12px" }}>
          <li>Turns 1 artwork into 25 Etsy-ready print files</li>
          <li>Downloads 5 clean ZIPs grouped by ratio</li>
          <li>300 DPI pixel-accurate exports</li>
          <li>No cropping &mdash; no cut-off edges</li>
        </ul>

        <div className="hero-cta">
          <a href="#" data-href="demo" data-cta="demo">
            Try the demo
          </a>
          <a href="#pricing" data-href="pricing">
            See pricing
          </a>
        </div>

        <p className="hero-micro">
          No signup. 1 free watermarked export (per 24h). Upgrade for unlimited.
        </p>
      </section>

      {/* ================= WHY ================= */}
      <section className="section">
        <h2>Why sellers use SnapToSize</h2>
        <ul>
          <li>Stop wasting time resizing for every listing</li>
          <li>Consistent output across products</li>
          <li>Clean ZIP structure that&apos;s easy to upload</li>
          <li>
            Fewer mistakes and fewer &quot;missing size&quot; messages
          </li>
        </ul>
      </section>

      {/* ================= WHAT YOU GET ================= */}
      <section className="section">
        <h2>What you get (exactly)</h2>

        <ul>
          <li>
            <strong>25 JPG files</strong> total (when all groups are selected)
          </li>
          <li>
            <strong>5 ZIP files</strong> (one ZIP per size group)
          </li>
          <li>
            <strong>300 DPI</strong> metadata + quality-optimized JPEG output
          </li>
          <li>
            <strong>No cropping</strong> &mdash; exports preserve edges
            (exact-size resize)
          </li>
        </ul>

        <p className="muted">
          Batch ZIP creates: <code>2x3.zip</code>, <code>3x4.zip</code>,{" "}
          <code>4x5.zip</code>, <code>ISO.zip</code>, <code>EXTRAS.zip</code>.
          Files inside are named with the size label + pixel dimensions.
        </p>

        <p className="muted">
          Want the pixel-level list + filename rules?{" "}
          <Link href="/etsy-print-size-guide">
            Open the full print size guide
          </Link>
          .
        </p>
      </section>

      {/* ================= SUPPORTED SIZES ================= */}
      <section className="section" id="supported-sizes">
        <h2>Supported print sizes</h2>

        <p className="muted">
          This is the exact size set exported by the current Batch ZIP presets.
          (Batch ZIP exports portrait dimensions only.)
        </p>

        <details open>
          <summary>
            <strong>2&times;3 ratio</strong> (6 sizes)
          </summary>
          <ul>
            <li>
              4&times;6, 8&times;12, 10&times;15, 12&times;18, 16&times;24,
              20&times;30 in
            </li>
          </ul>
        </details>

        <details>
          <summary>
            <strong>3&times;4 ratio</strong> (5 sizes)
          </summary>
          <ul>
            <li>
              6&times;8, 9&times;12, 12&times;16, 15&times;20, 18&times;24 in
            </li>
          </ul>
        </details>

        <details>
          <summary>
            <strong>4&times;5 ratio</strong> (4 sizes)
          </summary>
          <ul>
            <li>
              8&times;10, 12&times;15, 16&times;20, 20&times;25 in
            </li>
          </ul>
        </details>

        <details>
          <summary>
            <strong>ISO A-series</strong> (5 sizes)
          </summary>
          <ul>
            <li>A5, A4, A3, A2, A1</li>
          </ul>
        </details>

        <details>
          <summary>
            <strong>Extras</strong> (5 sizes)
          </summary>
          <ul>
            <li>
              5&times;7, 8.5&times;11, 11&times;14, 16&times;20, 20&times;24 in
            </li>
          </ul>
        </details>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section">
        <h2>How it works</h2>
        <ol>
          <li>Upload your artwork</li>
          <li>Select the print size groups you want</li>
          <li>Download ready-to-upload ZIP files</li>
        </ol>
      </section>

      {/* ================= ADVANCED EXPORT ================= */}
      <section className="section" id="advanced">
        <h2>Advanced export (Pro)</h2>
        <p>
          Pro includes a <strong>Single Size Export</strong> mode so you can
          export one exact size at a time. You can choose{" "}
          <strong>Portrait</strong> or <strong>Landscape</strong>. Landscape
          simply swaps width and height (same presets, different orientation).
        </p>
        <p className="muted">
          Batch ZIP does not include an orientation toggle &mdash; it exports
          portrait dimensions only.
        </p>
      </section>

      {/* ================= PRICING CTA ================= */}
      <section className="section" id="pricing">
        <h2>Pricing</h2>
        <p className="muted">
          Free = 1 watermarked export per 24h. Pro = unlimited + no watermark.
        </p>

        <div className="hero-cta">
          <a href="#" data-href="pay-monthly" data-cta="pay_monthly">
            Start Pro (Monthly)
          </a>
          <a href="#" data-href="pay-yearly" data-cta="pay_yearly">
            Start Pro Yearly (Save $47)
          </a>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section" id="faq">
        <h2>FAQ</h2>

        <details>
          <summary>Does SnapToSize crop my artwork?</summary>
          <p>
            No. SnapToSize does not crop. Images are resized to exact print
            dimensions without cutting off edges.
          </p>
        </details>

        <details>
          <summary>Is this only for Etsy?</summary>
          <p>
            It&apos;s optimized for Etsy-style digital print listings, but the
            exports work anywhere you need standard print sizes.
          </p>
        </details>

        <details>
          <summary>What file format do I get?</summary>
          <p>
            JPEG files, optimized for upload and file size. The exports include
            300&times;300 DPI metadata.
          </p>
        </details>

        <details>
          <summary>What about Etsy upload limits?</summary>
          <p>
            Etsy has file size limits. SnapToSize enforces a 20MB per ZIP cap to
            prevent upload issues. If a ZIP exceeds the limit, the app stops and
            warns you.
          </p>
        </details>
      </section>
    </>
  );
}
