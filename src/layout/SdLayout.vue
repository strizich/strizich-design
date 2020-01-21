<template>
  <main class="sd--layout">
    <portal-target name="body" multiple />
    <slot name="header"/>
    <div class="sd--layout__wrapper">
      <div class="sd--layout__content">
        <slot name="content"/>
      </div>
      <transition name="slide">
        <div class="sd--layout__sidebar" v-if="sidebar">
          <div class="sd--layout__block">
            <slot name="sidebar"/>
          </div>
        </div>
      </transition>
    </div>
    <slot name="footer"/>
  </main>
</template>

<script>
export default {
  name: 'TheLayout',
  props: {
    sidebar: Boolean
  }
}
</script>

<style lang="scss">
@import './scss/breakpoints';

.sd--layout {
  min-height: 100%;
  min-width: 100%;
  position: relative;
  &__wrapper {
    display:flex;
    width:100%;
  }
  &__content {
    width: 100%;
    height: 100%;
    flex-grow: 2;
    order:1;
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
    transition: all .3s 0s ease-in-out;
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
