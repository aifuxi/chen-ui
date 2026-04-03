export type DocsItem = {
  href: string
  label: string
  category: "getting-started" | "components"
  description: string
}

export type PackageManager = "npm" | "pnpm" | "bun"

export const docsItems: DocsItem[] = [
  {
    href: "/docs",
    label: "Overview",
    category: "getting-started",
    description: "MDX-powered component docs and installation guidance for Chen Serif UI.",
  },
  {
    href: "/docs/components/button",
    label: "Button",
    category: "components",
    description: "Variant-driven button component built on @base-ui/react/button.",
  },
  {
    href: "/docs/components/badge",
    label: "Badge",
    category: "components",
    description: "Compact semantic label component for status and metadata.",
  },
  {
    href: "/docs/components/input",
    label: "Input",
    category: "components",
    description: "Dark glass input field with Chen Serif tokens for borders and focus.",
  },
  {
    href: "/docs/components/avatar",
    label: "Avatar",
    category: "components",
    description: "Avatar primitives with fallback states, sizing variants, and accent ring support.",
  },
  {
    href: "/docs/components/card",
    label: "Card",
    category: "components",
    description: "Editorial glass-surface card composition for summaries, content blocks, and CTAs.",
  },
  {
    href: "/docs/components/dialog",
    label: "Dialog",
    category: "components",
    description: "Modal dialog primitives with backdrop, header, footer, and close affordances.",
  },
  {
    href: "/docs/components/pagination",
    label: "Pagination",
    category: "components",
    description: "Compact pagination controls for long lists and index-driven navigation.",
  },
  {
    href: "/docs/components/table",
    label: "Table",
    category: "components",
    description: "Table primitives for dense editorial data with muted headers and subtle row hover states.",
  },
  {
    href: "/docs/components/tabs",
    label: "Tabs",
    category: "components",
    description: "Base UI powered tabs with tactile triggers and glass-panel content areas.",
  },
]

const registryBaseUrl =
  process.env.NEXT_PUBLIC_REGISTRY_BASE_URL ??
  "https://chen-ui.fuxiaochen.com/r"

export function getRegistryInstallCommand(
  name: string,
  packageManager: PackageManager = "bun"
) {
  const registryUrl = `${registryBaseUrl.replace(/\/$/, "")}/${name}.json`

  switch (packageManager) {
    case "npm":
      return `npx shadcn@latest add ${registryUrl}`
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${registryUrl}`
    case "bun":
    default:
      return `bunx --bun shadcn@latest add ${registryUrl}`
  }
}

export function getSourceFilePath(name: string) {
  return `components/ui/${name}.tsx`
}
