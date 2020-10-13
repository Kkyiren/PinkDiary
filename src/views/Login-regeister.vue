<template>
  <div class="regeister">
    <header>
      <img
        src="../assets/images/粉粉-商店_slices/返回.png"
        alt=""
        @click="back"
      />
      <span>手机号注册</span>
      <span></span>
    </header>

    <main>
      <div class="phone">
        <span>+86</span>
        <input type="number" placeholder="输入手机号" v-model="phoneNumber" />
      </div>
      <!-- <div class="next">
        <div class="code">
          <input type="text" placeholder="输入验证码" />
        </div>
      </div> -->
      <button @click="toNext">下一步</button>
      <center>登录注册表示同意<span>用户协议&nbsp;隐私政策</span></center>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: ""
    };
  },
  methods: {
    toNext() {
      this.$router.push("/next");
      this.$store.commit("setPhone", this.phoneNumber);
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus">
.regeister {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #FBF7F8;
  z-index: 1000;

  header {
    width: 375px;
    height: 44px;
    background: linear-gradient(to right, #FF98CF, #FE86A9);
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    font-size: 14px;
    color: #fff;

    img {
      width: 25px;
      height: 20px;
    }
  }

  main {
    margin-top: 22px;

    .phone {
      width: 100%;
      height: 44px;
      background: #fff;
      display: flex;
      border-bottom: 1px solid #FBF7F8;

      span {
        padding: 0 18px;
        font-size: 14px;
        line-height: 44px;
      }

      input {
        border: 0;
        height: 44px;
        font-size: 14px;
        flex: 1;
      }
    }

    .next {
      // display: none;
      .code {
        height: 44px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18px;

        input {
          width: 66.66%;
          height: 44px;
          font-size: 14px;
          border: 0;
        }
      }

      .passward {
        width: 375px;
        padding: 0 18px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
          width: 80%;
          height: 44px;
          font-size: 14px;
          border: 0;
        }

        img {
          width: 21px;
          height: 23px;
        }
      }
    }

    button {
      margin: 0 18px;
      width: 339px;
      height: 44px;
      background: linear-gradient(to right, #FF98CF, #FE86A9);
      border: 0;
      border-radius: 22px;
      color: #fff;
    }

    center {
      font-size: 10px;
      height: 44px;
      line-height: 44px;

      span {
        color: #fe86a9;
      }
    }
  }
}
</style>
