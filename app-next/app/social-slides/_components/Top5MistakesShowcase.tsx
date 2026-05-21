/* Top5MistakesShowcase — Pinterest pin: 5 size mistakes Etsy print sellers
   make (and the exact fix for each). No photo hero — pure editorial typography
   hero + 5 horizontal split rows (red ✗ mistake | teal ✓ fix).
   Visually distinct from any ranked-list or pack-showcase pin we ship.
   Pinterest 1000x1500 (2:3).
*/

const ITEMS = [
  {
    n: 1,
    bad: "Listing only 2:3 ratio.",
    badNote: "8×12, 16×24, 24×36 — that's it.",
    fix: "Add 4:5 ratio.",
    fixNote: "73% of Etsy buyers print 8×10, 11×14, 16×20.",
  },
  {
    n: 2,
    bad: "No A4 or A-series sizes.",
    badNote: "Locks out every UK, EU, AU buyer.",
    fix: "Add A4, A3, A5.",
    fixNote: "Unlocks 100M+ international Etsy shoppers.",
  },
  {
    n: 3,
    bad: "Exporting at 72 DPI.",
    badNote: "Print looks blurry — refund risk.",
    fix: "Always export at 300 DPI.",
    fixNote: "Sharp at every size, every print method.",
  },
  {
    n: 4,
    bad: "ZIP file over 20MB.",
    badNote: "Etsy rejects the listing upload.",
    fix: "Smart-compress under 20MB.",
    fixNote: "Etsy's hard cap — buyers still get 300 DPI.",
  },
  {
    n: 5,
    bad: "One file = one size.",
    badNote: "Each new size = manual resize, hours lost.",
    fix: "One upload → 28 sizes.",
    fixNote: "5 ratio packs + Extras, ready to ship.",
  },
];

export default function Top5MistakesShowcase() {
  return (
    <div
      id="top5-mistakes-pinterest"
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
      {/* Header — pure typography, no photo */}
      <div
        style={{
          padding: "60px 60px 24px",
          position: "relative",
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FAFAF7 100%)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#0F0F0F",
            color: "#2DD4BF",
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            padding: "8px 14px",
            borderRadius: 999,
            marginBottom: 24,
          }}
        >
          ETSY PRINT SELLERS · COMMON MISTAKES
        </div>
        <h1
          style={{
            fontFamily:
              "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 0.98,
            letterSpacing: -2,
            margin: 0,
            color: "#0F0F0F",
          }}
        >
          5 size mistakes that
          <br />
          cost you <span style={{ fontStyle: "italic", color: "#B91C1C" }}>sales</span>.
        </h1>
        <p
          style={{
            marginTop: 16,
            fontSize: 22,
            color: "#4A4A4A",
            lineHeight: 1.35,
          }}
        >
          And the exact fix for each one. Save this before your next listing.
        </p>
      </div>

      {/* Rows: red mistake | teal fix */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {ITEMS.map((it, idx) => (
          <div
            key={it.n}
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "44px 1fr 1fr",
              alignItems: "center",
              borderTop: "1px solid #E5E5DF",
              background: idx % 2 === 0 ? "#FAFAF7" : "#F4F1EA",
            }}
          >
            <div
              style={{
                fontFamily:
                  "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: 36,
                fontWeight: 600,
                color: "#0F0F0F",
                textAlign: "center",
                paddingTop: 4,
              }}
            >
              {it.n}
            </div>
            {/* Mistake column */}
            <div
              style={{
                padding: "18px 22px 18px 0",
                borderRight: "1px dashed #D9CFCF",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    color: "#B91C1C",
                    fontWeight: 800,
                    fontSize: 22,
                    lineHeight: 1,
                  }}
                >
                  ✗
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0F0F0F",
                    letterSpacing: -0.3,
                    lineHeight: 1.15,
                  }}
                >
                  {it.bad}
                </span>
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#7A4A4A",
                  lineHeight: 1.35,
                  paddingLeft: 32,
                }}
              >
                {it.badNote}
              </div>
            </div>
            {/* Fix column */}
            <div style={{ padding: "18px 28px 18px 22px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    color: "#0B7A6B",
                    fontWeight: 800,
                    fontSize: 22,
                    lineHeight: 1,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0B2522",
                    letterSpacing: -0.3,
                    lineHeight: 1.15,
                  }}
                >
                  {it.fix}
                </span>
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#0B2522",
                  lineHeight: 1.35,
                  paddingLeft: 32,
                  opacity: 0.7,
                }}
              >
                {it.fixNote}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "16px 60px 32px",
          borderTop: "1px solid #E5E5DF",
          background: "#0F0F0F",
          color: "#FAFAF7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: 540 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#FAFAF7",
              marginTop: 6,
              letterSpacing: -0.2,
            }}
          >
            Fix all 5 in one upload.
          </div>
          <div style={{ fontSize: 14, color: "#9CA3AF", marginTop: 4 }}>
            SnapToSize ships every ratio + Extras at 300 DPI under 20MB.
          </div>
        </div>
        <div
          style={{
            background: "#2DD4BF",
            color: "#0B2522",
            padding: "14px 22px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 0.3,
          }}
        >
          snaptosize.com
        </div>
      </div>
    </div>
  );
}
