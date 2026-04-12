/* W15BeforeAfterWorkflow — Before/After split template.
   Fully inline styles for reliable Playwright screenshot rendering. */

const W = 1000;
const H = 1500;
const teal = "#2DD4BF";
const red = "rgba(239,68,68,0.85)";

const beforeItems = [
  "Export 8×10 manually in Photoshop",
  "Resize again for 16×20",
  "Repeat for 12×18, 4×6, 24×30...",
  "Wrong DPI? Start over.",
  "1 size = 10+ minutes of work",
  "Miss a size = lose the sale",
];

const afterItems = [
  "Upload 1 high-res image",
  "Get 7 sizes in the 2:3 pack",
  "Get 5 sizes in the 3:4 pack",
  "Get 5 sizes in the 4:5 pack",
  "All at 300 DPI, Etsy-ready ZIP",
  "Done in under 60 seconds",
];

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" fill="rgba(239,68,68,0.08)" />
      <line x1="6.5" y1="6.5" x2="13.5" y2="13.5" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13.5" y1="6.5" x2="6.5" y2="13.5" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5" fill="rgba(34,197,94,0.08)" />
      <path d="M6 10.5L8.5 13L14 7.5" stroke="rgba(34,197,94,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function W15BeforeAfterWorkflow() {
  return (
    <section
      id="w15-p02-before-after"
      style={{
        width: W,
        height: H,
        background: "linear-gradient(135deg, #0B0B12 0%, #110E1F 40%, #0F0D1A 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: -128, left: -128,
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -160, right: 40,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 10,
        flex: 1, display: "flex", flexDirection: "column",
        padding: "56px 40px 0",
      }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: 56, fontWeight: 800, color: "#fff",
            lineHeight: 1.1, margin: 0,
          }}>
            Stop Exporting<br />
            <span style={{
              background: "linear-gradient(90deg, #f87171, #fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              One Size at a Time
            </span>
          </h2>
        </div>

        {/* Two columns */}
        <div style={{ display: "flex", gap: 20, flex: 1 }}>
          {/* BEFORE column */}
          <div style={{
            flex: 1, display: "flex", flexDirection: "column",
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: 20, padding: 28,
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: red, background: "rgba(239,68,68,0.15)",
              border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: 999, padding: "6px 14px",
              alignSelf: "flex-start", marginBottom: 14,
            }}>Before</span>
            <p style={{ fontSize: 17, fontWeight: 600, color: "rgba(255,255,255,0.65)", marginBottom: 24, margin: "0 0 24px" }}>
              The Manual Way
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, justifyContent: "space-between" }}>
              {beforeItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <XIcon />
                  <span style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER column */}
          <div style={{
            flex: 1, display: "flex", flexDirection: "column",
            background: "rgba(34,197,94,0.05)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 20, padding: 28,
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "#4ade80", background: "rgba(34,197,94,0.15)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 999, padding: "6px 14px",
              alignSelf: "flex-start", marginBottom: 14,
            }}>After</span>
            <p style={{ fontSize: 17, fontWeight: 600, color: "rgba(255,255,255,0.65)", marginBottom: 24, margin: "0 0 24px" }}>
              With SnapToSize
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, justifyContent: "space-between" }}>
              {afterItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <CheckIcon />
                  <span style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div style={{
          marginTop: 28, marginBottom: 24,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 16, padding: "22px 24px",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 22, fontWeight: 800, color: teal, margin: 0 }}>
            1 upload → 28 sizes → ready to sell
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginTop: 6, margin: "6px 0 0" }}>
            Try free → app.snaptosize.com
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "relative", zIndex: 10,
        paddingBottom: 24, textAlign: "center",
      }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>
          snaptosize.com
        </span>
      </div>
    </section>
  );
}
