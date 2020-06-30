<template>
  <header :class="['header', scrollClasses]">
    <div class="header__nav-toggle">
      <icon-hamburger-alt :aria-label="srLabel" :active="menuOpen" @toggle:menu="onToggle($event)"/>
    </div>
    <transition name="scrolled">
      <div class="header__wrapper" v-if="handleScroll" key="header">
        <router-link to="/" class="header__branding" aria-label="Strizich Design">
          <IconLogo />
        </router-link>
        <div class="header__wrapper--right">
          <sd-button theme="default" href="https://github.com/strizich/strizich-design" target="_blank" rel="noreferrer" flat icon-only>
            <sd-icon/>
            <sd-tooltip direction="left">To Github! (icon WIP)</sd-tooltip>
          </sd-button>
        </div>
      </div>
      <div class="header__scrolled" v-else key="subHeader">
        <p>{{pageTitle}} <span v-if="sectionTitle">/</span> <strong>{{sectionTitle}}</strong></p>
      </div>
    </transition>
  </header>
</template>

<script>
import SdIcon from '@/layout/SdIcon'
import IconLogo from '@/components/IconLogo'
import IconHamburgerAlt from '@/components/IconHamburgerAlt'
import SdButton from '@/layout/SdButton'
import SdTooltip from '@/layout/SdTooltip'
export default {
  name: 'TheHeader',
  props: {
    handleScroll: Boolean,
    menuOpen: Boolean
  },
  methods: {
    onToggle: function (event) {
      this.$emit('toggle:menu', event)
    }
  },
  computed: {
    pageTitle: function () {
      return this.$store.state.pageTitle
    },
    sectionTitle: function () {
      return this.$store.state.sectionTitle
    },
    srLabel: function () {
      const menuState = this.menuOpen ? 'Open' : 'Closed'
      return `Menu ${menuState}`
    },
    scrollClasses: function () {
      return {
        'is--scrolled--up': this.handleScroll,
        'is--scrolled--down': !this.handleScroll
      }
    }
  },
  components: { IconHamburgerAlt, IconLogo, SdIcon, SdButton, SdTooltip }
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 100;
  min-height:50px;
  transition: background-color .23s ease-in-out;
  background-color: v(--background);
  box-shadow: inset 0 -1px 0 0 v(--background-highlight);
  &.is--scrolled {
    &--up {
      background-color: v(--background);
    }
    &--down {
      background-color: v(--background-highlight);
    }
  }
  &__wrapper, &__scrolled{
    display:flex;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    @include iosSafeArea;
    transition: all .23s ease-in-out;
    min-height: 50px;
    z-index: 101;
  }
  &__wrapper{
    padding-left: 56px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  &__scrolled{
    align-items: center;
    justify-content: flex-start;
    padding-left: 56px;
  }
  &__branding{
    color: v(--text-primary);
    margin: 8px 0;
  }
  &__nav-toggle{
    position: fixed;
    left: 0px;
    left: env(safe-area-inset-left);
    top:0;
    z-index: 102;
  }
}
.router-link{
  color: v(--text-accent)
}

.router-link-exact-active{
  color: v(--text-primary)
}
.scrolled-enter, .scrolled-leave-to{
  transform: translateY(-50px);
  opacity: 0;
}
.scrolled-leave{
  transform: translateY(0px);
  opacity: 1;
}

</style>
