const DEMO_URL = "https://huggingface.co/spaces/snaptosize-app/snaptosize";
const PAY_URL_MONTHLY = "https://buy.stripe.com/cNi8wQf38cGYb8Wa1k7N601"; // bytt til monthly subscription link
const PAY_URL_YEARLY  = "https://buy.stripe.com/aFa14o2gmfTael8flE7N602";  // bytt til yearly subscription link

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


