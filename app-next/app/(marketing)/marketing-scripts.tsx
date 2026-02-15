"use client";

import { useEffect } from "react";

const DEMO_URL = "/app";
const PAY_URL_MONTHLY =
  "https://buy.stripe.com/4gM3cw5sygXeel84H07N603";
const PAY_URL_YEARLY =
  "https://buy.stripe.com/aFa9AUaMS7mE7WK8Xg7N604";

export default function MarketingScripts() {
  useEffect(() => {
    // Wire CTA links
    document.querySelectorAll<HTMLAnchorElement>('[data-href="demo"]').forEach((a) => {
      a.href = DEMO_URL;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });

    document.querySelectorAll<HTMLAnchorElement>('[data-href="pay-monthly"]').forEach((a) => {
      a.href = PAY_URL_MONTHLY;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });

    document.querySelectorAll<HTMLAnchorElement>('[data-href="pay-yearly"]').forEach((a) => {
      a.href = PAY_URL_YEARLY;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });

    // Set year in footer
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }, []);

  return null;
}
