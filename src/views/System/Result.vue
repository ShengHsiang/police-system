<template>
  <div class="system-container">
    <header class="system-header" @click="$router.push({ name: 'SystemSearch' })">
      <div class="container">
        <img src="@/assets/systemTop.svg" alt="">
      </div>
    </header>
    <div class="system-search-wrapper container">
      <div class="input-group">
        <input type="text" v-model="name" @keypress.enter="handleSearch" />
        <div class="icon-wrapper">
          <img class="icon" src="@/assets/searchIconBlue.svg" />
        </div>
      </div>
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
    link.href = './system-icon.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    this.getKeyword()
    this.setCurrentResultList()
  },
  data() {
    return {
      resultList: [],
      name: ''
    };
  },
  beforeRouteUpdate (to, from, next) {
    const newKeyword = to.query.name
    const oldKeyword = from.query.name

    if (oldKeyword !== newKeyword) {
      this.setCurrentResultList()
      next()
    }
  },
  methods: {
    getKeyword () {
      const { name } = this.$route.query
      if (name) {
        this.name = name.trim()
      }
    },
    setCurrentResultList () {
      if (!this.name) {
        this.resultList = []
      }

      if (this.name) {
        this.resultList = resultList.filter(item => item.name === this.name)
      }
    },
    handleSearch () {
      if(this.name.trim() === this.$route.query.name) return

      this.currentResultList = []

      this.$router.push({
        name: 'SystemResult',
        query: {
          name: this.name.trim()
        }
      })
    },
  }
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

  .input-group {
    position: relative;

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

    & .icon-wrapper {
      position: absolute;
      right: 12px;
      top: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }
  }
}

.main-section {
  display: flex;
  justify-content: center;

  margin-top: 52px;
}
</style>
