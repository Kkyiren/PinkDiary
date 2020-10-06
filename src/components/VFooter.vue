<template>
  <div class="footer">
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <router-link :to="item.url">
          <div class="footer-icon">
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="footer-text" v-if="index != 1">
            {{ item.text }}
          </div>
          <div v-else class="imgtext">
            <img src="../assets/img/pink-02/imgtext.png" alt="" /></div
        ></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import TimeLine from "../assets/img/pink-02/timeline.png";
import Planet from "../assets/img/pink-02/planet.png";
import Community from "../assets/img/pink-02/community.png";
import Shop from "../assets/img/pink-02/shop.png";
import Mine from "../assets/img/pink-02/mine.png";
export default {
  data() {
    return {
      imgList: [
        {
          imgUrl: TimeLine,
          text: "时间线",
          url: "/time"
        },
        {
          imgUrl: Planet,
          text: "",
          url: "/mall"
        },
        {
          imgUrl: Community,
          text: "社区",
          url: "/mall"
        },
        {
          imgUrl: Shop,
          text: "商城",
          url: "/mall"
        },
        {
          imgUrl: Mine,
          text: "我的",
          url: "/mall"
        }
      ],
      isactive: 0
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.footer {
  width: 378px;
  height: 49px;
  background: #fff;
  position: fixed;
  z-index: 3000;
  bottom: 0;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    li {
      padding: 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      .footer-icon {
        width: 26px;
        height: 24px;
        display: flex;
        align-items: center;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .footer-text {
        color: #A7A7A7;
        font-size: 10px;
      }

      .imgtext {
        width: 40px;
        height: 10px;

        img {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
