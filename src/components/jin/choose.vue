<template>
  <ul>
    <li v-for="(item, index) in itemList" :key="index">
      <!-- <img :src="item.url" alt=""> -->
      <p><img :src="item.url" alt="" /></p>
      <div class="wrap">
        <div>{{ item.title }}</div>
        <span>{{ item.merchants }}</span>
        <i>{{ item.price }}</i>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "电动车头盔摩托四季防晒防...",
          merchants: "杨曼的家局",
          price: "49$"
        },
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "【现货直发】 50只成人口罩...",
          merchants: "杨曼的家局",
          price: "49$"
        },
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "30包整箱丝飘艾丽乐牌纸巾...",
          merchants: "杨曼的家局",
          price: "49$"
        },
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "菜刀刀具套装德国工艺厨师...",
          merchants: "杨曼的家局",
          price: "49$"
        },
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "台湾风味纯肉肠火山石烤肠...",
          merchants: "杨曼的家局",
          price: "49$"
        },
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "【连体装】 宝宝纯棉短袖T恤...",
          merchants: "杨曼的家局",
          price: "49$"
        },
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "【连体装】 宝宝纯棉短袖T恤...",
          merchants: "杨曼的家局",
          price: "49$"
        },
        {
          url: require("../../assets/style/img/images/tou.png"),
          title: "【连体装】 宝宝纯棉短袖T恤...",
          merchants: "杨曼的家局",
          price: "49$"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
ul {
  width: 374px;
  height: 779px;
  overflow: scroll;
}
li {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  padding-bottom: 15px;
}
img {
  width: 110px;
  height: 110px;
}
.wrap div {
  font-size: 18px;
  font-family: PingFang;
  color: #000000;
}
.wrap span {
  font-size: 14px;
}
.wrap i {
  font-size: 18px;
  color: #fd548a;
  position: relative;
  top: 35px;
  right: 70px;
}
</style>
