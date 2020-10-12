<template>
  <div class="centent">
    <header>
      <h3>信纸屋</h3>
      <span>
        >
      </span>
    </header>
    <main>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img class="big" :src="item.avatarImg" alt="" />
          <h3>{{ item.title }}</h3>
          <p v-if="item.glod">
            <img
              class="gold"
              src="../../assets/img/pink-mall/mingold@2x.png"
              alt=""
            />
            <span>{{ item.glod }}</span>
            /

            <img
              class="min"
              src="../../assets/img/pink-mall/zuanshi@2x.png"
              alt=""
            />
            <span>{{ item.zuan }}</span>
          </p>
          <p v-if="item.glod == 0">免费</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { mallLetter } from "../../utils/api.js";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async getData() {
      let str = await mallLetter();
      this.list = str.data.result;
      // console.log(this.list);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="stylus" scoped>
.centent {
  margin-top: 30px;
  padding: 0 15px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: (68 / 3)px;

    h3 {
      font-size: 16px;
      color: #000;
    }

    span {
      font-size: 12px;
      color: #ddd;
    }
  }

  main {
    height: (430 / 3)px;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      li {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        font-size: (42 / 3)px;
        color: #000;
      }
    }

    .big {
      width: 95px;
      height: 95px;
    }

    .min {
      width: (42 / 3)px;
    }

    .gold {
      width: (52 / 3)px;
    }
  }
}
</style>
