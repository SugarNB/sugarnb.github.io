# 个人博客

一个基于 Jekyll 的活泼清新的个人博客，支持暗黑模式切换。

## 功能特性

- ✨ 活泼清新的设计风格
- 🌙 暗黑模式切换
- 📂 文章分类（技术分享、生活随笔、游戏测评）
- 🏷️ 标签系统
- 🔍 站内搜索功能
- 👤 关于我页面
- 📱 响应式设计

## 本地开发

### 前置要求

- Ruby 2.5.0 或更高版本
- Bundler

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io
```

2. 安装依赖
```bash
bundle install
```

3. 启动本地服务器
```bash
bundle exec jekyll serve
```

4. 访问 `http://localhost:4000` 查看博客

## 部署到 GitHub Pages

1. 在 GitHub 创建新仓库，命名为 `your-username.github.io`（替换为你的 GitHub 用户名）

2. 将代码推送到仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

3. 在仓库设置中启用 GitHub Pages
   - 进入仓库 Settings
   - 找到 Pages 选项
   - Source 选择 `main` 分支
   - 保存后等待几分钟，你的博客就可以通过 `https://your-username.github.io` 访问了

## 配置说明

编辑 `_config.yml` 文件来配置你的博客：

- `title`: 博客标题
- `description`: 博客描述
- `author`: 作者名称
- `url`: 你的 GitHub Pages 地址
- `social`: 社交链接

## 写文章

1. 在 `_posts` 目录下创建 Markdown 文件
2. 文件名格式：`YYYY-MM-DD-title.md`
3. 文件头部需要包含 front matter：

```yaml
---
title: 文章标题
date: 2024-01-01
categories:
  - 技术分享
tags:
  - 标签1
  - 标签2
excerpt: 文章摘要
---
```

4. 使用 Markdown 语法编写文章内容

5. 提交到 Git：
```bash
git add _posts/YYYY-MM-DD-title.md
git commit -m "Add new post: title"
git push
```

## 文章分类

博客支持三个主要分类：
- **技术分享**：编程技巧、技术心得
- **生活随笔**：日常感悟、生活记录
- **游戏测评**：游戏体验、评测分享

## 自定义

- 修改 `assets/css/main.css` 来自定义样式
- 修改 `_layouts/` 中的布局文件来自定义页面结构
- 修改 `_config.yml` 来配置博客基本信息

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎通过 GitHub Issues 联系。

