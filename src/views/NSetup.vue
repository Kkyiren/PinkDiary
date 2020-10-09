<template>
  <div class="main">
    <header>
      <img
        @click="onClickLeft"
        class="left"
        src="../assets/img/pink-setup/back@2x.png"
        alt=""
      />
      <p>设置</p>
      <img
        @click="onClickRight"
        class="right"
        src="../assets/img/pink-setup/setup@2x.png"
        alt=""
      />
    </header>
    <div class="none"></div>
    <van-cell title="帐号管理" is-link />
    <van-cell title="密码锁" is-link value="未开启" />
    <van-cell title="消息通知" is-link />
    <div class="none"></div>
    <van-cell title="同步管理" is-link />
    <div class="none"></div>

    <van-cell
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      is-link
      @click="onClickPush(item.url)"
    />
    <div class="none"></div>
    <van-cell title="黑名单" is-link />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "通用设置",
          url: ""
        },
        {
          title: "创建桌面快捷键图标",
          url: ""
        },
        {
          title: "关于粉粉",
          url: ""
        },
        {
          title: "粉粉社区公约",
          url: ""
        },
        {
          title: "常见问题和反馈",
          url: ""
        },
        {
          title: "诊断问题",
          url: ""
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/");
    },
    onClickPush(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang="stylus" scoped>
.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fbf7f8;
  z-index: 1000;
  padding-top: 44px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: (132 / 3)px;
  background: #FFB5D5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: (54 / 3)px;
  color: #fff;

  .left {
    width: (68 / 3)px;
    height: (54 / 3)px;
    margin-left: (55 / 3)px;
  }

  .right {
    width: (64 / 3)px;
    height: (63 / 3)px;
    margin-right: (69 / 3)px;
  }
}

.none {
  height: 30px;
}
</style>
