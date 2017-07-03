import VueRouter from 'vue-router';
import routes from '../config/routes';

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;