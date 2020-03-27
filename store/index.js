export const state = () => ({
})
export const getters = {}
export const mutations = {}
export const actions = {
    async register({
        commit
    }, payload) {
        try {
            await this.$axios.$post('/api/login', payload)
        } catch (e) {

        }
    }
}
