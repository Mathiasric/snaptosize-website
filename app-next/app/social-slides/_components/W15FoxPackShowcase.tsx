/* W15-P01 — Real fox artwork in 5 correct ratio frames.
   Plain <img> tags so Playwright captures them immediately.
   Light warm background, large frames, scroll-stopping. */

const PACKS = [
  {
    label: "2:3",
    sizes: "4×6 · 8×12 · 16×24",
    src: "/assets/listings/fox/Fox.jpg",
    frameW: 253,
    frameH: 380,
    highlight: false,
  },
  {
    label: "3:4",
    sizes: "6×8 · 12×16 · 18×24",
    src: "/assets/listings/fox/Fox_6x8_1800x2400.jpg",
    frameW: 285,
    frameH: 380,
    highlight: true,
  },
  {
    label: "4:5",
    sizes: "8×10 · 16×20 · 24×30",
    src: "/assets/listings/fox/Fox_4x5_1200x1500.jpg",
    frameW: 304,
    frameH: 380,
    highlight: false,
  },
];

const PACKS_ROW2 = [
  {
    label: "ISO",
    sizes: "A4 · A3 · A2",
    // URL-encode the space in filename
    src: "/assets/listings/fox/A4_2480x3508_ISO%20(9).jpg",
    frameW: 185,
    frameH: 262,
    highlight: false,
  },
  {
    label: "Extras",
    sizes: "5×7 · 11×14",
    src: "/assets/listings/fox/Fox_11x14_3300x4200.jpg",
    frameW: 206,
    frameH: 262,
    highlight: false,
  },
];

function Frame({
  src,
  alt,
  label,
  sizes,
  frameW,
  frameH,
  highlight,
}: {
  src: string;
  alt: string;
  label: string;
  sizes: string;
  frameW: number;
  frameH: number;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        style={{
          width: frameW,
          height: frameH,
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: highlight
            ? "0 0 0 3px #2DD4BF, 0 12px 32px rgba(45,212,191,0.25)"
            : "0 0 0 1px #d6d3d1, 0 4px 16px rgba(0,0,0,0.10)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: highlight ? "#0d9488" : "#292524",
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 13, color: "#a8a29e", marginTop: 2 }}>{sizes}</div>
      </div>
    </div>
  );
}

export default function W15FoxPackShowcase() {
  return (
    <section
      id="w15-fox-pack-showcase-pinterest"
      style={{
        width: 1000,
        height: 1500,
        background: "linear-gradient(180deg, #FAFAF8 0%, #F5F1EC 55%, #EDE8E2 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ padding: "36px 56px 0", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            background: "#f0fdfa",
            border: "1px solid #99f6e4",
            color: "#0f766e",
            fontSize: 15,
            fontWeight: 600,
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 20,
            letterSpacing: "0.03em",
          }}
        >
          One upload. Every size.
        </span>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#1c1917",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Your art in every
          <br />
          Etsy ratio — done.
        </h2>
        <p style={{ fontSize: 20, color: "#78716c", marginTop: 16, lineHeight: 1.5 }}>
          Upload once · 5 ratio packs · 28 JPEGs · 300 DPI
        </p>
      </div>

      {/* Artwork showcase */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          padding: "0 40px",
        }}
      >
        {/* Row 1: three main ratio packs */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
          {PACKS.map((p) => (
            <Frame
              key={p.label}
              src={p.src}
              alt={`Fox artwork in ${p.label} ratio`}
              label={p.label}
              sizes={p.sizes}
              frameW={p.frameW}
              frameH={p.frameH}
              highlight={p.highlight}
            />
          ))}
        </div>

        {/* Row 2: ISO + Extras */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
          {PACKS_ROW2.map((p) => (
            <Frame
              key={p.label}
              src={p.src}
              alt={`Fox artwork in ${p.label} ratio`}
              label={p.label}
              sizes={p.sizes}
              frameW={p.frameW}
              frameH={p.frameH}
              highlight={p.highlight}
            />
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48, marginTop: 8 }}>
          {[
            { val: "5", unit: "packs" },
            { val: "28", unit: "files" },
            { val: "300", unit: "DPI" },
          ].map(({ val, unit }) => (
            <div key={unit} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#0d9488" }}>{val}</div>
              <div
                style={{
                  fontSize: 11,
                  color: "#a8a29e",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div
        style={{
          background: "#0d9488",
          padding: "24px 0",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 22, color: "#fff", fontWeight: 800, letterSpacing: "-0.01em" }}>
          1 upload → all 5 packs · snaptosize.com
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#EDE8E2",
          padding: "12px 0",
          textAlign: "center",
          fontSize: 11,
          color: "#a8a29e",
          letterSpacing: "0.12em",
        }}
      >
        snaptosize.com
      </div>
    </section>
  );
}
