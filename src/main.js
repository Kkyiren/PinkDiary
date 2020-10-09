import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vant from "vant";

import { Popup,NavBar,Icon,Calendar,Overlay } from "vant";

Vue.use(Popup);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Calendar);
Vue.use(Overlay);

import "vant/lib/index.css";

import "./assets/stylus/reset.stylus";

import "amfe-flexible";


Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
