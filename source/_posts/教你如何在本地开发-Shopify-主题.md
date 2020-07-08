---
title: 教你如何在本地开发 Shopify 主题
tags:
  - 开发技巧
  - Shopify本地开发
categories:
  - Shopify
copyright: true
abbrlink: 37643
date: 2020-07-05 13:51:43
top:
---

我们在开发  Shopify 主题的时候，常常是在官方的线上编辑器上进行修改代码的，这样的编辑效果不是很好（不能格式化、不能智能提示），而且对于我们想使用自己喜欢的编辑器来编辑的人来说，很是不舒服，那么有没有什么方法可以实现在本地编辑器上进行开发呢？接下来就让我们在本地配置一下环境。

<!-- more -->
### 下载 Shopify 主题套件

[win10-64](https://shopify-themekit.s3.amazonaws.com/v1.0.2/windows-amd64/theme.exe)<br/>
如果下载速度较慢，也可以下载我百度网盘里的
[https://pan.baidu.com/s/1YMQ2adpGaBpiwDCYCvoPSA](https://pan.baidu.com/s/1YMQ2adpGaBpiwDCYCvoPSA )提取码：pt8g

下载完成后，创建一个 Theme Kit 文件夹，将程序复制到文件夹中，然后将路径（D:\DevelopmentTool\Theme Kit）添加到 环境变量（Path）中

完成后 打开 cmd.exe 并输入 theme

### 创建自定义 应用程序

创建一个自定义应用程序 设置 Theme templates and theme assets  为 Read and write 
得到 密码后 ，复制下来，保存到一个文件里


### 下载主题模板

1. 查看模板ID

```
theme new --password=[your-password] --store=[your-store.myshopify.com] --name=[theme name]
```
记住主题 ID

创建一个文件夹，这将是存放你主题文件的项目模板，然后执行
```
theme get -p=[your-password] -s=[you-store.myshopify.com] -t=[your-theme-id]
```

### 常用命令

下载配置文件中的主题

```
theme download
```
打开将在浏览器中打开主题的预览页面，并打印出URL供您参考

```
theme open
```
Watch将启动一个过程，该过程将监视您的目录中的更改并将其上载到Shopify。任何更改将被记录到终端，并且上传状态也将被记录。只需输入ctrl + C即可停止该程序

```
theme watch
```