import api from '@/api/axios'
import header from '../header'

export default {
  getBooks() {
    return api.get(`books/`, { headers: header() })
              .then(response => response.data)
  },
  getBook(slug) {
    return api.get(`books/${slug}/`, { headers: header() })
              .then(response => response.data)
  },
  deleteBook(slug) {
    return api.delete(`books/${slug}/`, { headers: header() })
              .then(response => response.data)
  }
}