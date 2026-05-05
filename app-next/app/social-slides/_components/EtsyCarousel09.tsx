"use client";

/* ─────────────────────────────────────────────────────────────────
   W20-I12: EtsyCarousel09
   "73 of every 100 buyers want 4:5. You only list 2:3."

   5-slide Instagram carousel (900×1125 each — 4:5)
   Archetype: D — Data bomb
   Accent: AMBER + TEAL (no purple)
   Slide 1 — HOOK  : "73 of every 100 buyers want 4:5. You only list 2:3."
   Slide 2 — REALITY: Same artwork, 2:3 vs 4:5 — different print, different listing
   Slide 3 — SCALE : 73% — the 4:5 sizes Etsy buyers actually search
   Slide 4 — FIX   : One upload → every ratio (real app screenshot)
   Slide 5 — CTA   : Comment "FREE" → 30 days Pro
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const TEAL  = "#2DD4BF";
const AMBER = "#F59E0B";
const RED   = "#F87171";
const BG    = "#07070E";

function Badge({ text, color = TEAL }: { text: string; color?: string }) {
  return (
    <div style={{
      display: "inline-block",
      padding: "10px 22px",
      borderRadius: 9999,
      background: `${color}20`,
      border: `1.5px solid ${color}60`,
      color,
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {text}
    </div>
  );
}

function SlideFooter({ current }: { current: number }) {
  return (
    <div style={{
      position: "absolute",
      bottom: 0, left: 0, right: 0,
      padding: "28px 48px 36px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
    }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} style={{
            width: i === current - 1 ? 28 : 10,
            height: 10,
            borderRadius: 5,
            background: i === current - 1 ? AMBER : "rgba(255,255,255,0.18)",
          }} />
        ))}
      </div>
      <div style={{
        fontSize: 18,
        color: "rgba(255,255,255,0.35)",
        letterSpacing: "0.08em",
        fontFamily: "system-ui, -apple-system, sans-serif",
        textTransform: "uppercase",
      }}>
        snaptosize.com
      </div>
    </div>
  );
}

// ── Slide 1 — HOOK ──────────────────────────────────────────────
export function EC09Slide01() {
  return (
    <section id="ec09-slide-01" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      backgroundImage: "url('/assets/ec09-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.40) 0%, rgba(7,7,14,0.72) 45%, rgba(7,7,14,0.94) 100%)",
      }} />

      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 60px 140px",
        textAlign: "center",
        gap: 28,
      }}>
        <Badge text="The 73% you're missing" color={AMBER} />

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{
            fontSize: 78,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
          }}>
            <span style={{ color: AMBER }}>73 of every 100</span> buyers
            <br />want <span style={{ color: TEAL }}>4:5</span>.
          </div>
          <div style={{
            fontSize: 56,
            fontWeight: 700,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            marginTop: 8,
          }}>
            You only list <span style={{ color: RED }}>2:3</span>.
          </div>
          <div style={{
            fontSize: 30,
            fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.35,
            marginTop: 14,
            maxWidth: 720,
            margin: "14px auto 0",
          }}>
            Same artwork. Wrong proportions for the frame they already own.
          </div>
        </div>
      </div>

      <SlideFooter current={1} />
    </section>
  );
}

// ── Slide 2 — REALITY (2:3 vs 4:5 side-by-side) ─────────────────
export function EC09Slide02() {
  // Floral vase: 2:3 source 1024×1536, 4:5 1200×1500
  // Render at equal display height to make the proportion difference visible
  const FRAME_H = 540;
  const FRAME_W_23 = FRAME_H * (2/3); // 360
  const FRAME_W_45 = FRAME_H * (4/5); // 432

  return (
    <section id="ec09-slide-02" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 50% 0%, #18181F 0%, ${BG} 70%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "70px 50px 140px",
        gap: 28,
      }}>
        <Badge text="Same art. Different ratio." color={AMBER} />

        <div style={{
          fontSize: 50,
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          maxWidth: 760,
        }}>
          One file fits a <span style={{ color: RED }}>2:3</span> frame.
          <br />A different file fits <span style={{ color: TEAL }}>4:5</span>.
        </div>

        <div style={{
          display: "flex",
          gap: 40,
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: 18,
        }}>
          {/* 2:3 side */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{
              width: FRAME_W_23,
              height: FRAME_H,
              border: `3px solid ${RED}`,
              borderRadius: 8,
              overflow: "hidden",
              position: "relative",
              boxShadow: `0 0 40px ${RED}30`,
              background: "#0a0a10",
            }}>
              <img
                src="/assets/listings/floral_vase/Floral vase art .jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{
              fontSize: 24, fontWeight: 800, color: RED, letterSpacing: "0.08em",
            }}>2:3</div>
            <div style={{
              fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.3, textAlign: "center",
            }}>
              4×6, 8×12, 24×36
              <br /><span style={{ color: "rgba(255,255,255,0.35)" }}>~27% of buyers</span>
            </div>
          </div>

          {/* 4:5 side */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{
              width: FRAME_W_45,
              height: FRAME_H,
              border: `3px solid ${TEAL}`,
              borderRadius: 8,
              overflow: "hidden",
              position: "relative",
              boxShadow: `0 0 50px ${TEAL}40`,
              background: "#0a0a10",
            }}>
              <img
                src="/assets/listings/floral_vase/Floral vase art _4x5_1200x1500.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{
              fontSize: 24, fontWeight: 800, color: TEAL, letterSpacing: "0.08em",
            }}>4:5</div>
            <div style={{
              fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.3, textAlign: "center",
            }}>
              8×10, 11×14, 16×20
              <br /><span style={{ color: TEAL, opacity: 0.85 }}>~73% of buyers</span>
            </div>
          </div>
        </div>

        <div style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          marginTop: 16,
          lineHeight: 1.4,
          maxWidth: 700,
        }}>
          Smart-crop preserves the focal point. The vase stays centered in both.
        </div>
      </div>

      <SlideFooter current={2} />
    </section>
  );
}

// ── Slide 3 — SCALE (Data bomb) ─────────────────────────────────
export function EC09Slide03() {
  const sizes = [
    { size: "8×10", note: "The classic frame" },
    { size: "11×14", note: "Living-room mainstay" },
    { size: "16×20", note: "Statement piece" },
    { size: "5×7", note: "Gift / desk frame" },
  ];

  return (
    <section id="ec09-slide-03" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 50% 30%, #1A1410 0%, ${BG} 70%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "70px 50px 140px",
        gap: 22,
      }}>
        <Badge text="The number" color={AMBER} />

        <div style={{ textAlign: "center", marginTop: 4 }}>
          <div style={{
            fontSize: 240,
            fontWeight: 900,
            color: AMBER,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textShadow: `0 0 60px ${AMBER}30`,
          }}>
            73<span style={{ fontSize: 140 }}>%</span>
          </div>
          <div style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.35,
            marginTop: 10,
            maxWidth: 720,
            fontWeight: 500,
          }}>
            of Etsy print buyers buy <span style={{ color: TEAL, fontWeight: 700 }}>4:5</span> sizes.
            <br />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 22 }}>
              Most digital art is created in 2:3.
            </span>
          </div>
        </div>

        <div style={{
          width: "100%",
          maxWidth: 720,
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}>
          <div style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 4,
            textAlign: "left",
            paddingLeft: 4,
          }}>
            What 4:5 buyers actually search
          </div>
          {sizes.map((s) => (
            <div key={s.size} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 24px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10,
            }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: TEAL, letterSpacing: "-0.01em" }}>
                {s.size}
              </div>
              <div style={{ fontSize: 20, color: "rgba(255,255,255,0.55)" }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter current={3} />
    </section>
  );
}

// ── Slide 4 — FIX (App screenshot) ──────────────────────────────
export function EC09Slide04() {
  return (
    <section id="ec09-slide-04" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 50% 0%, #122421 0%, ${BG} 75%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "70px 50px 140px",
        gap: 24,
      }}>
        <Badge text="The fix" color={TEAL} />

        <div style={{
          fontSize: 56,
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          maxWidth: 760,
        }}>
          One upload.
          <br />
          <span style={{ color: TEAL }}>Every ratio.</span> Auto-cropped.
        </div>

        <div style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          lineHeight: 1.4,
          maxWidth: 680,
          marginTop: -6,
        }}>
          SnapToSize generates 5 ratio packs from your 2:3 file —
          smart-crop keeps the focal point centered in 4:5, 3:4, and 1:1.
        </div>

        <div style={{
          marginTop: 14,
          width: "92%",
          maxWidth: 720,
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: `0 25px 60px rgba(0,0,0,0.55), 0 0 0 1px ${TEAL}30`,
          background: "#0a0a10",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            background: "#15151D",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ width: 11, height: 11, borderRadius: 6, background: "#ff5f57" }} />
            <div style={{ width: 11, height: 11, borderRadius: 6, background: "#febc2e" }} />
            <div style={{ width: 11, height: 11, borderRadius: 6, background: "#28c840" }} />
            <div style={{
              marginLeft: 16, fontSize: 13, color: "rgba(255,255,255,0.45)",
              fontFamily: "monospace",
            }}>
              app.snaptosize.com
            </div>
          </div>
          <img
            src="/assets/app-screenshot-packs-ready.png"
            alt=""
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={{
          fontSize: 20,
          color: TEAL,
          fontWeight: 700,
          letterSpacing: "0.04em",
          marginTop: 4,
        }}>
          5 packs · 30+ sizes · ~4 minutes
        </div>
      </div>

      <SlideFooter current={4} />
    </section>
  );
}

// ── Slide 5 — CTA ───────────────────────────────────────────────
export function EC09Slide05() {
  return (
    <section id="ec09-slide-05" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 50% 40%, #1A1A24 0%, ${BG} 75%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px 140px",
        gap: 30,
        textAlign: "center",
      }}>
        <Badge text="Try it free" color={TEAL} />

        <div style={{
          fontSize: 64,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          maxWidth: 760,
        }}>
          Stop selling to the
          <br /><span style={{ color: RED }}>27%.</span>
        </div>

        <div style={{
          fontSize: 26,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.4,
          maxWidth: 680,
          fontWeight: 500,
        }}>
          Comment <span style={{ color: AMBER, fontWeight: 800 }}>"FREE"</span> —
          I'll DM a code for 30 days Pro.
        </div>

        {/* DM mockup */}
        <div style={{
          marginTop: 12,
          width: "84%",
          maxWidth: 600,
          background: "#15151D",
          borderRadius: 18,
          padding: "20px 22px",
          border: "1px solid rgba(255,255,255,0.06)",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Direct message
          </div>
          <div style={{
            alignSelf: "flex-end",
            background: TEAL,
            color: "#07070E",
            padding: "12px 18px",
            borderRadius: "18px 18px 4px 18px",
            fontSize: 22,
            fontWeight: 700,
            maxWidth: "70%",
          }}>
            FREE
          </div>
          <div style={{
            alignSelf: "flex-start",
            background: "#22222C",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: "18px 18px 18px 4px",
            fontSize: 18,
            lineHeight: 1.4,
            maxWidth: "82%",
          }}>
            Here's your code: <span style={{ color: AMBER, fontWeight: 800 }}>SNAP30</span> — 30 days Pro on snaptosize.com 🎯
          </div>
        </div>

        <div style={{
          fontSize: 18,
          color: "rgba(255,255,255,0.4)",
          marginTop: 8,
          letterSpacing: "0.04em",
        }}>
          50 codes only · expires 2026-05-12
        </div>
      </div>

      <SlideFooter current={5} />
    </section>
  );
}
