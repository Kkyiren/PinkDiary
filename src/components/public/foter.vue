<template>
  <div class="my_footer">
    <ul>
      <li>
        <span class="iconfont">&#xe501;</span>
        <p>唯品会</p>
      </li>
      <li>
        <span class="iconfont">&#xe63d;</span>
        <p>拼多多</p>
      </li>
      <li>
        <span class="iconfont">&#xe630;</span>
        <p>京东</p>
      </li>
      <li>
        <span class="iconfont">&#xe502;</span>
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.my_footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: white;
}

ul {
  display: flex;
  justify-content: space-around;
  // position: fixed;
  // left: 0;
  // bottom: 0;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

div span {
  font-size: 24px;
}

p {
  font-size: 12px;
}
</style>