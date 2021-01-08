<template>
  <div class="system-container">
    <header class="system-header">
      <div class="container">
        <img src="@/assets/systemTop.svg" alt="">
      </div>
    </header>

    <div class="system-control-wrapper container">
      <div class="bar-wrapper">
        <div style="margin-right: 18px">
          <img src="@/assets/personPage/search.svg" alt="" />
        </div>
        <div @click="handlePrintFiles" class="print">
          <!-- <img src="@/assets/personPage/print.svg" alt="" /> -->
        </div>
      </div>
    </div>

    <main class="system-content-container container">
      <div>
        <div class="system-page-title">個人資料</div>
        <section class="system-page-content">
          <div class="img-wrapper">
            <img :src="person.avatar" alt="" />
          </div>
          <div class="content-wrapper">
            <ul>
              <li>
                <div class="label">姓名</div>
                <div class="content">{{ person.name }}</div>
              </li>
              <li>
                <div class="label">身分證</div>
                <div class="content border">{{ person.id }}</div>
                <div class="label">性別</div>
                <div class="content">{{ person.gender }}</div>
              </li>
              <li>
                <div class="label">出生年月日</div>
                <div class="content border">{{ person.birthday }}</div>
                <div class="label">年齡</div>
                <div class="content">{{ person.age }}</div>
              </li>
              <li>
                <div class="label">戶籍地址</div>
                <div class="content">{{ person.address }}</div>
              </li>
              <li>
                <div class="label">現居地址</div>
                <div class="content">{{ person.curAddress }}</div>
              </li>
              <li>
                <div class="label">父母/監護人</div>
                <div class="content">{{ person.parents }}</div>
              </li>
              <li class="jobs">
                <div class="label">工作經歷</div>
                <div class="content">
                  <div v-for="(job, index) of person.jobs" :key="index">
                    {{ job }}
                  </div>
                </div>
              </li>
              <li>
                <div class="label">相關案件紀錄</div>
                <div v-if="person.files" class="content" v-html="person.records"></div>
                <div v-else class="content">{{ person.records }}</div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import resultList from '@/utils/people.js'

export default {
  name: "PersonInfomation",
  data () {
    return {
      person: {
        name: "",
        id: "",
        birthday: "",
        phone: "",
        gender: '',
        age: '',
        address: "",
        curAddress: "",
        parents: '',
        jobs: [],
        avatar: '',
        records: ''
      }
    }
  },
  mounted () {
    // 設定頭部 icon, title
    document.title = "個人資料查詢平台 - 警政署"
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './system-icon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
    
    this.getPersonData()
  },
  methods: {
    getPersonData () {
      const { id } = this.$route.params
      const result = resultList.find(result => result.id === id)
      if (result) {
        this.person = result
      }
    },
    handlePrintFiles () {
      // window.print()
      window.confirm("是否列印？")
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #33649b;
$hover-color: #69B0FF;

.container {
  width: 1280px;
  margin: 0 auto;
}

.system-container {
  width: 100vw;
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

.system-control-wrapper {
  margin-top: calc(60px - 30px);
  margin-bottom: 55px;
  padding: 0 43px;
  display: flex;
  justify-content: flex-end;

  .bar-wrapper {
    display: flex;

    .print {
      width: 32px;
      height: 32px;
      cursor: pointer;
      background-image: url('../../assets/personPage/print.svg');

      &:hover {
        background-image: url('../../assets/personPage/printActive.svg');
      }
    }
  }
}

.system-content-container {
  display: flex;
  justify-content: center;
}

.system-page-title {
  width: 981px;
  line-height: 34px;
  font-size: 18px;
  color: #fff;
  text-align: center;

  border: 2px solid $main-color;
  border-radius: 2px;

  margin-bottom: 40px;
}

.system-page-content {
  display: flex;
  align-items: center;
  width: 981px;

  .img-wrapper {
    width: 323px;
    height: 403px;
    margin-right: 22px;
    img {
      /* width: 100%; */
      /* height: 100%; */
      /* object-fit: cover; */
    }
  }

  /* .content-wrapper {
    flex: 1;
    border: 2px solid $main-color;
    border-radius: 2px;
    height: 341px;
  } */

  .content-wrapper {
    width: calc(981px - 323px - 22px);
    border: 2px solid $main-color;
    border-radius: 2px;
    min-height: 341px;

    li {
      display: flex;
      height: 35px;
      border-bottom: 2px solid $main-color;
      font-size: 14px;
      letter-spacing: 0.05em;

      &:last-child {
        border-bottom: none;
      }

      &.jobs {
        height: 96px;

        & .content {
          font-size: 12px;
          line-height: 135%;
        }
      }

      &.inline {
        width: 50%;
      }

      .label {
        flex-shrink: 0;
        width: 105px;
        color: #ffffff;
        border-right: 2px solid $main-color;
        font-weight: 400;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        padding: 0 8px;
        color: #73abe9;
        font-weight: 500;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &.border {
          width: 247px;
          border-right: 2px solid $main-color;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.link-red {
  color: #EC2626;
}
</style>
