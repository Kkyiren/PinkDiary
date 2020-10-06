<template>
  <header>
    <ul>
      <li class="recommended"><span>推荐</span></li>
      <li class="vip">
        <img src="../../assets/img/pink-mall/king@2x.png" alt="" /> 会员专区
      </li>
      <li>信纸屋</li>
      <li class="all">
        <img src="../../assets/img/pink-mall/all@2x.png" alt="" />
        <span>全部</span>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
header {
  width: (1125 / 3)px;
  height: (132 / 3)px;
  background: #FD678D;

  ul {
    display: flex;
    justify-content: space-around;
    font-size: (42 / 3)px;
    align-items: center;
    height: (132 / 3)px;

    li {
      height: 100%;
      color: #fff;
      display: flex;
      align-items: center;
    }
  }

  .recommended {
    width: (167 / 3)px;
    height: (84 / 3)px;
    background: rgba(255, 255, 255, 0.5);
    color: #fff;
    border-radius: (40 / 3)px;
    display: flex;
    justify-content: space-around;
    font-size: (42 / 3)px;
    align-items: center;

    span {
      opacity: 1;
      color: #fff;
    }
  }

  .vip {
    display: flex;
    align-items: center;
    color: #FDBE8F;

    img {
      width: (74 / 3)px;
      height: (64 / 3)px;
    }
  }

  .all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;

    img {
      width: (50 / 3)px;
      height: (51 / 3)px;
      margin-bottom: 5px;
    }
  }
}
</style>