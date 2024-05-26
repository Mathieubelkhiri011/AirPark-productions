import serviceImageRecord from '@/assets/images/serviceImageRecord.webp'
import serviceCustomImage from '@/assets/images/serviceCustom.webp'
import Button from 'primevue/button'
import Card from 'primevue/card'

export default {
  components: {
    Button,
    Card
  },

  setup() {
    const serviceImage = {
      title: 'Expertise et innovation',
      description: 'Notre équipe est composée de professionnels qualidiés et passionnées par les technologies de pointes...',
      image: serviceImageRecord,
      urlRedirect: '/service/photos-videos'
    }

    const serviceInspections = {
      title: 'Qualité et précision',
      description: 'Nous nous engageons à fournir des images et des données de haute qualité avec une grande précision inégalée...',
      image: serviceImageRecord,
      urlRedirect: '/service/inspections'
    }

    const serviceCustom = {
      title: 'Intégrité',
      description: 'Nous pronons la transparence, l\'honnêté et la sincérié dans tous les demaines...',
      image: serviceCustomImage,
      urlRedirect: '/service/personnalises'
    }

    return {
      serviceImage,
      serviceInspections,
      serviceCustom
    }
  }
}