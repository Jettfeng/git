export default {
    namespaced: true,
    state: { moduleA: 'moduleA' },
    getters: {
        getModuleA: (state) => state.moduleA,
        rootAndmoduleA: (state, getters, rootState) => state.moduleA +' '+ rootState.rootState
    },
    mutations: {
        mutationA(state, a) {
            state.moduleA = a
        }
    },
    actions: {
        actionA({ commit }, a) {
            commit('mutationA', a)
        }
    }
}