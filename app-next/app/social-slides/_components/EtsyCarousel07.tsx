"use client";

/* ─────────────────────────────────────────────────────────────────
   W20-I11: EtsyCarousel07
   "Your file is 300 DPI. Your buyer still got a blurry print."

   5-slide Instagram carousel (1080×1350 each)
   Archetype: B — Educational myth-bust
   Accent: RED (myth) + TEAL (truth)

   Slide 1 — HOOK    : "Your file is 300 DPI. Your buyer still got a blurry print."
   Slide 2 — TRAP    : 300 DPI alone tells you nothing — dimensions decide everything
   Slide 3 — MATH    : Each Etsy size needs a different pixel count
   Slide 4 — FIX     : SnapToSize calculates every dimension for you
   Slide 5 — CTA     : Comment "FREE" → 30 days Pro
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const W = 1080;
const H = 1350;
const TEAL  = "#2DD4BF";
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
export function EC07Slide01() {
  return (
    <section id="ec07-slide-01" style={{
      width: W, height: H,
      background: BG,
      backgroundImage: "url('/assets/ec07-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Dark overlay — darker top + bottom, slightly clearer in middle to let prints breathe */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.78) 0%, rgba(7,7,14,0.42) 38%, rgba(7,7,14,0.84) 75%, rgba(7,7,14,0.96) 100%)",
      }} />

      <div style={{ zIndex: 1, paddingTop: 64 }}>
        <Badge text="Etsy print myth-bust" color={RED} />
      </div>

      <div style={{
        zIndex: 1,
        padding: "0 64px",
        textAlign: "center",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 22,
      }}>
        <div style={{
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1.05,
          color: "#fff",
          letterSpacing: "-0.02em",
          textShadow: "0 4px 30px rgba(0,0,0,0.9)",
        }}>
          She got one{" "}
          <span style={{ color: RED }}>4★ review.</span>
        </div>

        {/* Pull-quote */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          background: "rgba(248,113,113,0.10)",
          border: `1px solid ${RED}40`,
          borderRadius: 14,
          padding: "14px 26px",
          backdropFilter: "blur(6px)",
        }}>
          <span style={{ fontSize: 44, color: RED, lineHeight: 0.6, fontFamily: "Georgia, serif" }}>&ldquo;</span>
          <span style={{ fontSize: 36, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
            a little soft.
          </span>
          <span style={{ fontSize: 44, color: RED, lineHeight: 0.6, fontFamily: "Georgia, serif" }}>&rdquo;</span>
        </div>

        <div style={{
          fontSize: 30,
          color: "rgba(255,255,255,0.82)",
          fontWeight: 500,
          lineHeight: 1.45,
          maxWidth: 860,
          textShadow: "0 2px 18px rgba(0,0,0,0.85)",
        }}>
          Same 300 DPI file.<br/>
          Crisp at <span style={{ color: TEAL, fontWeight: 700 }}>8×10.</span>{" "}
          Soft at <span style={{ color: RED, fontWeight: 700 }}>16×20.</span>
        </div>
      </div>

      <div style={{ zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Dots current={1} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 2 — THE TRAP ──────────────────────────────────────────
export function EC07Slide02() {
  return (
    <section id="ec07-slide-02" style={{
      width: W, height: H,
      background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-60}  left={-80}  color={RED}  size={420} opacity={0.10} />
      <GlowOrb bottom={-60} right={-60} color={RED} size={360} opacity={0.07} />

      <div style={{ padding: "64px 72px 32px", zIndex: 1 }}>
        <Badge text="The trap" color={RED} />
        <div style={{ marginTop: 28, fontSize: 56, fontWeight: 900, lineHeight: 1.1, color: "#fff" }}>
          DPI without dimensions{" "}
          <span style={{ color: RED }}>means nothing.</span>
        </div>
      </div>

      {/* Two contrast cards with arrow between */}
      <div style={{ flex: 1, padding: "0 72px", display: "flex", flexDirection: "column", justifyContent: "space-around", zIndex: 1 }}>

        {/* What sellers think */}
        <div style={{
          background: "rgba(248,113,113,0.06)",
          border: `1px solid ${RED}30`,
          borderRadius: 18,
          padding: "36px 40px",
        }}>
          <div style={{ fontSize: 22, color: RED, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            What most sellers ship
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 14 }}>
            <span style={{ fontFamily: "monospace", color: RED }}>1500 × 1500 px</span>
            {" "}@ 300 DPI
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.65)", lineHeight: 1.35 }}>
            That&apos;s a sharp <span style={{ color: "#fff", fontWeight: 700 }}>5×5&quot; print.</span>
            {" "}Not the 16×20 the buyer ordered.
          </div>
        </div>

        {/* Arrow divider */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", fontWeight: 700 }}>
            VS WHAT IT NEEDS
          </div>
          <div style={{ fontSize: 38, color: TEAL, lineHeight: 1 }}>↓</div>
        </div>

        {/* What actually prints */}
        <div style={{
          background: `${TEAL}10`,
          border: `1px solid ${TEAL}40`,
          borderRadius: 18,
          padding: "36px 40px",
          boxShadow: `0 0 32px rgba(45,212,191,0.06)`,
        }}>
          <div style={{ fontSize: 22, color: TEAL, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            What 16×20 actually needs
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 14 }}>
            <span style={{ fontFamily: "monospace", color: TEAL }}>4800 × 6000 px</span>
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.65)", lineHeight: 1.35 }}>
            <span style={{ color: "#fff", fontWeight: 700 }}>3.2× more pixels.</span>
            {" "}Anything less prints soft.
          </div>
        </div>
      </div>

      <div style={{ padding: "24px 0 0", zIndex: 1 }}>
        <Dots current={2} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 3 — THE MATH ──────────────────────────────────────────
export function EC07Slide03() {
  const sizes = [
    { label: "8×10",  px: "2400 × 3000",  ratio: "4:5" },
    { label: "11×14", px: "3300 × 4200",  ratio: "4:5" },
    { label: "16×20", px: "4800 × 6000",  ratio: "4:5" },
    { label: "12×18", px: "3600 × 5400",  ratio: "2:3" },
    { label: "A3",    px: "3508 × 4961",  ratio: "ISO" },
    { label: "24×36", px: "7200 × 10800", ratio: "2:3" },
  ];

  return (
    <section id="ec07-slide-03" style={{
      width: W, height: H,
      background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}  right={-80} color={TEAL} size={480} opacity={0.11} />
      <GlowOrb bottom={-60} left={-60} color={TEAL} size={400} opacity={0.08} />

      <div style={{ padding: "56px 72px 24px", zIndex: 1 }}>
        <Badge text="The math" color={TEAL} />
        <div style={{ marginTop: 22, fontSize: 54, fontWeight: 900, lineHeight: 1.05, color: "#fff" }}>
          Every size needs{" "}
          <span style={{ color: TEAL }}>its own pixel count.</span>
        </div>
        <div style={{ marginTop: 12, fontSize: 24, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
          All at 300 DPI. None of these are the same file.
        </div>
      </div>

      {/* Size rows with visual pixel bar */}
      <div style={{ flex: 1, padding: "0 72px", display: "flex", flexDirection: "column", gap: 10, zIndex: 1, justifyContent: "flex-start" }}>
        {sizes.map((s, i) => {
          const maxPx = 7200 * 10800;
          const pxArea = parseInt(s.px.split("×")[0]) * parseInt(s.px.split("×")[1]);
          const widthPct = Math.max(14, Math.round((pxArea / maxPx) * 100));
          return (
            <div key={s.label} style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${TEAL}24`,
              borderRadius: 12,
              padding: "16px 22px",
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}>
              <div style={{ minWidth: 110, display: "flex", alignItems: "baseline", gap: 10 }}>
                <span style={{ fontSize: 30, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em" }}>
                  {s.label}
                </span>
              </div>
              <span style={{
                fontSize: 14, fontFamily: "monospace", color: TEAL,
                background: `${TEAL}15`, padding: "3px 8px", borderRadius: 5, fontWeight: 700,
                letterSpacing: "0.04em",
              }}>
                {s.ratio}
              </span>
              {/* Visual pixel-area bar */}
              <div style={{ flex: 1, height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 5, overflow: "hidden", position: "relative" }}>
                <div style={{
                  width: `${widthPct}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${TEAL}66, ${TEAL})`,
                  borderRadius: 5,
                }} />
              </div>
              <div style={{ minWidth: 175, fontSize: 19, fontFamily: "monospace", color: "rgba(255,255,255,0.78)", textAlign: "right" }}>
                {s.px}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        margin: "18px 72px 0",
        background: `${RED}12`,
        border: `1px solid ${RED}35`,
        borderRadius: 14,
        padding: "14px 24px",
        textAlign: "center",
        zIndex: 1,
      }}>
        <span style={{ fontSize: 22, color: "#fff", fontWeight: 600 }}>
          Resize one wrong → buyer prints fuzzy → silent 4★
        </span>
      </div>

      <div style={{ padding: "20px 0 0", zIndex: 1 }}>
        <Dots current={3} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 4 — THE FIX (app screenshot) ─────────────────────────
export function EC07Slide04() {
  return (
    <section id="ec07-slide-04" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    left={-60}  color={TEAL} size={540} opacity={0.14} />
      <GlowOrb bottom={-80} right={-80} color={TEAL} size={440} opacity={0.09} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "64px 68px 0", zIndex: 1 }}>
        <Badge text="The fix" color={TEAL} />

        <div style={{ marginTop: 28, fontSize: 54, fontWeight: 900, lineHeight: 1.12, color: "#fff" }}>
          Upload once.{" "}
          <span style={{ color: TEAL }}>Every size, perfect pixels.</span>
        </div>

        <div style={{ marginTop: 18, fontSize: 28, color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>
          5 ZIP packs · up to 70 files · 300 DPI on every one
        </div>

        <div style={{
          marginTop: 28,
          borderRadius: 16,
          overflow: "hidden",
          border: `1px solid ${TEAL}22`,
          boxShadow: `0 0 48px rgba(45,212,191,0.10)`,
          flexShrink: 0,
        }}>
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
            alt="SnapToSize app — every ratio pack ready with correct pixel dimensions"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={{
          marginTop: 22,
          fontSize: 26,
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          lineHeight: 1.45,
        }}>
          Lanczos resampling. Stretch-only.{" "}
          <span style={{ color: TEAL, fontWeight: 700 }}>Zero cropping.</span>
        </div>

        {/* Stat strip */}
        <div style={{
          marginTop: 28,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 16,
        }}>
          {[
            { big: "28", small: "Etsy print sizes" },
            { big: "5", small: "ratio packs" },
            { big: "10s", small: "per ZIP" },
          ].map((s) => (
            <div key={s.small} style={{
              background: `${TEAL}10`,
              border: `1px solid ${TEAL}28`,
              borderRadius: 14,
              padding: "20px 12px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: TEAL, lineHeight: 1, fontFamily: "monospace" }}>
                {s.big}
              </div>
              <div style={{ marginTop: 8, fontSize: 20, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                {s.small}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 0 0", zIndex: 1 }}>
        <Dots current={4} />
        <SlideFooter />
      </div>
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC07Slide05() {
  return (
    <section id="ec07-slide-05" style={{
      width: W, height: H, background: BG,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <GlowOrb top={-80}    right={-60} color={TEAL} size={540} opacity={0.14} />
      <GlowOrb bottom={-80} left={-60}  color={TEAL} size={480} opacity={0.11} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "84px 68px 0", textAlign: "center", zIndex: 1 }}>
        <Badge text="30 days, on me" color={TEAL} />

        <div style={{
          marginTop: 32,
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1.05,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}>
          Try it free for{" "}
          <span style={{ color: TEAL }}>30 days.</span>
        </div>

        <div style={{
          marginTop: 24,
          fontSize: 30,
          color: "rgba(255,255,255,0.62)",
          lineHeight: 1.42,
        }}>
          Comment <span style={{ color: TEAL, fontWeight: 700 }}>&quot;FREE&quot;</span> below — I&apos;ll DM you a Pro code.
        </div>

        {/* DM mockup wrapped in framed container to fill the canvas */}
        <div style={{
          marginTop: 44,
          width: "100%",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 22,
          padding: "24px 22px",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {/* DM header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: `linear-gradient(135deg, ${TEAL}, ${TEAL}88)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 900, color: "#0B0B12",
            }}>
              S
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>snaptosize</div>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,0.45)" }}>Direct message</div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px 18px 18px 4px",
              padding: "16px 22px",
              fontSize: 26,
              fontWeight: 700,
              color: "#fff",
              maxWidth: "70%",
            }}>
              FREE
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{
              background: `${TEAL}22`,
              border: `1px solid ${TEAL}40`,
              borderRadius: "18px 18px 4px 18px",
              padding: "18px 24px",
              fontSize: 24,
              color: "#fff",
              maxWidth: "85%",
              textAlign: "left",
              lineHeight: 1.4,
            }}>
              Your code 🎉<br />
              <span style={{ color: TEAL, fontWeight: 900, fontSize: 32, letterSpacing: "0.04em" }}>ETSYSELLER</span><br />
              <span style={{ fontSize: 20, color: "rgba(255,255,255,0.55)" }}>
                30 days Pro · 70 sizes · No watermark
              </span>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 24,
          fontSize: 24,
          color: "rgba(255,255,255,0.36)",
          lineHeight: 1.5,
          letterSpacing: "0.04em",
        }}>
          ⚡ 50 codes only · First come, first served
        </div>

        {/* Benefit chips */}
        <div style={{
          marginTop: 28,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 12,
          width: "100%",
        }}>
          {[
            { icon: "✓", text: "70 files" },
            { icon: "✓", text: "Every ratio" },
            { icon: "✓", text: "No watermark" },
          ].map((b) => (
            <div key={b.text} style={{
              background: `${TEAL}10`,
              border: `1px solid ${TEAL}30`,
              borderRadius: 12,
              padding: "14px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}>
              <span style={{ fontSize: 22, color: TEAL, fontWeight: 900 }}>{b.icon}</span>
              <span style={{ fontSize: 22, color: "#fff", fontWeight: 600 }}>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Soft testimonial line */}
        <div style={{
          marginTop: 24,
          fontSize: 22,
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.5,
          fontStyle: "italic",
        }}>
          For Etsy sellers tired of resizing every print by hand.
        </div>
      </div>

      <div style={{ zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Dots current={5} />
        <SlideFooter />
      </div>
    </section>
  );
}
