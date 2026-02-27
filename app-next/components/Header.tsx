import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight transition-colors hover:text-accent-light focus-ring"
          >
            <img
              src="/assets/favicon/favicon.svg"
              alt="SnapToSize"
              className="h-7 w-7"
            />
            SnapToSize
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link
                href="/sizes"
                className="text-foreground-60 transition-colors hover:text-foreground focus-ring"
              >
                Sizes
              </Link>
              <Link
                href="/pricing"
                className="text-foreground-60 transition-colors hover:text-foreground focus-ring"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-foreground-60 transition-colors hover:text-foreground focus-ring"
              >
                FAQ
              </Link>
            </div>

            <a href="https://app.snaptosize.com" target="_blank" rel="noopener noreferrer">
              <Button>Start Free</Button>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
