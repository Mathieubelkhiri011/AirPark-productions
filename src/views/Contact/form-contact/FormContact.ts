import { ApiSendEmail } from '@/constants/ApiUrls'
import ButtonOutline from '@/components/shared/button/button-outline/ButtonOutline.vue'
import { ref, type Ref } from 'vue'
import type { Email } from '@/models/email'
import type { Snackbar } from '@/models/snackbar'
import Recaptcha from '@/components/shared/recaptcha/Recaptcha.vue';

export default {
  components: {
    ButtonOutline,
    Recaptcha
  },

  setup() {
    const recaptchaToken = ref<string | null>(null);

    const mail: Ref<Email> = ref({
      type: null,
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      body: null
    });

    const errors = ref({
      type: false,
      firstname: false,
      lastname: false,
      email: false,
      body: false
    });

    const loading: Ref<boolean> = ref(false);

    const snackbar: Ref<Snackbar> = ref({
      show : false,
      icon : 'mdi-checkbox-marked-circle',
      color : 'green',
      text : "Une erreur est survenue lors de l'envoi !"
    });

    const required = (v: any) => {
      return !!v || ''
    };

    const validateForm = () => {
      errors.value = {
        type: !mail.value.type,
        firstname: !mail.value.firstname,
        lastname: !mail.value.lastname,
        email: !mail.value.email,
        body: !mail.value.body
      };

      return !Object.values(errors.value).includes(true)
    };

    const send = async () => {
      try {
        const response = await fetch(ApiSendEmail, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(mail.value)
        });

        if (!response.ok) {
          snackbar.value = {
            show : true,
            icon : 'mdi-cancel',
            color : 'red',
            text : `Une erreur est survenue lors de l'envoi du mail : ${response.statusText}`
          };
        } else {
          snackbar.value = {
            show : true,
            icon : 'mdi-checkbox-marked-circle',
            color : 'green',
            text : `Mail envoyé avec succès !`
          };
        }
        loading.value = false;
      } catch (error) {
        snackbar.value = {
          show : true,
          icon : 'mdi-cancel',
          color : 'red',
          text : `Une erreur est survenue lors de l'envoi du mail : ${error}`
        };
      }
    };

    const submitForm = async () => {
      if (validateForm()) {
        if (recaptchaToken.value) {
              loading.value = true;
              await send();
            } else {
              snackbar.value = {
                show: true,
                icon: 'mdi-cancel',
                color: 'red',
                text: "Veuillez vérifier le reCAPTCHA."
              };
            }
      } else {
        snackbar.value = {
          show : true,
          icon : 'mdi-cancel',
          color : 'red',
          text : "Veuillez saisir tous les champs obligatoires !"
        };
      }
    };

    const onCaptchaVerified = (token: string) => {
      recaptchaToken.value = token;
    };

    return {
      mail,
        errors,
        loading,
        snackbar,
        required,
        validateForm,
        send,
        submitForm,
        onCaptchaVerified
    }
  }
}
