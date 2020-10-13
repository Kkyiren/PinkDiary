<template>
  <div>
    <van-nav-bar title="Smile" left-text=">_<" right-text="***" left-arrow />
    <div class="banner"><img src="../assets/img/tykimg/21.png" alt="" /></div>
    <div class="main">
      <img src="../assets/img/tykimg/-s-beijing.png" alt="" />
    </div>
    <div class="footer"></div>
  </div>
</template>
<style lang="stylus">
.van-nav-bar
  width 375px
  height 44px
  background #ffb6d6
.van-nav-bar__text
  color #ffffff
.van-nav-bar__arrow
  color #ffffff
.van-nav-bar__title
  color #ffffff
.van-nav-bar .van-icon
  color #ffffff
  display none
.banner
  display flex
  img
    width 375px
    height 56px
    border-radius 6px 6px 0px 0px
.main
  display flex
  img
    width 100%
.footer{

}
</style>
