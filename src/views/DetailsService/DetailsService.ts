import homeWallpaper  from '@/assets/images/homeWallpaper.jpg';
import bottomHomeWallpaper  from '@/assets/images/bottomHomeWallpaper.svg';
import serviceInspectionDetails  from '@/assets/images/serviceInspectionDetails.jpg';
import servicePriseVue  from '@/assets/images/servicePriseVue.jpg';

import Button from 'primevue/button';
import Card from 'primevue/card';

import { onMounted } from 'vue'
import {useRoute} from 'vue-router'

export default {
  components: {
    Button,
    Card
  },

  setup() {
     const route = useRoute()

      const inspection = {
        image: serviceInspectionDetails,
        title: 'Pourquoi choisir l\'inspection par drone ?',
        description: 'L’inspection par drone offre une multitude d’avantages par rapport aux méthodes traditionnelles d’inspection. Elle permet de réduire les risques liés au travail en hauteur, d’accélérer le processus d’inspection et d’obtenir des données plus précises. Avec notre expertise dans le domaine de l’inspection par drone, nous sommes en mesure de fournir des services de haute qualité qui répondent à vos besoins spécifiques. Nous sommes fiers de notre approche centrée sur le client et nous nous engageons à fournir des résultats précis, opportuns et fiables.',
        details: [
            {
                title: "Inspection de toiture et bâtiment par drone",
                description: "Nos drones peuvent rapidement et en toute sécurité inspecter votre toiture et vos bâtiments, vous fournissant des images détaillées pour une évaluation précise de l’état de votre infrastructure.",
                button : null
            },
            {
                title: "Inspection de toiture et bâtiment par drone",
                description: "Nos drones peuvent rapidement et en toute sécurité inspecter votre toiture et vos bâtiments, vous fournissant des images détaillées pour une évaluation précise de l’état de votre infrastructure.",
                button : '/home'
            },
            {
                title: "Inspection de toiture et bâtiment par drone",
                description: "Nos drones peuvent rapidement et en toute sécurité inspecter votre toiture et vos bâtiments, vous fournissant des images détaillées pour une évaluation précise de l’état de votre infrastructure.",
                button : '/home'
            }
        ]
      }

      const priseVue = {
          image: servicePriseVue,
          title: 'Pourquoi choisir l\'inspection par drone ?',
          description: 'L’inspection par drone offre une multitude d’avantages par rapport aux méthodes traditionnelles d’inspection. Elle permet de réduire les risques liés au travail en hauteur, d’accélérer le processus d’inspection et d’obtenir des données plus précises. Avec notre expertise dans le domaine de l’inspection par drone, nous sommes en mesure de fournir des services de haute qualité qui répondent à vos besoins spécifiques. Nous sommes fiers de notre approche centrée sur le client et nous nous engageons à fournir des résultats précis, opportuns et fiables.',
          details: [
              {
                  title: "Inspection de toiture et bâtiment par drone",
                  description: "Nos drones peuvent rapidement et en toute sécurité inspecter votre toiture et vos bâtiments, vous fournissant des images détaillées pour une évaluation précise de l’état de votre infrastructure.",
                  button : null
              },
              {
                  title: "Inspection de toiture et bâtiment par drone",
                  description: "Nos drones peuvent rapidement et en toute sécurité inspecter votre toiture et vos bâtiments, vous fournissant des images détaillées pour une évaluation précise de l’état de votre infrastructure.",
                  button : '/home'
              },
              {
                  title: "Inspection de toiture et bâtiment par drone",
                  description: "Nos drones peuvent rapidement et en toute sécurité inspecter votre toiture et vos bâtiments, vous fournissant des images détaillées pour une évaluation précise de l’état de votre infrastructure.",
                  button : '/home'
              }
          ]
      }

      const service = inspection;

      onMounted(() => {
        switch (route.params.service) {
            case "inspection": {
               service = inspection;
               break;
            }
            case "prise-vue": {
               service = priseVue;
               break;
            }
            default: {
                router.push({ name: 'home' });
                break;
            }
        };
     });

      return {
        homeWallpaper,
        bottomHomeWallpaper,
        service
      }
    }
};