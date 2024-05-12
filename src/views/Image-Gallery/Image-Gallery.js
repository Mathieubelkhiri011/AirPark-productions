import { ApiMediaImageHome } from '@/constants/ApiUrls';
import MediaDTO, { mapperMediaDTO } from '@/components/shared/dto/mediaDto'


export default {
    data () {
        return {
            homeImages: [MediaDTO],
        }
    },
    methods: {
        async fetchHomeImages() {
            try {
                const response = await fetch(ApiMediaImageHome);
                const data = await response.json();
                this.homeImages = mapperMediaDTO(data)
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            }
        },
    },
    created() {
        this.fetchHomeImages();
    },
};