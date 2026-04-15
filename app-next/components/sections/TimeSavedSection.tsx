import { Container } from "@/components/Container";
import { Clock, Zap } from "lucide-react";

export function TimeSavedSection() {
  return (
    <section className="py-16 border-b border-border">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Stop wasting hours resizing manually.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Without SnapToSize */}
            <div className="rounded-xl border border-white/[0.08] bg-surface/50 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10">
                  <Clock className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="font-semibold text-red-400">Without SnapToSize</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground-60">
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Resize 5–8 ratios one by one
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Export 20+ files individually
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Manually verify DPI settings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Re-upload when you miss a size
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <p className="text-2xl font-bold text-red-400">1–2 hours</p>
                <p className="text-xs text-foreground-40">per listing</p>
              </div>
            </div>

            {/* With SnapToSize */}
            <div className="rounded-xl border border-teal-500/20 bg-teal-500/[0.04] p-6 relative">
              <div className="absolute -top-3 right-4 bg-teal-500 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                40× faster
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/10">
                  <Zap className="h-5 w-5 text-teal-400" />
                </div>
                <h3 className="font-semibold text-teal-400">With SnapToSize</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground-60">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5">✓</span>
                  Upload once, all ratios generated
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5">✓</span>
                  Every file at 300 DPI automatically
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5">✓</span>
                  Clean ZIP, ready for Etsy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5">✓</span>
                  Named and organized by size
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-teal-500/10">
                <p className="text-2xl font-bold text-teal-400">&lt; 30 seconds</p>
                <p className="text-xs text-foreground-40">per listing</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
