/* W23FiveFolders — "5 folders. 1 upload." — W23-P12 (2026-05-15)
   Light #FAFAF7 background. Folder chaos before → SnapToSize ZIP after.
   1000×1500px · 2:3 portrait · Playwright id: w23-five-folders
*/

const TEAL = "#2DD4BF";
const DARK = "#0F0F0F";
const MID = "#4A4A4A";
const GREY = "#9CA3AF";
const BG = "#FAFAF7";
const BORDER = "#E5E3DC";

const FOLDERS = [
  { label: "Folder_5x7_prints/", count: "3 files", color: "#F59E0B", bg: "#FEF3C7", text: "#78350F" },
  { label: "Folder_8x10_etsy/", count: "3 files", color: "#EF4444", bg: "#FEE2E2", text: "#991B1B" },
  { label: "Folder_A4_intl/", count: "3 files", color: "#8B5CF6", bg: "#EDE9FE", text: "#5B21B6" },
  { label: "Folder_11x14_large/", count: "3 files", color: "#F97316", bg: "#FFEDD5", text: "#9A3412" },
  { label: "Folder_square_ig/", count: "3 files", color: "#6B7280", bg: "#F3F4F6", text: "#374151" },
];

function FolderIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="30" viewBox="0 0 36 30" fill="none">
      <path d="M0 4C0 1.8 1.8 0 4 0H13L16 4H32C34.2 4 36 5.8 36 8V26C36 28.2 34.2 30 32 30H4C1.8 30 0 28.2 0 26V4Z" fill={color} opacity="0.85" />
    </svg>
  );
}

export default function W23FiveFolders() {
  return (
    <div
      id="w23-five-folders"
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
      <div style={{ width: 1000, height: 360, flexShrink: 0, position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/most-popular-sizes-room.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%", display: "block" }}
        />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to bottom, transparent, ${BG})` }} />
        <div style={{ position: "absolute", top: 22, left: 28, background: "rgba(15,15,15,0.70)", backdropFilter: "blur(6px)", borderRadius: 24, padding: "8px 18px" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#fff", textTransform: "uppercase" as const }}>
            THE FOLDER PROBLEM
          </span>
        </div>
      </div>

      {/* ── BLOCK 2: Headline ── */}
      <div style={{ padding: "6px 60px 14px" }}>
        <h1 style={{ fontSize: 58, fontWeight: 900, color: DARK, lineHeight: 1.05, margin: "0 0 10px" }}>
          5 folders.
          <br />
          <span style={{ color: TEAL }}>1 upload.</span>
        </h1>
        <p style={{ fontSize: 20, color: MID, margin: 0, lineHeight: 1.4 }}>
          Resizing manually means a new folder for every size. SnapToSize delivers them all in one ZIP.
        </p>
      </div>

      {/* ── BLOCK 3: BEFORE — folder rows ── */}
      <div style={{ flex: 1, padding: "0 60px", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: "#EF4444", textTransform: "uppercase" as const, marginBottom: 10 }}>
          ✗ The old way
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {FOLDERS.map((f) => (
            <div
              key={f.label}
              style={{
                flex: 1,
                background: f.bg,
                borderRadius: 12,
                border: `1.5px solid ${f.color}30`,
                borderLeft: `4px solid ${f.color}`,
                padding: "13px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <FolderIcon color={f.color} />
              <span style={{ flex: 1, fontSize: 19, fontWeight: 700, color: f.text, fontFamily: "ui-monospace, 'Fira Code', monospace" }}>
                {f.label}
              </span>
              <span style={{ fontSize: 14, color: f.color, fontWeight: 600 }}>{f.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BLOCK 4: AFTER — SnapToSize ZIP ── */}
      <div style={{ margin: "18px 60px 0" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: TEAL, textTransform: "uppercase" as const, marginBottom: 10 }}>
          ✓ SnapToSize
        </div>
        <div style={{
          background: "#F0FEFC",
          borderRadius: 14,
          border: `2px solid ${TEAL}50`,
          borderLeft: `5px solid ${TEAL}`,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}>
          <div style={{ fontSize: 44, lineHeight: 1 }}>📦</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: DARK }}>Your_Artwork_AllSizes.zip</div>
            <div style={{ fontSize: 16, color: MID, marginTop: 4 }}>28 files · 5 ratio packs · 300 DPI · Etsy-ready</div>
          </div>
          <div style={{ background: TEAL, color: "#0B2522", borderRadius: 10, padding: "10px 18px", fontSize: 15, fontWeight: 800, whiteSpace: "nowrap" as const }}>
            1 upload
          </div>
        </div>
      </div>

      {/* ── BLOCK 5: CTA ── */}
      <div style={{
        margin: "16px 60px 0",
        background: DARK,
        borderRadius: 14,
        padding: "20px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}>
        <div>
          <p style={{ fontSize: 19, fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
            Stop managing folders.
          </p>
          <p style={{ fontSize: 15, color: TEAL, margin: 0 }}>One upload → 28 sizes · ZIP in 60 seconds</p>
        </div>
        <div style={{ background: TEAL, color: "#0F0F0F", borderRadius: 10, padding: "12px 20px", fontSize: 16, fontWeight: 800, whiteSpace: "nowrap" as const, flexShrink: 0 }}>
          Try free →
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "14px 60px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${BORDER}`, marginTop: 16 }}>
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
