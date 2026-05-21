/* W21ResolutionGuide — "Is your image high-res enough to print?"
   Pinterest 1000×1500 (2:3). Light editorial with poppies art hero.
   Data: exact pixel requirements per print size at 300 DPI.
   Source: CONTENT_REFERENCE.md pixel dimensions (verified product output).
*/

const teal    = "#2DD4BF";
const charcoal = "#0F0F0F";
const muted   = "#4A4A4A";
const light   = "#6B6B6B";
const bg      = "#FAFAF7";

const SIZES = [
  {
    size:  "5×7 in",
    pixels: "1500 × 2100 px",
    mp:    "3.2 MP",
    bar:   18,
    level: "any-phone",
    label: "Any phone",
    labelBg:  "#DCFCE7",
    labelColor: "#166534",
    note:  "iPhone, Android, any camera from 2010+",
  },
  {
    size:  "8×10 in",
    pixels: "2400 × 3000 px",
    mp:    "7.2 MP",
    bar:   32,
    level: "any-phone",
    label: "Any phone",
    labelBg:  "#DCFCE7",
    labelColor: "#166534",
    note:  "Standard phone camera handles this easily",
  },
  {
    size:  "A4 (8.3×11.7 in)",
    pixels: "2480 × 3508 px",
    mp:    "8.7 MP",
    bar:   38,
    level: "any-phone",
    label: "Any phone",
    labelBg:  "#DCFCE7",
    labelColor: "#166534",
    note:  "EU/UK standard — same tier as 8×10",
  },
  {
    size:  "11×14 in",
    pixels: "3300 × 4200 px",
    mp:    "13.9 MP",
    bar:   54,
    level: "modern-phone",
    label: "12MP+ phone",
    labelBg:  "#FEF9C3",
    labelColor: "#854D0E",
    note:  "iPhone 6+ · Samsung S10+ · most phones 2017+",
  },
  {
    size:  "16×20 in",
    pixels: "4800 × 6000 px",
    mp:    "28.8 MP",
    bar:   78,
    level: "high-end",
    label: "29MP+ camera",
    labelBg:  "#FEE2E2",
    labelColor: "#991B1B",
    note:  "iPhone 14 Pro / S23 Ultra or DSLR",
  },
];

const barColor = (level: string) => {
  if (level === "any-phone")    return "#22C55E";
  if (level === "modern-phone") return "#EAB308";
  if (level === "high-end")     return "#F97316";
  return "#EF4444";
};

export default function W21ResolutionGuide() {
  return (
    <div
      id="w21-resolution-guide-pinterest"
      style={{
        width: 1000,
        height: 1500,
        background: bg,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Inter, sans-serif",
        color: charcoal,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── 1. PHOTO HERO STRIP ── */}
      <div
        style={{
          position: "relative",
          height: 340,
          width: "100%",
          backgroundImage:
            "url('/assets/Composition_Pictures/poppies_orginal_2x3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(250,250,247,0.0) 55%, rgba(250,250,247,0.97) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 40,
            background: teal,
            color: charcoal,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            padding: "6px 16px",
            borderRadius: 999,
          }}
        >
          Print Quality Guide
        </div>
      </div>

      {/* ── 2. EDITORIAL HEADLINE ── */}
      <div style={{ padding: "20px 56px 0", flexShrink: 0 }}>
        <h2
          style={{
            margin: 0,
            fontFamily:
              "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.1,
            color: charcoal,
            letterSpacing: -1,
          }}
        >
          Is your image
          <br />
          high-res enough to{" "}
          <em style={{ fontStyle: "italic", color: teal }}>print?</em>
        </h2>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: 17,
            color: muted,
            lineHeight: 1.4,
          }}
        >
          Minimum pixels at 300 DPI — by print size.
        </p>
        <div
          style={{
            marginTop: 16,
            height: 2,
            width: 70,
            background: teal,
            borderRadius: 999,
          }}
        />
      </div>

      {/* ── 3. DATA BLOCK ── */}
      <div style={{ padding: "16px 56px 0", flex: 1 }}>
        {SIZES.map((s) => (
          <div
            key={s.size}
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: 6,
              marginBottom: 20,
              paddingBottom: 20,
              borderBottom: "1px solid #EAEAE5",
            }}
          >
            {/* Row 1: size + MP badge + pixel label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap" as const,
              }}
            >
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: charcoal,
                  letterSpacing: -0.3,
                  minWidth: 155,
                }}
              >
                {s.size}
              </span>
              {/* Status badge */}
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: s.labelColor,
                  background: s.labelBg,
                  borderRadius: 999,
                  padding: "4px 12px",
                }}
              >
                {s.label}
              </span>
              {/* MP on right */}
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 15,
                  fontWeight: 600,
                  color: light,
                }}
              >
                {s.mp}
              </span>
            </div>

            {/* Row 2: pixel dimensions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "'Courier New', 'Consolas', monospace",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#0B7A6B",
                  background: `${teal}14`,
                  padding: "3px 10px",
                  borderRadius: 4,
                  letterSpacing: "0.04em",
                }}
              >
                {s.pixels}
              </span>
              <span style={{ fontSize: 15, color: light }}>
                {s.note}
              </span>
            </div>

            {/* Row 3: progress bar */}
            <div
              style={{
                height: 7,
                width: "100%",
                background: "#E8E8E2",
                borderRadius: 999,
                overflow: "hidden",
                marginTop: 2,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${s.bar}%`,
                  background: barColor(s.level),
                  borderRadius: 999,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── 4. INSIGHT CTA ── */}
      <div
        style={{
          margin: "0 56px 0",
          padding: "16px 22px",
          background: `${teal}12`,
          borderLeft: `3px solid ${teal}`,
          borderRadius: "0 8px 8px 0",
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 700, color: charcoal }}>
          Not sure about your image?
        </div>
        <div style={{ fontSize: 13, color: muted, marginTop: 4 }}>
          Upload free at SnapToSize — DPI and resolution are checked before you export.
        </div>
      </div>

      {/* ── 5. FOOTER ── */}
      <div
        style={{
          padding: "12px 56px 24px",
          borderTop: "1px solid #E5E5DF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          marginTop: 10,
        }}
      >
        <div style={{ fontSize: 13, color: light }}>
          Based on 300 DPI output · snaptosize.com data
        </div>
        <div
          style={{
            background: charcoal,
            color: bg,
            fontSize: 13,
            fontWeight: 600,
            padding: "9px 18px",
            borderRadius: 999,
            letterSpacing: "0.04em",
          }}
        >
          snaptosize.com
        </div>
      </div>
    </div>
  );
}
