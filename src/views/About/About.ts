import serviceImageRecord from '@/assets/images/serviceImageRecord.webp';
import { ref, type Ref } from 'vue';
import type { Presentation } from '@/models/presentation';

export default {
    setup() {
        const expertise: Ref<Presentation> = ref({
              title: 'Expertise Certifiée',
              description:'Je suis un télépilote certifié et formé pour réaliser des missions complexes en toute sécurité.',
              image: serviceImageRecord,
        });

          const custom: Ref<Presentation> = ref({
            title: 'Solutions Personnalisées',
            description:'J\'adapterais mes services en fonction de vos besoins pour vous offrir les meilleures solutions.',
            image: serviceImageRecord,
        });

        const security: Ref<Presentation> = ref({
              title: 'Engagement de Sécurité',
              description:'La sécurité est ma priorité absolue dans toutes mes opérations.',
              image: serviceImageRecord,
          });

        return {
            expertise,
            custom,
            security
        }
    }
};