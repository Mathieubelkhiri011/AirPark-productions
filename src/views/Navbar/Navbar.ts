import { computed, onBeforeUnmount, onMounted, type Ref, ref } from 'vue'

export default {

  setup() {
    const showMobileMenu: Ref<boolean> = ref(false);

    const showMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
    };

    const isScrolled = ref(false);

    const navbarClass = computed(() => ({
      navbar: true,
      transparent: !isScrolled.value,
      scrolled: isScrolled.value,
      'open-menu': showMobileMenu.value,
      'closed-menu': !showMobileMenu.value
    }));

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showMobileMenu,
      navbarClass,
      showMenu
    }
  }
}