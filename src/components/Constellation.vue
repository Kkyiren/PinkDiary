<template>
  <div class="constellation">
    <!-- 头部 -->
    <van-nav-bar>
      <template #left>
        <img src="../assets/img/pink-09/arrows.png" alt="" />
        <img src="../assets/img/pink-09/orthogon.png" alt="" />
        <img src="../assets/img/pink-09/arrows.png" alt="" />
      </template>
      <template #title>
        <span class="title">粉粉星座</span>
      </template>
    </van-nav-bar>

    <section class="user">
      <div class="top">
        <div class="head">
          <div class="head-left">
            <img src="../assets/img/pink-09/head.png" alt="" />
            <span class="name">笑</span>
          </div>
          <div class="head-right">
            <div class="luck">
              <span><i>62</i>分</span>
              <span>今日运势</span>
            </div>
            <van-icon name="arrow" />
          </div>
        </div>
        <p>今日职场运势爆棚哦，如果你是一个求职者，就、可.</p>
      </div>
      <div class="bottom">
        <div class="yi">
          <span>宜</span>
          <i>求职、应酬</i>
        </div>
        <div class="ji">
          <span>忌</span>
          <i>争吵、赌气</i>
        </div>
      </div>
    </section>
    <section class="activity">
      <div class="activity-left">
        <p>开通女王卡会员，星座测算免单30次/月</p>
        <p>塔罗牌、主题测算每月最高可省2970粉钻</p>
      </div>
      <div class="activity-right">
        <span>首月6元</span>
        <van-icon name="arrow" />
      </div>
    </section>
    <section class="jieyou">
      <div class="item01">
        <span>解忧</span>
        <span>树洞</span>
      </div>
      <div class="item02">
        <span>2020.05.01</span>
        <p>暂时还没有天象信息哦</p>
      </div>
      <div class="item03"></div>
      <div class="item04">
        <img src="../assets/img/pink-09/Tarrow.png" alt="" />
      </div>
    </section>
    <section class="menu">
      <div class="head">
        <div class="recommend">
          <img src="../assets/img/pink-09/hot.png" alt="" />
          <span>热门推荐</span>
        </div>
        <div class="test">
          趣味测试
        </div>
      </div>
      <div class="content">
        <ul>
          <li>
            <img src="../assets/img/pink-09/girl.png" alt="" />
            <div class="info">
              <p class="title">测一测，你的好姻缘会在哪儿呢？</p>
              <p>
                如果知道你和ta一开始就不会在一起，你还会开始吗？我们希望每做一件事，都能有一个好的结果，一段恋情亦是如此。
              </p>
            </div>
          </li>
          <li>
            <img src="../assets/img/pink-09/girl.png" alt="" />
            <div class="info">
              <p class="title">测一测，你的好姻缘会在哪儿呢？</p>
              <p>
                如果知道你和ta一开始就不会在一起，你还会开始吗？我们希望每做一件事，都能有一个好的结果，一段恋情亦是如此。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.constellation {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fbf7f8;
  z-index: 1000;
  background: #19043c;
  color: #fff;
}

.van-nav-bar {
  background: #19043c;

  .title {
    color: #fff;
  }

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

.user {
  width: 345px;
  height: 262px;
  margin: 0 auto;
  background: #6E3EBA;
  border-radius: 10px;

  .top {
    .head {
      height: 125px;
      display: flex;
      align-items: center;

      .head-left {
        display: flex;
        flex-direction: column;
        margin-left: 15px;

        img {
          width: 75px;
          height: 80px;
        }

        span {
          font-szie: 17px;
          margin-top: 10px;
        }
      }

      .head-right {
        display: flex;
        // flex-direction column
        align-items: center;
        margin-left: 130px;

        .luck {
          display: flex;
          flex-direction: column;

          span {
            &:first-child {
              i {
                font-size: 36px;
              }
            }

            &:last-child {
              margin-top: 10px;
              width: 60px;
              height: 22px;
              font-size: 12px;
              background: #4A2880;
              border-radius: 11px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }

    p {
      width: 309px;
      font-size: 13px;
      color: #8860C5;
      margin: 0 auto;
    }

    .bottom {
      height: 90px;
      width: 100%;
      display: flex;
      margin-top: 30px;

      >div {
        width: 50%;
        height: 100%;
        background: #5C2EA8;
      }

      .yi, .ji {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
          width: 40px;
          height: 40px;
          border: 5px solid green;
          border-radius: 100%;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        i {
          color: #A88DD3;
          font-size: 13px;
          margin-top: 10px;
        }
      }

      .ji {
        background: #6236AA;

        span {
          border: 5px solid red;
        }
      }
    }
  }
}

.activity {
  background: #F28A8E;
  height: 70px;
  border-radius: 6px;
  width: 345px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;

  .activity-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
    color: #fff;

    p {
      &:last-child {
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }

  .activity-right {
    margin-left: 10px;
    width: 71px;
    height: 22px;
    background: #FFB232;
    border-radius: 10px;
    font-size: 10px;
    color: #A24C02;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.jieyou {
  height: 90px;
  background: #3C1876;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .item01 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      font-size: 21px;
      color: #FC6BEF;
      font-style: italic;
      font-weight: 400;

      &:last-child {
        color: #2CE1CB;
        margin-top: 5px;
      }
    }
  }

  .itm02 {
    span {
      font-size: 13px;
      line-height: 30px;
    }

    p {
      font-size: 11px;
      line-height: 30px;
    }
  }

  .item03 {
    height: 50px;
    width: 2px;
    background: gray;
  }

  .item04 {
    width: 54px;
    height: 60px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.menu {
  margin-top: 20px;
  background: #3C1876;

  .head {
    display: flex;
    align-items: center;
    height: 40px;

    .recommend {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50%;
      // background  pink
      border-top-right-radius: 20px;

      img {
        width: 20px;
        height: 20px;
      }

      span {
        margin-left: 5px;
        font-size: 12px;
      }
    }

    .test {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      background: #2E125E;
      border-bottom-left-radius: 20px;
    }
  }

  .content {
    ul {
      width: 345px;
      margin: 0 auto;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        height: 120px;
        background: #DC7CA8;

        img {
          width: 102px;
          height: 100px;
          margin: 0 10px;
        }

        .info {
          height: 100px;

          p {
            &:first-child {
              font-size: 14px;
              line-height: 30px;
            }

            &:last-child {
              font-size: 10px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
