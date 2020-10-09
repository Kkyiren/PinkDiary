<template>
  <div id="app">
    <router-view></router-view>
    <v-footer class="footer"></v-footer>
  </div>
</template>
<script>
import VFooter from "./components/VFooter";
export default {
  components: {
    VFooter
  }
};
</script>
<style lang="stylus">
#app {
  width: 375px;
  height: 100%;
  padding-bottom: 49px;

  .footer {
    position: fixed;
    bottom: 0;
    z-index: 100;
  }
}
</style>
