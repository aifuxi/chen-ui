import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Circle,
  Download,
  Edit2,
  Layers3,
  Palette,
  Plus,
  Search,
  Trash2,
  Type,
  WandSparkles,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarRing } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationGap,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tokens = [
  {
    label: "Background",
    value: "#050505",
    swatch: "bg-[#050505] border border-white/10",
  },
  { label: "Foreground", value: "#EBEBEB", swatch: "bg-[#ebebeb] text-black" },
  { label: "Primary", value: "#10B981", swatch: "bg-[#10b981] text-black" },
  {
    label: "Card",
    value: "rgba(255,255,255,0.02)",
    swatch: "bg-[rgba(255,255,255,0.02)] border border-white/10",
  },
]

const semanticTokens = [
  { label: "Success", value: "#10B981", swatch: "bg-[#10b981] text-black" },
  { label: "Warning", value: "#F59E0B", swatch: "bg-[#f59e0b] text-black" },
  { label: "Destructive", value: "#EF4444", swatch: "bg-[#ef4444]" },
  { label: "Info", value: "#3B82F6", swatch: "bg-[#3b82f6]" },
]

const neutralTokens = [
  {
    label: "Card",
    value: "rgba(255,255,255,0.02)",
    swatch: "bg-[rgba(255,255,255,0.02)] border border-white/10",
  },
  {
    label: "Secondary",
    value: "rgba(255,255,255,0.08)",
    swatch: "bg-[rgba(255,255,255,0.08)]",
  },
  {
    label: "Border",
    value: "rgba(255,255,255,0.08)",
    swatch: "bg-[rgba(255,255,255,0.08)] border border-white/20",
  },
  {
    label: "Input",
    value: "rgba(255,255,255,0.08)",
    swatch: "bg-[rgba(255,255,255,0.08)]",
  },
]

const principles = [
  {
    icon: Type,
    title: "Editorial typography",
    body: "Newsreader leads the hierarchy, Inter carries body copy, and JetBrains Mono now drives labels and system metadata.",
  },
  {
    icon: Layers3,
    title: "Glass surfaces",
    body: "Panels stay almost-black and gain depth through blur, low-alpha fills, and soft layered shadows.",
  },
  {
    icon: WandSparkles,
    title: "Measured motion",
    body: "Interactions use a smooth cubic-bezier curve and subtle lift instead of loud springy movement.",
  },
]

const fontScale = [
  {
    name: "Hero",
    preview: "Aa",
    className: "font-serif text-7xl font-light md:text-[100px]",
    meta: "100px / 200",
  },
  {
    name: "H1",
    preview: "Aa",
    className: "font-serif text-5xl font-semibold md:text-[64px]",
    meta: "64px / 600",
  },
  {
    name: "H2",
    preview: "Aa",
    className: "font-serif text-4xl font-semibold md:text-[48px]",
    meta: "48px / 600",
  },
  {
    name: "H3",
    preview: "Aa",
    className: "font-serif text-2xl font-medium md:text-[24px]",
    meta: "24px / 500",
  },
  {
    name: "Body Large",
    preview: "Aa",
    className: "text-lg font-light",
    meta: "18px / 300",
  },
  { name: "Body", preview: "Aa", className: "text-base", meta: "16px / 400" },
  {
    name: "Label",
    preview: "Aa",
    className: "font-mono text-xs uppercase tracking-[0.2em]",
    meta: "12px / 500",
  },
]

const tableRows = [
  {
    title: "设计系统的未来趋势",
    category: "Design",
    categoryVariant: "primary" as const,
    status: "已发布",
    statusVariant: "primary" as const,
  },
  {
    title: "2026 年 Web 开发路线图",
    category: "Development",
    categoryVariant: "default" as const,
    status: "草稿",
    statusVariant: "warning" as const,
  },
  {
    title: "用户体验设计原则",
    category: "Design",
    categoryVariant: "primary" as const,
    status: "已发布",
    statusVariant: "primary" as const,
  },
]

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-6 py-10 md:px-10 md:py-16">
      <section className="surface-card surface-card-hover px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="section-kicker inline-flex items-center gap-2">
                <Circle className="size-3 fill-current stroke-none" />
                Design System v1.0
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="headline-hero">
                Chen <span className="text-primary italic">Serif</span>
              </h1>
              <p className="max-w-2xl text-lg font-light text-balance-muted md:text-xl">
                A production-grade design system page rebuilt from the
                Superdesign spec. The components below now share one coherent
                token system instead of page-local styling.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                <Download data-icon="inline-start" />
                下载资源
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen data-icon="inline-start" />
                阅读文档
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tokens.map((token) => (
              <div
                key={token.label}
                className="surface-card flex min-h-36 flex-col justify-between p-5"
              >
                <div className={`h-16 rounded-[var(--radius-md)] ${token.swatch}`} />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">{token.label}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {token.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex flex-col gap-3">
          <p className="section-kicker">Colors</p>
          <h2 className="text-4xl font-semibold">色彩系统</h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Chen Serif 使用近黑背景、温和高亮前景和翡翠绿强调色。语义色和中性色都收敛在同一套深色界面语言里。
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">主色调 / Primary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tokens.map((token) => (
                <div
                  key={token.label}
                  className="surface-card flex aspect-square flex-col justify-end gap-2 p-5"
                >
                  <div className={`min-h-24 rounded-[var(--radius-md)] ${token.swatch}`} />
                  <p className="text-sm font-semibold">{token.label}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {token.value}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">语义色 / Semantic</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {semanticTokens.map((token) => (
                <div
                  key={token.label}
                  className="surface-card flex aspect-square flex-col justify-end gap-2 p-5"
                >
                  <div className={`min-h-24 rounded-[var(--radius-md)] ${token.swatch}`} />
                  <p className="text-sm font-semibold">{token.label}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {token.value}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">中性色 / Neutral</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {neutralTokens.map((token) => (
                <div
                  key={token.label}
                  className="surface-card flex aspect-square flex-col justify-end gap-2 p-5"
                >
                  <div className={`min-h-24 rounded-[var(--radius-md)] ${token.swatch}`} />
                  <p className="text-sm font-semibold">{token.label}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {token.value}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {principles.map((item) => {
          const Icon = item.icon
          return (
            <article
              key={item.title}
              className="surface-card surface-card-hover flex flex-col gap-4 p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-[var(--radius)] bg-secondary text-primary">
                <Icon className="size-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-sm text-balance-muted">{item.body}</p>
              </div>
            </article>
          )
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader>
            <p className="section-kicker">Typography</p>
            <CardTitle>Three-font hierarchy</CardTitle>
            <CardDescription>
              Newsreader handles headlines, Inter stays readable in body copy,
              and JetBrains Mono is now the default choice for labels and
              system metadata.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            {fontScale.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 border-b border-white/10 py-4 last:border-b-0"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.name}
                </span>
                <span className={item.className}>{item.preview}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.meta}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="section-kicker">Components</p>
            <CardTitle>Buttons, badges, inputs</CardTitle>
            <CardDescription>
              Core primitives rewritten as reusable components instead of
              one-off HTML classes.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="grid gap-4">
              <Input placeholder="Enter your name..." />
              <Input type="search" placeholder="Search..." />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <p className="section-kicker">Tabs</p>
            <CardTitle>Segmented navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p className="text-sm text-muted-foreground">
                  A dark editorial system mixing serif hierarchy with modern
                  product-like interaction surfaces.
                </p>
              </TabsContent>
              <TabsContent value="components">
                <p className="text-sm text-muted-foreground">
                  Buttons, inputs, badges, tables, dialogs, avatars and
                  pagination all inherit the same Chen Serif tokens.
                </p>
              </TabsContent>
              <TabsContent value="tokens">
                <p className="text-sm text-muted-foreground">
                  Emerald accents, translucent glass surfaces, soft shadows and
                  larger radii define the visual system.
                </p>
              </TabsContent>
              <TabsContent value="resources">
                <p className="text-sm text-muted-foreground">
                  Extracted from `.superdesign/design_iterations/design_spec_1.*`
                  and rewritten as actual app components.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="section-kicker">Avatar</p>
            <CardTitle>Identity primitives</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                32px
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar>
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                40px
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="lg">
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                64px
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <AvatarRing>
                <Avatar>
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </AvatarRing>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Ring
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden p-0">
          <CardHeader className="p-6">
            <p className="section-kicker">Data Table</p>
            <CardTitle>Structured content</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>标题</TableHead>
                  <TableHead>分类</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableRows.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell className="font-medium">{row.title}</TableCell>
                    <TableCell>
                      <Badge variant={row.categoryVariant}>{row.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={row.statusVariant}>{row.status}</Badge>
                    </TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" aria-label="Edit">
                        <Edit2 />
                      </Button>
                      <Button variant="ghost" size="icon" aria-label="Delete">
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <p className="section-kicker">Pagination</p>
              <CardTitle>Long-list navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Pagination>
                <Button variant="secondary" size="sm">
                  <ChevronLeft data-icon="inline-start" />
                  上一页
                </Button>
                <PaginationButton>1</PaginationButton>
                <PaginationButton active>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
                <PaginationButton>4</PaginationButton>
                <Button variant="secondary" size="sm">
                  下一页
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </Pagination>
              <Pagination>
                <PaginationButton active>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
                <PaginationGap>...</PaginationGap>
                <PaginationButton>10</PaginationButton>
              </Pagination>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <p className="section-kicker">Lists</p>
              <CardTitle>Specification list</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {[
                {
                  icon: Palette,
                  title: "色彩系统",
                  body: "精心调配的深色配色与翡翠强调色。",
                },
                {
                  icon: Type,
                  title: "字体系统",
                  body: "Newsreader、Inter 与 JetBrains Mono 的组合。",
                },
                {
                  icon: Layers3,
                  title: "组件库",
                  body: "从 token 到 component API 的统一封装。",
                },
              ].map((item, index, arr) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 px-6 py-5 transition-colors duration-[var(--duration-normal)] ease-[var(--ease-smooth)] hover:bg-white/[0.025] ${
                      index < arr.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <div className="flex size-10 items-center justify-center rounded-[var(--radius)] bg-secondary text-primary">
                      <Icon className="size-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.body}</div>
                    </div>
                    <Plus className="size-4 text-muted-foreground" />
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <p className="section-kicker">Dialog</p>
            <CardTitle>Modal shell</CardTitle>
            <CardDescription>
              Uses Base UI dialog primitives and the same Chen Serif surface
              treatment.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger render={<Button />}>基础模态框</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>确认操作</DialogTitle>
                  <DialogDescription>
                    确定要执行此操作吗？此操作无法撤销。
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="secondary" />}>
                    取消
                  </DialogClose>
                  <DialogClose render={<Button />}>确定</DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                表单模态框
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>编辑资料</DialogTitle>
                  <DialogDescription>
                    所有表单控件都继承相同的 dark glass token。
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <Input defaultValue="Sarah Chen" />
                  <Input defaultValue="sarah@example.com" />
                  <Input defaultValue="Administrator" />
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="secondary" />}>
                    取消
                  </DialogClose>
                  <DialogClose render={<Button />}>保存</DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="section-kicker">Micro Interactions</p>
            <CardTitle>Motion rules</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-[var(--radius)] border border-white/10 bg-white/[0.02] p-4 text-center">
              <div className="flex size-12 items-center justify-center rounded-[var(--radius-sm)] bg-secondary transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)] hover:-translate-y-1 hover:bg-primary hover:text-background">
                <Plus className="size-4" />
              </div>
              <div>
                <div className="text-sm font-medium">Hover</div>
                <div className="text-xs text-muted-foreground">Lift + color shift</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-[var(--radius)] border border-white/10 bg-white/[0.02] p-4 text-center">
              <Button className="w-full active:scale-95">Press me</Button>
              <div>
                <div className="text-sm font-medium">Active</div>
                <div className="text-xs text-muted-foreground">Scale down feedback</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-[var(--radius)] border border-white/10 bg-white/[0.02] p-4 text-center">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9 text-center" placeholder="Focus me" />
              </div>
              <div>
                <div className="text-sm font-medium">Focus</div>
                <div className="text-xs text-muted-foreground">Ring glow effect</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
