<template>
  <div class="sd--card__footer">
      <div class="sd--card__footer--left">
        <slot name="left" />
      </div>
      <div class="sd--card__footer--right">
        <slot name="right" />
      </div>
  </div>
</template>

<script>
import SdButton from '@/layout/SdButton'
export default {
  name: 'SdCardFooter',
  components: {SdButton}
}
</script>

<style lang="scss" scoped>
@import '../scss/spacing';
@import '../scss/functions';
.sd--card__footer{
  padding: spacing(offset);
  display:flex;
  justify-content: space-between;
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
