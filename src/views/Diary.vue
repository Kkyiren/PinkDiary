<template>
  <div class="diary-body">
    <header class="diary-head">
      <div class="diary-nav">
        <div class="nav-left" @click="backindex">
          <img src="../assets/img/yjz-diary/back.png" alt="" />
        </div>
        <h2 class="title">Smile</h2>
        <div class="nav-right">
          <img src="../assets/img/yjz-diary/find.png" alt="" />
          <img src="../assets/img/yjz-diary/photo.png" alt="" />
        </div>
      </div>
      <!-- 头部导航 -->
      <div class="diary-add">
        <a class="add" href="javascript:;">
          <img src="../assets/img/yjz-diary/slogan.png" alt="" />
          <p class="add-name">全部日记</p>
        </a>
        <a class="add" href="javascript:;">
          <img src="../assets/img/yjz-diary/smile.png" alt="" />
          <p class="add-name">Smile</p>
        </a>
        <a class="add" href="javascript:;">
          <img src="../assets/img/yjz-diary/xuxian.png" alt="" />
          <p class="add-name">添加日记</p>
        </a>
      </div>
      <!-- 头部添加 -->
    </header>
    <!-- 头部 -->
    <main class="diary-main">
      <div class="main-mode" v-for="(item, index) in diaryList" :key="index">
        <div class="mode-left">
          <img
            v-for="(item, index) in yuanimg"
            :key="index"
            :src="item.url"
            alt=""
          />
        </div>
        <div class="mode-center">
          <div class="center-time">
            {{ item.time }}
          </div>
          <div class="center-name">
            {{ item.name }}
          </div>
          <div class="center-title">
            {{ item.title }}
          </div>
          <div class="center-address">
            <img src="../assets/img/yjz-diary/address.png" alt="" />
            {{ item.address }}
          </div>
        </div>
        <div class="mode-right">
          <img src="../assets/img/yjz-diary/weater.png" alt="" />
        </div>
      </div>
      <!-- 模块 -->
      <div class="main-write">
        <img src="../assets/img/yjz-diary/write.png" alt="" />
      </div>
    </main>
    <!-- 主体 -->
  </div>
</template>

<script>
import { diary } from "../utils/api.js";
export default {
  data() {
    return {
      yuanimg: [],
      diaryList: []
    };
  },
  methods: {
    backindex() {
      this.$router.go(-1);
    },
    async getData() {
      let str = await diary();
      this.yuanimg = str.data.yuan;
      this.diaryList = str.data.result;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="stylus" scoped></style>
