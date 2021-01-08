import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/system/login',
    name: 'SystemLogin',
    component: () => import('../views/System/Login.vue')
  },
  {
    path: '/system/search',
    name: 'SystemSearch',
    component: () => import('../views/System/Search.vue')
  },
  {
    path: '/system/result/:id',
    name: 'PersonInfomation',
    component: () => import('../views/System/PersonInfomation.vue')
  },
  {
    path: '/',
    name: 'SearchHome',
    component: () => import('../views/Search/Home.vue')
  },
  {
    path: '/search',
    name: 'SearchResult',
    component: () => import('../views/Search/Result.vue')
  },
  {
    path: '/article/:id',
    name: 'SearchArticle',
    component: () => import('../views/Search/Article.vue')
  },
  // {
  //   path: '/',
  //   redirect: '/system/login'
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
