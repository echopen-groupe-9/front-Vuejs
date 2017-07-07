import * as types from './mutation-types'

const mutations = {
  [types.SET_NEWS] (state, allNews) {
    state.allNews = allNews
  },
  [types.SET_EVENTS] (state, allEvents) {
    state.allEvents = allEvents
  }
}

export default mutations
