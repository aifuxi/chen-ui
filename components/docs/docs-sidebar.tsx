"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Component, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { docsItems } from "@/lib/docs"

const groups = {
  "Getting Started": docsItems.filter((item) => item.category === "getting-started"),
  Components: docsItems.filter((item) => item.category === "components"),
}

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 bottom-0 z-20 hidden w-[260px] overflow-y-auto border-r border-sidebar-border bg-sidebar px-5 py-6 lg:block">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background">
            <span className="font-serif text-lg font-bold">S</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="section-kicker">Documentation</p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Chen Serif UI
            </h2>
            <p className="text-sm text-muted-foreground">
              MDX-powered component docs with a fixed editorial sidebar.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {Object.entries(groups).map(([label, items]) => (
            <nav key={label} className="flex flex-col gap-2">
              <p className="px-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {label}
              </p>
              {items.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-[var(--radius)] border px-3 py-2.5 text-sm transition-colors",
                      isActive
                        ? "border-sidebar-border bg-sidebar-accent text-sidebar-primary"
                        : "border-transparent text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-foreground"
                    )}
                  >
                    {item.category === "getting-started" ? (
                      <BookOpen className="size-4 shrink-0" />
                    ) : (
                      <Component className="size-4 shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center gap-3 rounded-[var(--radius)] border border-white/10 bg-white/[0.02] px-3 py-3 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            <span>Chen Serif tokens active</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
