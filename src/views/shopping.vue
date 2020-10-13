<template>
  <div id="app">
    <q-header />
    <tabs />
    <router-view></router-view>
  </div>
</template>

<script>
import qHeader from "@/components/jin/Header";
import Tabs from "@/components/jin/Tab";
// import foter from '@/public/foter'
export default {
  components: {
    qHeader,
    Tabs
  }
};
</script>
<style lang="scss" scoped>
</style>
