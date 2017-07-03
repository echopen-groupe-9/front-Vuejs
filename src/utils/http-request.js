import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://localhost:8000/api/`,
  headers: {
    'Authorization': 'Bearer {token}',
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  }
})
