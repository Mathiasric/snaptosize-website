"use client";

import { useEffect } from "react";

export default function ThanksRedirect() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    // Redirect to app with session_id for auto-unlock
    const appUrl = "/app";

    if (sessionId) {
      window.location.href = `${appUrl}?session_id=${encodeURIComponent(sessionId)}`;
    }
  }, []);

  return null;
}
