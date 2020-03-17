<template>
  <div :class="[breakpointClasses, tightSpacing]" :style="{order}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdCol',
  props: {
    tight: Boolean,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
    order: Number
  },
  computed: {
    tightSpacing: function () {
      return `sd--spacing--tight`
    },
    breakpointClasses: function () {
      let classes = []
      const breakpointXs = `sd--col--xs--${this.xs}`
      const breakpointSm = `sd--col--sm--${this.sm}`
      const breakpointMd = `sd--col--md--${this.md}`
      const breakpointLg = `sd--col--lg--${this.lg}`
      const breakpointXl = `sd--col--xl--${this.xl}`

      if (this.xs) {
        classes.push(breakpointXs)
      }
      if (this.sm) {
        classes.push(breakpointSm)
      }
      if (this.md) {
        classes.push(breakpointMd)
      }
      if (this.lg) {
        classes.push(breakpointLg)
      }
      if (this.xl) {
        classes.push(breakpointXl)
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
  @if $enable-grid-classes {
    @include make-grid-columns();
  }
</style>
