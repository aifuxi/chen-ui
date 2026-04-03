import type { MDXComponents } from "mdx/types"

import { CodeBlock } from "@/components/docs/code-block"
import { cn } from "@/lib/utils"

const components: MDXComponents = {
  wrapper: ({ className, ...props }) => (
    <article className={cn("chen-serif-prose", className)} {...props} />
  ),
  h1: ({ className, ...props }) => <h1 className={className} {...props} />,
  h2: ({ className, ...props }) => <h2 className={className} {...props} />,
  h3: ({ className, ...props }) => <h3 className={className} {...props} />,
  p: ({ className, ...props }) => <p className={className} {...props} />,
  a: ({ className, ...props }) => <a className={className} {...props} />,
  ul: ({ className, ...props }) => <ul className={className} {...props} />,
  ol: ({ className, ...props }) => <ol className={className} {...props} />,
  li: ({ className, ...props }) => <li className={className} {...props} />,
  code: ({ className, ...props }) => <code className={className} {...props} />,
  pre: CodeBlock,
  blockquote: ({ className, ...props }) => (
    <blockquote className={className} {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="overflow-x-auto">
      <table className={className} {...props} />
    </div>
  ),
  th: ({ className, ...props }) => <th className={className} {...props} />,
  td: ({ className, ...props }) => <td className={className} {...props} />,
}

export function useMDXComponents(): MDXComponents {
  return components
}
