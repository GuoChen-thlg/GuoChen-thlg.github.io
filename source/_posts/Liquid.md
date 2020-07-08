---
title: Liquid
tags:
  - Shopify
  - Liquid
categories:
  - 文档
  - Liquid
copyright: true
abbrlink: 22647
date: 2020-06-16 19:01:48
top:
---
开发 Shopify 商店，首先要熟悉 Liquid 的语法。Liquid 由 Shopify 创造并用 Ruby 实现。
<!-- more -->

## 基础

### 操作符
|||
|--|--|
|==	|相等		|
|!=	|不相等		|
|>	|大于		|
|<	|小于		|
|>=	|大于或等于	|
|<=	|小于或等于	|
|or	|逻辑或		|
|and|逻辑与		|


### 数据类型

* Stting
* Number
* Bootlean
  - 除了 nil false 其余全都为 真
* Nil
* Array
	
## 标签

### 注释

```
{% comment %}

{% endcomment %}
```

### 控制流

#### if
``` 
{% if  true %}

{% endif %}
```
如果为真就执行

#### unless
``` 
{% unless %}

{% endunless %}
```
若为假就执行

#### elsif / else
``` 
{% elsif %}

{% else %}
```
否则 如果

否则
#### case/when
``` 
{% case 变量 %}
...
{% when '' %}
...
{% when '' %}
...
{% else %}
...
{% endcase %}
```
类似于 switch


### 迭代/循环


* break
 - 循环过程中若干遇到 break 标记（tag）即停止循环
* continue
 - 循环过程中若遇到 continue 标记（tag）则跳出当前循环
* limit  limit:5
 - 限定循环执行的次数
* offset offsetv:5
 - 从指定索引号开始执行循环。
* range (1..5)
 - 定义循环执行的范围。可利用数字或变量来定义此执行范围
```
{% for i in (3..5) %}
  {{ i }}
{% endfor %}
{% assign num = 4 %}
{% for i in (1..num) %}
  {{ i }}
{% endfor %}
```

* reversed
 - 反转循环的执行顺序。注意和 reverse 过滤器（filter）的拼写是不同的
```
{% cycle 'one', 'two', 'three' %}
```

将 cycle 代码块放入 for 循环中 每次执行都会输出参数中的下一个

* tablerow
 - 生成一个 HTML 表格。必须用 <table> 和 </table> 这两个 HTML 标签将其包裹起来
 - cols 定义表格应当有多少列
 - limit 在执行到指定的脚标（index）之后退出 tablerow
 - offset 在指定的脚标（index）之后开始执行 tablerow
 - range 定义循环执行的范围。可利用数字和变量来定义执行范围
```
<table>
{% tablerow product in collection.products %}
  {{ product.title }}
{% endtablerow %}
</table>
```


### 声明变量 
#### assign 声明
``` 
{% assign 变量='' %} 

```
#### capture 声明
```
{% capture 变量 %}
I am being captured.
{% endcapture %}
```
#### increment 声明数值变量 0

每次调用此变量 值 加1
初始值为 0
```
{% increment my_counter %}
{% increment my_counter %}
{% increment my_counter %}
```
```
0
1
2
```
#### decrement 声明数值变量 -1

每次调用此变量 值 减1
初始值为 -1



### 原始内容


```
{% raw %}
  In Handlebars, {{ this }} will be HTML-escaped, but
  {{{ that }}} will not.
{% endraw %}
```
对代码块中的内容 不做任何处理


## 过滤器

### abs 绝对值

输入
```
{{-8 | abs}}
{{8 | abs}}
```
输出
```
8 
8
```

### append 追加字符串

输入
```
{{"hello" | append: ' word'}}
```
输出
```
hello word
```
### prepend 在字符前追加

输入
```
{{ "word" | prepend: 'hello '}}
```
输出
```
hello word
```
### at_least 限制数字最小值

输入
```
{{ 5 | at_least:6}}
{{ 7 | at_least:6}}
```
输出
```
6
7
```
### at_most 限制数字最大值

输入
```
{{ 5 | at_most:6}}
{{ 7 | at_most:6}}
```
输出
```
5
6
```
### capitalize 首字母大写

输入
```
{{"text" | capitalize}}
```
输出
```
Text
```
### ceil 将浮点数向上取整

输入
```
 {{3.1415926 | ceil}}
```
输出
```
4
```
### floor 浮点数详向下取整

输入
```
 {{9.9 | floor}}
```
输出
```
9
```
### round 四舍五入 保留 * 位小数

输入
```
{{1.4 | round}}
{{1.5 | round}}
{{3.1415926 | round: 3}}
```
输出
```
1
2
3.142
```

### compact 删除数组中所有 nil 值

输入
```

```
输出
```

```
### uniq 删除数组中所有 冗余项

输入
```
{{"1,2,3,4,5,6,8,5,4,2,3,1,7,9,5" | split: ',' | uniq}}
```
输出
```
1,2,3,4,5,6,8,7,9
```
### concat 合并数组

输入
```
{%- assign array1 = "a,b,c"| split: ',' -%}
{%- assign array2 = "d,e,f"| split: ',' -%}
{%- assign array = array1 | concat: array2 -%}
{%- for item in array |compact-%}
  <div>{{item}}</div>
{%- endfor -%}
```
输出
```
a
b
c
d
e
f
```
### date 转换时间格式

* %Y 年
* %y 年（后两位）
* %m 月
* %b 月（英文单词）
* %h 月（英文单词）
* %d 日
* %H 时
* %M 分
* %S 秒
* %s 时间戳
* %a 星期
* %A 星期（全）

输入
```
{{"now" |date:"%Y-%m-%d %H:%M"}}
{{"today" |date:"%Y-%m-%d %H:%M"}}

```
输出
```
2020-05-03 11:56
2020-05-03 11:56
```
### default 默认值
当变量未定义或为空时，输出默认值
输入
```
{{nub |default:555 }}
```
输出
```
555
```

输入
```
{%- assign nub = 666 -%}
{{nub |default:555 }}
```
输出
```
666
```
### plus 将两数相加

输入
```
{{ 5 | plus: 6}}
```
输出
```
11
```

### minus 将两数相减

输入
```
{{ 8 | minus: 5}}
```
输出
```
3
```
### times 将两数相乘

输入
```
{{8   | times: 6}}
```
输出
```
48
```

### divided_by 将两数相除

输入
```
{{17 | divided_by: 4}}
{{17 | divided_by: 4.0}}
```
输出
```
4.25
4.25
```
### modulo 求余

输入
```
{{ 10 | modulo:6}}
```
输出
```
1
```

### downcase 将字符串转为小写

输入
```
{{"ABCDEFG" | downcase }}
```
输出
```
abcdefg
```
### upcase 将字符串转为大写

输入
```
{{"abcdefg" | upcase }}
```
输出
```
ABCDEFG
```
### first 输出数组第一项

输入
```
{% assign array = "1,2,3,4,5,6"  | split: ',' %}
{{array|first }}
{{array.first }}
```
输出
```

```
### join 将数组连接成字符串 

参数为连接符

输入
```
{% assign array = "a,b,c,d,e,f,g" | split: ',' %}
{{array | join: '-'}}
```
输出
```
a-b-c-d-e-f-g
```
### lstrip  删除字符左侧 空格 制表符 换行符

输入
```
{{"                s  t r i n g            " | lstrip}}
```
输出
```
s t r i n g
```
### rstrip  删除字符右侧 空格 制表符 换行符

输入
```
{{"                s  t r i n g            " | rstrip}}
```
输出
```
                s  t r i n g
```
### strip 删除字符串两侧 空格 制表符 换行符
输入
```
{{"                s  t r i n g            " | rstrip}}
```
输出
```
t r i n g
```
### strip_html 删除字符串内 html 标签

输入
```
Have you read Ulysses?
```
输出
```

```
### strip_newlines 删除字符串内 换行 字符

输入
```
{% capture string %}
Hello
there
{% endcapture %}
{{string | strip_newlines }}
```
输出
```
Hellothere
```
### newline_to_br 将换行符转为 <br/>

输入
```
{% capture string %}
Hello
there
{% endcapture %}
{{string | newline_to_br}}
```
输出
```
<br/>
Hello<br/>
there<br/>
```
### remove 删除字符串中出现的 子字符

输入
```
{{ "abcdefg" | remove: 'cd'}}
```
输出
```
abefg
```
### remove_first 删除第一个匹配到的 子字符

输入
```
{{ "abcdcdefg" | remove_first: 'cd'}}
```
输出
```
abcdefg
```
### replace 替换字符
找到字符并替换掉

输入
```
{{ "abcdcdefg" | replace: 'c', 'd'}}
```
输出
```
abddddefg
```
### replace_first 替换字符

将字符串中出现的第一个参数替换为第二个参数
输入
```
{{ "abcdcdefg" | replace_first: 'c', 'd'}}
```
输出
```
abddcdefg
```
### reverse 翻转数组

输入
```
{% assign array = "1,2,3,4,5,6" | split: ',' %}
{{array | reverse }}
```
输出
```
6, 5, 4, 3, 2, 1
```
### size 字符长度 大小

输入
```
{{"s t r i n g" |  size}}
{% assign str = "s t r i n g" %}
{{str.size}
```
输出
```
11
11
```
### slice 截取字符串

输入
```
{{"123456"  | slice: 0}}
{{"123456"  | slice: 2,2}}
{{"123456"  | slice: -1}}
```
输出
```
1
34
6
```
### sort 排序 按照字母大小写
 区分大小写
输入
```
{%- assign array = "a,f,r,S,d,g,O,y" | split: ',' -%}
{{-array| sort-}}
```
输出
```
O,S,a,d,f,g,r,y
```
### sort_natural  排序 不按照字母大小写
不区分大小写
输入
```
{%- assign array = "a,f,r,S,d,g,O,y" | split: ',' -%}
{{-array| sort_natural -}}
```
输出
```
a,d,f,g,O,r,S,y
```
### split 分割字符串为数组

输入
```
{%- assign array = "a,f,r,S,d,g,O,y" | split: ',' -%}
{{array}}
```
输出
```
a,f,r,S,d,g,O,y
```
### truncate 裁剪字符串（字符个数） 省略号

输入
```
{{"abcdefghijk" | truncate: 8}}
{{"abcdefghijk" | truncate: 8,'...'}}
{{"abcdefghijk" | truncate: 8,'省略'}}
```
输出
```
abcde... 
abcde... 
abcdef省略
```
### truncatewords 裁剪字符串（单词个数） 省略号

输入
```
{{"a b c d e f g h ijk" | truncatewords: 8}}<br/>
{{"a b c d e f g h ijk" | truncatewords: 8,'...'}}<br/>
{{"a b c d e f g h ijk" | truncatewords: 8,'省略'}}<br/>
```
输出
```
a b c d e f g h...
a b c d e f g h...
a b c d e f g h省略
```
### url_encode 将字符中 非url安全字符转换为百分号编码的字符 

输入
```
{{"baidu.com?q=@qq.com&w=sd" | url_encode }}
```
输出
```
baidu.com%3Fq%3D%40qq.com%26w%3Dsd
```
### url_decode 将字符中 百分号编码的字符  解码

输入
```
{{"baidu.com%3Fq%3D%40qq.com%26w%3Dsd" | url_decode }}
```
输出
```
baidu.com?q=@qq.com&w=sd
```
