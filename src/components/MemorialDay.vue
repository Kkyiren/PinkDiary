<template>
  <div class="memorialDay">
    <van-nav-bar title="纪念日">
      <template #left>
        <div class="left" @click="back">
          <img src="../assets/img/pink-09/arrows.png" alt="" />
          <img src="../assets/img/pink-09/orthogon.png" alt="" />
          <img src="../assets/img/pink-09/arrows.png" alt="" />
        </div>
      </template>
      <template #right>
        <van-icon class="search" name="search" size="18" />
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>


    <main>
      <ul class="day-list">
        <li class="item">
          <div class="item-left">
            <div class="item-img">
              <img src="../assets/img/pink-09/icon_package.png" alt="" />
            </div>
            <div class="item-info">
              <p class="item-content">第一次熬夜一晚</p>
              <p class="item-time">
                <img src="../assets/img/pink-09/icon_calendar.png" alt="" />
                <span>2019-07-22</span>
              </p>
            </div>
          </div>

          <div class="item-right">
            <span>已经</span>
            <span>304天</span>
          </div>
        </li>
        <li class="item">
          <div class="item-left">
            <div class="item-img">
              <img src="../assets/img/pink-09/icon_package.png" alt="" />
            </div>
            <div class="item-info">
              <p class="item-content">第一次熬夜一晚</p>
              <p class="item-time">
                <img src="../assets/img/pink-09/icon_calendar.png" alt="" />
                <span>2019-07-22</span>
              </p>
            </div>
          </div>

          <div class="item-right">
            <span>已经</span>
            <span>304天</span>
          </div>
        </li>
        <li class="item">
          <div class="item-left">
            <div class="item-img">
              <img src="../assets/img/pink-09/icon_package.png" alt="" />
            </div>
            <div class="item-info">
              <p class="item-content">第一次熬夜一晚</p>
              <p class="item-time">
                <img src="../assets/img/pink-09/icon_calendar.png" alt="" />
                <span>2019-07-22</span>
              </p>
            </div>
          </div>

          <div class="item-right">
            <span>已经</span>
            <span>304天</span>
          </div>
        </li>
      </ul>
    </main>

    <section class="add">
      <img src="../assets/img/pink-09/icon_add.png" alt="" /><span
        >添加纪念日</span
      >
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="stylus" scoped>
.memorialDay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
}

.van-nav-bar {
  background: #FFB5D5;
  color: #fff !important;

  .left {
    img {
      width: 8px;
      height: 12px;

      &:nth-child(2) {
        width: 10px;
        height: 4px;
        margin-top: 10px;
      }
    }
  }
  .van-icon {
    color: #fff;

    &:first-child {
      margin-right: 10px;
    }
  }
}

.day-list {
  margin: 0 15px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid #E7E7E7;

    .item-left {
      display: flex;
      align-items: center;

      .item-img {
        width: 32px;
        height: 29px;
        margin: 0 23px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .item-info {
        .item-content {
          font-size: 16px;
        }

        .item-time {
          margin-top: 12px;
          display: flex;
          align-items: center;

          img {
            width: 18px;
            height: 18px;
          }

          span {
            margin-left: 10px;
            font-size: 11px;
            color: #a7a7a7;
          }
        }
      }
    }

    .item-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 18px;

      span {
        font-size: 13px;

        &:last-child {
          margin-top: 15px;
          font-size: 24px;
        }
      }
    }
  }
}

.add {
  height: 100px;
  margin: 0 33px;
  display: flex;
  align-items: center;

  img {
    width: 42px;
    height: 42px;
  }

  span {
    font-size: 16px;
    color: #A7A7A7;
    margin-left: 20px;
  }
}
</style>
    