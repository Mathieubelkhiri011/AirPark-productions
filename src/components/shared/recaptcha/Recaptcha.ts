export default {
  name: "Recaptcha",
  props: {
    siteKey: {
      type: String,
      required: true,
    },
  },
  methods: {
    onCaptchaVerified(response) {
      this.$emit("verify", response);
    },
    renderCaptcha() {
      if (window.grecaptcha) {
        window.grecaptcha.render(this.$el.querySelector('.g-recaptcha'), {
          sitekey: this.siteKey,
          callback: this.onCaptchaVerified,
        });
      } else {
        console.error('reCAPTCHA library not loaded');
      }
    }
  },
  mounted() {
    const intervalId = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(intervalId);
        this.renderCaptcha();
      }
    }, 100);
  },
  template: `<div class="g-recaptcha"></div>`,
};
