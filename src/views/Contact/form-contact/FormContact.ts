import { ApiSendEmail } from '@/constants/ApiUrls'
import { ref, type Ref } from 'vue'
import type { Email } from '@/models/email'
import type { Snackbar } from '@/models/snackbar'

export default {

  setup() {
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
      phone: false,
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
        phone: !mail.value.phone,
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

    const submitForm = () => {
      if (validateForm()) {
        loading.value = true;
        send();
      } else {
        snackbar.value = {
          show : true,
          icon : 'mdi-cancel',
          color : 'red',
          text : "Veuillez saisir tous les champs obligatoires !"
        };
      }
    };

    return {
      mail,
      errors,
      loading,
      snackbar,
      required,
      validateForm,
      send,
      submitForm
    }
  }
}
