<template>
  <div class="all">
    <!-- 导航栏 -->
    <header class="guide">
      <van-nav-bar
        title="热门小说"
        :left-arrow="true"
        v-on:click-left="backHistory"
      />
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <img src="../assets/img/yjj-hotnovel/paihang.png" alt="" />
          <h3>排行</h3>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/img/yjj-hotnovel/zhaoshu.png" alt="" />
          <h3>找书</h3>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/img/yjj-hotnovel/shujia.png" alt="" />
          <h3>书架</h3>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/img/yjj-hotnovel/zhuanqian.png" alt="" />
          <h3>赚钱</h3>
        </van-grid-item>
      </van-grid>
    </header>
    <!-- 间隔 -->
    <div class="jiange"></div>
    <!-- 男生女生 -->
    <div class="search">
      <div class="search-top">
        <h5 class="biaozhu">男生</h5>
        <h5>女生</h5>
        <van-search placeholder="阴阳鬼术是" shape="round" />
      </div>
      <div class="search-center">
        <div class="search-center-left">
          <img src="../assets/img/yjj-hotnovel/shuchangtiao.png" alt="" />
          <span> 主编力荐 </span>
        </div>
        <div class="search-center-right">
          <span>换一批</span>
          <img src="../assets/img/yjj-hotnovel/huanyipi.png" alt="" />
        </div>
      </div>
      <!-- 这是主编力荐下面的部分 -->
      <div class="search-bottom">
        <div class="search-bottom-top" v-if="novelList.length > 0">
          <img :src="novelList[0].imgUrl" alt="" />
          <div class="search-bottom-top-right">
            <div class="right-one">
              <h3>{{ novelList[0].noveltitle }}</h3>
              <div class="yuan">{{ novelList[0].score }}分</div>
            </div>
            <div class="right-two">
              <div class="first">
                {{ novelList[0].state }}
              </div>
              <div class="second">
                {{ novelList[0].name }}
              </div>
              <div class="third">
                {{ novelList[0].city }}
              </div>
            </div>
            <div class="right-three">
              {{ novelList[0].msg }}
            </div>
            <div class="right-four">
              {{ novelList[0].much }}
            </div>
          </div>
        </div>
        <!-- 这是独家特助的地方   -->
        <div class="search-bottom-bottom" v-if="sanlieList.length > 0">
          <div class="left" v-for="(item, index) in sanlieList" :key="index">
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.noveltitle }}</p>
            <span>{{ item.number }}万人读过</span>
          </div>
        </div>
      </div>

      <div class="jiange"></div>

      <!-- 完本推荐 -->
      <div class="search-center">
        <div class="search-center-left">
          <img src="../assets/img/yjj-hotnovel/shuchangtiao.png" alt="" />
          <span> 完本推荐 </span>
        </div>
        <div class="search-center-right">
          <span>换一批</span>
          <img src="../assets/img/yjj-hotnovel/huanyipi.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 完本推荐下面的内容   这个是单独写的 -->
    <div class="lastedbottom" v-if="finishedNovel.length > 0">
      <div class="judge" v-for="(item, index) in finishedNovel" :key="index">
        <div class="left">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="right">
          <div class="righttop">
            <div class="righttop-left">
              <div class="righttop-left-first">
                {{ item.state }}
              </div>
              <div class="righttop-left-second">
                {{ item.title }}
              </div>
            </div>
            <div class="righttop-right">{{ item.score }}分</div>
          </div>
          <div class="right-next">
            {{ item.kind }}
          </div>
          <div class="right-second">
            {{ item.msg }}
          </div>
          <div class="right-fourth">
            {{ item.much }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hotNovel } from "../utils/api.js";
export default {
  data() {
    return {
      novelList: [],
      sanlieList: [],
      finishedNovel: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    backHistory() {
      this.$router.go(-1); //返回上一层
    },
    async getData() {
      let str = await hotNovel();
      this.novelList = str.data.result;
      this.sanlieList = str.data.sanlie;
      this.finishedNovel = str.data.finished;
      console.log(this.sanlieList);
    }
  }
};
</script>
<style lang="stylus" scoped></style>
