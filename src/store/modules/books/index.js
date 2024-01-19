import bookService from "@/api/bookService"

// initial state
// shape: [{ id, quantity }]
const state = {
  books: [],
}

// getters
const getters = {
  books: state => {
    return state.books
  }
}

// actions
const actions = {
  getBooks({commit}){
    return bookService.getBooks().then(res=>{
      commit('setBooks', res.results)
      Promise.resolve()
    }).catch(error=>{
      Promise.reject(error)
    })
  },deleteBook({commit}, slug) {
    return bookService.deleteBook(slug).then(()=>{
      commit('deleteBook', slug)
    })
  }
}

// mutations
const mutations = {
  setBooks(state, books){
    state.items = books
  },
  deleteBook(state, slug){
    state.items = state.items.filter(obj => obj.slug !== slug)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}