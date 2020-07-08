---
title: OWL Carousel2
tags:
  - jQuery插件
  - jQuery轮播图
  - OWL Carousel2
categories:
  - 文档
  - jQuery
copyright: true
abbrlink: 13606
date: 2020-05-24 09:34:07
top:
---
Owl Carousel 是一个强大、实用但小巧的 jQuery 幻灯片插件，它具有一下特点：

* 兼容所有浏览器
* 支持响应式
* 支持 CSS3 过度
* 支持触摸事件
* 支持 JSON 及自定义 JSON 格式
* 支持进度条
* 支持自定义事件
* 支持延迟加载
* 支持自适应高度

Owl Carousel 提供了众多的参数、回调函数及自定义事件（具体请往下浏览），所以它几乎可以满足你的所有要求。

<!-- more -->

|属性|类型|默认值|作用|
|-|-|-|-|
|items|Number|3|您想要在屏幕上看到的项目数。|
|margin|Number|0|项目上的margin-right（px）。|
|loop|Boolean|false|无限循环。复制最后一个和第一个项目以获得循环幻觉。|
|center|Boolean|false|中心项。适用于偶数个项目。|
|mouseDrag|Boolean|true|启用鼠标拖动。|
|touchDrag|Boolean|true|触摸拖动已启用|
|pullDrag|Boolean|true|舞台拉到边缘。|
|freeDrag|Boolean|false|项目拉到边缘。|
|stagePadding|Number|0|在舞台上左右滑动（可以看到邻居）。|
|merge|Boolean|false|合并项目。在项目内寻找data-merge ='{number}'。|
|mergeFit|Boolean|true|如果屏幕小于项目值，则适合合并的项目。|
|autoWidth|Boolean|false|设置非网格内容。尝试在div上使用宽度样式。|
|startPosition|Number/String|0|起始位置或URL哈希字符串，例如“ #id”。|
|URLhashListener|Boolean|false|监听网址哈希更改。项上的数据哈希是必需的。|
|nav|Boolean|false|显示下一个/上一个按钮。|
|rewind|Boolean|true|到达边界后向后走。|
|navText|Array|[&#x27;next&#x27;,&#x27;prev&#x27;]|允许HTML。|
|navElement|String|div|单个方向导航链接的DOM元素类型。|
|slideBy|Number/String|1|导航幻灯片x。可以将“page”字符串设置为逐页滑动。|
|slideTransition|String|``|您可以定义要使用的阶段的过渡，例如。线性的。|
|dots|Boolean|true|显示点导航。|
|dotsEach|Number/Boolean|false|每个x项目显示点。|
|dotsData|Boolean|false|由数据点内容使用。|
|lazyLoad|Boolean|false|延迟加载图像。data-src和data-src-retina用于高分辨率。如果元素不是<img>，也将图像加载为背景内联样式|
|lazyLoadEager|Number|0|根据要预加载的项目，将图像预先正确地预加载到右侧（启用循环时向左加载）。|
|autoplay|Boolean|false|自动播放。|
|autoplayTimeout|Number|5000|自动播放间隔超时。|
|autoplayHoverPause|Boolean|false|鼠标悬停时暂停。|
|smartSpeed|Number|250|速度计算。|
|fluidSpeed|Boolean|Number|速度计算|
|autoplaySpeed|Number/Boolean|false|自动播放速度。|
|navSpeed|Number/Boolean|false|导航速度。|
|dotsSpeed|Boolean|Number/Boolean|分页速度。|
|dragEndSpeed|Number/Boolean|false|拖动结束速度。|
|callbacks|Boolean|true|启用回调事件。|
|responsive|Object|empty object|包含响应选项的对象。可以设置为false以删除响应功能。|
|responsiveRefreshRate|Number|200|响应刷新率。|
|responsiveBaseElement|DOM element|window|在任何DOM元素上设置。如果您关心无响应的浏览器（例如ie8），请在主包装器上使用它。这将防止疯狂调整大小|
|video|Boolean|false|启用提取YouTube / Vimeo / Vzaar视频的功能。|
|videoHeight|Number/Boolean|false|设置视频的高度。|
|videoWidth|Number/Boolean|false|设置视频的宽度。|
|animateOut|String/Boolean|false|CSS3动画类。|
|animateIn|String/Boolean|false|输入CSS3动画的类。|
|fallbackEasing|String|swing|简化CSS2 $ .animate。|
|info|Function|false|回调以获取基本信息（当前项目/页面/宽度）。信息功能的第二个参数是Owl DOM对象引用。|
|nestedItemSelector|String/Class|false|如果猫头鹰项目深深嵌套在某些生成的内容中，请使用它。例如“ youritem”。在类名之前不要使用点号。|
|itemElement|String|div|用于owl-item的DOM元素类型。|
|stageElement|String|div|用于owl-item的DOM元素类型。|
|navContainer|String/Class/ID/Boolean|false|为nav设置自己的容器。|
|dotsContainer|String/Class/ID/Boolean|false|为nav设置自己的容器。|
|checkVisible|Boolean|true|如果您知道轮播总是可见的，则可以将checkVisibility设置为false，以防止昂贵的浏览器布局强制回流$ element.is（'：visible'）。|
|||||







[OWL Carousel2官方文档](https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html)