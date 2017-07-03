import * as types from './mutation-types'

const mutations = {
  [types.LOGIN] (state) {
    state.pending = true
  },
  [types.LOGIN_SUCCESS] (state) {
    let user = {
      firstname: 'renan',
      lastname: 'bronchart',
      email: 'renan.bronchart@gmail.com',
      role: 'contributor'
    }

    state.pending = false
    state.isLoggedIn = true
    state.user = user
  },
  [types.LOGOUT] (state) {
    state.isLoggedIn = true
    state.pending = false
    state.user = {}
  }
}
