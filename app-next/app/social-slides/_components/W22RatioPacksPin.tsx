/* W22RatioPacksPin — "1 Upload → 5 Packs → 70 Files"
   Pinterest 1000×1500 (2:3). Real photo hero + 5 pack rows with large readable chips.
*/

const PACKS = [
  {
    ratio: "2:3",
    name: "Portrait Wall Art",
    note: "most common for Etsy wall art",
    count: 7,
    sizes: ["4×6", "6×9", "8×12", "10×15", "12×18", "16×24", "20×30"],
    color: "#0D9488",
    chipBg: "#CCFBF1",
    chipText: "#134E4A",
  },
  {
    ratio: "3:4",
    name: "Classic Photo Frame",
    note: "standard photo & poster frames",
    count: 5,
    sizes: ["6×8", "9×12", "12×16", "15×20", "18×24"],
    color: "#0D9488",
    chipBg: "#CCFBF1",
    chipText: "#134E4A",
  },
  {
    ratio: "4:5",
    name: "Traditional Art",
    note: "home of the bestselling 8×10",
    count: 5,
    sizes: ["8×10", "12×15", "16×20", "20×25", "24×30"],
    color: "#0D9488",
    chipBg: "#CCFBF1",
    chipText: "#134E4A",
  },
  {
    ratio: "ISO",
    name: "A-Series — International",
    note: "UK · EU · Australia buyers",
    count: 5,
    sizes: ["A5", "A4", "A3", "A2", "A1"],
    color: "#6D28D9",
    chipBg: "#EDE9FE",
    chipText: "#3B0764",
  },
  {
    ratio: "Extras",
    name: "Common US Sizes",
    note: "letter · cards · wide posters",
    count: 6,
    sizes: ["5×7", "8.5×11", "11×14", "11×17", "13×19", "20×24"],
    color: "#B45309",
    chipBg: "#FEF3C7",
    chipText: "#78350F",
  },
] as const;

export default function W22RatioPacksPin() {
  return (
    <section
      id="w22-ratio-packs-pin"
      style={{
        width: 1000,
        height: 1500,
        background: "#FAFAF7",
        color: "#1A1A1A",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── 1. PHOTO HERO STRIP ── */}
      <div style={{
        position: "relative",
        height: 380,
        width: "100%",
        backgroundImage: "url('/assets/most-popular-sizes-room.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        flexShrink: 0,
      }}>
        {/* Gradient fade to background */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(250,250,247,0) 40%, rgba(250,250,247,1) 100%)",
        }} />
        {/* Teal pill label */}
        <div style={{
          position: "absolute", top: 36, left: 44,
          background: "#2DD4BF",
          color: "#0B2522",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "9px 20px",
          borderRadius: 999,
        }}>
          5 RATIO PACKS
        </div>
        {/* "1 UPLOAD" badge top-right */}
        <div style={{
          position: "absolute", top: 36, right: 44,
          background: "rgba(0,0,0,0.55)",
          color: "#FAFAF7",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "0.08em",
          padding: "9px 18px",
          borderRadius: 999,
          backdropFilter: "blur(4px)",
        }}>
          1 UPLOAD
        </div>
      </div>

      {/* ── 2. EDITORIAL HEADLINE ── */}
      <div style={{ padding: "4px 52px 0", flexShrink: 0 }}>
        <h1 style={{
          fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
          fontSize: 68,
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: -1.5,
          margin: 0,
          color: "#0F0F0F",
        }}>
          Every ratio.{" "}
          <span style={{ fontStyle: "italic", color: "#0D9488" }}>One</span>{" "}
          upload.
        </h1>
        <p style={{
          marginTop: 12,
          fontSize: 21,
          color: "#5A5A5A",
          lineHeight: 1.35,
          fontWeight: 400,
        }}>
          28 sizes · 5 ratio packs · 300 DPI · Etsy-ready ZIP
        </p>
      </div>

      {/* ── 3. PACK CARDS ── */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "8px 40px 0",
      }}>
        {PACKS.map((pack) => (
          <div
            key={pack.ratio}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8E3DC",
              borderLeft: `5px solid ${pack.color}`,
              borderRadius: 12,
              padding: "14px 22px 16px",
            }}
          >
            {/* Header row */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
              <span style={{
                fontSize: 36,
                fontWeight: 900,
                color: pack.color,
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                lineHeight: 1,
                minWidth: 80,
              }}>
                {pack.ratio}
              </span>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1 }}>
                  {pack.name}
                </div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 1 }}>
                  {pack.note}
                </div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: pack.color }}>{pack.count}</span>
                <span style={{ fontSize: 12, color: "#888", marginLeft: 3 }}>sizes</span>
              </div>
            </div>

            {/* Size chips — large enough to read at thumbnail */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {pack.sizes.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 21,
                    fontWeight: 700,
                    color: pack.chipText,
                    background: pack.chipBg,
                    border: `1.5px solid ${pack.color}40`,
                    borderRadius: 7,
                    padding: "7px 16px",
                    letterSpacing: "0.01em",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── 4. INSIGHT + 5. FOOTER ── */}
      <div style={{
        padding: "14px 52px 32px",
        borderTop: "1px solid #E5E0D8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
        gap: 16,
      }}>
        <div>
          <div style={{ fontSize: 19, fontWeight: 700, color: "#0F0F0F" }}>
            Generate all 28 sizes from 1 artwork upload.
          </div>
          <div style={{ fontSize: 15, color: "#6B6B6B", marginTop: 4 }}>
            No Photoshop · 60 seconds · Etsy-ready
          </div>
        </div>
        <div style={{
          background: "#0F0F0F",
          color: "#FAFAF7",
          padding: "13px 24px",
          borderRadius: 999,
          fontSize: 16,
          fontWeight: 700,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          snaptosize.com
        </div>
      </div>
    </section>
  );
}
