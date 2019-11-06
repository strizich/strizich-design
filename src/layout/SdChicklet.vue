<template>
  <span :class="[...componentClasses, modifiers]">
    <slot/>
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
    }
  },
  computed: {
    modifiers: function () {
      return {
        'is--pill': this.pill
      }
    },
    componentClasses: function () {
      const sizeClass = `is--${this.size}`
      const themeClass = `${this.baseClass}__${this.theme}`
      return [
        this.baseClass,
        sizeClass,
        themeClass
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/functions';
@import './scss/colors';
@import './scss/get-contrast';
@import 'SdElevation/elevation';

.sd--chicklet {
  padding: 4px;
  line-height: rem(16);
  border-radius: 3px;
  vertical-align: middle;
  display:inline-block;
  margin-right: 4px;
  align-self: center;
  text-shadow: 0 2px 2px -1px #202020;
  @each $state, $color in $sd-color-global {
    $default: nth($color, 1);
    $variant: nth($color, 2);
    $contrast: sd-pick-contrast($default);
    &__#{$state} {
      background-color: $default;
      color: sd-color($contrast, text);
    }
  }
  &.is {
    &--pill {
      border-radius: 30px;
      padding: 4px 8px;
    }
    &--sm {
      font-size: 11px;
    }
    &--md {
      font-size: 14px;
    }
    &--lg {
      font-size: 16px;
    }
  }
}
</style>
