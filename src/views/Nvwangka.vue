<template>
  <div>
    <div>
      <div class="header">
        <!-- 宽高背景图 -->
        <div class="back">
          <img src="../assets/img/nvwangka/fanhui.png" alt="" />
        </div>
        <div class="nvwangka">
          <img src="../assets/img/nvwangka/女王卡组.png" alt="" />
        </div>
      </div>
      <div class="main-top">
        <div class="bt">
          <img src="../assets/img/nvwangka/组 1.png" alt="" />
          <span>尊享特权</span>
        </div>
        <div class="smalltubox">
          <div
            class="smalltu"
            v-for="(item, index) in itemList"
            :key="index"
            v-show="index < 4"
          >
            <template v-if="index < 4">
              <img :src="item.url" alt="" />
              <h3>{{ item.sp1 }}</h3>
              <p>{{ item.sp2 }}</p>
            </template>
          </div>
        </div>
        <div class="smalltubox">
          <div
            class="smalltu"
            v-for="(item, index) in itemList"
            :key="index"
            v-show="index > 3 && index < 8"
          >
            <template v-if="index > 3 && index < 8">
              <img :src="item.url" alt="" />
              <h3>{{ item.sp1 }}</h3>
              <p>{{ item.sp2 }}</p>
            </template>
          </div>
        </div>
        <div class="smalltubox">
          <div
            class="smalltu"
            v-for="(item, index) in itemList"
            :key="index"
            v-show="index > 7 && index < 12"
          >
            <template v-if="index > 7 && index < 12">
              <img :src="item.url" alt="" />
              <h3>{{ item.sp1 }}</h3>
              <p>{{ item.sp2 }}</p>
            </template>
          </div>
        </div>
      </div>
      <div class="main-banner">
        <!-- 宽高背景图按钮 -->
        <span>会员权益</span>
        <div class="huoqv">
          <img src="../assets/img/nvwangka/huoqv.png" alt="" />
        </div>
        <div class="main-main">
          <div class="qyimgbox">
            <div
              class="qyimg"
              v-for="(item, index) in itemList2"
              :key="index"
              v-show="index <= 2"
            >
              <template v-if="index <= 2">
                <img :src="item.url" alt="" />
              </template>
            </div>
          </div>
          <div class="qyimgbox">
            <div
              class="qyimg"
              v-for="(item, index) in itemList2"
              :key="index"
              v-show="index >= 3 && index <= 5"
            >
              <template v-if="index >= 3 && index <= 5">
                <img :src="item.url" alt="" />
              </template>
            </div>
          </div>
          <div class="qyimgbox">
            <div
              class="qyimg"
              v-for="(item, index) in itemList2"
              :key="index"
              v-show="index >= 6 && index <= 8"
            >
              <template v-if="index >= 6 && index <= 8">
                <img :src="item.url" alt="" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-bottom">
      <div class="bt">
        <img src="../assets/img/nvwangka/组 1.png" alt="" />
        <span>特权升级</span>
        <div class="jjsx">
          <img src="../assets/img/nvwangka/jb1.png" alt="" /><span
            >即将上线</span
          >
        </div>
      </div>
      <div class="yy">
        <div class="sjimgbox">
          <div
            class="sjimg"
            v-for="(item, index) in itemList3"
            :key="index"
            v-show="index <= 1"
          >
            <template v-if="index <= 1"><img :src="item.url" alt=""/></template>
          </div>
        </div>
        <div class="sjimgbox">
          <div
            class="sjimg"
            v-for="(item, index) in itemList3"
            :key="index"
            v-show="index >= 2"
          >
            <template v-if="index >= 2"><img :src="item.url" alt=""/></template>
          </div>
        </div>
      </div>
    </div>
    <h4>购买有问题?</h4>
    <div class="xian"></div>
    <div class="bottom">
      <img src="../assets/img/nvwangka/tan.png" alt="" />
      <p>
        <span style="color:#696969">成为会员即表示同意</span>
        <span style="color:#F991B8">《粉粉日记会员协议》《隐私政策》</span>
      </p>
    </div>
    <div class="kaitong">
      <img src="../assets/img/nvwangka/kt.png" alt="" />
      <div class="jg">
        <span style="font-size:18px">年卡</span>
        <span style="font-size:12px">￥</span>
        <span style="font-size:27px">108</span>
        <span
          style="font-size:12px;
text-decoration: line-through;"
          >￥144</span
        >
      </div>
      <span style="font-weight: bold;">立即开通</span>
      <div class="b1">
        <img src="../assets/img/nvwangka/kt2.png" alt="" /><span
          >送腾讯视频月会员</span
        >
      </div>
      <div class="b2">
        <img src="../assets/img/nvwangka/kt3.png" alt="" /><span>~0.29/天</span>
      </div>
    </div>
  </div>
</template>
<script>
import { queenCard } from "../utils/api";
export default {
  data() {
    return {
      itemList: [],
      itemList2: [],
      itemList3: []
    };
  },
  methods: {
    async getqueenCard() {
      const obj = await queenCard();
      this.itemList = obj.data.itemList;
      console.log(this.itemList);
      this.itemList2 = obj.data.itemList2;
      console.log(this.itemList2);
      this.itemList3 = obj.data.itemList3;
      console.log(this.itemList3);
    }
  },
  mounted() {
    this.getqueenCard();
  }
};
</script>
<style>
.header {
  position: relative;
  display: flex;
  width: 375px;
  height: 160px;
  background-color: #ffb6d6;
}
.back {
  margin-top: 14px;
  margin-left: 18px;
}

.back img {
  width: 23px;
  height: 18px;
}
.nvwangka {
  position: absolute;
  top: 46px;
  margin-left: 36px;
}
.nvwangka img {
  width: 300px;
  height: 169px;
}
.main-top .bt > img {
  width: 4px;
  height: 24px;
  margin-left: 15px;
  margin-top: 80px;
}
.main-top .bt > span {
  margin-left: 14px;
  width: 64px;
  height: 15px;
  font-size: 16px;
  font-family: PingFang;
  font-weight: bold;
  color: #010101;
  vertical-align: middle;
}
.smalltubox {
  width: 100%;
  height: 100%;
  display: flex;
}
.smalltu {
  margin: auto;
  margin-bottom: 18px;
}
.smalltu img {
  width: 53px;
  height: 53px;
  margin: 0 12px;
}
.smalltu h3 {
  width: 78px;
  height: 13px;
  font-size: 13px;
  font-family: PingFang;
  text-align: center;
  font-weight: bold;
  color: #000000;
}
.smalltu p {
  width: 81px;
  height: 10px;
  font-size: 10px;
  font-family: PingFang;
  font-weight: bold;
  color: #a7a7a7;
  text-align: center;
  margin: auto;
  margin-top: 2px;
}
.main-banner {
  background-color: thistle;
  width: 345px;
  height: 470px;
  opacity: 0.98;
  border-radius: 5px;
  margin-left: 15px;
}
.main-banner span {
  width: 73px;
  height: 18px;
  font-size: 18px;
  font-family: FZCuHeiSongS-B-GB;
  font-weight: bold;
  font-style: italic;
  color: #ffffff;
  text-shadow: 0px 1px 2px #c983cf;
  margin-left: 15px;
  margin-top: 25px;
}
.main-banner .huoqv {
  float: right;
}
.main-banner .huoqv img {
  width: 102px;
  height: 31px;

  margin-top: 10px;
  margin-right: 13px;
}
.main-main {
  width: 346px;
  height: 420px;
  background: #ffffff;
  box-shadow: 0px 2px 2px 0px #e8e8e8;
  border-radius: 5px;
  overflow: hidden;
}
.main-main .qyimgbox {
  display: flex;
}
.main-main .qyimgbox .qyimg {
  margin: auto;
  margin-top: 16px;
}
.main-main .qyimgbox .qyimg img {
  width: 95px;
  height: 118px;
}
.main-bottom .bt > img {
  width: 4px;
  height: 24px;
  margin-left: 15px;
  margin-top: 10px;
}
.main-bottom .bt > span {
  margin-left: 14px;
  width: 64px;
  height: 15px;
  font-size: 16px;
  font-family: PingFang;
  font-weight: bold;
  color: #010101;
  vertical-align: middle;
}
.main-bottom .bt .jjsx {
  position: relative;
  width: 59px;
  height: 21px;
  margin-left: 15px;
  margin-bottom: 21px;
}
.main-bottom .bt .jjsx img {
  width: 59px;
  height: 21px;
  float: left;
}
.main-bottom .bt .jjsx span {
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 40px;
  height: 10px;
  font-size: 10px;
  font-family: PingFang;
  font-weight: bold;
  color: #ffffff;
}
.sjimgbox {
  display: flex;
  margin-left: 2px;
}
.sjimgbox .sjimg img {
  margin-left: 13px;
  margin-bottom: 15px;
}
.sjimgbox img {
  width: 151px;
  height: 69px;
}
.yy {
  width: 345px;
  height: 181px;
  background: #ffffff;
  box-shadow: 0px 2px 2px 0px #f2f2f2;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 22px;
}
h4 {
  margin-top: 10px;
  width: 74px;
  height: 13px;
  font-size: 13px;
  font-family: PingFang;
  font-weight: bold;
  color: #c1b392;
  margin: auto;
}
.xian {
  margin-top: 23px;
  width: 375px;
  height: 1px;
  background: #e8e8e8;
}
.bottom {
  width: 320px;
  height: 12px;
  margin: auto;
}
.bottom img {
  width: 15px;
  height: 15px;
  float: left;
}
.bottom span {
  float: left;
  font-size: 12px;
  font-family: PingFang;
  font-weight: bold;
  color: #696969;
}
.kaitong {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 22px;
}
.kaitong > img {
  width: 345px;
  height: 46px;
  margin-left: 15px;
}

.kaitong .jg {
  font-size: 18px;
  position: absolute;
  top: 8px;
  left: 40px;
  font-family: PingFang;
  font-weight: bold;
  color: #673f20;
}
.kaitong > span:nth-of-type(1) {
  width: 48px;
  height: 12px;
  font-size: 12px;
  font-family: PingFang;

  position: absolute;
  color: #ffffff;
  top: 18px;
  right: 39px;
}
.kaitong .b1 {
  position: absolute;
  top: -19px;
  left: 25px;
  font-size: 1px;
}
.kaitong .b1 img {
  width: 108px;
  height: 25px;
}
.kaitong .b1 span {
  width: 97px;
  height: 12px;
  font-size: 12px;
  font-family: PingFang;

  color: #ffffff;
  position: absolute;
  top: 2px;
  left: 5px;
}
.kaitong .b2 {
  position: absolute;
  top: -19px;
  right: 95px;
  font-size: 1px;
}
.kaitong .b2 span {
  position: absolute;
  top: 2px;
  left: 5px;
  width: 53px;
  height: 11px;
  font-size: 12px;
  font-family: PingFang;

  color: #ffffff;
}
.kaitong .b2 img {
  width: 75px;
  height: 25px;
  position: absolute;
}
</style>
