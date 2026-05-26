# acgnavi.com / ACG アニメ速覧ガイド

这是一个面向动漫、漫画、游戏爱好者的 ACG 资料站项目。

它现在已经整理成适合公开发布的前端网站，主要能力包括：

- 3000+ 动漫作品检索与分页浏览
- 题材、类型、年代、来源、评分、排序等多维筛选
- 系列追番顺序参考
- 角色榜与角色聚类筛选
- 正版观看入口跳转
- 本季新番与公开资料检索

说明一下名字：

- `acgnavi.com` 现在作为项目品牌名使用
- 因为还没有购买独立域名，所以公开网址仍然会使用 GitHub Pages 默认地址

## 公开访问地址

代码仓库地址：

- [GitHub 仓库](https://github.com/zhuchaoyi86-netizen/acg-anime-guide)

公开网页地址（GitHub Pages 开启后使用）：

- [GitHub Pages 网址](https://zhuchaoyi86-netizen.github.io/acg-anime-guide/)

如果这个网址暂时打不开，通常不是代码问题，而是 **GitHub Pages 还没有在仓库设置里正式启用**。下面写了完整步骤。

## 第一次让别人也能访问

这一步只需要做一次。

### 1. 打开 Pages 设置

进入：

- [Pages 设置页](https://github.com/zhuchaoyi86-netizen/acg-anime-guide/settings/pages)

### 2. 设置发布方式

在 `Build and deployment` 里：

- `Source` 选择 `GitHub Actions`

### 3. 重新运行自动发布

进入：

- [Actions 页面](https://github.com/zhuchaoyi86-netizen/acg-anime-guide/actions)

找到工作流：

- `Deploy GitHub Pages`

点进去后：

- 点击右上角 `Re-run jobs`
- 如果看到下拉，选 `Re-run all jobs`

### 4. 等待发布完成

当发布成功后，别人就可以直接打开：

- [https://zhuchaoyi86-netizen.github.io/acg-anime-guide/](https://zhuchaoyi86-netizen.github.io/acg-anime-guide/)

## 我自己怎么打开这个网站

你有两种打开方式。

### 方法一：本地预览

适合你在电脑上改完立刻看效果。

在项目目录打开终端后运行：

```bash
python3 -m http.server 4180
```

然后在浏览器打开：

- [http://localhost:4180/index.html](http://localhost:4180/index.html)

说明：

- `localhost` 只能你自己电脑访问
- 适合本地调试，不适合给别人发链接

### 方法二：公开网页

适合发给别人直接访问。

地址是：

- [https://zhuchaoyi86-netizen.github.io/acg-anime-guide/](https://zhuchaoyi86-netizen.github.io/acg-anime-guide/)

前提是你先按上面的步骤把 GitHub Pages 启用好。

## 后续怎么更新网站

以后你每次改完网页，只需要：

1. 修改本地文件
2. 本地打开网页检查效果
3. 提交到 GitHub
4. 等 GitHub 自动重新发布

### 常见要修改的文件

- [index.html](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/index.html)：页面结构
- [styles.css](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/styles.css)：页面样式
- [app.js](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/app.js)：交互逻辑、精选数据、筛选逻辑
- [anime-dataset.js](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/anime-dataset.js)：扩容后的大作品库

### 更新命令

如果你是在本地修改文件，更新网站常用流程是：

```bash
git add .
git commit -m "更新网站内容"
git push
```

推送完成后：

- GitHub Actions 会自动重新发布
- 稍等一两分钟再刷新公开网址即可

## 如果我只想小改文字，不想动终端

也可以直接在 GitHub 网页里改：

1. 打开仓库  
   [https://github.com/zhuchaoyi86-netizen/acg-anime-guide](https://github.com/zhuchaoyi86-netizen/acg-anime-guide)
2. 点开要修改的文件
3. 点击编辑按钮
4. 保存提交
5. 等 GitHub 自动发布

这种方式适合：

- 改 README
- 改页面文案
- 改一些简单配置

## 数据库怎么扩容或更新

当前大作品库文件是：

- [anime-dataset.js](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/anime-dataset.js)

生成脚本是：

- [fetch-anime-dataset.mjs](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/scripts/fetch-anime-dataset.mjs)

如果以后想重新抓取或继续扩容，可以运行：

```bash
node scripts/fetch-anime-dataset.mjs
```

跑完后记得再执行：

```bash
git add anime-dataset.js scripts/fetch-anime-dataset.mjs
git commit -m "更新动漫作品库"
git push
```

## 让更多人稳定使用，有什么要求

如果只是现在这种静态资料站，要求很低：

- 有 GitHub 仓库
- 开启 GitHub Pages
- 保持代码能正常发布

别人访问时不需要：

- 登录
- 安装软件
- 下载项目

只要能打开公开网址就能直接用。

## 项目结构

- `index.html`：页面结构
- `styles.css`：页面样式
- `app.js`：前端逻辑与站内精选数据
- `anime-dataset.js`：公开作品库数据
- `scripts/fetch-anime-dataset.mjs`：作品库抓取与生成脚本
- `assets/`：背景图等站点资源
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动发布配置

## 数据说明

- 站内扩容作品库基于 Jikan 公共接口生成
- 页面中的正版观看入口以各平台实时搜索结果为准
- 角色榜为站内整理结果，并附日本站点参考入口

## 开源协议

本项目采用 `MIT License`。
