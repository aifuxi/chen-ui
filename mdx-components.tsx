import type { MDXComponents } from "mdx/types"

import { CodeBlock } from "@/components/docs/code-block"
import { cn } from "@/lib/utils"

const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn("font-serif text-4xl font-semibold tracking-tight md:text-5xl", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn("mt-10 font-serif text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("mt-8 font-serif text-2xl font-semibold", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("text-sm leading-7 text-muted-foreground md:text-base", className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={cn("text-primary underline-offset-4 hover:underline", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("ml-5 list-disc space-y-2 text-sm text-muted-foreground", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("ml-5 list-decimal space-y-2 text-sm text-muted-foreground", className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn("pl-1", className)} {...props} />,
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded-[var(--radius-sm)] border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground",
        className
      )}
      {...props}
    />
  ),
  pre: CodeBlock,
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "border-l-2 border-primary pl-4 font-serif text-xl italic text-foreground/90",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="overflow-x-auto">
      <table className={cn("w-full border-collapse text-left", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border-b border-white/10 px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td className={cn("border-b border-white/5 px-4 py-3 text-sm text-foreground", className)} {...props} />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
