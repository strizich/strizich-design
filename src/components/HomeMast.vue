<template>
  <section class="mast">
    I am mast.
    <div class="mouse-graphic">
    <icon-mouse/>
    <sd-tooltip direction="right">Scroll Down</sd-tooltip>
    </div>
  </section>
</template>

<script>
import IconMouse from '@/components/IconMouse'
import SdTooltip from '@/layout/SdTooltip'
export default {
  name: 'HomeMast',
  components: {
    IconMouse,
    SdTooltip
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
