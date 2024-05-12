import Contact from "../Contact/Contact.vue";
import ImageGallery from "../Image-Gallery/Image-Gallery.vue";
import Footer from "../Footer/Footer.vue";
import About from '@/views/About/About.vue';
import Header from '@/views/Header/Header.vue';
import VideoGallery from '@/views/Video-Gallery/Video-Gallery.vue';

export default {
    components: {
        Header,
        About,
        Contact,
        ImageGallery,
        VideoGallery,
        Footer
    },
    data() {
        return {
            isAdmin: false
        }
    },
    mounted() {
        const bearerToken = localStorage.getItem(import.meta.env.VITE_APP_BEARER_TOKEN_GOOGLE_CACHE);
        const accessToken = localStorage.getItem(import.meta.env.VITE_APP_ACCESS_TOKEN_GOOGLE_CACHE);

        if (accessToken && bearerToken) {
            this.isAdmin = true;
        }
    },
    methods: {
        redirectToUrl(url) {
            this.$router.push(url);
        }
    }
};