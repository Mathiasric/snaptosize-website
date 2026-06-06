"use client";

/* ─────────────────────────────────────────────────────────────────
   EC13 — W23-I01 — 2026-06-06
   5-slide Instagram carousel (900×1125 — 4:5)
   Archetype: A — Pain/Hook (Gemini bg)
   Accent: RED/CORAL #EF4444 + TEAL #2DD4BF
   Slide 1 — HOOK  : "She bought the print. Tried to frame it. Left 1 star."
   Slide 2 — PAIN  : "The art was perfect. The proportions weren't."
   Slide 3 — TRUTH : "She didn't email you. She just left."
   Slide 4 — FIX   : App screenshot — all ratio packs covered
   Slide 5 — CTA   : "Comment FREE → 30 days Pro"
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const RED   = "#EF4444";
const TEAL  = "#2DD4BF";
const BG    = "#07070E";
const FONT  = "system-ui, -apple-system, sans-serif";

function Badge({ text, color = RED }: { text: string; color?: string }) {
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
      textTransform: "uppercase" as const,
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
            background: i === current - 1 ? RED : "rgba(255,255,255,0.18)",
          }} />
        ))}
      </div>
      <div style={{
        fontSize: 18,
        color: "rgba(255,255,255,0.35)",
        letterSpacing: "0.08em",
        fontFamily: FONT,
        textTransform: "uppercase" as const,
      }}>
        snaptosize.com
      </div>
    </div>
  );
}

// ── Slide 1 — HOOK ──────────────────────────────────────────────
export function EC13Slide01() {
  return (
    <section id="ec13-slide-01" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      backgroundImage: "url('/assets/ec13-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: FONT,
    }}>
      {/* Dark overlay — heavier at top for text, reveal bg in lower half */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.96) 0%, rgba(7,7,14,0.85) 45%, rgba(7,7,14,0.45) 72%, rgba(7,7,14,0.25) 100%)",
      }} />

      {/* Red ambient glow top-right */}
      <div style={{
        position: "absolute",
        top: -80, right: -80,
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${RED}20 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      {/* Content — centered vertically */}
      <div style={{
        position: "absolute",
        zIndex: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 64px 180px",
        gap: 28,
      }}>
        <Badge text="Etsy print sellers" />

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}>
            She bought the print.
          </div>
          <div style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}>
            Tried to frame it.
          </div>
          <div style={{
            fontSize: 72,
            fontWeight: 900,
            color: RED,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}>
            Left 1 star.
          </div>
        </div>

        <div style={{
          fontSize: 24,
          fontWeight: 400,
          color: "rgba(255,255,255,0.58)",
          lineHeight: 1.4,
          maxWidth: 620,
        }}>
          The art was perfect. The dimensions weren&apos;t. Swipe to see why it keeps happening.
        </div>
      </div>

      <SlideFooter current={1} />
    </section>
  );
}

// ── Slide 2 — THE PAIN ─────────────────────────────────────────
export function EC13Slide02() {
  return (
    <section id="ec13-slide-02" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 64px 120px",
    }}>
      {/* Red glow top-left */}
      <div style={{
        position: "absolute",
        top: -60, left: -60,
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${RED}18 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 40 }}>
        <Badge text="The mismatch" />

        <div style={{
          fontSize: 52,
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          Her frame was 4:5.<br />
          <span style={{ color: RED }}>Your file was 2:3.</span>
        </div>

        <div style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.5,
        }}>
          Same artwork. Different proportions. The print didn&apos;t fill the frame — white bars on two sides. She paid for art that didn&apos;t fit her wall.
        </div>

        {/* Visual ratio comparison */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 48,
          padding: "20px 0",
        }}>
          {/* 4:5 frame */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 216,
              height: 270,
              border: `3px solid ${TEAL}`,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `${TEAL}08`,
            }}>
              <span style={{ fontSize: 16, color: TEAL, fontWeight: 700, letterSpacing: "0.08em" }}>HER FRAME</span>
            </div>
            <span style={{ fontSize: 28, fontWeight: 900, color: TEAL }}>4:5</span>
          </div>

          <div style={{
            fontSize: 56,
            fontWeight: 900,
            color: "rgba(255,255,255,0.20)",
            paddingBottom: 36,
          }}>≠</div>

          {/* 2:3 print */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 180,
              height: 270,
              border: `3px solid ${RED}`,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `${RED}08`,
            }}>
              <span style={{ fontSize: 16, color: RED, fontWeight: 700, letterSpacing: "0.08em" }}>YOUR FILE</span>
            </div>
            <span style={{ fontSize: 28, fontWeight: 900, color: RED }}>2:3</span>
          </div>
        </div>
      </div>

      {/* Bottom teaser */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "20px 0",
        borderTop: `1px solid rgba(239,68,68,0.15)`,
      }}>
        <div style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Next</div>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>What she did next →</div>
      </div>

      <SlideFooter current={2} />
    </section>
  );
}

// ── Slide 3 — THE TRUTH ──────────────────────────────────────────
export function EC13Slide03() {
  return (
    <section id="ec13-slide-03" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 64px 120px",
    }}>
      {/* Subtle red glow bottom-right */}
      <div style={{
        position: "absolute",
        bottom: -80, right: -80,
        width: 480,
        height: 480,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${RED}14 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 40 }}>
        <Badge text="The silent exit" />

        <div style={{
          fontSize: 52,
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          She didn&apos;t email you.<br />
          She didn&apos;t ask for help.
        </div>

        <div style={{
          fontSize: 52,
          fontWeight: 900,
          color: RED,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          She just left.
        </div>

        {/* Stat blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 8 }}>
          {[
            { stat: "Most buyers", detail: "never contact the seller when something is wrong." },
            { stat: "1 bad review", detail: "costs you more than 10 good ones can fix." },
            { stat: "Standard frames", detail: "come in 12 sizes. Most Etsy listings cover 3 or fewer." },
          ].map((item) => (
            <div key={item.stat} style={{
              display: "flex",
              gap: 20,
              alignItems: "flex-start",
              padding: "44px 32px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.04)",
              border: `1px solid rgba(239,68,68,0.18)`,
            }}>
              <div style={{
                fontSize: 22,
                fontWeight: 800,
                color: RED,
                lineHeight: 1.2,
                minWidth: 140,
                flexShrink: 0,
              }}>
                {item.stat}
              </div>
              <div style={{
                fontSize: 20,
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.45,
              }}>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom teaser */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "20px 0",
        borderTop: `1px solid rgba(239,68,68,0.15)`,
      }}>
        <div style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Fix</div>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>Every ratio, one upload →</div>
      </div>

      <SlideFooter current={3} />
    </section>
  );
}

// ── Slide 4 — THE FIX ───────────────────────────────────────────
export function EC13Slide04() {
  const packs = ["2:3 Pack", "3:4 Pack", "4:5 Pack", "ISO Pack", "Extras Pack"];

  return (
    <section id="ec13-slide-04" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "64px 48px 160px",
      gap: 28,
    }}>
      {/* Teal glow center */}
      <div style={{
        position: "absolute",
        top: "38%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 560,
        height: 560,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}14 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <Badge text="The fix" color={TEAL} />

      <div style={{
        fontSize: 36,
        fontWeight: 800,
        color: "#ffffff",
        textAlign: "center",
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
      }}>
        Upload once. Every ratio covered.<br />
        <span style={{ color: TEAL }}>No frame gets left out.</span>
      </div>

      {/* App screenshot */}
      <div style={{
        position: "relative",
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        border: `2px solid ${TEAL}50`,
        boxShadow: `0 0 40px ${TEAL}18`,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}>
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/app-screenshot-packs-ready.png"
          alt="SnapToSize ratio packs"
          style={{ width: "100%", flex: 1, objectFit: "contain", objectPosition: "top", display: "block", background: "#0D0D1A" }}
        />
      </div>

      {/* Pack chips */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
        {packs.map((p) => (
          <div key={p} style={{
            padding: "8px 16px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${TEAL}40`,
            fontSize: 15,
            fontWeight: 600,
            color: TEAL,
          }}>
            {p}
          </div>
        ))}
      </div>

      <SlideFooter current={4} />
    </section>
  );
}

// ── Slide 5 — CTA ────────────────────────────────────────────────
export function EC13Slide05() {
  return (
    <section id="ec13-slide-05" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "72px 64px 100px",
      gap: 32,
      textAlign: "center",
    }}>
      {/* Red + Teal dual glow */}
      <div style={{
        position: "absolute",
        top: "25%", left: "30%",
        transform: "translate(-50%, -50%)",
        width: 480,
        height: 480,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${RED}16 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "35%", right: "-60px",
        width: 360,
        height: 360,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}12 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <Badge text="Try it free" color={TEAL} />

        <div style={{
          fontSize: 76,
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}>
          Stop leaving
        </div>
        <div style={{
          fontSize: 76,
          fontWeight: 900,
          color: RED,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}>
          frames empty.
        </div>

        <div style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.4,
          maxWidth: 580,
          marginTop: 8,
        }}>
          Comment <span style={{ color: TEAL, fontWeight: 700 }}>FREE</span> and I&apos;ll DM you 30 days of Pro — free.
        </div>

        {/* DM mockup */}
        <div style={{
          width: "100%",
          maxWidth: 520,
          borderRadius: 20,
          background: "#0D0D1A",
          border: `1.5px solid rgba(45,212,191,0.25)`,
          overflow: "hidden",
          marginTop: 8,
        }}>
          <div style={{
            padding: "14px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            fontSize: 16,
            color: "rgba(255,255,255,0.40)",
            textAlign: "left",
          }}>
            Direct Message
          </div>
          <div style={{ padding: "16px 24px 8px", display: "flex", justifyContent: "flex-end" }}>
            <div style={{
              padding: "12px 20px",
              borderRadius: "18px 18px 4px 18px",
              background: "#0084FF",
              fontSize: 19,
              fontWeight: 700,
              color: "#ffffff",
            }}>
              FREE
            </div>
          </div>
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
              Hey! Here&apos;s your code: <span style={{ color: TEAL, fontWeight: 800 }}>ETSYSELLER</span>
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
