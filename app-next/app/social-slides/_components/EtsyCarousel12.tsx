"use client";

/* ─────────────────────────────────────────────────────────────────
   EC12 — W22-I02 — 2026-05-08
   5-slide Instagram carousel (900×1125 — 4:5)
   Archetype: E — Process walkthrough
   Accent: AMBER #F59E0B
   Slide 1 — HOOK  : "45 seconds. That's how long it takes to go from 1 file to 30 print-ready sizes."
   Slide 2 — STEP  : Upload + ratio detection (Steps 1–2)
   Slide 3 — STEP  : Sizing + packaging (Steps 3–4)
   Slide 4 — PROOF : App screenshot — packs ready screen
   Slide 5 — CTA   : "Your next listing. 45 seconds away." Comment SIZES → ETSYSELLER
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const AMBER  = "#F59E0B";
const TEAL   = "#2DD4BF";
const BG     = "#07070E";
const FONT   = "system-ui, -apple-system, sans-serif";

function Badge({ text, color = AMBER }: { text: string; color?: string }) {
  return (
    <div style={{
      display: "inline-block",
      padding: "10px 22px",
      borderRadius: 9999,
      background: `${color}22`,
      border: `1.5px solid ${color}70`,
      color,
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontFamily: FONT,
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
      padding: "24px 48px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
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
        fontFamily: FONT,
        textTransform: "uppercase",
      }}>
        snaptosize.com
      </div>
    </div>
  );
}

// ── Slide 1 — HOOK ──────────────────────────────────────────────
export function EC12Slide01() {
  return (
    <section id="ec12-slide-01" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      backgroundImage: "url('/assets/ec12-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      fontFamily: FONT,
    }}>
      {/* Dark overlay — top-heavy for text legibility, photo visible in lower half */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.97) 0%, rgba(7,7,14,0.88) 40%, rgba(7,7,14,0.35) 68%, rgba(7,7,14,0.15) 100%)",
      }} />

      {/* Amber ambient glow top-left */}
      <div style={{
        position: "absolute",
        top: -60, left: -60,
        width: 460,
        height: 460,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${AMBER}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        zIndex: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 64px 160px",
        gap: 20,
      }}>
        <Badge text="How it works" />

        {/* Big stat */}
        <div style={{
          fontSize: 120,
          fontWeight: 900,
          lineHeight: 0.9,
          color: AMBER,
          letterSpacing: "-0.03em",
        }}>
          45<span style={{ fontSize: 52, fontWeight: 700, color: "rgba(245,158,11,0.7)", marginLeft: 8 }}>sec</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{
            fontSize: 36,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}>
            That&apos;s how long it takes to go from 1 file to 30 print-ready sizes.
          </div>
          <div style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(255,255,255,0.60)",
            lineHeight: 1.4,
          }}>
            Here&apos;s exactly what happens inside. Swipe →
          </div>
        </div>
      </div>

      <SlideFooter current={1} />
    </section>
  );
}

// ── Slide 2 — STEPS 1–2 ─────────────────────────────────────────
export function EC12Slide02() {
  const steps = [
    {
      num: "01",
      title: "You upload one file.",
      body: "JPG, JPEG, PNG, or WebP. Any resolution.",
    },
    {
      num: "02",
      title: "SnapToSize reads the file and starts generating.",
      body: "2:3, 3:4, 4:5, 1:1, ISO, Extras — detected automatically.",
    },
  ];

  return (
    <section id="ec12-slide-02" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
    }}>
      {/* Amber glow top-right */}
      <div style={{
        position: "absolute",
        top: -60, right: -60,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${AMBER}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 64px 100px",
        gap: 32,
      }}>
        <Badge text="Steps 1 – 2" />

        <div style={{
          fontSize: 44,
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}>
          What happens the moment you hit Upload.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {steps.map((s) => (
            <div key={s.num} style={{
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
              padding: "44px 40px",
              borderRadius: 24,
              background: "rgba(255,255,255,0.05)",
              border: `1px solid rgba(245,158,11,0.22)`,
            }}>
              <div style={{
                fontSize: 68,
                fontWeight: 900,
                color: AMBER,
                lineHeight: 1,
                minWidth: 72,
                letterSpacing: "-0.02em",
                opacity: 0.9,
              }}>
                {s.num}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </div>
                <div style={{
                  fontSize: 22,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.45,
                }}>
                  {s.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom teaser */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "20px 0",
          borderTop: "1px solid rgba(245,158,11,0.15)",
        }}>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Next</div>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>What you get 45 seconds later →</div>
        </div>
      </div>

      <SlideFooter current={2} />
    </section>
  );
}

// ── Slide 3 — STEPS 3–4 ─────────────────────────────────────────
export function EC12Slide03() {
  const steps = [
    {
      num: "03",
      title: "Every size renders at 300 DPI.",
      body: "2:3 Pack, 3:4 Pack, 4:5 Pack, ISO Pack, Extras Pack — all in one go.",
    },
    {
      num: "04",
      title: "One ZIP. Under 20 MB.",
      body: "Fits Etsy's file limit. Ready to attach to your listing.",
    },
    {
      num: "05",
      title: "Professional file naming.",
      body: "Every file named correctly. Ready for Etsy — no renaming needed.",
    },
  ];

  return (
    <section id="ec12-slide-03" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
    }}>
      {/* Teal glow bottom-left for contrast with amber */}
      <div style={{
        position: "absolute",
        bottom: -60, left: -60,
        width: 380,
        height: 380,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}14 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px 64px 100px",
        gap: 24,
      }}>
        <Badge text="Steps 3 – 5" color={TEAL} />

        <div style={{
          fontSize: 40,
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}>
          What you get 45 seconds later.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {steps.map((s) => (
            <div key={s.num} style={{
              display: "flex",
              gap: 24,
              alignItems: "flex-start",
              padding: "34px 32px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.05)",
              border: `1px solid rgba(45,212,191,0.22)`,
            }}>
              <div style={{
                fontSize: 52,
                fontWeight: 900,
                color: TEAL,
                lineHeight: 1,
                minWidth: 58,
                letterSpacing: "-0.02em",
                opacity: 0.9,
              }}>
                {s.num}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </div>
                <div style={{
                  fontSize: 19,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.4,
                }}>
                  {s.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom teaser */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "20px 0",
          borderTop: `1px solid rgba(45,212,191,0.15)`,
        }}>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Next</div>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>See it inside SnapToSize →</div>
        </div>
      </div>

      <SlideFooter current={3} />
    </section>
  );
}

// ── Slide 4 — APP SCREENSHOT ─────────────────────────────────────
export function EC12Slide04() {
  const chips = ["5 ratio packs", "30+ sizes", "300 DPI", "<20 MB ZIP"];

  return (
    <section id="ec12-slide-04" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 48px 160px",
      gap: 32,
    }}>
      {/* Amber glow behind screenshot */}
      <div style={{
        position: "absolute",
        top: "35%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 560,
        height: 560,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${AMBER}16 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <Badge text="Inside SnapToSize" />

      <div style={{
        fontSize: 30,
        fontWeight: 800,
        color: "#ffffff",
        textAlign: "center",
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
      }}>
        This is what your files look like when they&apos;re ready.
      </div>

      {/* Browser chrome mockup */}
      <div style={{
        position: "relative",
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        border: `2px solid ${AMBER}50`,
        boxShadow: `0 0 40px ${AMBER}20`,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}>
        {/* Browser bar */}
        <div style={{
          background: "#111120",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
        }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28CA41" }} />
          <div style={{
            flex: 1,
            marginLeft: 8,
            background: "#1E1E30",
            borderRadius: 6,
            padding: "4px 12px",
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
          }}>
            app.snaptosize.com
          </div>
        </div>
        {/* Screenshot */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/app-screenshot-packs-ready.png"
          alt="SnapToSize packs ready"
          style={{ width: "100%", flex: 1, objectFit: "contain", objectPosition: "top", display: "block", background: "#0D0D1A" }}
        />
      </div>

      {/* Stat chips */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        {chips.map((c) => (
          <div key={c} style={{
            padding: "8px 18px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.14)",
            fontSize: 16,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
          }}>
            {c}
          </div>
        ))}
      </div>

      <SlideFooter current={4} />
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC12Slide05() {
  return (
    <section id="ec12-slide-05" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "72px 64px 160px",
      gap: 36,
      textAlign: "center",
    }}>
      {/* Amber glow center */}
      <div style={{
        position: "absolute",
        top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${AMBER}18 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <Badge text="Try it free" />

        <div style={{
          fontSize: 80,
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}>
          Your next listing.
        </div>
        <div style={{
          fontSize: 72,
          fontWeight: 900,
          color: AMBER,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}>
          45 seconds away.
        </div>

        <div style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.4,
          maxWidth: 600,
          marginTop: 8,
        }}>
          Comment <span style={{ color: AMBER, fontWeight: 700 }}>SIZES</span> and I&apos;ll DM you 30 days of Pro — free.
        </div>

        {/* DM mockup */}
        <div style={{
          width: "100%",
          maxWidth: 520,
          borderRadius: 20,
          background: "#0D0D1A",
          border: `1.5px solid rgba(245,158,11,0.25)`,
          overflow: "hidden",
          marginTop: 8,
        }}>
          {/* DM header */}
          <div style={{
            padding: "14px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            fontSize: 16,
            color: "rgba(255,255,255,0.40)",
            textAlign: "left",
          }}>
            Direct Message
          </div>
          {/* User message */}
          <div style={{ padding: "16px 24px 8px", display: "flex", justifyContent: "flex-end" }}>
            <div style={{
              padding: "12px 20px",
              borderRadius: "18px 18px 4px 18px",
              background: "#0084FF",
              fontSize: 19,
              fontWeight: 700,
              color: "#ffffff",
            }}>
              SIZES
            </div>
          </div>
          {/* SnapToSize reply */}
          <div style={{ padding: "8px 24px 20px", display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              padding: "14px 20px",
              borderRadius: "18px 18px 18px 4px",
              background: "#1E1E30",
              fontSize: 16,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.45,
              maxWidth: 320,
            }}>
              Hey! Here&apos;s your code: <span style={{ color: AMBER, fontWeight: 800 }}>ETSYSELLER</span>
              <br />→ 30 days Pro free at snaptosize.com
              <br /><span style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>50 codes left this week</span>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter current={5} />
    </section>
  );
}
