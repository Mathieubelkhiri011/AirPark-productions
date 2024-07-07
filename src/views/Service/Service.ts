import priseDeVueWallpaper from '@/assets/images/services/priseVue.jpg';
import inspectionWallpaper from '@/assets/images/services/inspection.jpg';
import topographieWallpaper from '@/assets/images/services/topographie.jpg';

import Button from 'primevue/button';
import Card from 'primevue/card';

export default {
  components: {
    Button,
    Card
  },

  setup() {
    const servicePriseDeVue = {
      title: 'Prises de Vue Aérienne',
      description: 'Captivez votre audience avec des images et des vidéos spectaculaires pour l\'événementiel, l\'immobilier, le marketing, et bien plus encore.',
      image: priseDeVueWallpaper,
      urlRedirect: {
         name: 'service',
         params: {
           service: 'cadrage'
         }
      }
    }

    const serviceInspections = {
      title: 'Inspection de Bâtiments',
      description: 'Surveillez et évaluez l\'état de vos structures en toute sécurité avec des inspections détaillées par drone.',
      image: inspectionWallpaper,
      urlRedirect: {
        name: 'service',
        params: {
            service: 'inspection'
        }
      }
    }

    const serviceCartographie = {
      title: 'Cartographie et Modélisation 3D',
      description: 'Créez des cartes précises et des modèles 3D de vos sites pour des analyses approfondies et des décisions éclairées.',
      image: topographieWallpaper,
      urlRedirect: {
        name: 'service',
        params: {
            service: 'topographie'
        }
      }
    }

    const serviceSecurity = {
      title: 'Surveillance et Sécurité',
      description: 'Assurez la surveillance de périmètres et la sécurité de vos installations avec des drones fiables et efficaces.',
      image: topographieWallpaper,
      urlRedirect: {
        name: 'service',
        params: {
            service: 'security'
        }
      }
    }

    return {
      servicePriseDeVue,
      serviceInspections,
      serviceCartographie,
      serviceSecurity
    }
  }
}