<template>
  <div class="index-body">
    <header>
      <a href="javascript:;" @click="setup">
        <img src="../assets/img/yjz-index/left.png" alt="" />
      </a>
      <h2>粉粉日记</h2>
      <a href="javascript:;" @click="login">
        <img src="../assets/img/yjz-index/right.png" alt="" />
      </a>
    </header>
    <!-- 头部 -->

    <van-swipe class="index-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.url" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->

    <van-grid :border="false" :column-num="5" :square="true">
      <van-grid-item
        v-for="(item, index) in girdList"
        :key="index"
        :to="item.to"
      >
        <img :src="item.url" />
        <p>{{ item.title }}</p>
      </van-grid-item>
    </van-grid>
    <!-- grid宫格 -->

    <van-tabs v-model="active" :sticky="true">
      <van-tab title="关注">
        <div class="mode" v-for="(item, index) in tabsList" :key="index">
          <h3>{{ item.title }}</h3>
          <div class="logo">
            <img src="../assets/img/yjz-index/logo.png" alt="" />
            <span>粉粉管理员</span>
          </div>
          <img :src="item.url" alt="" />
          <p class="title" v-if="item.first">{{ item.first }}</p>
          <p class="title">{{ item.last }}</p>
          <div class="people">
            <span class="look">{{ item.look }}</span>
            <p>在看</p>
            <span class="speak">{{ item.speak }}</span>
            <p>评论</p>
          </div>
        </div>
      </van-tab>
      <!-- 关注tab -->
      <van-tab title="推荐">
        <p>推荐</p>
      </van-tab>
    </van-tabs>
    <!-- tab标签页 -->
  </div>
</template>

<script>
import { indexImages } from "../utils/api.js";
export default {
  data() {
    return {
      active: 0,
      bannerList: [],
      girdList: [],
      tabsList: []
    };
  },
  methods: {
    tallyBook() {
      this.$router.push("/tallyBook");
    },
    memorialDay() {
      this.$router.push("/memorialDay");
    },
    constellation() {
      this.$router.push("/constellation");
    },
    async getData() {
      let str = await indexImages();
      this.bannerList = str.data.banner;
      this.girdList = str.data.grid;
      this.tabsList = str.data.tabs;
    },
    setup() {
      this.$router.push("/setup");
    },
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="stylus" scoped>
.index-body {
  header {
    width: 100%;
    height: 50px;
    background-color: #ffb6d6;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 400;
    }

    a {
      margin: 0 15px;

      img {
        height: 28px;
      }
    }
  }
}
</style>
