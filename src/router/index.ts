import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue';
import Navbar from '@/views/Navbar/Navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      components: { default: Home, header: Navbar },
    },
  ]
})

export default router
