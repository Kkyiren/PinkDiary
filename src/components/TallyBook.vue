<template>
  <keep-alive>
    <div class="tallyBook">
      <!-- 头部 -->
      <van-nav-bar>
        <template #left>
          <div class="left" @click="back">
            <img src="../assets/img/pink-09/arrows.png" alt="" />
            <img src="../assets/img/pink-09/orthogon.png" alt="" />
            <img src="../assets/img/pink-09/arrows.png" alt="" />
          </div>
        </template>
        <template #title>
          <div class="title">
            <span>2020</span>年<span>5</span>月
            <img src="../assets/img/pink-09/pull-down.png" alt="" />
          </div>
        </template>
        <template #right>
          <img src="../assets/img/pink-09/time.png" alt="" />
        </template>
      </van-nav-bar>

      <!-- 预算 -->
      <section class="budget">
        <div class="budget-set">
          设置预算
        </div>
        <div class="budget-content">
          <ul>
            <li>
              <span>{{ income }}</span>
              <i>收入(元)</i>
            </li>
            <li>
              <span>-{{ expend }}</span>
              <i>支出(元)</i>
            </li>
            <li>
              <span>{{ diff }}</span>
              <i>收支差额(元)</i>
            </li>
          </ul>
        </div>
      </section>

      <!-- 支出 收入详情 -->
      <main class="detail">
        <div class="detail-hd">
          <div class="date">
            <span>5月21日</span>
            <span>星期四</span>
          </div>
          <div class="total">
            支出:<span>{{ expend }}</span
            >，收入:<span>{{ income }}</span>
          </div>
        </div>
        <div class="detail-body">
          <ul class="detail-list">
            <li
              class="detail-item"
              v-for="(item, index) in detailList"
              :key="index"
            >
              <div class="item-title">
                <img :src="item.src" alt="" />
                <span>{{ item.name }}</span>
              </div>
              <div
                class="subtotal"
                :class="{ active: parseInt(item.subtotal) < 0 }"
              >
                <span>{{ item.subtotal }}</span>
              </div>
            </li>

            
            <div class="detail-add" @click="add">
              <img src="../assets/img/pink-09/add.png" alt="" />
            </div>
          </ul>
        </div>
      </main>
    </div>
  </keep-alive>
</template>

<script>
// import url01 from "../assets/img/pink-09/gifts.png";
// import url02 from "../assets/img/pink-09/recreation.png";
// import url03 from "../assets/img/pink-09/traffic.png";

import { mapState } from "vuex";

export default {
  data() {
    return {
      // detailList: [
      //   {
      //     src: url01,
      //     name: "礼金",
      //     subtotal: "+30.00"
      //   },
      //   {
      //     src: url02,
      //     name: "娱乐",
      //     subtotal: "-15.00"
      //   },
      //   {
      //     src: url03,
      //     name: "交通",
      //     subtotal: "-169.00"
      //   },
      //   {
      //     src: url01,
      //     name: "礼金",
      //     subtotal: "+120.00"
      //   },
      //   {
      //     src: url02,
      //     name: "娱乐",
      //     subtotal: "-15.00"
      //   },
      //   {
      //     src: url02,
      //     name: "娱乐",
      //     subtotal: "-15.00"
      //   },
      //   {
      //     src: url03,
      //     name: "交通",
      //     subtotal: "-169.00"
      //   },
      //   {
      //     src: url01,
      //     name: "礼金",
      //     subtotal: "+120.00"
      //   },
      //   {
      //     src: url02,
      //     name: "娱乐",
      //     subtotal: "-15.00"
      //   }
      // ],
      expends: 0,
      incomes: 0,
      show: false,
    };
  },
  computed: {
    //支出计算
    expend() {
      this.detailList.forEach(item => {
        if (item.subtotal.slice(0, 1) == "-") {
          this.expends += parseInt(item.subtotal.slice(1));
        }
      });
      return this.expends.toFixed(2);
    },
    //收入计算
    income() {
      this.detailList.forEach(item => {
        if (item.subtotal.slice(0, 1) == "+") {
          this.incomes += parseInt(item.subtotal.slice(1));
        }
      });
      return this.incomes.toFixed(2);
    },
    //收支差额计算
    diff() {
      return (this.incomes - this.expends).toFixed(2);
    },
    // detailList(){
    //   return this.$store.state.detailList
    // },
      ...mapState({
      detailList: "detailList"
    }),
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    showPopup() {
      this.show = true;
    },
    add(){
      this.$router.push("/tallyAdd")
    }
  },
  
 
};
</script>
<style lang="stylus">
.tallyBook {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fbf7f8;
  z-index: 1000;
}

.van-nav-bar {
  background: #FFB5D5;

  .title {
    color: white;
  }

  img {
    width: 18px;
  }

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
}

.budget {
  background: white;

  .budget-set {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    font-size: 12px;
    color: #FF6B8B;
  }

  .budget-content {
    ul {
      display: flex;
      justify-content: space-around;

      li {
        display: flex;
        flex-direction: column;
        width: 33%;
        align-items: center;
        color: #FF6B8B;
        font-size: 12px;

        &:first-child {
          color: #91D5E9;
        }

        &:last-child {
          color: #696969;
        }

        i {
          display: inline-block;
          font-size: 12px;
          margin: 10px 0;
          color: #696969;
        }
      }
    }
  }
}

.detail {
  width: 350px;
  height: 453px;
  background: #fff;
  margin: 0 auto;
  margin-top: 20px;

  .detail-hd {
    height: 30px;
    padding: 0 15px;
    font-size: 10px;
    color: #696969;
    background: #d8d0d2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .detail-body {
    height: 423px;
    overflow-y: auto;

    .detail-list {
      .detail-add {
        position: fixed;
        width: 107px;
        height: 107px;
        bottom: 88px;
        right: 130px;

        img {
          width: 107px;
          height: 107px;
        }
      }

      .detail-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        padding: 12px;
        border-bottom: 1px solid #EBEBEB;

        .item-title {
          display: flex;
          align-items: center;

          img {
            width: 40px;
            margin-right: 10px;
          }
        }

        .subtotal {
          color: #8FDEF7;
        }

        .active {
          color: red;
        }
      }
    }
  }
}
</style>
