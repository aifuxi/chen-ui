import { Badge } from "@/components/ui/badge"

type DocHeaderProps = {
  category: string
  title: string
  description: string
  sourcePath?: string
}

export function DocHeader({
  category,
  title,
  description,
  sourcePath,
}: DocHeaderProps) {
  return (
    <header className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8">
      <div className="flex items-center gap-3">
        <Badge variant="primary">{category}</Badge>
        {sourcePath ? (
          <code className="rounded-[var(--radius-sm)] border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-muted-foreground">
            {sourcePath}
          </code>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="!mt-0">{title}</h1>
        <p className="max-w-3xl text-base text-muted-foreground">{description}</p>
      </div>
    </header>
  )
}
