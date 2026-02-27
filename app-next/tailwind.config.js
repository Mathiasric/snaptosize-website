/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B12",
        foreground: "#E5E5E5",
        "foreground-60": "rgb(229 229 229 / 0.6)",
        "foreground-80": "rgb(229 229 229 / 0.8)",
        accent: "#7C3AED",
        "accent-light": "#8B5CF6",
        "accent-5": "rgb(124 58 237 / 0.05)",
        "accent-15": "rgb(124 58 237 / 0.15)",
        "accent-30": "rgb(124 58 237 / 0.3)",
        "accent-50": "rgb(124 58 237 / 0.5)",
        success: "#22C55E",
        error: "#EF4444",
        surface: "#13111C",
        border: "#1E1B2E",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
