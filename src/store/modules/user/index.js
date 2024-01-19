import userService from "@/api/userService";
import router from "@/router";
import Cookies from "js-cookie";

const user = JSON.parse(Cookies.get('user'));

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
}

const mutations = {
    saveUserData(state, {data}){
        state.user = data
        state.isAuth = true
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