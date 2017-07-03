export const isLoggedIn = (state) => {
  return state.isLoggedIn
}

export const getUserId = (state) => {
  return state.user.id
}

export const getUserEmail = (state) => {
  return state.user.email
}

export const getUserRole = (state) => {
  return state.user.role
}
