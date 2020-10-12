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
        <div class="search-bottom-top">
          <img src="../assets/img/yjj-hotnovel/fengliushaoye.png" alt="" />
          <div class="search-bottom-top-right">
            <div class="right-one">
              <h3>风流少爷</h3>
              <div class="yuan">8.9分</div>
            </div>
            <div class="right-two">
              <div class="first">
                已完结
              </div>
              <div class="second">
                落魄的作家
              </div>
              <div class="third">
                都市
              </div>
            </div>
            <div class="right-three">
              一个带着多层神秘身份的少年，且看他在
              红尘都市中，如何纵意花丛，怎样耍尽流
              氓与无赖，如何把对手玩弄于股掌之上...
            </div>
            <div class="right-four">
              读完本书预计可赚2730书币
            </div>
          </div>
        </div>
        <div class="search-bottom-bottom">
          <div class="left">
            <img src="../assets/img/yjj-hotnovel/dujia.png" alt="" />
            <p>独家特助：原...</p>
            <span>21.9万人读过</span>
          </div>
          <div class="left">
            <img src="../assets/img/yjj-hotnovel/jpin.png" alt="" />
            <p>极品房东</p>
            <span>17.6万人读过</span>
          </div>
          <div class="left">
            <img src="../assets/img/yjj-hotnovel/jpin.png" alt="" />
            <p>偏偏喜欢你</p>
            <span>4.0万人读过</span>
          </div>
        </div>
      </div>

      <div class="jiange"></div>

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
        <div class="search-bottom-top">
          <img src="../assets/img/yjj-hotnovel/fengliushaoye.png" alt="" />
          <div class="search-bottom-top-right">
            <div class="right-one">
              <h3>风流少爷</h3>
              <div class="yuan">8.9分</div>
            </div>
            <div class="right-two">
              <div class="first">
                已完结
              </div>
              <div class="second">
                落魄的作家
              </div>
              <div class="third">
                都市
              </div>
            </div>
            <div class="right-three">
              一个带着多层神秘身份的少年，且看他在
              红尘都市中，如何纵意花丛，怎样耍尽流
              氓与无赖，如何把对手玩弄于股掌之上...
            </div>
            <div class="right-four">
              读完本书预计可赚2730书币
            </div>
          </div>
        </div>
      </div>
      <div class="search-bottom">
        <div class="search-bottom-top">
          <img src="../assets/img/yjj-hotnovel/fengliushaoye.png" alt="" />
          <div class="search-bottom-top-right">
            <div class="right-one">
              <h3>风流少爷</h3>
              <div class="yuan">8.9分</div>
            </div>
            <div class="right-two">
              <div class="first">
                已完结
              </div>
              <div class="second">
                落魄的作家
              </div>
              <div class="third">
                都市
              </div>
            </div>
            <div class="right-three">
              一个带着多层神秘身份的少年，且看他在
              红尘都市中，如何纵意花丛，怎样耍尽流
              氓与无赖，如何把对手玩弄于股掌之上...
            </div>
            <div class="right-four">
              读完本书预计可赚2730书币
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入axios请求数据方式
import axios from "axios";

export default {
  data() {
    return {
      // novelList: []
    };
  },
  mounted() {
    this.getHotNovelList();
  },
  methods: {
    getHotNovelList() {
      axios
        .get(
          "https://www.fastmock.site/mock/4eac5e4965b9d828cfdb88386ac0e191/fenfen/api/hotnovel"
        )
        .then(res => {
          // this.novelList = res.data.result.list;
          console.log(this.getHotNovelList);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="stylus" scoped></style>
