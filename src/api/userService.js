import api from '@/api/axios'

export default {
  login(payload) {
    return api.post(`auth/login/`, payload)
              .then(response => response.data)
  },
  register(payload) {
    return api.post(`auth/register/`, payload)
              .then(response => response.data)
  },
}