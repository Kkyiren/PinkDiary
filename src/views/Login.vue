<template>
  <div class="login">
    <header>
      <img
        src="../assets/images/粉粉-商店_slices/返回.png"
        alt=""
        @click="back"
      />
      <span>登录</span>
      <span @click="toRegeister">注册</span>
    </header>
    <center>
      <img src="../assets/images/粉粉-商店_slices/登录_03.jpg" alt="" />
    </center>
    <main>
      <input type="text" placeholder="手机号/粉粉ID/账号名" />
      <div class="password">
        <input type="password" placeholder="输入密码" v-if="show" />
        <input type="text" placeholder="输入密码" v-else />
        <span @click="toShow">
          <img
            src="../assets/images/粉粉-商店_slices/yes_.jpg"
            alt=""
            v-if="imgShow"
          />
          <img src="../assets/images/粉粉-商店_slices/no_.jpg" alt="" v-else />
        </span>
      </div>
      <p>忘记帐号/密码</p>
      <button @click="toIndex">登录</button>
      <center>登录注册表示同意<span>用户协议&nbsp;隐私政策</span></center>
    </main>
    <footer>
      <div class="top">
        <div class="left"></div>
        <center>第三方阵营登录</center>
        <div class="right"></div>
      </div>
      <div class="bottom">
        <div>
          <img src="../assets/images/粉粉-商店_slices/登录_07.jpg" alt="" />
          <span>QQ账号</span>
        </div>
        <div>
          <img src="../assets/images/粉粉-商店_slices/登录_10.jpg" alt="" />
          <span>微博账号</span>
        </div>
        <div>
          <img src="../assets/images/粉粉-商店_slices/登录_12.jpg" alt="" />
          <span>微信账号</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      imgShow: true
    };
  },
  methods: {
    toRegeister() {
      this.$router.push("/regeister");
    },
    back() {
      this.$router.go(-1);
    },
    toShow() {
      this.show = !this.show;
      this.imgShow = !this.imgShow;
    },
    toIndex() {
      this.$router.push("/index");
    }
  }
};
</script>

<style lang="stylus">
.login {
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

  center {
    img {
      width: 80px;
      display: block;
    }
  }

  main {
    input {
      width: 100%;
      height: 44px;
      display: block;
      border: 0;
      padding: 0 18px;
      border-bottom: 1px solid #fbf7f8;
    }

    .password {
      width: 375px;
      padding: 0 18px;
      background: #fff;
      display: flex;

      input {
        padding: 0;
        border: 0;
        display: block;
      }

      span {
        img {
          width: 21px;
          height: 23px;
        }
      }
    }

    p {
      font-size: 10px;
      height: 44px;
      line-height: 44px;
      color: #fe86a9;
      padding-right: 18px;
      text-align: right;
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

  footer {
    position: fixed;
    left: 0;
    bottom: 0;

    .top {
      width: 375px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      color: #ccc;

      .left, .right {
        width: 120px;
        height: 1px;
        background: #ccc;
      }
    }

    .bottom {
      width: 375px;
      display: flex;

      div {
        width: 33.33%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        img {
          width: 50px;
          // margin: 10px 0;
        }

        span {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
