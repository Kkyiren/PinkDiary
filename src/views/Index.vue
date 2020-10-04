<template>
  <div class="index-body">
    <van-nav-bar
      class="header"
      title="粉粉日记"
      :fixed="true"
      :placeholder="true"
    >
      <template #left></template>
      <template #right></template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.header
  background-color #ffb6d6
  color #ffffff
</style>
