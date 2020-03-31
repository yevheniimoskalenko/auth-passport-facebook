import Cookies from 'js-cookie'

export const state = () => ({
    person: null
})
export const getters = {}
export const mutations = {
    setPerson(state, payload) {
        state.person = payload;
    }
}
export const actions = {
    async createUser({
        commit
    }, payload) {
        try {
            await this.$axios.$post('/api/createForm', payload)
        } catch (e) {
            commit('SetError', e, { root: true })
            throw e
        }
    },
    async AuthForm({ commit }, payload) {
        try {
            const person = await this.$axios.$post('/api/auth', payload)
            commit("setPerson", person)
            Cookies.set('person', person)
        } catch (e) {
            commit("SetError", e, { root: true })
        }
    }
}
