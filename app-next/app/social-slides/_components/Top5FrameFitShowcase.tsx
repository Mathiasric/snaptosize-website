/* Top5FrameFitShowcase — Pinterest pin: 5 Etsy print sizes that fit
   the frames buyers already own (IKEA Ribba + Target + Michaels).
   Same magazine anatomy as Top5SizesShowcase but a different angle:
   compatibility-first instead of demand-first.
   Pinterest 1000x1500 (2:3).
*/

const SIZES = [
  {
    rank: 1,
    size: "8×10",
    ratio: "4:5",
    bar: 100,
    fits: ["IKEA Ribba", "Target", "Michaels"],
    note: "Universal home frame. Every US buyer already has one on a wall.",
  },
  {
    rank: 2,
    size: "5×7",
    ratio: "5:7",
    bar: 75,
    fits: ["IKEA Ribba", "Target", "Michaels"],
    note: "Desk + gift frame standard. Stocked at every gift shop.",
  },
  {
    rank: 3,
    size: "11×14",
    ratio: "11:14",
    bar: 65,
    fits: ["IKEA Ribba", "Target"],
    note: "Photo-mat anchor — slots into a Ribba 11×14 with 8×10 mat insert.",
  },
  {
    rank: 4,
    size: "16×20",
    ratio: "4:5",
    bar: 50,
    fits: ["IKEA Ribba", "Michaels"],
    note: "Gallery-wall anchor. Premium tier — buyers pay $20+ for this size.",
  },
  {
    rank: 5,
    size: "A4 (8.3×11.7)",
    ratio: "ISO",
    bar: 35,
    fits: ["IKEA Ribba 21×30cm", "Home printers"],
    note: "EU, UK, Australia. The A4 size unlocks every international buyer.",
  },
];

export default function Top5FrameFitShowcase() {
  return (
    <div
      id="top5-frame-fit-pinterest"
      style={{
        width: 1000,
        height: 1500,
        background: "#FAFAF7",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif",
        color: "#1A1A1A",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero photo strip */}
      <div
        style={{
          position: "relative",
          height: 440,
          width: "100%",
          backgroundImage: "url('/assets/frame-fit-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(250,250,247,1) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 40,
            background: "#2DD4BF",
            color: "#0B2522",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            padding: "8px 16px",
            borderRadius: 999,
          }}
        >
          FRAME-FIT GUIDE
        </div>
      </div>

      {/* Headline */}
      <div style={{ padding: "12px 60px 0" }}>
        <h1
          style={{
            fontFamily:
              "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: -1.4,
            margin: 0,
            color: "#0F0F0F",
          }}
        >
          5 print sizes that fit the
          <br />
          frames buyers <span style={{ fontStyle: "italic" }}>already</span> own.
        </h1>
        <p
          style={{
            marginTop: 12,
            fontSize: 21,
            color: "#4A4A4A",
            lineHeight: 1.35,
          }}
        >
          Ranked by IKEA Ribba + Target + Michaels frame compatibility.
        </p>
      </div>

      {/* Rows */}
      <div style={{ padding: "22px 60px 0", flex: 1 }}>
        {SIZES.map((s) => (
          <div
            key={s.rank}
            style={{
              display: "grid",
              gridTemplateColumns: "44px 1fr",
              gap: 16,
              marginBottom: 16,
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily:
                  "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: 42,
                fontWeight: 600,
                color: "#0F0F0F",
                lineHeight: 1,
              }}
            >
              {s.rank}
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 6,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#0F0F0F",
                    letterSpacing: -0.5,
                  }}
                >
                  {s.size}″
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "#6B6B6B",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                >
                  {s.ratio} ratio
                </span>
              </div>
              <div
                style={{
                  height: 8,
                  width: "100%",
                  background: "#E8E8E2",
                  borderRadius: 999,
                  overflow: "hidden",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${s.bar}%`,
                    background:
                      "linear-gradient(90deg, #2DD4BF 0%, #14B8A6 100%)",
                    borderRadius: 999,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 6,
                }}
              >
                {s.fits.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#0B7A6B",
                      background: "#E6FAF6",
                      padding: "3px 10px",
                      borderRadius: 999,
                      letterSpacing: 0.3,
                    }}
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "#4A4A4A",
                  lineHeight: 1.35,
                }}
              >
                {s.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "10px 60px 32px",
          borderTop: "1px solid #E5E5DF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#0F0F0F",
              marginTop: 14,
            }}
          >
            One upload. Every frame in their living room.
          </div>
          <div style={{ fontSize: 15, color: "#6B6B6B", marginTop: 4 }}>
            SnapToSize ships all 5 sizes — plus 23 more — from a single artwork.
          </div>
        </div>
        <div
          style={{
            background: "#0F0F0F",
            color: "#FAFAF7",
            padding: "14px 22px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 0.3,
          }}
        >
          snaptosize.com
        </div>
      </div>
    </div>
  );
}
