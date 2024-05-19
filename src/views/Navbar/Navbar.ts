export default {
  data() {
    return {
      showMobileMenu: false
    }
  },

  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
}