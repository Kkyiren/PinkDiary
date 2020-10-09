<template>
  <div class="content">
    <header>
      <h3>信纸屋</h3>
      <span>
        >
      </span>
    </header>
    <main>
      <img src="../../assets/img/pink-mall/coffee@2x.png" alt="" />
    </main>
    <footer>
      <p class="title">时光咖啡</p>
      <div>
        <p>
          <img
            class=""
            src="../../assets/img/pink-mall/mingold@2x.png"
            alt=""
          />
          <span>60</span>
          /

          <img
            class="min"
            src="../../assets/img/pink-mall/zuanshi@2x.png"
            alt=""
          />
          <span>0</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.content {
  margin-top: 30px;
  padding: 0 15px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: (68 / 3)px;

  h3 {
    font-size: 16px;
    color: #000;
  }

  span {
    font-size: 12px;
    color: #ddd;
  }
}

main {
  img {
    width: 100%;
  }
}

footer {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: (52 / 3)px;
  }

  .min {
    width: (42 / 3)px;
  }
}
</style>
