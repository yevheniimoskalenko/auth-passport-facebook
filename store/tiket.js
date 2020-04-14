export const state = () => ({

})
export const getters = {

}
export const mutations = {

}
export const actions = {
    async buyTiket({ commit }, payload) {
        try {
            await this.$axios.$post('/api/catalog/buytikets', payload)
        } catch (e) {
            commit("SetError", e, { root: true })
        }
    }
}