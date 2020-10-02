<template>
  <div class="timeline">
    <timeline-banner></timeline-banner>
    <!-- banner以外的部分 -->
    <div class="timeline-body">
      <body-guess></body-guess>
      <body-shopwindow></body-shopwindow>
      <body-welfare></body-welfare>
    </div>
  </div>
</template>
<script>
import TimelineBanner from "../components/TimelineBanner";
import BodyGuess from "../components/BodyGuess";
import BodyShopwindow from "../components/BodyShopwindow";
import BodyWelfare from "../components/BodyWelfare";
export default {
  components: {
    TimelineBanner,
    BodyGuess,
    BodyShopwindow,
    BodyWelfare
  }
};
</script>
<style lang="stylus" scoped>
.timeline
  background rgb(251,247,248)
  padding-bottom 35px
  // overflow-x hidden
  .timeline-body
    width 100%
    margin-top 37px
    padding 0 19px
</style>
