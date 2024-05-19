import { ApiMediaImageHome } from '@/constants/ApiUrls';
import MediaDTO, { mapperMediaDTO } from '@/components/shared/dto/mediaDto'
import imageGallery from '@/views/Image-Gallery/Image-Gallery'


export default {
    computed: {
        imageGallery() {
            return imageGallery
        }
    },
    data () {
        return {
            aboutImages: [MediaDTO],
        }
    },
    methods: {
        async fetchAboutImages() {
            try {
                const response = await fetch(ApiMediaImageHome);
                const data = await response.json();
                this.aboutImages = mapperMediaDTO(data)
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            }
        },
    },
    created() {
        this.fetchAboutImages().then();
    },
};