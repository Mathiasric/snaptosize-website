/* Shared wrapper for all social media slide templates.
   Handles dimensions, dark gradient background, glow orbs, and footer. */

const DIMS = {
  pinterest: { w: 1000, h: 1500 },
  instagram: { w: 1080, h: 1350 },
} as const;

const BG_VARIANTS = {
  default: "linear-gradient(135deg, #0B0B12 0%, #110E1F 40%, #0F0D1A 100%)",
  center: "linear-gradient(180deg, #0B0B12 0%, #110E1F 50%, #0B0B12 100%)",
  split: "linear-gradient(135deg, #0B0B12 0%, #0F0D1A 100%)",
} as const;

interface SlideWrapperProps {
  id: string;
  ratio: "pinterest" | "instagram";
  bgVariant?: keyof typeof BG_VARIANTS;
  orbs?: boolean;
  children: React.ReactNode;
}

export default function SlideWrapper({
  id,
  ratio,
  bgVariant = "default",
  orbs = true,
  children,
}: SlideWrapperProps) {
  const { w, h } = DIMS[ratio];

  return (
    <section
      id={id}
      className="relative overflow-hidden flex flex-col"
      style={{
        width: w,
        height: h,
        background: BG_VARIANTS[bgVariant],
      }}
    >
      {/* Glow orbs */}
      {orbs && (
        <>
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-40 right-10 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)" }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">{children}</div>

      {/* Footer */}
      <div className="relative z-10 pb-6 text-center">
        <span className="text-sm font-mono text-white/40">snaptosize.com</span>
      </div>
    </section>
  );
}
