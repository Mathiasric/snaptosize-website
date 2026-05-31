import { Container } from "@/components/Container";

const points = [
  { strong: "No Photoshop.", rest: " No Canva. No manual resizing." },
  { strong: "30+ Etsy sizes", rest: " from a single upload." },
  { strong: "Zero cropping.", rest: " Full composition preserved." },
  { strong: "Under 20 MB.", rest: " Always within Etsy's limit." },
];

export function AuthoritySection() {
  return (
    <section className="py-5 border-y border-white/[0.06]" style={{ background: "rgba(255,255,255,0.015)" }}>
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
          {points.map(({ strong, rest }, i) => (
            <span key={i} className="text-sm text-foreground-50">
              <span className="text-foreground-80 font-medium">{strong}</span>
              {rest}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
