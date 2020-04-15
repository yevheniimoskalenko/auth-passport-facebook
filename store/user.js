export const state = () => ({

})
export const getters = {

}
export const mutations = {

}
export const actions = {
    async  settings({ commit }, payload) {
        try {
            return await this.$axios.$get(`/setting/load/${payload}`)
        } catch (e) {
            commit("SetError", e, { root: true })
            throw e
        }
    },
    async mygemes({ commit }, payload) {
        try {
            return await this.$axios.$get(`/setting/games/${payload}`)
        } catch (e) {
            commit("SetError", e, { root: true })
            throw e
        }
    },
    async editPass({ commit }, payload) {
        try {
            await this.$axios.$put('/setting/editpass/', payload)
        } catch (e) {
            commit("SetError", e, { root: true })
            throw e
        }
    },
    async editData({ commit }, payload) {
        try {
            await this.$axios.$put('/setting/edit', payload)
        } catch (e) {
            commit("SetError", e, { root: true })
            throw e
        }
    },
    async money({ commit }, payload) {
        try {
            await this.$axios.$put('/setting/money', payload)
        } catch (e) {
            commit("SetError", e, { root: true })
            throw e
        }
    }
}
