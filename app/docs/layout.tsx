import type { ReactNode } from "react"

import { DocsSidebar } from "@/components/docs/docs-sidebar"

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <DocsSidebar />

      <section className="min-w-0 px-6 py-10 md:px-10 md:py-14 lg:ml-[260px]">
        <article className="mx-auto max-w-5xl rounded-[var(--radius-lg)] border border-white/10 bg-card p-6 shadow-[var(--shadow-sm)] backdrop-blur-[12px] md:p-8">
          {children}
        </article>
      </section>
    </main>
  )
}
