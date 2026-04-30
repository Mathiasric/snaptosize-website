/* RatioCropProof — Pain → Solution split.
   LEFT: artwork forced into wrong ratio (letterboxed / cropped — visibly broken).
   RIGHT: SnapToSize-exported version that fits the target ratio perfectly.

   Usage:
     <RatioCropProof artwork="floral_vase" name="Floral Vase" ratio="pinterest" />
*/

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

// Sources per known artwork. "source" is the 4:5 master file the seller uploads.
// "fit" is the SnapToSize-exported 3:4 file that matches the target frame.
// Mirrors NeonPackShowcase override coverage so any artwork in /assets/listings/ works.
function getSrcs(artwork: string) {
  const base = `/assets/listings/${artwork}`;
  const overrides: Record<string, { source: string; fit: string }> = {
    fox: {
      source: `${base}/Fox_4x5_1200x1500.jpg`,
      fit:    `${base}/Fox_6x8_1800x2400.jpg`,
    },
    bunny: {
      source: `${base}/Bunny_4x5_1200x1500.jpg`,
      fit:    `${base}/Bunny_6x8_1800x2400.jpg`,
    },
    deer: {
      source: `${base}/Deer_4x5_1200x1500.jpg`,
      fit:    `${base}/Deer_6x8_1800x2400.jpg`,
    },
    songbirds: {
      source: `${base}/Vintage_bird_4x5_1200x1500.jpg`,
      fit:    `${base}/Vintage_bird_6x8_1800x2400.jpg`,
    },
    misty_lake: {
      source: `${base}/Misty_Nordic_4x5_1200x1500.jpg`,
      fit:    `${base}/Misty_Nordic_6x8_1800x2400.jpg`,
    },
    salmon: {
      source: `${base}/Salmon_4x5_1200x1500.jpg`,
      fit:    `${base}/Salmon_6x8_1800x2400%20(1).jpg`,
    },
    neutral_abstract: {
      source: `${base}/Neutral_abstract_4x5_1200x1500.jpg`,
      fit:    `${base}/Neutral_abstract_6x8_1800x2400.jpg`,
    },
    minimalist_abstract: {
      source: `${base}/Minimalist_Abstract_4x5_1200x1500.jpg`,
      fit:    `${base}/Minimalist_Abstract_6x8_1800x2400.jpg`,
    },
    into_the_light_abstarct: {
      source: `${base}/Into_the_Light_4x5_1200x1500.jpg`,
      fit:    `${base}/Into_the_Light_6x8_1800x2400.jpg`,
    },
    landscape_abstract: {
      source: `${base}/Landscape_Art_4x5_1200x1500.jpg`,
      fit:    `${base}/Landscape_Art_6x8_1800x2400.jpg`,
    },
    floral_vase: {
      source: `${base}/Floral%20vase%20art%20_4x5_1200x1500.jpg`,
      fit:    `${base}/Floral%20vase%20art%20_6x8_1800x2400.jpg`,
    },
    owl: {
      source: `${base}/owl_folk_art_4x5.jpg`,
      fit:    `${base}/folk_art-Owl%203%20x%204.jpg`,
    },
    mysthical_portal: {
      source: `${base}/mysticalportal_4x5_1200x1500.jpg`,
      fit:    `${base}/mysticalportal_3x4_6x8_1800x2400.jpg`,
    },
    abstract_wedding: {
      source: `${base}/Abstract_4x5_1200x1500.jpg`,
      fit:    `${base}/Abstract_6x8_1800x2400.jpg`,
    },
    slothing_through_life: {
      source: `${base}/Slothing_Through_Life_4x5_1200x1500.jpg`,
      fit:    `${base}/Slothing_Through_Life_6x8_1800x2400.jpg`,
    },
    wildflower_botanical_art: {
      source: `${base}/Wildflower%20botanical%20art_4x5_1200x1500.jpg`,
      fit:    `${base}/Wildflower%20botanical%20art.jpg`,
    },
    littledeerquote: {
      source: `${base}/littledeer_4x5_1200x1500_4x5.jpg`,
      fit:    `${base}/littledeer_6x8_1800x2400_3x4.jpg`,
    },
  };
  return overrides[artwork] ?? {
    source: `${base}/${artwork}_4x5_1200x1500.jpg`,
    fit:    `${base}/${artwork}_6x8_1800x2400.jpg`,
  };
}

interface Props {
  artwork: string;
  name: string;
  ratio: keyof typeof DIMS;
}

export default function RatioCropProof({ artwork, name, ratio }: Props) {
  const { w, h } = DIMS[ratio];
  const srcs = getSrcs(artwork);

  return (
    <div
      id={`ratio-crop-proof-${artwork}-${ratio}`}
      style={{
        width: w,
        height: h,
        background: "#0B0B12",
        color: "#fff",
        fontFamily: "Inter, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Subtle teal radial glow top */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          background: "radial-gradient(ellipse at center, rgba(45,212,191,0.18) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* HOOK — top 18% */}
      <div style={{ padding: "48px 56px 16px", textAlign: "center", zIndex: 2 }}>
        <div
          style={{
            display: "inline-block",
            background: "#2DD4BF",
            color: "#0B0B12",
            padding: "6px 14px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontFamily: "ui-monospace, monospace",
            marginBottom: 18,
          }}
        >
          Wrong ratio = lost sale
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1 }}>
          Your art doesn&rsquo;t fit.
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1, color: "#2DD4BF" }}>
          Until it does.
        </div>
      </div>

      {/* COMPARE STRIP — middle 60% */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          padding: "12px 32px",
          alignItems: "stretch",
          zIndex: 2,
        }}
      >
        {/* LEFT — wrong fit */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: "#F87171",
              textTransform: "uppercase",
            }}
          >
            ✕ Source upload
          </div>
          {/* Wrong fit: source forced into a 4:3 LANDSCAPE frame — top/bottom of art gets chopped */}
          <div
            style={{
              aspectRatio: "3 / 4",
              width: "100%",
              background: "#0F0F18",
              border: "2px solid rgba(248,113,113,0.5)",
              borderRadius: 10,
              padding: 14,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Inner 1:1 square "buyer's frame" — moderate crop, leaves most of art visible */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
                boxShadow: "0 0 0 2px #F87171",
              }}
            >
              <img
                src={srcs.source}
                alt={`${name} — cropped`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {/* Top crop indicator stripe */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 24,
                  background: "repeating-linear-gradient(135deg, rgba(248,113,113,0.85) 0 8px, rgba(0,0,0,0) 8px 16px)",
                }}
              />
              {/* Bottom crop indicator stripe */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 24,
                  background: "repeating-linear-gradient(135deg, rgba(248,113,113,0.85) 0 8px, rgba(0,0,0,0) 8px 16px)",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                background: "rgba(248,113,113,0.95)",
                color: "#0B0B12",
                padding: "4px 8px",
                fontSize: 12,
                fontWeight: 700,
                borderRadius: 4,
              }}
            >
              CUT OFF
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                background: "rgba(11,11,18,0.85)",
                color: "#F87171",
                padding: "4px 8px",
                fontSize: 11,
                fontWeight: 700,
                borderRadius: 4,
                fontFamily: "ui-monospace, monospace",
              }}
            >
              Buyer&rsquo;s 1:1 frame
            </div>
          </div>
          <div style={{ fontSize: 16, color: "#F87171", textAlign: "center", fontWeight: 600, lineHeight: 1.3 }}>
            Black bars.<br />Buyer crops in Word.<br />72 DPI print = 1★
          </div>
        </div>

        {/* RIGHT — perfect fit */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: "#2DD4BF",
              textTransform: "uppercase",
            }}
          >
            ✓ SnapToSize 3:4
          </div>
          <div
            style={{
              aspectRatio: "3 / 4",
              width: "100%",
              background: "#1A1A24",
              border: "2px solid rgba(45,212,191,0.6)",
              borderRadius: 10,
              padding: 14,
              boxShadow: "0 0 28px rgba(45,212,191,0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={srcs.fit}
              alt={`${name} — perfect fit`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                background: "#2DD4BF",
                color: "#0B0B12",
                padding: "4px 8px",
                fontSize: 12,
                fontWeight: 700,
                borderRadius: 4,
              }}
            >
              300 DPI ✓
            </div>
          </div>
          <div style={{ fontSize: 16, color: "#2DD4BF", textAlign: "center", fontWeight: 600, lineHeight: 1.3 }}>
            Edge-to-edge.<br />Print-ready.<br />Zero cropping needed.
          </div>
        </div>
      </div>

      {/* RATIO PILLS ROW — 5 packs covered */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          padding: "28px 24px 12px",
          flexWrap: "nowrap",
          zIndex: 2,
        }}
      >
        {[
          { r: "2:3", n: "7" },
          { r: "3:4", n: "5" },
          { r: "4:5", n: "5" },
          { r: "ISO", n: "5" },
          { r: "Extras", n: "6" },
        ].map(({ r, n }) => (
          <div
            key={r}
            style={{
              background: "rgba(45,212,191,0.14)",
              border: "2px solid rgba(45,212,191,0.6)",
              color: "#2DD4BF",
              padding: "18px 14px",
              borderRadius: 16,
              fontFamily: "ui-monospace, monospace",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 110,
            }}
          >
            <span style={{ fontSize: 34, fontWeight: 800, lineHeight: 1 }}>{r}</span>
            <span style={{ fontSize: 16, fontWeight: 700, opacity: 0.9, marginTop: 8 }}>{n} sizes</span>
          </div>
        ))}
      </div>

      {/* SUBLINE + CTA — bottom */}
      <div style={{ textAlign: "center", padding: "20px 32px 36px", zIndex: 2 }}>
        <div style={{ fontSize: 26, color: "#E5E7EB", marginBottom: 20, lineHeight: 1.35, fontWeight: 600 }}>
          1 upload → 70 files. 300 DPI.<br />Fits every Etsy ratio.
        </div>
        <div
          style={{
            display: "inline-block",
            background: "#2DD4BF",
            color: "#0B0B12",
            padding: "20px 42px",
            borderRadius: 999,
            fontSize: 26,
            fontWeight: 800,
            boxShadow: "0 10px 28px rgba(45,212,191,0.4)",
          }}
        >
          Try free · app.snaptosize.com
        </div>
      </div>
    </div>
  );
}
