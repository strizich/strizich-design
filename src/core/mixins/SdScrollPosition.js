export default {
  data () {
    return {
      showHeader: true,
      lastScrollPosition: 0,
      currentScrollPosition: 0
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    getRandomInt: function (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    onScroll: function () {
      // Look into throttling this.
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      const scrollingDown = currentScrollPosition < this.lastScrollPosition
      if (currentScrollPosition < 50) {
        this.showHeader = true
      } else {
        this.showHeader = scrollingDown
        this.lastScrollPosition = currentScrollPosition
      }
    },
    scrollTo: function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
