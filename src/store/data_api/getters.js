export const getAllNews = (state) => {
  return state.allNews
}

export const getAllEvents = (state) => {
  return state.allEvents
}

export const latestNews = (state, number) => {
  return state.allNews.slice(0, (number + 1))

}

export const latestEvents = (state, number) => {
  return state.allEvents.slice(0, (number + 1))
}

export const getImage = (state) => {
  return state.base_url_image
}
