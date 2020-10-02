<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
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
#app
  padding-bottom 49px
  v-footer
    position fixed
    bottom 0
    z-index 100
</style>
