<template>
  <div class="search-container">
    <header class="search-header"></header>
    <main class="main-section">
      <div>
        <input type="text">
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'SystemSearch',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.search-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #142035 0%, rgba(20, 32, 53, 0.9) 130.42%);
}

.search-header {
  height: 30px;
  background: linear-gradient(180deg, #1D283C 0%, #354C76 94.64%);
}

.main-section {
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
