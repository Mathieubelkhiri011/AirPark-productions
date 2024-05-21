import serviceImageRecord from '@/assets/images/serviceImageRecord.webp'
import serviceCustom from '@/assets/images/serviceCustom.webp'
import Button from 'primevue/button'

export default {
    components: {
        Button
    },

    data () {
        return {
            serviceImage: {
                title: 'Photos / Vidéos aériennes',
                description:'Naviguer dans les tissu complexe de la vie, les choix dévoillent des chemins vers l\'extraordinaire, exigeant créativité, curiosité et courage pour un voyage vraiment épanouissant.',
                image: serviceImageRecord,
                urlRedirect: '/service/photos-videos'
            },

            serviceInspections: {
                title: 'Inspections',
                description:'Naviguer dans les tissu complexe de la vie, les choix dévoillent des chemins vers l\'extraordinaire, exigeant créativité, curiosité et courage pour un voyage vraiment épanouissant.',
                image: serviceImageRecord,
                urlRedirect: '/service/inspections'
            },

            serviceCustom: {
                title: 'Demandes personnalisables',
                description:'Naviguer dans les tissu complexe de la vie, les choix dévoillent des chemins vers l\'extraordinaire, exigeant créativité, curiosité et courage pour un voyage vraiment épanouissant.',
                image: serviceCustom,
                urlRedirect: '/service/personnalises'
            }
        }
    },
};