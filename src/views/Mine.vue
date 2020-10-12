<template>
  <div>
    <van-nav-bar title="我的" class="nav-bar" />
    <div class="box">
      <img src="../assets/img/chenhaibin/tou.jpg" alt="" class="via" />
      <span class="name">笑</span
      ><span class="authentication">还未认证达人</span>
      <van-progress inactive :percentage="0" pivot-text class="ProgressBars" />
      <b class="My">个人主页></b>
      <span class="present">当前套餐:30K/30M</span>
      <span class="consume">总耗流量:30K</span>
      <span class="up">去升级</span>
      <div class="record">
        <dl>
          <dt>11</dt>
          <dd>关注</dd>
        </dl>
        <dl>
          <dt>0</dt>
          <dd>粉丝</dd>
        </dl>
        <dl>
          <dt>0</dt>
          <dd>粉钻</dd>
        </dl>
        <dl>
          <dt>130</dt>
          <dd>粉币</dd>
        </dl>
      </div>
      <div class="Svip">
        <b class="vip">SVIP会员</b>
        <button class="six">首月6元></button>
      </div>
      <van-grid :column-num="3">
        <van-grid-item icon="add-square" text="个性图标" />
        <van-grid-item icon="shop" text="装扮商店" />
        <van-grid-item icon="gift" text="好物福利社" />
      </van-grid>
      <div class="box-2">
        <span
          ><img src="../assets/img/chenhaibin/38.jpg" alt="" /><i>KFC订餐</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/38.jpg" alt="" /><i>我的消息</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/38.jpg" alt="" /><i>我的礼券</i
          ><a href="javascript:;">></a></span
        >
      </div>
      <div class="box-3">
        <span
          ><img src="../assets/img/chenhaibin/38.jpg" alt="" /><i>我的发布</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/38.jpg" alt="" /><i>我的喜欢</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/38.jpg" alt="" /><i>我的评论</i
          ><a href="javascript:;">></a></span
        >
        <span
          ><img src="../assets/img/chenhaibin/38.jpg" alt="" /><i>草稿箱</i
          ><i></i> <a href="javascript:;">></a></span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  width: 100px;
  height: 100px;
  margin-top: 20px;
  float: left;
  margin-left: 12px;
}

.name {
  font-size: 30px;
  float: left;
  margin: 20px 30px 20px 10px;
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
}

.ProgressBars {
  width: 120px;
  position: absolute;
  left: 122px;
  top: 75px;
}

.My {
  font-size: 16px;
  margin-left: 80px;
}

.present {
  font-size: 12px;
  position: absolute;
  top: 90px;
  left: 122px;
}

.consume {
  font-size: 12px;
  position: absolute;
  top: 105px;
  left: 122px;
}

.up {
  font-size: 12px;
  position: absolute;
  top: 105px;
  left: 232px;
  color: red;
}

.record {
  position: absolute;
  top: 150px;
  left: 12px;
}

.record dl {
  font-size: 30px;
  padding: 0 10px;
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
  height: 100px;
  background: #fee3b9;
  margin-top: 150px;
  padding-top: 10px;
}

.vip {
  font-size: 18px;
  margin-left: 18px;
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
  width: 40px;
  height: 40px;
  margin-left: 20px;
  vertical-align: middle;
}

.box-2 i, a {
  font-size: 18px;
  margin-left: 20px;
}

.box-2 a {
  margin-left: 160px;
}

.box-3 {
  margin-top: 30px;
}

.box-3 img {
  width: 40px;
  height: 40px;
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
</style>
