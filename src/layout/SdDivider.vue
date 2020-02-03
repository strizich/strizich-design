<template>
  <hr :class="['sd--divider', classes]"/>
</template>

<script>
export default {
  name: 'SdDivider',
  props: {
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    classes: function () {
      return `is--${this.size}`
    }
  }
}
</script>

<style lang="scss">
.sd--divider{
  position: relative;
  border: none;
  max-width:100%;
  height: 4px;
  &:after{
    content:'';
    height: 1px;
    background-color: v(--background-highlight);
    position: absolute;
    left: 0;
    right:0;
    top: 50%;
  }
  &.is {
    &--sm{
      height: 8px;
    }
    &--md{
      height:16px;
    }
    &--lg{
      height: 64px;
    }
  }
}
</style>
