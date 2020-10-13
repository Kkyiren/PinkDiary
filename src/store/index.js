import Vue from "vue";
import Vuex from "vuex";
import { getClassify, getMine } from "../utils/api";

Vue.use(Vuex);

import url01 from "../assets/img/pink-09/gifts.png";
import url02 from "../assets/img/pink-09/recreation.png";
import url03 from "../assets/img/pink-09/traffic.png";

export default new Vuex.Store({
  state: {
    classifyList: [],
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
  },
  mutations: {
    getClassifyList1(state, payload) {
      state.classifyList = payload.result;
    },
    setPhone(state, payload) {
      state.phone = payload;
    },
    getDetailList(state, payload) {
      state.detailList.push(payload);
    },
    MineList(state, payload) {
      state.mineList = payload;
    }
  },
  actions: {
    async getClassifyList({ commit }, payload) {
      const res = await getClassify({
        type: payload.type
      });
      commit("getClassifyList1", res.data);
    },
    async getMineList({ commit }) {
      const res = await getMine();
      console.log(res.data);
      commit("MineList", res.data);
    }
  }
});
