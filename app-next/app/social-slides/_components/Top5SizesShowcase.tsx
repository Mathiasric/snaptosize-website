/* Top5SizesShowcase — Pinterest pin showing the top 5 best-selling Etsy print sizes
   with real artwork mockup, ratios, price ranges, and a teal bar-graph visualization.
   Pinterest 1000×1500 (2:3).
*/

const SIZES = [
  {
    rank: 1,
    size: "8×10",
    ratio: "4:5",
    bar: 100,
    price: "$4–$12",
    note: "Default Etsy buy. Fits IKEA / Target frames everywhere.",
  },
  {
    rank: 2,
    size: "5×7",
    ratio: "5:7",
    bar: 78,
    price: "$3–$8",
    note: "Desk + gift size. Often paired with 8×10.",
  },
  {
    rank: 3,
    size: "11×14",
    ratio: "11:14",
    bar: 62,
    price: "$6–$18",
    note: "Living-room statement. Strong margins.",
  },
  {
    rank: 4,
    size: "16×20",
    ratio: "4:5",
    bar: 48,
    price: "$8–$25",
    note: "Gallery-wall anchor. Premium buyers.",
  },
  {
    rank: 5,
    size: "18×24",
    ratio: "3:4",
    bar: 35,
    price: "$10–$30",
    note: "Poster format. Nursery + motivational.",
  },
];

export default function Top5SizesShowcase() {
  return (
    <div
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
          height: 460,
          width: "100%",
          backgroundImage: "url('/assets/most-popular-sizes-room.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(250,250,247,1) 100%)",
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
          ETSY SELLER DATA
        </div>
      </div>

      {/* Headline */}
      <div style={{ padding: "12px 60px 0" }}>
        <h1
          style={{
            fontFamily:
              "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            margin: 0,
            color: "#0F0F0F",
          }}
        >
          The 5 Etsy print
          <br />
          sizes that <span style={{ fontStyle: "italic" }}>actually</span> sell.
        </h1>
        <p
          style={{
            marginTop: 14,
            fontSize: 22,
            color: "#4A4A4A",
            lineHeight: 1.35,
          }}
        >
          Ranked by buyer demand · Ratios you need to cover all of them
        </p>
      </div>

      {/* Bars */}
      <div style={{ padding: "28px 60px 0", flex: 1 }}>
        {SIZES.map((s) => (
          <div
            key={s.rank}
            style={{
              display: "grid",
              gridTemplateColumns: "44px 1fr",
              gap: 16,
              marginBottom: 18,
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily:
                  "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: 44,
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
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#0F0F0F",
                    letterSpacing: -0.5,
                  }}
                >
                  {s.size}″
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: "#6B6B6B",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                >
                  {s.ratio} ratio
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0B7A6B",
                  }}
                >
                  {s.price}
                </span>
              </div>
              <div
                style={{
                  height: 10,
                  width: "100%",
                  background: "#E8E8E2",
                  borderRadius: 999,
                  overflow: "hidden",
                  marginBottom: 6,
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
                  fontSize: 16,
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
            Cover all 5 from one upload.
          </div>
          <div style={{ fontSize: 15, color: "#6B6B6B", marginTop: 4 }}>
            SnapToSize generates 29 print sizes from a single artwork — every
            ratio, 300 DPI, ready for Etsy.
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
