import serviceImageRecord from '@/assets/images/serviceImageRecord.webp';
import { ref, type Ref } from 'vue';
import type { Presentation } from '@/models/presentation';

export default {
    setup() {
        const expertise: Ref<Presentation> = ref({
              title: 'Expertise et innovation',
              description:'Notre équipe est composée de professionnels qualifiés et passionnés par les technologies de pointes. Nous utilisons les derniers drones et logiciels pour offrir des résultats exceptionnels.',
              image: serviceImageRecord,
        });

          const qualite: Ref<Presentation> = ref({
            title: 'Qualité et précision',
            description:'Nous nous engageons à fournir des images et des données de haute qualité avec une précision inégalée. Chaque mission est réalisée avec une attention méticuleuse aux détails.',
            image: serviceImageRecord,
        });

        const integrite: Ref<Presentation> = ref({
              title: 'Intégrité',
              description:'Nous prônons la transparence, l\'honnêteté et la sincérité dans tous les domaines, de la collaboration à la prise de décision.',
              image: serviceImageRecord,
          });

        return {
            expertise,
            qualite,
            integrite
        }
    }
};