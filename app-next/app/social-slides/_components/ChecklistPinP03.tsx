/* ChecklistPinP03 — "6 Sizes Every Etsy Digital Download Needs" — W20-P03
   Pinterest format: 1000×1500px (2:3 portrait)
   Teal checkmarks, dark background, full-height layout.
*/

const ITEMS = [
  { text: "5×7 in", sub: "most popular frame size" },
  { text: "8×10 in", sub: "standard US frame" },
  { text: "11×14 in", sub: "gallery wall staple" },
  { text: "16×20 in", sub: "statement piece" },
  { text: "A4 (210×297mm)", sub: "European standard" },
  { text: "4×6 in", sub: "photo print size" },
];

const teal = "#2DD4BF";
const purple = "#A78BFA";

function CheckIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="16" cy="16" r="15" fill={`${teal}22`} stroke={`${teal}66`} strokeWidth="1.5" />
      <polyline
        points="9,16 14,21 23,11"
        stroke={teal}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function ChecklistPinP03() {
  return (
    <section
      id="p03-checklist"
      style={{
        width: 1000,
        height: 1500,
        background: "#0B0B12",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "3%", right: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${teal}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${purple}12 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* ── HEADER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: "52px 56px 0",
      }}>
        {/* Eyebrow */}
        <p style={{
          margin: "0 0 12px",
          fontSize: 14,
          fontWeight: 700,
          color: `${teal}99`,
          letterSpacing: "0.18em",
          textTransform: "uppercase" as const,
        }}>
          Etsy Seller Checklist
        </p>

        {/* Title */}
        <h1 style={{
          margin: "0 0 18px",
          fontSize: 62,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}>
          6 Sizes Every Etsy Digital Download Needs
        </h1>

        {/* Sub */}
        <p style={{
          margin: 0,
          fontSize: 19,
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.4,
        }}>
          Include these and never get a &ldquo;wrong size&rdquo; complaint again
        </p>

        {/* Divider */}
        <div style={{
          marginTop: 28,
          height: 2,
          background: `linear-gradient(90deg, ${teal}66 0%, transparent 100%)`,
          borderRadius: 2,
        }} />
      </div>

      {/* ── ITEMS ── */}
      <div style={{
        position: "relative", zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "24px 40px",
      }}>
        {ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 20,
              background: `${teal}08`,
              border: `1px solid ${teal}22`,
              borderRadius: 18,
              padding: "0 24px",
            }}
          >
            <CheckIcon size={34} />
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
              }}>
                {item.text}
              </span>
              <span style={{
                fontSize: 15,
                fontWeight: 400,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.2,
              }}>
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA FOOTER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        margin: "0 40px 32px",
        background: `linear-gradient(135deg, ${teal}18, ${teal}08)`,
        border: `1px solid ${teal}33`,
        borderRadius: 999,
        padding: "18px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "-0.01em",
        }}>
          SnapToSize resizes all at once →
        </span>
        <span style={{
          fontSize: 16,
          fontWeight: 600,
          color: teal,
        }}>
          app.snaptosize.com
        </span>
      </div>

      {/* Watermark */}
      <div style={{
        padding: "8px 0 12px",
        textAlign: "center",
        fontSize: 11,
        color: "rgba(255,255,255,0.18)",
        letterSpacing: "0.12em",
      }}>
        snaptosize.com
      </div>
    </section>
  );
}
