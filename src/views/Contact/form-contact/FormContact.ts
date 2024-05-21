import { ApiSendEmail } from '@/constants/ApiUrls'
import ButtonOutline from '@/components/shared/button/button-outline/ButtonOutline.vue'
import { ref, type Ref } from 'vue'
import type { Email } from '@/models/email'

export default {
  components: {
    ButtonOutline
  },

  setup() {
    const mail: Ref<Email> = ref({
      type: null,
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      body: null
    })

    const errors = ref({
      type: false,
      firstname: false,
      lastname: false,
      email: false,
      phone: false,
      body: false
    })

    const loading: Ref<boolean> = ref(false);

    let snackbar = ref({
      show : false,
      icon : "mdi-checkbox-marked-circle",
      color : 'green',
      text : 'Une erreur est survenue lors de l\'envoi !'
    });

    return {
      mail,
      errors,
      loading,
      snackbar
    }
  },

  methods: {
    required(v) {
      return !!v || ''
    },

    async send() {
      try {
        const response = await fetch(ApiSendEmail, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.mail)
        })

        if (!response.ok) {
          this.snackbar = {
            show : true,
            icon : 'mdi-cancel',
            color : 'red',
            text : `Une erreur est survenu lors de l'envoi du mail : ${response.statusText}`
          };
        } else {
          this.snackbar = {
            show : true,
            icon : 'mdi-checkbox-marked-circle',
            color : 'green',
            text : `Mail envoyé avec succès !`
          };
        }
        this.loading = false
      } catch (error) {
        this.snackbar = {
          show : true,
          icon : 'mdi-cancel',
          color : 'red',
          text : `Une erreur est survenu lors de l'envoi du mail : ${error}`
        };
      }
    },

    validateForm() {
      this.errors = {
        type: !this.mail.type,
        firstname: !this.mail.firstname,
        lastname: !this.mail.lastname,
        email: !this.mail.email,
        phone: !this.mail.phone,
        body: !this.mail.body
      }

      return !Object.values(this.errors).includes(true)
    },

    submitForm() {
      if (this.validateForm()) {
        this.loading = true
        //this.send()
      } else {
        this.snackbar = {
          show : true,
          icon : 'mdi-cancel',
          color : 'red',
          text : "Veuillez saisie tous les champs obligatoires !"
        };
      }
    }
  }
}
