## 我的项目笔记


## 路由懒加载
即点击路由的时候才加载路由相应的代码片段!! 可以实现代码的分割功能 有利于提高页面性能

```js
 routes: [
        {
            path: '/login',
            component: () => {
                import('../views/login.vue') // 返回 Promise
            }
        },
        {
            path: '/Regisder',
            // 这是懒加载的方法导入 只有我点到这个路由才会加载
            component: () => {
                import('../views/Regisder.vue') // 返回 Promise
            }
        },
    ]   

```