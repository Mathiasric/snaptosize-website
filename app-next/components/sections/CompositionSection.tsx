import { Container } from "@/components/Container";

const images = [
  {
    src: "/assets/Composition_Pictures/16x24in_41x61cm_4800x7200px.jpg",
    label: "2:3 (Original)",
    alt: "2:3 Original ratio example",
  },
  {
    src: "/assets/Composition_Pictures/16x20in_41x51cm_4800x6000px.jpg",
    label: "4:5 Ratio",
    alt: "4:5 Ratio example",
    primary: true,
  },
  {
    src: "/assets/Composition_Pictures/15x20in_38x51cm_4500x6000px.jpg",
    label: "3:4 Ratio",
    alt: "3:4 Ratio example",
  },
];

export function CompositionSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Same artwork. Every ratio. No cropping.
          </h2>
          <p className="text-foreground-60">
            Your original composition stays centered across all print formats.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {images.map((img) => (
            <div
              key={img.label}
              className={`flex flex-col items-center ${
                img.primary ? "md:max-w-[280px]" : "md:max-w-[240px]"
              }`}
            >
              <div
                className={`rounded-xl border border-white/[0.08] shadow-md overflow-hidden bg-surface transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl ${
                  img.primary ? "md:scale-105" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[320px] object-contain"
                />
              </div>
              <span className="mt-3 text-sm text-foreground-60">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-foreground-60 font-semibold">
          No cropping. Original composition preserved.
        </p>
      </Container>
    </section>
  );
}
