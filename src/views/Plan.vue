<template>
  <div>
    <van-nav-bar
      title="计划表"
      left-text="<_<"
      right-text="√"
      class="nav-bar"
    />
    <div class="box-1">
      <b>计划内容</b><strong>(60/60)</strong>
      <textarea placeholder="草稿计划"></textarea>
      <span>事件颜色<a href="javascript:;">></a></span>
      <span>时间<i>123</i></span>
    </div>
    <van-cell title="重复" is-link value="不重复" />
    <van-cell title="提醒方式" is-link value="当天提醒" />
    <van-radio-group>
      <van-cell-group>
        <van-cell title="完成状况" clickable @click="radio = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>
<style lang="stylus" scoped>
.nav-bar {
  background: pink;
}

.box-1 {
  background: #fbf7f8;
  padding: 10px 0;
}

.box-1 b {
  margin-left: 20px;
  font-size: 20px;
}

.box-1 strong {
  margin-left: 10px;
  font-size: 14px;
}

.box-1 textarea {
  margin-top: 20px;
  width: 100%;
  height: 150px;
  vertical-align: top;
  font-size: 20px;
  padding: 20px 0 0 20px;
}

.box-1 span {
  display: block;
  font-size: 20px;
  font-weight: 900;
  margin: 20px 0 30px 20px;
}

.box-1 a {
  margin-left: 240px;
}

.box-1 i {
  display: inline-block;
  width: 150px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  margin-left: 150px;
}
</style>
