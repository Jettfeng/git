export default {
    namespaced: true,
    state: { moduleB: 'moduleB' },
    getters: {
        getModuleB: (state) => state.moduleB
    },
    mutations: {
        mutationB(state, b) {
            state.moduleB = b
        }
    },
    actions: {
        actionB({ commit }, b) {
            commit('mutationB', b)
        }
    }
}