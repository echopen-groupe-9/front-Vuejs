import Vue from 'vue'

/* Import Router */
import VueRouter from 'vue-router';
import router from './core/router';
Vue.use(VueRouter);

/* Import Components */
import App from './App.vue'
import store from './store/index'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

const app = new Vue({
  store,
  router,
  template: '<app></app>',
  components: {
    'app': App
  }
}).$mount('#app')
