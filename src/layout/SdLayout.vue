<template>
  <main class="sd--layout">
    <portal-target name="body" multiple />
    <the-header
        @toggle:menu="onToggle($event)"
        :menuOpen="sidebarState"
        :handleScroll="showHeader"
      />
    <div class="sd--layout__wrapper">
      <div class="sd--layout__content">
        <slot name="content"/>
      </div>
      <transition name="slide">
        <div class="sd--layout__sidebar" v-if="sidebarState">
          <slot name="sidebar"/>
        </div>
      </transition>
    </div>
    <slot name="footer"/>
  </main>
</template>

<script>
import SdThrottle from '@/utilities/SdThrottle'
import TheHeader from '@/components/TheHeader'
import SdScrollPosition from '@/core/mixins/SdScrollPosition'
export default {
  name: 'SdLayout',
  mixins: [ SdScrollPosition ],
  data () {
    return {
      sidebarState: false,
      window: {
        width: 0
      }
    }
  },
  watch: {
    '$route' () {
      if (this.isSmall) {
        this.sidebarState = false
      }
    }
  },
  created () {
    this.getStoredMenuState()
  },
  mounted () {
    this.updateWindowWidth()
    this.addResizeListener()
  },
  destroyed () {
    this.removeResizeListener()
  },
  methods: {
    onToggle: function () {
      this.sidebarState = !this.sidebarState
      if (!this.isSmall) {
        window.localStorage.setItem('SDUI:navState', this.sidebarState)
      } else {
        window.localStorage.setItem('SDUI:navState', false)
      }
    },
    getStoredMenuState: function () {
      const state = window.localStorage.getItem('SDUI:navState')
      this.sidebarState = (state === 'true')
    },
    updateWindowWidth: function () {
      const width = window.innerWidth
      this.window.width = width
    },
    addResizeListener: function () {
      window.addEventListener('resize', () => {
        SdThrottle(10, this.updateWindowWidth())
      }, false)
    },
    removeResizeListener: function () {
      window.removeEventListener('resize', () => {
        this.updateWindowWidth()
      }, false)
    }
  },
  computed: {
    isSmall: function () {
      if (this.window.width <= 812) {
        return true
      }
      return false
    }
  },
  components: { TheHeader }
}
</script>

<style lang="scss">
.sd--layout {
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  &__wrapper {
    display:flex;
    width:100%;
    min-height: calc(100vh - 100px);
  }
  &__content {
    width: 100%;
    flex-grow: 2;
    order:1;
    padding-bottom: 64px;
  }
  &__sidebar {
    width:100%;
    max-width:230px;
    max-height:calc(100vh - 50px);
    overflow-y: auto;
    overflow-x: hidden;
    position:sticky;
    top:50px;
    left:0;
    flex-grow: 1;
    background:var(--background-accent);
    order: 0;
    transition: width .23s 0s ease-in-out;
    box-shadow: inset -1px 0 0 0 var(--background-highlight);
    @include breakpoint-down('sm') {
      position: fixed;
      top: 50px;
      left:0;
      right:0;
      bottom: 0;
      z-index: 500;
      max-width: 100%;
    }
  }
  &__block {
    position:sticky;
    top:0;
    right:0;
  }
}

.slide-enter, .slide-leave-to {
  will-change: width;
  width:0;
  overflow-x: hidden;
}
</style>
