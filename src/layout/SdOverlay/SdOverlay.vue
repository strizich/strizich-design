<template>
  <sd-portal :attach-to-parent="attachToParent">
    <transition name="sd-overlay">
      <div :class="['sd--overlay', overlayClasses]" v-on="$listeners" v-if="active"></div>
    </transition>
  </sd-portal>
</template>

<script>
import SdPortal from '@/layout/SdPortal'
export default {
  props: {
    active: Boolean,
    attachToParent: Boolean,
    fixed: Boolean,
    blur: Boolean
  },
  computed: {
    overlayClasses: function () {
      return {
        'is--fixed': this.fixed,
        'is--blur': this.blur
      }
    }
  },
  components: {
    SdPortal
  }
}
</script>

<style lang="scss" scoped>
  .sd--overlay{
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 1000;
    background-color: rgba(0,0,0,.5);
    transition: .15s opacity ease-in-out;
    transition-property: opacity;
    will-change: opacity;
    body > &,
    &.is--fixed{
      position: fixed
    }
    &.is--blur{
      backdrop-filter: blur(16px);
    }
  }
  .sd-overlay-enter,
  .sd-overlay-leave-active {
    opacity: 0;
  }
</style>
