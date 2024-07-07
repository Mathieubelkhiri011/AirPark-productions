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
    let attempts = 0;
      const maxAttempts = 50; // adjust according to your needs
      const checkGrecaptcha = () => {
        if (window.grecaptcha) {
          clearInterval(this.intervalId);
          this.renderCaptcha();
        } else if (attempts >= maxAttempts) {
          clearInterval(this.intervalId);
          console.error('Failed to load reCAPTCHA after multiple attempts');
        }
        attempts++;
      };

      this.intervalId = setInterval(checkGrecaptcha, 100);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  template: `<div class="g-recaptcha"></div>`,
};
