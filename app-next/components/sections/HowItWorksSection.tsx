import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Upload, PackageOpen, Download } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-15 mb-4">
              <Upload className="h-6 w-6 text-accent-light" />
            </div>
            <h3 className="font-semibold mb-2">1. Upload your image</h3>
            <p className="text-sm text-foreground-60">
              Drop any high-resolution image. JPEG, PNG, or TIFF — up to 100 MB.
            </p>
          </Card>

          <Card className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-15 mb-4">
              <PackageOpen className="h-6 w-6 text-accent-light" />
            </div>
            <h3 className="font-semibold mb-2">2. Pick your export mode</h3>
            <p className="text-sm text-foreground-60">
              Choose ratio packs for complete Etsy sets, or single exports for specific sizes.
            </p>
          </Card>

          <Card className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-15 mb-4">
              <Download className="h-6 w-6 text-accent-light" />
            </div>
            <h3 className="font-semibold mb-2">3. Download your ZIP</h3>
            <p className="text-sm text-foreground-60">
              Every file at 300 DPI, named and organized — ready to upload to Etsy.
            </p>
          </Card>
        </div>

        <p className="text-center mt-8 text-sm text-foreground-60">
          Works on desktop and mobile.
        </p>
      </Container>
    </section>
  );
}
