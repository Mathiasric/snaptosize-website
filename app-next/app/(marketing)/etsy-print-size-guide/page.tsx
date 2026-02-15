import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Etsy Print Size Guide – Exact Pixels, ZIPs & Orientation (300 DPI)",
  description:
    "Exact SnapToSize print sizes with pixel dimensions at 300 DPI. Includes ZIP names, filename format, portrait/landscape rules, and Etsy 20MB ZIP cap.",
  openGraph: {
    url: "https://snaptosize.com/etsy-print-size-guide",
    images: [{ url: "https://snaptosize.com/assets/og.png" }],
    type: "article",
    title:
      "Etsy Print Size Guide — Exact Pixels, ZIP Names, and Orientation | SnapToSize",
    description:
      "Exact pixel dimensions at 300 DPI, ZIP names, filename format, and portrait/landscape behavior. Built for Etsy digital prints.",
  },
  alternates: { canonical: "https://snaptosize.com/etsy-print-size-guide" },
};

export default function EtsyPrintSizeGuidePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <h1>Etsy print size guide &mdash; exact pixels + ZIP structure</h1>

        <p className="hero-lead">
          This page documents exactly what SnapToSize exports right now:{" "}
          <strong>print sizes</strong>, <strong>pixel dimensions</strong>,{" "}
          <strong>ZIP names</strong>, and <strong>filename format</strong>. No
          marketing fluff &mdash; just the specs.
        </p>

        <ul className="muted" style={{ marginTop: "12px" }}>
          <li>Exact pixel dimensions for all Etsy print sizes (300 DPI)</li>
          <li>ZIP file names and folder structure</li>
          <li>Portrait vs landscape export behavior</li>
          <li>Etsy 20MB upload limit enforcement</li>
        </ul>

        <div className="hero-cta">
          <Link
            className="btn btn--ghost"
            href="/"
            data-href="home"
          >
            Back home
          </Link>
          <a href="#" data-href="demo" data-cta="demo">
            Try the demo
          </a>
        </div>

        <p className="hero-micro">
          If you want the simpler overview, go to{" "}
          <Link href="/etsy-image-resizer">Etsy Image Resizer</Link>.
        </p>
      </section>

      {/* ================= SUMMARY ================= */}
      <section className="section">
        <h2>Quick summary</h2>
        <ul>
          <li>
            <strong>Total output:</strong> 25 JPG files across 5 ZIPs (when all
            groups are selected)
          </li>
          <li>
            <strong>Groups:</strong> 2&times;3 (6), 3&times;4 (5), 4&times;5
            (4), ISO (5), Extras (5)
          </li>
          <li>
            <strong>Output format:</strong> JPEG
          </li>
          <li>
            <strong>DPI metadata:</strong> 300&times;300
          </li>
          <li>
            <strong>Batch ZIP orientation:</strong> portrait only
          </li>
          <li>
            <strong>Single Size Export (Pro):</strong> choose Portrait or
            Landscape for the same presets (Landscape swaps width/height)
          </li>
          <li>
            <strong>Cropping:</strong> none &mdash; exports preserve edges
            (exact-size resize)
          </li>
          <li>
            <strong>Etsy cap enforced:</strong> 20MB per ZIP (hard stop if
            exceeded)
          </li>
        </ul>
      </section>

      {/* ================= ZIP STRUCTURE ================= */}
      <section className="section">
        <h2>Batch ZIP structure</h2>

        <p>Batch ZIP creates one ZIP per group:</p>

        <ul>
          <li>
            <code>2x3.zip</code>
          </li>
          <li>
            <code>3x4.zip</code>
          </li>
          <li>
            <code>4x5.zip</code>
          </li>
          <li>
            <code>ISO.zip</code>
          </li>
          <li>
            <code>EXTRAS.zip</code>
          </li>
        </ul>

        <h3>Filename format inside ZIPs</h3>
        <p className="muted">Files inside each ZIP are named like:</p>
        <p>
          <code>{"{label}_{pixelWidth}x{pixelHeight}.jpg"}</code>
        </p>

        <p className="muted">
          Examples: <code>12x18in_3600x5400.jpg</code>,{" "}
          <code>A4_2480x3508.jpg</code>
        </p>

        <p className="muted">
          Note: The &quot;label&quot; is the print size name (or ISO label), and
          the trailing numbers are the exact export pixels.
        </p>
      </section>

      {/* ================= BATCH ZIP PIXELS ================= */}
      <section className="section" id="pixels">
        <h2>Batch ZIP exports (portrait pixels)</h2>
        <p className="muted">
          Batch ZIP does not include a landscape toggle. It exports the portrait
          pixel dimensions below. Inch-based sizes are calculated as{" "}
          <strong>inches &times; 300</strong>. ISO A-sizes use fixed pixel
          presets.
        </p>

        <h3>
          2&times;3 ratio (ZIP: <code>2x3.zip</code>) &mdash; 6 sizes
        </h3>
        <ul>
          <li>
            4&times;6 in &rarr; 1200&times;1800 px (file:{" "}
            <code>4x6in_1200x1800.jpg</code>)
          </li>
          <li>
            8&times;12 in &rarr; 2400&times;3600 px (file:{" "}
            <code>8x12in_2400x3600.jpg</code>)
          </li>
          <li>
            10&times;15 in &rarr; 3000&times;4500 px (file:{" "}
            <code>10x15in_3000x4500.jpg</code>)
          </li>
          <li>
            12&times;18 in &rarr; 3600&times;5400 px (file:{" "}
            <code>12x18in_3600x5400.jpg</code>)
          </li>
          <li>
            16&times;24 in &rarr; 4800&times;7200 px (file:{" "}
            <code>16x24in_4800x7200.jpg</code>)
          </li>
          <li>
            20&times;30 in &rarr; 6000&times;9000 px (file:{" "}
            <code>20x30in_6000x9000.jpg</code>)
          </li>
        </ul>

        <h3>
          3&times;4 ratio (ZIP: <code>3x4.zip</code>) &mdash; 5 sizes
        </h3>
        <ul>
          <li>
            6&times;8 in &rarr; 1800&times;2400 px (file:{" "}
            <code>6x8in_1800x2400.jpg</code>)
          </li>
          <li>
            9&times;12 in &rarr; 2700&times;3600 px (file:{" "}
            <code>9x12in_2700x3600.jpg</code>)
          </li>
          <li>
            12&times;16 in &rarr; 3600&times;4800 px (file:{" "}
            <code>12x16in_3600x4800.jpg</code>)
          </li>
          <li>
            15&times;20 in &rarr; 4500&times;6000 px (file:{" "}
            <code>15x20in_4500x6000.jpg</code>)
          </li>
          <li>
            18&times;24 in &rarr; 5400&times;7200 px (file:{" "}
            <code>18x24in_5400x7200.jpg</code>)
          </li>
        </ul>

        <h3>
          4&times;5 ratio (ZIP: <code>4x5.zip</code>) &mdash; 4 sizes
        </h3>
        <ul>
          <li>
            8&times;10 in &rarr; 2400&times;3000 px (file:{" "}
            <code>8x10in_2400x3000.jpg</code>)
          </li>
          <li>
            12&times;15 in &rarr; 3600&times;4500 px (file:{" "}
            <code>12x15in_3600x4500.jpg</code>)
          </li>
          <li>
            16&times;20 in &rarr; 4800&times;6000 px (file:{" "}
            <code>16x20in_4800x6000.jpg</code>)
          </li>
          <li>
            20&times;25 in &rarr; 6000&times;7500 px (file:{" "}
            <code>20x25in_6000x7500.jpg</code>)
          </li>
        </ul>

        <h3>
          ISO A-series (ZIP: <code>ISO.zip</code>) &mdash; 5 sizes
        </h3>
        <ul>
          <li>
            A5 &rarr; 1748&times;2480 px (file: <code>A5_1748x2480.jpg</code>)
          </li>
          <li>
            A4 &rarr; 2480&times;3508 px (file: <code>A4_2480x3508.jpg</code>)
          </li>
          <li>
            A3 &rarr; 3508&times;4961 px (file: <code>A3_3508x4961.jpg</code>)
          </li>
          <li>
            A2 &rarr; 4961&times;7016 px (file: <code>A2_4961x7016.jpg</code>)
          </li>
          <li>
            A1 &rarr; 7016&times;9933 px (file: <code>A1_7016x9933.jpg</code>)
          </li>
        </ul>

        <h3>
          Extras (ZIP: <code>EXTRAS.zip</code>) &mdash; 5 sizes
        </h3>
        <ul>
          <li>5&times;7 in &rarr; 1500&times;2100 px</li>
          <li>8.5&times;11 in &rarr; 2550&times;3300 px</li>
          <li>11&times;14 in &rarr; 3300&times;4200 px</li>
          <li>16&times;20 in &rarr; 4800&times;6000 px</li>
          <li>20&times;24 in &rarr; 6000&times;7200 px</li>
        </ul>
      </section>

      {/* ================= ORIENTATION ================= */}
      <section className="section" id="orientation">
        <h2>Portrait vs Landscape (Single Size Export &mdash; Pro)</h2>

        <p>
          Batch ZIP exports portrait dimensions only. In Pro,{" "}
          <strong>Single Size Export</strong> lets you choose Portrait or
          Landscape for the same presets. Landscape simply swaps width and height
          &mdash; including ISO sizes.
        </p>
      </section>

      {/* ================= ETSY LIMIT ================= */}
      <section className="section" id="etsy-limit">
        <h2>Etsy upload limit (20MB per file)</h2>
        <p>
          Etsy listings have file upload limits. SnapToSize enforces a{" "}
          <strong>20MB per ZIP</strong> cap. If a ZIP exceeds the limit, the app
          stops and warns you.
        </p>
        <p className="muted">
          If you ever hit the limit: generate fewer groups per listing, or use
          fewer files per listing.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="section final-cta">
        <h2>Ready to stop resizing?</h2>
        <p>Try the demo. If it saves you time, upgrade in one click.</p>

        <div className="final-cta-actions">
          <a href="#" data-href="demo" data-cta="demo">
            Try the demo
          </a>
          <a href="#" data-href="pay-yearly" data-cta="pay_yearly">
            Start Pro Yearly (Save $45)
          </a>
        </div>
      </section>
    </>
  );
}
