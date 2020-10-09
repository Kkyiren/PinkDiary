import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vant/lib/index.css";

import "./assets/stylus/reset.stylus";

import "amfe-flexible";

import { Tabbar, TabbarItem,NavBar,Progress,Grid, GridItem,Cell,CellGroup,Radio,RadioGroup,Field,Button } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Progress);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(Button);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
