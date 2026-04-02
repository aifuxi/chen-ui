import * as React from "react"

import { cn } from "@/lib/utils"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function PaginationButton({
  active,
  className,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-[var(--radius)] border px-3 text-sm font-medium transition-[background-color,border-color,color] duration-[var(--duration-normal)] ease-[var(--ease-smooth)] disabled:pointer-events-none disabled:opacity-50",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-transparent text-foreground hover:border-white/20 hover:bg-secondary",
        className
      )}
      {...props}
    />
  )
}

function PaginationGap({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "px-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Pagination, PaginationButton, PaginationGap }
