<template>
  <div class="timeline-banner">
    <!-- 右侧我的粉币 -->
    <div class="pinkcoin">
      <div class="coinicon">
        <img src="../assets/img/pink-02/coin.png" alt="" />
      </div>

      <div class="coinnum">
        <span>我的粉币</span>
        <h4>130</h4>
      </div>
    </div>

    <!-- 领取粉币的5个活动 -->
    <div class="img img-1">
      <img src="../assets/img/pink-02/img-1.png" alt="" />
    </div>
    <div class="img img-2">
      <img src="../assets/img/pink-02/img-2.png" alt="" />
    </div>
    <div class="img img-3">
      <img src="../assets/img/pink-02/img-3.png" alt="" />
    </div>
    <div class="img img-4">
      <img src="../assets/img/pink-02/img-4.png" alt="" />
    </div>
    <div class="img img-5">
      <img src="../assets/img/pink-02/img-5.png" alt="" />
    </div>

    <!-- 攻略 -->
    <div class="strategy">
      <div class="strategy-img">
        <img src="../assets/img/pink-02/strategy.png" alt="" />
      </div>
      <span>攻略</span>
    </div>

    <!-- 庄园物语 -->
    <div class="manor">
      <div class="manor-img">
        <img src="../assets/img/pink-02/basket.png" alt="" />
      </div>
      <div class="content">
        <span>庄园物语</span>
        <div>
          <img src="../assets/img/pink-02/red-packet.png" alt="" />
          <span>种菜收现金红包</span>
        </div>
      </div>
    </div>
    <!-- 领取更多粉币 -->
    <div class="banner-morecoin">
      <span class="text">领取更多粉币</span>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.timeline-banner
  width 100%
  height 400px
  position relative
  background-image url("../assets/img/pink-02/banner-background.png")
  background-size 100% 400px
  .pinkcoin
    width 109px
    height 54px
    background: rgba(91,127,200,0.53);
    position absolute
    right 0
    top 13px
    padding-right 15px
    border-radius: 27px 0px 0px 27px;
    display flex
    justify-content space-between
    align-items center
    .coinicon
      width 40px
      margin-left -10px
      img
        width 100%
        height 28px
    .coinnum
      height 100%
      color rgba(255,255,255,0.9)
      display flex
      flex-direction column
      justify-content space-evenly
      align-items center
      span
        height 12px
        font-size 12px
      h4
        height 16px
        font-size 16px
  .img
    width 64px
    height 56px
    position absolute
    img
      width 100%
      height 100%
  .img-1
    top 57px
    left 57px
  .img-2
    top 96px
    left 139px
  .img-3
    top 129px
    left 71px
  .img-4
    top 163px
    left 139px
  .img-5
    top 218px
    left 177px
  .strategy
    width 68px
    height 34px
    text-align center
    font-size 10px
    border-radius 17px 0px 0px 17px
    background rgba(75, 78, 147, 0.4)
    color rgba(255,255,255,0.8)
    display flex
    align-items center
    position absolute
    top 194px
    right 0
    .strategy-img
      width 33px
      height 36px
      line-height 36px
      margin-left -10px
      margin-right 10px
      img
        width 100%
        height 100%
    span
      margin-right 12px
      line-height 12px
  .manor
    width 68px
    height 34px
    border-radius 17px 0px 0px 17px
    background rgba(75, 78, 147, 0.4)
    color rgba(255,255,255,0.8)
    position absolute
    top 243px
    right 0
    display flex
    .manor-img
      width 39px
      height 37px
      flex-shrink 0
      margin-left -22px
      // margin-right -4px
      img
        width 100%
        height 100%
    .content
      width 54px
      padding-right 4px
      display flex
      flex-direction column
      justify-content center
      align-items center
      span
        line-height 16px
        font-size 12px
        margin-bottom -20px
      div
        width 50px
        height 29px
        display flex
        align-items center
        justify-content baseline
        img
          width 29px
          height 29px
          margin-right -25px
          margin-left -12px
          margin-top 16px
        span
          font-size 10px
          display block
          flex-shrink 0
          width 72px
          height 20px
          -webkit-transform: scale(0.5);
  .banner-morecoin
    width 139px
    height 56px
    background-image  url("../assets/img/pink-02/getmore.png")
    background-size 139px 56px
    position absolute
    top 361px
    left 202px
    display flex
    .text
      color #fff
      font-size 14px
      margin auto
</style>
