<template>
  <!-- 装扮橱窗 -->
  <div class="body-shopwindow">
    <div class="shopwindow-title">
      <img src="../assets/img/pink-02/title-side.png" alt="" />
      <span>装扮橱窗</span>
    </div>
    <div class="shopwindow-body">
      <img src="../assets/img/pink-02/curtain.png" alt="" class="curtain" />
      <div class="pic-top">
        <img src="../assets/img/pink-02/top-1.png" alt="" class="top1" />
        <img src="../assets/img/pink-02/top-2.png" alt="" class="top2" />
        <img src="../assets/img/pink-02/top-3.png" alt="" class="top3" />
        <img src="../assets/img/pink-02/top-4.png" alt="" class="top4" />
      </div>
      <div class="pic-bottom">
        <img src="../assets/img/pink-02/bottom-1.png" alt="" class="bottom1" />
        <img src="../assets/img/pink-02/bottom-2.png" alt="" class="bottom2" />
        <img src="../assets/img/pink-02/bottom-3.png" alt="" class="bottom3" />
        <img src="../assets/img/pink-02/bottom-4.png" alt="" class="bottom4" />
        <img src="../assets/img/pink-02/bottom-5.png" alt="" class="bottom3" />
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.body-shopwindow
  margin-top 28px
  width 100%
  .shopwindow-title
    display flex
    align-items center
    margin-bottom 19px
    img
      width 10px
      height 20px
      margin-right 8px
    span
      color #000
      font-size 16px
  .shopwindow-body
    height 247px
    background #fff
    overflow hidden
    .curtain
      width 100%
      margin-top -14px
    .pic-top
      width 100%
      height 80px
      display flex
      justify-content space-between
      img
        margin-right 15px
      .top1
        width 80px
      .top2
        width 68px
        height 68px
      .top3
        width 54px
        height 54px
        margin-top 14px
      .top4
        width 54px
        height 54px
    .pic-bottom
      width 100%
      height 68px
      margin-top 11px
      display flex
      justify-content space-between
      align-items center
      .bottom1
        width 52px
      .bottom2
        width 38px
      .bottom3
        width 68px
      .bottom4
        width 40px
</style>
