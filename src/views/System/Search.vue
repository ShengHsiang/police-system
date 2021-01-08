<template>
  <div class="system-container">
    <header class="system-header">
      <div class="container">
        <img src="@/assets/systemTop.svg" alt="">
      </div>
    </header>
    <div class="system-search-wrapper container">
      <input type="text" />
    </div>
    <main class="main-section container">
      <div>
        <template v-for="(reuslt, index) of resultList">
          <SystemResult :key="index" :data="reuslt" />
        </template>
      </div>
    </main>
  </div>
</template>

<script>
import SystemResult from "@/components/SystemResult";
import resultList from '@/utils/people.js'

export default {
  name: "SystemSearch",
  components: {
    SystemResult,
  },
  mounted () {
    document.title = '警政署'
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '../system-icon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  },
  data() {
    return {
      resultList: resultList
    };
  },
};
</script>

<style lang="scss" scoped>
$main-color: #33649b;

.container {
  width: 1280px;
  margin: 0 auto;
}

.system-container {
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #142035 0%,
    rgba(20, 32, 53, 0.9) 130.42%
  );
  padding-bottom: 48px;
}

.system-header {
  height: 30px;
  background: url('../../assets/Union.svg');
}

.system-search-wrapper {
  margin-top: calc(60px - 30px);
  padding: 0 34px;
  display: flex;
  justify-content: flex-end;

  input {
    width: 334px;
    height: 48px;
    font-size: 18px;
    font-weight: 500;
    color: $main-color;
    padding: 12px 14px;
    border: 2px solid $main-color;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      #142035 0%,
      rgba(20, 32, 53, 0.9) 130.42%
    )
  }
}

.main-section {
  display: flex;
  justify-content: center;

  margin-top: 52px;
}
</style>
