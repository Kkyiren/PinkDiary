<template>
  <div>
    <van-nav-bar title="我的" class="nav-bar" />
    <div class="box">
      <div v-for="(img, ind) in mineList.Imglist" :key="ind">
        <img :src="img.img" alt="" class="via" />
        <span class="name">{{ img.mingzi }}</span>
      </div>
      <span class="authentication">还未认证达人</span>
      <van-progress inactive :percentage="0" pivot-text class="ProgressBars" />
      <a href="javascript:;" class="My">个人主页></a>
      <div v-for="(num, inn) in mineList.flow" :key="inn + 222">
        <span class="present">当前套餐:{{ num.use }}/{{ num.all }}</span>
        <span class="consume">总耗流量:{{ num.use }}</span>
      </div>
      <span class="up">去升级</span>
      <div class="record">
        <dl v-for="(it, inn) in mineList.result" :key="inn">
          <dt>{{ it.num }}</dt>
          <dd>{{ it.tit }}</dd>
        </dl>
      </div>
      <div class="Svip">
        <b class="vip">SVIP会员</b>
        <button class="six">首月6元></button>
      </div>
      <van-grid :border="false" :column-num="3" style="height:100px">
        <van-grid-item style="height:70px">
          <img src="../assets/img/chenhaibin/个性.png" alt="" class="img-3" />
          <span class="text-1">个性图标</span>
        </van-grid-item>
        <van-grid-item style="height:70px">
          <img src="../assets/img/chenhaibin/sale.png" alt="" class="img-3" />
          <span class="text-1">装扮商店</span>
        </van-grid-item>
        <van-grid-item style="height:70px">
          <img src="../assets/img/chenhaibin/好物组.png" alt="" class="img-3" />
          <span class="text-1">好物福利社</span>
        </van-grid-item>
      </van-grid>
      <div class="box-2">
        <span
          ><img src="../assets/img/chenhaibin/KFC.png" alt="" /><i>KFC订餐</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/消息.png" alt="" /><i>我的消息</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/礼券.png" alt="" /><i>我的礼券</i
          ><a href="javascript:;">></a></span
        >
      </div>
      <div class="box-3">
        <span
          ><img src="../assets/img/chenhaibin/发布.png" alt="" /><i>我的发布</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/爱心.png" alt="" /><i>我的喜欢</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/评论.png" alt="" /><i>我的评论</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/草稿箱.png" alt="" /><i>草稿箱</i
          ><a href="javascript:;" class="a-1">></a></span
        >
      </div>
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
  height: 60px;
  background: pink;
  margin-bottom: 20px;
}

.box {
  width: 350px;
  background: #fff;
  margin: 0 auto;
  position: relative;
  border-radius: 10px;
  z-index: 100;
}

.via {
  width: 70px;
  height: 70px;
  margin-top: 20px;
  float: left;
  margin-left: 12px;
}

.name {
  font-size: 24px;
  float: left;
  margin: 20px 30px 20px 20px;
}

.authentication {
  display: inline-block;
  width: 140px;
  height: 35px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
  margin-top: 20px;
  margin-right: 20px;
  background: #e8e8e8;
}

.ProgressBars {
  width: 120px;
  position: absolute;
  left: 102px;
  top: 75px;
}

.My {
  font-size: 14px;
  margin-left: 100px;
  color: #a7a7a7;
}

.present {
  font-size: 12px;
  position: absolute;
  top: 90px;
  left: 102px;
}

.consume {
  font-size: 12px;
  position: absolute;
  top: 105px;
  left: 102px;
}

.up {
  font-size: 12px;
  position: absolute;
  top: 105px;
  left: 222px;
  color: red;
}

.record {
  position: absolute;
  top: 140px;
  left: 0px;
}

.record dl {
  font-size: 20px;
  padding: 0 23px;
  border: 1px solid #ccc;
  text-align: center;
  border-left: none;
  border-bottom: none;
}

.record dl {
  float: left;
}

.record dl:last-child {
  border-right: none;
}

.Svip {
  display: block;
  width: 350px;
  height: 90px;
  background: #fee3b9;
  margin-top: 90px;
  padding-top: 0px;
  border-radius: 10px;
}

.vip {
  font-size: 18px;
  margin-left: 16px;
  color: #a47e50;
}

.six {
  float: right;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background: #fcc15d;
  font-size: 16px;
  margin-right: 20px;
  margin-top: 30px;
  text-align: center;
  line-height: 30px;
  border: none;
  color: #a24c01;
}

.box-2 img {
  width: 25px;
  height: 25px;
  margin-left: 20px;
  vertical-align: middle;
  margin-bottom: 10px;
}

.box-2 i, a {
  font-size: 18px;
  margin-left: 20px;
}

.box-2 a {
  margin-left: 160px;
}

.box-3 {
  margin-top: 10px;
}

.box-3 img {
  width: 25px;
  height: 25px;
  margin-left: 20px;
  vertical-align: middle;
  margin-bottom: 10px;
}

.box-3 i, a {
  font-size: 18px;
  margin-left: 20px;
}

.box-3 a {
  margin-left: 160px;
}

.box-3 .a-1 {
  margin-left: 178px;
}

.img-3 {
  width: 40px;
  height: 40px;
}

.text-1 {
  margin-top: 10px;
  color: #696969;
}
</style>
