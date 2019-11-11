<template>
  <section class="mast">
    I am mast.
    <span class="mouse-graphic"/>
  </section>
</template>

<script>
export default {
  name: 'HomeMast'
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
    background: sd-gradient(v(--secondary), v(--primary));
    position: relative;
  }
  .mouse-graphic {
    width: 25px;
    height: 39px;
    display:block;
    background: url('/img/mouse-graphic.svg') no-repeat;
    position: absolute;
    bottom:16px;
    left:50%;
    margin-left: -12.5px;
    margin-top: -19.5px;
  }

</style>
