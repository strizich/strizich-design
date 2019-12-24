<template>
  <div class="article__mast">
    <div class="article__mast--left">
      <sd-card-media ratio="4x3"/>
    </div>
    <div class="article__mast--right">
      <h1 class="sd--text__headline"></h1>
    </div>
  </div>
</template>

<script>
  import SdCardMedia from '@/layout/SdCard/SdCardMedia'
  export default {
    components: { SdCardMedia }
  }
</script>

<style lang="scss" scoped>

</style>