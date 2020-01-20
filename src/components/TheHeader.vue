<template>
  <header :class="['header', scrollClasses]">
    <div class="header__nav-toggle">
      <icon-hamburger-alt :active="menuOpen" @toggle:menu="onToggle($event)"/>
    </div>
    <transition name="scrolled">
      <div class="header__wrapper" v-if="handleScroll" key="header">
        <router-link to="/" class="header__branding">
          <IconLogo />
        </router-link>
      </div>
      <div class="header__scrolled" v-else key="subHeader">
        <p><span>Bread</span> / <strong>Crumb.... or something similar.</strong></p>
      </div>
    </transition>
  </header>
</template>

<script>
import IconLogo from '@/components/IconLogo'
import IconHamburgerAlt from '@/components/IconHamburgerAlt'
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
    scrollClasses: function () {
      return {
        'is--scrolled--up': this.handleScroll,
        'is--scrolled--down': !this.handleScroll
      }
    }
  },
  components: { IconHamburgerAlt, IconLogo }
}
</script>

<style lang="scss" scoped>
@import '../layout/scss/functions';
@import '../layout/scss/mixins';
.header{
  position: sticky;
  top:0;
  z-index: 100;
  min-height:50px;
  transition: background-color .23s ease-in-out;
  background-color: v(--background);
  &.is--scrolled {
    &--up {
      background-color: v(--background-highlight);
    }
    &--down {
      background-color: v(--background-accent);
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
    justify-content: center;
    align-items: center;
  }
  &__scrolled{
    align-items: center;
    justify-content: flex-start;
    padding-left: 56px;
  }
  &__branding{
    color: v(--text-primary);
    margin: 8px 16px;
  }
  &__nav-toggle{
    position: fixed;
    left: 0;
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
