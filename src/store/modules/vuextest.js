
export default {
  namespaced: true,

  state: {
    data: ''
  },

  getters: {
    getData: state => state.data,
  },

  mutations: {
    updateData(state, payload) {
      state.data = payload
    }
  },

  actions: {
    async fetchData({ commit }, { data }) {
      try {
        commit('updateData', data)
      } catch (e) {
        // eslint no empty
      }

    }
  }
}
