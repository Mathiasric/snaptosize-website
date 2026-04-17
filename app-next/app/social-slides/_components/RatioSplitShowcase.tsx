/* RatioSplitShowcase — "One upload. Every ratio."
   Vertical layout: large source artwork (YOU UPLOAD) →
   SnapToSize arrow → 4 output ratio frames in a row (YOU GET).
   Complete size lists under each frame.

   Usage:
     <RatioSplitShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
*/

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

const OUTPUT_FRAMES = [
  { label: "3:4",    key: "3:4",    sizes: ["6×8", "9×12", "12×16", "15×20", "18×24"],          color: "#2DD4BF", aspect: 4/3 },
  { label: "4:5",    key: "4:5",    sizes: ["8×10", "12×15", "16×20", "20×25", "24×30"],         color: "#2DD4BF", aspect: 5/4 },
  { label: "ISO",    key: "ISO",    sizes: ["A5", "A4", "A3", "A2", "A1"],                        color: "#A78BFA", aspect: 1.414 },
  { label: "Extras", key: "Extras", sizes: ["5×7", "8.5×11", "11×14", "11×17", "13×19"],         color: "#A78BFA", aspect: 14/11 },
];

function getSrcs(artwork: string) {
  const base = `/assets/listings/${artwork}`;
  const n = artwork.charAt(0).toUpperCase() + artwork.slice(1);

  const overrides: Record<string, Record<string, string>> = {
    fox: {
      "2:3":    `${base}/Fox.jpg`,
      "3:4":    `${base}/Fox_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Fox_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(9).jpg`,
      "Extras": `${base}/Fox_11x14_3300x4200.jpg`,
    },
    misty_lake: {
      "2:3":    `${base}/Misty_Nordic.jpg`,
      "3:4":    `${base}/Misty_Nordic_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Misty_Nordic_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(1).jpg`,
      "Extras": `${base}/Misty_Nordic_11x14_3300x4200.jpg`,
    },
    landscape_abstract: {
      "2:3":    `${base}/Landscape_Art.jpg`,
      "3:4":    `${base}/Landscape_Art_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Landscape_Art_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(5).jpg`,
      "Extras": `${base}/Landscape_Art_11x14_3300x4200.jpg`,
    },
    deer: {
      "2:3":    `${base}/Deer.jpg`,
      "3:4":    `${base}/Deer_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Deer_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO.jpg`,
      "Extras": `${base}/Deer_11x14_3300x4200.jpg`,
    },
    bunny: {
      "2:3":    `${base}/Bunny.jpg`,
      "3:4":    `${base}/Bunny_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Bunny_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO.jpg`,
      "Extras": `${base}/Bunny_11x14_3300x4200.jpg`,
    },
  };

  return overrides[artwork] ?? {
    "2:3":    `${base}/${n}.jpg`,
    "3:4":    `${base}/${n}_6x8_1800x2400.jpg`,
    "4:5":    `${base}/${n}_4x5_1200x1500.jpg`,
    "ISO":    `${base}/A4_2480x3508_ISO.jpg`,
    "Extras": `${base}/${n}_11x14_3300x4200.jpg`,
  };
}

interface Props {
  artwork: string;
  name: string;
  ratio: "pinterest" | "instagram";
}

export default function RatioSplitShowcase({ artwork, name, ratio }: Props) {
  const { w, h } = DIMS[ratio];
  const iP = ratio === "pinterest";
  const srcs = getSrcs(artwork);
  const teal = "#2DD4BF";
  const purple = "#A78BFA";

  const pad = iP ? 48 : 44;

  // Source artwork: centered portrait frame — instagram smaller to give frames room
  const srcW = iP ? 460 : 360;
  const srcH = Math.round(srcW * 1.5); // true 2:3

  // Output frames row: 4 frames with gap
  const frameGap = iP ? 14 : 12;
  const frameW = Math.floor((w - pad * 2 - frameGap * 3) / 4);
  const frameMaxH = Math.round(frameW * 1.414); // ISO is tallest — all containers this height

  return (
    <section
      id={`ratio-split-showcase-${artwork}-${ratio}`}
      style={{
        width: w, height: h,
        background: "linear-gradient(160deg, #07070F 0%, #0E0B1E 50%, #080D12 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 550, height: 550, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,212,191,0.09) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 100, left: -80,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* ── HEADER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: iP ? "48px 48px 0" : "40px 44px 0",
        flexShrink: 0,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: iP ? 66 : 56,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
        }}>
          One upload.{" "}
          <span style={{ color: teal }}>Every ratio.</span>
        </h2>
        <p style={{
          margin: iP ? "10px 0 0" : "8px 0 0",
          fontSize: iP ? 17 : 15,
          color: "rgba(255,255,255,0.40)",
        }}>
          Up to 70 sizes · 300 DPI · Etsy-ready
        </p>
        <div style={{
          marginTop: 10, width: 48, height: 3,
          background: `linear-gradient(90deg, ${teal}, ${teal}00)`,
          borderRadius: 2,
        }} />
      </div>

      {/* ── SOURCE ARTWORK — centered, true 2:3 ── */}
      <div style={{
        position: "relative", zIndex: 10,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: iP ? "20px 48px 0" : "16px 44px 0",
      }}>
        <div style={{
          width: srcW,
          height: srcH,
          borderRadius: iP ? 20 : 16,
          overflow: "hidden",
          border: "1.5px solid rgba(255,255,255,0.12)",
          boxShadow: `0 0 60px rgba(45,212,191,0.12), 0 20px 80px rgba(0,0,0,0.6)`,
          position: "relative",
          flexShrink: 0,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={srcs["2:3"]}
            alt={name}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 20%",
              display: "block",
            }}
          />
          {/* YOU UPLOAD badge */}
          <div style={{
            position: "absolute", top: 16, left: 16,
            background: "rgba(0,0,0,0.70)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            padding: "5px 13px",
            fontSize: iP ? 11 : 10,
            fontWeight: 700,
            color: "rgba(255,255,255,0.80)",
            letterSpacing: "0.06em",
          }}>
            YOU UPLOAD
          </div>
          {/* Bottom vignette */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(7,7,15,0.80) 0%, transparent 50%)",
            padding: iP ? "40px 18px 14px" : "30px 14px 12px",
          }}>
            <span style={{
              fontSize: iP ? 12 : 11, fontFamily: "monospace",
              fontWeight: 600, color: "rgba(255,255,255,0.45)",
            }}>
              2:3 · original file
            </span>
          </div>
        </div>
      </div>

      {/* ── ARROW DIVIDER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        padding: iP ? "18px 0" : "14px 0",
        flexShrink: 0,
      }}>
        <div style={{ flex: 1, marginLeft: pad, height: 1, background: "rgba(255,255,255,0.06)" }} />
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(45,212,191,0.08)",
          border: "1px solid rgba(45,212,191,0.22)",
          borderRadius: 999,
          padding: iP ? "8px 20px" : "7px 16px",
          fontSize: iP ? 13 : 12,
          fontWeight: 700, color: teal,
          letterSpacing: "0.04em",
          flexShrink: 0,
        }}>
          SnapToSize →
        </div>
        <div style={{ flex: 1, marginRight: pad, height: 1, background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* ── OUTPUT FRAMES — 4 in a row ── */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex",
        gap: frameGap,
        padding: iP ? `0 ${pad}px` : `0 ${pad}px`,
        flexShrink: 0,
      }}>
        {OUTPUT_FRAMES.map(({ label, key, sizes, color, aspect }, i) => {
          const fH = Math.round(frameW * aspect);
          return (
          <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Frame container — fixed max height, frame bottom-aligned so bottoms align */}
            <div style={{ height: frameMaxH, display: "flex", alignItems: "flex-end" }}>
            <div style={{
              width: "100%",
              height: fH,
              borderRadius: iP ? 12 : 10,
              overflow: "hidden",
              border: `1.5px solid ${color}40`,
              boxShadow: `0 4px 20px rgba(0,0,0,0.4)`,
              position: "relative",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={srcs[key]}
                alt={`${name} ${label}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* YOU GET badge on first frame */}
              {i === 0 && (
                <div style={{
                  position: "absolute", top: 8, right: 8,
                  background: `rgba(45,212,191,0.15)`,
                  border: `1px solid rgba(45,212,191,0.35)`,
                  borderRadius: 999,
                  padding: "2px 7px",
                  fontSize: 8,
                  fontWeight: 700,
                  color: teal,
                  letterSpacing: "0.04em",
                }}>
                  YOU GET
                </div>
              )}
            </div>
            </div>{/* end frame container */}
            {/* Label + sizes */}
            <div style={{ paddingLeft: 2 }}>
              <div style={{
                fontSize: iP ? 13 : 12, fontWeight: 800,
                color, marginBottom: 3,
              }}>
                {label}
              </div>
              {sizes.map((s) => (
                <div key={s} style={{
                  fontSize: iP ? 12 : 11,
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.5,
                }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        );})}
      </div>

      {/* ── CTA FOOTER ── */}
      <div style={{
        position: "relative", zIndex: 10,
        margin: iP ? "16px 48px 32px" : "14px 44px 26px",
        background: "linear-gradient(135deg, rgba(45,212,191,0.10), rgba(45,212,191,0.04))",
        border: "1px solid rgba(45,212,191,0.20)",
        borderRadius: 999,
        padding: iP ? "17px 32px" : "14px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <span style={{ fontSize: iP ? 19 : 16, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
          Try free → snaptosize.com
        </span>
        <div style={{
          width: iP ? 38 : 32, height: iP ? 38 : 32, borderRadius: "50%",
          background: teal, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <span style={{ color: "#000", fontWeight: 900, fontSize: iP ? 17 : 15 }}>→</span>
        </div>
      </div>
    </section>
  );
}
