<template>
  <div class="timeline">
    <!-- 头部 -->
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

    <!-- banner以外的部分 -->
    <div class="timeline-body">
      <!-- 猜你心水 -->
      <div class="body-guess">
        <div class="guess-title">
          <img src="../assets/img/pink-02/title-side.png" alt="" />
          <span>猜你心水</span>
        </div>
        <ul class="guess-body">
          <li class="body-list">
            <div class="list-top">
              <img src="../assets/img/pink-02/member.png" alt="" />
            </div>

            <div class="list-bottom">
              <h3>会员·7天体验</h3>
              <span class="member">
                2000
                <img src="../assets/img/pink-02/coin.png" alt="" />
              </span>
            </div>
          </li>
          <li class="body-list">
            <div class="list-top">
              <img src="../assets/img/pink-02/rotate.png" alt="" />
            </div>

            <div class="list-bottom">
              <h3>魔力赚转</h3>
              <span class="rotate">限免</span>
            </div>
          </li>
          <li class="body-list">
            <div class="list-top">
              <img src="../assets/img/pink-02/cloud.png" alt="" />
            </div>
            <div class="list-bottom">
              <h3 class="cloud">记录云同步</h3>
              <h3 class="cloud">敬请期待</h3>
            </div>
          </li>
        </ul>
      </div>

      <!-- 橱窗 -->
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
            <img
              src="../assets/img/pink-02/bottom-1.png"
              alt=""
              class="bottom1"
            />
            <img
              src="../assets/img/pink-02/bottom-2.png"
              alt=""
              class="bottom2"
            />
            <img
              src="../assets/img/pink-02/bottom-3.png"
              alt=""
              class="bottom3"
            />
            <img
              src="../assets/img/pink-02/bottom-4.png"
              alt=""
              class="bottom4"
            />
            <img
              src="../assets/img/pink-02/bottom-5.png"
              alt=""
              class="bottom3"
            />
          </div>
        </div>
      </div>

      <!-- 好物福利社 -->
      <div class="body-welfare">
        <div class="welfare-title">
          <img src="../assets/img/pink-02/title-side.png" alt="" />
          <span>好物福利社</span>
        </div>
        <div class="welfare-body">
          <div class="list mar">
            <div class="topimg">
              <img src="../assets/img/pink-02/bg-1.png" alt="" />
              <h3>免费定制&nbsp;1个手机壳</h3>
              <div class="button">立即领取</div>
            </div>
            <h4>个性定制手机壳</h4>
            <span>20&nbsp;粉币</span>
          </div>
          <div class="list">
            <div class="topimg">
              <img src="../assets/img/pink-02/bg-2.png" alt="" />
              <h3>免费定制&nbsp;1个钥匙扣</h3>
              <div class="button">立即领取</div>
            </div>
            <h4>个性定制钥匙扣</h4>
            <span>20&nbsp;粉币</span>
          </div>
          <div class="list mar top">
            <div class="topimg">
              <img src="../assets/img/pink-02/bg-3.png" alt="" />
            </div>
            <h4>早晚读书VIP月卡</h4>
            <span>100&nbsp;粉币</span>
          </div>
          <div class="list top">
            <div class="topimg">
              <img src="../assets/img/pink-02/bg-4.png" alt="" />
            </div>
            <h4>青桔单车骑行礼包</h4>
            <span>200&nbsp;粉币</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.timeline
  background rgb(251,247,248)
  padding-bottom 35px
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
  .timeline-body
    width 100%
    margin-top 37px
    padding 0 19px
    .body-guess
      .guess-title
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
      .guess-body
        display flex
        width 100%
        justify-content space-between
        .body-list
          width 100px
          height 111px
          background #fff
          .list-top
            width 100px
            height 60px
            img
              width 100%
              height 100%
          .list-bottom
            margin-top 12px
            font-size 12px
            h3
              text-align center
              margin-bottom 6px
            span
              text-align center
              display block
              color rgba(255, 108, 140, 1)
              img
                width 12px
                height 12px
            .rotate
              width 32px
              height 18px
              font-size 10px
              margin auto
              line-height 14px
              border 2px rgba(255, 108, 140, 1) solid
              border-radius 4px
            .cloud
              color rgba(168, 168, 168, 1)
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
    .body-welfare
      width 100%
      margin-top 35px
      .welfare-title
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
      .welfare-body
        width 100%
        height 331px
        padding 14px 10px
        background #fff
        .mar
          margin-right 9px
        .top
          margin-top 32px
        .list
          float left
          font-size 13px
          .topimg
            width 154px
            height 100px
            position relative
            h3
              width 56px
              color #000
              font-size 12px
              position absolute
              top 34px
              left 15px
            .button
              width 53px
              height 17px
              background rgb(244, 96, 100)
              color #fff
              font-size 10px
              line-height 15px
              position absolute
              top 68px
              left 12px
              border-radius 8px
              text-align center
            img
              width 100%
              height 100%
          h4
            color #000
            margin-top 5px
          span
            margin-top 7px
            display block
            color rgba(255, 108, 140, 1)
</style>
