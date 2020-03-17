<template>
  <div :class="['sd--container', classes]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdContainer',
  props: {
    break: String,
    full: Boolean
  },
  computed: {
    classes: function () {
      if (this.full) {
        return `sd--container--full`
      } else if (this.break) {
        return `sd--container--${this.break}`
      } else {
        return `sd--container`
      }
    }
  }
}
</script>

<style lang="scss">
.sd--container {
  @each $size, $value in $container-max-widths{
    @include media-breakpoint-down($size){
      max-width: $value;
      width: 100%;
      margin: 0 auto;
      padding: 0 32px;
    }
    &--#{$size}{
      max-width: $value;
      margin: 0 auto;
    }
  }
  &--full {
    max-width: 100%;
  }
}
</style>
