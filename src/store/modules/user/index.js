import userService from "@/api/userService";
import router from "@/router";

const state = {
    user: null,
    isAuth: false
}

const actions = {
    login({commit}, payload) {
        return userService.login(payload).then(res => {
            console.log(res)
            commit('saveUserData', res)
            router.push('/books')
            return Promise.resolve(res)
        }).catch(error => {
            return Promise.reject(error)
        })
    }
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