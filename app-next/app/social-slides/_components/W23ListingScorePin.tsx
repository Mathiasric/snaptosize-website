/* W23ListingScorePin — "How complete is your Etsy listing?" — W23-R1 (2026-05-13)
   5-block recipe: photo hero + Playfair headline + 3-tier score bars + insight + footer
   1000×1500px · 2:3 portrait · Playwright id: w23-listing-score-pin
*/

const TEAL = "#2DD4BF";
const DARK = "#0F0F0F";
const MID = "#4A4A4A";
const GREY = "#9CA3AF";
const AMBER = "#F59E0B";
const BG = "#FAFAF7";
const BORDER = "#E5E3DC";

const tiers = [
  {
    label: "Basic",
    sublabel: "Most new Etsy listings",
    sizes: 5,
    total: 28,
    detail: "e.g. only 2:3 ratio · 5 files · US buyers only",
    color: GREY,
    textColor: GREY,
    bgAccent: "#F5F4F0",
  },
  {
    label: "Good",
    sublabel: "With some effort",
    sizes: 12,
    total: 28,
    detail: "2–3 ratios · ~12 files · misses ISO + extras",
    color: AMBER,
    textColor: AMBER,
    bgAccent: "#FFFBEB",
  },
  {
    label: "Complete",
    sublabel: "What SnapToSize generates",
    sizes: 28,
    total: 28,
    detail: "5 ratios · 28 sizes · 70 files · ISO included · 300 DPI",
    color: TEAL,
    textColor: TEAL,
    bgAccent: "#F0FEFC",
  },
];

export default function W23ListingScorePin() {
  return (
    <div
      id="w23-listing-score-pin"
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
          height: 370,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/most-popular-sizes-room.jpg"
          alt="Gallery wall with framed prints"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 55%",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 110,
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
            ETSY SELLER SELF-AUDIT
          </span>
        </div>
      </div>

      {/* ── BLOCK 2: Headline ── */}
      <div style={{ padding: "2px 60px 0" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: 62,
            fontWeight: 700,
            color: DARK,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            margin: "0 0 10px",
          }}
        >
          How <span style={{ fontStyle: "italic" }}>complete</span> is
          <br />
          your listing?
        </h1>
        <p style={{ fontSize: 18, color: MID, margin: 0, lineHeight: 1.4 }}>
          Buyers filter by size before they filter by price. Missing sizes
          means{" "}
          <span style={{ fontWeight: 700, color: DARK }}>missing sales</span>.
        </p>
      </div>

      {/* ── BLOCK 3: Score Tiers ── */}
      <div style={{ padding: "22px 60px 0", flex: 1 }}>
        {tiers.map((tier, i) => {
          const pct = Math.round((tier.sizes / tier.total) * 100);
          const isComplete = tier.label === "Complete";
          return (
            <div
              key={i}
              style={{
                background: tier.bgAccent,
                border: isComplete ? `2px solid ${TEAL}` : `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "20px 24px",
                marginBottom: 16,
              }}
            >
              {/* Tier header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: tier.textColor,
                    }}
                  >
                    {tier.label}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: GREY,
                      marginLeft: 10,
                    }}
                  >
                    {tier.sublabel}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: tier.textColor,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {tier.sizes}
                  <span style={{ fontSize: 14, fontWeight: 500, color: GREY }}>
                    /{tier.total} sizes
                  </span>
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: 14,
                  background: "#E5E3DC",
                  borderRadius: 7,
                  overflow: "hidden",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background: tier.color,
                    borderRadius: 7,
                  }}
                />
              </div>

              {/* Detail */}
              <p style={{ fontSize: 14, color: MID, margin: 0 }}>
                {tier.detail}
                {isComplete && (
                  <span
                    style={{
                      marginLeft: 8,
                      background: TEAL,
                      color: "#0B2522",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: 99,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    SnapToSize
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── BLOCK 4: Insight ── */}
      <div
        style={{
          margin: "6px 60px 0",
          background: DARK,
          borderRadius: 14,
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 3px",
            }}
          >
            Move to Complete in 60 seconds.
          </p>
          <p style={{ fontSize: 13, color: TEAL, margin: 0 }}>
            1 upload → 5 ratio packs → 28 sizes → 70 files · 300 DPI
          </p>
        </div>
        <div
          style={{
            background: TEAL,
            color: DARK,
            borderRadius: 10,
            padding: "11px 16px",
            fontSize: 14,
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
          padding: "12px 60px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${BORDER}`,
          marginTop: 12,
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
