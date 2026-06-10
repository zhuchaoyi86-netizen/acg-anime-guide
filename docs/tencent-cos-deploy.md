# 腾讯云 COS 国内发布说明

这份说明对应当前仓库里的自动发布模板：

- [/.github/workflows/deploy-tencent-cos.yml](/Users/xinxinhuashe/Documents/二次元动漫检索推荐网页/.github/workflows/deploy-tencent-cos.yml)

目标效果：

- 继续保留 GitHub 仓库和 GitHub Pages
- 额外获得一个国内可访问的腾讯云静态网站地址
- 以后每次推送 `main`，GitHub Actions 会自动把站点同步到腾讯云 COS

## 先说当前状态

我已经帮你完成这些准备：

- 项目已经支持生成发布目录 `dist/`
- GitHub Actions 已经有腾讯云 COS 自动发布模板
- Gitee 镜像仓库已经建立好，可继续作为国内代码镜像

你现在还需要自己完成的，是腾讯云账号侧的 4 个动作：

1. 登录腾讯云
2. 开通 COS
3. 创建一个存储桶
4. 生成 API 密钥并填进 GitHub Secrets

## 第一步：登录腾讯云

打开：

- [腾讯云 COS 控制台](https://console.cloud.tencent.com/cos)

如果页面要求登录：

- 可以用微信、QQ、邮箱等方式登录

如果页面提示未实名或未开通服务：

- 按腾讯云页面提示完成实名认证和 COS 开通

## 第二步：创建 COS 存储桶

进入 COS 后，新建一个存储桶。

建议这样填：

- 存储桶名称：`acg-anime-guide`
- 所属地域：选择离你访问人群更近的大陆地域，例如 `ap-guangzhou`、`ap-shanghai` 或 `ap-beijing`
- 访问权限：公有读私有写

注意：

- 腾讯云实际存储桶名通常会带上账号 `APPID`
- 你最后在 GitHub Secret 里填写的 `COS_BUCKET`，要用控制台里显示的完整存储桶名
- 常见格式会像 `acg-anime-guide-125xxxxxxx`

## 第三步：开启静态网站

在刚创建的存储桶里，找到静态网站设置并开启。

建议这样填：

- 索引文档：`index.html`
- 错误文档：`index.html`

这样做的好处是：

- 首页可以直接打开
- 以后如果你做单页路由，也不容易直接 404

开启后，腾讯云会给你一个静态网站访问地址。

如果你只是先要一个能访问的网址：

- 先记下这个地址即可

如果你后面想更稳定、更好记：

- 再绑定你自己的域名

## 第四步：创建 API 密钥

打开腾讯云 API 密钥管理页面，创建一组密钥。

你需要拿到：

- `SecretId`
- `SecretKey`

注意：

- `SecretKey` 只会展示一次，创建后就保存好
- 不要把这两个值直接写进项目文件里

## 第五步：把 4 个参数填进 GitHub Secrets

打开你的 GitHub 仓库：

- [https://github.com/zhuchaoyi86-netizen/acg-anime-guide](https://github.com/zhuchaoyi86-netizen/acg-anime-guide)

进入：

- `Settings`
- `Secrets and variables`
- `Actions`

新增这 4 个 Repository secrets：

- `COS_SECRET_ID`：填你的腾讯云 `SecretId`
- `COS_SECRET_KEY`：填你的腾讯云 `SecretKey`
- `COS_BUCKET`：填完整存储桶名，例如 `acg-anime-guide-125xxxxxxx`
- `COS_REGION`：填地域代码，例如 `ap-guangzhou`

## 第六步：触发自动发布

只要这 4 个 Secrets 填好，后面两种方式都可以发布：

1. 你继续正常修改项目并推送到 `main`
2. 去 GitHub Actions 手动运行 `Deploy To Tencent COS`

工作流会自动做这些事：

- 生成 `dist/`
- 把 `dist/` 里的静态文件上传到 COS
- 删除 COS 里旧的多余文件，保持线上内容和仓库一致

## 第七步：把国内网址发给别人

发布成功后，你可以对外使用两种地址：

1. COS 提供的静态网站地址
2. 你后面绑定的自定义域名

如果只是先求能打开：

- 直接用 COS 静态网站地址就够了

如果你想更稳定、也更像正式网站：

- 建议后面再绑定一个自己的域名

## 常见问题

### 1. 为什么我现在还没直接帮你发布成功？

因为我已经帮你把仓库和自动发布流程准备好了，但腾讯云这一步当前卡在账号登录页面。

我实际检查到的状态是：

- 打开 COS 控制台后，页面进入了腾讯云登录页
- 还没有进入你的 COS 控制台

也就是说，接下来只要你先登录腾讯云，我就能继续把控制台里剩下的步骤往前推。

### 2. 地域怎么选？

优先选大陆地域，离主要访客近就行。

常见可选：

- `ap-guangzhou`
- `ap-shanghai`
- `ap-beijing`

### 3. GitHub Pages 还保留吗？

保留。

现在会变成双通道：

- 国外或代理环境：GitHub Pages
- 国内访问：腾讯云 COS 静态网站

## 官方参考

我核对过当前腾讯云官方文档，相关入口如下：

- [托管静态网站](https://cloud.tencent.com/document/product/436/9512)
- [设置静态网站](https://cloud.tencent.com/document/product/436/32670)
- [主账号访问密钥管理](https://cloud.tencent.com/document/product/598/40488)
- [存储桶切换自定义域名](https://cloud.tencent.com/document/product/436/102509)
