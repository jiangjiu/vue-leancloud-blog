# Vue.js + LeanCloud（node.js）前后端分离开发样板

LeanCloud 作为国内领先的 Baas 云服务提供者，简化了很多相对复杂的操作，使得前端工程师 hold 住一个完整项目变得简单。

>通过 LeanEngine 云引擎部署前后端代码，配合高效的数据存储完全解放了生产力，尤其是2015年 LeanCloud 推出的 LeanEngine-Full-Stack 解决方案，它整合了当前 Web 技术的通用方案，并与 LeanEngine 紧密结合，将基础架构、自动化构建、国际化方案等底层技术解决方案组织成一个整体。用户可以通过最简单的方式，直接开始业务开发，不必再纠结那些底层的技术选型了。

但是，**这个项目已经好久没有更新过了。。。**最新的 LeanEngine 云引擎都升级到3.0，很多 api 都有变化，之前的全栈项目却是没人维护了。

最近学习 Vue.js 感觉真的好用，所以配合最新的云引擎写一个 boilerplate，作为以后快速开发的模板工具。

## 主要技术栈

- 语言方面，整套方案使用 ES6标准的 JavaScript 代码进行开发。
- Server 端运行环境基于 LeanEngine Node.js 环境，依赖安装通过 npm，服务框架主要基于 Express 4.x。
- 前端取了个巧，直接使用了尤雨溪大大的 Vue-cli 生成。

前后端完全分离，服务端设置了跨域，前端项目提出去也是 OK 的。

```js
.
├── public          // LeanEngine Web 前端发布目录，HTML\CSS\JavaScript 构建后将放置于此
├── server-modules  // 服务器端代码模块目录
│    ├── app            // LeanEngine 服务端代码主入口
│    ├── api-router     // API 接口路由配置
│    ├── tool           // 工具方法
│    └── hello          // 示例代码
├── fe				       // Web 前端项目目录
│    ├── build          // 前端开发环境
│    ├── config         // 配置文件
│    └── src            // 源码目录
└── server       // LeanEngine 的环境配置
```

## 使用方式
如果没有使用过，并不了解 LeanCloud 或 LeanEngine，先到[官网](http://leancloud.cn)中了解。

首先确认本机已经安装 [Node.js](http://nodejs.org/) 运行环境和 [LeanCloud 命令行工具](https://leancloud.cn/docs/cloud_code_commandline.html)，之后按照以下方式开始您的开发：

git clone 本项目后

* 在该项目`根目录`执行

```
$ npm install  // 安装服务端环境依赖
```

* 在 `fe 目录`中执行

```
$ npm install  // 安装前端环境依赖
```


## 调试

* 在`根目录`执行

```
$ lean up
```

运行服务器端环境，通过 `http://localhost:3000/` 可以测试

* 在 `fe 目录`中执行

```
$  npm run dev
```
运行 web 前端环境，通过 `http://localhost:8080` 可以调试

```js
npm run build // 前端资源压缩并发布到根目录 public文件夹中
```

* 开发时需要同时运行这两个任务（开两个 terminal），就可以同时调试 Server 与 Web

更多关于 LeanCloud 构建部署的命令可以在[LeanCloud官网](http://leancloud.cn)找到。

## 参考资料
- [LeanEngine-Full-Stack
](https://github.com/leancloud/LeanEngine-Full-Stack)
- [vue-cli](https://github.com/vuejs/vue-cli)

## 协议
MIT

