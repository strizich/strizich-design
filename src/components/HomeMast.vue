<template>
  <section class="mast">
    I am mast.
    <icon-mouse class="mouse-graphic"/>
  </section>
</template>

<script>
import IconMouse from '@/components/IconMouse'
export default {
  name: 'HomeMast',
  components: {
    IconMouse
  }
}
</script>

<style lang="scss" scoped>
  @import '../layout/scss/colors';
  @import '../layout/scss/functions';
  @import '../layout/scss/mixins';
  $header-height: 50px;
  $mast-height: calc(100vh - 50px);

  .mast{
    margin: -16px -16px 32px -16px;
    min-height: $mast-height;
    background: sd-gradient(v(--secondary-darker), v(--secondary-lighter));
    position: relative;
  }

  .mouse-graphic {
    width: 32px;
    height: 42px;
    display:block;
    position: absolute;
    bottom:16px;
    left:50%;
    margin-left: -16px;
  }
</style>
