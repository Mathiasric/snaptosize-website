/* NeonPackShowcase — Reusable dark/neon template.
   Shows same artwork in all 5 ratio frames with teal glow borders.
   Pass any artwork from /assets/listings/ — pure product proof.

   Usage:
     <NeonPackShowcase artwork="fox" name="Fox Illustration" ratio="pinterest" />
     <NeonPackShowcase artwork="bunny" name="Bunny Sketch" ratio="instagram" />
*/

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

// Each listing folder follows this file naming convention
function getSrcs(artwork: string) {
  const base = `/assets/listings/${artwork}`;
  const name = artwork.charAt(0).toUpperCase() + artwork.slice(1);

  // Handle known special cases
  const srcs: Record<string, Record<string, string>> = {
    fox: {
      "2:3":    `${base}/Fox.jpg`,
      "3:4":    `${base}/Fox_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Fox_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(9).jpg`,
      "Extras": `${base}/Fox_11x14_3300x4200.jpg`,
    },
    bunny: {
      "2:3":    `${base}/Bunny.jpg`,
      "3:4":    `${base}/Bunny_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Bunny_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(8).jpg`,
      "Extras": `${base}/Bunny_11x14_3300x4200.jpg`,
    },
    deer: {
      "2:3":    `${base}/Deer.jpg`,
      "3:4":    `${base}/Deer_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Deer_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(7).jpg`,
      "Extras": `${base}/Deer_11x14_3300x4200.jpg`,
    },
    songbirds: {
      "2:3":    `${base}/Vintage_bird.jpg`,
      "3:4":    `${base}/Vintage_bird_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Vintage_bird_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(6).jpg`,
      "Extras": `${base}/Vintage_bird_11x14_3300x4200.jpg`,
    },
    misty_lake: {
      "2:3":    `${base}/Misty_Nordic.jpg`,
      "3:4":    `${base}/Misty_Nordic_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Misty_Nordic_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(1).jpg`,
      "Extras": `${base}/Misty_Nordic_11x14_3300x4200.jpg`,
    },
    salmon: {
      "2:3":    `${base}/Salmon.jpg`,
      "3:4":    `${base}/Salmon_6x8_1800x2400%20(1).jpg`,
      "4:5":    `${base}/Salmon_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO.jpg`,
      "Extras": `${base}/Salmon_11x14_3300x4200.jpg`,
    },
    neutral_abstract: {
      "2:3":    `${base}/Neutral_abstract.jpg`,
      "3:4":    `${base}/Neutral_abstract_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Neutral_abstract_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(2).jpg`,
      "Extras": `${base}/Neutral_abstract_11x14_3300x4200.jpg`,
    },
    minimalist_abstract: {
      "2:3":    `${base}/Minimalist_Abstract.jpg`,
      "3:4":    `${base}/Minimalist_Abstract_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Minimalist_Abstract_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(3).jpg`,
      "Extras": `${base}/Minimalist_Abstract_11x14_3300x4200.jpg`,
    },
    into_the_light_abstarct: {
      "2:3":    `${base}/Into_the_Light.jpg`,
      "3:4":    `${base}/Into_the_Light_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Into_the_Light_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(4).jpg`,
      "Extras": `${base}/Into_the_Light_11x14_3300x4200.jpg`,
    },
    landscape_abstract: {
      "2:3":    `${base}/Landscape_Art.jpg`,
      "3:4":    `${base}/Landscape_Art_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Landscape_Art_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(5).jpg`,
      "Extras": `${base}/Landscape_Art_11x14_3300x4200.jpg`,
    },
    floral_vase: {
      "2:3":    `${base}/Floral%20vase%20art%20.jpg`,
      "3:4":    `${base}/Floral%20vase%20art%20_6x8_1800x2400.jpg`,
      "4:5":    `${base}/Floral%20vase%20art%20_4x5_1200x1500.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(12).jpg`,
      "Extras": `${base}/Floral%20vase%20art%20_11x14_3300x4200.jpg`,
    },
    owl: {
      "2:3":    `${base}/Whimscal%20owl%20print.jpg`,
      "3:4":    `${base}/folk_art-Owl%203%20x%204.jpg`,
      "4:5":    `${base}/owl_folk_art_4x5.jpg`,
      "ISO":    `${base}/A4_2480x3508_ISO%20(10).jpg`,
      "Extras": `${base}/owl_folk_art_11x14.jpg`,
    },
    mysthical_portal: {
      "2:3":    `${base}/Mystical%20portal%20abstract.jpeg`,
      "3:4":    `${base}/mysticalportal_3x4_6x8_1800x2400.jpg`,
      "4:5":    `${base}/mysticalportal_4x5_1200x1500.jpg`,
      "ISO":    `${base}/mysticalportal_A4_2480x3508px.jpg`,
      "Extras": `${base}/mysticalportal_11x14_3300x4200px.jpg`,
    },
  };

  return srcs[artwork] ?? {
    "2:3":    `${base}/${name}.jpg`,
    "3:4":    `${base}/${name}_6x8_1800x2400.jpg`,
    "4:5":    `${base}/${name}_4x5_1200x1500.jpg`,
    "ISO":    `${base}/A4_2480x3508_ISO.jpg`,
    "Extras": `${base}/${name}_11x14_3300x4200.jpg`,
  };
}

interface Props {
  artwork: string;
  name: string;
  ratio: "pinterest" | "instagram";
}

export default function NeonPackShowcase({ artwork, name, ratio }: Props) {
  const { w, h } = DIMS[ratio];
  const isPinterest = ratio === "pinterest";
  const srcs = getSrcs(artwork);

  // Scale frame sizes per format
  const row1H = isPinterest ? 370 : 310;
  const row2H = isPinterest ? 255 : 215;
  const gap = isPinterest ? 20 : 16;

  const packs = [
    { label: "2:3", sizes: "4×6 · 8×12 · 16×24", frameW: Math.round(row1H * 2/3), frameH: row1H, highlight: false },
    { label: "3:4", sizes: "6×8 · 12×16 · 18×24", frameW: Math.round(row1H * 3/4), frameH: row1H, highlight: true },
    { label: "4:5", sizes: "8×10 · 16×20 · 24×30", frameW: Math.round(row1H * 4/5), frameH: row1H, highlight: false },
  ];
  const packs2 = [
    { label: "ISO", sizes: "A4 · A3 · A2", frameW: Math.round(row2H / 1.414), frameH: row2H, highlight: false },
    { label: "Extras", sizes: "5×7 · 11×14", frameW: Math.round(row2H * 11/14), frameH: row2H, highlight: false },
  ];

  const teal = "#2DD4BF";
  const purple = "#A78BFA";

  return (
    <section
      id={`neon-pack-showcase-${artwork}-${ratio}`}
      style={{
        width: w,
        height: h,
        background: "#0B0B12",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: -120, left: -120,
        width: 500, height: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 100, right: -80,
        width: 460, height: 460,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ padding: isPinterest ? "44px 56px 0" : "36px 56px 0", textAlign: "center", position: "relative" }}>
        <span style={{
          display: "inline-block",
          border: `1px solid rgba(45,212,191,0.4)`,
          color: teal,
          fontSize: isPinterest ? 14 : 13,
          fontWeight: 600,
          borderRadius: 999,
          padding: "7px 18px",
          marginBottom: isPinterest ? 20 : 16,
          letterSpacing: "0.04em",
          background: "rgba(45,212,191,0.06)",
        }}>
          One upload. Every size.
        </span>
        <h2 style={{
          fontSize: isPinterest ? 58 : 48,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          margin: 0,
        }}>
          Your art in
          <br />
          <span style={{ color: teal }}>every Etsy ratio</span>
          <br />
          — done.
        </h2>
        <p style={{
          fontSize: isPinterest ? 19 : 16,
          color: "rgba(255,255,255,0.5)",
          marginTop: isPinterest ? 14 : 10,
          lineHeight: 1.5,
        }}>
          {name} · 5 ratio packs · up to 70 sizes · 300 DPI · Etsy-ready
        </p>
      </div>

      {/* Frame showcase */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: isPinterest ? 32 : 24,
        padding: `0 ${isPinterest ? 40 : 32}px`,
        position: "relative",
      }}>
        {/* Row 1 */}
        <div style={{ display: "flex", alignItems: "flex-end", gap }}>
          {packs.map(({ label, sizes, frameW, frameH, highlight }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{
                width: frameW,
                height: frameH,
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: highlight
                  ? `0 0 0 2px ${teal}, 0 0 28px rgba(45,212,191,0.5), 0 0 60px rgba(45,212,191,0.2)`
                  : `0 0 0 1px rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.6)`,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={srcs[label as keyof typeof srcs]}
                  alt={`${name} in ${label} ratio`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: highlight ? teal : "rgba(255,255,255,0.9)",
                  textShadow: highlight ? `0 0 12px rgba(45,212,191,0.6)` : "none",
                }}>
                  {label}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{sizes}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div style={{ display: "flex", alignItems: "flex-end", gap }}>
          {packs2.map(({ label, sizes, frameW, frameH }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{
                width: frameW,
                height: frameH,
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: `0 0 0 1px rgba(167,139,250,0.3), 0 0 18px rgba(167,139,250,0.2), 0 8px 24px rgba(0,0,0,0.6)`,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={srcs[label as keyof typeof srcs]}
                  alt={`${name} in ${label} ratio`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: purple }}>
                  {label}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{sizes}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: isPinterest ? 52 : 40, marginTop: 4 }}>
          {[
            { val: "5", unit: "ratio packs", color: teal },
            { val: "70", unit: "sizes", color: "#fff" },
            { val: "300", unit: "DPI", color: purple },
          ].map(({ val, unit, color }) => (
            <div key={unit} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: isPinterest ? 40 : 34,
                fontWeight: 900,
                color,
                textShadow: color === teal
                  ? `0 0 20px rgba(45,212,191,0.5)`
                  : color === purple
                  ? `0 0 20px rgba(167,139,250,0.5)`
                  : "none",
                lineHeight: 1,
              }}>
                {val}
              </div>
              <div style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.35)",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.12em",
                marginTop: 4,
              }}>
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div style={{
        background: `linear-gradient(90deg, rgba(45,212,191,0.15) 0%, rgba(45,212,191,0.25) 50%, rgba(45,212,191,0.15) 100%)`,
        borderTop: `1px solid rgba(45,212,191,0.3)`,
        padding: isPinterest ? "22px 0" : "18px 0",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: isPinterest ? 21 : 18,
          color: teal,
          fontWeight: 800,
          letterSpacing: "-0.01em",
          textShadow: `0 0 16px rgba(45,212,191,0.5)`,
        }}>
          1 upload → all 5 packs · snaptosize.com
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: "10px 0",
        textAlign: "center",
        fontSize: 11,
        color: "rgba(255,255,255,0.2)",
        letterSpacing: "0.12em",
      }}>
        snaptosize.com
      </div>
    </section>
  );
}
