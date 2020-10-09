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

    <van-grid :border="false" :column-num="5" :square="true">
      <van-grid-item to="/diary">
        <img src="../assets/img/yjz-index/日记.png" />
        <p>日记</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/手账.png" />
        <p>手账</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/记账本.png" />
        <p>记账本</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/计划表.png" />
        <p>计划表</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/纪念日.png" />
        <p>纪念日</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/星座.png" />
        <p>星座</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/shopping.png" />
        <p>购物领券</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/庄园物语.png" />
        <p>庄园物语</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/热门小说.png" />
        <p>热门小说</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/img/yjz-index/更多.png" />
        <p>更多</p>
      </van-grid-item>
    </van-grid>
    <!-- grid宫格 -->

    <van-tabs v-model="active" :sticky="true">
      <van-tab title="关注">
        <div class="mode">
          <h3>520~加倍爱你【内含宠粉福利】</h3>
          <div class="logo">
            <img src="../assets/img/yjz-index/logo.png" alt="" />
            <span>粉粉管理员</span>
          </div>
          <img src="../assets/img/yjz-index/love.png" alt="" />
          <p class="title">文末有福利哦~</p>
          <div class="people">
            <span class="look">689</span>
            <p>在看</p>
            <span class="speak">14</span>
            <p>评论</p>
          </div>
        </div>
        <!-- 块儿一 -->
        <div class="mode">
          <h3>会员特权限时体验 | 粉粉x肯德基【6折】</h3>
          <div class="logo">
            <img src="../assets/img/yjz-index/logo.png" alt="" />
            <span>粉粉管理员</span>
          </div>
          <img src="../assets/img/yjz-index/kfc.png" alt="" />
          <p class="title">粉粉x肯德基【6折】起！</p>
          <div class="people">
            <span class="look">1,503</span>
            <p>在看</p>
            <span class="speak">11</span>
            <p>评论</p>
          </div>
        </div>
        <!-- 块儿二 -->
        <div class="mode">
          <h3>《庄园物语》五一上线，来领取现金红包</h3>
          <div class="logo">
            <img src="../assets/img/yjz-index/logo.png" alt="" />
            <span>粉粉管理员</span>
          </div>
          <img src="../assets/img/yjz-index/room.png" alt="" />
          <p class="title">《庄园物语》上线啦，来领取现金红包~</p>
          <p class="title">
            《庄园物语》公开测试全新上线，邀你来玩。种瓜种菜shangxianx
          </p>
          <div class="people">
            <span class="look">689</span>
            <p>在看</p>
            <span class="speak">14</span>
            <p>评论</p>
          </div>
        </div>
        <!-- 块儿三 -->
      </van-tab>
      <van-tab title="推荐">
        <p>推荐</p>
      </van-tab>
    </van-tabs>
    <!-- tab标签页 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      gridList: [
        {
          title: "lalala"
        }
      ]
    };
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
</style>
