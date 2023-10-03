import TextFormField from '../../../components/shared/input/text-field/text-field.vue';
import TextareaFormField from '../../../components/shared/input/textarea-field/textarea-field.vue';
import ButtonOutline from '../../../components/shared/button/button-outline/ButtonOutline.vue';

export default {
    components: {
        TextFormField,
        TextareaFormField,
        ButtonOutline
    },
    data() {
        return {
            mail: {
                nom: '',
                address: '',
                content: ''
            },
            loading: false,
            rules: {
                required: value => !!value || 'Ce champ est obligatoire.',
            },
        };
    },
    methods: {
        submitForm() {
            if (this.validateForm()) {
                this.loading = true;
                setTimeout(() => {
                    this.mail.nom = '';
                    this.mail.address = '';
                    this.mail.content = '';
                    this.loading = false;
                }, 2000);
            }
        },
        validateForm() {
            return (
                !!this.mail.nom.trim() &&
                !!this.mail.address.trim() &&
                !!this.mail.content.trim()
            );
        },
    },
};