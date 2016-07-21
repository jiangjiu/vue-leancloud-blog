import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  history: true,
  hashbang: false
})

FastClick.attach(window.document.body)
// 路由map
router.map({
  '/home': {
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/about': {
    component: function (resolve) {
      require(['./components/About'], resolve)
    }
  },
  '/tags': {
    component: function (resolve) {
      require(['./components/Tags'], resolve)
    }
  },
  '/article/:id': {
    name: 'article',
    component: function (resolve) {
      require(['./components/Article'], resolve)
    }
  }

})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
