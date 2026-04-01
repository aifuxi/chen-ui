import { ComponentsDemo } from "./components-demo"

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-8 px-6 py-24">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-muted-foreground">
          shadcn registry demo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Base UI button, styled with Tailwind CSS
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          This button is wrapped around <code>@base-ui/react/button</code>,
          uses Variant-driven Design through <code>cva</code>, and is ready to
          ship as a shadcn-installable registry item.
        </p>
      </div>
      <ComponentsDemo />
    </main>
  )
}
