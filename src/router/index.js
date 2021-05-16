import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    alias: '/',
    path: '/create-pizza',
    name: 'createPizza',
    component: () => import('@/views/CreatePizza')
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('@/views/Basket')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
