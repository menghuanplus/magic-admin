
const state = {
    user: {}
}

const getters = {
    user: state => state.user
}

const mutations = {
    setUser (state, userInfo) {
        state.user = userInfo
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
