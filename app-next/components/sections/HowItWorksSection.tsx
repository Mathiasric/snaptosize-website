import { Container } from "@/components/Container";

const steps = [
  {
    num: "01",
    title: "Upload your image",
    desc: "Drop any high-res file. JPEG, PNG, or TIFF, up to 100 MB.",
  },
  {
    num: "02",
    title: "Pick your export mode",
    desc: "Full ratio packs for complete Etsy sets, single sizes, or your own saved packs.",
  },
  {
    num: "03",
    title: "Download your ZIP",
    desc: "Every file at 300 DPI, named and organized. Ready to upload to Etsy.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
          How it works
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`py-6 md:py-0 ${i === 0 ? "md:pr-10" : i === steps.length - 1 ? "md:pl-10" : "md:px-10"}`}
            >
              <span className="block text-[4.5rem] font-bold leading-none mb-5 select-none text-white/[0.06]">
                {step.num}
              </span>
              <h3 className="font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-sm text-foreground-60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-14 text-sm text-foreground-60">
          Works on desktop and mobile. No software to install.
        </p>
      </Container>
    </section>
  );
}
