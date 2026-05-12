/* W22SizeDemandPin — "The 7 sizes Etsy buyers search most" — W22-R1 (2026-05-12)
   5-block recipe: photo hero + Playfair headline + bar chart + insight + footer
   1000×1500px · 2:3 portrait · Playwright id: w22-size-demand-pin
*/

const TEAL = "#2DD4BF";
const DARK = "#0F0F0F";
const MID = "#4A4A4A";
const GREY = "#9CA3AF";
const BG = "#FAFAF7";
const BORDER = "#E5E3DC";

const sizes = [
  { label: "8×10", demand: 100, note: "US frame standard" },
  { label: "5×7",  demand: 84,  note: "Greeting card & small frame" },
  { label: "11×14", demand: 72, note: "Gallery wall staple" },
  { label: "16×20", demand: 58, note: "Large wall art" },
  { label: "A4",   demand: 46,  note: "UK, EU & AU standard" },
  { label: "4×6",  demand: 37,  note: "Photo & mini print" },
  { label: "8.5×11", demand: 28, note: "US letter / Canva default" },
];

export default function W22SizeDemandPin() {
  return (
    <div
      id="w22-size-demand-pin"
      style={{
        width: 1000,
        height: 1500,
        background: BG,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── BLOCK 1: Photo Hero ── */}
      <div
        style={{
          width: 1000,
          height: 360,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/most-popular-sizes-room.jpg"
          alt="Gallery wall with multiple print sizes"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 100,
            background: `linear-gradient(to bottom, transparent, ${BG})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 40,
            background: "rgba(15,15,15,0.72)",
            backdropFilter: "blur(6px)",
            borderRadius: 24,
            padding: "8px 18px",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: TEAL,
              textTransform: "uppercase",
            }}
          >
            ETSY BUYER SEARCH DATA
          </span>
        </div>
      </div>

      {/* ── BLOCK 2: Headline ── */}
      <div style={{ padding: "4px 60px 0" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: 64,
            fontWeight: 700,
            color: DARK,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            margin: "0 0 10px",
          }}
        >
          The 7 sizes buyers{" "}
          <span style={{ fontStyle: "italic" }}>actually</span> search.
        </h1>
        <p style={{ fontSize: 19, color: MID, margin: 0, lineHeight: 1.4 }}>
          Miss even one and that buyer goes to a listing that stocks{" "}
          <span style={{ fontWeight: 700, color: DARK }}>all of them</span>.
        </p>
      </div>

      {/* ── BLOCK 3: Bar Chart ── */}
      <div style={{ padding: "22px 60px 0", flex: 1 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: GREY,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Relative buyer demand →
        </div>
        {sizes.map((s, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 5,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: DARK,
                    minWidth: 68,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {s.label}
                </span>
                <span style={{ fontSize: 13, color: GREY }}>{s.note}</span>
              </div>
              {i === 0 && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#0B2522",
                    background: TEAL,
                    padding: "3px 10px",
                    borderRadius: 99,
                    textTransform: "uppercase",
                  }}
                >
                  #1 Most searched
                </span>
              )}
            </div>
            <div
              style={{
                height: 16,
                background: "#E5E3DC",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${s.demand}%`,
                  height: "100%",
                  background:
                    i === 0
                      ? TEAL
                      : `rgba(45, 212, 191, ${0.75 - i * 0.08})`,
                  borderRadius: 8,
                  transition: "width 0.3s",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── BLOCK 4: Insight ── */}
      <div
        style={{
          margin: "14px 60px 0",
          background: DARK,
          borderRadius: 14,
          padding: "20px 26px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: 19,
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 4px",
            }}
          >
            SnapToSize generates all 7 — from 1 upload.
          </p>
          <p style={{ fontSize: 14, color: TEAL, margin: 0 }}>
            5 ratio packs · 28 sizes · 300 DPI JPG · Etsy-ready ZIP
          </p>
        </div>
        <div
          style={{
            background: TEAL,
            color: DARK,
            borderRadius: 10,
            padding: "12px 18px",
            fontSize: 15,
            fontWeight: 800,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Try free →
        </div>
      </div>

      {/* ── BLOCK 5: Footer ── */}
      <div
        style={{
          padding: "14px 60px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${BORDER}`,
          marginTop: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill={TEAL} />
            <path
              d="M5.5 10.5L8.5 13.5L14.5 7.5"
              stroke="#0F0F0F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>
            snaptosize.com
          </span>
        </div>
        <span style={{ fontSize: 13, color: GREY }}>
          app.snaptosize.com · free to start
        </span>
      </div>
    </div>
  );
}
