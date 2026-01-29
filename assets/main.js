const DEMO_URL = "https://huggingface.co/spaces/snaptosize-app/snaptosize";
const PAY_URL_MONTHLY = "https://buy.stripe.com/XXX_MONTHLY"; // bytt til monthly subscription link
const PAY_URL_YEARLY  = "https://buy.stripe.com/XXX_YEARLY";  // bytt til yearly subscription link

function wireLinks() {
  document.querySelectorAll('[data-href="demo"]').forEach((a) => {
    a.href = DEMO_URL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  document.querySelectorAll('[data-href="pay-monthly"]').forEach((a) => {
    a.href = PAY_URL_MONTHLY;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  document.querySelectorAll('[data-href="pay-yearly"]').forEach((a) => {
    a.href = PAY_URL_YEARLY;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

wireLinks();
setYear();


