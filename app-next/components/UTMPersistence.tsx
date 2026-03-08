"use client";

import { useEffect } from "react";

const UTM_STORAGE_KEY = "utm_params";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

/**
 * UTM Persistence Component
 *
 * Captures UTM parameters from the URL on page load, stores them in sessionStorage,
 * and appends them to all links pointing to app.snaptosize.com.
 *
 * Example: User visits /etsy-print-sizes?utm_source=pinterest
 * → Clicks "Start Free"
 * → Lands on app.snaptosize.com?utm_source=pinterest
 */
export default function UTMPersistence() {
  useEffect(() => {
    // Guard: check if sessionStorage is available
    if (typeof window === "undefined" || typeof sessionStorage === "undefined") {
      return;
    }

    try {
      // Step 1: Capture UTM parameters from URL
      const url = new URL(window.location.href);
      const utmData: Record<string, string> = {};
      let hasNewUTMs = false;

      UTM_PARAMS.forEach((param) => {
        const value = url.searchParams.get(param);
        if (value) {
          utmData[param] = value;
          hasNewUTMs = true;
        }
      });

      // Step 2: Store UTM parameters in sessionStorage (only if we found new ones)
      if (hasNewUTMs) {
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
      }

      // Step 3: Retrieve stored UTM parameters
      const storedUTMs = sessionStorage.getItem(UTM_STORAGE_KEY);
      if (!storedUTMs) {
        return; // No UTM params to persist
      }

      const utmParams = JSON.parse(storedUTMs) as Record<string, string>;

      // Step 4: Find all links pointing to app.snaptosize.com and append UTM params
      const updateLinks = () => {
        const links = document.querySelectorAll<HTMLAnchorElement>(
          'a[href*="app.snaptosize.com"]'
        );

        links.forEach((link) => {
          try {
            const href = link.getAttribute("href");
            if (!href) return;

            const linkUrl = new URL(href);

            // Add UTM parameters to the link (don't override existing params)
            Object.entries(utmParams).forEach(([key, value]) => {
              if (!linkUrl.searchParams.has(key)) {
                linkUrl.searchParams.set(key, value);
              }
            });

            // Update the link href
            link.setAttribute("href", linkUrl.toString());
          } catch (e) {
            // Silently fail for invalid URLs
            console.warn("Failed to update link:", link.href, e);
          }
        });
      };

      // Run immediately
      updateLinks();

      // Also run after a short delay to catch any dynamically rendered links
      const timeoutId = setTimeout(updateLinks, 100);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      // Silently fail - don't crash the page
      console.error("UTM persistence error:", error);
    }
  }, []);

  return null;
}
