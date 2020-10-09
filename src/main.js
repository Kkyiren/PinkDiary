import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vant from "vant";

import { Popup,Icon,Calendar,Overlay } from "vant";

Vue.use(Popup);
Vue.use(Icon);
Vue.use(Calendar);
Vue.use(Overlay);

// Vue.use(Cell);

// 以下来自yjz
import {
  NavBar,
  Image as VanImage,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tab,
  Tabs
} from "vant";
Vue.use(NavBar);
// index头部标题按钮
Vue.use(VanImage);
// vant图片
Vue.use(Swipe);
Vue.use(SwipeItem);
// 轮播图
Vue.use(Grid);
Vue.use(GridItem);
// grid宫格
Vue.use(Tab);
Vue.use(Tabs);
// tab标签页
// 以上来自yjz
import "vant/lib/index.css";

import "./assets/stylus/reset.stylus";

import "./assets/stylus/yjz-index.stylus";
import "./assets/stylus/yjz-diary.stylus";
// yjz-stylus样式

import "amfe-flexible";


Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
