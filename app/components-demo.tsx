import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ComponentsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">
        Continue
        <ArrowRight data-icon="inline-end" />
      </Button>
      <Button size="icon" aria-label="Icon button">
        <ArrowRight />
      </Button>
    </div>
  )
}
