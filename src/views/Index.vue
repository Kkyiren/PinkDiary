<template>
  <div class="index-body">
    <header>
      <a href="javascript:;">
        <img src="../assets/img/yjz-index/left.png" alt="" />
      </a>
      <h2>粉粉日记</h2>
      <a href="javascript:;">
        <img src="../assets/img/yjz-index/right.png" alt="" />
      </a>
    </header>
    <!-- 头部 -->

    <van-swipe class="index-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/img/yjz-index/banner.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/yjz-index/banner.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/yjz-index/banner.png" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->

    <van-grid :border="false" :column-num="5">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
    </van-grid>
    <!-- grid宫格 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.index-body
  header
    width 100%
    height 50px
    background-color #ffb6d6
    color #ffffff
    font-size 20px
    display flex
    justify-content space-between
    align-items center
    h2
      font-weight 400
    a
      margin 0 15px
      img
        height 28px
  .index-swipe
    width 100%
    img
      width 100%
</style>
