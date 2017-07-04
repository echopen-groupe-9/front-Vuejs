const Home = r => require.ensure([], () => r(require('../components/home-page/index.vue')));
const User = r => require.ensure([], () => r(require('../components/user-page/index.vue')));
const Contributor = r => require.ensure([], () => r(require('../components/contributor-page/index.vue')));
const PageNotFound = r => require.ensure([], () => r(require('../components/404-page/index.vue')));

const routes = [
    { name: 'Home', path: '/', component: Home},
    { name: 'Contributor', path: '/contributor/:contributor', component: Contributor },
    { name: 'User', path: '/user/:user', component: User },
    { path: '*', component: PageNotFound }
];

export default routes
