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
          <slot name="sidebar"/>
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
