import { ref, onMounted, onBeforeMount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import serviceInspectionDetails from '@/assets/images/serviceInspectionDetails.jpg';
import servicePriseVue from '@/assets/images/servicePriseVue.jpg';
import bottomHomeWallpaper  from '@/assets/images/bottomHomeWallpaper.svg';

import Button from 'primevue/button';
import Card from 'primevue/card';

export default {
  name: 'DetailsService',

  components: {
      Button,
      Card
    },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const service = ref(null);

    const inspection = {
      image: serviceInspectionDetails,
      title: 'Pourquoi choisir l\'inspection par drone ?',
      description: 'L’inspection par drone offre une multitude d’avantages par rapport aux méthodes traditionnelles d’inspection...',
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
          title: 'Pourquoi choisir la prise de vue ?',
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

    // Méthode pour initialiser le service en fonction de route.params.service
    const initializeService = () => {
      switch (route.params.service) {
        case "inspection":
          service.value = { ...inspection };
          break;
        case "prise-vue":
          service.value = { ...priseVue };
          break;
        default:
          router.push({ name: 'home' });
          break;
      }
    };

    // Appel de la méthode avant l'initialisation des variables
    onBeforeMount(initializeService);

    // Surveillance des changements de route.params.service
    watch(() => route.params.service, (newValue) => {
      switch (newValue) {
        case "inspection":
          service.value = inspection;
          break;
        case "prise-vue":
          service.value = priseVue;
          break;
        default:
          router.push({ name: 'home' });
          break;
      }
    });

    // Utilisation de onMounted pour initialiser le service au montage du composant
    onMounted(() => {
        console.debug("onMounted : ", route.params.service);
      switch (route.params.service) {
        case "inspection":
          service.value = inspection; // Initialisation avec inspection si le paramètre est "inspection"
          break;
        case "prise-vue":
          service.value = priseVue; // Initialisation avec priseVue si le paramètre est "prise-de-vue"
          break;
        default:
          router.push({ name: 'home' }); // Redirection vers la page d'accueil par défaut
          break;
      }
    });

    return {
      bottomHomeWallpaper,
      service
    };
  }
};