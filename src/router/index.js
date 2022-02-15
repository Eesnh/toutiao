import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表，配置自己的路由
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: '', // 设置了子路由，需要设置为空，再设置name没有意义
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // 设置为空，默认是子路由，只能有一个
        name: 'home',
        component: () => import('@/views/home')
      }, {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      }, {
        path: '/videos',
        name: 'videos',
        component: () => import('@/views/videos')
      }, {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
