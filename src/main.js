import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import "./assets/font/iconfont.css";

// 以下来自yjz
import {
  Popup,
  NavBar,
  Icon,
  Calendar,
  Overlay,
  Image as VanImage,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tab,
  Tabs,
  CellGroup,
  Sidebar,
  SidebarItem,
  Search,
  Toast,
  Cell,
  Tabbar,
  TabbarItem,
  Progress,
  Radio,
  RadioGroup,
  Field,
  Button
} from "vant";

Vue.use(Popup);
Vue.use(Cell);
Vue.use(Popup);
Vue.use(NavBar);
// Vue.use(Cell);
Vue.use(CellGroup);
// 以下来自yjz
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
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Calendar);
Vue.use(Overlay);
Vue.use(Sidebar);
Vue.use(SidebarItem);
// import Vant from "vant";
Vue.use(Search);
Vue.use(Toast);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Progress);

import "vant/lib/index.css";

import "./assets/stylus/reset.stylus";

import "./assets/stylus/yjz-index.stylus";
import "./assets/stylus/yjz-diary.stylus";
// yjz-stylus样式

//yjj-stylus样式
import "./assets/stylus/yjj-hotnovel.stylus";
//搜索

import "amfe-flexible";

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
