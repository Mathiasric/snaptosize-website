"use client";

/* ─────────────────────────────────────────────────────────────────
   W18-I05: EtsyCarousel05
   "Her Canva file was one size. She listed 30. Spent 4 minutes."

   5-slide Instagram carousel (1080×1350 each)
   Archetype: B — Process walkthrough / product demo
   Accent: TEAL dominant (first solution-led carousel)
   Slide 1 — HOOK    : "Her Canva file was one size. She listed 30. Spent 4 minutes."
   Slide 2 — BEFORE  : The manual resize trap — why it doesn't scale
   Slide 3 — PROCESS : Upload → Pick sizes → Download ZIP (3 steps)
   Slide 4 — RESULT  : App screenshot — 70 files, 5 ZIPs, 300 DPI
   Slide 5 — CTA     : Comment "FREE" → 30 days Pro
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const W = 1080;
const H = 1350;
const TEAL  = "#2DD4BF";
const AMBER = "#F59E0B";
const RED   = "#F87171";
const BG    = "#07070E";

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

function Dots({ current, total = 5 }: { current: number; total?: number }) {
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 12 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: i === current - 1 ? 28 : 8,
          height: 8,
          borderRadius: 4,
          background: i === current - 1 ? TEAL : "rgba(255,255,255,0.18)",
        }} />
      ))}
    </div>
  );
}

// ── Slide 1 — HOOK ──────────────────────────────────────────────
export function EC05Slide01() {
  return (
    <section id="ec05-slide-01" style={{
      width: W, height: H,
      background: BG,
      backgroundImage: "url('/assets/ec05-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Dark overlay — darker at top and bottom, clear in the middle */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.72) 0%, rgba(7,7,14,0.40) 35%, rgba(7,7,14,0.82) 72%, rgba(7,7,14,0.96) 100%)",
      }} />
      <GlowOrb top={-80}    right={-60}  color={TEAL}  size={540} opacity={0.16} />
      <GlowOrb bottom={-80} left={-60}   color={TEAL}  size={400} opacity={0.10} />

      {/* Badge */}
      <div style={{ zIndex: 1, paddingTop: 64 }}>
        <Badge text="4-minute process" color={TEAL} />
      </div>

      {/* Center headline */}
      <div style={{
        zIndex: 1,
        padding: "0 72px",
        textAlign: "center",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 24,
      }}>
        <div style={{
          fontSize: 58,
          fontWeight: 900,
          lineHeight: 1.15,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}>
          Most Etsy sellers list 3 sizes.<br />
          <span style={{ color: TEAL }}>Top sellers list 30.</span>
        </div>
        <div style={{
          fontSize: 38,
          color: "rgba(255,255,255,0.72)",
          fontWeight: 600,
          lineHeight: 1.4,
        }}>
          The difference is 4 minutes.
        </div>
      </div>

      <div style={{ zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Dots current={1} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 2 — BEFORE (the manual trap) ──────────────────────────
export function EC05Slide02() {
  const steps = [
    {
      n: "01",
      title: "Open Canva. Export at 8×10.",
      sub: "Rename it. Save it. That's 1 size done.",
      tone: "neutral" as const,
    },
    {
      n: "02",
      title: "Open Canva again. Resize to 5×7.",
      sub: "Adjust the layout. Re-export. Rename. Save. 3 minutes gone.",
      tone: "warn" as const,
    },
    {
      n: "03",
      title: "Repeat for every single size.",
      sub: "30 sizes × 3 min each = 90 minutes. Every listing. Every update.",
      tone: "loss" as const,
    },
  ];

  const toneColor = {
    neutral: "rgba(255,255,255,0.35)",
    warn: AMBER,
    loss: RED,
  };

  return (
    <section id="ec05-slide-02" style={{
      width: W, height: H,
      background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60}   right={-80} color={AMBER} size={420} opacity={0.10} />
      <GlowOrb bottom={-60} left={-60} color={RED}   size={380} opacity={0.07} />

      {/* Header */}
      <div style={{ padding: "64px 72px 40px", zIndex: 1 }}>
        <Badge text="The manual way" color={AMBER} />
        <div style={{ marginTop: 28, fontSize: 58, fontWeight: 900, lineHeight: 1.1, color: "#fff" }}>
          Most sellers do this{" "}
          <span style={{ color: AMBER }}>for every listing.</span>
        </div>
      </div>

      {/* Steps */}
      <div style={{ flex: 1, padding: "0 72px", display: "flex", flexDirection: "column", gap: 28, justifyContent: "space-around", zIndex: 1 }}>
        {steps.map((step) => (
          <div key={step.n} style={{
            display: "flex", gap: 28, alignItems: "flex-start",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${toneColor[step.tone]}28`,
            borderRadius: 16,
            padding: "36px 36px",
          }}>
            <div style={{
              fontSize: 38,
              fontWeight: 900,
              color: toneColor[step.tone],
              fontFamily: "monospace",
              minWidth: 52,
              lineHeight: 1,
              paddingTop: 4,
            }}>
              {step.n}
            </div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 8 }}>
                {step.title}
              </div>
              <div style={{ fontSize: 24, color: "rgba(255,255,255,0.52)", lineHeight: 1.4 }}>
                {step.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "24px 0 0", zIndex: 1 }}>
        <Dots current={2} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 3 — PROCESS (3 steps with SnapToSize) ─────────────────
export function EC05Slide03() {
  const steps = [
    {
      n: "01",
      title: "Upload your file",
      sub: "JPG or PNG from Canva, Photoshop, or Illustrator. Any resolution.",
      accent: TEAL,
    },
    {
      n: "02",
      title: "Pick your sizes",
      sub: "30 sizes across 5 packs: 2:3, 3:4, 4:5, ISO A-series, and Extras.",
      accent: TEAL,
    },
    {
      n: "03",
      title: "Download 5 ZIPs",
      sub: "Every file at 300 DPI, named by size. Ready to upload to Etsy.",
      accent: TEAL,
    },
  ];

  return (
    <section id="ec05-slide-03" style={{
      width: W, height: H,
      background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60}    left={-80}  color={TEAL} size={500} opacity={0.12} />
      <GlowOrb bottom={-60} right={-60} color={TEAL} size={420} opacity={0.09} />

      {/* Header */}
      <div style={{ padding: "64px 72px 40px", zIndex: 1 }}>
        <Badge text="The SnapToSize way" color={TEAL} />
        <div style={{ marginTop: 28, fontSize: 58, fontWeight: 900, lineHeight: 1.1, color: "#fff" }}>
          3 steps.{" "}
          <span style={{ color: TEAL }}>4 minutes.</span>{" "}
          30 sizes.
        </div>
      </div>

      {/* Steps */}
      <div style={{ flex: 1, padding: "0 72px", display: "flex", flexDirection: "column", gap: 28, justifyContent: "space-around", zIndex: 1 }}>
        {steps.map((step) => (
          <div key={step.n} style={{
            display: "flex", gap: 28, alignItems: "flex-start",
            background: `${TEAL}08`,
            border: `1px solid ${TEAL}28`,
            borderRadius: 16,
            padding: "36px 36px",
          }}>
            {/* Number circle */}
            <div style={{
              width: 56, height: 56,
              borderRadius: "50%",
              background: `${TEAL}20`,
              border: `2px solid ${TEAL}50`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{
                fontSize: 26, fontWeight: 900, color: TEAL, fontFamily: "monospace",
              }}>{step.n}</span>
            </div>
            <div style={{ paddingTop: 4 }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 8 }}>
                {step.title}
              </div>
              <div style={{ fontSize: 24, color: "rgba(255,255,255,0.52)", lineHeight: 1.4 }}>
                {step.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stat bar */}
      <div style={{
        margin: "24px 72px 0",
        background: `${TEAL}12`,
        border: `1px solid ${TEAL}30`,
        borderRadius: 16,
        padding: "20px 32px",
        textAlign: "center",
        zIndex: 1,
      }}>
        <span style={{ fontSize: 26, color: TEAL, fontWeight: 700 }}>
          vs 1.5 hours of manual resizing
        </span>
      </div>

      <div style={{ padding: "20px 0 0", zIndex: 1 }}>
        <Dots current={3} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 4 — RESULT (app screenshot) ───────────────────────────
export function EC05Slide04() {
  return (
    <section id="ec05-slide-04" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    left={-60}  color={TEAL} size={540} opacity={0.14} />
      <GlowOrb bottom={-80} right={-80} color={TEAL} size={440} opacity={0.09} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "64px 68px 0", zIndex: 1 }}>
        <Badge text="What it looks like" color={TEAL} />

        <div style={{ marginTop: 28, fontSize: 54, fontWeight: 900, lineHeight: 1.12, color: "#fff" }}>
          70 files. 5 ZIPs.{" "}
          <span style={{ color: TEAL }}>Ready.</span>
        </div>

        <div style={{
          marginTop: 18,
          fontSize: 28,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.4,
        }}>
          300 DPI · Every ratio · Every buyer covered
        </div>

        {/* App screenshot */}
        <div style={{
          marginTop: 32,
          borderRadius: 16,
          overflow: "hidden",
          border: `1px solid ${TEAL}22`,
          boxShadow: `0 0 48px rgba(45,212,191,0.10)`,
          flexShrink: 0,
        }}>
          {/* Browser chrome bar */}
          <div style={{
            background: "rgba(255,255,255,0.06)",
            padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#F87171", "#F59E0B", "#2DD4BF"].map((c) => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.7 }} />
              ))}
            </div>
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
            alt="SnapToSize — 5 ZIP packs ready, every size covered"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>

      <div style={{ padding: "20px 0 0", zIndex: 1 }}>
        <Dots current={4} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC05Slide05() {
  return (
    <section id="ec05-slide-05" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    right={-60} color={TEAL} size={540} opacity={0.14} />
      <GlowOrb bottom={-80} left={-60}  color={TEAL} size={480} opacity={0.11} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "68px 68px 0", textAlign: "center", zIndex: 1 }}>
        <div style={{
          fontSize: 52,
          fontWeight: 900,
          lineHeight: 1.1,
          color: "#fff",
          letterSpacing: "-0.01em",
        }}>
          Try it free for{" "}
          <span style={{ color: TEAL }}>30 days.</span>
        </div>

        <div style={{
          marginTop: 24,
          fontSize: 32,
          color: "rgba(255,255,255,0.50)",
          lineHeight: 1.42,
        }}>
          Comment <span style={{ color: TEAL, fontWeight: 700 }}>"FREE"</span> below.<br />
          I&apos;ll DM you a promo code for 1 month Pro.
        </div>

        {/* DM mockup */}
        <div style={{
          marginTop: 72,
          width: "100%",
          display: "flex", flexDirection: "column", gap: 14,
        }}>
          {/* Incoming message */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px 18px 18px 4px",
              padding: "16px 22px",
              fontSize: 26,
              color: "#fff",
              maxWidth: "80%",
            }}>
              FREE
            </div>
          </div>

          {/* Reply */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{
              background: `${TEAL}22`,
              border: `1px solid ${TEAL}40`,
              borderRadius: "18px 18px 4px 18px",
              padding: "16px 22px",
              fontSize: 26,
              color: "#fff",
              maxWidth: "88%",
              lineHeight: 1.4,
            }}>
              Here&apos;s your code 🎉<br />
              <span style={{ color: TEAL, fontWeight: 700, fontSize: 28 }}>ETSYSELLER</span><br />
              <span style={{ fontSize: 22, color: "rgba(255,255,255,0.55)" }}>
                30 days Pro · 70 sizes · No watermark
              </span>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 44,
          fontSize: 26,
          color: "rgba(255,255,255,0.30)",
          lineHeight: 1.5,
        }}>
          50 codes only. First come, first served.
        </div>
      </div>

      <div style={{ zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Dots current={5} />
        <SlideFooter />
      </div>
    </section>
  );
}
