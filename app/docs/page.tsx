import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { docsItems } from "@/lib/docs"

const docs = docsItems.filter((item) => item.href !== "/docs")

export default function DocsIndexPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="section-kicker">Documentation</p>
        <h1>Component Docs</h1>
        <p>
          Component documentation is now written with MDX in the App Router, so
          each page can mix prose, examples, code blocks, and live React
          components.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.href}
            href={doc.href}
            className="surface-card surface-card-hover flex flex-col gap-3 p-5 no-underline"
          >
            <div className="flex items-center gap-2">
              <Badge variant="primary">
                {doc.category === "components" ? "Component" : "Guide"}
              </Badge>
            </div>
            <h2 className="mt-0 text-2xl">{doc.label}</h2>
            <p className="text-sm text-muted-foreground">{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
