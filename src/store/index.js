import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import url01 from "../assets/img/pink-09/gifts.png";
import url02 from "../assets/img/pink-09/recreation.png";
import url03 from "../assets/img/pink-09/traffic.png";

export default new Vuex.Store({
  state: {
    detailList:[
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
    ]

  },
  mutations: {
    getDetailList(state,payload){
      state.detailList.push(payload)  
      console.log(this.state.detailList)
    },
  },
  actions: {},
  modules: {}
});
