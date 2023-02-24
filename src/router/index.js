import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import People from '@/views/People'


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'people',
    path: '/people',
    component: People,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
