<template>
  <!-- 好物福利社 -->
  <div class="body-welfare">
    <div class="welfare-title">
      <img src="../assets/img/pink-02/title-side.png" alt="" />
      <span>好物福利社</span>
    </div>

    <div class="welfare-body">
      <div
        class="list"
        v-for="(item, index) in goodsList"
        :key="index"
        :class="{ mar: !(index % 2), top: index > 1 }"
      >
        <div class="topimg">
          <img :src="item.url" alt="" />
          <h3 v-if="item.content">{{ item.content }}</h3>
          <div class="button" v-if="item.content">立即领取</div>
        </div>
        <h4>{{ item.title }}</h4>
        <span>{{ item.price }}&nbsp;粉币</span>
      </div>

      <!-- <div class="list mar">
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
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["goodsList"]
};
</script>
<style lang="stylus" scoped>
.body-welfare {
  width: 100%;
  margin-top: 35px;

  .welfare-title {
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

  .welfare-body {
    width: 100%;
    height: 331px;
    padding: 14px 10px;
    background: #fff;

    .mar {
      margin-right: 9px;
    }

    .top {
      margin-top: 32px;
    }

    .list {
      float: left;
      font-size: 13px;

      .topimg {
        width: 154px;
        height: 100px;
        position: relative;

        h3 {
          width: 56px;
          color: #000;
          font-size: 12px;
          position: absolute;
          top: 34px;
          left: 15px;
        }

        .button {
          width: 53px;
          height: 17px;
          background: rgb(244, 96, 100);
          color: #fff;
          font-size: 10px;
          line-height: 15px;
          position: absolute;
          top: 68px;
          left: 12px;
          border-radius: 8px;
          text-align: center;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      h4 {
        color: #000;
        margin-top: 5px;
      }

      span {
        margin-top: 7px;
        display: block;
        color: rgba(255, 108, 140, 1);
      }
    }
  }
}
</style>
