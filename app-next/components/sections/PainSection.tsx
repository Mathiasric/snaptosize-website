import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export function PainSection() {
  return (
    <section className="py-16 bg-surface/50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            The manual way takes forever
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="font-semibold mb-4 text-error">
                Manual Process
              </h3>
              <ul className="space-y-2 text-sm text-foreground-60">
                <li>• Resize 5–8 ratios manually</li>
                <li>• Export 20+ files individually</li>
                <li>• Double-check DPI settings</li>
                <li>• Re-upload when you miss a size</li>
              </ul>
              <p className="mt-4 text-lg font-semibold text-error">
                20–40 min per listing
              </p>
            </Card>

            <Card accent>
              <h3 className="font-semibold mb-4 text-success">
                With SnapToSize
              </h3>
              <ul className="space-y-2 text-sm text-foreground-60">
                <li>• Upload once</li>
                <li>• Choose export mode</li>
                <li>• Download ZIP</li>
                <li>• Done</li>
              </ul>
              <p className="mt-4 text-lg font-semibold text-success">
                &lt; 30 seconds
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
