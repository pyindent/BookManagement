import api from '@/api/axios'
import header from '../header'

export default {
  login(payload) {
    return api.post(`auth/login/`, payload, { headers: header() })
              .then(response => response.data)
  },
  register(payload) {
    return api.post(`auth/register/`, payload, { headers: header() })
              .then(response => response.data)
  },
}