export const state = () => ({
})
export const getters = {}
export const mutations = {}
export const actions = {
    async createUser({
        commit
    }, payload) {
        try {
            await this.$axios.$post('/api/login', payload)
        } catch (e) {
            commit('SetError', e, { root: true })
            throw e
        }
    }
}
