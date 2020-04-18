export const state = () => ({
})
export const getters = {

}
export const mutations = {

}
export const actions = {
    async createCatalog({ commit }, payload) {
        try {
            await this.$axios.$post('/admin/create', payload)
        } catch (e) {
            commit('SetError', e, { root: true })
            throw e
        }
    },
    async roulette({ commit }, payload) {
        try {
            return await this.$axios.$post('/admin/roulette', payload)

        } catch (e) {
            commit('SetError', e, { root: true })
            throw e
        }
    }
}
