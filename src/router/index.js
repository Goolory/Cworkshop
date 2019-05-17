import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',   //注意配置NGINX时，对服务器进行配置  参考：https://www.jb51.net/article/149186.htm
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/main',
      component: resolve => require(['../components/page/Main.vue'], resolve),
      meta: { title: '终端查询' }
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title : '首页', auth: true},
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: { title: '系统首页',auth: true }
        },
        {
          path: '/search',
          component: resolve => require(['../components/page/Search.vue'], resolve),
          meta: { title: '终端查询' ,auth: true}
        },
        {
          path: '/monitor',
          component: resolve => require(['../components/page/Monitor.vue'], resolve),
          meta: { title: '监控溯源' ,auth: true}
        },
        {
          path: '/alarm',
          component: resolve => require(['../components/page/Alarm.vue'], resolve),
          meta: { title: '定员警报' ,auth: true}
        },
        {
          path: '/limit',
          component: resolve => require(['../components/page/Limit.vue'], resolve),
          meta: { title: '工坊定员' ,auth: true}
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      meta: {title: '登录',auth: false},
    },
    
  ]
})
