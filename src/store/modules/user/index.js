import userService from "@/api/userService";
import router from "@/router";
import Cookies from "js-cookie";

const userdata = Cookies.get('user')
const user = userdata ? JSON.parse(userdata) : null

const state = user ? {
    user: user.username,
    isAuth: true
 }: {
    user: null,
    isAuth: false
 }

const actions = {
    login({commit}, payload) {
        return userService.login(payload).then(res => {
            res.username = payload.username
            Cookies.set('user', JSON.stringify(res))
            commit('saveUserData', payload.username)
            router.push('/books')
            return Promise.resolve(res)
        }).catch(error => {
            return Promise.reject(error)
        })
    },
    logout({commit}) {
        Cookies.remove('user')
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
    state,
    actions,
    mutations
}