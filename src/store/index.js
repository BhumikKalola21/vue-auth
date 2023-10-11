import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    auth: false,
    user: {},
  },
  getters: {
    user: (state) => state.user,
    auth: (state) => state.auth,
    token: (state) => state.token,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_AUTH(state, value) {
      state.auth = value;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    resetUser({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", {});
      commit("SET_AUTH", false);
    },
  },

});
export default store;
