import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Login from '@/views/Admin/Login/Login.vue'
import AdminPortal from '@/views/Admin/Portal/Portal.vue'
import Config from '@/views/Admin/Config/Config.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      components: Home
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/portal',
      name: 'adminPortal',
      component: AdminPortal
    },
    {
      path: '/admin/config',
      name: 'adminConfig',
      component: Config
    },
  ]
})

export default router
