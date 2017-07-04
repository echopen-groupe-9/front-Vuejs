import {requireAuth} from '../utils/authentication'

const Home = r => require.ensure([], () => r(require('../components/home-page/index.vue')));
const Contributor = r => require.ensure([], () => r(require('../components/contributor-page/index.vue')));
const Dashboard = r => require.ensure([], () => r(require('../components/dashboard-page/index.vue')));
const Authentication = r => require.ensure([], () => r(require('../components/authentication-page/index.vue')));
const PageNotFound = r => require.ensure([], () => r(require('../components/404-page/index.vue')));

const routes = [
    { name: 'Home', path: '/', component: Home},
    { name: 'Contributor', path: '/contributor/:contributor', component: Contributor },
    { name: 'Connexion', path: '/connexion', component: Authentication},
    { name: 'Dashboard', path: '/dashboard', component: Dashboard, beforeEnter: requireAuth},
    { path: '*', component: PageNotFound }
];

export default routes
