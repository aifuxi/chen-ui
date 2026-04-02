import { getRegistryInstallCommand } from "@/lib/docs"

type InstallCommandProps = {
  name: string
}

export function InstallCommand({ name }: InstallCommandProps) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <p className="section-kicker">Installation</p>
      <pre>
        <code>{getRegistryInstallCommand(name)}</code>
      </pre>
    </div>
  )
}
