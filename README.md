# acgnavi 动漫追番资料站

`acgnavi` 是一个面向普通读者的动漫资料站。

它不是开发者工具站，也不是只给熟悉 GitHub 的人用的项目页。你可以把它理解成一个可以直接打开、直接搜番、直接看追番顺序、直接跳转平台的 ACG 导航站。

## 这个网站能做什么

- 看 3000+ 动漫作品资料
- 按题材、类型、年代、来源、评分快速筛选
- 参考系列追番顺序
- 看角色人气榜
- 直接跳到哔哩哔哩、腾讯视频、爱奇艺、优酷等平台搜索
- 在不翻墙的情况下完成大部分站内使用

## 普通读者怎么打开

公开网址：

- [https://zhuchaoyi86-netizen.github.io/acg-anime-guide/](https://zhuchaoyi86-netizen.github.io/acg-anime-guide/)

如果你想让国内访问更稳，建议同时准备一个 `Gitee Pages` 镜像站。
这个仓库已经附带了同步工作流模板：

- [/.github/workflows/sync-gitee.yml](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/.github/workflows/sync-gitee.yml)

你只需要把上面这个链接发给别人，对方直接在浏览器打开就能用。

不需要：

- 登录
- 安装软件
- 下载项目
- 懂 GitHub

## 这个网站现在的使用方式

### 1. 首页快速筛选

首页上方可以直接筛：

- 类型
- 心情
- 年代
- 来源
- 评分
- 排序方式

适合刚进站先缩小范围。

### 2. 左侧看快速分类

左侧不是装饰，它会根据当前筛选状态动态显示可用分类。

你可以按：

- 题材
- 制作社
- 创作者
- 出版社

来继续缩小作品范围。

### 3. 看系列追番顺序

`入门路线` 目前是按系列顺序整理的，不是泛泛推荐。

例如：

- Fate 系列
- EVA 系列
- 高达入门
- JOJO 系列
- 科学 ADV
- 物语系列

### 4. 打开作品详情

点击作品卡片里的按钮后，可以看到：

- 简介
- 标签
- 主要人物
- 资料入口
- 平台搜索入口

### 5. 不翻墙也能怎么用

这个版本已经把默认体验改成了“国内网络优先”：

- 站内核心数据以本地资料库为主
- 近期热门新番改为站内整理，不再依赖国外接口实时拉取
- 平台跳转优先使用国内可访问入口
- 资料入口优先使用 Bangumi、萌娘百科、百度百科

也就是说，即使不翻墙，站内浏览、筛选、追番规划、平台跳转这几件事都可以正常完成。

这次更新还额外做了两件事：

- 首页热门区和默认分类改成了“热门优先”
- 常用海报和图标改为项目内置，本地优先加载，减少外部资源失效

## 我自己怎么在电脑上打开最新版

如果你是这个项目的维护者，想先在自己电脑上看效果，可以用本地预览：

1. 在项目目录启动本地预览
2. 浏览器打开：

- [http://localhost:4180/index.html](http://localhost:4180/index.html)

这是本地地址，只能你自己电脑访问。

## 我怎么更新网站内容

如果你只是想继续维护这个站，最常见的更新文件是：

- [index.html](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/index.html)
- [styles.css](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/styles.css)
- [app.js](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/app.js)
- [anime-dataset.js](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/anime-dataset.js)

### 更新流程

1. 先改本地文件
2. 先在本地预览里检查
3. 再把改动推到 GitHub
4. GitHub Pages 会自动发布
5. 等 1 到 3 分钟后刷新公开网址

如果你还准备了 Gitee Pages：

6. 在 GitHub 仓库里配置 `GITEE_USERNAME`、`GITEE_REPO`、`GITEE_SSH_KEY`
7. 每次推送到 `main` 后，会自动同步到 Gitee 镜像仓库
8. 再从 Gitee Pages 提供一个国内入口给访客使用

如果你已经熟悉 Git，可以用这套最常见流程：

```bash
git add .
git commit -m "更新网站内容"
git push
```

## 如果我只想改一点文案

也可以直接在 GitHub 网页里改：

1. 打开仓库  
   [https://github.com/zhuchaoyi86-netizen/acg-anime-guide](https://github.com/zhuchaoyi86-netizen/acg-anime-guide)
2. 点开要修改的文件
3. 直接编辑
4. 保存提交
5. 等自动发布完成

## 作品库怎么扩容

当前大作品库文件：

- [anime-dataset.js](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/anime-dataset.js)

生成脚本：

- [scripts/fetch-anime-dataset.mjs](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/scripts/fetch-anime-dataset.mjs)

如果后续你还想继续扩容，可以重新生成作品库，然后把新数据一起发布。

## 这个项目适合谁

适合：

- 想快速找番的人
- 想整理追番顺序的人
- 想做自己的 ACG 导航站的人
- 想把动漫资料页公开给朋友一起用的人

## 项目结构

- `index.html`：页面结构
- `styles.css`：页面样式
- `app.js`：前端逻辑和精选资料
- `anime-dataset.js`：扩容后的作品库
- `scripts/fetch-anime-dataset.mjs`：生成作品库的脚本
- `assets/`：图片资源
- `assets/posters/`：本地缓存的热门海报
- `assets/lucide.min.js`：本地图标脚本
- `.github/workflows/deploy-pages.yml`：自动发布配置
- `.github/workflows/sync-gitee.yml`：同步到 Gitee 的模板

## 仓库说明

如果你决定继续作为个人站维护，建议把 GitHub 仓库设成私有仓库，只保留网站对外访问。

这样别人仍然可以通过公开网址使用网站，但看不到你的源码仓库。
