<template>
  <sd-layout id="app" :sidebar="menuState">
    <template v-slot:header>
      <the-header :menuOpen="menuState" @toggle:menu="onToggle" :handleScroll="showHeader"/>
    </template>
    <template v-slot:content>
      <div class="app__content">
        <router-view/>
      </div>
    </template>
    <template v-slot:sidebar>
      <the-sidebar/>
    </template>
    <template v-slot:footer>
      <the-footer>
        <template v-slot:start>
          <strong class="text__footnote">Made with love.</strong>
        </template>
        <template v-slot:end>
          <small class="text__footnote">Powered by: <em>VueJS</em> and <em>GraphCMS</em></small>
        </template>
      </the-footer>
    </template>
  </sd-layout>
</template>

<script>
import '@/layout/scss'
import SdThrottle from '@/utilities/SdThrottle'
import SdLayout from '@/layout/SdLayout'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import TheSidebar from '@/components/TheSidebar'
import SdScrollPosition from '@/core/mixins/SdScrollPosition'

export default {
  // TODO: Rewrite when Vue3 drops.

  data () {
    return {
      menuState: false,
      windowWidth: 0
    }
  },
  watch: {
    '$route' () {
      if (this.isSmall) {
        this.menuState = false
      }
    }
  },
  mounted () {
    this.getMenuState()
    this.setWindowWidth()
    window.addEventListener('resize', () => {
      SdThrottle(10, this.setWindowWidth())
    }, false)
  },
  destroyed () {
    window.removeEventListener('resize', () => {
      this.setWindowWidth()
    }, false)
  },
  methods: {
    setWindowWidth () {
      const width = window.innerWidth
      this.windowWidth = width
    },
    getMenuState: function () {
      const state = window.localStorage.getItem('menuState')
      this.menuState = (state === 'true')
    },
    onToggle: function () {
      this.menuState = !this.menuState
      if (!this.isSmall) {
        window.localStorage.setItem('menuState', this.menuState)
      } else {
        window.localStorage.setItem('menuState', false)
      }
    }
  },
  computed: {
    isSmall: function () {
      if (this.windowWidth <= 812) {
        return true
      }
      return false
    }
  },
  mixins: [ SdScrollPosition ],
  components: {
    TheHeader,
    TheFooter,
    TheSidebar,
    SdLayout
  }
}
</script>
<style lang="scss">
  @import './layout/scss/functions';
  body, html{
    background: v(--background);
    color: v(--text);
  }
  .app__content{
    min-height: calc(100vh - 50px);
    padding-bottom: 50px;
  }
</style>
