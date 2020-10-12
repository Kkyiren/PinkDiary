<template>
  <div>
    <!-- 导航栏 -->
    <header class="guide">
      <van-nav-bar title="热门小说" left-text="<" />
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
        <h5>男生</h5>
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

      <div class="search-bottom">
        <div class="search-bottom-top" v-if="novelList.length > 0">
          <img src="../assets/img/yjj-hotnovel/fengliushaoye.png" alt="" />
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
        <!-- 这个渲染好了  -->
        <div class="search-bottom-bottom">
          <div class="left" v-for="(item, index) in sanlieList" :key="index">
            <img src="../assets/img/yjj-hotnovel/dujia.png" alt="" />
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
      <div class="search-bottom">
        <div class="search-bottom-top" v-if="novelList.length > 0">
          <img src="../assets/img/yjj-hotnovel/fengliushaoye.png" alt="" />
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
      </div>
      <div class="search-bottom">
        <div class="search-bottom-top" v-if="novelList.length > 0">
          <img src="../assets/img/yjj-hotnovel/fengliushaoye.png" alt="" />
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
      sanlieList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let str = await hotNovel();
      this.novelList = str.data.result;
      this.sanlieList = str.data.sanlie;
      console.log(this.novelList);
    }
  }
};
</script>
<style lang="stylus" scoped></style>
