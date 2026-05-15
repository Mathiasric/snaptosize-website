/* W23A4BlindSpot — "A4 doesn't fit US frames." — W23-P11 (2026-05-15)
   Light #FAFAF7 background. Photo hero + size mismatch comparison rows.
   1000×1500px · 2:3 portrait · Playwright id: w23-a4-blind-spot
*/

const TEAL = "#2DD4BF";
const DARK = "#0F0F0F";
const MID = "#4A4A4A";
const GREY = "#9CA3AF";
const RED = "#EF4444";
const BG = "#FAFAF7";
const BORDER = "#E5E3DC";

const US_SIZES = [
  { size: '8×10"', ratio: "4:5", note: "#1 most sold US frame", match: false },
  { size: '5×7"', ratio: "5:7", note: "greeting cards + prints", match: false },
  { size: '11×14"', ratio: "11:14", note: "gallery walls", match: false },
  { size: '16×20"', ratio: "4:5", note: "statement pieces", match: false },
  { size: '8.5×11"', ratio: "Letter", note: "closest to A4 — still not exact", match: true },
];

export default function W23A4BlindSpot() {
  return (
    <div
      id="w23-a4-blind-spot"
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
      <div style={{ width: 1000, height: 350, flexShrink: 0, position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/most-popular-sizes-room.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }}
        />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 90, background: `linear-gradient(to bottom, transparent, ${BG})` }} />
        <div style={{ position: "absolute", top: 22, left: 28, background: "rgba(239,68,68,0.88)", backdropFilter: "blur(6px)", borderRadius: 24, padding: "8px 18px" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#fff", textTransform: "uppercase" as const }}>
            A4 BLIND SPOT
          </span>
        </div>
      </div>

      {/* ── BLOCK 2: Headline ── */}
      <div style={{ padding: "4px 60px 18px" }}>
        <h1 style={{ fontSize: 60, fontWeight: 900, color: DARK, lineHeight: 1.05, margin: "0 0 12px" }}>
          A4 doesn't fit
          <br />
          US frames.
        </h1>
        <p style={{ fontSize: 20, color: MID, margin: 0, lineHeight: 1.4 }}>
          A4 is 8.27×11.69″ — no standard US frame matches it exactly. Your buyers print at these:
        </p>
      </div>

      {/* ── BLOCK 3: Size comparison rows ── */}
      <div style={{ flex: 1, padding: "0 60px", display: "flex", flexDirection: "column", gap: 13 }}>
        {US_SIZES.map((s) => (
          <div
            key={s.size}
            style={{
              flex: 1,
              background: s.match ? "#F0FEFC" : "#FFF8F8",
              borderRadius: 14,
              border: `1.5px solid ${s.match ? TEAL + "40" : RED + "30"}`,
              borderLeft: `5px solid ${s.match ? TEAL : RED}`,
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <span style={{ fontSize: 38, fontWeight: 900, color: s.match ? TEAL : RED, minWidth: 130, lineHeight: 1, fontVariantNumeric: "tabular-nums" as const }}>
              {s.size}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: DARK }}>{s.ratio} ratio</div>
              <div style={{ fontSize: 14, color: MID, marginTop: 2 }}>{s.note}</div>
            </div>
            <div style={{
              fontSize: 13,
              fontWeight: 700,
              color: s.match ? "#065F46" : "#991B1B",
              background: s.match ? "#D1FAE5" : "#FEE2E2",
              borderRadius: 20,
              padding: "6px 14px",
              whiteSpace: "nowrap" as const,
            }}>
              {s.match ? "≈ close" : "✗ mismatch"}
            </div>
          </div>
        ))}
      </div>

      {/* ── BLOCK 4: CTA ── */}
      <div style={{
        margin: "16px 60px 0",
        background: DARK,
        borderRadius: 14,
        padding: "22px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}>
        <div>
          <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
            Convert A4 → all US sizes instantly.
          </p>
          <p style={{ fontSize: 15, color: TEAL, margin: 0 }}>
            8×10 · 5×7 · 11×14 · 16×20 · one upload
          </p>
        </div>
        <div style={{ background: TEAL, color: "#0F0F0F", borderRadius: 10, padding: "12px 20px", fontSize: 16, fontWeight: 800, whiteSpace: "nowrap" as const, flexShrink: 0 }}>
          Try free →
        </div>
      </div>

      {/* ── BLOCK 5: Footer ── */}
      <div style={{ padding: "16px 60px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${BORDER}`, marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill={TEAL} />
            <path d="M5.5 10.5L8.5 13.5L14.5 7.5" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>snaptosize.com</span>
        </div>
        <span style={{ fontSize: 13, color: GREY }}>app.snaptosize.com · free to start</span>
      </div>
    </div>
  );
}
