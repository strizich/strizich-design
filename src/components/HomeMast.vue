<template>
  <section class="mast">

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
    margin: -16px;
    min-height: $mast-height;
    @media (prefers-color-scheme: 'dark') {
      background: sd-gradient(#4A2F62, #241533);
    }
  }

</style>
