import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import About from './components/About'
import Tags from './components/Tags'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home
  },
  '/about': {
    component: resolve => resolve(About)
  },
  '/tags': {
    component: resolve => resolve(Tags)
  }
  // '/time-entries': {
  //   component: function (resolve) {
  //     resolve(TimeEntries)
  //   },
  //   subRoutes: {
  //     '/log-time': {
  //       component: LogTime
  //     }
  //   }
  // }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
