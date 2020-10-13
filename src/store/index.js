import Vue from "vue";
import Vuex from "vuex";
import { getClassify, getShopping } from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    classifyList: [],
    shoppingList: []
  },
  mutations: {
    getClassifyList1(state, payload) {
      state.classifyList = payload.result;
    },
    ShoppingList(state, payload) {
      state.shoppingList = payload.result;
    },
  },
  actions: {
    async getClassifyList({ commit }, payload) {
      const res = await getClassify({
        type: payload.type
      });
      commit("getClassifyList1", res.data);
    },
    async getShoppingList({ commit }) {
      const res = await getShopping();
      console.log(res.data);
      commit("ShoppingList", res.data);
    }
  },
  modules: {}
});
