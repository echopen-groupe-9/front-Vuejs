import * as types from './mutation-types'
import * as authentication from '../../utils/authentication'
import HTTP from '../../utils/http-request'

export const signIn = ({commit}, userInfos) => {
  commit(types.LOGIN)

  return new Promise((resolve, reject) => {
    let message;

    console.log('signIn')

    HTTP.post('users', {email: userInfos.email, password: userInfos.password})
    .then(response => {
      let token = response.token

      console.log('*********************************$')
      console.log(response)
      console.log('*********************************$')

      if (token) {
        message = 'Congratulation, You are connected'

        authentication.setIdToken(token)
        commit(types.LOGIN_SUCCESS)

        resolve(message)
      } else {
        message = 'Bad email or password'

        reject(message)
      }
    })
    .catch(response => {
      message = 'Server error'

      reject(message)
    })
  })
}

export const signUp = ({commit}, userInfos) => {
  commit(types.LOGIN)

  return new Promise((resolve, reject) => {
    let message;

    HTTP.post('users', {email: userInfos.email, password: userInfos.password})
    .then(response => {
      let token = response.token

      if (token) {
        message = 'Congratulation, you are connected'

        authentication.setIdToken(token)
        // localStorage.setItem(ID_TOKEN_KEY, token)

        commit(types.LOGIN_SUCCESS)
        resolve(message)
      } else {
        message = 'Email already exists'

        reject(message)
      }
    }).catch(response => {
      message = 'Server error'

      reject(message)
    })
  })
}

export const logout = ({commit}) => {
  commit(types.LOGOUT)
  authentication.logout()
}
