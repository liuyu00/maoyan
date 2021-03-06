import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabs',
    redirect: '/home',
    component: () => import('@/views/tabs'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/cinema',
        name: 'cinema',
        component: () => import('@/views/cinema')
      },
      {
        path: '/perform',
        name: 'perform',
        component: () => import('@/views/perform')
      },
      {
        path: '/sports',
        name: 'sports',
        component: () => import('@/views/sports')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
