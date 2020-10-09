<template>
  <div class="main">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.url" alt="" />
        <div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.val }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import gold from "../../assets/img/pink-mall/gold@2x.png";
import Rotary from "../../assets/img/pink-mall/Rotary@2x.png";
export default {
  data() {
    return {
      list: [
        {
          url: gold,
          title: "赚粉币",
          val: "做任务赚粉币"
        },
        {
          url: Rotary,
          title: "幸运大转盘",
          val: "赚粉币兑好礼"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.main {
  padding: 15px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      width: (497 / 3)px;
      height: (181 / 3)px;
      background: #FFFFFF;
      box-shadow: 0px 2px 0px 0px #E8E8E8;
      border-radius: (16 / 3)px;
      display: flex;
      align-items: center;
      padding-left: 10px;

      img {
        width: (158 / 3)px;
        height: (130 / 3)px;
        margin-right: 10px;
      }

      h4 {
        font-size: (42 / 3)px;
        color: #000;
        margin-bottom: 8px;
      }

      p {
        font-size: 10px;
        color: #A7A7A7;
      }
    }
  }
}
</style>
