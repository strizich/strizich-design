<template>
  <div :class="classes" :style="{order}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdCol',
  data () {
    return {
      thingy: true
    }
  },
  props: {
    width: Number,
    break: String,
    order: Number
  },
  computed: {
    classes: function () {
      const width = this.width ? `--${this.width}` : ''
      const breakpoint = this.break ? `--${this.break}` : ''
      return 'sd--col' + breakpoint + width
    }
  }
}
</script>

<style lang="scss">
  @if $enable-grid-classes {
    @include make-grid-columns();
  }
</style>
