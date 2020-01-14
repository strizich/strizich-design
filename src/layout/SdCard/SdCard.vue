<template>
  <div :class="['sd--card', cardElevation]">
    <slot/>
  </div>
</template>

<script>
import '@/layout/SdElevation'

export default {
  props: {
    title: String,
    baseClass: {
      type: String,
      default: 'sd--card'
    },
    elevation: {
      type: [Number, String],
      default: 4
    }
  },
  computed: {
    cardElevation: function () {
      return `sd--elevation--${this.elevation}`
    }
  }
}
</script>

<style lang="scss">
@import '../scss/functions';
.sd--card{
  background-color: v(--background-variant);
  border: 1px solid v(--highlight);
  border-radius: 3px;
  display:flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  &:hover{
    z-index: 10;
  }
  &--inset{
    padding: 0 16px;
  }
  &--offset{
    padding: 0 0 0 16px;
  }
}
</style>
