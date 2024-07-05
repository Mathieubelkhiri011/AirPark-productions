import imagePriseDeVue from '@/assets/images/servicePriseVue.jpg';
import imageInspection from '@/assets/images/serviceInspection.jpg';

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
      image: imagePriseDeVue,
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
      image: imageInspection,
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
      image: imageInspection,
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
      image: imageInspection,
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