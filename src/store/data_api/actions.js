import * as types from './mutation-types'
import HTTP from '../../utils/http-request'

export const fetchNews = ({commit}) => {
  HTTP.get('news')
  .then(response => {
      let allNews;
      let allEvents;
      response.forEach(news => {
        if (news.type === 'event') {
          allEvents.push(news)
        } else {
          allNews.push(news)
        }
      })

      commit(types.SET_NEWS, allNews)
      commit(types.SET_EVENTS, allEvents)
  })
  .catch(response => {
    console.log('error', response)
  })
}

