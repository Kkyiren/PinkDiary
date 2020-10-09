<template>
  <div class="main-bg">
    <MallHeader />
    <img
      class="mall-top-bg"
      src="../assets/img/pink-mall/top-curtain@2x.png"
      alt=""
    />
    <div class="svip">
      <img src="../assets/img/pink-mall/SVIP@2x.png" alt="" />
    </div>
    <TopLi />
    <MallSvip />
    <MallWriting />
    <MallTd />
  </div>
</template>

<script>
import MallHeader from "../components/mall/MallHeader.vue";
import TopLi from "../components/mall/TopLi.vue";
import MallSvip from "../components/mall/MallSvip.vue";
import MallWriting from "../components/mall/MallWriting.vue";
import MallTd from "../components/mall/MallTd.vue";
export default {
  components: {
    MallHeader,
    TopLi,
    MallSvip,
    MallWriting,
    MallTd
  }
};
</script>
<style lang="stylus" scoped>
.main-bg {
  background: #fbf7f8;
}

.mall-top-bg {
  width: 100%;
}

.svip {
  width: 100%;
  padding: 5px 15px;

  img {
    width: 100%;
  }
}
</style>
