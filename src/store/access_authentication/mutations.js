import * as authentication from '../../utils/authentication'
import * as types from './mutation-types'

const mutations = {
  [types.LOGIN] (state) {
    state.pending = true
  },
  [types.LOGIN_SUCCESS] (state) {
    let user = decode(authentication.getToken())._doc

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

export default mutations
