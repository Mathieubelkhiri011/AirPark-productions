import homeWallpaper  from '@/assets/images/homeWallpaper.jpg';
import bottomHomeWallpaper  from '@/assets/images/bottomHomeWallpaper.svg';

import Divider from 'primevue/divider';

import About from '@/views/About/About.vue';
import Service from '@/views/Service/Service.vue';
import Contact from '@/views/Contact/Contact.vue';

export default {
    components: {
        Divider,
        About,
        Service,
        Contact
    },

    data() {
        return {
            homeWallpaper,
            bottomHomeWallpaper
        };
    }
};