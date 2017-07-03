import Vue from 'vue'
import Vuex from 'vuex'
import accessAuthentication from './access_authentication/index'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    accessAuthentication
  },
  strict: true
})

global.store = store

export default store
