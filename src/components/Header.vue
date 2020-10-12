<template>
  <div id="app">
    <div class="header">
      <div class="header_top">
        <div style="height: 27px"></div>
        <p>可萌街</p>
        <div class="header_second">
          <p>
            <i></i>
            <span></span>
            <i></i>
          </p>
          <b></b>
          <strong><i></i></strong>
        </div>
      </div>
      <div class="table">
        <p class="input">粘贴宝贝标题，先领卷再购物</p>
      </div>
      <tab />
    </div>
  </div>
</template>

<script>
import Tab from "@/components/Tab";
export default {
  components: {
    Tab,
  },
};
</script>
<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 161px;
  background: linear-gradient(
    90deg,
    rgba(255, 43, 127, 0.74),
    rgba(255, 14, 65, 0.74)
  );
  .header_top {
    width: 100%;
    height: 44px;
    position: relative;
  }
  .header_top p {
    color: white;
    text-align: center;
    font-size: 18px;
    height: 30.3px;
    line-height: 30.9px;
  }
  .header_second {
    width: 90.3px;
    height: 30.3px;
    background: #fea1b4;
    border-radius: 15px;
    position: absolute;
    right: 18.8px;
    top: 27px;
  }
  .header_second b {
    display: inline-block;
    width: 1px;
    height: 18px;
    background: #ec90a7;
    position: relative;
    left: 44px;
    bottom: 41px;
  }
  .header_second p {
    height: 30px;
    width: 46.3px;
  }
  .header_second i {
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #000000;
    border-radius: 100%;
    margin-bottom: 5px;
    margin-right: 3px;
  }
  .header_second p span {
    display: inline-block;
    width: 9px;
    height: 9px;
    background: #000000;
    border-radius: 50%;
    margin-right: 3px;
    margin-bottom: 3px;
  }
  .header_second strong {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid black;
    border-radius: 50%;
    position: relative;
    left: 58px;
    bottom: 23px;
  }
  .header_second strong i {
    display: inline-block;
    width: 9px;
    height: 9px;
    background: #000000;
    border-radius: 50%;
    margin-bottom: 23px;
    margin-left: 3.5px;
  }
  .table .input {
    font-size: 13.3px;
    width: 342.3px;
    height: 36.6px;
    background: #ffffff;
    box-shadow: 0px 1px 4px 0px rgba(232, 232, 232, 0.7);
    border-radius: 16.6px;
    margin-top: 36px;
    margin-left: 15px;
    text-align: center;
    line-height: 36.6px;
  }
}
</style>