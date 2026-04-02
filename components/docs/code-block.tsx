import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react"
import { cache } from "react"
import {
  bundledLanguages,
  bundledLanguagesInfo,
  createHighlighter,
  type BundledLanguage,
} from "shiki"

import { cn } from "@/lib/utils"

import { CopyCodeButton } from "./copy-code-button"

type PreProps = ComponentPropsWithoutRef<"pre">
type CodeElement = ReactElement<{
  children?: ReactNode
  className?: string
}>

type LanguageBadgeMeta = {
  iconClassName: string
  label: string
}

const getHighlighter = cache(() =>
  createHighlighter({
    themes: ["vitesse-black"],
    langs: Object.keys(bundledLanguages),
  })
)

function isCodeElement(node: ReactNode): node is CodeElement {
  return !!node && typeof node === "object" && "props" in node
}

function getCodeText(children: ReactNode): string {
  if (typeof children === "string") {
    return children
  }

  if (typeof children === "number") {
    return String(children)
  }

  if (Array.isArray(children)) {
    return children.map(getCodeText).join("")
  }

  if (children && typeof children === "object" && "props" in children) {
    return getCodeText((children as CodeElement).props.children)
  }

  return ""
}

function normalizeLanguage(className?: string): BundledLanguage | null {
  const candidate = className?.replace(/^language-/, "").trim()

  if (!candidate) {
    return null
  }

  if (candidate in bundledLanguages) {
    return candidate as BundledLanguage
  }

  const match = bundledLanguagesInfo.find((language) => language.aliases?.includes(candidate))

  if (match) {
    return match.id as BundledLanguage
  }

  return null
}

function getLanguageBadgeMeta(language: BundledLanguage): LanguageBadgeMeta {
  const meta: Partial<Record<BundledLanguage, LanguageBadgeMeta>> = {
    bash: {
      iconClassName: "icon-[simple-icons--gnubash]",
      label: "Bash",
    },
    shellscript: {
      iconClassName: "icon-[simple-icons--gnubash]",
      label: "Shell",
    },
    shellsession: {
      iconClassName: "icon-[simple-icons--gnubash]",
      label: "Console",
    },
    javascript: {
      iconClassName: "icon-[simple-icons--javascript]",
      label: "JavaScript",
    },
    jsx: {
      iconClassName: "icon-[simple-icons--react]",
      label: "JSX",
    },
    typescript: {
      iconClassName: "icon-[simple-icons--typescript]",
      label: "TypeScript",
    },
    tsx: {
      iconClassName: "icon-[simple-icons--react]",
      label: "TSX",
    },
    json: {
      iconClassName: "icon-[simple-icons--json]",
      label: "JSON",
    },
    html: {
      iconClassName: "icon-[simple-icons--html5]",
      label: "HTML",
    },
    css: {
      iconClassName: "icon-[simple-icons--css3]",
      label: "CSS",
    },
    md: {
      iconClassName: "icon-[simple-icons--markdown]",
      label: "Markdown",
    },
    mdx: {
      iconClassName: "icon-[simple-icons--mdx]",
      label: "MDX",
    },
  }

  return (
    meta[language] ?? {
      iconClassName: "icon-[simple-icons--simpleicons]",
      label: bundledLanguagesInfo.find((item) => item.id === language)?.name ?? language,
    }
  )
}

export async function CodeBlock({ className, children, ...props }: PreProps) {
  const codeNode = isCodeElement(children) ? children : null
  const code = getCodeText(codeNode?.props.children ?? children).replace(/\n$/, "")
  const language = normalizeLanguage(codeNode?.props.className)

  if (!language) {
    return (
      <div className="group/code relative my-6">
        <div className="absolute top-3 right-3 z-10 opacity-100 md:opacity-0 md:transition md:duration-200 md:group-hover/code:opacity-100">
          <CopyCodeButton code={code} />
        </div>
        <pre
          className={cn(
            "overflow-x-auto rounded-[var(--radius-lg)] border border-white/10 bg-[#121212] p-4 pr-20 text-sm text-foreground shadow-[var(--shadow-sm)]",
            className
          )}
          {...props}
        >
          <code className="font-mono">{code}</code>
        </pre>
      </div>
    )
  }

  const highlighter = await getHighlighter()
  const languageBadge = getLanguageBadgeMeta(language)
  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: "vitesse-black",
  })

  return (
    <div className="group/code relative my-6 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[#121212] shadow-[var(--shadow-sm)]">
      <div className="flex items-center justify-between border-b border-white/8 bg-black/20 px-4 py-3">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span
            className={cn(
              "size-3.5 shrink-0 text-foreground/70",
              languageBadge.iconClassName
            )}
            aria-hidden="true"
          />
          <span>{languageBadge.label}</span>
        </span>
        <div className="opacity-100 md:opacity-0 md:transition md:duration-200 md:group-hover/code:opacity-100">
          <CopyCodeButton code={code} />
        </div>
      </div>
      <div
        className={cn(
          "[&_code]:grid [&_code]:min-w-full [&_code]:font-mono [&_code]:text-[13px] [&_code]:leading-6 [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent [&_pre]:p-4 md:[&_pre]:p-5",
          className
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
