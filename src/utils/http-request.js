import axios from 'axios'
import {getToken} from './authentication'

const HTTP = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Authorization': 'Bearer ${getToken}'
  }
})

HTTP.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080';

export default HTTP
