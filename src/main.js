// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin === '1') {
      next()
    } else if (to.path !== '/login') {

      Vue.prototype.$message.warning('检测到您还未登录,请登录后操作！')
      next({path: '/login'})
    }
  } else {
    next()
  }
})
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  router,
})
