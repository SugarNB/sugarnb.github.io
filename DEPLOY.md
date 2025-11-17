# 部署指南

## 快速开始

### 1. 配置博客信息

编辑 `_config.yml` 文件，修改以下内容：

```yaml
title: "我的博客"  # 改为你的博客标题
description: "技术分享、生活随笔、游戏测评"  # 改为你的博客描述
author: "Your Name"  # 改为你的名字
url: "https://xxx.github.io"  # 改为你的GitHub用户名，例如：https://yourusername.github.io
social:
  github: "your-github-username"  # 改为你的GitHub用户名
  email: "your.email@example.com"  # 改为你的邮箱
```

### 2. 创建 GitHub 仓库

1. 登录 GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称必须为：`your-username.github.io`（将 `your-username` 替换为你的GitHub用户名）
4. 设置为 Public（GitHub Pages 免费版需要公开仓库）
5. 不要初始化 README、.gitignore 或 license

### 3. 初始化 Git 并推送代码

在项目目录下执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Jekyll blog"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/your-username.github.io.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 4. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 "Settings"（设置）
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，选择 "Deploy from a branch"
5. 选择 "main" 分支和 "/ (root)" 文件夹
6. 点击 "Save"

### 5. 等待部署

GitHub Pages 通常需要几分钟来构建和部署你的网站。完成后，你可以通过 `https://your-username.github.io` 访问你的博客。

## 本地测试

在部署之前，建议先在本地测试：

```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问 http://localhost:4000 查看博客
```

## 更新文章

### 添加新文章

1. 在 `_posts` 目录下创建新的 Markdown 文件
2. 文件名格式：`YYYY-MM-DD-title.md`
3. 文件头部添加 front matter：

```yaml
---
title: 文章标题
date: 2024-01-01
categories:
  - 技术分享  # 或 生活随笔、游戏测评
tags:
  - 标签1
  - 标签2
excerpt: 文章摘要
---
```

4. 使用 Markdown 语法编写文章内容
5. 提交并推送：

```bash
git add _posts/YYYY-MM-DD-title.md
git commit -m "Add new post: title"
git push
```

### 修改现有文章

直接编辑 `_posts` 目录下的 Markdown 文件，然后提交：

```bash
git add _posts/
git commit -m "Update posts"
git push
```

## 自定义主题

- **修改颜色和样式**：编辑 `assets/css/main.css`
- **修改布局**：编辑 `_layouts/` 目录下的布局文件
- **修改导航**：编辑 `_layouts/default.html` 中的导航部分

## 常见问题

### 1. 网站无法访问

- 检查仓库名称是否正确（必须是 `username.github.io`）
- 检查 GitHub Pages 是否已启用
- 等待几分钟让 GitHub 完成构建

### 2. 样式不显示

- 检查 `_config.yml` 中的 `url` 和 `baseurl` 配置
- 确保 CSS 文件路径正确

### 3. 搜索功能不工作

- 确保文章有正确的 front matter
- 检查浏览器控制台是否有错误

## 技术支持

如有问题，请查看：
- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

