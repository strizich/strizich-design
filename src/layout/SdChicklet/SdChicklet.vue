<template>
  <span :class="[componentClasses, modifiers]">
    {{content}}
    <slot v-if="!content"/>
  </span>
</template>

<script>
export default {
  props: {
    baseClass: {
      type: String,
      default: 'sd--chicklet'
    },
    theme: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    },
    pill: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    uppercase: Boolean,
    content: String
  },
  computed: {
    modifiers: function () {
      return {
        'is--pill': this.pill,
        'is--uppercase': this.uppercase
      }
    },
    componentClasses: function () {
      const baseClass = this.baseClass
      const sizeClass = `is--${this.size}`
      const themeClass = `${this.baseClass}__${this.theme}`
      return [
        baseClass,
        sizeClass,
        themeClass
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sd--chicklet {
  padding: 4px;
  letter-spacing: .2px;
  border-radius: 3px;
  vertical-align: middle;
  display:inline-block;
  margin-right: 4px;
  align-self: center;
  @each $state, $color in $sd-color-global {
    $default: nth($color, 1);
    $highlight: nth($color, 2);
    $accent: nth($color, 3);
    $contrast: sd-pick-contrast($highlight);
    &__#{$state} {
      background-color: $accent;
      color: sd-color($contrast, text);
    }
    &:only-child, &:last-child{
      margin-right: 0px;
    }
  }
  &.is {
    &--shadow{
      @include sd--elevation(6);
    }
    &--pill {
      border-radius: 30px;
      padding: 4px 8px;
    }
    &--uppercase {
      text-transform: uppercase;
    }
    &--sm {
      font-size: rem(11);
      line-height: rem(11);
      padding: 2px 4px;
    }
    &--md {
      font-size: rem(14);
      line-height: rem(14);
      padding:4px;
    }
    &--lg {
      font-size: rem(16);
      line-height: rem(16);
      padding: 4px 8px;
    }
  }
}
</style>
