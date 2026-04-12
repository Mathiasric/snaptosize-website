/* NeonStatsHero — "70 files. 1 upload." hero stat template.
   Top half: artwork clearly visible, fades to dark.
   Bottom half: giant "70" teal glow + supporting copy.
   Full-height layout — no dead space.

   Usage:
     <NeonStatsHero artwork="bunny" name="Bunny Sketch" ratio="pinterest" />
*/

function getSrc23(artwork: string): string {
  const map: Record<string, string> = {
    fox: "/assets/listings/fox/Fox.jpg",
    bunny: "/assets/listings/bunny/Bunny.jpg",
    deer: "/assets/listings/deer/Deer.jpg",
    songbirds: "/assets/listings/songbirds/Vintage_bird.jpg",
    misty_lake: "/assets/listings/misty_lake/Misty_Nordic.jpg",
    salmon: "/assets/listings/salmon/Salmon.jpg",
    neutral_abstract: "/assets/listings/neutral_abstract/Neutral_abstract.jpg",
    minimalist_abstract: "/assets/listings/minimalist_abstract/Minimalist_Abstract.jpg",
    into_the_light_abstarct: "/assets/listings/into_the_light_abstarct/Into_the_Light.jpg",
    landscape_abstract: "/assets/listings/landscape_abstract/Landscape_Art.jpg",
  };
  return map[artwork] ?? `/assets/listings/${artwork}/${artwork}.jpg`;
}

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

interface Props {
  artwork: string;
  name: string;
  ratio: "pinterest" | "instagram";
}

export default function NeonStatsHero({ artwork, name, ratio }: Props) {
  const { w, h } = DIMS[ratio];
  const isPinterest = ratio === "pinterest";
  const teal = "#2DD4BF";
  const purple = "#A78BFA";
  const src = getSrc23(artwork);

  // Top half = artwork zone, bottom half = stats zone
  const artH = isPinterest ? 620 : 520;
  const statsH = h - artH - 60; // 60 = CTA + footer

  return (
    <section
      id={`neon-stats-hero-${artwork}-${ratio}`}
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
        position: "absolute", top: -80, right: -80,
        width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 120, left: -60,
        width: 460, height: 460, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,212,191,0.16) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── TOP: Artwork panel ── */}
      <div style={{ position: "relative", height: artH, overflow: "hidden", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
        {/* Gradient: dark top edge → clear → dark fade to bottom */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(11,11,18,0.65) 0%, rgba(11,11,18,0.25) 30%, rgba(11,11,18,0.25) 55%, rgba(11,11,18,0.95) 100%)",
        }} />

        {/* Badge overlaid on artwork top */}
        <div style={{
          position: "absolute", top: isPinterest ? 36 : 28, left: 0, right: 0,
          display: "flex", justifyContent: "center",
        }}>
          <span style={{
            border: "1px solid rgba(45,212,191,0.5)",
            color: teal,
            fontSize: isPinterest ? 15 : 13,
            fontWeight: 700,
            borderRadius: 999,
            padding: "9px 24px",
            letterSpacing: "0.05em",
            background: "rgba(11,11,18,0.6)",
            backdropFilter: "blur(4px)",
          }}>
            One upload. Done.
          </span>
        </div>

        {/* Artwork name — bottom of artwork panel */}
        <div style={{
          position: "absolute", bottom: 20, left: 0, right: 0,
          textAlign: "center",
          fontSize: 13,
          color: "rgba(255,255,255,0.35)",
          fontStyle: "italic",
          letterSpacing: "0.04em",
        }}>
          Artwork: {name}
        </div>
      </div>

      {/* ── BOTTOM: Stats panel ── */}
      <div style={{
        position: "relative",
        height: statsH,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isPinterest ? "24px 64px 8px" : "20px 56px 8px",
        textAlign: "center",
        gap: isPinterest ? 20 : 14,
      }}>
        {/* Giant stat */}
        <div style={{
          fontSize: isPinterest ? 220 : 190,
          fontWeight: 900,
          lineHeight: 0.82,
          color: teal,
          textShadow: `0 0 50px rgba(45,212,191,0.8), 0 0 120px rgba(45,212,191,0.35)`,
          letterSpacing: "-0.04em",
        }}>
          70
        </div>

        {/* Stat label */}
        <div style={{
          fontSize: isPinterest ? 26 : 22,
          fontWeight: 700,
          color: "rgba(255,255,255,0.88)",
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
        }}>
          print-ready files
        </div>

        {/* Supporting copy */}
        <div style={{
          fontSize: isPinterest ? 20 : 17,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.55,
          maxWidth: isPinterest ? 660 : 580,
        }}>
          Upload your artwork once — get{" "}
          <span style={{ color: "#fff", fontWeight: 700 }}>every print size</span>{" "}
          your buyers want. All 300 DPI, Etsy-ready.
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" as const, justifyContent: "center" }}>
          {[
            { label: "5 ratio packs", color: teal },
            { label: "300 DPI", color: purple },
            { label: "No Photoshop", color: "rgba(255,255,255,0.45)" },
          ].map(({ label, color }) => (
            <span key={label} style={{
              border: `1px solid ${
                color === "rgba(255,255,255,0.45)"
                  ? "rgba(255,255,255,0.18)"
                  : color + "55"
              }`,
              color,
              fontSize: isPinterest ? 14 : 13,
              fontWeight: 600,
              borderRadius: 999,
              padding: "7px 18px",
              background: color === teal
                ? "rgba(45,212,191,0.08)"
                : color === purple
                ? "rgba(167,139,250,0.08)"
                : "rgba(255,255,255,0.04)",
            }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div style={{
        position: "relative",
        background: "linear-gradient(90deg, rgba(45,212,191,0.12) 0%, rgba(45,212,191,0.22) 50%, rgba(45,212,191,0.12) 100%)",
        borderTop: "1px solid rgba(45,212,191,0.3)",
        padding: isPinterest ? "22px 0" : "18px 0",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: isPinterest ? 22 : 18,
          color: teal,
          fontWeight: 800,
          letterSpacing: "-0.01em",
          textShadow: "0 0 16px rgba(45,212,191,0.5)",
        }}>
          Try free · snaptosize.com
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "relative",
        padding: "10px 0",
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
