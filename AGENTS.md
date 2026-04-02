<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 项目概况

- 本仓库是一个基于 `Next 16.2.2`、`React 19.2.4` 和 `TypeScript 5` 的 App Router 项目。
- 样式系统基于 `Tailwind CSS v4`，设计 token 与公共样式集中定义在 `app/globals.css`。
- 这个项目同时承担 `shadcn` registry 和 Chen Serif 设计系统文档站的职责。
- 通过 `@next/mdx` 启用了 MDX，`next.config.ts` 中已将 `mdx` 加入 `pageExtensions`。
- `@base-ui/react` 的基础能力被封装在 `components/ui` 下的本地组件中。

## 项目结构规则

- 路由、布局和 MDX 页面统一放在 `app/` 下，文档站主入口位于 `app/docs`。
- 可复用 UI 组件放在 `components/ui`，文档相关辅助组件放在 `components/docs`。
- 轻量级公共工具函数放在 `lib/`。
- 组件文档应通过 `app/docs/components/*/page.mdx` 这类 MDX 页面新增或维护。
- `public/r/*.json` 视为对外发布的 registry 产物，真实源头是组件源码和根目录下的 `registry.json`。

## Next.js 与 React 规则

- 编写代码前，先参考本地 Next.js 文档 `node_modules/next/dist/docs/01-app/` 中与 App Router 相关的说明。
- 默认优先使用 Server Components。只有在确实需要 hooks、事件处理器或 `next/navigation` 的客户端能力时才添加 `"use client"`。
- 保持当前 App Router 文件约定不变，例如 `layout.tsx`、`page.tsx`、`page.mdx`。
- 导入路径应兼容 `tsconfig.json` 中已有的 `@/*` 别名。
- 不要默认套用旧版 Pages Router 的写法或假设。

## 样式与设计系统规则

- 优先复用 `app/globals.css` 中已有的 Chen Serif token，不要随意引入页面级临时颜色、圆角、阴影或字体值，除非这是一次明确的设计系统调整。
- 能复用现有公共类时，不要重复造样式，优先考虑 `surface-card`、`surface-card-hover`、`section-kicker`、`headline-hero` 等约定。
- 保持项目当前的排版方向：标题使用 `Newsreader Variable`，正文字体使用 `Inter Variable`，标签或等宽场景优先使用 `JetBrains Mono Variable`，并保留现有回退字体栈。
- 修改 UI 组件时，要维持当前深色、偏 editorial 的视觉语言，并沿用已有 CSS 变量命名。
- `components.json` 已配置 `shadcn` 的 `base-nova` 风格、`lucide` 图标、RSC 开启以及 `app/globals.css` 作为样式入口，修改时应尊重这套配置。

## Registry 与文档规则

- 如果修改了 registry 对应的 UI 组件或 registry 元数据，先更新源码，再通过 `bun run registry:build` 重新生成发布产物。
- 安装命令必须基于公开 URL、相对路径或 `NEXT_PUBLIC_REGISTRY_BASE_URL`，不得写入机器本地绝对路径。
- 文档和生成内容中的源码路径应使用仓库相对路径，例如 `components/ui/button.tsx`。
- 文档内容应与 `public/r` 中实际发布的 registry 输出保持一致。
- 除非是在修复生成结果且已经同步更新源文件，否则不要直接手改 `public/r` 下的生成产物。

## 常用命令

- 本仓库优先使用 `bun`，常用命令包括 `bun run dev`、`bun run lint`、`bun run registry:build`。
- 当前 `package.json` 中没有独立测试脚本；需要验证时，默认以 lint 和必要的定向人工检查为主。

## 安全与文档规则

- `AGENTS.md` 的新增或更新内容应以中文为主；只有在必须保留原文、引用官方术语或保留外部工具约定时才使用英文。
- 生成的 UI、文档、MDX 内容、安装命令、源码链接或复制出的代码片段中，禁止暴露机器本地绝对路径。
- 安装命令必须使用公开 URL、项目相对路径或显式占位域名，不能包含 `/Users/...`、`/home/...`、`C:\...` 这类主机相关绝对路径。
- 文档中展示源码位置时，应使用仓库相对路径，例如 `components/ui/button.tsx`，不要使用本地绝对路径。
- 如果调试时临时使用了本地绝对路径，提交前必须从面向用户的内容中移除或替换掉。
