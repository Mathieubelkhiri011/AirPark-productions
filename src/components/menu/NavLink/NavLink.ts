export default {
    name: 'nav-link',
    inject: ['closeNavbar', 'closeDropDown'],
    props: {
        to: {
            type: [String, Object],
            default: undefined
        }
    },
    computed: {
        componentType() {
            return this.to ? 'router-link' : 'a';
        }
    },
    methods: {
        closeNav() {
            if (this.closeNavbar) {
                this.closeNavbar();
            }
            if (this.closeDropDown) {
                this.closeDropDown()
            }
        }
    }
};