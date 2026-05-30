/* WorkflowSteps — "How It Works" — 3-step workflow.
   Two-column layout: large artwork left (fills full steps zone),
   3 step rows right (flex:1 each, fills height evenly).
   No dead space — artwork anchors the visual weight.

   Usage:
     <WorkflowSteps ratio="pinterest" />
     <WorkflowSteps ratio="instagram" />
*/

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

function DownArrow({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M12 5v14m0 0l-5-5m5 5l5-5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface WorkflowStepsProps {
  ratio: "pinterest" | "instagram";
}

export default function WorkflowSteps({ ratio }: WorkflowStepsProps) {
  const { w, h } = DIMS[ratio];
  const iP = ratio === "pinterest";
  const teal = "#2DD4BF";
  const purple = "#A78BFA";

  // Left column width — wide enough for a bold artwork strip
  const leftW = iP ? 360 : 340;
  const gap = iP ? 32 : 28;
  const pad = iP ? 48 : 44;

  // Step text sizes — large to fill vertical space
  const stepTitleSize = iP ? 34 : 28;
  const stepDescSize = iP ? 19 : 17;
  const stepNumSize = iP ? 13 : 12;
  const arrowSize = iP ? 24 : 20;
  const decorNumSize = iP ? 130 : 110;

  const steps = [
    {
      num: "01",
      color: purple,
      title: "Upload your artwork",
      desc: "Any high-res image — JPG or PNG.",
    },
    {
      num: "02",
      color: purple,
      title: "We resize everything",
      desc: "5 ratio packs. Portrait + landscape. All at 300 DPI.",
    },
    {
      num: "03",
      color: teal,
      title: "Download ZIPs",
      desc: "Up to 70 files. Organized. Etsy-ready.",
    },
  ];

  return (
    <section
      id={`workflow-steps-${ratio}`}
      style={{
        width: w, height: h,
        background: "#0B0B12",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "5%", right: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: -80,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── HEADER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: iP ? "52px 52px 0" : "44px 48px 0",
        flexShrink: 0,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: iP ? 68 : 58,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
        }}>
          How It Works
        </h2>
        <p style={{
          margin: iP ? "10px 0 0" : "8px 0 0",
          fontSize: iP ? 18 : 16,
          color: "rgba(255,255,255,0.40)",
        }}>
          3 steps. 60 seconds. Every size.
        </p>
        <div style={{
          marginTop: 10,
          width: 48,
          height: 3,
          background: `linear-gradient(90deg, ${teal}, ${teal}00)`,
          borderRadius: 2,
        }} />
      </div>

      {/* ── BODY: two-column ── */}
      <div style={{
        position: "relative", zIndex: 10,
        flex: 1,
        display: "flex",
        gap: gap,
        padding: iP ? "28px 52px" : "24px 48px",
        alignItems: "stretch",
      }}>

        {/* LEFT — artwork panel, 2:3 aspect, vertically centered */}
        <div style={{
          flexShrink: 0,
          width: leftW,
          height: leftW * 1.5,
          alignSelf: "center",
          borderRadius: iP ? 20 : 16,
          overflow: "hidden",
          border: `1.5px solid rgba(167,139,250,0.30)`,
          boxShadow: "0 12px 60px rgba(167,139,250,0.18), 0 0 0 1px rgba(167,139,250,0.08)",
          position: "relative",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Composition_Pictures/Koi_2x3_12x18.jpg"
            alt="Artwork"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />
          {/* Bottom fade with "1 file" badge */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(7,7,15,0.92) 0%, transparent 60%)",
            padding: iP ? "48px 20px 20px" : "40px 16px 16px",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(167,139,250,0.12)",
              border: "1px solid rgba(167,139,250,0.30)",
              borderRadius: 999,
              padding: "6px 14px",
              fontSize: iP ? 12 : 11,
              fontWeight: 700,
              color: purple,
              letterSpacing: "0.06em",
            }}>
              <span style={{ fontSize: 7 }}>●</span>
              1 file uploaded
            </div>
          </div>
        </div>

        {/* RIGHT — 3 steps, each flex:1 to fill height */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {/* Step row */}
              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderLeft: `2px solid ${i === 2 ? "rgba(45,212,191,0.25)" : "rgba(167,139,250,0.20)"}`,
                paddingLeft: iP ? 20 : 16,
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Decorative background number */}
                <div style={{
                  position: "absolute",
                  right: -8,
                  bottom: -16,
                  fontSize: decorNumSize,
                  fontWeight: 900,
                  color: i === 2 ? "rgba(45,212,191,0.05)" : "rgba(167,139,250,0.05)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                  {step.num}
                </div>
                <div style={{
                  fontSize: stepNumSize,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: step.color,
                  letterSpacing: "0.06em",
                  marginBottom: 8,
                }}>
                  {step.num}
                </div>
                <div style={{
                  fontSize: stepTitleSize,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  marginBottom: iP ? 10 : 8,
                }}>
                  {step.title}
                </div>
                <div style={{
                  fontSize: stepDescSize,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.5,
                }}>
                  {step.desc}
                </div>
              </div>

              {/* Arrow between steps */}
              {i < 2 && (
                <div style={{ paddingLeft: iP ? 20 : 16, paddingBottom: 4, paddingTop: 4, flexShrink: 0 }}>
                  <DownArrow
                    size={arrowSize}
                    color={i === 0 ? "rgba(167,139,250,0.4)" : "rgba(45,212,191,0.4)"}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA FOOTER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        margin: iP ? "0 52px 36px" : "0 48px 28px",
        background: "linear-gradient(135deg, rgba(45,212,191,0.10), rgba(45,212,191,0.04))",
        border: "1px solid rgba(45,212,191,0.20)",
        borderRadius: 999,
        padding: iP ? "18px 36px" : "15px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <span style={{
          fontSize: iP ? 20 : 17,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "-0.01em",
        }}>
          Try free → snaptosize.com
        </span>
        <div style={{
          width: iP ? 40 : 34, height: iP ? 40 : 34,
          borderRadius: "50%",
          background: teal,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ color: "#000", fontWeight: 900, fontSize: iP ? 18 : 16 }}>→</span>
        </div>
      </div>
    </section>
  );
}
