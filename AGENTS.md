<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Security And Docs Rules

- Never expose machine-local absolute filesystem paths in generated UI, docs, MDX content, installation commands, source links, or copied code snippets.
- Installation commands must use public URLs, relative project paths, or explicit placeholder domains. They must not include paths like `/Users/...`, `/home/...`, `C:\...`, or any other host-specific absolute path.
- Source locations shown in docs must use repository-relative paths such as `components/ui/button.tsx`, not local absolute paths.
- If a local absolute path is useful for temporary debugging, keep it out of committed user-facing files and replace it before finishing.
