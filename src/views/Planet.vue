<template>
  <div class="timeline">
    <timeline-banner></timeline-banner>
    <!-- banner以外的部分 -->
    <div class="timeline-body">
      <body-guess></body-guess>
      <body-shopwindow
        :topList="topList"
        :bottomList="bottomList"
      ></body-shopwindow>
      <body-welfare :goodsList="goodsList"></body-welfare>
    </div>
  </div>
</template>
<script>
import TimelineBanner from "../components/TimelineBanner";
import BodyGuess from "../components/BodyGuess";
import BodyShopwindow from "../components/BodyShopwindow";
import BodyWelfare from "../components/BodyWelfare";
import { getPlanet } from "../utils/api";
export default {
  data() {
    return {
      topList: [],
      bottomList: [],
      goodsList: []
    };
  },
  methods: {
    async getPlanetList() {
      const obj = await getPlanet();
      this.goodsList = obj.data.goods;
      this.topList = obj.data.topList;
      this.bottomList = obj.data.bottomList;
    }
  },
  mounted() {
    this.getPlanetList();
  },
  components: {
    TimelineBanner,
    BodyGuess,
    BodyShopwindow,
    BodyWelfare
  }
};
</script>
<style lang="stylus" scoped>
.timeline {
  background: rgb(251, 247, 248);
  padding-bottom: 35px;

  .timeline-body {
    width: 100%;
    margin-top: 37px;
    padding: 0 19px;
  }
}
</style>
