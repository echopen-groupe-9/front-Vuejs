import PageNotFound from '../components/404-page/index.vue';
import Home from '../components/home-page/index.vue';
import User from '../components/user-page/index.vue';
import Contributor from '../components/contributor-page/index.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/:contributor', component: Contributor },
    { path: '/user/:user', component: User },
    { path: '*', component: PageNotFound }
];

export default routes;