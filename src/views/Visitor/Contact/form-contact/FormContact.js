import TextFormField from '../../../components/shared/input/text-field/text-field.vue';
import TextareaFormField from '../../../components/shared/input/textarea-field/textarea-field.vue';
import ButtonOutline from '../../../components/shared/button/button-outline/ButtonOutline.vue';
import { ApiSendEmail } from '@/constants/ApiUrls'

export default {
    components: {
        TextFormField,
        TextareaFormField,
        ButtonOutline
    },
    data() {
        return {
            mail: {
                from: '',
                subject: '',
                body: ''
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
        async send() {
            try {
                const response = await fetch(ApiSendEmail, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.mail)
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la requête : ' + response.statusText);
                }
                this.loading = false
            } catch (error) {
                console.error('Erreur lors de l\'envoi :', error);
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