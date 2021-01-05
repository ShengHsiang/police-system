export default {
  data () {
    return {
      isPageEnd: false,
      scrollTop: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scroll, true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scroll, true)
  },
  methods: {
    scroll (e) {
      const { scrollTop, clientHeight } = document.scrollingElement
      const sectionHeight = this.$refs['main-section']

      // const top = scrollTop // 對象最頂端和窗口最頂端的距離
      // const scrollH = scrollHeight // 含滾動內容的元素大小
      // const offsetH = clientHeight // 網頁可見區域高
      const cScroll = scrollTop + clientHeight // 當前滾動的距離
      const buffer = 45 + 76

      if (sectionHeight && cScroll >= sectionHeight.offsetHeight - buffer) {
        this.isPageEnd = true
      } else {
        this.isPageEnd = false
      }
      this.scrollTop = scrollTop
    },
    calcSectionHeight () {
      const { clientHeight } = document.scrollingElement
      const sectionHeight = this.$refs['main-section']
      const buffer = 0
      // console.log(clientHeight)
      // console.log(sectionHeight.scrollHeight)
      // alert(`${clientHeight}, ${sectionHeight.scrollHeight}`)
      if (sectionHeight.scrollHeight && clientHeight >= sectionHeight.scrollHeight - buffer) {
        this.isPageEnd = true
      } else {
        this.isPageEnd = false
      }
    }
  }
}
