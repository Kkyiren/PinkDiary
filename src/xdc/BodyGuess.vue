<template>
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
</template>
<style lang="stylus" scoped>
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
</style>
