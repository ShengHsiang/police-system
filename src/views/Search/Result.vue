<template>
  <div class="search-result-container">
    <header class="search-result-header" :class="{ active: isPageScroll }">
      <section class="search-bar-wrapper">
        <div class="logo" @click="redirectToHomePage">
          <img src="@/assets/searchLogo.svg" alt="">
        </div>
        <div class="input">
          <input v-model="keyword" type="text" @keypress.enter="handleSearch">
          <div class="icon-wrapper" @click="handleSearch">
            <img class="icon" src="@/assets/searchIconWhite.svg" />
          </div>
        </div>
        <div class="app">
          <img src="@/assets/appIcon.svg">
        </div>
      </section>

      <nav v-if="!isPageScroll" class="search-nav-wrapper">
        <div class="nav-item active">
          <img src="@/assets/tab/search-24px (3) 4.svg">
          全部
        </div> 
        <div class="nav-item">
          <img src="@/assets/tab/text_snippet-24px.svg">
          新聞
        </div>
        <div class="nav-item">
          <img src="@/assets/tab/photo-24px.svg">
          圖片
        </div>
        <div class="nav-item">
          <img src="@/assets/tab/place-24px (2).svg">
          地圖
        </div>
        <div class="nav-item">
          <img src="@/assets/tab/slideshow-24px.svg">
          影片
        </div>
        <div class="nav-item">
          <img src="@/assets/tab/Shape.svg" class="more">
          更多
        </div>
      </nav>
    </header>

    <main class="result-container" v-if="currentResultList.length > 0">
      <section class="result-wrapper">
        <div v-for="(result, index) of currentResultList" :key="index" class="result-item">
          <h3>
            <a class="title" @click="handleClickTitle(result)">{{ result.title }}</a>
          </h3>
          <div class="link">{{ result.link }}</div>
          <TextHighlight 
            :queries="matchKeyword[$route.query.keyword]" 
            class="description" 
            highlightClass="keyword"
          >
            {{ result.description }}
          </TextHighlight>
          <div v-if="result.shortage.length > 0" class="shortage">
            <span>缺少字詞：</span>
            <template v-for="(keyword, index) of result.shortage">
              <span :key="index" class="delete">{{ keyword }}</span>
            </template>
          </div>
        </div>
      </section>

      <section>
        <!-- <div>相關搜尋</div> -->
        <nav class="pagination-wrapper">
          <ul>
            <li v-for="page of pagination" :key="page" class="pagination-item" :class="{'active': page === 1}">
              {{ page }}
            </li>
            <li class="pagination-item">下一頁</li>
          </ul>
        </nav>
      </section>
    </main>

  </div>
</template>

<script>
import results from '@/utils/results.js'
import ScrollMethods from '@/mixins/scrollMethods.js'
import TextHighlight from 'vue-text-highlight';

  export default {
    name: 'SearchResult',
    components: {
      TextHighlight
    },
    mixins: [ ScrollMethods ],
    data () {
      return {
        keyword: '',
        results: results,
        currentResultList: [],
        matchKeyword: {
          '林家杰 醫療疏失': [ '林家杰', '林', '家杰', '醫療疏失', '醫療' ],
          '陳凱欣 醫療疏失': [ '陳凱欣', '陳', '凱欣', '醫療疏失', '醫療' ],
          '惠安醫院 心臟移植': [ '惠安醫院', '惠安' ,'醫院', '心臟移植', '心臟', '移植' ],
          '李子建 心臟移植': [ '李子建', '李' ,'子建', '心臟移植', '心臟', '移植' ],
          '惠安醫院 李子建': [ '惠安醫院', '惠安' ,'醫院', '李子建', '李' ,'子建' ],
          '李承文 心臟移植': [ '李承文', '李' ,'承文', '心臟移植', '心臟', '移植' ],
        }
      }
    },
    mounted () {
      // 設定頭部 icon
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = './s-icon.png';
      document.getElementsByTagName('head')[0].appendChild(link);

      this.getKeyword()
      this.setCurrentResultList()
    },
    computed: {
      pagination () {
        return Array(10).fill().map((value, index) => index + 1)
      },
      isPageScroll () {
        return this.scrollTop > 10
      }
    },
    beforeRouteUpdate (to, from, next) {
      const newKeyword = to.query.keyword
      const oldKeyword = from.query.keyword

      if (oldKeyword !== newKeyword) {
        this.setCurrentResultList()
        next()
      }
    },
    methods: {
      getKeyword () {
        const { keyword } = this.$route.query
        if (keyword) {
          this.keyword = keyword.trim()
        }
      },
      setCurrentResultList () {
        document.title = `${this.keyword} - Search 搜尋`
        setTimeout(() => {
          this.currentResultList = this.results[this.keyword] || []
        }, 500);
      },
      handleSearch () {
        if(this.keyword.trim() === this.$route.query.keyword) return

        this.currentResultList = []

        this.$router.push({
          name: 'SearchResult',
          query: {
            keyword: this.keyword.trim()
          }
        })
      },
      redirectToHomePage () {
        this.$router.push({ name: 'SearchHome' })
      },
      handleClickTitle (result) {
        if (result.articleId) {
          this.$router.push({
            name: 'SearchArticle',
            params: {
              id: result.articleId
            }
          })
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
.search-result-container {
  padding-bottom: 113px;
}

.search-result-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #ebebeb;

  &.active {
    padding: 16px 24px;
    border-bottom: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    & .search-bar-wrapper {
      margin-bottom: 0;
    }
  }
}

.search-bar-wrapper {
  display: flex;
  margin-bottom: 16px;

  & .logo {
    margin-right: 24px;
    cursor: pointer;

    img {
      width: 106px;
      height: 45px;
    }
  }

  & .input {
    position: relative;
    height: 44px;
    width: 460px;
    border: 1px solid  rgba(0, 0, 0, 0.38);
    border-radius: 54px;
    overflow: hidden;

    &:hover {
      box-shadow: 0 1px 6px rgba(32,33,36,.28);
      border-color: rgba(223,225,229,0);
    }

    & .icon-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 53px;
      background-color: #3971FF;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }

    & .icon {
      font-size: 24px;
      color: #fff;
    }

    input {
      width: 100%;
      height: 100%;
      font-size: 18px;
      padding: 9px 20px;
      color: rgba(0, 0, 0, 0.87);
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  & .app {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}

.search-nav-wrapper {
  display: flex;
  margin-left: 122px;

  & .nav-item {
    width: 86px;
    text-align: center;
    padding-bottom: 8px;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    user-select: none;
    color: rgba(0, 0, 0, 0.54);
    
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 4px;
    }
    
    .more {
      width: 20px;
      height: 15px;
    }

    &.active {
      border-bottom: 3px solid #3971FF;
      color: #3971FF;
    }
  }
}

.result-container {
  margin-top: 119px;
  margin-left: calc(122px + 32px);
}

.result-wrapper {
  padding-top: 24px;
}

.result-item {
  max-width: 758px;
  margin-bottom: 24px;

  & .title {
    font-size: 20px;
    color: #0B47E0;
    line-height: 28px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  & .link {
    font-size: 13px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.54);
  }

  & .description {
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.87);
  }

  & .shortage {
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.87);

    .delete {
      text-decoration: line-through;
    }
  }
}

.pagination-wrapper {
  margin-top: 80px;
  max-width: 758px;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
  }
  
  .pagination-item {
    padding: 0 16px;
    color: #3971FF;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
</style>

<style lang="scss">
.keyword {
  color: #FF1717;
  background: transparent !important;
  border-radius: 0 !important;
}
</style>