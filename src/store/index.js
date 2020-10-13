import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import { getClassify, getShopping, getEletrical } from "../utils/api";
=======
import { getClassify, getMine } from "../utils/api";
>>>>>>> 4da0cc2df8209632d77625abbf800bbf13f39606

Vue.use(Vuex);

import url01 from "../assets/img/pink-09/gifts.png";
import url02 from "../assets/img/pink-09/recreation.png";
import url03 from "../assets/img/pink-09/traffic.png";

export default new Vuex.Store({
  state: {
    classifyList: [],
<<<<<<< HEAD
    shoppingList: [],
    electricalList: [],
=======
    phone: "",
    detailList: [
      {
        src: url03,
        name: "交通",
        subtotal: "-169.00"
      },
      {
        src: url02,
        name: "娱乐",
        subtotal: "-15.00"
      },
      {
        src: url01,
        name: "礼金",
        subtotal: "+30.00"
      }
    ],
    mineList: []
>>>>>>> 4da0cc2df8209632d77625abbf800bbf13f39606
  },
  mutations: {
    getClassifyList1(state, payload) {
      state.classifyList = payload.result;
    },
<<<<<<< HEAD
    ShoppingList(state, payload) {
      state.shoppingList = payload.result;
    },
    eletricalList(state, payload) {
      state.electricalList = payload.result;
    },
=======
    setPhone(state, payload) {
      state.phone = payload;
    },
    getDetailList(state, payload) {
      state.detailList.push(payload);
    },
    MineList(state, payload) {
      state.mineList = payload;
    }
>>>>>>> 4da0cc2df8209632d77625abbf800bbf13f39606
  },
  actions: {
    async getClassifyList({ commit }, payload) {
      const res = await getClassify({
        type: payload.type
      });
      commit("getClassifyList1", res.data);
    },
<<<<<<< HEAD
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
=======
    async getMineList({ commit }) {
      const res = await getMine();
      console.log(res.data);
      commit("MineList", res.data);
    }
  }
>>>>>>> 4da0cc2df8209632d77625abbf800bbf13f39606
});
