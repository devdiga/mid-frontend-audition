import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Films from '@/views/Films'


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'films',
    path: '/films',
    component: Films,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
