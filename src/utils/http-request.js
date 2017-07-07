import axios from 'axios'
import {getToken, dashboardUrl} from './authentication'

export const base_url = 'http://mft-test-preprod.esy.es/web'

const HTTP = axios.create({
  baseURL: base_url,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080/'
  }
})

export default HTTP
