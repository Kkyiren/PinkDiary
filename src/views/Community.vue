<template>
  <div class="community">
    <!-- 列表 -->
    <header>
      <div class="community-search">
        <img src="../assets/img/pink-community/fsj.png" alt="" />
        <input type="text" placeholder="搜索id、内容、圈子、话题" />
      </div>
      <div class="community-icon">
        <img
          src="../assets/img/pink-community/robot.png"
          alt=""
          class="icon-1"
        />
        <img src="../assets/img/pink-community/horn.png" alt="" />
      </div>
    </header>
    <community-list />
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="change(index, item.url)"
        :class="{ active: activeIndex === index }"
      >
        {{ item.title }}
        <div class="community-line" v-if="activeIndex === index"></div>
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import communityList from "../components/community/CommunityList";
export default {
  data() {
    return {
      vulue: "",
      list: [
        {
          title: "热门",
          url: "/hot"
        },
        {
          title: "专题",
          url: "/project"
        },
        {
          title: "问答",
          url: "/answer"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    change(index, url) {
      if (url !== this.$route.path) {
        this.$router.push(url);
        this.activeIndex = index;
      }
    }
  },
  mounted() {
    this.list.forEach((value, index) => {
      if (value.url == this.$route.path) {
        this.activeIndex = index;
      }
    });
  },
  components: {
    communityList
  }
};
</script>
<style lang="stylus">
.community {
  width: 375px;
  padding: 0px 10px;

  header {
    display: flex;
    margin-top: 5.5px;
    justify-content: center;
    align-items: center;

    .community-search {
      padding: 0px 13px;
      width: 241px;
      height: 35px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      border: 1px solid #ccc;

      input {
        width: 217px;
        height: 100%;
        border: none;
      }

      img {
        width: 14px;
        height: 14px;
        margin-right: 10px;
      }
    }

    .community-icon {
      width: 97px;
      padding-left: 15px;

      img {
        margin-left: 18px;
        width: 16px;
        height: 21px;
      }

      .icon-1 {
        width: 21px;
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;

    .active {
      font-size: 19px;
      font-family: PingFang;
      font-weight: bold;
      color: #000000;
    }

    li {
      width: 80px;
      height: 40px;
      font-size: 15px;
      font-family: PingFang;
      font-weight: bold;
      color: #A7A7A7;
      line-height: 30px;
      text-align: center;
      position: relative;

      .community-line {
        position: absolute;
        width: 20px;
        height: 4px;
        background: #FF6C8C;
        border-radius: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
