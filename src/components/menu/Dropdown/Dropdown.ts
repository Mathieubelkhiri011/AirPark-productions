export default {
    name: 'drop-down',
    props: {
        direction: {
            type: String,
            default: 'down'
        },
        title: String,
        icon: String,
        position: String,
        hideArrow: Boolean,
        tag: {
            type: String,
            default: 'li'
        }
    },
    data() {
        return {
            isOpen: false
        };
    },
    provide() {
        return {
            closeDropDown: this.closeDropDown
        }
    },
    methods: {
        toggleDropDown() {
            this.isOpen = !this.isOpen;
            this.$emit('change', this.isOpen);
        },
        closeDropDown() {
            this.isOpen = false;
            this.$emit('change', this.isOpen);
        }
    }
};