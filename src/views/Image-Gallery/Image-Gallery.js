import { ApiMediaImageHome } from '@/constants/ApiUrls';
import MediaDTO, { mapperMediaDTO } from '@/components/shared/dto/media'


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

                console.info(data);
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