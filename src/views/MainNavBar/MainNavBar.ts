import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
    name: 'main-navbar',
    props: {
        transparent: Boolean,
        colorOnScroll: Number
    },
    components: {
        DropDown,
        Navbar,
        NavLink,
        [Popover.name]: Popover
    }
};