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
      title: 'Prise de vue',
      description: 'Nous nous engageons à fournir des images et des données de haute qualité avec une grande précision inégalée...',
      image: imagePriseDeVue,
      urlRedirect: '/service/inspections'
    }

    const serviceInspections = {
      title: 'Inspection',
      description: 'Nous pronons la transparence, l\'honnêté et la sincérié dans tous les demaines...',
      image: imageInspection,
      urlRedirect: '/service/personnalises'
    }

    return {
      servicePriseDeVue,
      serviceInspections
    }
  }
}