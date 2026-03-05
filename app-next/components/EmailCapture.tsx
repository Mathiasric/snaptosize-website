"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface EmailCaptureProps {
  variant?: "default" | "compact";
  placeholder?: string;
  buttonText?: string;
}

export function EmailCapture({
  variant = "default",
  placeholder = "Enter your email",
  buttonText = "Get Free Cheat Sheet",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-2 ${
          variant === "compact" ? "text-sm" : "text-base"
        } text-green-400`}
      >
        <CheckCircle className={variant === "compact" ? "h-5 w-5" : "h-6 w-6"} />
        <span className="font-medium">Check your inbox! PDF is on the way.</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className={`flex ${
          variant === "compact" ? "flex-col sm:flex-row gap-2" : "flex-col sm:flex-row gap-3"
        } w-full`}
      >
        <div className="relative flex-1">
          <Mail
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-white/40 ${
              variant === "compact" ? "h-4 w-4" : "h-5 w-5"
            }`}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={status === "loading"}
            className={`w-full bg-surface border border-border rounded-lg ${
              variant === "compact" ? "pl-10 pr-4 py-2.5 text-sm" : "pl-12 pr-4 py-3 text-base"
            } text-foreground placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed ${
            variant === "compact"
              ? "px-5 py-2.5 text-sm"
              : "px-6 py-3 text-base"
          } bg-gradient-to-br from-accent to-accent-light text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30`}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>{buttonText}</span>
          )}
        </button>
      </div>

      {status === "error" && errorMessage && (
        <div className="flex items-center gap-2 mt-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {status === "idle" && (
        <p className="mt-2 text-xs text-white/60">
          Free PDF. No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}
