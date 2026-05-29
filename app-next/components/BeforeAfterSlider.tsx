'use client'

import { useRef, useState, useCallback } from 'react'

function BotanicalPrint({ showCutZones }: { showCutZones: boolean }) {
  const CUT_HEIGHT = 62 // px cropped from top/bottom (2:3→4:5 simulation at this scale)

  return (
    <div className="relative" style={{ width: 240, height: 360 }}>
      {/* Paper background */}
      <div className="absolute inset-0" style={{ background: '#f5efe6', borderRadius: 4 }} />

      {/* Outer frame */}
      <div className="absolute" style={{ inset: 8, border: '1.5px solid #c4a07a', borderRadius: 2 }} />

      {/* Inner frame */}
      <div className="absolute" style={{ inset: 14, border: '1px solid #ddd0bc', borderRadius: 1 }} />

      {/* Top decorative bar */}
      <div className="absolute flex items-center gap-1.5" style={{ top: 22, left: 22, right: 22, height: 12 }}>
        <div style={{ flex: 1, height: 1, background: '#c4a07a' }} />
        <div style={{ width: 4, height: 4, background: '#9b7040', borderRadius: '50%' }} />
        <div style={{ width: 4, height: 4, transform: 'rotate(45deg)', background: '#9b7040' }} />
        <div style={{ width: 4, height: 4, background: '#9b7040', borderRadius: '50%' }} />
        <div style={{ flex: 1, height: 1, background: '#c4a07a' }} />
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute flex items-center gap-1.5" style={{ bottom: 22, left: 22, right: 22, height: 12 }}>
        <div style={{ flex: 1, height: 1, background: '#c4a07a' }} />
        <div style={{ width: 4, height: 4, background: '#9b7040', borderRadius: '50%' }} />
        <div style={{ width: 4, height: 4, transform: 'rotate(45deg)', background: '#9b7040' }} />
        <div style={{ width: 4, height: 4, background: '#9b7040', borderRadius: '50%' }} />
        <div style={{ flex: 1, height: 1, background: '#c4a07a' }} />
      </div>

      {/* Corner ornaments */}
      {([
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ] as React.CSSProperties[]).map((pos, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 7, height: 7,
          background: '#9b7040',
          transform: 'rotate(45deg)',
          ...pos,
        }} />
      ))}

      {/* Center circle (watercolor wash) */}
      <div style={{
        position: 'absolute',
        width: 72, height: 72,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 38% 32%, #f0d4a8, #d4956a 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 1px 6px rgba(156,112,64,0.25)',
      }} />

      {/* Inner circle detail */}
      <div style={{
        position: 'absolute',
        width: 42, height: 42,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 38%, #f8e8cc, #e0a870)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
      }} />

      {/* Leaves — left */}
      <div style={{ position: 'absolute', width: 40, height: 11, background: '#7a9e6f', borderRadius: '50%', left: 38, top: '50%', transform: 'translateY(-50%) rotate(-18deg)' }} />
      <div style={{ position: 'absolute', width: 30, height: 8, background: '#8ab57a', borderRadius: '50%', left: 36, top: '40%', transform: 'translateY(-50%) rotate(-38deg)' }} />
      <div style={{ position: 'absolute', width: 30, height: 8, background: '#8ab57a', borderRadius: '50%', left: 36, top: '60%', transform: 'translateY(-50%) rotate(2deg)' }} />

      {/* Leaves — right */}
      <div style={{ position: 'absolute', width: 40, height: 11, background: '#7a9e6f', borderRadius: '50%', right: 38, top: '50%', transform: 'translateY(-50%) rotate(18deg)' }} />
      <div style={{ position: 'absolute', width: 30, height: 8, background: '#8ab57a', borderRadius: '50%', right: 36, top: '40%', transform: 'translateY(-50%) rotate(38deg)' }} />
      <div style={{ position: 'absolute', width: 30, height: 8, background: '#8ab57a', borderRadius: '50%', right: 36, top: '60%', transform: 'translateY(-50%) rotate(-2deg)' }} />

      {/* Dot accents */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <div key={angle} style={{
          position: 'absolute',
          width: 5, height: 5,
          borderRadius: '50%',
          background: '#c4956a',
          left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 46}px - 2.5px)`,
          top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 46}px - 2.5px)`,
        }} />
      ))}

      {/* Title text */}
      <div style={{
        position: 'absolute',
        bottom: 38, left: 0, right: 0,
        textAlign: 'center',
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: '0.2em',
        color: '#9b7040',
        textTransform: 'uppercase',
      }}>Botanical Study</div>

      {/* CUT ZONES — only on crop side */}
      {showCutZones && (
        <>
          {/* Top cut zone */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: CUT_HEIGHT,
            background: 'rgba(220,38,38,0.22)',
            borderBottom: '2px dashed rgba(220,38,38,0.75)',
            borderRadius: '4px 4px 0 0',
          }}>
            <div style={{
              position: 'absolute',
              bottom: -9, left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(220,38,38,0.9)',
              color: '#fff',
              fontSize: 8,
              fontWeight: 700,
              padding: '1px 5px',
              borderRadius: 2,
              whiteSpace: 'nowrap',
              letterSpacing: '0.06em',
            }}>✂ CUT</div>
          </div>

          {/* Bottom cut zone */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: CUT_HEIGHT,
            background: 'rgba(220,38,38,0.22)',
            borderTop: '2px dashed rgba(220,38,38,0.75)',
            borderRadius: '0 0 4px 4px',
          }}>
            <div style={{
              position: 'absolute',
              top: -9, left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(220,38,38,0.9)',
              color: '#fff',
              fontSize: 8,
              fontWeight: 700,
              padding: '1px 5px',
              borderRadius: 2,
              whiteSpace: 'nowrap',
              letterSpacing: '0.06em',
            }}>✂ CUT</div>
          </div>
        </>
      )}

      {/* PRESERVED indicators — only on full-canvas side */}
      {!showCutZones && (
        <>
          {[{ top: 4, left: 4 }, { top: 4, right: 4 }, { bottom: 4, left: 4 }, { bottom: 4, right: 4 }].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 14, height: 14,
              borderRadius: '50%',
              background: 'rgba(45,212,191,0.2)',
              border: '1.5px solid rgba(45,212,191,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 8, color: '#2DD4BF', fontWeight: 700,
              ...pos,
            }}>✓</div>
          ))}
        </>
      )}
    </div>
  )
}

interface BeforeAfterSliderProps {
  className?: string
}

export function BeforeAfterSlider({ className = '' }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(35)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPosition(Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100)))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => { dragging.current = true; updatePos(e.clientX) }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchStart = (e: React.TouchEvent) => { e.preventDefault(); updatePos(e.touches[0].clientX) }
  const onTouchMove = (e: React.TouchEvent) => { e.preventDefault(); updatePos(e.touches[0].clientX) }

  return (
    <div className={`rounded-xl overflow-hidden ${className}`} style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Drag hint */}
      <div className="flex items-center justify-center gap-2 py-2 text-xs" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)' }}>
        <span>←</span>
        <span>drag to compare</span>
        <span>→</span>
      </div>

      {/* Slider stage */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center select-none"
        style={{
          height: 420,
          background: '#080d0d',
          cursor: 'col-resize',
          overflow: 'hidden',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {/* RIGHT SIDE: full-canvas (shows behind left) */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #061714 0%, #081210 100%)' }}>
          <BotanicalPrint showCutZones={false} />
          {/* Right label */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{
            background: 'rgba(45,212,191,0.12)',
            border: '1px solid rgba(45,212,191,0.3)',
            color: '#2DD4BF',
          }}>
            ✓ Full-canvas resize
          </div>
        </div>

        {/* LEFT SIDE: crop-to-fit (clipped div, same width as container, offset to stay centered) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, #1a0808 0%, #120606 100%)',
            width: containerRef.current?.offsetWidth ?? '100vw',
          }}>
            <BotanicalPrint showCutZones={true} />
            {/* Left label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.3)',
              color: '#f87171',
            }}>
              ✗ Crop-to-fit
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{
            left: `calc(${position}% - 1px)`,
            width: 2,
            background: 'rgba(255,255,255,0.85)',
          }}
        />

        {/* Drag handle */}
        <div
          className="absolute pointer-events-none flex items-center justify-center rounded-full"
          style={{
            left: `${position}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 38, height: 38,
            background: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
            zIndex: 10,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 5l-5 7 5 7M15 5l5 7-5 7" />
          </svg>
        </div>
      </div>

      {/* Caption row */}
      <div className="grid grid-cols-2 text-xs" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="px-4 py-2.5 border-r" style={{ borderColor: 'rgba(255,255,255,0.06)', color: '#f87171' }}>
          <strong>Crop-to-fit</strong>
          <span className="block opacity-60 mt-0.5">Top &amp; bottom edges removed</span>
        </div>
        <div className="px-4 py-2.5 text-right" style={{ color: '#2DD4BF' }}>
          <strong>Full-canvas resize</strong>
          <span className="block opacity-60 mt-0.5">Every edge intact, composition preserved</span>
        </div>
      </div>
    </div>
  )
}
