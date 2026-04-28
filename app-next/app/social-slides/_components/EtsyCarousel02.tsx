"use client";

/* ─────────────────────────────────────────────────────────────────
   W21-I01: EtsyCarousel02
   "A4 and 8×10 are not the same size."

   5-slide Instagram carousel (1080×1350 each)
   Archetype D — Data Bomb
   Slide 1 — HOOK      : A4 ≠ 8×10 — the size gap buyers discover at home
   Slide 2 — REALITY   : The buyer journey: print → frame → doesn't fit → silent exit
   Slide 3 — SCALE     : US sizes vs. what international buyers actually need
   Slide 4 — FIX       : Upload once → 70 files → every format covered
   Slide 5 — CTA       : Comment "FRAMES" for the free international size cheat sheet
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const W = 1080;
const H = 1350;
const TEAL   = "#2DD4BF";
const PURPLE = "#A78BFA";
const RED    = "#F87171";
const BG     = "#07070E";

function GlowOrb({ top, left, right, bottom, color, size = 500, opacity = 0.15 }: {
  top?: number; left?: number; right?: number; bottom?: number;
  color: string; size?: number; opacity?: number;
}) {
  return (
    <div style={{
      position: "absolute",
      top:    top    !== undefined ? top    : undefined,
      left:   left   !== undefined ? left   : undefined,
      right:  right  !== undefined ? right  : undefined,
      bottom: bottom !== undefined ? bottom : undefined,
      width: size, height: size,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 0%, transparent 68%)`,
      pointerEvents: "none",
    }} />
  );
}

function Badge({ text, color = TEAL }: { text: string; color?: string }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      background: `${color}18`,
      border: `1px solid ${color}35`,
      borderRadius: 100,
      padding: "9px 28px",
      color,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "0.09em",
      textTransform: "uppercase" as const,
    }}>
      {text}
    </div>
  );
}

function SlideFooter() {
  return (
    <div style={{
      textAlign: "center",
      paddingBottom: 28,
      color: "rgba(255,255,255,0.28)",
      fontSize: 22,
      fontFamily: "monospace",
      letterSpacing: "0.05em",
    }}>
      snaptosize.com
    </div>
  );
}

// ── Slide 1 — HOOK ──────────────────────────────────────────────
export function EC02Slide01() {
  return (
    <section id="ec02-slide-01" style={{
      width: W, height: H,
      background: BG,
      backgroundImage: "url('/assets/ec02-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.75) 0%, rgba(7,7,14,0.50) 42%, rgba(7,7,14,0.82) 100%)",
      }} />
      <GlowOrb top={-80} left={-60}  color={PURPLE} size={550} opacity={0.10} />
      <GlowOrb bottom={-100} right={-40} color={TEAL} size={400} opacity={0.09} />

      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        paddingTop: 90, position: "relative", zIndex: 1,
      }}>
        <Badge text="For Etsy Sellers" />

        <div style={{ marginTop: 64, padding: "0 68px", textAlign: "center" }}>
          <div style={{
            fontSize: 86,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}>
            A4 and 8×10{" "}
            <span style={{ color: RED }}>are not</span>
            <br />
            the same size.
          </div>
        </div>

        <div style={{
          width: 64, height: 3,
          background: `linear-gradient(90deg, ${TEAL}, ${PURPLE})`,
          borderRadius: 3, marginTop: 52,
        }} />

        <div style={{
          marginTop: 40, padding: "0 76px",
          textAlign: "center",
          fontSize: 42,
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.45,
        }}>
          40% of Etsy buyers are international.
          <br />
          Most sellers only offer US sizes.
        </div>

        {/* A4 vs 8×10 comparison block */}
        <div style={{
          marginTop: 60,
          display: "flex",
          gap: 0,
          width: "100%",
          padding: "0 72px",
          boxSizing: "border-box" as const,
        }}>
          <div style={{
            flex: 1,
            background: "rgba(45,212,191,0.07)",
            border: "1px solid rgba(45,212,191,0.22)",
            borderRadius: "16px 0 0 16px",
            padding: "28px 20px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: TEAL, lineHeight: 1.2 }}>A4</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "white", marginTop: 8, lineHeight: 1.1 }}>210×297</div>
            <div style={{ fontSize: 22, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>mm</div>
            <div style={{ fontSize: 24, color: "rgba(45,212,191,0.65)", marginTop: 12 }}>UK · EU · AU frame</div>
          </div>
          <div style={{
            flex: 1,
            background: "rgba(248,113,113,0.07)",
            border: "1px solid rgba(248,113,113,0.22)",
            borderRadius: "0 16px 16px 0",
            padding: "28px 20px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: RED, lineHeight: 1.2 }}>8×10&quot;</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "white", marginTop: 8, lineHeight: 1.1 }}>203×254</div>
            <div style={{ fontSize: 22, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>mm</div>
            <div style={{ fontSize: 24, color: "rgba(248,113,113,0.65)", marginTop: 12 }}>What you&apos;re selling</div>
          </div>
        </div>
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        color: TEAL, fontSize: 28, fontWeight: 600,
        marginBottom: 52, position: "relative", zIndex: 1,
      }}>
        <span>Swipe to see what happens next</span>
        <span style={{ fontSize: 32 }}>→</span>
      </div>
    </section>
  );
}

// ── Slide 2 — REALITY ───────────────────────────────────────────
export function EC02Slide02() {
  const steps = [
    { icon: "🛍️", text: "UK buyer orders your \"8×10\" wall art print" },
    { icon: "🖼️", text: "Picks up an A4 frame at IKEA on the way home" },
    { icon: "📐", text: "Tries to fit the print — white gaps on all sides" },
    { icon: "❌",  text: "Gives up. Leaves a 3-star review. Never returns." },
  ];

  return (
    <section id="ec02-slide-02" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60} right={-80} color={RED}    size={420} opacity={0.10} />
      <GlowOrb bottom={-80} left={-60} color={PURPLE} size={380} opacity={0.09} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "80px 72px 0" }}>
        <Badge text="The silent exit" color={RED} />

        <div style={{
          marginTop: 48,
          fontSize: 66,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
        }}>
          Here&apos;s what your<br />
          <span style={{ color: RED }}>international buyer</span><br />
          experiences.
        </div>

        <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 26 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 28,
              background: i === 3
                ? "rgba(248,113,113,0.08)"
                : "rgba(255,255,255,0.04)",
              border: i === 3
                ? "1px solid rgba(248,113,113,0.22)"
                : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              padding: "22px 28px",
            }}>
              <span style={{ fontSize: 38, minWidth: 44, textAlign: "center" }}>{s.icon}</span>
              <span style={{
                fontSize: 34,
                color: i === 3 ? RED : "rgba(255,255,255,0.80)",
                fontWeight: i === 3 ? 700 : 400,
                lineHeight: 1.3,
              }}>
                {s.text}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 44,
          fontSize: 34,
          color: "rgba(255,255,255,0.38)",
          lineHeight: 1.5,
        }}>
          Most don&apos;t message you about it.<br />
          They just never buy again.
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}

// ── Slide 3 — SCALE ─────────────────────────────────────────────
export function EC02Slide03() {
  const packs = [
    { label: "2:3 Ratio",    sizes: "4×6, 6×9, 8×12, 10×15, 12×18, 16×24, 20×30",  sellers: true  },
    { label: "3:4 Ratio",    sizes: "6×8, 9×12, 12×16, 15×20, 18×24",               sellers: false },
    { label: "4:5 Ratio",    sizes: "8×10, 12×15, 16×20, 20×25, 24×30",             sellers: false },
    { label: "ISO A-Series", sizes: "A5, A4, A3, A2, A1",                            sellers: false },
    { label: "Extras",       sizes: "5×7, 8.5×11, 11×14, 11×17, 13×19, 20×24",     sellers: false },
  ];

  return (
    <section id="ec02-slide-03" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}  right={-80}  color={TEAL}   size={450} opacity={0.11} />
      <GlowOrb bottom={-60} left={-40} color={PURPLE} size={350} opacity={0.10} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "72px 72px 0" }}>
        <Badge text="The coverage gap" />

        <div style={{
          marginTop: 36,
          fontSize: 54,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          Most sellers offer<br />
          <span style={{ color: RED }}>1 ratio.</span>{" "}
          <span style={{ color: TEAL }}>SnapToSize</span><br />
          gives you all 5.
        </div>

        {/* Pack list — sellers column vs SnapToSize column */}
        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 88px 88px", gap: 8, paddingBottom: 4 }}>
            <div style={{ fontSize: 22, color: "rgba(255,255,255,0.30)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
              Pack
            </div>
            <div style={{ fontSize: 22, color: "rgba(248,113,113,0.70)", fontWeight: 700, textAlign: "center" as const, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>
              Typical
            </div>
            <div style={{ fontSize: 22, color: TEAL, fontWeight: 700, textAlign: "center" as const, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>
              STS
            </div>
          </div>

          {packs.map((p) => (
            <div key={p.label} style={{
              display: "grid",
              gridTemplateColumns: "1fr 88px 88px",
              gap: 8,
              alignItems: "center",
              background: p.sellers ? "rgba(255,255,255,0.03)" : "rgba(45,212,191,0.06)",
              border: p.sellers ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(45,212,191,0.20)",
              borderRadius: 12,
              padding: "14px 16px",
            }}>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700, color: p.sellers ? "rgba(255,255,255,0.60)" : "white" }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 22, color: "rgba(255,255,255,0.28)", marginTop: 3 }}>
                  {p.sizes}
                </div>
              </div>
              {/* Typical seller checkmark */}
              <div style={{ textAlign: "center" as const, fontSize: 28 }}>
                {p.sellers ? "✓" : <span style={{ color: "rgba(248,113,113,0.50)", fontSize: 24 }}>—</span>}
              </div>
              {/* SnapToSize checkmark */}
              <div style={{ textAlign: "center" as const, fontSize: 28, color: TEAL, fontWeight: 700 }}>
                ✓
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 20,
          fontSize: 30,
          color: "rgba(255,255,255,0.40)",
          lineHeight: 1.4,
        }}>
          30+ sizes · portrait &amp; landscape · one upload.
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}

// ── Slide 4 — FIX ───────────────────────────────────────────────
export function EC02Slide04() {
  return (
    <section id="ec02-slide-04" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60}   right={-60}  color={TEAL}   size={480} opacity={0.12} />
      <GlowOrb bottom={-80} left={-80}  color={PURPLE} size={420} opacity={0.10} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "72px 68px 0" }}>
        <Badge text="The fix" />

        <div style={{
          marginTop: 40,
          fontSize: 64,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          Upload once.<br />
          <span style={{ color: TEAL }}>Every format.</span><br />
          Every country.
        </div>

        {/* App screenshot */}
        <div style={{
          marginTop: 36,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(45,212,191,0.20)",
          boxShadow: "0 0 40px rgba(45,212,191,0.08)",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "12px 18px",
            background: "rgba(10,10,20,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            {["#F87171", "#FBBF24", "#34D399"].map((c, i) => (
              <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.75 }} />
            ))}
            <div style={{
              marginLeft: 10,
              background: "rgba(255,255,255,0.07)",
              borderRadius: 5,
              padding: "3px 14px",
              fontSize: 19,
              color: "rgba(255,255,255,0.30)",
              flex: 1,
            }}>
              app.snaptosize.com
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/app-screenshot-packs-ready.png"
            alt="SnapToSize app — all packs ready for download"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* Feature pills */}
        <div style={{
          marginTop: 28,
          display: "flex",
          gap: 14,
          flexWrap: "wrap" as const,
        }}>
          {["US sizes", "EU/ISO sizes", "AU sizes", "70 files", "300 DPI", "60 seconds"].map((label) => (
            <div key={label} style={{
              background: "rgba(45,212,191,0.08)",
              border: "1px solid rgba(45,212,191,0.22)",
              borderRadius: 100,
              padding: "10px 22px",
              fontSize: 26,
              color: TEAL,
              fontWeight: 600,
            }}>
              {label}
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC02Slide05() {
  return (
    <section id="ec02-slide-05" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    left={-60}   color={TEAL}   size={520} opacity={0.13} />
      <GlowOrb bottom={-80} right={-60}  color={PURPLE} size={480} opacity={0.12} />

      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", padding: "72px 72px 0", textAlign: "center",
      }}>
        <div style={{
          fontSize: 50,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.15,
          marginBottom: 48,
          letterSpacing: "-0.02em",
        }}>
          Stop leaving{" "}
          <span style={{ color: TEAL }}>international buyers</span><br />
          without their size.
          <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400, fontSize: 40 }}> Try Pro — on us.</span>
        </div>

        {/* DM mockup */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 20,
          padding: "28px 36px",
          marginBottom: 40,
          width: "100%",
          maxWidth: 700,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 16 }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: `linear-gradient(135deg, ${TEAL}, ${PURPLE})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, fontWeight: 800, color: "#07070E", flexShrink: 0,
            }}>S</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "white", fontSize: 26, fontWeight: 700 }}>snaptosize</div>
              <div style={{ color: TEAL, fontSize: 22 }}>Sent you a message · now</div>
            </div>
          </div>
          <div style={{
            background: "rgba(45,212,191,0.10)",
            border: "1px solid rgba(45,212,191,0.20)",
            borderRadius: 12, padding: "16px 20px",
            textAlign: "left",
          }}>
            <div style={{ fontSize: 26, color: "rgba(255,255,255,0.80)", lineHeight: 1.4 }}>
              Here&apos;s your{" "}
              <span style={{ color: TEAL, fontWeight: 700 }}>1 month free Pro</span> code 🎁<br />
              US + ISO sizes · 70 files · Etsy-ready ZIP
            </div>
          </div>
        </div>

        <div style={{
          fontSize: 44,
          fontWeight: 400,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.4,
          marginBottom: 28,
        }}>
          Want a free month of Pro?
        </div>

        <div style={{
          background: "rgba(45,212,191,0.10)",
          border: "2px solid rgba(45,212,191,0.40)",
          borderRadius: 20,
          padding: "28px 56px",
          marginBottom: 28,
          width: "100%",
        }}>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.55)", marginBottom: 10, fontWeight: 500 }}>
            Comment
          </div>
          <div style={{
            fontSize: 90,
            fontWeight: 900,
            color: TEAL,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}>
            &ldquo;FREE&rdquo;
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.40)", marginTop: 10 }}>
            and we&apos;ll DM you the promo code
          </div>
        </div>

        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.25)", lineHeight: 1.4 }}>
          50 codes only · Expires May 26
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}
