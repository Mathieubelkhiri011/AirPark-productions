import { ref, onMounted, onBeforeMount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import serviceInspectionDetails from '@/assets/images/serviceInspectionDetails.jpg';
import servicePriseVue from '@/assets/images/servicePriseVue.jpg';
import bottomHomeWallpaper  from '@/assets/images/bottomHomeWallpaper.svg';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Contact from '@/views/Contact/Contact.vue';

export default {
  name: 'DetailsService',

  components: {
      Button,
      Card,
      Contact
    },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const service = ref(null);

    const services = {
    inspection : {
      image: serviceInspectionDetails,
      title: 'Pourquoi choisir l\'inspection par drone ?',
      description: '<p> Mes services d\'inspection par drone permettent de surveiller et d\'évaluer vos structures en toute sécurité, réduisant les risques et les coûts associés aux méthodes traditionnelles.</p> </br> <p>Ils peuvent accéder à des zones difficiles d\'accès et capturer des données et des images de haute qualité. J\'adapterai mes services à vos besoins spécifiques pour garantir des résultats précis et fiables, tout en respectant les normes de sécurité et les réglementations en vigueur.</p>',
      details: [
            {
                title: "Pour les Particuliers",
                description: "<p> Inspection de Toitures et Structures Domestiques : Vérifiez l'état de vos toitures, façades, cheminées, et gouttières pour détecter les dommages, les fuites, et les signes d'usure, tout en évitant les risques associés aux inspections manuelles.</p>",
                button :  {
                   name: 'service',
                   params: {
                      service: 'particulier'
                   }
                }
            },
            {
                title: "Pour les Professionnels",
                description: "<p> Surveillance d'Infrastructures et de Sites Industriels : Inspectez les toitures commerciales, les façades, les installations industrielles, et les structures de grande hauteur pour assurer leur intégrité, détecter les défauts structurels, et planifier les réparations nécessaires. </p> </br> <p> Je vous offrirai également des rapports détaillés et des analyses pour vous aider à prendre des décisions éclairées concernant l\'entretien et la réparation de vos bâtiments. N\'hésitez pas à prendre contact dès maintenant !</p>",
                button : {
                    name: 'service',
                    params: {
                       service: 'professionnels'
                    }
                 }
            }
        ]
      },
      particulier : {
          image: servicePriseVue,
          title: null,
          description: '<div style="text-align: start;"> <p style="font-weight:bold;"> Des inspections précises et sécurisées pour votre tranquillité d\'esprit </p> </br> <p> Je propose des services d\'inspection par drone pour les particuliers, vous permettant de surveiller et d\'évaluer vos biens avec précision et en toute sécurité. Que vous ayez besoin d\'inspecter votre toiture, vos structures de grande hauteur ou d\'autres parties de votre propriété, nos drones fournissent des images et des données détaillées, réduisant ainsi les risques et les coûts associés aux inspections traditionnelles. </p> </br> <p> Mes services d\'inspection par drone pour particuliers incluent : </p> <ul style="margin-left: 2rem;"><li><span style="font-weight:bold;">Inspection de Toitures : </span> Vérifiez l\'état de votre toiture pour détecter les dommages, les fuites ou les signes d\'usure sans avoir à monter sur le toit.</li><li><span style="font-weight:bold;">Surveillance des Structures : </span> Inspectez les structures de grande hauteur telles que les cheminées, les antennes et les tours de manière sûre et efficace.</li><li><span style="font-weight:bold;">Inspection des Gouttières : </span>Assurez-vous que vos gouttières sont libres de débris et en bon état de fonctionnement pour éviter des problèmes d\'humidité.</li><li><span style="font-weight:bold;">Évaluation des Dommages : </span> Évaluez les dommages après une tempête ou un incident, en obtenant des images détaillées pour vos dossiers d\'assurance.</li><li><span style="font-weight:bold;">Suivi de Travaux : </span>Suivez l\'avancement de vos projets de rénovation ou de construction avec des prises de vue régulières et détaillées.</li></ul></br><p>J\'offre également des rapports détaillés et des analyses pour vous aider à prendre des décisions éclairées concernant l\'entretien et la réparation de votre propriété.</p></br><p>Contactez-moi dès aujourd\'hui pour discuter de vos besoins afin de vous aider à maintenir votre propriété en excellent état de manière sûre et efficace.</p> </div>',
          details: []
      },
      professionnel : {
          image: servicePriseVue,
          title: null,
          description: '<div style="text-align: start;"> <p style="font-weight:bold;"> Des inspections précises et efficaces pour vos projets professionnels</p></br><p>Je vous propose des services d\'inspection par drone spécialement conçus pour répondre aux besoins des professionnels. Que vous soyez dans le secteur de la construction, de l\'énergie, des infrastructures ou de l\'immobilier, mes drones fournissent des données précises et des images détaillées qui facilitent la gestion et la maintenance de vos projets.</p></br><p>Ils sont équipés de capteurs de pointe, permettant de capturer des images et des vidéos nettes et détaillées. J\'opère avec une grande rigueur et respect des normes de sécurité, garantissant des inspections fiables et sans danger. </p></br><p>Mes drones peuvent accéder à des zones difficiles d\'accès, assurant une couverture complète et précise de vos installations et structures.</p></br><p>Nos services d\'inspection par drone pour professionnels incluent :</p><ul style="margin-left: 2rem;"><li><span style="font-weight:bold;">Inspection d\'Infrastructures : </span> Examinez l\'état de ponts, viaducs, pylônes et autres structures pour détecter les signes d\'usure, de corrosion ou de dommages.</li><li><span style="font-weight:bold;">Surveillance de Sites Industriels : </span> Suivez l\'état de vos installations industrielles, y compris les réservoirs, les cheminées et les équipements lourds, avec des inspections régulières.</li><li><span style="font-weight:bold;">Inspection de Toitures Commerciales : </span> Évaluez l\'état des toitures de bâtiments commerciaux pour identifier les dommages et planifier les réparations nécessaires.</li><li><span style="font-weight:bold;">Inspection de Parcs Éoliens et Solaires : </span> Surveillez la condition des éoliennes et des panneaux solaires pour optimiser leur performance et prolonger leur durée de vie.</li><li><span style="font-weight:bold;">Suivi de Chantiers : </span>Obtenez des vues aériennes régulières de vos chantiers de construction pour surveiller l\'avancement des travaux et assurer le respect des délais et des normes de sécurité.</li></ul></br><p>Prenez contact dès aujourd\'hui pour discuter de vos besoins et découvrir comment mes services peuvent vous aider à optimiser la gestion et la maintenance de vos infrastructures de manière sûre et efficace.</p></div>',
          details: []
      },
      cadrage : {
        image: servicePriseVue,
        title: 'Pourquoi choisir la prise de vue par drone ?',
        description: '<p style="font-weight:bold;">Sublimez Vos Projets avec des Vues Aériennes de Qualité</p></br><p>J\'adapterai mes services à vos besoins spécifiques pour garantir des résultats optimaux, tout en respectant les normes de sécurité et les réglementations en vigueur, que ce soit pour des événements, des biens immobiliers, des reportages ou des campagnes de marketing.</p>',
        details: [
          {
              title: "Événementiel",
              description: "<p> Captivez l’essence de vos événements sociaux, mariages, et cérémonies avec des vidéos aériennes spectaculaires.</p>",
              button :  {
                 name: 'service',
                 params: {
                    service: 'evenementiel'
                 }
              }
          },
          {
              title: "Immobilier",
              description: "<p> Mettez en valeur vos propriétés résidentielles et commerciales en offrant des vues panoramiques et immersives.</p>",
              button :  {
                 name: 'service',
                 params: {
                    service: 'immobilier'
                 }
              }
            },
          {
            title: "Marketing et Promotion",
            description: "<p> Créez des campagnes publicitaires percutantes et attirez des visiteurs avec des prises de vue aériennes de vos produits et destinations touristiques.</p>",
            button :  {
               name: 'service',
               params: {
                  service: 'marketing'
               }
            }
          },
          {
            title: "Reportages et Documentaires",
            description: "<p> Capturez la beauté des paysages naturels et des sites historiques avec des vues aériennes grandioses.</p>",
            button :  {
               name: 'service',
               params: {
                  service: 'documentaires'
               }
            }
          },
        ]
      },
      documentaires : {
       image: servicePriseVue,
       title: null,
       description: '<div style="text-align: start;"> <p style="font-weight:bold;"> Transformez vos histoires avec des vues aériennes époustouflantes</p></br><p>Des images saisissantes peuvent transformer un bon reportage ou documentaire en une expérience visuelle inoubliable. Apportez une perspective unique et impressionnante à vos projets, captivant ainsi votre audience.</p></br><p>Mes services de prises de vue aérienne pour les reportages et documentaires incluent par exemple:</p><ul style="margin-left: 2rem;"><li><span style="font-weight:bold;">Paysages Naturels : </span>Capturez la beauté et la diversité des paysages, des montagnes majestueuses aux forêts denses, en passant par les plages immaculées.</li><li><span style="font-weight:bold;">Sites Historiques et Culturels : </span> Mettez en valeur les monuments et sites patrimoniaux avec des vues aériennes qui révèlent leur grandeur et leur histoire.</li><li><span style="font-weight:bold;">Urbanisme et Architecture : </span> Offrez une vision inédite des villes, de leur architecture et de leur dynamique quotidienne, vue du ciel.</li></ul></br><p>J\'offre également des services de post-production pour retoucher et monter les séquences, garantissant ainsi un résultat final professionnel et impressionnant.</p></br><p>Pour des prises de vue aérienne par drone qui sublimeront vos reportages et documentaires, n\'hésitez pas ! Contactez-moi dès aujourd\'hui pour discuter de vos projets.</p></div>',
       details: []
    },
    evenementiel : {
       image: servicePriseVue,
       title: null,
       description: '<div style="text-align: start;"> <p style="font-weight:bold;">Immortalisez vos événements avec des vues aériennes incroyables</p><br/><p>Grâce à mon savoir-faire en prises de vue aérienne par drone, nous offrons des perspectives uniques et mémorables qui feront briller vos événements sous un nouvel angle.</p></br><p>Discrétion et respect des règles de sécurité sont mes priorités, assurant ainsi que votre événement se déroule sans interruption et en toute sécurité. Mes drones s\'adaptent à divers environnements et conditions, garantissant des prises de vue optimales quelles que soient les circonstances.</p></br><p>Nos services de prises de vue aérienne pour l\'événementiel incluent par exemple :</p><ul style="margin-left: 2rem;"><li><span style="font-weight:bold;">Mariages : </span>Capturez les moments magiques de votre journée spéciale avec des vues aériennes spectaculaires, des cérémonies en plein air aux réceptions en salle.</li><li><span style="font-weight:bold;">Concerts et Festivals : </span>Offrez des vues dynamiques et immersives de vos événements musicaux. Nos drones survolent la foule et la scène pour des images captivantes qui retransmettent l\'énergie de l\'événement.</li><li><span style="font-weight:bold;">Événements Sportifs : </span>Que ce soit pour des compétitions de grande envergure ou des événements sportifs locaux, nos drones capturent l\'action sous des angles innovants et excitants.</li><li><span style="font-weight:bold;">Conférences et Séminaires : </span>Ajoutez une dimension visuelle à vos événements professionnels. Nos drones capturent des images aériennes de vos conférences, séminaires et salons, mettant en valeur l\'ampleur et l\'impact de votre événement.</li><li><span style="font-weight:bold;">Festivités et Célébrations : </span>Que ce soit pour des fêtes d\'anniversaire, des célébrations communautaires ou des feux d\'artifice, nos drones enregistrent chaque moment festif avec une touche unique.</li></ul></br><p>Pour des prises de vue aérienne par drone qui feront la différence lors de vos événements, contactez moi dès aujourd\'hui. Je suis impatients de collaborer avec vous pour capturer des images qui raconteront l\'histoire de votre événement sous un angle unique et spectaculaire.</p></div>',
       details: []
    },
    immobilier : {
       image: servicePriseVue,
       title: null,
       description: '<div style="text-align: start;"> <p style="font-weight:bold;">Valorisez vos biens avec des vues aériennes éblouissantes</p></br><p>Il est crucial de présenter vos biens immobiliers sous leur meilleur jour. Pour cela, je propose des prestations afin de vous fournir des perspectives uniques et époustouflantes qui mettent en valeur chaque détail de vos propriétés.</p></br><p>Les drones offrent des possibilités de photos et de vidéos nettes et détaillées, offrant ainsi une vue complète et immersive de vos biens immobiliers. </p></br><p>Ils peuvent s\'adapter à divers environnements et conditions, assurant des prises de vue optimales quelles que soient les circonstances.</p></br><p>Nos services de prises de vue aérienne pour l\'immobilier incluent :</p><ul style="margin-left: 2rem;"><li><span style="font-weight:bold;">Biens Résidentiels : </span>Mettez en valeur les maisons, appartements et propriétés de luxe avec des images aériennes qui capturent leur beauté et leur emplacement unique.</li><li><span style="font-weight:bold;">Biens Commerciaux : </span>Présentez des bureaux, entrepôts et espaces commerciaux sous un angle attractif pour attirer des acheteurs et locataires potentiels.</li><li><span style="font-weight:bold;">Projets de Construction : </span>Documentez les étapes de vos projets de construction avec des vues aériennes qui montrent l\'avancement des travaux et l\'envergure du projet.</li><li><span style="font-weight:bold;">Terrains et Propriétés Non Développées : </span>Offrez une vue d\'ensemble des terrains disponibles et mettez en valeur leur potentiel avec des images aériennes détaillées.</li><li><span style="font-weight:bold;">Complexes Résidentiels et Communautés : </span>Montrez l\'étendue et les commodités de complexes résidentiels et de communautés planifiées avec des prises de vue aériennes impressionnantes.</li></ul></br><p>Pour des prises de vue aérienne par drone qui feront la différence dans la présentation de vos biens immobiliers, contactez moi dès aujourd\'hui !</p></div>',
       details: []
    },
    marketing : {
       image: servicePriseVue,
       title: null,
       description: '<div style="text-align: start;"> <p style="font-weight:bold;">Donnez de la hauteur à votre stratégie marketing avec des vues aériennes spectaculaires.</p></br><p>Les drones sont équipés de caméras de haute qualité, capturant des images et des vidéos nettes et détaillées qui mettent en valeur chaque aspect de vos campagnes promotionnelles.</p></br><p>Nos services de prises de vue aérienne pour la promotion et le marketing incluent :</p><ul style="margin-left: 2rem;"><li><span style="font-weight:bold;">Publicité de Produits : </span>Mettez en valeur vos produits sous des angles inédits et attractifs, captivant ainsi l\'intérêt de votre public cible.</li><li><span style="font-weight:bold;">Promotion d\'Événements : </span>Attirez plus de participants en montrant l\'ampleur et l\'excitation de vos événements avec des vues aériennes dynamiques.</li><li><span style="font-weight:bold;">Marketing Immobilier : </span>Présentez vos propriétés sous leur meilleur jour avec des images aériennes qui révèlent leur grandeur et leur environnement.</li><li><span style="font-weight:bold;">Tourisme et Hôtellerie :</span> Attirez des visiteurs en montrant la beauté de vos destinations et installations avec des prises de vue aériennes immersives.</li><li><span style="font-weight:bold;">Vidéos d\'Entreprise : </span>Racontez l\'histoire de votre entreprise de manière captivante avec des séquences aériennes qui illustrent vos installations et opérations.</li></ul></br><p>J\'offre également des services de post-production pour retoucher et monter les séquences, assurant ainsi un rendu final professionnel.</p></br><p>Pour des prises de vue aérienne par drone qui propulseront vos campagnes de promotion et marketing, faites confiance à AirPark. Contactez-moi dès aujourd\'hui pour discuter de vos projets et découvrir comment nous pouvons procéder à la capture d\'images qui donneront vie à votre vision de manière unique et spectaculaire.</p>',
       details: []
    },
    topographie: {
       image: servicePriseVue,
       title: null,
       description: '<div style="text-align: start;"> <p style="font-weight:bold;">Obtenez des données précises et détaillées pour votre projet</p></br><p>La précision et le détail sont essentiels en topographie. </p></br><p>Grâce à mon expertise en prise de vue par drone, je vous fournirai des données topographiques précises et des images détaillées qui facilitent la planification et la gestion de vos projets.</p></br><p>Mes services de prises de vue aérienne pour la topographie incluent :</p><ul style="margin-left: 2rem;"><li><span style="font-weight:bold;">Cartographie et Modélisation 3D : </span>Créez des cartes détaillées et des modèles 3D précis de vos sites avec des vues aériennes de haute résolution.</li><li><span style="font-weight:bold;">Surveillance de Chantiers :</span> Suivez l\'évolution de vos chantiers de construction avec des images aériennes régulières, facilitant la gestion et la coordination.</li><li><span style="font-weight:bold;">Analyse de Terrain :</span> Obtenez une vue d\'ensemble des caractéristiques du terrain, y compris les contours, les élévations et les infrastructures existantes.</li><li><span style="font-weight:bold;">Planification Urbaine et Rurale :</span> Aidez à la planification et au développement urbain et rural en fournissant des données précises et des vues aériennes détaillées.</li><li><span style="font-weight:bold;">Études Environnementales : </span>Effectuez des études environnementales approfondies avec des images aériennes qui capturent les caractéristiques naturelles et les changements dans l\'environnement.</li></ul></br><p>Contactez-moi dès aujourd\'hui pour discuter de vos besoins !</p></div>',
       details: []
    }
    }


    const initializeService = () => {
      const serviceKey = route.params.service;
      if (services.hasOwnProperty(serviceKey)) {
        service.value = services[serviceKey];
      } else {
        router.push({ name: 'home' });
      }
    };

    onBeforeMount(initializeService);

    watch(() => route.params.service, initializeService);

    onMounted(initializeService);

    return {
      bottomHomeWallpaper,
      service
    };
  }
};