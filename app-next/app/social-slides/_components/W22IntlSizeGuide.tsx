/* W22ListingTierPin — "Which tier is your listing?" — W22-P03 (2026-05-08)
   Photo hero + large-text tier rows. Light #FAFAF7 background.
   1000×1500px · 2:3 portrait · Playwright id: w22-intl-size-guide
*/

const TEAL = "#2DD4BF";
const DARK = "#0F0F0F";
const MID = "#4A4A4A";
const GREY = "#9CA3AF";
const AMBER = "#F59E0B";
const RED = "#EF4444";
const BG = "#FAFAF7";
const BORDER = "#E5E3DC";

const tiers = [
  {
    num: "01",
    name: "Basic",
    tag: "Most US listings",
    facts: "1 ratio  ·  e.g. 2:3 only  ·  5 files",
    verdict: "Missing buyers who need 4:5, A4, square",
    verdictColor: RED,
    accentColor: "#9CA3AF",
    bg: "#F5F4F0",
    checkMark: false,
  },
  {
    num: "02",
    name: "Good",
    tag: "Getting there",
    facts: "2 ratios  ·  e.g. 2:3 + 4:5  ·  10 files",
    verdict: "Still missing ISO, square & landscape buyers",
    verdictColor: AMBER,
    accentColor: AMBER,
    bg: "#FEFBF0",
    checkMark: false,
  },
  {
    num: "03",
    name: "Complete",
    tag: "What SnapToSize generates",
    facts: "5 ratios  ·  28 sizes  ·  70 files  ·  A4 · A3 · A5  ·  300 DPI",
    verdict: "Etsy-ready in 60 seconds",
    verdictColor: TEAL,
    accentColor: TEAL,
    bg: "#F0FEFC",
    checkMark: true,
  },
];

export default function W22IntlSizeGuide() {
  return (
    <div
      id="w22-intl-size-guide"
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
      <div
        style={{
          width: 1000,
          height: 380,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/visuals/etsy-living-room-wall-art-sizes-lifestyle.jpg"
          alt="Etsy wall art in living room"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            display: "block",
          }}
        />
        {/* Gradient overlay at bottom for smooth transition */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: `linear-gradient(to bottom, transparent, ${BG})`,
          }}
        />
        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 28,
            background: "rgba(15,15,15,0.70)",
            backdropFilter: "blur(6px)",
            borderRadius: 24,
            padding: "8px 16px",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: TEAL,
              textTransform: "uppercase",
            }}
          >
            ETSY PRINT SELLER SELF-AUDIT
          </span>
        </div>
      </div>

      {/* ── BLOCK 2: Editorial Headline ── */}
      <div style={{ padding: "10px 60px 20px" }}>
        <h1
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: DARK,
            lineHeight: 1.05,
            margin: "0 0 10px",
          }}
        >
          Which tier is
          <br />
          your listing?
        </h1>
        <p style={{ fontSize: 20, color: MID, margin: 0, lineHeight: 1.4 }}>
          Most Etsy print listings are stuck at Tier 1.
          Here&apos;s what separates basic from complete.
        </p>
      </div>

      {/* ── BLOCK 3: Tier Rows ── */}
      <div
        style={{
          flex: 1,
          padding: "0 60px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {tiers.map((t) => (
          <div
            key={t.num}
            style={{
              flex: 1,
              background: t.bg,
              borderRadius: 14,
              border: `1.5px solid ${t.accentColor}40`,
              borderLeft: `5px solid ${t.accentColor}`,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Tier header row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: t.accentColor,
                    opacity: 0.8,
                  }}
                >
                  TIER {t.num}
                </span>
                <h2
                  style={{
                    fontSize: 36,
                    fontWeight: 900,
                    color: t.accentColor === GREY ? MID : t.accentColor,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {t.name}
                </h2>
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: t.accentColor,
                  background: `${t.accentColor}18`,
                  border: `1px solid ${t.accentColor}40`,
                  borderRadius: 20,
                  padding: "5px 12px",
                  whiteSpace: "nowrap",
                }}
              >
                {t.tag}
              </span>
            </div>

            {/* Facts row */}
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: t.checkMark ? DARK : "#6B7280",
                margin: 0,
                letterSpacing: "0.01em",
              }}
            >
              {t.checkMark ? "✓ " : ""}
              {t.facts}
            </p>

            {/* Verdict */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderTop: `1px solid ${BORDER}`,
                paddingTop: 10,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: t.verdictColor,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: t.verdictColor,
                }}
              >
                {t.verdict}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── BLOCK 4: CTA ── */}
      <div
        style={{
          margin: "16px 60px 0",
          background: DARK,
          borderRadius: 14,
          padding: "22px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <p
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 4px",
            }}
          >
            Move to Tier 3 in 60 seconds.
          </p>
          <p style={{ fontSize: 15, color: TEAL, margin: 0 }}>
            One upload → 70 files · 28 sizes · 300 DPI
          </p>
        </div>
        <div
          style={{
            background: TEAL,
            color: "#0F0F0F",
            borderRadius: 10,
            padding: "12px 20px",
            fontSize: 16,
            fontWeight: 800,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Try free →
        </div>
      </div>

      {/* ── BLOCK 5: Footer ── */}
      <div
        style={{
          padding: "16px 60px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${BORDER}`,
          marginTop: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill={TEAL} />
            <path d="M5.5 10.5L8.5 13.5L14.5 7.5" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>
            snaptosize.com
          </span>
        </div>
        <span style={{ fontSize: 13, color: GREY }}>
          app.snaptosize.com · free to start
        </span>
      </div>
    </div>
  );
}
