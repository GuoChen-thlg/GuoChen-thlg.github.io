---
title: Redux 小试牛刀
tags:
  - Redux
categories:
  - Redux
copyright: true
abbrlink: 37966
date: 2020-06-07 13:38:00
top:
---
在使用 Redux 之前，首先要了解为什么使用 Redux。
> 随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
<!-- more -->

### Redux 三要素
+ Action（将要发生的操作）
+ Reducer（根据 action 更新 state，是一个纯函数）
 - 提供 combineReducers(reducers) 函数组合多个 reducer
+ 存放 state 数据的 Store（将 action 和 reducer 联系到一起的对象）
 - 提供 getState() 方法获取 state
 - 提供 dispatch(action) 方法更新 state
 - 通过 subsctibe(listener) 注册监听器
 - 通过 subscribr(listener) 返回的函数注销监听器


### 三大基本原则
1. 单一数据源
2. state 是只读的，只能通过触发 action 修改 state
3. 使用纯函数来执行修改

### 使用

1. 创建 reducer
2. 创建 store 用于存储
3. 绑定事件
4. 定义 render 函数，更新视图
5. 为 store 添加监听，每次状态发生变化即刻调用render函数渲染组件
6. 初始化渲染默认数据

我们用 Redux 来写一个计数器

#### 第一步

编写 HTML 代码

```html
<h1>计数器：<span id="num"></span></h1>
<button onclick="addNum()">+</button>
<button onclick="minNum()">-</button>
<button onclick="doubleness()">2倍</button>
<button onclick="square()">平方</button>
```

#### 导入 redux.min.js

```js
<script src="./redux.min.js"></script>
```
#### 定义方法

```js
const addNum = () => {
    let action = {
        type: 'ADD_ONE'
    }
    store.dispatch(action)
}
const minNum = () => {
    let action = {
        type: 'MIN_ONE'
    }
    store.dispatch(action)
}
const doubleness = () => {
    let action = {
        type: 'DOUBLENESS'
    }
    store.dispatch(action)
}

const square = () => {
    let action = {
        type: 'SQUARE'
    }
    store.dispatch(action)
}
```
#### 创建纯函数

```js
const counter = (state = 0, action) => {
            switch (action.type) {
                case 'ADD_ONE':
                    return state + 1
                    break;
                case 'MIN_ONE':
                    return state - 1
                    break;
                case 'DOUBLENESS':
                    return state * 2
                    break;
                case 'SQUARE':
                    return state * state
                    break;
                default:
                    return state
                    break;
            }
        }
```

#### 创建仓库

```js
const store = Redux.createStore(counter)

const readen = () => {
    document.getElementById('num').innerHTML = store.getState()
    console.log(store.getState());
}

readen()
store.subscribe(readen)
```













[Redux 中文文档](https://www.redux.org.cn/)