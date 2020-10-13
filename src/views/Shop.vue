<template>
  <div class="shop">
    <header>
      <div class="top">
        <div class="left">
          <img src="../assets/images/粉粉-商店_slices/返回.png" alt />
        </div>
        <div class="center">更多分类</div>
        <div class="right">
          <img src="../assets/images/粉粉-商店_slices/分享图标.png" alt />
          <img src="../assets/images/粉粉-商店_slices/拍照图标.png" alt />
        </div>
      </div>
      <input type="text" class="bottom" placeholder="搜索宝贝" />
    </header>
    <main>
      <!-- 侧边导航 -->
      <van-sidebar v-model="activeKey" @change="change">
        <van-sidebar-item
          v-for="(item, index) in arr"
          :key="index"
          :title="item"
          @click="handleClick(index)"
        />
      </van-sidebar>
      <!-- 点击侧边导航会切换的内容 -->
      <div class="article">
        <h6>{{ arr[i] }}</h6>
        <img src="../assets/images/粉粉-商店_slices/手机banner.png" alt />
        <ul class="main-content">
          <li
            v-for="(item, index) in classifyList"
            :key="index"
            v-show="item.type == type"
          >
            <img :src="item.imgUrl" alt />
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: sessionStorage.getItem("activeKey") || 0,
      type: sessionStorage.getItem("type") || 1,
      arr: [
        "热门推荐",
        "尿不湿",
        "潮流女装",
        "潮流男装",
        "母婴健康",
        "内衣配饰",
        "电脑办公",
        "手机数码",
        "图书音像",
        "家用电器",
        "家具器材",
        "居家生活",
        "医药百货",
        "进口食品"
      ], // 侧边导航的title
      i: 0
    };
  },
  computed: {
    classifyList() {
      // console.log(this.$store.state.classifyList);
      return this.$store.state.classifyList;
    }
  },
  mounted() {
    this.$store.dispatch("getClassifyList", {
      type: this.type
    });
  },
  methods: {
    // 点击侧边导航切换商品
    change(index) {
      this.type = index + 1 + "";
      sessionStorage.setItem("activeKey", this.activeKey);
      sessionStorage.setItem("type", this.type);
      this.$store.dispatch("getClassifyList", {
        type: this.type
      });
    },
    handleClick(index) {
      this.i = index;
    }
  }
};
</script>

<style lang="stylus">
header {
  width: 375px;
  height: 101px;
  background: #FFB6D6;
  padding: 0 18px;

  .top {
    width: 100%;
    height: 44px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left>img {
      width: 23px;
      height: 18px;
    }

    .center {
      font-size: 18px;
      margin-left: 13%;
    }

    .right {
      width: 70px;
      display: flex;
      justify-content: space-between;

      img {
        width: 23px;
        height: 23px;
      }
    }
  }

  .bottom {
    width: 100%;
    height: 37px;
    font-size: 14px;
    font-weight: Medium;
    border: none;
    border-radius: 18px;
    margin: 10px 0;
    text-align: center;
  }
}

main {
  position: fixed;
  top: 101px;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  z-index: 120;

  .van-sidebar-item {
    margin-bottom: 1px;
    background-color: #E8E8E8;
    text-align: center;
  }

  .van-sidebar-item--select {
    background-color: #fff;
    color: #ff6c8c;
  }

  .van-sidebar-item--select::before {
    width: 4px;
    height: 95px;
    background-color: #FF6C8C;
  }

  .article {
    flex: 1;
    flex-wrap: wrap;
    overflow-y: auto;
    align-content: flex-start;
    padding: 10px 15px 0 10px;

    h6 {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    img {
      width: 274px;
      height: 98px;
      margin-bottom: 10px;
    }

    .main-content {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      li {
        width: 33.33%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        img {
          width: 50px;
          height: 50px;
        }

        span {
          width: 70px;
          text-align: center;
          margin-top: 10px;
          font-size: 12px;
          font-weight: bold;
          color: #525252;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
