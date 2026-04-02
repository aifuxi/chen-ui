export type DocsItem = {
  href: string
  label: string
  category: "getting-started" | "components"
}

export type PackageManager = "npm" | "pnpm" | "bun"

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
