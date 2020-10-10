<template>
  <div class="centent">
    <header>
      <div class="left">
        <img src="../../assets/img/pink-mall/king@2x.png" alt="" />
        <div>
          <h3>会员专区</h3>
          <p>2000+精选素材任性使用</p>
        </div>
      </div>
      <div class="right">
        开通会员&gt;
      </div>
    </header>
    <main>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.avatarImg" alt="" />
          <div class="title">{{ item.title }}</div>
          <p>SVIP尊享</p>
        </li>
      </ul>
    </main>
    <footer>
      进去逛逛 >
    </footer>
  </div>
</template>

<script>
import {mallVipnone} from '../../utils/api.js'

export default {
  data() {
    return {
      list: [
     
      ]
    };
  },
  methods: {
    async getData(){
      
    let str= await mallVipnone()
     this.list = str.result
    }
  },
  mounted() {
   this. getData()
  },
};
</script>

<style lang="stylus" scoped>
.centent {
  padding: 0px 15px;
}

footer {
  height: (124 / 3)px;
  background: #fff;
  font-size: 10px;
  font-family: PingFang;
  font-weight: bold;
  color: #C9A26E;
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  display: flex;
  height: (154 / 3)px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, rgba(252, 211, 129, 0.98), rgba(253, 231, 185, 0.98));
  border-radius: 5px;

  .left {
    display: flex;
    color: #B27F32;
    font-size: 10px;
    font-family: PingFang;
    font-weight: bold;
    align-items: center;
    height: 100%;

    h3 {
      font-size: (42 / 3)px;
      margin-bottom: 5px;
    }

    img {
      width: 21px;
      height: 21px;
      margin-left: 8px;
      margin-right: 10px;
    }
  }

  .right {
    width: (215 / 3)px;
    height: (78 / 3)px;
    background: linear-gradient(0deg, rgba(255, 177, 49, 0.98), rgba(255, 205, 123, 0.98));
    border-radius: 13px;
    font-size: (32 / 3)px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    color: #B7650A;
  }
}

main {
  height: (377 / 3)px;
  background: #FFF5EB;
  border-radius: 16px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 (50 / 3)px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 10px;
      font-family: PingFang;
      font-weight: bold;
      color: #696969;

      img {
        width: (198 / 3)px;
      }

      p {
        color: #000;
      }

      .title {
        width: (200 / 3)px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 25px;
      }
    }
  }
}
</style>
