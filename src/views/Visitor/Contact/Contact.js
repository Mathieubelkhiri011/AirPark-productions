import {onMounted, ref} from 'vue';

import FormContact from './form-contact/FormContact.vue';

import {getCurrentyDay} from "@/components/shared/utils/CommonUtils";
import {DayOfWeekEnums} from '@/components/shared/enums/DayOfWeekEnums'

export default {
    components: {
        FormContact,
    },
    setup() {
        const products = ref([]);
        const jourActuel = ref(null)

        onMounted(async () => {
            jourActuel.value = getCurrentyDay();
        });

        return {
            products,
            jourActuel,
            DayOfWeekEnums
        };
    },
};
