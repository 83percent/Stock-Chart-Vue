// Component
import Home from '../components/home/Index.vue';

import BookMark from '../components/bookmark/Index.vue';

export default {
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/bookmark',
            component: BookMark
        }
    ],
}