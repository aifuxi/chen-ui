# Chen UI

Chen UI 是一个基于 Next 16、React 19、TypeScript 5 与 Tailwind CSS v4 的 App Router 项目，同时承载组件文档站和 shadcn registry。

## 本地开发

```bash
bun install
bun run dev
```

默认访问 `http://localhost:3000`。

## Docker 构建

项目已启用 Next.js `standalone` 输出，可以直接构建容器镜像：

```bash
docker build -t chen-ui:local .
docker run --rm -p 3000:3000 chen-ui:local
```

## Docker Compose 部署

仓库根目录提供了 `compose.yaml`。它默认从 GitHub Container Registry 拉取镜像，部署前先设置镜像名和 tag：

```bash
export CHEN_UI_IMAGE=ghcr.io/<owner>/chen-ui
export CHEN_UI_TAG=v0.1.0
export CHEN_UI_PORT=3000
docker compose up -d
```

更新版本时：

```bash
docker compose pull
docker compose up -d
```

## GitHub Actions 自动构建 Docker Image

仓库包含工作流 `.github/workflows/release-image.yml`。

- 触发条件：push 形如 `v1.2.3` 的 tag
- 发布地址：`ghcr.io/<owner>/<repo>`
- 推送标签：`latest`、完整版本号、`major.minor`

发布示例：

```bash
git tag v0.1.0
git push origin v0.1.0
```

镜像发布后，可配合 `compose.yaml` 在服务器上拉取并启动对应版本。
