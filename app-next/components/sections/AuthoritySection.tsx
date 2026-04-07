import { Container } from "@/components/Container";
import { Store, ImageUp, Layers } from "lucide-react";

export function AuthoritySection() {
  return (
    <section className="py-10 bg-surface/30 border-y border-border">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Built for serious digital print sellers.
          </h2>
          <p className="text-sm text-foreground-60">
            Not a generic resizer — purpose-built for Etsy digital download shops.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-15 mb-2">
              <Store className="h-5 w-5 text-accent-light" />
            </div>
            <p className="text-sm font-medium">Etsy-native workflow</p>
            <p className="text-xs text-foreground-40">Designed for digital downloads</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-15 mb-2">
              <ImageUp className="h-5 w-5 text-accent-light" />
            </div>
            <p className="text-sm font-medium">One image in, full set out</p>
            <p className="text-xs text-foreground-40">No Photoshop or Canva needed</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-15 mb-2">
              <Layers className="h-5 w-5 text-accent-light" />
            </div>
            <p className="text-sm font-medium">Scale your shop</p>
            <p className="text-xs text-foreground-40">List faster, sell more sizes</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
