<template>
  <footer class="footer">
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
    padding: 16px;
    background: var(--background-variant);
    position:absolute;
    bottom: 0;
    left: 0;
    right: 0;
    &__wrapper{
      display:flex;
      @include iosSafeArea;
    }
  }
</style>
