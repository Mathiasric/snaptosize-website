import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Boxes, FileText, Archive, Zap } from "lucide-react";

export function WhatYouGetSection() {
  return (
    <section className="py-16 bg-surface/50">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          What you get
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <Boxes className="h-8 w-8 text-accent-light mb-3" />
            <h3 className="font-semibold mb-2">Multiple ratios</h3>
            <p className="text-sm text-foreground-60">
              2:3, 3:4, 4:5, 5:7, ISO A-series
            </p>
          </Card>

          <Card>
            <FileText className="h-8 w-8 text-accent-light mb-3" />
            <h3 className="font-semibold mb-2">Consistent naming</h3>
            <p className="text-sm text-foreground-60">
              Professional file structure
            </p>
          </Card>

          <Card>
            <Archive className="h-8 w-8 text-accent-light mb-3" />
            <h3 className="font-semibold mb-2">ZIP packaging</h3>
            <p className="text-sm text-foreground-60">
              Organized by ratio groups
            </p>
          </Card>

          <Card>
            <Zap className="h-8 w-8 text-accent-light mb-3" />
            <h3 className="font-semibold mb-2">High-quality exports</h3>
            <p className="text-sm text-foreground-60">
              300 DPI, quality-optimized
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
