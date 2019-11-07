<template>
  <div :class="['sd--card__footer', spacingClasses]" :style="alignmentStyle">
    <slot/>
  </div>
</template>

<script>
import SdAlignmentMixin from '@/layout/SdCard/SdAlignmentMixin.js'
import SdSpacingMixin from '@/layout/SdCard/SdSpacingMixin.js'
export default {
  name: 'SdCardFooter',
  mixins: [SdAlignmentMixin, SdSpacingMixin]
}
</script>

<style lang="scss" scoped>
@import '../scss/spacing';
@import '../scss/functions';
.sd--card__footer{
  padding: spacing(offset);
  display:flex;
  border-radius: 0 0 3px 3px;
  position: relative;
  align-items: center;
   &:after{
     position: absolute;
     left: spacing(inset);
     content: '';
     height: 1px;
     top:0;
     right:0;
     bottom: auto;
     background-color: v(--divider);
   }
}
</style>
