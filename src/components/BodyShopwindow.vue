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
        <img
          :src="topimg"
          alt=""
          v-for="(topimg, ind) in topList"
          :key="ind"
          :class="'top' + `${ind + 1}`"
        />
      </div>
      <div class="pic-bottom">
        <img
          :src="bottomimg"
          alt=""
          v-for="(bottomimg, i) in bottomList"
          :key="i"
          :class="'bottom' + `${i + 1}`"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["topList", "bottomList"]
};
</script>
<style lang="stylus" scoped>
.body-shopwindow {
  margin-top: 28px;
  width: 100%;

  .shopwindow-title {
    display: flex;
    align-items: center;
    margin-bottom: 19px;

    img {
      width: 10px;
      height: 20px;
      margin-right: 8px;
    }

    span {
      color: #000;
      font-size: 16px;
    }
  }

  .shopwindow-body {
    height: 247px;
    background: #fff;
    overflow: hidden;

    .curtain {
      width: 100%;
      margin-top: -14px;
    }

    .pic-top {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;

      img {
        margin-right: 15px;
      }

      .top1 {
        width: 80px;
      }

      .top2 {
        width: 68px;
        height: 68px;
      }

      .top3 {
        width: 54px;
        height: 54px;
        margin-top: 14px;
      }

      .top4 {
        width: 54px;
        height: 54px;
      }
    }

    .pic-bottom {
      width: 100%;
      height: 68px;
      margin-top: 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bottom1 {
        width: 52px;
      }

      .bottom2 {
        width: 38px;
      }

      .bottom3 {
        width: 68px;
      }

      .bottom4 {
        width: 40px;
      }

      .bottom5 {
        width: 68px;
      }
    }
  }
}
</style>
