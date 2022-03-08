require('./bootstrap');

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min');

import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.use(plugin);
        app.config.globalProperties.$route = route
        app.config.globalProperties.$moment = require('moment');
        app.config.globalProperties.$moment.locale('tr');
        app.mount(el);
    },
})
InertiaProgress.init({color:'red'});
