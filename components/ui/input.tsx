import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-[var(--radius)] border border-border bg-input px-3.5 py-2 text-sm text-foreground outline-none transition-[border-color,box-shadow,background-color] duration-[var(--duration-normal)] ease-[var(--ease-smooth)] placeholder:text-muted-foreground hover:border-white/15 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
