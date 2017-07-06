import axios from 'axios'
import {getToken, dashboardUrl} from './authentication'

const HTTP = axios.create({
  baseURL: dashboardUrl,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080/',
    'Authorization': 'Bearer ${getToken}'
  }
})

export default HTTP
