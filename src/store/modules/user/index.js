import userService from "@/api/service/user.service";
import router from "@/router";
import Cookies from "js-cookie";
import TokenService from "@/api/token";

const userdata = Cookies.get('user')
const user = userdata ? JSON.parse(userdata) : null

const state = user ? {
    user: user.username,
    isAuth: true
 }: {
    user: null,
    isAuth: false
 }

 // getters
const getters = {
    book: state => {
      return state.item
    },
    isAuthenticated: state => {
        return state.isAuth
    }
  }

const actions = {
    login({commit}, payload) {
        return userService.login(payload).then(res => {
            res.username = payload.username
            TokenService.setUser(res)
            commit('saveUserData', payload.username)
            router.push('/books')
            return Promise.resolve(res)
        }).catch(error => {
            return Promise.reject(error)
        })
    },
    logout({commit}) {
        TokenService.removeUser()
        commit('deleteUserData')
        router.push('/')
    }
}

const mutations = {
    saveUserData(state, {data}){
        state.user = data
        state.isAuth = true
    },
    deleteUserData(state){
        state.user = null
        state.isAuth = false
    },
    setError(state, {data}) {
        state.error = data
    }
}

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
}