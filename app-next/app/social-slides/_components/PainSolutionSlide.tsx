/* PainSolutionSlide — Sharp before/after pain→solution format.
   Left: red/warm — the painful "before" state.
   Right: teal/cool — the SnapToSize solution.
   No artwork needed — pure messaging pin.

   Usage:
     <PainSolutionSlide pain="missing-size" ratio="pinterest" />
     <PainSolutionSlide pain="folder-chaos" ratio="pinterest" />
     <PainSolutionSlide pain="manual-resize" ratio="pinterest" />
*/

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

type PainType = "missing-size" | "folder-chaos" | "manual-resize";

interface PainConfig {
  hook: string;
  beforeLabel: string;
  beforeStat: string;
  beforeStatLabel: string;
  beforeItems: string[];
  afterLabel: string;
  afterStat: string;
  afterStatLabel: string;
  afterItems: string[];
  cta: string;
}

const PAIN_CONFIG: Record<PainType, PainConfig> = {
  "missing-size": {
    hook: "Stop losing buyers.",
    beforeLabel: "Without SnapToSize",
    beforeStat: "8",
    beforeStatLabel: "sizes in your shop",
    beforeItems: [
      "Buyer asks for 8×12",
      "You don't have it",
      "They buy from someone else",
      "You never know why",
    ],
    afterLabel: "With SnapToSize",
    afterStat: "28",
    afterStatLabel: "print-ready sizes",
    afterItems: [
      "2:3 · 3:4 · 4:5 covered",
      "ISO A-series included",
      "Extras: 5×7, 11×14 ready",
      "One upload. Done.",
    ],
    cta: "Try free → app.snaptosize.com",
  },
  "folder-chaos": {
    hook: "End the file chaos.",
    beforeLabel: "Your downloads folder",
    beforeStat: "47",
    beforeStatLabel: "files, zero order",
    beforeItems: [
      "print_8x10_final_v2.jpg",
      "12x18_MAYBE.psd",
      "resize_attempt3_copy.jpg",
      "Which one do I send??",
    ],
    afterLabel: "SnapToSize output",
    afterStat: "5",
    afterStatLabel: "organized ZIP packs",
    afterItems: [
      "2-3_Ratio_Pack.zip",
      "3-4_Ratio_Pack.zip",
      "4-5_Ratio_Pack.zip",
      "ISO_Pack.zip + Extras.zip",
    ],
    cta: "Try free → app.snaptosize.com",
  },
  "manual-resize": {
    hook: "Stop wasting hours.",
    beforeLabel: "Manual resizing",
    beforeStat: "6h",
    beforeStatLabel: "per artwork",
    beforeItems: [
      "Open Photoshop",
      "Resize, check DPI, export",
      "Repeat × 28 sizes",
      "Still miss a size",
    ],
    afterLabel: "With SnapToSize",
    afterStat: "60s",
    afterStatLabel: "per artwork",
    afterItems: [
      "Upload once",
      "28 files generated",
      "300 DPI · Etsy-compliant",
      "Download ZIP — done",
    ],
    cta: "Try free → app.snaptosize.com",
  },
};

interface Props {
  pain: PainType;
  ratio: "pinterest" | "instagram";
}

export default function PainSolutionSlide({ pain, ratio }: Props) {
  const { w, h } = DIMS[ratio];
  const iP = ratio === "pinterest";
  const cfg = PAIN_CONFIG[pain];

  const red = "#F87171";
  const redDim = "rgba(248,113,113,0.08)";
  const redBorder = "rgba(248,113,113,0.25)";
  const teal = "#2DD4BF";
  const tealDim = "rgba(45,212,191,0.08)";
  const tealBorder = "rgba(45,212,191,0.25)";

  const fontSize = {
    hook:  iP ? 70 : 60,
    stat:  iP ? 90 : 76,
    label: iP ? 15 : 13,
    item:  iP ? 18 : 15,
    badge: iP ? 13 : 11,
    cta:   iP ? 17 : 14,
  };

  return (
    <section
      id={`pain-solution-${pain}-${ratio}`}
      style={{
        width: w, height: h,
        background: "#07070F",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Red glow — left */}
      <div style={{
        position: "absolute", top: "10%", left: -120,
        width: iP ? 480 : 440, height: iP ? 600 : 520,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(248,113,113,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Teal glow — right */}
      <div style={{
        position: "absolute", bottom: "10%", right: -100,
        width: iP ? 500 : 460, height: iP ? 600 : 520,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── HOOK HEADER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: iP ? "52px 56px 0" : "44px 48px 0",
      }}>
        <h1 style={{
          margin: 0,
          fontSize: fontSize.hook,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
        }}>
          {cfg.hook}
        </h1>
        <div style={{
          marginTop: iP ? 6 : 5,
          width: iP ? 60 : 48,
          height: 3,
          background: `linear-gradient(90deg, ${teal}, ${teal}00)`,
          borderRadius: 2,
        }} />
      </div>

      {/* ── SPLIT PANELS ── */}
      <div style={{
        position: "relative", zIndex: 10,
        flex: 1,
        display: "flex",
        gap: iP ? 20 : 16,
        padding: iP ? "32px 40px" : "26px 34px",
        alignItems: "stretch",
      }}>

        {/* BEFORE panel */}
        <div style={{
          flex: 1,
          background: redDim,
          border: `1px solid ${redBorder}`,
          borderRadius: iP ? 20 : 16,
          padding: iP ? "28px 24px" : "22px 20px",
          display: "flex",
          flexDirection: "column",
          gap: iP ? 20 : 16,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Corner label */}
          <div style={{
            alignSelf: "flex-start",
            background: "rgba(248,113,113,0.12)",
            border: `1px solid ${redBorder}`,
            borderRadius: 999,
            padding: iP ? "5px 14px" : "4px 12px",
            fontSize: fontSize.badge,
            fontWeight: 700,
            color: red,
            letterSpacing: "0.05em",
          }}>
            BEFORE
          </div>

          {/* Stat */}
          <div>
            <div style={{
              fontSize: fontSize.stat,
              fontWeight: 900,
              color: red,
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}>
              {cfg.beforeStat}
            </div>
            <div style={{
              fontSize: fontSize.label,
              color: "rgba(255,255,255,0.4)",
              marginTop: 4,
              lineHeight: 1.3,
            }}>
              {cfg.beforeStatLabel}
            </div>
          </div>

          {/* Panel label */}
          <div style={{
            fontSize: fontSize.label + 2,
            fontWeight: 700,
            color: "rgba(255,255,255,0.55)",
          }}>
            {cfg.beforeLabel}
          </div>

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: iP ? 12 : 9, flex: 1 }}>
            {cfg.beforeItems.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: fontSize.item,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.4,
              }}>
                <span style={{ color: red, marginTop: 1, flexShrink: 0, fontSize: fontSize.item - 2 }}>✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AFTER panel */}
        <div style={{
          flex: 1,
          background: tealDim,
          border: `1px solid ${tealBorder}`,
          borderRadius: iP ? 20 : 16,
          padding: iP ? "28px 24px" : "22px 20px",
          display: "flex",
          flexDirection: "column",
          gap: iP ? 20 : 16,
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 0 40px rgba(45,212,191,0.06)`,
        }}>
          {/* Corner label */}
          <div style={{
            alignSelf: "flex-start",
            background: "rgba(45,212,191,0.10)",
            border: `1px solid ${tealBorder}`,
            borderRadius: 999,
            padding: iP ? "5px 14px" : "4px 12px",
            fontSize: fontSize.badge,
            fontWeight: 700,
            color: teal,
            letterSpacing: "0.05em",
          }}>
            SNAPTOSIZE
          </div>

          {/* Stat */}
          <div>
            <div style={{
              fontSize: fontSize.stat,
              fontWeight: 900,
              color: teal,
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}>
              {cfg.afterStat}
            </div>
            <div style={{
              fontSize: fontSize.label,
              color: "rgba(255,255,255,0.4)",
              marginTop: 4,
              lineHeight: 1.3,
            }}>
              {cfg.afterStatLabel}
            </div>
          </div>

          {/* Panel label */}
          <div style={{
            fontSize: fontSize.label + 2,
            fontWeight: 700,
            color: "rgba(255,255,255,0.55)",
          }}>
            {cfg.afterLabel}
          </div>

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: iP ? 12 : 9, flex: 1 }}>
            {cfg.afterItems.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: fontSize.item,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.4,
              }}>
                <span style={{ color: teal, marginTop: 1, flexShrink: 0, fontSize: fontSize.item - 2 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FOOTER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        margin: iP ? "0 40px 32px" : "0 34px 26px",
        background: `linear-gradient(135deg, rgba(45,212,191,0.10), rgba(45,212,191,0.04))`,
        border: `1px solid rgba(45,212,191,0.20)`,
        borderRadius: 999,
        padding: iP ? "16px 32px" : "13px 26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{
          fontSize: fontSize.cta,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "-0.01em",
        }}>
          {cfg.cta}
        </span>
        <div style={{
          width: iP ? 36 : 30,
          height: iP ? 36 : 30,
          borderRadius: "50%",
          background: teal,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ color: "#000", fontWeight: 900, fontSize: iP ? 16 : 14 }}>→</span>
        </div>
      </div>
    </section>
  );
}
