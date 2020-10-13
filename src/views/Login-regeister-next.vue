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
      <div class="next">
        <!-- 输入验证码 -->
        <div class="code">
          <input type="number" placeholder="输入验证码" />
          <span class="get" @click="toGet" v-if="get">获取</span>
          <span class="time" v-else>{{ count }}秒后重发</span>
        </div>
        <!-- 请输入密码 -->
        <div class="password">
          <input type="password" placeholder="请输入密码" v-if="show" />
          <input type="text" placeholder="请输入密码" v-else />
          <span @click="toShow">
            <img
              src="../assets/images/粉粉-商店_slices/yes_.jpg"
              alt=""
              v-if="imgShow"
            />
            <img
              src="../assets/images/粉粉-商店_slices/no_.jpg"
              alt=""
              v-else
            />
          </span>
        </div>
      </div>
      <button @click="toIndex">提交</button>
      <center>登录注册表示同意<span>用户协议&nbsp;隐私政策</span></center>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      imgShow: true,
      get: true,
      count: 60,
      phoneNumber: ""
    };
  },
  mounted() {
    this.phoneNumber = this.$store.state.phone;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toShow() {
      this.show = !this.show;
      this.imgShow = !this.imgShow;
    },
    toGet() {
      this.get = !this.get;
      let timer = setInterval(() => {
        this.count--;
        if (this.count === 0) {
          clearInterval(timer);
          this.get = !this.get;
          this.count = 60;
        }
      }, 1000);
    },
    toIndex() {
      this.$router.push("/index");
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
      // margin-bottom: 10px;
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

        // 获取验证码
        .get {
          font-size: 14px;
          color: #fff;
          border-radius: 20px;
          padding: 10px 28px;
          background: linear-gradient(to right, #FF98CF, #FE86A9);
        }

        // 倒计时
        .time {
          width: 84px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          border-radius: 8px;
          background: #D1D1D1;
        }
      }

      .password {
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
