/* W21PriceLadderPin — "What buyers actually pay for each print size"
   Pinterest 1000×1500 (2:3). Light editorial with Koi art hero.
   Data: price tiers by size — pricing strategy for Etsy sellers.
*/

const teal = "#2DD4BF";
const charcoal = "#0F0F0F";
const muted = "#4A4A4A";
const light = "#6B6B6B";
const bg = "#FAFAF7";

const SIZES = [
  {
    rank: 1,
    size: "8×10",
    ratio: "4:5",
    bar: 100,
    priceRange: "$5 – $12",
    tier: "SWEET SPOT",
    tierBg: `${teal}22`,
    tierColor: teal,
    note: "Highest demand. Every US frame store stocks this size.",
  },
  {
    rank: 2,
    size: "5×7",
    ratio: "5:7",
    bar: 72,
    priceRange: "$3 – $8",
    tier: "STARTER",
    tierBg: "#6B728022",
    tierColor: "#6B7280",
    note: "Gift & desk frames. Great bundle-with for higher AOV.",
  },
  {
    rank: 3,
    size: "11×14",
    ratio: "~4:5",
    bar: 62,
    priceRange: "$7 – $18",
    tier: "VALUE",
    tierBg: "#A78BFA22",
    tierColor: "#A78BFA",
    note: "Gallery wall staple. Easy upsell from 8×10.",
  },
  {
    rank: 4,
    size: "16×20",
    ratio: "4:5",
    bar: 48,
    priceRange: "$12 – $28",
    tier: "PREMIUM",
    tierBg: "#F59E0B22",
    tierColor: "#F59E0B",
    note: "Statement piece. Buyers expect to pay more — charge it.",
  },
  {
    rank: 5,
    size: "A4",
    ratio: "ISO",
    bar: 38,
    priceRange: "€4 – €12",
    tier: "EU MARKET",
    tierBg: "#60A5FA22",
    tierColor: "#60A5FA",
    note: "Unlocks UK, EU & Australia. Massively underserved niche.",
  },
];

export default function W21PriceLadderPin() {
  return (
    <div
      id="w21-price-ladder-pinterest"
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
          height: 400,
          width: "100%",
          backgroundImage:
            "url('/assets/Composition_Pictures/Koi_common_11x14.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          flexShrink: 0,
        }}
      >
        {/* dark gradient fade into content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(250,250,247,0.0) 60%, rgba(250,250,247,0.95) 100%)",
          }}
        />
        {/* teal pill label */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 40,
            background: teal,
            color: charcoal,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            padding: "7px 18px",
            borderRadius: 999,
          }}
        >
          Etsy Pricing Guide
        </div>
      </div>

      {/* ── 2. EDITORIAL HEADLINE ── */}
      <div
        style={{
          padding: "24px 56px 0",
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily:
              "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.08,
            color: charcoal,
            letterSpacing: -1,
          }}
        >
          What buyers{" "}
          <em style={{ fontStyle: "italic", color: teal }}>actually</em>
          {" "}pay<br />per print size
        </h2>
        <p
          style={{
            margin: "12px 0 0",
            fontSize: 18,
            color: muted,
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          Price by size, not by artwork — here's the data.
        </p>
        <div
          style={{
            marginTop: 20,
            height: 2,
            width: 80,
            background: teal,
            borderRadius: 999,
          }}
        />
      </div>

      {/* ── 3. DATA BLOCK — price ladder ── */}
      <div style={{ padding: "22px 56px 0", flex: 1 }}>
        {SIZES.map((s) => (
          <div
            key={s.rank}
            style={{
              display: "grid",
              gridTemplateColumns: "38px 1fr",
              gap: 14,
              marginBottom: 16,
              alignItems: "start",
            }}
          >
            {/* Rank number */}
            <div
              style={{
                fontFamily:
                  "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: 40,
                fontWeight: 600,
                color: "#D1D5DB",
                lineHeight: 1,
                paddingTop: 2,
              }}
            >
              {s.rank}
            </div>

            <div>
              {/* Size + tier badge + price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 5,
                  flexWrap: "wrap" as const,
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: charcoal,
                    letterSpacing: -0.5,
                  }}
                >
                  {s.size}″
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: light,
                    fontWeight: 500,
                  }}
                >
                  {s.ratio}
                </span>
                {/* Tier badge */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: s.tierColor,
                    background: s.tierBg,
                    border: `1px solid ${s.tierColor}44`,
                    borderRadius: 999,
                    padding: "3px 10px",
                  }}
                >
                  {s.tier}
                </span>
                {/* Price — right-aligned */}
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0B7A6B",
                  }}
                >
                  {s.priceRange}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: 8,
                  width: "100%",
                  background: "#E8E8E2",
                  borderRadius: 999,
                  overflow: "hidden",
                  marginBottom: 5,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${s.bar}%`,
                    background: `linear-gradient(90deg, ${teal} 0%, #14B8A6 100%)`,
                    borderRadius: 999,
                  }}
                />
              </div>

              {/* Note */}
              <div
                style={{
                  fontSize: 14,
                  color: muted,
                  lineHeight: 1.35,
                }}
              >
                {s.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── 4. INSIGHT CTA ── */}
      <div
        style={{
          margin: "8px 56px 0",
          padding: "18px 24px",
          background: `${teal}12`,
          borderLeft: `3px solid ${teal}`,
          borderRadius: "0 8px 8px 0",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: charcoal,
          }}
        >
          Get all 5 sizes from one upload.
        </div>
        <div style={{ fontSize: 14, color: muted, marginTop: 4 }}>
          SnapToSize exports 70 print-ready files at 300 DPI — every size, every ratio.
        </div>
      </div>

      {/* ── 5. FOOTER ── */}
      <div
        style={{
          padding: "14px 56px 28px",
          borderTop: "1px solid #E5E5DF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          marginTop: 12,
        }}
      >
        <div style={{ fontSize: 14, color: light }}>
          Prices based on Etsy market data, 2026
        </div>
        <div
          style={{
            background: charcoal,
            color: bg,
            fontSize: 14,
            fontWeight: 600,
            padding: "10px 20px",
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
