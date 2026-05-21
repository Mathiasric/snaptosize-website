"use client";

/* ─────────────────────────────────────────────────────────────────
   W20-I08: EtsyCarousel08
   "She listed '8×10'. They searched '20×25 cm'. Her listing never showed up."

   5-slide Instagram carousel (1080×1350 each)
   Archetype: A — Pain/Hook (invisible listing / international buyers)
   Accent: TEAL + PURPLE
   Slide 1 — HOOK  : "She listed '8×10'. They searched '20×25 cm'. Her listing never showed up."
   Slide 2 — SCALE : 1 in 3 Etsy print buyers is outside the US — they search in cm
   Slide 3 — DATA  : The metric searches buyers actually type
   Slide 4 — FIX   : SnapToSize generates inch + metric, every size covered
   Slide 5 — CTA   : Comment "FREE" → 30 days Pro
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const TEAL   = "#2DD4BF";
const PURPLE = "#A78BFA";
const BG     = "#07070E";

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
            background: i === current - 1 ? TEAL : "rgba(255,255,255,0.18)",
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
export function EC08Slide01() {
  return (
    <section id="ec08-slide-01" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundImage: "url('/assets/ec08-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.30) 0%, rgba(7,7,14,0.70) 45%, rgba(7,7,14,0.92) 100%)",
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
        gap: 32,
      }}>
        <Badge text="Invisible on Etsy" color={PURPLE} />

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{
            fontSize: 82,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}>
            She listed{" "}
            <span style={{ color: TEAL }}>'8×10'.</span>
          </div>
          <div style={{
            fontSize: 54,
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}>
            They searched{" "}
            <span style={{ color: PURPLE }}>'20×25 cm'.</span>
          </div>
          <div style={{
            fontSize: 36,
            fontWeight: 500,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.3,
            marginTop: 10,
          }}>
            Her listing never showed up.
          </div>
        </div>
      </div>

      <SlideFooter current={1} />
    </section>
  );
}

// ── Slide 2 — SCALE ─────────────────────────────────────────────
export function EC08Slide02() {
  return (
    <section id="ec08-slide-02" style={{
      width: 900,
      height: 1125,
      position: "relative",
      background: BG,
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 320,
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${PURPLE}18 0%, transparent 100%)`,
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
        <Badge text="Where the sales go" color={PURPLE} />

        <div style={{
          fontSize: 140,
          fontWeight: 900,
          color: PURPLE,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}>
          1 in 3
        </div>

        <div style={{
          fontSize: 40,
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          maxWidth: 680,
        }}>
          Etsy print buyers is outside the US.
        </div>

        <div style={{
          fontSize: 30,
          fontWeight: 400,
          color: "rgba(255,255,255,0.50)",
          lineHeight: 1.6,
          maxWidth: 640,
        }}>
          They search in centimeters.<br />
          Most Etsy listings only have inches.<br />
          Your shop is invisible to them.
        </div>
      </div>

      <SlideFooter current={2} />
    </section>
  );
}

// ── Slide 3 — DATA ───────────────────────────────────────────────
export function EC08Slide03() {
  const rows = [
    { inch: "8×10",  cm: "20×25 cm",    flag: "🇩🇪 🇫🇷 🇬🇧" },
    { inch: "5×7",   cm: "13×18 cm",    flag: "🇳🇱 🇸🇪 🇦🇺" },
    { inch: "11×14", cm: "28×35 cm",    flag: "🇧🇪 🇦🇹 🇨🇭" },
    { inch: "A4",    cm: "21×29.7 cm",  flag: "🌍 Global" },
    { inch: "4×6",   cm: "10×15 cm",    flag: "🇯🇵 🇰🇷 🇧🇷" },
  ];

  return (
    <section id="ec08-slide-03" style={{
      width: 900,
      height: 1125,
      position: "relative",
      background: BG,
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 250,
        background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${TEAL}10 0%, transparent 100%)`,
      }} />

      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 60px 140px",
        gap: 24,
      }}>
        <div style={{ textAlign: "center" }}>
          <Badge text="What buyers search" color={TEAL} />
        </div>

        <div style={{
          fontSize: 36,
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}>
          Your size in inches.{" "}
          <span style={{ color: PURPLE }}>Their search in cm.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 26px",
              gap: 16,
            }}>
              <div style={{
                width: 130,
                fontSize: 28,
                fontWeight: 800,
                color: TEAL,
                letterSpacing: "-0.01em",
                flexShrink: 0,
              }}>
                {r.inch}
              </div>
              <div style={{ fontSize: 18, color: "rgba(255,255,255,0.25)", flexShrink: 0 }}>→</div>
              <div style={{ flex: 1, fontSize: 26, fontWeight: 600, color: "#fff" }}>
                {r.cm}
              </div>
              <div style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", flexShrink: 0 }}>
                {r.flag}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter current={3} />
    </section>
  );
}

// ── Slide 4 — FILE NAMING ────────────────────────────────────────
export function EC08Slide04() {
  const files = [
    { name: "poster", inch: "8x10in", cm: "20x25cm", px: "2400x3000px" },
    { name: "poster", inch: "5x7in",  cm: "13x18cm", px: "1500x2100px" },
    { name: "poster", inch: "a4",     cm: "21x30cm", px: "2480x3508px" },
    { name: "poster", inch: "11x14in",cm: "28x35cm", px: "3300x4200px" },
  ];

  return (
    <section id="ec08-slide-04" style={{
      width: 900,
      height: 1125,
      position: "relative",
      background: BG,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 300,
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${TEAL}12 0%, transparent 100%)`,
      }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "60px 60px 0", zIndex: 1 }}>
        <Badge text="What the files look like" color={TEAL} />

        <div style={{ marginTop: 24, fontSize: 48, fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.02em" }}>
          Both units.<br />
          <span style={{ color: TEAL }}>In every filename.</span>
        </div>

        <div style={{
          marginTop: 14,
          fontSize: 24,
          color: "rgba(255,255,255,0.40)",
          lineHeight: 1.4,
        }}>
          Your buyer finds their size — however they search.
        </div>

        {/* File list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
          {files.map((f, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12,
              padding: "16px 22px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}>
              {/* file icon */}
              <div style={{
                width: 38, height: 44,
                flexShrink: 0,
                background: "rgba(45,212,191,0.10)",
                border: `1px solid ${TEAL}30`,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}>
                🖼
              </div>
              {/* filename */}
              <div style={{ fontFamily: "monospace", fontSize: 20, lineHeight: 1.5, overflow: "hidden" }}>
                <span style={{ color: "rgba(255,255,255,0.35)" }}>{f.name}_</span>
                <span style={{ color: TEAL, fontWeight: 700 }}>{f.inch}</span>
                <span style={{ color: "rgba(255,255,255,0.35)" }}>_</span>
                <span style={{ color: PURPLE, fontWeight: 700 }}>{f.cm}</span>
                <span style={{ color: "rgba(255,255,255,0.25)" }}>_{f.px}.jpg</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 20,
          fontSize: 22,
          color: "rgba(255,255,255,0.30)",
          lineHeight: 1.5,
          fontStyle: "italic",
        }}>
          Teal = inches · Purple = centimeters · always both
        </div>

        {/* App screenshot for visual proof */}
        <div style={{
          marginTop: 24,
          borderRadius: 12,
          overflow: "hidden",
          border: `1px solid ${TEAL}18`,
          boxShadow: `0 0 32px rgba(45,212,191,0.08)`,
          flexShrink: 0,
        }}>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            padding: "8px 14px",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{ display: "flex", gap: 5 }}>
              {["#F87171", "#F59E0B", "#2DD4BF"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.6 }} />
              ))}
            </div>
            <div style={{
              marginLeft: 8,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 4,
              padding: "2px 12px",
              fontSize: 16,
              color: "rgba(255,255,255,0.25)",
              flex: 1,
            }}>
              app.snaptosize.com
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/app-screenshot-packs-ready.png"
            alt="SnapToSize — packs ready with ISO A-Series and US ratios"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>

      <SlideFooter current={4} />
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC08Slide05() {
  return (
    <section id="ec08-slide-05" style={{
      width: 900,
      height: 1125,
      position: "relative",
      background: BG,
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "absolute",
        top: "38%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 620, height: 620,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}1A 0%, transparent 70%)`,
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
        <Badge text="Try it free" color={TEAL} />

        <div style={{
          fontSize: 84,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}>
          30 days<br />
          <span style={{ color: TEAL }}>free Pro.</span>
        </div>

        <div style={{
          fontSize: 32,
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.6,
          maxWidth: 600,
        }}>
          Reach buyers in Germany, France,<br />
          Australia, Japan — everywhere<br />
          they search in centimeters.
        </div>

        <div style={{
          marginTop: 16,
          padding: "22px 52px",
          borderRadius: 9999,
          background: `linear-gradient(135deg, ${TEAL} 0%, ${PURPLE} 100%)`,
          fontSize: 30,
          fontWeight: 800,
          color: "#07070E",
          letterSpacing: "-0.01em",
        }}>
          Comment "FREE" below
        </div>
      </div>

      <SlideFooter current={5} />
    </section>
  );
}
