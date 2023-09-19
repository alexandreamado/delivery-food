import { createRouter, createWebHashHistory } from 'vue-router'
import Header from './components/Header.vue'
import index from './components/index.vue'

const routes = [
   {
      path: '/',
      name: 'Index',
      component: index
   },
   {
      path: '/header',
      name: 'header',
      component: Header
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router