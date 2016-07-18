;(function () {
  var vueClick = {}
  vueClick.install = function (Vue) {
    Vue.directive('click', {
      isFn: true,
      acceptStatement: true,
      priority: Vue.directive('on').priority + 1,

      bind: function () {
      },
      update: function (fn) {
        var self = this
        self.tapObj = {}

        if (typeof fn !== 'function') {
          return console.warn('[vue-click] the Param must be a function!')
        }

        self.handler = function (e) {
          e.tapObj = self.tapObj
          fn.call(self, e)
        }

        if (self.isPC()) {
          self.el.addEventListener('click', function (e) {
            e.preventDefault()
            fn.call(self, e)
          })
        } else {
          self.el.addEventListener('touchstart', function (e) {
            if (self.modifiers.stop) {
              e.stopPropagation()
            }

            if (self.modifiers.prevent) {
              e.preventDefault()
            }

            self.touchstart(e, self)
          }, false)

          self.el.addEventListener('touchend', function (e) {
            self.touchend(e, self)
          }, false)
        }
      },
      unbind: function () {
      },
      isPC: function () {
        var uaInfo = navigator.userAgent
        var agents = ['Android', 'iPhone', 'windows Phone', 'iPad', 'iPod']
        var flag = true
        for (var i = 0; i < agents.length; i++) {
          if (uaInfo.indexOf(agents[i]) > 0) {
            flag = false
            break
          }
        }
        return flag
      },
      touchstart: function () {
      },
      touchend: function (e, self) {
        self.handler(e)
      }
    })
  }

  if (typeof exports === 'object') {
    module.exports = vueClick
  } else if (typeof define === 'function' && defind.amd) {
    define([], function () {
      return vueClick
    })
  } else if (window.Vue) {
    window.vueClick = vueClick
    Vue.use(vueClick)
  }

})()
