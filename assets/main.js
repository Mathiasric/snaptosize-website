// SnapToSize landing — minimal JS
// 1) Single source of truth for Demo + Payment links
// 2) Auto-wire every CTA in index.html
// 3) Set footer year
// 4) Leave a clean hook for analytics later

const DEMO_URL = "https://huggingface.co/spaces/snaptosize-app/snaptosize";
const PAY_URL  = "https://buy.stripe.com/test_bJe3cx0yBclJ04y4Fn2Ry00";

// Wire all <a> tags that use our data-href convention
function wireLinks() {
  document.querySelectorAll('[data-href="demo"]').forEach((a) => {
    a.setAttribute("href", DEMO_URL);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll('[data-href="pay"]').forEach((a) => {
    a.setAttribute("href", PAY_URL);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
}

// Footer year
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

// Minimal CTA tracking hook (works even without analytics)
// Later you can swap console.log with Plausible/GA4 events.
function wireTracking() {
  document.querySelectorAll("[data-cta]").forEach((el) => {
    el.addEventListener("click", () => {
      const evt = el.getAttribute("data-cta"); // "demo" or "pay"

      // Example (Plausible):
      // if (window.plausible) window.plausible(evt);

      // Example (GA4):
      // if (window.gtag) window.gtag("event", evt, { page_location: location.href });

      console.log("[CTA]", evt);
    });
  });
}

// Run
wireLinks();
setYear();
wireTracking();

