import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: '',
    sectionTitle: ''
  },
  mutations: {
    setTitle (state, payload) {
      state.pageTitle = payload
    },
    setSectionTitle (state, payload) {
      state.sectionTitle = payload
    }
  },
  actions: {
    clearTitles ({ commit }) {
      commit('setTitle', '')
      commit('setSectionTitle', '')
    }
  }
})
