import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title : '首页'},
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
