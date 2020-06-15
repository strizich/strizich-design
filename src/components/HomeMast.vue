<template>
  <section class="mast">
    <div class="mast__content">
      <p class="sd--text__caption">Leading Sentence</p>
      <h1 class="sd--text__headline">Hello, This is a thing</h1>
      <p class="sd--text">Here is some more text and a thing with a
        <span @click="tTipTwo = !tTipTwo">
          <u>Tooltip</u>
          <sd-tooltip :active="tTipTwo">
            "@click" needed for mobile
          </sd-tooltip>
        </span>
      </p>
    </div>
    <div class="mouse-graphic">
      <icon-mouse />
      <sd-tooltip direction="top" theme="secondary">Scroll Down</sd-tooltip>
    </div>
  </section>
</template>

<script>
import IconMouse from '@/components/IconMouse'
import SdTooltip from '@/layout/SdTooltip'

export default {
  name: 'HomeMast',
  data () {
    return {
      thingy: false,
      tTipTwo: false
    }
  },
  components: {
    IconMouse,
    SdTooltip
  }
}
</script>

<style lang="scss" scoped>
  $header-height: 50px;
  $mast-height: calc(100vh - 140px);

  .mast{
    margin: 0 0 32px 0;
    min-height: $mast-height;
    background: sd-gradient(v(--background), v(--background-accent));
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 env(safe-area-inset-left) 0 env(safe-area-inset-right);
    &__content{
      width: 100%;
      margin: 0 auto;
      padding: 0 32px 32px;
    }
  }

  .mouse-graphic {
    width: 32px;
    height: 42px;
    padding: 0;
    display: flex;
    position: absolute;
    bottom:0;
    top:auto;
    left: 50%;
    margin-bottom: 50px;
    margin-left: -16px;
    align-items: center;
    justify-content: center;
  }
</style>
