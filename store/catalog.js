export const state = () => ({

})
export const getters = {

}
export const mutations = {

}
export const actions = {
  async fetch({
    commit
  }) {
    try {
      return await this.$axios.$get('/api/catalog/all')
    } catch (e) {
      commit('SetError', e, {
        root: true
      })
      throw e
    }
  },
  async fetchById({
    commit
  }, id) {
    try {
      return await this.$axios.$get(`/api/catalog/fetchById/${id}`)
    } catch (e) {
      commit("SetError", e, {
        root: true
      })
      throw e
    }
  },
  async fetchTikets({
    commit
  }, payload) {
    try {
      return await this.$axios.$get(`/api/catalog/tikets/${payload}`)
    } catch (e) {
      commit("SetError", e, {
        root: true
      })
    }
  },
  async fetchPageTickets({
    commit
  }, payload) {
    try {
      return await this.$axios.$get(`/api/catalog/tickets/page/${payload.id}/${payload.page}`)
    } catch (e) {
      commit("SetError", e, {
        root: true
      })
    }
  }

}
