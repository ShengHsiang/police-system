<template>
  <div class="search-home-container">
    <main class="search-form-wrapper">
      <div class="search-form-img">
        <img src="@/assets/searchLogo.svg" alt="">
      </div>
      <div class="search-form-input">
        <img class="icon" src="@/assets/searchIcon.svg" />
        <input v-model="keyword" type="text" @keypress.enter="handleSearch">
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'SearchHome',
    data () {
      return {
        keyword: ''
      }
    },
    mounted () {
      document.title = 'Search'
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = './s-icon.png';
      document.getElementsByTagName('head')[0].appendChild(link);
    },
    methods: {
      handleSearch () {
        if (!this.keyword) return
        this.$router.push({
          name: 'SearchResult',
          query: {
            keyword: this.keyword
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.search-home-container {
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
}

.search-form-wrapper {
  min-height: 300px;

  .search-form-img {
    display: flex;
    justify-content: center;
    height: 78px;
    margin-bottom: 16px;
  }

  .search-form-input {
    position: relative;
    height: 50px;
    width: 460px;
    border: 1px solid  rgba(0, 0, 0, 0.38);
    border-radius: 54px;
    overflow: hidden;

    &:hover {
      box-shadow: 0 1px 6px rgba(32,33,36,.28);
      border-color: rgba(223,225,229,0);
    }

    & .icon {
      position: absolute;
      left: 20px;
      top: 13px;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.54);
    }

    input {
      width: 100%;
      height: 100%;
      font-size: 20px;
      padding: 12px 54px;
      color: rgba(0, 0, 0, 0.87);
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
