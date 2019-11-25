<template>
  <main class="sd--layout">
    <portal-target name="body" multiple />
    <div class="sd--layout__wrapper">
      <div class="sd--layout__content">
        <slot name="header"/>
        <slot name="content"/>
        <slot name="footer"/>
      </div>
      <transition name="slide">
        <div class="sd--layout__sidebar" v-if="sidebar">
          <div class="sd--layout__block">
            <slot name="sidebar"/>
          </div>
        </div>
      </transition>
    </div>
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
.sd--layout{
  &__wrapper{
    display:flex;
    width:100%;
  }
  &__content{
    width: 100%;
    flex-grow: 2;
    order:1;
  }
  &__sidebar{
    // Needs mobile support.
    max-width:300px;
    width:100%;
    max-height:100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position:sticky;
    top:0;
    left:0;
    flex-grow: 1;
    background:var(--background);
    border-right: 1px solid var(--background-variant);
    order: 0;
    transition: all .5s ease-in-out;
  }
  &__block{
    position:sticky;
    top:0;
    right:0;
  }
}

.slide-enter-active, .slide-leave-active {
  will-change: width;
  width:0;
  overflow-x: hidden;
  transition-delay: .3s;
}
</style>
