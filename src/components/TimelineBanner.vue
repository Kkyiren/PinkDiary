<template>
  <div class="timeline-banner">
    <!-- 右侧我的粉币 -->
    <div class="pinkcoin">
      <div class="coinicon">
        <img src="../assets/img/pink-02/coin.png" alt />
      </div>

      <div class="coinnum">
        <span>我的粉币</span>
        <h4>130</h4>
      </div>
    </div>

    <!-- 领取粉币的5个活动 -->
    <div class="img img-1">
      <img src="../assets/img/pink-02/img-1.png" alt />
    </div>
    <div class="img img-2">
      <img src="../assets/img/pink-02/img-2.png" alt />
    </div>
    <div class="img img-3">
      <img src="../assets/img/pink-02/img-3.png" alt />
    </div>
    <div class="img img-4">
      <img src="../assets/img/pink-02/img-4.png" alt />
    </div>
    <div class="img img-5">
      <img src="../assets/img/pink-02/img-5.png" alt />
    </div>

    <!-- 攻略 -->
    <div class="strategy">
      <div class="strategy-img">
        <img src="../assets/img/pink-02/strategy.png" alt />
      </div>
      <span>攻略</span>
    </div>

    <!-- 庄园物语 -->
    <div class="manor">
      <div class="manor-img">
        <img src="../assets/img/pink-02/basket.png" alt />
      </div>
      <div class="content">
        <span>庄园物语</span>
        <div>
          <img src="../assets/img/pink-02/red-packet.png" alt />
          <span>种菜收现金红包</span>
        </div>
      </div>
    </div>
    <!-- 领取更多粉币 -->
    <van-cell is-link @click="showPopup" class="layout">领取更多粉币</van-cell>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '70%' }"
      class="layout-content"
    >
      <div class="layout-top">
        <div class="title">
          <span>领取更多粉币</span>
          <img src="../assets/img/pink-02/getmore.png" alt />
        </div>
        <div class="signed">
          <div class="signed-top">
            <span>今日签到</span>
            <div class="right">
              <span>签到提醒</span>
              <div class="switch">
                <div class="ball"></div>
              </div>
            </div>
          </div>
          <div class="signed-body">
            <div class="line"></div>
            <div class="wrap">
              <div
                class="record"
                v-for="(item, index) in dateList"
                :key="index"
              >
                <img src="../assets/img/pink-morecoin/coin.png" alt />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
        <ul class="nav">
          <li>
            <span>萌新专属</span>
            <div class="sym"></div>
          </li>
          <li>
            <span>每日可领</span>
          </li>
        </ul>
      </div>
      <div class="task-body">
        <div class="newbie-task task">
          <div class="title">新手任务</div>
          <div
            class="task-list"
            v-for="(ite, ind) in newbieTaskList"
            :key="ind"
          >
            <div class="list-icon">
              <img :src="ite.img" alt />
            </div>
            <div class="list-info">
              <h3 class="task-title">{{ ite.task }}</h3>
              <div class="task-reward">
                <img src="../assets/img/pink-morecoin/reward.png" alt />
                <span v-if="ite.reward">{{ ite.reward }}&nbsp;粉币</span>
                <span v-else>每消费&nbsp;1&nbsp;粉钻奖励&nbsp;1&nbsp;粉币</span>
              </div>
              <div class="task-progress" v-if="ite.isprogress">
                <div></div>
                <span>{{ ite.completed }}</span>
                <span>/</span>
                <span>{{ ite.total }}</span>
              </div>
            </div>
            <div class="button">去完成</div>
          </div>
        </div>
        <div class="daily-task task">
          <div class="title">每日任务</div>
          <div class="task-list" v-for="(it, inn) in dailyTaskList" :key="inn">
            <div class="list-icon">
              <img :src="it.img" alt />
            </div>
            <div class="list-info">
              <h3 class="task-title">{{ it.task }}</h3>
              <div class="task-reward">
                <img src="../assets/img/pink-morecoin/reward.png" alt />
                <span v-if="it.reward">{{ it.reward }}&nbsp;粉币</span>
                <span v-else>每消费&nbsp;1&nbsp;粉钻奖励&nbsp;1&nbsp;粉币</span>
              </div>
              <div class="task-progress" v-if="it.isprogress">
                <div class="progress"></div>
                <span>{{ it.completed }}</span>
                <span>/</span>
                <span>{{ it.total }}</span>
              </div>
            </div>
            <div class="button">去完成</div>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </van-popup>
  </div>
</template>
<script>
import info from "../assets/img/pink-morecoin/info.png";
import talk from "../assets/img/pink-morecoin/talk.png";
import review from "../assets/img/pink-morecoin/review.png";
import notice from "../assets/img/pink-morecoin/notice.png";
import diary from "../assets/img/pink-morecoin/diary.png";
import shop from "../assets/img/pink-morecoin/shop.png";
import watch from "../assets/img/pink-morecoin/watch.png";
import listen from "../assets/img/pink-morecoin/listen.png";
import VFooter from "./VFooter";
export default {
  data() {
    return {
      show: false,
      dateList: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      newbieTaskList: [
        {
          task: "完善个人信息",
          reward: 50,
          img: info
        },
        {
          task: "参与1次话题讨论",
          reward: 20,
          img: talk
        },
        {
          task: "应用商店好评",
          reward: 100,
          img: review
        },
        {
          task: "开启通知",
          reward: 100,
          img: notice
        }
      ],
      dailyTaskList: [
        {
          task: "发布一篇日记",
          reward: 20,
          img: diary
        },
        {
          task: "粉钻消费",
          reward: 0,
          img: shop
        },
        {
          task: "看视频",
          reward: 20,
          img: watch,
          isprogress: true,
          total: 1,
          completed: 0
        },
        {
          task: "粉粉倾听FM5分钟",
          reward: 20,
          img: listen,
          isprogress: true,
          total: 1,
          completed: 0
        }
      ]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  components: {
    VFooter
  }
};
</script>
<style lang="stylus">
.van-cell__right-icon {
  display: none;
}

.van-cell--clickable {
  background: transparent;
}

.van-cell__value--alone {
  text-align: center;
  line-height: 36px;
  color: #fff;
  font-size: 14px;
}

.timeline-banner {
  width: 100%;
  height: 400px;
  position: relative;
  background-image: url('../assets/img/pink-02/banner-background.png');
  background-size: 100% 400px;

  .pinkcoin {
    width: 109px;
    height: 54px;
    background: rgba(91, 127, 200, 0.53);
    position: absolute;
    right: 0;
    top: 13px;
    padding-right: 15px;
    border-radius: 27px 0px 0px 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .coinicon {
      width: 40px;
      margin-left: -10px;

      img {
        width: 100%;
        height: 28px;
      }
    }

    .coinnum {
      height: 100%;
      color: rgba(255, 255, 255, 0.9);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      span {
        height: 12px;
        font-size: 12px;
      }

      h4 {
        height: 16px;
        font-size: 16px;
      }
    }
  }

  .img {
    width: 64px;
    height: 56px;
    position: absolute;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .img-1 {
    top: 57px;
    left: 57px;
  }

  .img-2 {
    top: 96px;
    left: 139px;
  }

  .img-3 {
    top: 129px;
    left: 71px;
  }

  .img-4 {
    top: 163px;
    left: 139px;
  }

  .img-5 {
    top: 218px;
    left: 177px;
  }

  .strategy {
    width: 68px;
    height: 34px;
    text-align: center;
    font-size: 10px;
    border-radius: 17px 0px 0px 17px;
    background: rgba(75, 78, 147, 0.4);
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    position: absolute;
    top: 194px;
    right: 0;

    .strategy-img {
      width: 33px;
      height: 36px;
      line-height: 36px;
      margin-left: -10px;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    span {
      margin-right: 12px;
      line-height: 12px;
    }
  }

  .manor {
    width: 68px;
    height: 34px;
    border-radius: 17px 0px 0px 17px;
    background: rgba(75, 78, 147, 0.4);
    color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 243px;
    right: 0;
    display: flex;

    .manor-img {
      width: 39px;
      height: 37px;
      flex-shrink: 0;
      margin-left: -22px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      width: 54px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        line-height: 16px;
        font-size: 12px;
        margin-bottom: -20px;
      }

      div {
        width: 50px;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: baseline;

        img {
          width: 29px;
          height: 29px;
          margin-right: -25px;
          margin-left: -12px;
          margin-top: 16px;
        }

        span {
          font-size: 10px;
          display: block;
          flex-shrink: 0;
          width: 72px;
          height: 20px;
          -webkit-transform: scale(0.5);
        }
      }
    }
  }

  .layout {
    width: 139px;
    height: 56px;
    line-height: 56px;
    background-image: url('../assets/img/pink-02/getmore.png');
    background-size: 139px 56px;
    position: absolute;
    top: 361px;
    left: 202px;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }

  .van-overlay {
    margin-bottom: 49px;
    bottom: 49px;
    height: 100% - 49px;
  }

  .layout-content {
    overflow: visible;
    margin-bottom: 49px;

    .layout-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      // height 152px
      background: rgb(254, 110, 161);
      padding: 0 15px 5px;

      .title {
        width: 159px;
        height: 76px;
        padding: 10px;
        margin-top: -38px;
        line-height: 56px;
        position: relative;
        background: rgb(254, 110, 161);
        color: #fff;
        font-size: 14px;
        text-align: center;
        border-radius: 38px;

        img {
          width: 139px;
          height: 56px;
          margin-left: -3px;
          margin-top: -1px;
        }

        span {
          position: absolute;
          display: block;
          width: 139px;
          height: 56px;
          text-align: center;
        }
      }

      .signed {
        width: 100%;
        height: 93px;
        padding: 15px 15px 5px;
        background: #FF8BB8;
        color: #fff;
        font-size: 12px;
        margin-bottom: 9px;

        .signed-top {
          margin-bottom: 11px;
          display: flex;
          justify-content: space-between;

          .right {
            display: flex;

            .switch {
              width: 32px;
              height: 18px;
              border-radius: 9px;
              margin-left: 12px;
              background: #ECD0D9;
              display: flex;
              align-items: center;

              .ball {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: #fff;
              }
            }
          }
        }

        .signed-body {
          position: relative;
          margin-bottom: 14px;

          .line {
            width: 291px;
            height: 1px;
            background: #FFECFF;
            position: absolute;
            top: 11px;
            left: 14px;
          }

          .wrap {
            display: flex;
            justify-content: space-between;

            .record {
              display: flex;
              flex-direction: column;
              align-items: center;

              img {
                width: 22px;
                height: 22px;
              }
            }
          }
        }
      }
    }

    .nav {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #fff;

      li {
        width: 50%;
        text-align: center;

        .sym {
          width: 27px;
          height: 4px;
          border-radius: 2px;
          background: #FBF7F8;
          margin: 8px auto 0;
        }
      }
    }

    .task-body {
      overflow: scroll;
      height: 400px;
      margin-bottom: 49px;

      .task {
        padding: 26px 18px 0 16px;

        .title {
          font-size: 18px;
          color: #000;
          margin-bottom: 23px;
        }

        .task-list {
          display: flex;
          position: relative;
          margin-bottom: 34px;

          .list-icon {
            img {
              width: 31px;
              height: 31px;
              margin-right: 18px;
            }
          }

          .list-info {
            h3 {
              font-size: 16px;
              margin-bottom: 7px;
            }

            .task-reward {
              display: flex;
              align-items: center;
              margin-bottom: 11px;

              img {
                width: 15px;
                height: 15px;
                margin-right: 5px;
              }

              span {
                font-size: 12px;
                color: #A7A7A7;
              }
            }

            .task-progress {
              display: flex;
              align-items: center;

              .progress {
                width: 131px;
                height: 5px;
                background: #FEE2F0;
                margin-right: 4px;
              }

              span {
                font-size: 12px;
                color: #A7A7A7;
              }
            }
          }

          .button {
            width: 72px;
            height: 30px;
            font-size: 12px;
            line-height: 30px;
            border: 1px #F776BC solid;
            color: #F776BC;
            border-radius: 13px;
            text-align: center;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      .daily-task {
        margin-top: -30px;
      }
    }
  }
}
</style>
