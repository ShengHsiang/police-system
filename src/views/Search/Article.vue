<template>
  <div>
    <header class="article-header">
      <section class="article-bar-wrapper container">
        <div class="logo">
          <img src="@/assets/article/articleLogo.svg" alt="">
        </div>
        <div>
          <img src="@/assets/searchIcon.svg" alt="">
        </div>
      </section>

      <nav class="article-nav-wrapper container">
        <div class="nav-item active">即時</div>
        <div class="nav-item">政治</div>
        <div class="nav-item">言論</div>
        <div class="nav-item">生活</div>
        <div class="nav-item">娛樂</div>
        <div class="nav-item">社會</div>
        <div class="nav-item">財經</div>
        <div class="nav-item">科技</div>
        <div class="nav-item">寶島</div>
        <div class="nav-item">話題</div>
        <div class="nav-item">有影</div>
        <div class="nav-item">國際</div>
        <div class="nav-item">軍事</div>
        <div class="nav-item">娛樂</div>
        <div class="nav-item">體育</div>
      </nav>
    </header>

    <main class="article-content-container container">
      <nav class="article-content-nav">
        <div>首頁 > 社會</div>
      </nav>

      <section class="article-content-wrapper">
        <h1>有心人遺愛議長獨子換心 - 秦視新聞網</h1>
        <!-- <div>
          <img src="@/assets/article/articleIconBar.svg">
        </div> -->

        <figure>
          <img src="@/assets/article/news_pic1.png">
          <figcaption>
            議長李承文兒子成功換心後致力參與各項醫療公益回饋社會
            <span style="margin-left: 16px;">撰稿：張綺晏</span>
          </figcaption>
        </figure>

        <div class="article-content-info">
          <div class="time">2020/12/30  04:10</div>
          <div class="gray"></div>
        </div>

        <div class="article-content">
          <p>「如果當時沒有捐贈這家屬的遺愛及魏醫師極力搶救，子建可能活不到今天」議長李承文誠摯地表達對醫師的感激；一旁的兒子露出靦腆笑容，俊秀的臉龐帶有幾分早熟氣息──他是換心人李子建，醫者的仁心與科技的進步幫助他走過生死關頭，如今已蛻變成樂觀進取的優學生。</p>
          <br />
          <p>如果不說，真的看不出眼前這位能夠長泳、打籃球的大男孩換過心；如果不說，誰也不知道這位笑口常開、積極規畫人生的年輕人，也曾有過一段惡疾纏身、繾綣病榻的黯淡年少。今年20歲的李子建，是心臟科權威醫師魏建人救回性命的換心個案， 魏醫師說，雖然這不是第1例，也不是最後1例，但卻是他經手的277例換心手術中最困難的1例。</p>
          <br />
          <p>「子建接受心臟移植時，已經肝昏迷，這種案例過去幾乎是救不活的，還好惠仁何建安教授跨院協助，建議使用洗肝機輔助治療，讓子建在術後有機會恢復肝功能。」魏醫生想起這段搶救子建的過程歷歷在目，記憶猶深，實在是因為子建的情況太特殊了。而李承文也說「好像冥冥中自有安排，很多的『巧合』，也要感謝捐贈者家屬的遺愛，讓子建在危急萬分的情況下，能夠一關又一關的渡過劫難」。</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'SearchArticle',
    data () {
      return {}
    },
    mounted () {
      document.title = '有心人遺愛議長獨子換心- 秦視新聞網'
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = '../news-icon.png';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }
</script>

<style lang="scss" scoped>

.container {
  max-width: 1048px;
  margin: 0 auto;
}

.article-header {
  padding-top: 20px;
  background-color: #F5F5F5;
  border: 1px solid #C4C4C4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.article-bar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.article-nav-wrapper {
  display: flex;

  & .nav-item {
    height: 28px;
    margin-right: 36px;
    font-size: 18px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
}

.article-content-container {
  margin-top: 100px;
  margin-bottom: 165px;
  
  .article-content-nav {
    padding: 16px 0;
  }

  .article-content-wrapper {
    border: 0.5px solid rgba(0, 0, 0, 0.38);
    min-height: 1200px;
    padding: 48px 72px;
    

    h1 {
      font-size: 28px;
      font-weight: 500;
      line-height: 39px;
      margin-bottom: 16px;
    }

    figure {
      margin-bottom: 14px;

      figcaption {
        margin-top: 8px;
        padding: 0 12px;
        background-color: rgba(0, 0, 0, .08);

        font-size: 14px;
        color: rgba(0, 0, 0, .87);
        text-align: left;
        line-height: 30px;
      }
    }

    .article-content-info {
      display: flex;
      font-size: 14px;
      margin-bottom: 8px;

      .time {
        margin-right: 30px;
        color: rgba(0, 0, 0, 0.54);
      }
    }

    .article-content {
      font-size: 20px;
      line-height: 28px;
    }

  }
}
</style>
