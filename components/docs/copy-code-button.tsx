"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

type CopyCodeButtonProps = {
  code: string
  className?: string
}

export function CopyCodeButton({ code, className }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) {
      return
    }

    const timer = window.setTimeout(() => {
      setCopied(false)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [copied])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "代码已复制" : "复制代码"}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 text-[11px] font-medium text-foreground/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      <span>{copied ? "已复制" : "复制"}</span>
    </button>
  )
}
