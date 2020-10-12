<template>
  <div class="tallyAdd">
    <van-nav-bar>
      <template #left>
        <div class="left" @click="back">
          <img src="../assets/img/pink-09/arrows.png" alt="" />
          <img src="../assets/img/pink-09/orthogon.png" alt="" />
          <img src="../assets/img/pink-09/arrows.png" alt="" />
        </div>
      </template>
      <template #title>
        <div class="title">
           <!-- 收入 | 支出 -->
           <span :class="{active:isActive}" @click="toIncome">收入</span>
           <span :class="{active:!isActive}" @click="toExpend">支出</span>
        </div>
      </template>
      <template #right>
        <div class="saveAdd" @click="saveAdd">
          <van-icon name="like-o" />
        </div>
      </template>
    </van-nav-bar>

    <main>
      <div class="price">
        <span>单价</span><input type="number" v-model="price" placeholder="0.00" >
      </div>
      <div class="count">
        <span>数量</span><input type="number" v-model="count" placeholder="1.00">
      </div>
      <div>
        <span>类别</span>
        <select v-model="tallyClass">
          <option value="交通">交通</option>
          <option value="娱乐">娱乐</option>
          <option value="礼金">礼金</option>
          <option value="其他">其他</option>
        </select>
      </div>
    </main>
  </div>
</template>
<script>
import url01 from "../assets/img/pink-09/gifts.png";
import url02 from "../assets/img/pink-09/recreation.png";
import url03 from "../assets/img/pink-09/traffic.png";
import url04 from "../assets/img/pink-09/icon_love.png";

export default {
  data(){
    return {
      price:"",
      count:"",
      tallyClass:"交通",
      url:"",
      direction: 1,  //0代表支出，1代表收入
      isActive:true,
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    saveAdd(){
      //单价为空的时候跳出
      if(this.price == ""){
        this.$router.go(-1)
        return 
      }

      if(this.tallyClass=="娱乐"){
        this.url = url02;
      }else if(this.tallyClass=="礼金"){
        this.url = url01;
      }else if(this.tallyClass=="交通"){
        this.url = url03;
      }else{
        this.url = url04;
      }

      let count = this.count == "" ? 1 : this.count;
 
      this.$store.commit('getDetailList',{
          src: this.url,
          name: this.tallyClass=="" ? "其他" : this.tallyClass,
          subtotal: `${this.direction == 0 ? "-" : "+" }${(this.price * count).toFixed(2)}`,
        },);
      this.$router.go(-1)
    },
    //收入
    toIncome(){
      this.isActive = true;
      this.direction = 1;
    },
    //支出
    toExpend(){
      this.isActive = false;
      this.direction = 0;
    }
  }
}
</script>

<style lang="stylus" scoped>
.tallyAdd {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fbf7f8;
  z-index: 1000;
}

.van-nav-bar {
  background: #FFB5D5;

  .title {
    color: white;
    font-size 14px
    display flex 
    span {
      padding 0 10px
      border 1px solid gray
      display flex 
      justify-content center
      align-items center
      width 60px
      height 26px
      
      &:first-child {
        border-top-left-radius 6px
        border-bottom-left-radius 6px
      }
      &:last-child {
        border-top-right-radius 6px
        border-bottom-right-radius 6px
      }
      
    }
    .active {
      background #fff
      color red
    }
      
  }

  img {
    width: 18px;
  }

  .left {
    img {
      width: 8px;
      height: 12px;

      &:nth-child(2) {
        width: 10px;
        height: 4px;
        margin-top: 10px;
      }
    }
  }
  .saveAdd {
    .van-icon {
      color  blue
    }
    
  }
}


main 
  margin-top 20px
  div
    display flex
    align-items center
    height 60px
    background #fff
    font-size 16px
    span 
      width 20%
      display flex
      align-items center
      justify-content center
      height 100%
    input 
      width 80%
      height 100%
      display flex
      align-items center
      justify-content center
      border none
      font-size 20px


</style>
  

