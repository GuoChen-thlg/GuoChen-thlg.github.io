---
title: webpack（2）
tags:
  - webpack
  - 开发服务器
categories:
  - webpack
copyright: true
abbrlink: 16618
date: 2020-04-11 15:07:29
top:
---
如何配置 webpack 转化器， webpack 插件， webpack 开发服务器呢，下面，接着来学习......

<!-- more -->
## webpack 转化器

> loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。例如：less、sass等loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。use 属性，表示进行转换时，应该使用哪个 loader。

* 例1 若要引用 css 样式，则要配置相应的配置
1. 安装 style-loader css-loader
```
npm install style-loader css-loader 
```
2. 在 module 下配置
```js
module: {// loladers 遵循module.rules规则
    rules: [// 规则
        {// 样式
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
```
* 例2  引用图片
1. 安装 url-lolader file-loader
```
npm install url-lolader file-loader
```
2. 在 module 下配置
```js
module: {// loladers 遵循module.rules规则
        rules: [// 规则
            {// 图片
                test: /\.(gif|png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,// 限制文件大小 500kb
                    }
                }]
            }
        ]
    }
```


## webpack 插件

> loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。

* 配置模板，合并文件
1. 安装 html-webpack-plugin
```
npm install html-webpack-plugin 
```
2. 配置
引入
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
```
在 plugins 下添加如下配置
```js
new HtmlWebpackPlugin({
        filename: 'index.html',// 打包后的文件名字
        chunks: ['index'],// 引入的文件,对应 entry 中的名字
        title: '我是指定的标题',
        template: './src/index.html',
        hash: true,// 防止浏览器缓存
        minify: {//压缩 html "" ''
            collapseWhitespace: true,// 折叠构成文档tr中的文本节点的空白
            removeAttributeQuotes: true,// 删除属性周围的引号
        }
    })
```
* 为了避免每次手动删除 dist 文件夹  安装 clean-webpack-plugin 插件
1. 安装
```
npm install clean-webpack-plugin
```
2. 配置
引入
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
```
在 plugins 下添加如下配置
```js
new CleanWebpackPlugin()// 删除 dist 文件夹
```
* 如果有静态文件，该怎么输出到 public 文件夹呢？可以安装 copy-webpack-plugin
1. 安装 
```
npm install copy-webpack-plugin
```
2. 配置
```js
const CopyWebpackPlugin = require('copy-webpack-plugin')
```
```js
new CopyWebpackPlugin([// 静态资源输出
        {
            from: path.relative(__dirname, 'src/assets/'),
            to: '../public'
        }
    ])
```

## webpack 开发服务器


* 开发服务器的配置如下
```js
devServer: {// 开发服务器
    contentBase: path.join(__dirname, "dist"), //设置服务器访问的基本目录
    host: 'localhost', //服务器地址，localhost
    port: 9000,//端口号，如果deserver的配置没问题，但是项目启动失败了，需要注意该端口号是否被占用
    compress: true,//一切服务都启用 gzip 压缩
    open: true,//浏览器自动打开
    //hot:true,//webpack4之前的版本的配置：热更新，4以后被弱化不需要被配置会自动刷新
}
```
官网地址：https://www.webpackjs.com/configuration/dev-server/#devserver