import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type ComponentPreviewProps = {
  title?: string
  description?: string
  className?: string
  children: ReactNode
}

export function ComponentPreview({
  title,
  description,
  className,
  children,
}: ComponentPreviewProps) {
  return (
    <div className="my-6 overflow-hidden rounded-[var(--radius-lg)] border border-white/10">
      {(title || description) && (
        <div className="border-b border-white/10 bg-white/[0.02] px-4 py-3">
          {title ? <p className="text-sm font-medium text-foreground">{title}</p> : null}
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      )}
      <div
        className={cn(
          "bg-black/30 px-4 py-6 md:px-6 md:py-8",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
