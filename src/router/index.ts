import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import ContactPage from '@/views/ContactPage/ContactPage.vue';
import Navbar from '@/views/Navbar/Navbar.vue';
import DetailsService from '@/views/DetailsService/DetailsService.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    components: { default: Home, navbar: Navbar },
  },
  {
    path: '/contact',
    name: 'contact',
    components: { default: ContactPage, navbar: Navbar },
  },
  {
    path: '/service/:service',
    name: 'service',
    components: { default: DetailsService, navbar: Navbar },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // Utiliser "top" au lieu de "x" et "y" pour Vue 3
    }
  },
});

export default router;
