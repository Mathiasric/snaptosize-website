"use client";

/* ─────────────────────────────────────────────────────────────────
   W22-I02: EtsyCarousel04
   "Most disappointed buyers don't leave 1★. They just don't come back."

   5-slide Instagram carousel (1080×1350 each)
   Archetype: Buyer-side silent loss reveal
   Slide 1 — HOOK    : "It looks blurry." — visible 1★ + 26 silent
   Slide 2 — REALITY : What buyers actually do with a wrong-size file (3 steps)
   Slide 3 — DATA    : The silent-loss math you can't see in your dashboard
   Slide 4 — FIX     : Every size fits → every buyer prints right
   Slide 5 — CTA     : Comment "FREE" → 1 month free Pro
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
          background: i === current - 1 ? PURPLE : "rgba(255,255,255,0.18)",
        }} />
      ))}
    </div>
  );
}

// ── Slide 1 — HOOK ──────────────────────────────────────────────
export function EC04Slide01() {
  return (
    <section id="ec04-slide-01" style={{
      width: W, height: H,
      background: BG,
      backgroundImage: "url('/assets/ec04-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Dark overlay — slightly darker bottom so headline pops */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.55) 0%, rgba(7,7,14,0.35) 30%, rgba(7,7,14,0.88) 75%, rgba(7,7,14,0.96) 100%)",
      }} />
      <GlowOrb top={-80}    left={-60}   color={PURPLE} size={520} opacity={0.14} />
      <GlowOrb bottom={-80} right={-60}  color={RED}    size={420} opacity={0.08} />

      {/* Badge */}
      <div style={{ zIndex: 1, paddingTop: 64 }}>
        <Badge text="The review you can't reply to" color={PURPLE} />
      </div>

      {/* Center content — left-aligned */}
      <div style={{
        zIndex: 1,
        width: "100%",
        padding: "0 72px",
        display: "flex", flexDirection: "column",
      }}>
        {/* Quote */}
        <div style={{
          fontSize: 108,
          fontWeight: 900,
          color: "white",
          lineHeight: 0.94,
          letterSpacing: "-0.04em",
          textShadow: `0 0 70px ${PURPLE}45`,
        }}>
          &ldquo;<span style={{ color: PURPLE }}>It looks<br />blurry.</span>&rdquo;
        </div>

        <div style={{
          marginTop: 32,
          fontSize: 54,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.1,
          letterSpacing: "-0.022em",
        }}>
          The 1-star review you see.
        </div>

        <div style={{
          marginTop: 16,
          fontSize: 38,
          fontWeight: 400,
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.36,
        }}>
          And the <span style={{ color: PURPLE, fontWeight: 700 }}>26 silent buyers</span> behind it<br />
          who hated it too — and never told you.
        </div>
      </div>

      <div style={{ zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Dots current={1} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 2 — REALITY (3-step buyer journey) ───────────────────
export function EC04Slide02() {
  const steps = [
    {
      n: "01",
      title: "Buyer downloads your file",
      sub: "They get a 24×36\" JPG you uploaded — no A2, no 16×20, no 4×6.",
      tone: "neutral",
    },
    {
      n: "02",
      title: "Their frame is 16×20\"",
      sub: "So they crop your art in Word or Canva to fit. Composition gets sliced. DPI drops to 72.",
      tone: "warn",
    },
    {
      n: "03",
      title: "It prints blurry",
      sub: "They hang it. They hate it. They don't message you. They don't review. They just stop buying.",
      tone: "loss",
    },
  ];

  return (
    <section id="ec04-slide-02" style={{
      width: W, height: H,
      background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60}    right={-80}  color={PURPLE} size={420} opacity={0.10} />
      <GlowOrb bottom={-60} left={-60}   color={RED}    size={380} opacity={0.07} />

      <div style={{ padding: "64px 72px 0", flexShrink: 0, zIndex: 1 }}>
        <Badge text="What buyers actually do" color={PURPLE} />
        <div style={{
          marginTop: 28,
          fontSize: 58,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.06,
          letterSpacing: "-0.02em",
        }}>
          The path from sale<br />
          <span style={{ color: PURPLE }}>to silent refund.</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: "32px 72px 0", display: "flex", flexDirection: "column", gap: 18, zIndex: 1 }}>
        {steps.map((s) => {
          const accent = s.tone === "loss" ? RED : s.tone === "warn" ? AMBER : PURPLE;
          const bgTone = s.tone === "loss"
            ? "rgba(248,113,113,0.07)"
            : s.tone === "warn"
            ? "rgba(245,158,11,0.06)"
            : "rgba(167,139,250,0.05)";
          const borderTone = s.tone === "loss"
            ? "rgba(248,113,113,0.25)"
            : s.tone === "warn"
            ? "rgba(245,158,11,0.20)"
            : "rgba(167,139,250,0.18)";
          return (
            <div key={s.n} style={{
              display: "flex", alignItems: "flex-start", gap: 22,
              background: bgTone,
              border: `1px solid ${borderTone}`,
              borderRadius: 18,
              padding: "22px 26px",
            }}>
              <div style={{
                fontSize: 44,
                fontWeight: 900,
                color: accent,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                flexShrink: 0,
                width: 76,
              }}>{s.n}</div>
              <div>
                <div style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.18,
                  marginBottom: 8,
                }}>{s.title}</div>
                <div style={{
                  fontSize: 23,
                  color: "rgba(255,255,255,0.50)",
                  lineHeight: 1.4,
                }}>{s.sub}</div>
              </div>
            </div>
          );
        })}

        <div style={{
          marginTop: 14,
          background: "rgba(248,113,113,0.08)",
          border: "1px solid rgba(248,113,113,0.32)",
          borderRadius: 18,
          padding: "26px 28px",
          display: "flex", alignItems: "center", gap: 18,
        }}>
          <span style={{ fontSize: 36, flexShrink: 0 }}>👁️</span>
          <div style={{ fontSize: 27, color: "rgba(255,255,255,0.80)", lineHeight: 1.36 }}>
            You only see <span style={{ color: "white", fontWeight: 700 }}>step 1</span> in your dashboard.
            The other two happen in the buyer&apos;s living room — silently.
          </div>
        </div>

        <div style={{
          marginTop: 14,
          textAlign: "center",
          fontSize: 24,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.4,
        }}>
          The fix isn&apos;t a better review reply.<br />
          It&apos;s a file that doesn&apos;t need cropping.
        </div>
      </div>

      <div style={{ padding: "16px 0 0", zIndex: 1 }}>
        <Dots current={2} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 3 — DATA (silent-loss math) ──────────────────────────
export function EC04Slide03() {
  return (
    <section id="ec04-slide-03" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    right={-80}  color={PURPLE} size={460} opacity={0.13} />
      <GlowOrb bottom={-60} left={-40}   color={RED}    size={360} opacity={0.08} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "68px 68px 0", zIndex: 1 }}>
        <Badge text="The math you can't see" color={PURPLE} />

        <div style={{
          marginTop: 32,
          fontSize: 60,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.06,
          letterSpacing: "-0.02em",
        }}>
          For every <span style={{ color: PURPLE }}>1★ review</span><br />
          you get…
        </div>

        {/* Stat 1 — visible */}
        <div style={{
          marginTop: 40,
          background: "rgba(167,139,250,0.06)",
          border: "1px solid rgba(167,139,250,0.22)",
          borderRadius: 22,
          padding: "30px 32px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: PURPLE, letterSpacing: "0.07em", textTransform: "uppercase" as const, marginBottom: 8 }}>What you see</div>
              <div style={{ fontSize: 32, color: "white", fontWeight: 700, lineHeight: 1.25 }}>
                1 angry buyer<br />
                <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400, fontSize: 26 }}>who took the time to type it out</span>
              </div>
            </div>
            <div style={{
              fontSize: 92,
              lineHeight: 1,
              flexShrink: 0,
            }}>⭐</div>
          </div>
        </div>

        {/* Stat 2 — invisible */}
        <div style={{
          marginTop: 20,
          background: "rgba(248,113,113,0.07)",
          border: "1px solid rgba(248,113,113,0.28)",
          borderRadius: 22,
          padding: "30px 32px",
        }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: RED, letterSpacing: "0.07em", textTransform: "uppercase" as const, marginBottom: 8 }}>What you don&apos;t see</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginTop: 4 }}>
            <div style={{ fontSize: 104, fontWeight: 900, color: RED, lineHeight: 0.9, letterSpacing: "-0.03em" }}>26</div>
            <div style={{ fontSize: 32, color: "white", fontWeight: 700, lineHeight: 1.2 }}>
              buyers who hated it
            </div>
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.42)", marginTop: 10, lineHeight: 1.4 }}>
            but never reviewed, never refunded, never came back.
          </div>
        </div>

        {/* Source / emphasis */}
        <div style={{
          marginTop: 24,
          background: "rgba(167,139,250,0.07)",
          border: "1px solid rgba(167,139,250,0.22)",
          borderRadius: 18,
          padding: "24px 28px",
          display: "flex", alignItems: "center", gap: 18,
        }}>
          <span style={{ fontSize: 34, flexShrink: 0 }}>🤫</span>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.78)", lineHeight: 1.4 }}>
            Industry benchmark: only <span style={{ color: PURPLE, fontWeight: 700 }}>1 in 27</span> unhappy customers complains.
            The other 96% just stop buying.
          </div>
        </div>

        <div style={{
          marginTop: 16,
          textAlign: "center",
          fontSize: 24,
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.4,
        }}>
          Your real refund rate isn&apos;t the one you see.
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
export function EC04Slide04() {
  return (
    <section id="ec04-slide-04" style={{
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
          When every size fits,<br />
          <span style={{ color: TEAL }}>every buyer prints</span><br />
          their art right.
        </div>

        <div style={{
          marginTop: 24,
          fontSize: 32,
          color: "rgba(255,255,255,0.50)",
          lineHeight: 1.42,
        }}>
          Upload once. SnapToSize generates 70<br />
          print-ready files at 300 DPI — A-series,<br />
          US standard, ratios, and frame sizes.
        </div>

        {/* App screenshot */}
        <div style={{
          marginTop: 30,
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
            alt="SnapToSize — 5 ZIP packs ready, every size buyer needs"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={{
          marginTop: 18,
          fontSize: 28,
          color: "rgba(255,255,255,0.42)",
          lineHeight: 1.4,
        }}>
          70 files · 5 ZIPs · 300 DPI · No buyer left guessing
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
export function EC04Slide05() {
  return (
    <section id="ec04-slide-05" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    left={-60}   color={PURPLE} size={520} opacity={0.13} />
      <GlowOrb bottom={-80} right={-60}  color={TEAL}   size={480} opacity={0.12} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "68px 68px 0", textAlign: "center", zIndex: 1 }}>
        <div style={{
          fontSize: 52,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.15,
          marginBottom: 44,
          letterSpacing: "-0.02em",
        }}>
          Stop losing buyers<br />
          <span style={{ color: TEAL }}>to a size you don&apos;t list.</span><br />
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
              Every size your buyers ask for.
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
            &ldquo;FREE&rdquo;
          </div>
          <div style={{ fontSize: 27, color: "rgba(255,255,255,0.40)", marginTop: 8 }}>
            and we&apos;ll DM you the promo code
          </div>
        </div>

        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.25)", lineHeight: 1.4 }}>
          50 codes only · Expires May 28
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
        <Dots current={5} />
        <SlideFooter />
      </div>
    </section>
  );
}
