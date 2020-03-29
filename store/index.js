export const state = () => ({
    error: null
})
export const getters = {
    error: state => state.error
}
export const mutations = {
    SetError(state, error) {
        state.error = error
        console.log(error)
    },
    clearError(state) {
        state.error = null
    }
}
export const actions = {
}
