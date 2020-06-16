<template>
  <main class="sd--layout">
    <the-header
        @toggle:menu="onToggle($event)"
        :menuOpen.sync="sidebarState"
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
  name: 'TheLayout',
  mixins: [ SdScrollPosition ],
  data () {
    return {
      sidebarState: false,
      userTheme: false,
      window: {
        width: 0
      }
    }
  },
  watch: {
    $route () {
      if (this.isSmall) {
        this.sidebarState = false
      }
    },
    isSmall (newValue) {
      // Update the sidebar state if the user changes the screensize.
      if (newValue) {
        this.sidebarState = false
      }
    },
    sidebarState (isActive) {
      if (this.isSmall) {
        this.$nextTick().then(() => {
          if (isActive) {
            document.body.classList.add('sd--sidebar--open')
            document.body.style.top = `-${window.scrollY}px`
            document.body.style.position = 'fixed'
            document.body.style.left = '0'
            document.body.style.right = '0'
          } else {
            const scrollY = document.body.style.top
            document.body.classList.remove('sd--sidebar--open')
            document.body.removeAttribute('style')
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
          }
        })
      }
    }
  },
  created () {
    this.updateWindowWidth()
    this.getStoredMenuState()
  },
  mounted () {
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
      if (this.isSmall === true) {
        window.localStorage.setItem('SDUI:navState', false)
      }
    },
    addResizeListener: function () {
      window.addEventListener('resize', () => {
        SdThrottle(600, this.updateWindowWidth())
      }, false)
    },
    removeResizeListener: function () {
      window.removeEventListener('resize', () => {
        this.updateWindowWidth()
      }, false)
    }
  },
  computed: {
    setTheme: function () {
      return this.userTheme ? 'light' : 'dark'
    },
    isSmall: function () {
      if (this.window.width <= 768) {
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
    position: relative;
    z-index: 1;
    width: 100%;
    flex-grow: 2;
    order:1;
    padding-bottom: calc(64px + ios-safe-area(bottom));
  }
  &__sidebar {
    width:100%;
    height: 100vh;
    position:sticky;
    padding-top: 50px;
    padding-bottom:50px;
    top:0px;
    max-width:180px;
    flex-grow: 1;
    background:var(--background);
    order: 0;
    transition: width .23s ease-in-out;
    box-shadow: inset -1px 0 0 0 var(--background-highlight);
    overflow-y: auto;

    @include breakpoint-down('sm') {
      position: fixed;
      top: 0px;
      left:0;
      right:0;
      bottom: 0;
      z-index: 500;
      max-width: 100%;
      z-index: 99;
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
