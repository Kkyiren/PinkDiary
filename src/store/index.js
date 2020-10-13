import Vue from "vue";
import Vuex from "vuex";
import { getClassify } from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    classifyList: [],
    phone: ""
  },
  mutations: {
    getClassifyList1(state, payload) {
      state.classifyList = payload.result;
    },
    setPhone(state, payload) {
      state.phone = payload
    }
  },
  actions: {
    async getClassifyList({ commit }, payload) {
      const res = await getClassify({
        type: payload.type
      });
      commit("getClassifyList1", res.data);
    }
  },
  modules: {}
});
