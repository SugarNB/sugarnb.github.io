---
title: Jekyll 博客搭建指南
date: 2024-01-20
categories:
  - 技术分享
tags:
  - Jekyll
  - 博客
  - GitHub Pages
excerpt: 分享如何使用 Jekyll 和 GitHub Pages 搭建个人博客的完整流程。
---

## 什么是 Jekyll？

Jekyll 是一个静态网站生成器，可以将 Markdown 文件转换为静态 HTML 网站。它非常适合用来搭建博客。

## 为什么选择 Jekyll？

1. **简单易用**：使用 Markdown 编写文章，无需数据库
2. **快速**：生成静态网站，加载速度快
3. **免费托管**：可以免费部署到 GitHub Pages
4. **高度可定制**：可以完全自定义主题和功能

## 搭建步骤

### 1. 安装 Jekyll

```bash
gem install bundler jekyll
```

### 2. 创建新站点

```bash
jekyll new my-blog
cd my-blog
```

### 3. 本地运行

```bash
bundle exec jekyll serve
```

访问 `http://localhost:4000` 即可查看你的博客。

### 4. 部署到 GitHub Pages

1. 在 GitHub 创建新仓库，命名为 `your-username.github.io`
2. 将代码推送到仓库
3. 在仓库设置中启用 GitHub Pages
4. 几分钟后，你的博客就可以通过 `https://your-username.github.io` 访问了

## 总结

Jekyll 是一个强大而简单的博客工具，非常适合个人博客的搭建。希望这篇文章对你有帮助！

