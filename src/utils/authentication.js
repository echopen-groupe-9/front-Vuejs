import decode from 'jwt-decode'
import Router from 'vue-router'

const ID_TOKEN_KEY = 'idToken'
export const dashboardUrl = 'http://mft-test-preprod.esy.es/web/dashboard'

let router = new Router({
  mode: 'history'
})

export function logout () {
  clearIdToken()
  router.go('/')
}

// before enter route protected
export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/connexion',
      params: {message: `You can't access this page`}
    })
  } else {
    next()
  }
}

export function redirectDashboard (to, from, next) {
  window.location.href = dashboardUrl
}

export function getToken () {
  return localStorage.getItem(ID_TOKEN_KEY)
}

function clearIdToken () {
  localStorage.removeItem(ID_TOKEN_KEY)
}

// Get and store idToken in local storage
export function setIdToken (token) {
  localStorage.setItem(ID_TOKEN_KEY, token)
}

export function isLoggedIn () {
  const token = getToken()

  return !!token && !isTokenExpired(token)
}

function getTokenExpirationDate (encodedToken) {
  const token = decode(encodedToken)
  const date = new Date(0)

  if (!token.exp) { return null }

  date.setUTCSeconds(token.exp)

  return date
}

function isTokenExpired (token) {
  const expirationDate = getTokenExpirationDate(token)

  return expirationDate < new Date()
}
