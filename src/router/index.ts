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
    {
      path: '/service/photo-video',
      name: 'PhotoVideo',
      components: { default: Home, header: Navbar },
    },
    {
      path: '/service/inspection',
      name: 'inspection',
      components: { default: Home, header: Navbar },
    },
    {
      path: '/service/personnalisable',
      name: 'personnalisable',
      components: { default: Home, header: Navbar },
    },

  ]
})

export default router
