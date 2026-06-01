interface AuthorBylineProps {
  lastUpdated: string;
}

export function AuthorByline({ lastUpdated }: AuthorBylineProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground/55 border-b border-border/50 pb-4 mb-8">
      <span className="font-medium text-foreground/70">The SnapToSize Team</span>
      <span className="text-foreground/30">·</span>
      <span>Print sellers turned toolmakers, specialized in Etsy print sizing</span>
      <span className="text-foreground/30">·</span>
      <span>Last updated: {lastUpdated}</span>
    </div>
  );
}
