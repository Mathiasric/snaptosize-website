// TEMPORARY preview route — branch-only, never merged to main.
// Renders the new ModesSection in isolation for design review.
import { ModesSection } from "@/components/sections/ModesSection";

export const metadata = {
  title: "Preview — ModesSection",
  robots: { index: false, follow: false },
};

export default function PreviewModesPage() {
  return (
    <main className="min-h-screen">
      <ModesSection />
    </main>
  );
}
