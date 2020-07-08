---
title: shopify 自定义应用开发
tags:
  - shopify
  - next.js
  - node.js
categories:
  - 开发
copyright: true
abbrlink: 15100
date: 2020-06-13 19:36:18
top:
---

公司要求开发一个 shopify 嵌入式应用，说实话，实在是有些坎坷，主要是英文文档😭😭，在这里自己做下记录。
Shopify Inc.是加拿大的一家跨国电子商务公司.Shopify为在线零售商提供一整套服务“包括支付、市场营销、运输和客户契合工具，以简化小型商户开设在线商店的过程
<!-- more -->

### 准备 

在开发之前呢，首先你需要准备一个 `开发者账号`。 [创建一个 Shopify 合作伙伴账户](https://partners.shopify.com/signup)

官方推荐使用 React Next 作为渲染框架 node 作为服务器后端开发 使用 GraphQL Apollo 作为查询语言 使用 Polaris 作为 UI组件库

### 首先要确保自己安装了 Node.js

运行一下命令 检查 node 版本
```
node -v
```
如果已经安装，请确保您使用的是8.1.0或更高版本。

### 创建项目文件夹

创建文件夹 shopify_app

进入到项目文件夹
```
cd shopify_app
```
### 初始化项目

```
npm init -y
```
### 使用 Next.js 构建 React 支架

安装 Next React ReactDOM

```
npm install react react-dom next --save
```
在根目录中创建 pages 文件夹
在 pages 文件夹中添加 index.js

```js
const Index = () => (
  <div>
    <p>Sample app using React and Next.js</p>
  </div>
);

export default Index;
```

修改 package.json 文件

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```
#### 运行项目

```
npm run dev
```

### 将应用嵌入 Shopify

安装 ngrok koa @shopify/koa-shopify-auth dotenv koa-session isomorphic-fetch @zeit/next-css @shopify/polaris @shopify/app-bridge-react js-cookie

```
npm install ngrok -g
npm install koa @shopify/koa-shopify-auth dotenv koa-session isomorphic-fetch --save
```
运行 
```
ngrok http 3000
```

#### 获取 shopifyAPI秘钥 和 shopifyAPI秘密秘钥

通过登录 [Shopify 合作伙伴账户](https://partners.shopify.com/signup) 创建一个应用程序
获取。您可以创建： 公共应用程序 自定义应用程序 私人应用程序 
这里我们创建 自定义应用程序

在 `应用程序URL` 中填入  ngrok转发URL的HTTPS版本
将相同的HTTPS转发URL粘贴到 `列入白名单的重定向URL` 字段中，并将 /auth/ allback 添加到路径的末尾
然后 创建应用

然后在根目录创建 .env 文件

```txt
SHOPIFY_API_KEY = '您的来自SHOPIFY PARTNERS仪表板的API密钥' 
SHOPIFY_API_SECRET_KEY = '您的来自SHOPIFY PARTNERS仪表板的API密钥'
```

#### 设置 Node.js 服务器 OAuth 授权认证

在项目根目录中 创建 server.js 文件

```js
require('isomorphic-fetch')
const dotenv = require('dotenv')
const Koa = require('koa')
const next = require('next')
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const session = require('koa-session')
dotenv.config()
// graphql的相关中间件
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy')
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env // 环境变量里读取 api-key与api-secret-key

app.prepare().then(() => {
    const server = new Koa()
    server.use(session(server))
    server.keys = [SHOPIFY_API_SECRET_KEY]
    server.use(
        createShopifyAuth({
        apiKey: SHOPIFY_API_KEY,
            secret: SHOPIFY_API_SECRET_KEY,
            scopes: ['read_products', 'write_products','read_orders'], //填写相关应用api相关请求的权限
            afterAuth (ctx) {
                const { shop, accessToken } = ctx.session // 通过session拿取相关商店地址以及请求api需要的accessToken
                ctx.cookies.set('shopOrigin', shop, { httpOnly: false })
                ctx.redirect('/') // 重定向到index首页
            }
        })
    )

    server.use(verifyRequest())
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
        ctx.res.statusCode = 200
        return
    })

    server.use(graphQLProxy({ version: ApiVersion.October19 })) // 这里填写相关api的版本
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`) // 监听端口
    })
})
```

修改 package.json 文件
```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

然后启动项目 将应用安装到自己的测试商店 就可以看到自己的应用已经成功运行了！

Shopify 官方文档
[Shopify developers](https://shopify.dev/concepts/shopify-introduction)