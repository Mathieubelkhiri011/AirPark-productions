import FileUpload from 'primevue/fileupload';
import type { Media } from '@/models/media'
import { type Ref, ref } from 'vue'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'
import Card from 'primevue/card'
import TextFormField from '@/components/shared/input/text-field/text-field.vue'
import TextareaFormField from '@/components/shared/input/textarea-field/textarea-field.vue'
import ButtonOutline from '@/components/shared/button/button-outline/ButtonOutline.vue'
import { METHOD_IMPORT, SELECT_LIST_METHOD_IMPORT } from '@/components/shared/enums/Media'
import type { OptionSelect } from '@/models/option'
import SelectButton from 'primevue/selectbutton'
import { ApiAddMedia } from '@/constants/ApiUrls'
import Checkbox from 'primevue/checkbox'

export default {
    computed: {
        METHOD_IMPORT() {
            return METHOD_IMPORT
        }
    },
    components: {
        FileUpload,
        Card,
        TabView,
        TabPanel,
        SelectButton,
        Checkbox,
        TextFormField,
        TextareaFormField,
        ButtonOutline
    },

    setup() {
        const newMedia: Ref<Media> = ref({
            title: null,
            description: null,
            link: null,
            status: true,
            displayHomePage: false,
            idCategory: null
        });

        const isLoading: Ref<boolean> = ref(false);

        const optionsMethodsImport: Ref<OptionSelect[]> = ref(SELECT_LIST_METHOD_IMPORT)

        return {
            newMedia,
            isLoading,
            optionsMethodsImport
        };
    },

    methods: {
        onFileSelect(event: any) {
            const file = event.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                this.newMedia.baseFile = e.target.result;
            };

            reader.readAsDataURL(file);
        },

        getEmbedUrl(url) {
            let videoId = url.split('v=')[1];
            const ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
            return `https://www.youtube.com/embed/${videoId}`;
        },

        changeMethodImport() {
            switch (this.newMedia.methodImport) {
                case METHOD_IMPORT.IMPORT_BASE :
                    this.newMedia.link = null;
                    break;

                case METHOD_IMPORT.IMPORT_URL :
                    this.newMedia.baseFile = null;
                    break;

                default: break;
            }
        },

        async addMedia() {
            try {
                const response = await fetch(ApiAddMedia, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.newMedia)
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la requête : ' + response.statusText);
                }
                this.loading = false
            } catch (error) {
                console.error('Erreur lors de l\'envoi :', error);
            }
        },
    }
};