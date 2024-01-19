import api from '@/api/axios'

export default {
  getBooks() {
    return api.get(`books/`)
              .then(response => response.data)
  },
  getBook(slug) {
    return api.get(`books/`, slug)
              .then(response => response.data)
  },
  deleteBook(slug) {
    return api.delete(`books/${slug}/`)
              .then(response => response.data)
  }
}