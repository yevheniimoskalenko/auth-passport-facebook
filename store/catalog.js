export const state = () => ({

})
export const getters = {

}
export const mutations = {

}
export const actions = {
    async fetch({ commit }) {
        try {
            return await this.$axios.$get('/api/catalog/all')
        } catch (e) {
            commit('setError', e, { root: true })
            throw e
        }
    },
}
