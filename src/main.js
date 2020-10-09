import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vant from "vant";

import { Popup, Search, GridItem, Grid, Image as VanImage } from "vant";
Vue.use(Popup);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);


import "vant/lib/index.css";

import "./assets/stylus/reset.stylus";

import "amfe-flexible";

// Vue.use(Vant);

Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");