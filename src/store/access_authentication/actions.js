import * as types from './mutation-types'

export const registration = ({commit}) => {
  commit(types.LOGIN)

  // after response 200, commit(types.LOGIN_SUCCESS)
}

export const authentication = ({commit}) => {
  commit(types.LOGIN)

  // after response 200, commit(types.LOGIN_SUCCESS)
}

export const logout = ({commit}) => {
  commit(types.LOGOUT)
}
