const state = {
    token: null
}

const getters = {
    isLoggedIn: (state) => {
        return !!state.token
    }
}

const actions = {

}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}