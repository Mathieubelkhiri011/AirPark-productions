import NavbarToggleButton from '@/components/menu/NavbarToggleButton/NavbarToggleButton'

let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            actualResizeHandler();

            // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
    }
};

export default {
    name: 'navbar',
    props: {
        transparent: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'relative'
        },
        menuClasses: {
            type: [String, Object, Array]
        },
        colorOnScroll: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: 'white',
            validator(value) {
                return [
                    'white',
                    'default',
                    'primary',
                    'danger',
                    'success',
                    'warning',
                    'info'
                ].includes(value);
            }
        },
        navMenuClasses: {
            type: String,
            default: ''
        },
        menuImage: {
            type: String
        },
        expand: {
            type: [String, Boolean],
            default: 'lg'
        }
    },
    provide() {
        return {
            closeNavbar: this.close
        };
    },
    components: {
        NavbarToggleButton
    },
    data() {
        return {
            showMenu: false,
            extraNavClasses: '',
            currentScrollValue: 0
        };
    },
    computed: {
        slotData() {
            return {
                toggle: this.toggle,
                open: this.open,
                close: this.close,
                isToggled: this.showMenu
            };
        },
        classes() {
            const color = `bg-${this.type}`;
            let navPosition = `navbar-${this.position}`;
            const colorOnScrollTransparent =
              this.colorOnScroll && this.currentScrollValue < this.colorOnScroll;

            if (this.position === 'fixed') {
                navPosition = 'fixed-top';
            }

            return [
                { 'navbar-transparent': this.transparent || colorOnScrollTransparent },
                { [color]: !this.transparent && this.colorOnScroll === 0 },
                this.expand ? `navbar-expand-${this.expand}` : '',
                navPosition,
                this.extraNavClasses
            ];
        }
    },
    methods: {
        setNav(value) {
            const htmlClasses = document.querySelector('html').classList;
            if (value) {
                htmlClasses.add('nav-open');
            } else {
                htmlClasses.remove('nav-open');
            }
            const isOpen = htmlClasses.contains('nav-open');
            const eventToTrigger = isOpen ? 'open' : 'close';
            this.showMenu = isOpen;
            this.$emit(eventToTrigger);
        },
        toggle() {
            this.setNav(!this.showMenu);
        },
        open() {
            this.setNav(true);
        },
        close() {
            if (this.showMenu) {
                this.setNav(false);
            }
        },
        handleScroll() {
            const scrollValue =
              document.body.scrollTop || document.documentElement.scrollTop;
            this.currentScrollValue = scrollValue;
            if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
                this.extraNavClasses = `bg-${this.type}`;
            } else {
                if (this.extraNavClasses) {
                    this.extraNavClasses = '';
                }
            }
        },
        scrollListener() {
            resizeThrottler(this.handleScroll);
        }
    },
    mounted() {
        document.addEventListener('scroll', this.scrollListener);
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.scrollListener);
    }
}