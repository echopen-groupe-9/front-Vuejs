import * as types from './mutation-types'
import axios from 'axios'
import base_url from '../../utils/http-request'

export const fetchNews = ({commit}) => {
  axios.get('http://mft-test-preprod.esy.es/web/news')
  .then(response => {
      let allNews = [];
      let allEvents = [];

      response.data.forEach(news => {
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

