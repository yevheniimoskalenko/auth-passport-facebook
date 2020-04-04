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
    async fetchError({ commit }, payload) {
        try {
            await commit('SetError', payload, { root: true })
        } catch (e) {
            console.log(e)
        }
    }
}
