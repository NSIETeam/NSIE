# NSIETeam Blog - 部署指南

## 1. GitHub Pages 配置

1. 前往 https://github.com/NSIETeam/NSIE/settings/pages
2. Source 选 **GitHub Actions**

> 提交到 main 分支后，`.github/workflows/deploy.yml` 会自动触发 Pages 部署。

## 2. Giscus 评论系统配置

Giscus 需要 GitHub Discussions 支持：

### 2.1 启用 Discussions
1. 前往 https://github.com/NSIETeam/NSIE/settings
2. 往下翻到 **Features** 部分，勾选 **Discussions**
3. 点 **Set up discussions**，分类选 **General**

### 2.2 获取 repo-id 和 category-id
```bash
# 使用 GitHub CLI
gh api repos/NSIETeam/NSIE --jq .id
# 获取分类 ID
gh api repos/NSIETeam/NSIE/discussions/categories --jq '.[] | select(.name=="General") | {id}'
```

或者用浏览器：
1. 访问 https://giscus.app/zh-CN
2. 在仓库输入框输入 `NSIETeam/NSIE`
3. 网站会自动获取 repo-id
4. 选择分类 **General**，获取 category-id

### 2.3 更新配置
将获取到的 id 填入 `src/components/blog/CommentSection.astro`：
```html
data-repo-id="你的repo-id"
data-category-id="你的category-id"
```

## 3. 本地开发
```bash
cd output/nsieteam-blog
node node_modules/astro/astro.js dev --port 6666
# 浏览器打开 http://localhost:6666/NSIE/
```

## 4. 添加新文章
在 `src/content/blog/` 下创建 `.mdx` 文件，按话题分类放到对应子目录：
```
src/content/blog/
├── research/xxx.mdx
├── engineering/xxx.mdx
├── notes/xxx.mdx
└── news/xxx.mdx
```

每篇文章头部需要 Frontmatter：
```yaml
---
title: "文章标题"
description: "简短描述"
date: 2026-04-28
tags: ["tag1", "tag2"]
topic: "research"  # research | engineering | notes | news
author: "NSIETeam"
draft: false
---
```
