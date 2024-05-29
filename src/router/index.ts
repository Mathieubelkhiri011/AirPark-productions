import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue';
import Navbar from '@/views/Navbar/Navbar.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    components: { default: Home, navbar: Navbar },
  },
  {
    path: '/service/photo-video',
    name: 'PhotoVideo',
    components: { default: Home, navbar: Navbar },
  },
  {
    path: '/service/inspection',
    name: 'inspection',
    components: { default: Home, navbar: Navbar },
  },
  {
    path: '/service/personnalisable',
    name: 'personnalisable',
    components: { default: Home, header: Navbar },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home', // ou une route 404 personnalisée
  },
]

const router = createRouter({
  history: createWebHistory('/AirPark-productions/'),
  routes,
})

export default router
