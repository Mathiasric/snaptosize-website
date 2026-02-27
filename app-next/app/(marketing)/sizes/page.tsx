import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Etsy Print Sizes & Ratio Guide",
  description:
    "Complete reference for Etsy print sizes organized by ratio: 2:3, 3:4, 4:5, 5:7, and ISO A-series. Includes pixel dimensions at 300 DPI.",
};

export default function SizesPage() {
  return (
    <>
      <section className="pt-16 pb-8 md:pt-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Etsy Print Sizes & Ratios
            </h1>
            <p className="text-lg text-foreground-60 mb-8">
              Complete reference for standard print sizes organized by aspect
              ratio. All dimensions shown at 300 DPI.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="max-w-4xl space-y-12">
            {/* Understanding Ratios */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Understanding Print Ratios
              </h2>
              <Card>
                <p className="text-sm text-foreground-60 mb-4">
                  Print ratios determine the proportional relationship between
                  width and height. For example:
                </p>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li>
                    <strong>2:3 ratio</strong> — 4×6, 8×12, 12×18 all share the
                    same proportions
                  </li>
                  <li>
                    <strong>3:4 ratio</strong> — 6×8, 9×12, 12×16 all share the
                    same proportions
                  </li>
                  <li>
                    <strong>Square (1:1)</strong> — 8×8, 12×12 are perfect
                    squares
                  </li>
                </ul>
                <p className="text-sm text-foreground-60 mt-4">
                  Using the correct ratio prevents distortion when resizing
                  artwork.
                </p>
              </Card>
            </div>

            {/* 2:3 Ratio */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                2:3 Ratio (Most Common)
              </h2>
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-mono">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-2 pr-4">Size (inches)</th>
                        <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                        <th className="pb-2">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-60">
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">4 × 6</td>
                        <td className="py-2 pr-4">1200 × 1800</td>
                        <td className="py-2">Small prints, cards</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">6 × 9</td>
                        <td className="py-2 pr-4">1800 × 2700</td>
                        <td className="py-2">Medium print</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">8 × 12</td>
                        <td className="py-2 pr-4">2400 × 3600</td>
                        <td className="py-2">Medium prints</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">10 × 15</td>
                        <td className="py-2 pr-4">3000 × 4500</td>
                        <td className="py-2">Standard poster</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">12 × 18</td>
                        <td className="py-2 pr-4">3600 × 5400</td>
                        <td className="py-2">Large poster</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">16 × 24</td>
                        <td className="py-2 pr-4">4800 × 7200</td>
                        <td className="py-2">Statement piece</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">20 × 30</td>
                        <td className="py-2 pr-4">6000 × 9000</td>
                        <td className="py-2">Extra large</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">24 × 36</td>
                        <td className="py-2 pr-4">7200 × 10800</td>
                        <td className="py-2">Maximum size</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* 3:4 Ratio */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                3:4 Ratio (Classic Photo)
              </h2>
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-mono">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-2 pr-4">Size (inches)</th>
                        <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                        <th className="pb-2">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-60">
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">6 × 8</td>
                        <td className="py-2 pr-4">1800 × 2400</td>
                        <td className="py-2">Small framed print</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">9 × 12</td>
                        <td className="py-2 pr-4">2700 × 3600</td>
                        <td className="py-2">Medium print</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">12 × 16</td>
                        <td className="py-2 pr-4">3600 × 4800</td>
                        <td className="py-2">Standard poster</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">15 × 20</td>
                        <td className="py-2 pr-4">4500 × 6000</td>
                        <td className="py-2">Large poster</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">18 × 24</td>
                        <td className="py-2 pr-4">5400 × 7200</td>
                        <td className="py-2">Gallery size</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">24 × 32</td>
                        <td className="py-2 pr-4">7200 × 9600</td>
                        <td className="py-2">Maximum size</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* 4:5 Ratio */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                4:5 Ratio (Traditional Art)
              </h2>
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-mono">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-2 pr-4">Size (inches)</th>
                        <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                        <th className="pb-2">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-60">
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">8 × 10</td>
                        <td className="py-2 pr-4">2400 × 3000</td>
                        <td className="py-2">Classic frame size</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">12 × 15</td>
                        <td className="py-2 pr-4">3600 × 4500</td>
                        <td className="py-2">Medium print</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">16 × 20</td>
                        <td className="py-2 pr-4">4800 × 6000</td>
                        <td className="py-2">Popular poster size</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">20 × 25</td>
                        <td className="py-2 pr-4">6000 × 7500</td>
                        <td className="py-2">Large format</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">24 × 30</td>
                        <td className="py-2 pr-4">7200 × 9000</td>
                        <td className="py-2">Maximum size</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* ISO A-Series */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ISO A-Series (International Standard)
              </h2>
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-mono">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-2 pr-4">Size</th>
                        <th className="pb-2 pr-4">Dimensions (mm)</th>
                        <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                        <th className="pb-2">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-60">
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">A5</td>
                        <td className="py-2 pr-4">148 × 210</td>
                        <td className="py-2 pr-4">1748 × 2480</td>
                        <td className="py-2">Small prints</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">A4</td>
                        <td className="py-2 pr-4">210 × 297</td>
                        <td className="py-2 pr-4">2480 × 3508</td>
                        <td className="py-2">Standard document</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">A3</td>
                        <td className="py-2 pr-4">297 × 420</td>
                        <td className="py-2 pr-4">3508 × 4961</td>
                        <td className="py-2">Medium poster</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">A2</td>
                        <td className="py-2 pr-4">420 × 594</td>
                        <td className="py-2 pr-4">4961 × 7016</td>
                        <td className="py-2">Large poster</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">A1</td>
                        <td className="py-2 pr-4">594 × 841</td>
                        <td className="py-2 pr-4">7016 × 9933</td>
                        <td className="py-2">Extra large</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Common Extras */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Common Extras</h2>
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-mono">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-2 pr-4">Size (inches)</th>
                        <th className="pb-2 pr-4">Pixels @ 300 DPI</th>
                        <th className="pb-2">Ratio / Use</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-60">
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">5 × 7</td>
                        <td className="py-2 pr-4">1500 × 2100</td>
                        <td className="py-2">5:7 — Greeting cards</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">8.5 × 11</td>
                        <td className="py-2 pr-4">2550 × 3300</td>
                        <td className="py-2">Letter size</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">11 × 14</td>
                        <td className="py-2 pr-4">3300 × 4200</td>
                        <td className="py-2">Photo mat standard</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 pr-4">11 × 17</td>
                        <td className="py-2 pr-4">3300 × 5100</td>
                        <td className="py-2">Tabloid size</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">20 × 24</td>
                        <td className="py-2 pr-4">6000 × 7200</td>
                        <td className="py-2">Large format</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Which one should I pick? */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Which ratio should you pick?
              </h2>
              <Card accent>
                <h3 className="font-semibold mb-4">
                  For Etsy: offer multiple ratios
                </h3>
                <p className="text-sm text-foreground-60 mb-4">
                  Buyers have different frame sizes and preferences.
                  Professional Etsy sellers typically offer:
                </p>
                <ul className="space-y-2 text-sm text-foreground-60">
                  <li>• 2:3 ratio (most common frames)</li>
                  <li>• 3:4 ratio (classic photo frames)</li>
                  <li>• 4:5 ratio (traditional art frames)</li>
                  <li>• ISO A-series (international buyers)</li>
                </ul>
                <p className="text-sm text-foreground-60 mt-4">
                  SnapToSize makes it easy — upload once, get all ratios as
                  organized ZIPs.
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Generate all sizes instantly
                </h2>
                <p className="text-foreground-60 mb-6">
                  Stop calculating pixels. SnapToSize handles all ratios
                  automatically.
                </p>
                <a
                  href="https://app.snaptosize.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Try SnapToSize Free</Button>
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
