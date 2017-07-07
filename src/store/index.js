import Vue from 'vue'
import Vuex from 'vuex'
import accessAuthentication from './access_authentication/index'
import data_api from './data_api/index'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    data_api,
    accessAuthentication
  },
  strict: true
})

global.store = store

export default store
