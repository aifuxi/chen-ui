"use client";

import { CopyCodeButton } from "@/components/docs/copy-code-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRegistryInstallCommand, type PackageManager } from "@/lib/docs";

type InstallCommandProps = {
  name: string;
};

const packageManagers: PackageManager[] = ["npm", "pnpm", "bun"];

export function InstallCommand({ name }: InstallCommandProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="mt-10 font-serif text-3xl font-semibold tracking-tight">
        Installation
      </h2>
      <Tabs defaultValue="bun" className="gap-3">
        <TabsList className="gap-1 rounded-full border-white/10 bg-white/[0.03] p-1">
          {packageManagers.map((manager) => (
            <TabsTrigger
              key={manager}
              value={manager}
              className="min-h-9 rounded-full border-white/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] data-[active]:border-primary data-[active]:bg-primary data-[active]:text-primary-foreground"
            >
              {manager}
            </TabsTrigger>
          ))}
        </TabsList>

        {packageManagers.map((manager) => (
          <TabsPanel
            key={manager}
            value={manager}
            command={getRegistryInstallCommand(name, manager)}
          />
        ))}
      </Tabs>
    </div>
  );
}

type TabsPanelProps = {
  value: PackageManager;
  command: string;
};

function TabsPanel({ value, command }: TabsPanelProps) {
  return (
    <TabsContent
      value={value}
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[#121212] p-0 shadow-[var(--shadow-sm)]"
    >
      <div className="flex items-center justify-between border-b border-white/8 bg-black/20 px-4 py-3">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="icon-[simple-icons--gnubash] size-3.5 shrink-0 text-foreground/70" />
          <span>Install Command</span>
        </span>
        <CopyCodeButton code={command} />
      </div>
      <pre className="overflow-x-auto p-4 pr-5 text-sm text-foreground md:p-5">
        <code className="font-mono text-[13px] leading-6">{command}</code>
      </pre>
    </TabsContent>
  );
}
