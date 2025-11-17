# 快速开始指南

## 📋 功能清单

✅ **已完成的功能：**
- ✨ 活泼清新的设计风格
- 🌙 暗黑模式切换（点击右上角月亮图标）
- 📂 文章分类（技术分享、生活随笔、游戏测评）
- 🏷️ 标签系统
- 🔍 站内搜索功能
- 👤 关于我页面
- 📱 响应式设计（支持手机、平板、电脑）

## 🚀 快速部署

### 第一步：修改配置

编辑 `_config.yml`，修改以下内容：

```yaml
title: "我的博客"  # 你的博客标题
url: "https://xxx.github.io"  # 改为你的GitHub用户名.github.io
social:
  github: "your-github-username"  # 你的GitHub用户名
  email: "your.email@example.com"  # 你的邮箱
```

### 第二步：创建GitHub仓库

1. 在GitHub创建新仓库，名称必须是：`你的用户名.github.io`
2. 不要初始化README

### 第三步：推送代码

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git branch -M main
git push -u origin main
```

### 第四步：启用GitHub Pages

1. 进入仓库 Settings
2. 找到 Pages 选项
3. Source 选择 `main` 分支
4. 保存后等待几分钟

完成！访问 `https://你的用户名.github.io` 即可看到你的博客。

## ✍️ 写文章

### 创建新文章

1. 在 `_posts` 目录创建文件，命名格式：`YYYY-MM-DD-title.md`

2. 文件内容示例：

```markdown
---
title: 我的第一篇文章
date: 2024-01-01
categories:
  - 技术分享  # 可选：技术分享、生活随笔、游戏测评
tags:
  - 标签1
  - 标签2
excerpt: 这是文章摘要，会显示在首页
---

# 文章标题

这里是文章内容，使用 Markdown 语法编写。

## 二级标题

- 列表项1
- 列表项2

**粗体文字** 和 *斜体文字*

[链接文字](https://example.com)
```

3. 提交到Git：

```bash
git add _posts/2024-01-01-my-first-post.md
git commit -m "Add new post"
git push
```

## 🎨 自定义

### 修改关于我页面

编辑 `about.md` 文件，修改你的个人信息。

### 修改样式

编辑 `assets/css/main.css` 来自定义颜色、字体等样式。

### 修改布局

- `_layouts/default.html` - 主布局
- `_layouts/home.html` - 首页布局
- `_layouts/post.html` - 文章页布局

## 📁 项目结构

```
.
├── _config.yml          # 配置文件
├── _layouts/            # 布局文件
├── _posts/              # 文章目录
├── assets/              # 静态资源（CSS、JS）
├── categories/          # 分类页面
├── tags/                # 标签页面
├── about.md             # 关于我页面
├── search.html          # 搜索页面
├── index.html           # 首页
└── README.md            # 说明文档
```

## 💡 使用技巧

1. **暗黑模式**：点击右上角的月亮/太阳图标切换主题
2. **搜索文章**：点击导航栏的搜索图标，输入关键词搜索
3. **浏览分类**：点击导航栏的"分类"，查看所有分类
4. **查看标签**：点击导航栏的"标签"，查看所有标签

## ❓ 常见问题

**Q: 如何添加新分类？**
A: 在 `categories/` 目录下创建新的 `.md` 文件，参考现有分类文件的格式。

**Q: 如何添加新标签？**
A: 直接在文章的 front matter 中添加 `tags`，标签页面会自动生成。

**Q: 搜索功能不工作？**
A: 确保文章有正确的 front matter，特别是 `title` 和 `excerpt` 字段。

**Q: 本地无法运行？**
A: 确保已安装 Ruby 和 Bundler，然后运行 `bundle install` 安装依赖。

## 📚 更多帮助

- 详细部署说明：查看 `DEPLOY.md`
- Jekyll 文档：https://jekyllrb.com/docs/
- GitHub Pages 文档：https://docs.github.com/en/pages

祝你使用愉快！🎉

