export const state = () => ({
    form: null
})
export const mutations = {
    form(state, payload) {
        state.form = payload;
    }
}
export const getters = {
    form: (state) => {
        return state.form
    }
}
export const actions = {
    async payButton({ commit }, payload) {
        try {
            const form = await this.$axios.$post("/api/pay/create", payload)
            commit("form", form)
        } catch (e) {
            commit('SetError', e, { root: true })
            throw e
        }
    }
}
