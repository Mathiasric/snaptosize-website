"use client";

/* ─────────────────────────────────────────────────────────────────
   W22-I01: EtsyCarousel03
   "Etsy has a 20 MB file limit. Most sellers only find out when upload fails."

   5-slide Instagram carousel (1080×1350 each)
   Archetype: Constraint Reveal
   Slide 1 — HOOK   : 20 MB — Etsy's hidden upload rule
   Slide 2 — SPLIT  : Before/After — manual ZIP vs 5 smart ZIPs (structural variety)
   Slide 3 — DATA   : File size by format at 300 DPI — which ones break the limit
   Slide 4 — FIX    : SnapToSize handles compression automatically
   Slide 5 — CTA    : Comment "ZIP" → 1 month free Pro
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const W = 1080;
const H = 1350;
const TEAL   = "#2DD4BF";
const PURPLE = "#A78BFA";
const AMBER  = "#F59E0B";
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
export function EC03Slide01() {
  return (
    <section id="ec03-slide-01" style={{
      width: W, height: H,
      background: BG,
      backgroundImage: "url('/assets/ec03-slide01-bg.png')",
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
        background: "linear-gradient(180deg, rgba(7,7,14,0.78) 0%, rgba(7,7,14,0.52) 40%, rgba(7,7,14,0.82) 100%)",
      }} />
      <GlowOrb top={-80}    left={-60}   color={AMBER}  size={500} opacity={0.10} />
      <GlowOrb bottom={-80} right={-60}  color={PURPLE} size={400} opacity={0.08} />

      {/* Badge */}
      <div style={{ zIndex: 1, paddingTop: 68 }}>
        <Badge text="The rule nobody explains" color={AMBER} />
      </div>

      {/* Center content — left-aligned like EC01 */}
      <div style={{
        zIndex: 1,
        width: "100%",
        padding: "0 72px",
        display: "flex", flexDirection: "column",
      }}>
        {/* Number as accent */}
        <div style={{
          fontSize: 130,
          fontWeight: 900,
          color: AMBER,
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          textShadow: `0 0 60px ${AMBER}50`,
        }}>
          20MB
        </div>

        <div style={{
          marginTop: 20,
          fontSize: 62,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
        }}>
          You can&apos;t fit<br />
          <span style={{ color: AMBER }}>30 sizes</span> in<br />
          one ZIP file.
        </div>

        <div style={{
          marginTop: 28,
          fontSize: 34,
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.42,
        }}>
          So most sellers just list 3 and<br />
          hope buyers figure it out.
        </div>
      </div>

      <div style={{ zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Dots current={1} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 2 — WORKAROUNDS (pain chain) ──────────────────────────
export function EC03Slide02() {
  const pains = [
    {
      icon: "🌍",
      title: "Skip ISO sizes entirely",
      sub: "A4, A3, A2 — every European and international buyer gets the wrong format",
    },
    {
      icon: "✂️",
      title: "Crop artwork to fit ratios",
      sub: "Forces bleed and composition cuts that distort the original piece",
    },
    {
      icon: "📎",
      title: "Upload PNG for 'quality'",
      sub: "PNG at 8×10\" is already 15 MB — nearly the entire upload limit for one file",
      highlight: true,
    },
    {
      icon: "📦",
      title: "Bundle everything in one ZIP",
      sub: "Result: 200–400 MB. Etsy rejects it immediately",
    },
    {
      icon: "🏳️",
      title: "List only 2–3 sizes and give up",
      sub: "Safer, but most potential buyers can't use any of them",
    },
  ];

  return (
    <section id="ec03-slide-02" style={{
      width: W, height: H,
      background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60}    right={-80}  color={RED}    size={400} opacity={0.09} />
      <GlowOrb bottom={-60} left={-60}   color={PURPLE} size={380} opacity={0.08} />

      <div style={{ padding: "64px 72px 0", flexShrink: 0, zIndex: 1 }}>
        <Badge text="How sellers cope" color={RED} />
        <div style={{
          marginTop: 28,
          fontSize: 58,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.06,
          letterSpacing: "-0.02em",
        }}>
          The workarounds<br />
          <span style={{ color: RED }}>that cost you sales.</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: "24px 72px 0", display: "flex", flexDirection: "column", gap: 14, zIndex: 1 }}>
        {pains.map((p, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 18,
            background: p.highlight ? `rgba(245,158,11,0.08)` : "rgba(255,255,255,0.03)",
            border: `1px solid ${p.highlight ? "rgba(245,158,11,0.25)" : "rgba(255,255,255,0.07)"}`,
            borderRadius: 16,
            padding: "18px 22px",
          }}>
            <span style={{ fontSize: 30, flexShrink: 0, marginTop: 2 }}>{p.icon}</span>
            <div>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                color: p.highlight ? AMBER : "white",
                lineHeight: 1.2,
                marginBottom: 5,
              }}>{p.title}</div>
              <div style={{
                fontSize: 23,
                color: "rgba(255,255,255,0.42)",
                lineHeight: 1.35,
              }}>{p.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "16px 0 0", zIndex: 1 }}>
        <Dots current={2} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 3 — PNG vs JPEG ───────────────────────────────────────
export function EC03Slide03() {
  return (
    <section id="ec03-slide-03" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    right={-80}  color={AMBER}  size={440} opacity={0.12} />
      <GlowOrb bottom={-60} left={-40}   color={PURPLE} size={360} opacity={0.09} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "68px 68px 0", zIndex: 1 }}>
        <Badge text="The real culprit" color={AMBER} />

        <div style={{
          marginTop: 32,
          fontSize: 64,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.06,
          letterSpacing: "-0.02em",
        }}>
          PNG looks better.<br />
          <span style={{ color: AMBER }}>But it costs you</span><br />
          half your limit.
        </div>

        {/* PNG card — full width */}
        <div style={{
          marginTop: 40,
          background: "rgba(248,113,113,0.07)",
          border: "1px solid rgba(248,113,113,0.28)",
          borderRadius: 22,
          padding: "34px 32px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: RED, letterSpacing: "0.07em", textTransform: "uppercase" as const, marginBottom: 10 }}>PNG</div>
              <div style={{ fontSize: 88, fontWeight: 900, color: RED, lineHeight: 0.88, letterSpacing: "-0.03em" }}>~15 MB</div>
              <div style={{ fontSize: 26, color: "rgba(255,255,255,0.40)", marginTop: 12, lineHeight: 1.35 }}>per file · 8×10&quot; · 300 DPI</div>
            </div>
            <div style={{
              background: "rgba(248,113,113,0.14)", borderRadius: 14,
              padding: "16px 22px", textAlign: "center", flexShrink: 0,
            }}>
              <div style={{ fontSize: 46, fontWeight: 900, color: RED, lineHeight: 1 }}>1</div>
              <div style={{ fontSize: 22, color: RED, fontWeight: 600, lineHeight: 1.3, marginTop: 4 }}>size fits<br />per ZIP</div>
            </div>
          </div>
          {/* Bar */}
          <div style={{ marginTop: 22, height: 14, background: "rgba(255,255,255,0.07)", borderRadius: 7, overflow: "hidden" }}>
            <div style={{ width: "75%", height: "100%", background: `linear-gradient(90deg, ${RED}80, ${RED})`, borderRadius: 7 }} />
          </div>
          <div style={{ marginTop: 8, fontSize: 21, color: "rgba(255,255,255,0.28)" }}>75% of Etsy&apos;s 20 MB limit — for a single file</div>
        </div>

        {/* JPEG card — full width */}
        <div style={{
          marginTop: 20,
          background: "rgba(45,212,191,0.06)",
          border: "1px solid rgba(45,212,191,0.22)",
          borderRadius: 22,
          padding: "34px 32px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: TEAL, letterSpacing: "0.07em", textTransform: "uppercase" as const, marginBottom: 10 }}>JPEG</div>
              <div style={{ fontSize: 88, fontWeight: 900, color: TEAL, lineHeight: 0.88, letterSpacing: "-0.03em" }}>~2 MB</div>
              <div style={{ fontSize: 26, color: "rgba(255,255,255,0.40)", marginTop: 12, lineHeight: 1.35 }}>per file · 8×10&quot; · 300 DPI</div>
            </div>
            <div style={{
              background: "rgba(45,212,191,0.12)", borderRadius: 14,
              padding: "16px 22px", textAlign: "center", flexShrink: 0,
            }}>
              <div style={{ fontSize: 46, fontWeight: 900, color: TEAL, lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: 22, color: TEAL, fontWeight: 600, lineHeight: 1.3, marginTop: 4 }}>sizes fit<br />per ZIP</div>
            </div>
          </div>
          {/* Bar */}
          <div style={{ marginTop: 22, height: 14, background: "rgba(255,255,255,0.07)", borderRadius: 7, overflow: "hidden" }}>
            <div style={{ width: "10%", height: "100%", background: `linear-gradient(90deg, ${TEAL}80, ${TEAL})`, borderRadius: 7 }} />
          </div>
          <div style={{ marginTop: 8, fontSize: 21, color: "rgba(255,255,255,0.28)" }}>10% of the limit — room for every size your buyers need</div>
        </div>

        {/* Callout */}
        <div style={{
          marginTop: 24,
          background: "rgba(245,158,11,0.07)",
          border: "1px solid rgba(245,158,11,0.20)",
          borderRadius: 18,
          padding: "26px 28px",
          display: "flex", alignItems: "center", gap: 18,
        }}>
          <span style={{ fontSize: 34, flexShrink: 0 }}>⚡</span>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
            SnapToSize exports <span style={{ color: AMBER, fontWeight: 700 }}>300 DPI JPG</span> and keeps every ZIP under 20 MB — automatically.
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 0 0", zIndex: 1 }}>
        <Dots current={3} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 4 — FIX ───────────────────────────────────────────────
export function EC03Slide04() {
  return (
    <section id="ec03-slide-04" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60}    right={-60}  color={TEAL}   size={480} opacity={0.11} />
      <GlowOrb bottom={-80} left={-40}   color={PURPLE} size={380} opacity={0.10} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "68px 68px 0", zIndex: 1 }}>
        <Badge text="The fix" />

        <div style={{
          marginTop: 32,
          fontSize: 60,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
        }}>
          Upload once.<br />
          <span style={{ color: TEAL }}>SnapToSize keeps</span><br />
          every ZIP under 20 MB.
        </div>

        <div style={{
          marginTop: 24,
          fontSize: 33,
          color: "rgba(255,255,255,0.48)",
          lineHeight: 1.42,
        }}>
          Smart compression. Every file at<br />
          300 DPI. No visible quality loss.
        </div>

        {/* App screenshot */}
        <div style={{
          marginTop: 28,
          borderRadius: 16,
          overflow: "hidden",
          border: `1px solid rgba(45,212,191,0.20)`,
          boxShadow: `0 0 40px rgba(45,212,191,0.08)`,
        }}>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/app-screenshot-packs-ready.png"
            alt="SnapToSize — 5 ZIP packs ready, each under 20 MB"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={{
          marginTop: 18,
          fontSize: 29,
          color: "rgba(255,255,255,0.38)",
          lineHeight: 1.4,
        }}>
          5 ZIPs · 70 files · All under 20 MB · 300 DPI
        </div>
      </div>

      <div style={{ padding: "10px 0 0", zIndex: 1 }}>
        <Dots current={4} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC03Slide05() {
  return (
    <section id="ec03-slide-05" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    left={-60}   color={TEAL}   size={520} opacity={0.13} />
      <GlowOrb bottom={-80} right={-60}  color={PURPLE} size={480} opacity={0.12} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "68px 68px 0", textAlign: "center", zIndex: 1 }}>
        <div style={{
          fontSize: 52,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.15,
          marginBottom: 44,
          letterSpacing: "-0.02em",
        }}>
          Stop losing sales<br />
          <span style={{ color: TEAL }}>to a 20 MB limit.</span><br />
          <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400, fontSize: 40 }}>
            Try SnapToSize Pro — on us.
          </span>
        </div>

        {/* DM mockup */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 20,
          padding: "28px 36px",
          marginBottom: 36,
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
              5 ZIPs · 70 files · All under 20 MB
            </div>
          </div>
        </div>

        <div style={{
          fontSize: 42,
          fontWeight: 400,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.4,
          marginBottom: 24,
        }}>
          Want a free month of Pro?
        </div>

        <div style={{
          background: "rgba(45,212,191,0.10)",
          border: "2px solid rgba(45,212,191,0.40)",
          borderRadius: 20,
          padding: "24px 56px",
          marginBottom: 24,
          width: "100%",
        }}>
          <div style={{ fontSize: 29, color: "rgba(255,255,255,0.55)", marginBottom: 8, fontWeight: 500 }}>
            Comment
          </div>
          <div style={{
            fontSize: 90,
            fontWeight: 900,
            color: TEAL,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}>
            &ldquo;ZIP&rdquo;
          </div>
          <div style={{ fontSize: 27, color: "rgba(255,255,255,0.40)", marginTop: 8 }}>
            and we&apos;ll DM you the promo code
          </div>
        </div>

        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.25)", lineHeight: 1.4 }}>
          50 codes only · Expires May 26
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
        <Dots current={5} />
        <SlideFooter />
      </div>
    </section>
  );
}
