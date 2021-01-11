<template>
  <div class="system-container">
    <header class="system-header">
      <div class="container">
        <img src="@/assets/systemTop.svg" alt="">
      </div>
    </header>

    <main class="system-content-container">
      <section class="system-content-box">
        <div class="system-content-box-header">
          <div class="header-item active">基本資料查詢</div>
          <div class="header-item">案件查詢</div>
          <div class="header-item">法條查詢</div>
          <div class="header-item">值班記錄</div>
        </div>

        <div class="system-content-box-main">
          <form>
            <div class="form-item">
              <label for="name">姓名</label>
              <input type="text" name="name" v-model="name">
            </div>
            <div class="form-item">
              <label for="">身分證字號</label>
              <input type="text">
            </div>
            <div class="form-item">
              <label for="">地址</label>
              <input type="text">
            </div>

            <div class="form-action">
              <button @click.prevent="handleSearch">搜尋</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'SystemSearch',
    data () {
      return {
        name: ''
      }
    },
    methods: {
      handleSearch () {
        this.$router.push({
          name: 'SystemResult',
          query: {
            name: this.name.trim()
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
$main-color: #33649b;
$hover-color: #69B0FF;
$bg-color: #142035;

.container {
  width: 1280px;
  margin: 0 auto;
}

.system-container {
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    $bg-color 0%,
    rgba(20, 32, 53, 0.9) 130.42%
  );
  padding-bottom: 96px;
}

.system-header {
  height: 30px;
  background: url('../../assets/Union.svg');
}

.system-content-container {
  margin-top: calc(73px + 34px);
  min-height: 542px;
  display: flex;
  justify-content: center;
  background: url('../../assets/bgLogo.svg');
  background-position: center;
  background-repeat: no-repeat;
}

.system-content-box {
  width: 744px;
  height: 416px;
  background-color: $bg-color;
  opacity: 80%;
  border: 2px solid rgba(51, 100, 155, 0.8);
  border-radius: 8px;
  margin-top: 63px;
}

.system-content-box-header {
  height: 45px;
  display: flex;

  .header-item {
    line-height: 45px;
    text-align: center;
    width: 25%;
    color: #ffffff;
    background: $main-color;
    cursor: pointer;

    &.active {
      background: transparent;
    }
  }
}

.system-content-box-main {
  height: calc(100% - 45px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-item {
  margin-bottom: 19px;

  label {
    display: inline-block;
    width: 84px;
    text-align: right;
    color: #fff;
    margin-right: 16px;
  }

  input {
    width: 281px;
    height: 36px;
    background: #fff;
    border-radius: 2px;
    border: none;
    padding: 0 8px;
    font-size: 16px;
  }
}

.form-action {
  display: flex;
  justify-content: center;
  margin-top: 32px;

  button {
    width: 112px;
    height: 44px;

    border: 2px solid $main-color;
    border-radius: 4px;
    background: transparent;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.05em;
    cursor: pointer;
  }
}
</style>
