"use client";

/* ─────────────────────────────────────────────────────────────────
   W20-I13: EtsyCarousel10
   "5 silent reasons your Etsy print listings aren't selling."

   5-slide Instagram carousel (900×1125 — 4:5)
   Archetype: B — Educational numbered
   Accent: PURPLE + TEAL (fresh from EC09 amber)
   Slide 1 — HOOK : "5 silent reasons your Etsy prints aren't selling.
                     Most sellers don't fix #1."
   Slide 2 — #1   : Flat hero photo. No room context = scrolled past.
   Slide 3 — #2   : Keyword-stuffed title. Etsy ranks it as low-quality.
   Slide 4 — #3   : Pricing at $4.99. Buyers read "fake / low effort".
   Slide 5 — CTA  : 2 more reasons hidden. Comment SIZES → DM list + Pro.
   ───────────────────────────────────────────────────────────────── */

import React from "react";

const TEAL   = "#2DD4BF";
const PURPLE = "#A78BFA";
const RED    = "#F87171";
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
            background: i === current - 1 ? PURPLE : "rgba(255,255,255,0.18)",
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

function BigNumber({ n, color = PURPLE }: { n: number; color?: string }) {
  return (
    <div style={{
      fontSize: 220,
      fontWeight: 900,
      color,
      lineHeight: 0.85,
      letterSpacing: "-0.06em",
      textShadow: `0 0 80px ${color}40`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      #{n}
    </div>
  );
}

// ── Slide 1 — HOOK ──────────────────────────────────────────────
export function EC10Slide01() {
  return (
    <section id="ec10-slide-01" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      backgroundColor: BG,
      backgroundImage: "url('/assets/ec10-slide01-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Dark overlay for text legibility */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(7,7,14,0.55) 0%, rgba(7,7,14,0.35) 35%, rgba(7,7,14,0.82) 75%, rgba(7,7,14,0.95) 100%)",
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "60px 60px 170px",
        textAlign: "center",
        gap: 28,
      }}>
        <Badge text="Etsy print sellers — read this" color={PURPLE} />

        <div style={{
          fontSize: 86,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}>
          <span style={{ color: PURPLE }}>5 silent</span> reasons
          <br />
          your Etsy prints
          <br />
          <span style={{ color: RED }}>aren't selling.</span>
        </div>

        <div style={{
          fontSize: 30,
          fontWeight: 500,
          color: "rgba(255,255,255,0.62)",
          lineHeight: 1.35,
          maxWidth: 700,
          marginTop: 10,
        }}>
          Buyers won't tell you which one.
          <br />
          <span style={{ color: TEAL, fontWeight: 700 }}>Most sellers never fix #1.</span>
        </div>

        <div style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          marginTop: 10,
        }}>
          Swipe →
        </div>
      </div>

      <SlideFooter current={1} />
    </section>
  );
}

// ── Slide 2 — #1 Flat hero photo (real artwork mockup) ──────────
export function EC10Slide02() {
  const ART = "/assets/listings/misty_lake/Misty_Nordic.jpg";
  const FRAME_W = 300;
  const FRAME_H = 380;

  return (
    <section id="ec10-slide-02" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 30% 0%, #18121F 0%, ${BG} 70%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 50px 140px",
        gap: 14,
      }}>
        <Badge text="Reason 1 of 5" color={PURPLE} />

        <BigNumber n={1} />

        <div style={{
          fontSize: 50,
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          maxWidth: 780,
          marginTop: -10,
        }}>
          Your first photo is
          <br />
          <span style={{ color: RED }}>artwork on a white square.</span>
        </div>

        {/* Real artwork — flat vs styled */}
        <div style={{
          display: "flex",
          gap: 22,
          alignItems: "flex-start",
          justifyContent: "center",
          marginTop: 8,
        }}>
          {/* FLAT — artwork on white bg, no context */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{
              width: FRAME_W, height: FRAME_H,
              background: "#fff",
              borderRadius: 6,
              padding: 28,
              border: `2px solid ${RED}`,
              boxShadow: `0 0 30px ${RED}25`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <img src={ART} alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: RED, letterSpacing: "0.08em" }}>
              FLAT
            </div>
          </div>

          {/* STYLED — framed on textured wall with shadow */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{
              width: FRAME_W, height: FRAME_H,
              borderRadius: 6,
              border: `2px solid ${TEAL}`,
              boxShadow: `0 0 40px ${TEAL}40`,
              overflow: "hidden",
              position: "relative",
              background: "linear-gradient(170deg, #e8dcc8 0%, #c8b89c 60%, #a89878 100%)",
            }}>
              {/* Wall paint stripe / chair rail */}
              <div style={{
                position: "absolute",
                left: 0, right: 0, bottom: "30%",
                height: 3,
                background: "rgba(60,40,25,0.18)",
              }} />
              {/* Floor */}
              <div style={{
                position: "absolute",
                left: 0, right: 0, bottom: 0,
                height: "20%",
                background: "linear-gradient(180deg, #6a4a30 0%, #4a3220 100%)",
              }} />
              {/* Frame on wall */}
              <div style={{
                position: "absolute",
                top: 50, left: "50%",
                transform: "translateX(-50%)",
                width: 168, height: 210,
                background: "#fff",
                padding: 8,
                border: "10px solid #1a1a1a",
                boxShadow: "0 14px 22px rgba(0,0,0,0.35), 0 4px 8px rgba(0,0,0,0.2)",
              }}>
                <img src={ART} alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              {/* Plant left */}
              <div style={{
                position: "absolute",
                bottom: "15%", left: 18,
                width: 44, height: 80,
              }}>
                <div style={{
                  position: "absolute", bottom: 0, left: 6, right: 6,
                  height: 22,
                  background: "#3a2818",
                  borderRadius: "0 0 4px 4px",
                }} />
                <div style={{
                  position: "absolute", bottom: 18, left: 0, right: 0, top: 0,
                  background: "radial-gradient(ellipse at 50% 80%, #4a6b3e 0%, #2d4525 60%, transparent 70%)",
                }} />
              </div>
              {/* Console table edge */}
              <div style={{
                position: "absolute",
                bottom: "18%", left: 0, right: 0,
                height: 8,
                background: "#3a2818",
              }} />
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: TEAL, letterSpacing: "0.08em" }}>
              STYLED
            </div>
          </div>
        </div>

        {/* Sourced data line */}
        <div style={{
          marginTop: 8,
          padding: "12px 22px",
          background: `${TEAL}10`,
          border: `1px solid ${TEAL}35`,
          borderRadius: 10,
        }}>
          <div style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.35,
          }}>
            Lifestyle mockups → <span style={{ color: TEAL, fontWeight: 800 }}>+30–60% CTR</span>
          </div>
          <div style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            marginTop: 4,
            letterSpacing: "0.04em",
          }}>
            Source: Etsy Seller Handbook · eRank
          </div>
        </div>

        <div style={{
          fontSize: 20,
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
          lineHeight: 1.4,
          maxWidth: 700,
          marginTop: 4,
        }}>
          The first photo is the single biggest factor in clicks.
          <br />
          <span style={{ color: TEAL, fontWeight: 700 }}>Show it framed. In a room. At scale.</span>
        </div>
      </div>

      <SlideFooter current={2} />
    </section>
  );
}

// ── Slide 3 — #2 Keyword-stuffed title ──────────────────────────
export function EC10Slide03() {
  return (
    <section id="ec10-slide-03" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 70% 0%, #181020 0%, ${BG} 70%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 50px 140px",
        gap: 18,
      }}>
        <Badge text="Reason 2 of 5" color={PURPLE} />

        <BigNumber n={2} />

        <div style={{
          fontSize: 50,
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          maxWidth: 780,
          marginTop: -14,
        }}>
          Your title has
          <br />
          <span style={{ color: RED }}>13 keywords stuffed in.</span>
        </div>

        {/* Title comparison — styled like Etsy listing chrome */}
        <div style={{
          width: "100%",
          maxWidth: 780,
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}>
          {/* BAD — looks like Etsy listing card */}
          <div style={{
            padding: "0",
            background: "#1A1A24",
            border: `1.5px solid ${RED}50`,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: `0 0 30px ${RED}15`,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 18px",
              background: "rgba(248,113,113,0.10)",
              borderBottom: `1px solid ${RED}30`,
              gap: 10,
            }}>
              <div style={{ fontSize: 18 }}>✕</div>
              <div style={{ fontSize: 13, color: RED, fontWeight: 800, letterSpacing: "0.1em" }}>
                ETSY 2025: SUPPRESSED
              </div>
              <div style={{ marginLeft: "auto", fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
                etsy.com/listing
              </div>
            </div>
            <div style={{ padding: "16px 22px" }}>
              <div style={{ fontSize: 21, color: "rgba(255,255,255,0.88)", lineHeight: 1.4, fontWeight: 500 }}>
                Mountain Print Wall Art Boho Decor Modern Mountain Landscape Living Room Printable Digital Download
              </div>
              <div style={{
                marginTop: 8, fontSize: 13, color: RED, fontWeight: 600,
                fontFamily: "monospace",
              }}>
                "Mountain" ×2 · 13 keywords · 14 words
              </div>
            </div>
          </div>

          {/* GOOD */}
          <div style={{
            padding: "0",
            background: "#101822",
            border: `1.5px solid ${TEAL}60`,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: `0 0 30px ${TEAL}20`,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 18px",
              background: "rgba(45,212,191,0.10)",
              borderBottom: `1px solid ${TEAL}30`,
              gap: 10,
            }}>
              <div style={{ fontSize: 18, color: TEAL }}>✓</div>
              <div style={{ fontSize: 13, color: TEAL, fontWeight: 800, letterSpacing: "0.1em" }}>
                ETSY 2025: RANKED
              </div>
              <div style={{ marginLeft: "auto", fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
                etsy.com/listing
              </div>
            </div>
            <div style={{ padding: "16px 22px" }}>
              <div style={{ fontSize: 23, color: "#fff", lineHeight: 1.4, fontWeight: 600 }}>
                Misty Mountain Print, Boho Living Room Wall Art — Instant Download
              </div>
              <div style={{
                marginTop: 8, fontSize: 13, color: TEAL, fontWeight: 600,
                fontFamily: "monospace",
              }}>
                Lead noun · 9 words · natural phrasing
              </div>
            </div>
          </div>
        </div>

        <div style={{
          fontSize: 20,
          color: "rgba(255,255,255,0.62)",
          textAlign: "center",
          marginTop: 4,
          lineHeight: 1.4,
          maxWidth: 740,
        }}>
          Etsy's 2025 update penalizes repeated keywords with
          <br /><span style={{ color: RED, fontWeight: 700 }}>suppressed visibility</span>. <span style={{ color: TEAL, fontWeight: 700 }}>Lead with the noun. Under 15 words.</span>
        </div>

        <div style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.04em",
          textAlign: "center",
        }}>
          Source: Etsy Seller Handbook 2025 · eRank
        </div>
      </div>

      <SlideFooter current={3} />
    </section>
  );
}

// ── Slide 4 — #3 Pricing too low ────────────────────────────────
export function EC10Slide04() {
  return (
    <section id="ec10-slide-04" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 50% 0%, #1A1020 0%, ${BG} 75%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 50px 140px",
        gap: 18,
      }}>
        <Badge text="Reason 3 of 5" color={PURPLE} />

        <BigNumber n={3} />

        <div style={{
          fontSize: 50,
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          maxWidth: 780,
          marginTop: -14,
        }}>
          You priced your print at
          <br />
          <span style={{ color: RED }}>$3.99.</span>
        </div>

        {/* Real category pricing data — Alura / Etsy Jan 2026 */}
        <div style={{
          width: "100%",
          maxWidth: 720,
          marginTop: 14,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}>
          <div style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 700,
            paddingLeft: 4,
          }}>
            Top-selling Etsy print prices · Jan 2026
          </div>

          {[
            { cat: "Minimalist quote",  range: "$5–18",  scale: 0.45, color: TEAL },
            { cat: "Botanical / nature", range: "$8–25", scale: 0.62, color: TEAL },
            { cat: "Abstract art",      range: "$10–35", scale: 0.85, color: TEAL },
            { cat: "Personalized",      range: "$15–40", scale: 1.00, color: TEAL },
          ].map((row) => (
            <div key={row.cat} style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 20px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10,
              gap: 14,
            }}>
              <div style={{
                fontSize: 19,
                fontWeight: 700,
                color: "#fff",
                width: 220,
              }}>
                {row.cat}
              </div>
              {/* bar */}
              <div style={{
                flex: 1,
                height: 14,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 7,
                overflow: "hidden",
                position: "relative",
              }}>
                <div style={{
                  width: `${row.scale * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${TEAL}80 0%, ${TEAL} 100%)`,
                  boxShadow: `0 0 12px ${TEAL}50`,
                }} />
              </div>
              <div style={{
                fontSize: 22,
                fontWeight: 900,
                color: row.color,
                width: 110,
                textAlign: "right",
                letterSpacing: "-0.01em",
              }}>
                {row.range}
              </div>
            </div>
          ))}
        </div>

        {/* Below-floor warning */}
        <div style={{
          width: "100%",
          maxWidth: 720,
          padding: "14px 20px",
          background: `${RED}12`,
          border: `1px solid ${RED}40`,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: 4,
        }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: RED }}>↓</div>
          <div style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
            <span style={{ color: RED, fontWeight: 800 }}>Under $5</span> attracts low-value buyers
            and signals "low quality" to Etsy's algorithm.
          </div>
        </div>

        <div style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.04em",
          textAlign: "center",
        }}>
          Sources: Alura top-selling Etsy prints · Insight Agent · Etsy Seller Handbook
        </div>
      </div>

      <SlideFooter current={4} />
    </section>
  );
}

// ── Slide 5 — CTA (curiosity gap + comment driver) ──────────────
export function EC10Slide05() {
  return (
    <section id="ec10-slide-05" style={{
      width: 900,
      height: 1125,
      position: "relative",
      overflow: "hidden",
      background: `radial-gradient(circle at 50% 35%, #1F1530 0%, ${BG} 75%)`,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "70px 60px 140px",
        gap: 26,
        textAlign: "center",
      }}>
        <Badge text="2 reasons hidden" color={PURPLE} />

        <div style={{
          fontSize: 64,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          maxWidth: 780,
        }}>
          <span style={{ color: PURPLE }}>#4 + #5</span>
          <br />
          cost sellers the
          <br />
          <span style={{ color: RED }}>most money.</span>
        </div>

        <div style={{
          fontSize: 26,
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.4,
          maxWidth: 720,
          fontWeight: 500,
        }}>
          Comment <span style={{ color: TEAL, fontWeight: 800 }}>"SIZES"</span> below.
          <br />
          I'll DM the full list — plus a code for
          <br />
          <span style={{ color: TEAL, fontWeight: 800 }}>30 days SnapToSize Pro free.</span>
        </div>

        {/* DM mockup */}
        <div style={{
          marginTop: 6,
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
            SIZES
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
            Reasons 4 + 5 ↓ Plus code <span style={{ color: PURPLE, fontWeight: 800 }}>ETSYSELLER</span> — 30 days Pro on snaptosize.com 🎯
          </div>
        </div>

        <div style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.35)",
          marginTop: 4,
          fontStyle: "italic",
        }}>
          Save this post · Follow for weekly Etsy print tips
        </div>
      </div>

      <SlideFooter current={5} />
    </section>
  );
}
