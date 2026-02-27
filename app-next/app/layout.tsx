import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://snaptosize.com"),
  title: {
    default: "SnapToSize — Turn one image into a complete Etsy print set",
    template: "%s | SnapToSize",
  },
  description:
    "Generate all required ratios and download ready-to-upload ZIPs. No Photoshop. No manual resizing. Built for Etsy print sellers.",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/assets/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      { url: "/assets/favicon/favicon.ico" },
    ],
    apple: [
      { url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
