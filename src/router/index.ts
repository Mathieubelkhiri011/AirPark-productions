import { createRouter } from 'vue-router'
import Home from '@/views/Home/Home.vue';
import Contact from '@/views/Contact/Contact.vue';
import Navbar from '@/views/Navbar/Navbar.vue'

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
    redirect: '/home',
  },
]

const router = createRouter({
  routes,
})

export default router
