import { Badge } from "@/components/ui/badge";

type DocHeaderProps = {
  category: string;
  title: string;
  description: string;
  sourcePath?: string;
};

export function DocHeader({
  category,
  title,
  description,
  sourcePath,
}: DocHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
      <div className="flex items-center gap-3">
        <Badge variant="primary">{category}</Badge>
        {sourcePath ? (
          <code className="rounded-[var(--radius-sm)] border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-muted-foreground">
            {sourcePath}
          </code>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="!mt-0 max-w-3xl font-serif text-4xl font-light leading-tight tracking-[-0.02em] md:text-5xl">
          {title}
        </h1>
        <p className="text-balance-muted max-w-3xl text-base md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
