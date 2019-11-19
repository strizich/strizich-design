<template>
  <section class="mast">
    <div class="mast__content">
      <p class="text__caption">Leading Sentence</p>
      <h1 class="text__headline">Hello, This is a thing</h1>
      <p class="text">Here is some more text and a thing with a
        <span>
          <u>Tooltip</u>
          <sd-tooltip>Just the tip</sd-tooltip>
        </span>
      </p>
    </div>
    <div class="mouse-graphic">
      <icon-mouse/>
      <sd-tooltip direction="top" theme="secondary">Scroll Down</sd-tooltip>
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
    display:flex;
    flex-direction: column;
    justify-content: center;
    &__content{
      width: 100%;
      max-width: 920px;
      margin: 0 auto;
      padding: 0 16px 64px;
    }
  }

  .mouse-graphic {
    width: 32px;
    height: 42px;
    padding:16px 0;
    display:block;
    position: absolute;
    bottom:32px;
    left:50%;
    margin-left: -16px;
  }
</style>
