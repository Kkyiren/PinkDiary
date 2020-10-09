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
          <img class="big" :src="item.url" alt="" />
          <h3>信纸屋</h3>
          <p v-if="item.gold">
            <img
              class="gold"
              src="../../assets/img/pink-mall/mingold@2x.png"
              alt=""
            />
            <span>{{ item.gold }}</span>
            /

            <img
              class="min"
              src="../../assets/img/pink-mall/zuanshi@2x.png"
              alt=""
            />
            <span>{{ item.zuan }}</span>
          </p>
          <p v-if="item.gold == 0">免费</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import yao from "../../assets/img/pink-mall/yao@2x.png";
import sun from "../../assets/img/pink-mall/sun@2x.png";
import flowers from "../../assets/img/pink-mall/flowers@2x.png";
export default {
  data() {
    return {
      list: [
        {
          url: yao,
          gold: 60,
          zuan: 6,
          title: "魔儿小妖"
        },
        {
          url: sun,
          gold: 60,
          zuan: 6,
          title: "晴朗"
        },
        {
          url: flowers,
          gold: 0,
          zuan: 0,
          title: "小花"
        }
      ]
    };
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
