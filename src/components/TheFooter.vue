<template>
  <footer>
    <div class="footer__wrapper" :style="alignmentStyle">
      <div class="footer--left">
        <slot name="start"/>
      </div>
      <div class="footer--right">
        <slot name="end"/>
      </div>
    </div>
  </footer>
</template>

<script>
import SdAlignmentMixin from '@/core/mixins/SdAlignmentMixin'
export default {
  name: 'TheFooter',
  mixins: [SdAlignmentMixin]
}
</script>

<style lang="scss" scoped>
  @import '../layout/scss/mixins';
  .footer{
    &__wrapper{
      display:flex;
      @include iosSafeArea;
      background: var(--background-variant);
      padding: 16px;
    }
  }
</style>
