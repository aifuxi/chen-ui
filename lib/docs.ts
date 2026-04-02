export type DocsItem = {
  href: string
  label: string
  category: "getting-started" | "components"
}

export const docsItems: DocsItem[] = [
  {
    href: "/docs",
    label: "Overview",
    category: "getting-started",
  },
  {
    href: "/docs/components/button",
    label: "Button",
    category: "components",
  },
  {
    href: "/docs/components/badge",
    label: "Badge",
    category: "components",
  },
  {
    href: "/docs/components/input",
    label: "Input",
    category: "components",
  },
]

const registryBaseUrl =
  process.env.NEXT_PUBLIC_REGISTRY_BASE_URL ??
  "https://chen-ui.fuxiaochen.com/r"

export function getRegistryInstallCommand(name: string) {
  return `bunx --bun shadcn@latest add ${registryBaseUrl.replace(/\/$/, "")}/${name}.json`
}

export function getSourceFilePath(name: string) {
  return `components/ui/${name}.tsx`
}
