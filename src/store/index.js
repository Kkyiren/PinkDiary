import Vue from "vue";
import Vuex from "vuex";
import { getClassify, getShopping, getEletrical } from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    classifyList: [],
    shoppingList: [],
    electricalList: [],
  },
  mutations: {
    getClassifyList1(state, payload) {
      state.classifyList = payload.result;
    },
    ShoppingList(state, payload) {
      state.shoppingList = payload.result;
    },
    eletricalList(state, payload) {
      state.electricalList = payload.result;
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
    },
    async getEletricalList({ commit }) {
      const res = await getEletrical();
      console.log(res.data);
      commit("eletricalList", res.data);
    },
  },
  modules: {}
});
