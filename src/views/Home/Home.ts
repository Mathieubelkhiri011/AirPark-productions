import homeWallpaper  from '@/assets/images/homeWallpaper.webp';
import About from '@/views/About/About.vue'
import Service from '@/views/Service/Service.vue'
import Contact from '@/views/Contact/Contact.vue'

export default {
    components: {
        About,
        Service,
        Contact
    },

    data() {
        return {
            homeWallpaper
        };
    }
};