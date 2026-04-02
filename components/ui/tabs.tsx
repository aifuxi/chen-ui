"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "relative flex w-fit flex-wrap gap-2 rounded-[var(--radius)] border border-white/10 bg-transparent p-1",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "relative z-[1] inline-flex min-h-10 items-center justify-center rounded-[calc(var(--radius)-4px)] border border-white/20 px-4 py-2 text-sm font-medium text-foreground outline-none transition-[background-color,border-color,color] duration-[var(--duration-normal)] ease-[var(--ease-smooth)] hover:bg-white/5 hover:border-white/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20 data-[active]:border-foreground data-[active]:bg-foreground data-[active]:text-background",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      className={cn(
        "surface-card rounded-[var(--radius-lg)] p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/20",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
