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
  },
  mounted() {
    window.grecaptcha.render(this.$el.querySelector('.g-recaptcha'), {
      sitekey: this.siteKey,
      callback: this.onCaptchaVerified,
    });
  },
};