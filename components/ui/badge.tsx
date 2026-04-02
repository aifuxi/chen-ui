import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[var(--radius-sm)] border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors duration-[var(--duration-normal)] ease-[var(--ease-smooth)]",
  {
    variants: {
      variant: {
        default: "border-border bg-secondary text-foreground",
        primary:
          "border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.15)] text-primary",
        destructive:
          "border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.15)] text-destructive",
        warning:
          "border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.15)] text-[#f59e0b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants, type BadgeProps }
