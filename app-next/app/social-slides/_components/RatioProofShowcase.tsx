/* RatioProofShowcase — "Same file. Every frame."
   Shows the source artwork prominently, then the SAME artwork
   fitted to all 5 ratio frames below — pure product proof.

   Usage:
     <RatioProofShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
*/

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

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

export default function RatioProofShowcase({ artwork, name, ratio }: Props) {
  const { w, h } = DIMS[ratio];
  const srcs = getSrcs(artwork);
  const iP = ratio === "pinterest";

  const teal = "#2DD4BF";
  const purple = "#A78BFA";

  // The 5 ratio frames — aspect ratios as [width, height] pairs
  const frames = [
    { label: "2:3", aspect: [2, 3],       src: srcs["2:3"],    sizes: "4×6 to 20×30" },
    { label: "3:4", aspect: [3, 4],       src: srcs["3:4"],    sizes: "6×8 to 18×24" },
    { label: "4:5", aspect: [4, 5],       src: srcs["4:5"],    sizes: "8×10 to 24×30" },
    { label: "ISO", aspect: [1, 1.414],   src: srcs["ISO"],    sizes: "A4 · A3 · A2" },
    { label: "Extras", aspect: [11, 14],  src: srcs["Extras"], sizes: "5×7 · 11×14" },
  ];

  // Frame row sizing — max height so all 5 fit in a row
  // Available width: 1000 - 2*36 = 928px (pinterest). 5 frames avg ratio ≈3.72×H + 4×10 gaps ≤ 928 → H≤ 240
  const frameMaxH = iP ? 210 : 185;
  const framePad  = iP ? 10  : 8;

  return (
    <section
      id={`ratio-proof-showcase-${artwork}-${ratio}`}
      style={{
        width: w, height: h,
        background: "linear-gradient(160deg, #07070F 0%, #0E0B1E 45%, #080D12 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: -200, right: -100,
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* ── TOP BADGE ── */}
      <div style={{
        position: "relative", zIndex: 10,
        paddingTop: iP ? 44 : 36,
        display: "flex",
        justifyContent: "center",
      }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: `rgba(45,212,191,0.08)`,
          border: `1px solid rgba(45,212,191,0.25)`,
          borderRadius: 999,
          padding: iP ? "8px 22px" : "6px 18px",
          color: teal,
          fontSize: iP ? 13 : 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          <span style={{ fontSize: 9, opacity: 0.8 }}>●</span>
          1 file uploaded
        </span>
      </div>

      {/* ── SOURCE ARTWORK — fixed portrait frame, centered ── */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex",
        justifyContent: "center",
        padding: iP ? "20px 0 0" : "16px 0 0",
        flexShrink: 0,
      }}>
        {/* Outer glow frame — explicit portrait dimensions */}
        <div style={{
          width:  iP ? 480 : 420,
          height: iP ? 580 : 500,
          borderRadius: iP ? 20 : 16,
          padding: 3,
          background: `linear-gradient(135deg, ${teal}40, ${purple}30, ${teal}20)`,
          boxShadow: `0 0 60px rgba(45,212,191,0.18), 0 0 120px rgba(45,212,191,0.08)`,
          flexShrink: 0,
        }}>
          <div style={{
            width: "100%",
            height: "100%",
            borderRadius: iP ? 17 : 14,
            overflow: "hidden",
            position: "relative",
            background: "#0B0B12",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={srcs["2:3"]}
              alt={name}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%",
                display: "block",
              }}
            />
            {/* Inner vignette */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 50%, rgba(7,7,15,0.7) 100%)",
            }} />
          </div>
        </div>
      </div>

      {/* ── DIVIDER — "SnapToSize" ── */}
      <div style={{
        position: "relative", zIndex: 10,
        margin: iP ? "22px 60px" : "18px 52px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(45,212,191,0.06)",
          border: "1px solid rgba(45,212,191,0.18)",
          borderRadius: 999,
          padding: iP ? "9px 20px" : "7px 16px",
        }}>
          <span style={{
            fontSize: iP ? 15 : 13,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
          }}>
            Snap<span style={{ color: teal }}>To</span>Size
          </span>
          <span style={{
            fontSize: iP ? 18 : 15,
            color: teal,
            lineHeight: 1,
          }}>→</span>
        </div>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* ── HEADLINE ── */}
      <div style={{
        position: "relative", zIndex: 10,
        padding: iP ? "0 60px" : "0 52px",
        marginBottom: iP ? 24 : 18,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: iP ? 64 : 54,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.0,
          letterSpacing: "-0.035em",
        }}>
          Same file.
          <br />
          <span style={{ color: teal }}>Every frame.</span>
        </h2>
        <p style={{
          margin: iP ? "12px 0 0" : "10px 0 0",
          fontSize: iP ? 17 : 15,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.5,
        }}>
          {name} · 28 print-ready sizes · 300 DPI · Etsy-ready
        </p>
      </div>

      {/* ── 5 RATIO FRAMES ROW ── */}
      <div style={{
        position: "relative", zIndex: 10,
        flex: 1,
        padding: iP ? "0 28px" : "0 22px",
        display: "flex",
        alignItems: "flex-end",
        gap: framePad,
        paddingBottom: iP ? 36 : 28,
      }}>
        {frames.map(({ label, aspect, src, sizes }) => {
          const [aw, ah] = aspect;
          const frameH = frameMaxH;
          const frameW = Math.round(frameH * (aw / ah));

          return (
            <div key={label} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              flex: `0 0 ${frameW}px`,
            }}>
              {/* Frame */}
              <div style={{
                width: frameW,
                height: frameH,
                borderRadius: 8,
                overflow: "hidden",
                border: `1.5px solid rgba(45,212,191,0.35)`,
                boxShadow: `0 0 20px rgba(45,212,191,0.10)`,
                position: "relative",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${name} ${label}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Label */}
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: iP ? 13 : 11,
                  fontWeight: 800,
                  color: teal,
                  letterSpacing: "0.04em",
                }}>
                  {label}
                </div>
                <div style={{
                  fontSize: iP ? 10 : 9,
                  color: "rgba(255,255,255,0.35)",
                  marginTop: 2,
                  lineHeight: 1.3,
                }}>
                  {sizes}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        position: "relative", zIndex: 10,
        textAlign: "center",
        paddingBottom: iP ? 20 : 16,
      }}>
        <span style={{
          fontSize: 12,
          fontFamily: "monospace",
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.04em",
        }}>
          snaptosize.com
        </span>
      </div>
    </section>
  );
}
