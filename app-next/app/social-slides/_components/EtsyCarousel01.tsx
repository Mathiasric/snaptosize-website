"use client";

/* ─────────────────────────────────────────────────────────────────
   W20-I01: EtsyCarousel01
   "Buyers leave when their size isn't listed. They never tell you."

   5-slide Instagram carousel (1080×1350 each)
   Slide 1 — HOOK      : The silent conversion killer
   Slide 2 — REALITY   : The buyer journey they never see
   Slide 3 — SCALE     : The gap between what they offer vs. need
   Slide 4 — FIX       : App mockup — upload once, 70 files
   Slide 5 — CTA       : Comment "SIZE" for the free cheat sheet
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const W = 1080;
const H = 1350;
const TEAL    = "#2DD4BF";
const PURPLE  = "#A78BFA";
const RED     = "#F87171";
const BG      = "#07070E";
const BG2     = "#0B0B14";

// ── Shared atoms ────────────────────────────────────────────────

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
      background: `radial-gradient(circle, ${color}${Math.round(opacity*255).toString(16).padStart(2,"0")} 0%, transparent 68%)`,
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
export function EC01Slide01() {
  return (
    <section id="ec01-slide-01" style={{
      width: W, height: H,
      background: BG,
      backgroundImage: "url('/assets/ec01-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Dark overlay for text readability */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.72) 0%, rgba(7,7,14,0.55) 45%, rgba(7,7,14,0.78) 100%)",
        zIndex: 0,
      }} />
      <GlowOrb top={-80}  left={-60}  color={PURPLE} size={550} opacity={0.10} />
      <GlowOrb bottom={-100} right={-40} color={TEAL}   size={400} opacity={0.08} />

      {/* Top area */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 90, position: "relative", zIndex: 1 }}>
        <Badge text="For Etsy Sellers" />

        {/* Main statement */}
        <div style={{ marginTop: 70, padding: "0 72px", textAlign: "center" }}>
          <div style={{
            fontSize: 88,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}>
            Buyers leave when
            <br />
            their size{" "}
            <span style={{
              color: TEAL,
              display: "inline-block",
              position: "relative",
            }}>
              isn&apos;t listed.
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: 64, height: 3,
          background: `linear-gradient(90deg, ${TEAL}, ${PURPLE})`,
          borderRadius: 3, marginTop: 52,
        }} />

        {/* Subline */}
        <div style={{
          marginTop: 44, padding: "0 80px",
          textAlign: "center",
          fontSize: 46,
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.45,
        }}>
          They never tell you why.
        </div>

        <div style={{
          marginTop: 28, padding: "0 80px",
          textAlign: "center",
          fontSize: 40,
          fontWeight: 500,
          color: "rgba(255,255,255,0.35)",
          lineHeight: 1.4,
        }}>
          It happens dozens of times a week.
        </div>

        {/* Contrast block */}
        <div style={{
          marginTop: 64,
          display: "flex",
          gap: 0,
          width: "100%",
          padding: "0 72px",
          boxSizing: "border-box" as const,
        }}>
          <div style={{
            flex: 1,
            background: "rgba(248,113,113,0.07)",
            border: "1px solid rgba(248,113,113,0.18)",
            borderRadius: "16px 0 0 16px",
            padding: "28px 24px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 68, fontWeight: 900, color: RED, lineHeight: 1 }}>6–8</div>
            <div style={{ fontSize: 26, color: "rgba(255,255,255,0.40)", marginTop: 8 }}>sizes offered</div>
            <div style={{ fontSize: 23, color: "rgba(248,113,113,0.70)", marginTop: 6 }}>most shops</div>
          </div>
          <div style={{
            flex: 1,
            background: "rgba(45,212,191,0.08)",
            border: "1px solid rgba(45,212,191,0.22)",
            borderRadius: "0 16px 16px 0",
            padding: "28px 24px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 68, fontWeight: 900, color: TEAL, lineHeight: 1 }}>40+</div>
            <div style={{ fontSize: 26, color: "rgba(255,255,255,0.40)", marginTop: 8 }}>sizes needed</div>
            <div style={{ fontSize: 23, color: "rgba(45,212,191,0.70)", marginTop: 6 }}>by buyers</div>
          </div>
        </div>
      </div>

      {/* Swipe hint */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        color: TEAL, fontSize: 28, fontWeight: 600,
        marginBottom: 52, position: "relative", zIndex: 1,
      }}>
        <span>Swipe to see the full picture</span>
        <span style={{ fontSize: 32 }}>→</span>
      </div>
    </section>
  );
}

// ── Slide 2 — REALITY ───────────────────────────────────────────
export function EC01Slide02() {
  const steps = [
    { icon: "🔍", text: "Buyer searches \"5×7 fox print Etsy\"" },
    { icon: "🖱️", text: "Clicks your listing — beautiful artwork" },
    { icon: "📐", text: "Scans for 5×7\" — not there" },
    { icon: "↩️",  text: "Clicks back. Gone in 4 seconds." },
  ];

  return (
    <section id="ec01-slide-02" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60} right={-80} color={RED}    size={420} opacity={0.10} />
      <GlowOrb bottom={-80} left={-60} color={PURPLE} size={380} opacity={0.09} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "80px 72px 0" }}>
        <Badge text="The silent killer" color={RED} />

        <div style={{
          marginTop: 48,
          fontSize: 70,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
        }}>
          Here&apos;s what happens<br />
          <span style={{ color: RED }}>in your shop</span><br />
          every day.
        </div>

        {/* Journey steps */}
        <div style={{ marginTop: 60, display: "flex", flexDirection: "column", gap: 28 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 28,
              background: i === 3
                ? `rgba(248,113,113,0.08)`
                : "rgba(255,255,255,0.04)",
              border: i === 3
                ? `1px solid rgba(248,113,113,0.22)`
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
          marginTop: 48,
          fontSize: 36,
          color: "rgba(255,255,255,0.38)",
          lineHeight: 1.45,
        }}>
          No bounce notification. No lost sale alert.<br />
          Just a session that ended too soon.
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}

// ── Slide 3 — SCALE ─────────────────────────────────────────────
export function EC01Slide03() {
  // Size grid — most greyed out to show the gap
  const sizes = [
    "4×6","5×7","8×10","8×12","11×14","12×16",
    "16×20","18×24","20×24","20×30","24×30","24×36",
    "A5","A4","A3","A2","2:3","4:5",
    "1:1","5:4","16:9","2:1","3:1","4:3",
  ];

  return (
    <section id="ec01-slide-03" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}  right={-80}  color={TEAL}   size={450} opacity={0.11} />
      <GlowOrb bottom={-60} left={-40} color={PURPLE} size={350} opacity={0.10} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "80px 72px 0" }}>
        <Badge text="The gap" />

        <div style={{
          marginTop: 44,
          fontSize: 66,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          Your buyers need<br />
          <span style={{ color: TEAL }}>40+ sizes.</span><br />
          Most sellers offer{" "}
          <span style={{ color: RED }}>just 6–8.</span>
        </div>

        {/* Size grid */}
        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 10,
        }}>
          {sizes.map((s, i) => {
            const available = i < 8; // only first 8 "available"
            return (
              <div key={s} style={{
                background: available
                  ? `rgba(45,212,191,0.12)`
                  : "rgba(255,255,255,0.04)",
                border: available
                  ? `1px solid rgba(45,212,191,0.30)`
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "12px 6px",
                textAlign: "center",
                fontSize: 22,
                fontWeight: available ? 600 : 400,
                color: available ? TEAL : "rgba(255,255,255,0.20)",
              }}>
                {s}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ marginTop: 28, display: "flex", gap: 36, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: `rgba(45,212,191,0.3)`, border: `1px solid ${TEAL}` }} />
            <span style={{ color: TEAL, fontSize: 28, fontWeight: 600 }}>You offer this</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 28 }}>Buyers ask for this</span>
          </div>
        </div>

        <div style={{
          marginTop: 36,
          fontSize: 36,
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.4,
        }}>
          Every greyed-out size is a buyer<br />
          who clicked away this week.
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}

// ── Slide 4 — FIX (Real app screenshot) ─────────────────────────
export function EC01Slide04() {

  return (
    <section id="ec01-slide-04" style={{
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
          <span style={{ color: TEAL }}>70 files.</span><br />
          60 seconds.
        </div>

        {/* Real app screenshot */}
        <div style={{
          marginTop: 40,
          borderRadius: 16,
          overflow: "hidden",
          border: `1px solid rgba(45,212,191,0.20)`,
          boxShadow: `0 0 40px rgba(45,212,191,0.08)`,
        }}>
          {/* Browser chrome bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "12px 18px",
            background: "rgba(10,10,20,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            {["#F87171","#FBBF24","#34D399"].map((c, i) => (
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
          {/* Actual screenshot */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/app-screenshot-packs-ready.png"
            alt="SnapToSize app — all packs ready for download"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={{
          marginTop: 28,
          fontSize: 32,
          color: "rgba(255,255,255,0.38)",
          lineHeight: 1.4,
        }}>
          300 DPI · All sizes · Organized ZIP
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC01Slide05() {
  return (
    <section id="ec01-slide-05" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    left={-60}   color={TEAL}   size={520} opacity={0.13} />
      <GlowOrb bottom={-80} right={-60}  color={PURPLE} size={480} opacity={0.12} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "72px 72px 0", textAlign: "center" }}>

        {/* Top statement */}
        <div style={{
          fontSize: 52,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.15,
          marginBottom: 52,
          letterSpacing: "-0.02em",
        }}>
          Stop leaving sizes<br />
          <span style={{ color: TEAL }}>on the table.</span><br />
          <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400, fontSize: 42 }}>Try SnapToSize Pro — on us.</span>
        </div>

        {/* DM mockup */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 20,
          padding: "28px 36px",
          marginBottom: 44,
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
            background: `rgba(45,212,191,0.10)`,
            border: `1px solid rgba(45,212,191,0.20)`,
            borderRadius: 12, padding: "16px 20px",
            textAlign: "left",
          }}>
            <div style={{ fontSize: 26, color: "rgba(255,255,255,0.80)", lineHeight: 1.4 }}>
              Here&apos;s your{" "}
              <span style={{ color: TEAL, fontWeight: 700 }}>1 month free Pro</span> code 🎁<br />
              70 sizes · 300 DPI · Etsy-ready ZIP
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div style={{
          fontSize: 46,
          fontWeight: 400,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.4,
          marginBottom: 28,
        }}>
          Want a free month of Pro?
        </div>

        <div style={{
          background: `rgba(45,212,191,0.10)`,
          border: `2px solid rgba(45,212,191,0.40)`,
          borderRadius: 20,
          padding: "28px 56px",
          marginBottom: 28,
          width: "100%",
        }}>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.55)", marginBottom: 10, fontWeight: 500 }}>
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

        <div style={{
          fontSize: 30, color: "rgba(255,255,255,0.25)",
          lineHeight: 1.4,
        }}>
          50 codes only · Expires May 26
        </div>
      </div>

      <SlideFooter />
    </section>
  );
}
