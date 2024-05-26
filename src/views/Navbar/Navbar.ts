import { type Ref, ref } from 'vue'

export default {

  setup() {
    const showMobileMenu: Ref<boolean> = ref(false);

    const showMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
    };

    return {
      showMobileMenu,
      showMenu
    }
  }
}