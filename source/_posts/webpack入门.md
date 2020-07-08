---
title: webpack入门
tags:
  - webpack
  - 入门
categories:
  - webpack
copyright: true
abbrlink: 23985
date: 2020-03-30 12:36:41
top:
---
webpack 是基于Node.js开发出来的一个前端项目构建工具。可以看做是模块打包机（bundler），通过分析项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Sass/less（css预处理器），TypeScript等），并将其打包为合适的格式以供浏览器使用。

<!-- more -->

## 为什么使用 webpack 

1. 解决 JavaScript 和 CSS 的依赖问题
  * 文件加载顺序的问题会造成 css 没作用或 js 中变量和方法找不到
2. 性能优化
  * 文件合并
  * 文件压缩
3. 提高开发效率 
  * 单元测试  
  * vebdor 前缀
  * 代码分析
4. 版本升级

## webpack 的作用

1. 将sass/less 等预编译的css语言转换成浏览器识别的css文件
2. 能够将多个预编译文件打包成一个文件
3. 打包image/styles/assets/scrips/等前端常用的文件
4. 搭建开发环境开启服务器
5. 监视文件改动，热部署。
6. 将单文件组件(*.vue)类型的文件，转化成浏览器识别的内容

## 使用 webpack 搭建项目

1. 首先新建一个项目目录 domewebpack<br/>
在终端进入该目录,初始化项目
```
npm init -y
```

2. 安装 `webpack` & `webpack-cli`
```
npm i webpack webpack-cli -D
```
3. 创建文件
在项目根目录下创建 src 文件夹（放置入口文件的地方，源码也放在这里）
在项目根目录下创建 dist 文件夹（出口文件方式的地方）

4. 创建dist/index.html文件,包含id=root的元素，引入bundle.js
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="bundle.js"></script>
</body>
</html>
```
5. 创建src/index.js，里面给root元素设置innerhtml
```js
document.getElementById('root').innerHTML='webpack项目'
```
6. 在项目根目录下创建 webpack.config.js 文件
```js
let path = require('path')
module.exports = {
    mode: 'development',// 发布版：production 开发板：development
    entry: {// 入口
        entryKey: './src/index.js',// entryKey 是自定义的
    },
    // module: {// loladers 遵循module.rules规则
    
    // },
    // plugins: [

    // ],
    output: {// 出口
        filename: 'bundle.js',// 打包后的文件名 filename是固定的
        path: path.resolve(__dirname, 'dist'),// 路径必须是绝对路径
    },
    // devServer: {// 开发服务器

    // }
}
```
7. 在 package.json 文件 scripts 下配置 `"biuild": "npx webpack --config webpack.config.js"`
```
"scripts": {
    "biuild": "npx webpack --config webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
8. 在终端运行打包命令 
```
npm run build
```
在浏览器打开 index.html 就可以看到 已经打印出 `webpack项目` 字体了。