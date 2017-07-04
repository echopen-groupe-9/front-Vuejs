import * as types from './mutation-types'

export const signIn = ({commit}) => {
  commit(types.LOGIN)

  // after response 200, commit(types.LOGIN_SUCCESS)
}

export const signUp = ({commit}) => {
  commit(types.LOGIN)

  // after response 200, commit(types.LOGIN_SUCCESS)
}

export const logout = ({commit}) => {
  commit(types.LOGOUT)
}
