<template>
  <div class="footer">
    <ul>
      <li v-for="(item, index) in imgList" :key="index" @click="change(index)">
        <router-link :to="item.path">
          <div class="footer-icon">
            <img :src="item.imgUrl" alt=""  v-show="num!=index" />
            <img :src="item.imgUrl1" alt=""  v-show="num==index" />
          </div>
          <div class="footer-text" v-if="index != 1"  :class="num==index?'active':''">
            {{ item.text }}
          </div>
          <div v-else class="imgtext">
            <img src="../assets/img/pink-02/imgtext.png" alt="" />
          </div>
        </router-link>
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

import TimeLine1 from "../assets/img/footer/heart.png";
import Planet1 from "../assets/img/pink-02/planet.png";
import Community1 from "../assets/img/footer/community.png";
import Shop1 from "../assets/img/footer/2.png";
import Mine1 from "../assets/img/footer/mine.png";
export default {
  data() {
    return {
      num:0,
      imgList: [
        { imgUrl1:TimeLine1,
          imgUrl: TimeLine,
          text: "时间线",
          path:"/time"
        },
        { imgUrl1:Planet1,
          imgUrl: Planet,
          text: "宝藏星球",
          path:"/planet"
        },
        { imgUrl1:Community1,
          imgUrl: Community,
          text: "社区",
          path:"/community"
        },
        { imgUrl1:Shop1,
          imgUrl: Shop,
          text: "商城",
          path:"/shop"
        },
        {  imgUrl1:Mine1,
          imgUrl: Mine,
          text: "我的",
          path:"/mine"
        }
      ],
      isactive: 0
    };
  },
  methods: {
    change(i){
      this.num=i
    }
  },
};
</script>
<style lang="stylus" scoped>
.footer
  width 378px
  height 49px
  background #fff
  position fixed
  z-index 3000
  bottom 0
  ul
    width 100%
    height 100%
    display flex
    justify-content space-around
    li
      padding 5px 0
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      cursor pointer
      .footer-icon
        width 26px
        height 24px
        display flex
        align-items center
        img
          width 100%
          height 100%
      .footer-text
        color #A7A7A7
        font-size 10px
      .active
        color pink
      .imgtext
        width 40px
        height 10px
        img
          width 100%
          height 100%
          display flex
          align-items center
</style>
