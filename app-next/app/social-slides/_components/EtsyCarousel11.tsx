"use client";

/* ─────────────────────────────────────────────────────────────────
   W21-I01: EtsyCarousel11
   "Same artwork. Two listings. The difference is one setting."

   5-slide Instagram carousel (900×1125 — 4:5)
   Archetype: C — Before/After reveal
   Accent: ORANGE #FB923C (shifts from EC10's PURPLE/TEAL)
   Slide 1 — HOOK  : "Same artwork. Two listings. The difference is one setting."
   Slide 2 — Before: Listing A — 2:3 only. Misses 8×10, A4, 5×7, 11×14.
   Slide 3 — After : Listing B — 5 ratio packs. Every search covered.
   Slide 4 — HOW   : App screenshot. 1 upload → 5 packs → 30+ sizes.
   Slide 5 — CTA   : "Be Listing B." Comment SIZES → DM ETSYSELLER.
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const ORANGE = "#FB923C";
const TEAL   = "#2DD4BF";
const RED    = "#F87171";
const BG     = "#07070E";
const FONT   = "system-ui, -apple-system, sans-serif";

function Badge({ text, color = ORANGE }: { text: string; color?: string }) {
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
            background: i === current - 1 ? ORANGE : "rgba(255,255,255,0.18)",
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
export function EC11Slide01() {
  return (
    <section id="ec11-slide-01" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      backgroundImage: "url('/assets/ec11-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      fontFamily: FONT,
    }}>
      {/* Dark overlay — bottom-heavy for text legibility */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.35) 0%, rgba(7,7,14,0.30) 30%, rgba(7,7,14,0.80) 62%, rgba(7,7,14,0.97) 100%)",
      }} />

      {/* Orange ambient glow bottom-left */}
      <div style={{
        position: "absolute",
        bottom: -80, left: -60,
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${ORANGE}22 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "60px 60px 160px",
        textAlign: "center",
        gap: 24,
      }}>
        <Badge text="Etsy print sellers — read this" color={ORANGE} />

        <div style={{
          fontSize: 84,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}>
          Same artwork.
          <br />
          <span style={{ color: ORANGE }}>Two listings.</span>
          <br />
          The difference is
          <br />
          one setting.
        </div>

        <div style={{
          fontSize: 30,
          fontWeight: 500,
          color: "rgba(255,255,255,0.60)",
          lineHeight: 1.4,
          maxWidth: 680,
          marginTop: 8,
        }}>
          One shows up in 4 size searches.
          <br />
          <span style={{ color: TEAL, fontWeight: 700 }}>The other shows up in 30+.</span>
        </div>

        <div style={{
          fontSize: 21,
          color: "rgba(255,255,255,0.38)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          marginTop: 6,
        }}>
          Swipe →
        </div>
      </div>

      <SlideFooter current={1} />
    </section>
  );
}

// ── Slide 2 — Listing A (the problem) ───────────────────────────
export function EC11Slide02() {
  const searches = [
    { term: '"8×10 print"',  note: "4:5 ratio — not in your listing" },
    { term: '"A4 print"',    note: "ISO ratio — not in your listing" },
    { term: '"5×7 print"',   note: "Extras pack — not in your listing" },
    { term: '"11×14 print"', note: "4:5 ratio — not in your listing" },
  ];

  return (
    <section id="ec11-slide-02" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
    }}>
      {/* Subtle red ambient */}
      <div style={{
        position: "absolute",
        top: -100, right: -80,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${RED}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "72px 64px 160px",
        gap: 36,
      }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            padding: "10px 24px",
            borderRadius: 9999,
            background: `${RED}22`,
            border: `1.5px solid ${RED}70`,
            color: RED,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}>
            Listing A
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>
            2:3 ratio only
          </div>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}>
          Your buyer searches
          <br />
          for these sizes.
        </div>

        {/* Search miss cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {searches.map(({ term, note }) => (
            <div key={term} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "22px 28px",
              borderRadius: 16,
              background: `${RED}0E`,
              border: `1.5px solid ${RED}35`,
            }}>
              <div style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "monospace",
              }}>
                {term}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  fontSize: 22,
                  color: "rgba(255,255,255,0.38)",
                  fontStyle: "italic",
                  textAlign: "right",
                  maxWidth: 260,
                  lineHeight: 1.3,
                }}>
                  {note}
                </div>
                <div style={{
                  fontSize: 36,
                  color: RED,
                  fontWeight: 900,
                  lineHeight: 1,
                }}>
                  ✗
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div style={{
          marginTop: "auto",
          padding: "24px 32px",
          borderRadius: 16,
          background: `${RED}15`,
          border: `1px solid ${RED}40`,
          fontSize: 28,
          fontWeight: 600,
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.4,
          textAlign: "center",
        }}>
          These buyers don't see your listing.
          <br />
          <span style={{ color: RED, fontWeight: 700 }}>They find someone else.</span>
        </div>
      </div>

      <SlideFooter current={2} />
    </section>
  );
}

// ── Slide 3 — Listing B (the fix) ───────────────────────────────
export function EC11Slide03() {
  const searches = [
    { term: '"8×10 print"',  pack: "4:5 Pack" },
    { term: '"A4 print"',    pack: "ISO Pack" },
    { term: '"5×7 print"',   pack: "Extras Pack" },
    { term: '"11×14 print"', pack: "4:5 Pack" },
  ];

  return (
    <section id="ec11-slide-03" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
    }}>
      {/* Teal ambient glow */}
      <div style={{
        position: "absolute",
        top: -80, right: -60,
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "72px 64px 160px",
        gap: 36,
      }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            padding: "10px 24px",
            borderRadius: 9999,
            background: `${ORANGE}22`,
            border: `1.5px solid ${ORANGE}70`,
            color: ORANGE,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}>
            Listing B
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>
            5 ratio packs
          </div>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}>
          Same searches.
          <br />
          <span style={{ color: TEAL }}>Every one covered.</span>
        </div>

        {/* Search hit cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {searches.map(({ term, pack }) => (
            <div key={term} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "22px 28px",
              borderRadius: 16,
              background: `${TEAL}0D`,
              border: `1.5px solid ${TEAL}38`,
            }}>
              <div style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "monospace",
              }}>
                {term}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  fontSize: 19,
                  color: TEAL,
                  fontWeight: 600,
                  opacity: 0.8,
                }}>
                  {pack}
                </div>
                <div style={{
                  fontSize: 36,
                  color: TEAL,
                  fontWeight: 900,
                  lineHeight: 1,
                }}>
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div style={{
          marginTop: "auto",
          padding: "24px 32px",
          borderRadius: 16,
          background: `${ORANGE}15`,
          border: `1px solid ${ORANGE}40`,
          fontSize: 28,
          fontWeight: 600,
          color: "rgba(255,255,255,0.80)",
          lineHeight: 1.4,
          textAlign: "center",
        }}>
          1 upload.{" "}
          <span style={{ color: ORANGE, fontWeight: 700 }}>5 packs.</span>
          {" "}30+ sizes.
          <br />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 22, fontWeight: 400 }}>
            Portrait & landscape — all at 300 DPI.
          </span>
        </div>
      </div>

      <SlideFooter current={3} />
    </section>
  );
}

// ── Slide 4 — How it works (app screenshot) ─────────────────────
export function EC11Slide04() {
  return (
    <section id="ec11-slide-04" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "72px 56px 160px",
      gap: 32,
    }}>
      {/* Heading */}
      <div style={{ textAlign: "center", width: "100%" }}>
        <div style={{
          fontSize: 48,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          This is what{" "}
          <span style={{ color: ORANGE }}>Listing B</span>
          <br />
          looks like inside.
        </div>
        <div style={{
          fontSize: 26,
          color: "rgba(255,255,255,0.50)",
          fontWeight: 400,
          lineHeight: 1.4,
        }}>
          1 upload → 5 ratio packs → 30+ sizes · ~45 seconds
        </div>
      </div>

      {/* Browser chrome mockup */}
      <div style={{
        width: "100%",
        flex: 1,
        borderRadius: 16,
        overflow: "hidden",
        border: `1.5px solid ${ORANGE}40`,
        boxShadow: `0 0 60px ${ORANGE}22`,
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Chrome bar */}
        <div style={{
          height: 44,
          background: "#1A1A2E",
          display: "flex",
          alignItems: "center",
          padding: "0 18px",
          gap: 8,
          flexShrink: 0,
        }}>
          {/* Traffic lights */}
          {["#FF5F57", "#FFBD2E", "#28CA41"].map((c, i) => (
            <div key={i} style={{ width: 13, height: 13, borderRadius: "50%", background: c }} />
          ))}
          {/* URL bar */}
          <div style={{
            flex: 1,
            marginLeft: 16,
            background: "#0D0D1A",
            borderRadius: 6,
            padding: "6px 14px",
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            fontFamily: "monospace",
          }}>
            app.snaptosize.com
          </div>
        </div>

        {/* Screenshot */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/app-screenshot-packs-ready.png"
          alt="SnapToSize — packs ready for download"
          style={{ width: "100%", flex: 1, objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Stat chips row */}
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        {["5 ratio packs", "30+ sizes", "300 DPI", "< 20 MB ZIP"].map(chip => (
          <div key={chip} style={{
            padding: "10px 20px",
            borderRadius: 9999,
            background: `${ORANGE}18`,
            border: `1px solid ${ORANGE}50`,
            color: ORANGE,
            fontSize: 20,
            fontWeight: 700,
          }}>
            {chip}
          </div>
        ))}
      </div>

      <SlideFooter current={4} />
    </section>
  );
}

// ── Slide 5 — CTA ───────────────────────────────────────────────
export function EC11Slide05() {
  return (
    <section id="ec11-slide-05" style={{
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
      {/* Orange glow center */}
      <div style={{
        position: "absolute",
        top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${ORANGE}18 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
        {/* Main CTA headline */}
        <div>
          <div style={{
            fontSize: 92,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}>
            Be{" "}
            <span style={{
              color: ORANGE,
              textShadow: `0 0 60px ${ORANGE}60`,
            }}>
              Listing B.
            </span>
          </div>
          <div style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.52)",
            fontWeight: 400,
            marginTop: 16,
            lineHeight: 1.4,
          }}>
            Try SnapToSize free for 30 days.
          </div>
        </div>

        {/* DM mockup */}
        <div style={{
          width: "100%",
          maxWidth: 560,
          borderRadius: 20,
          overflow: "hidden",
          border: `1.5px solid rgba(255,255,255,0.10)`,
          background: "#111120",
        }}>
          {/* Chat header */}
          <div style={{
            padding: "16px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            fontSize: 18,
            color: "rgba(255,255,255,0.50)",
            textAlign: "left",
          }}>
            Instagram DM · <span style={{ color: ORANGE }}>@snaptosize</span>
          </div>

          {/* Messages */}
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
            {/* User message */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{
                padding: "14px 22px",
                borderRadius: "18px 18px 4px 18px",
                background: "#0084FF",
                color: "#fff",
                fontSize: 24,
                fontWeight: 700,
              }}>
                SIZES
              </div>
            </div>

            {/* Bot reply */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{
                padding: "18px 24px",
                borderRadius: "4px 18px 18px 18px",
                background: "#1E1E30",
                border: `1px solid ${ORANGE}40`,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}>
                <div style={{ fontSize: 22, color: "rgba(255,255,255,0.80)", lineHeight: 1.4 }}>
                  Use code <span style={{ color: ORANGE, fontWeight: 800, fontSize: 26 }}>ETSYSELLER</span> at snaptosize.com
                </div>
                <div style={{ fontSize: 18, color: "rgba(255,255,255,0.40)" }}>
                  30 days Pro · 100% free · 50 codes left
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instruction */}
        <div style={{
          fontSize: 26,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.4,
        }}>
          Comment{" "}
          <span style={{
            color: "#fff",
            fontWeight: 700,
            background: `${ORANGE}25`,
            padding: "2px 12px",
            borderRadius: 8,
          }}>
            SIZES
          </span>
          {" "}below ↓
        </div>

        {/* What's included strip */}
        <div style={{
          width: "100%",
          padding: "28px 32px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 4,
        }}>
          <div style={{ fontSize: 19, color: "rgba(255,255,255,0.38)", letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 700 }}>
            30 days Pro includes
          </div>
          {[
            { icon: "✓", text: "Unlimited uploads — every ratio pack" },
            { icon: "✓", text: "30+ sizes per export · 300 DPI · ZIP ready" },
            { icon: "✓", text: "No watermarks · No Etsy size limit issues" },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ color: TEAL, fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{icon}</span>
              <span style={{ fontSize: 23, color: "rgba(255,255,255,0.65)", fontWeight: 400, textAlign: "left" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter current={5} />
    </section>
  );
}
