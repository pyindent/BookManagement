import api from '@/api/axios'

export default {
  getBooks() {
    return api.get(`auth/books/`)
              .then(response => response.data)
  },
  getBook(slug) {
    return api.get(`auth/books/`, slug)
              .then(response => response.data)
  }
}