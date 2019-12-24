<template>
  <section class="mast">
    <p class="sd--text__lead sd--text__lead--light">Leading Sentence</p>
    <h1 class="sd--text__headline sd--text__headline--light">Headline</h1>
    <icon-mouse class="mouse-graphic"/>
    <icon-mouse-alt/>
    <icon-mouse-click left-click/>
    <icon-mouse-click right-click/>
    <icon-mouse-click left-shoulder/>
    <icon-mouse-click right-shoulder/>
  </section>
</template>

<script>
import IconMouse from '@/components/IconMouse'
import IconMouseAlt from '@/components/IconMouseAlt'
import IconMouseClick from '@/components/IconMouseClick'
export default {
  name: 'HomeMast',
  components: {
    IconMouse,
    IconMouseAlt,
    IconMouseClick
  }
}
</script>

<style lang="scss" scoped>
  @import '../layout/scss/colors';
  @import '../layout/scss/functions';
  @import '../layout/scss/mixins';
  $header-height: 50px;
  $mast-height: calc(100vh - 140px);

  .mast{
    margin: -16px -16px 32px;
    padding: 16px;
    min-height: $mast-height;
    background: sd-gradient(v(--secondary-darker), v(--secondary-lighter));
    position: relative;
    color: v(--text-light)
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
