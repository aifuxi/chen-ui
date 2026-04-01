---
name: commit
description: 根据 Angular Conventional Commits 规范帮助用户提交代码。当用户提到 "提交"、"commit"、"提交代码"、"git commit" 或需要将代码变更推送到版本控制时使用此技能。
---

# Commit 技能

帮助用户按照规范流程提交代码变更。

## 收集信息

并行运行以下命令：

- `git status`（不使用 -uall）
- `git diff` 和 `git diff --staged`
- `git log --oneline -5`

## 分析变更并生成 Commit 信息

根据变更内容，生成符合 **Angular Conventional Commits** 规范的 commit 信息。

### 格式

```
<type>(<scope>): <subject>
```

### Type 类型表

| type     | 说明                     |
| -------- | ------------------------ |
| feat     | 新功能                   |
| fix      | 修复 bug                 |
| docs     | 仅文档变更               |
| style    | 代码格式（不影响逻辑）   |
| refactor | 重构（非新功能、非修复） |
| perf     | 性能优化                 |
| test     | 添加或修改测试           |
| build    | 构建系统或外部依赖变更   |
| ci       | CI 配置变更              |
| chore    | 其他杂项变更             |
| revert   | 回退之前的提交           |

### 规则

- **subject 必须使用中文**
- subject 不加句号，不超过 50 字符
- type 全部小写
- scope 用小写英文描述模块名（可选）
- 如有多种不相关变更，拆分为多个 commit
- 禁止提交 .env、credentials 等敏感文件
- 用 `git add <具体文件>` 暂存，禁止 `git add .` 或 `git add -A`

## 提交

提交之前，展示将要提交的信息和文件列表，然后提交。

使用 HEREDOC 格式：

```bash
git commit -m "$(cat <<'EOF'
<type>(<scope>): <subject>

<body>
EOF
)"
```

## 验证

提交后运行 `git status` 确认成功。
