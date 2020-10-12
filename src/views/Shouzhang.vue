<template>
  <div>
    <van-nav-bar title="手账" left-text=">_<" right-text="***" left-arrow />
    <div class="banner">
      <img src="../assets/img/tykimg/banner1.png" alt="">
      <img src="../assets/img/tykimg/banner2.png" alt="">
    </div>
    <div class="main">
      <img src="../assets/img/tykimg/main1.png" alt="">
      <img src="../assets/img/tykimg/main2.png" alt="">

    </div>
    <div class="main2">
      <img src="../assets/img/tykimg/main3.png" alt="">
    </div>
    <div class="jia">
      <img src="../assets/img/tykimg/JIA.png" alt="">
    </div>

  </div>
</template>
<style  lang="stylus">
.van-nav-bar
  width 375px
  height 44px
  background #ffb6d6
.banner
  display flex
  width 100%
  height 100px
.banner img
  width 168px
  height 53px
  border-radius 5px
  margin auto
.main
  display flex
  margin-bottom 20px
.main img
  width 169px
  height 227px
  background #ffffff
  box-shadow 0px 1px 8px 0px rgba(235, 235, 235, 0.45)
  border-radius 5px
  margin auto
.main2
  /* display: flex; */
  margin-left 9.3px
.main2 img
  width 169px
  height 227px
  background #ffffff
  box-shadow 0px 1px 8px 0px rgba(235, 235, 235, 0.45)
  border-radius 5px
  margin auto
.jia
  position absolute
  bottom 50px
  right 10%
.jia img
  width 63px
  height 63px
.van-nav-bar__text
  color #ffffff
.van-nav-bar__arrow
  color #ffffff
.van-nav-bar__title
  color #ffffff
.van-nav-bar .van-icon
  color #ffffff
  display none
</style>