<template>
    <div>
        <router-view></router-view>
<van-tabbar v-model="active" :route="true" active-color="orange" :placeholder="true" z-index="999">
  <van-tabbar-item icon="home-o" to="/index">时间线</van-tabbar-item>
  <van-tabbar-item icon="apps-o" to="/classify">宝藏星球</van-tabbar-item>
  <van-tabbar-item icon="wap-home-o" to="/community">社区</van-tabbar-item>
  <van-tabbar-item icon="cart-circle" to="/cart">商城</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" to="/mine">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>

export default {
    data(){
        return{
            active:0
        };
    }
}
</script>
<style lang="stylus" scoped>
    
</style>