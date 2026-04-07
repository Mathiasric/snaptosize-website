import { Container } from "@/components/Container";
import { Upload, PackageOpen, Download } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Upload,
    title: "Upload your image",
    desc: "Drop any high-resolution image. JPEG, PNG, or TIFF — up to 100 MB.",
  },
  {
    num: "2",
    icon: PackageOpen,
    title: "Pick your export mode",
    desc: "Choose ratio packs for complete Etsy sets, or single exports for specific sizes.",
  },
  {
    num: "3",
    icon: Download,
    title: "Download your ZIP",
    desc: "Every file at 300 DPI, named and organized — ready to upload to Etsy.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-xl border border-white/[0.08] bg-surface/50 p-6 text-center"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-light flex items-center justify-center">
                <span className="text-sm font-bold text-black">{step.num}</span>
              </div>
              <div className="mt-4 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-15">
                <step.icon className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-foreground-60">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-foreground-60">
          Works on desktop and mobile. No software to install.
        </p>
      </Container>
    </section>
  );
}
