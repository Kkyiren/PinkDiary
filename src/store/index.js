import Vue from "vue";
import Vuex from "vuex";
import { getMine } from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mineList: [],
  },
  mutations: {
    MineList(state, payload) {
      state.mineList = payload;
    },
  },
  actions: {
    async getMineList({ commit }) {
      const res = await getMine();
      console.log(res.data);
      commit("MineList", res.data);
    }
  },
  modules: {}
});
