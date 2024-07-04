import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Contact from '@/views/Contact/Contact.vue';
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
    components: { default: Contact, navbar: Navbar },
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
});

export default router;
