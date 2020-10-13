<template>
  <div>
    <van-nav-bar
      title="个人主页"
      left-text="<_<"
      right-text="📖"
      class="nav-bar"
    />
    <!-- @click-left="onClickLeft"
    @click-right="onClickRight" -->
    <div class="box-1" v-for="(img, ind) in mineList.Imglist" :key="ind">
      <img :src="img.img" alt="" class="img-2" />
      <h4>{{ img.tit }}</h4>
      <h6>ID:{{ img.num }}</h6>
    </div>
    <div class="box-2">
      <span class="name-1">暂无签名</span>
      <van-cell-group class="cell-group">
        <van-field
          label="ID号"
          placeholder="请输入ID号"
          style="font-size:16px"
        />
        <van-field
          label="昵称"
          placeholder="请输入昵称"
          style="font-size:16px"
        />
      </van-cell-group>
      <van-cell title="二维码" is-link />
      <van-button type="primary" block class="but" color="pink"
        >登录</van-button
      >
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getMineList"])
  },
  computed: {
    ...mapState(["mineList"])
  },
  mounted() {
    this.getMineList();
  }
};
</script>
<style lang="stylus" scoped>
.nav-bar {
  background: pink;
}

.box-1 {
  width: 100%;
  height: 250px;
  background: url('../assets/img/chenhaibin/图层1.png') no-repeat center;
  position: relative;
}

.box-1 .img-2 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}

.box-1 h4 {
  font-size: 30px;
  position: absolute;
  top: calc(50% + 50px);
  left: calc(50% - 15px);
  color: #fff;
}

.box-1 h6 {
  font-size: 16px;
  position: absolute;
  top: calc(50% + 90px);
  left: calc(50% - 45px);
  color: #fff;
}

.box-2 .name-1 {
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 25px;
}

.cell-group {
  margin-top: 20px;
}

.but {
  margin-top: 120px;
}
</style>