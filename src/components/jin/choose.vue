<template>
  <ul class="choose">
    <li v-for="(item, index) in shoppingList" :key="index">
      <!-- <img :src="item.url" alt=""> -->
      <p><img :src="item.url" alt="" /></p>
      <div class="wrap">
        <div>{{ item.title }}</div>
        <span>{{ item.merchants }}</span>
        <p>
          <i>{{ item.price }}</i>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getShoppingList"])
  },
  computed: {
    ...mapState(["shoppingList"])
  },
  mounted() {
    this.getShoppingList();
  }
};
</script>
<style lang="stylus" scoped>
ul {
  width: 374px;
  height: 779px;
  overflow: scroll;
}

li {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  padding-bottom: 15px;
}

img {
  width: 110px;
  height: 110px;
}

.wrap div {
  font-size: 18px;
  font-family: PingFang;
  color: #000000;
}

.wrap span {
  font-size: 14px;
}

.wrap i {
  font-size: 18px;
  color: #fd548a;
}
</style>
