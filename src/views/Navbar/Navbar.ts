import { computed, onBeforeUnmount, onMounted, type Ref, ref } from 'vue'

import logo from '@/assets/images/home/logoAirPark.png';

export default {

  setup() {
    const showMobileMenu: Ref<boolean> = ref(false);

    const showDropdownPriseVue: Ref<boolean> = ref(false);

    const showDropdownInspection: Ref<boolean> = ref(false);

    const showMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
    };

    const  toggleDropdownPriseVue = () => {
      showDropdownPriseVue.value = !showDropdownPriseVue.value;
    }
    const  toggleDropdownInspection = () => {
      showDropdownInspection.value = !showDropdownInspection.value;
    }

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
      logo,
      showMobileMenu,
      showDropdownPriseVue,
      showDropdownInspection,
      navbarClass,
      showMenu,
      toggleDropdownPriseVue,
      toggleDropdownInspection
    }
  }
}