<template>
  <span :class="['sd--chicklet', setTheme, setSize, setMods]">
    <slot/>
  </span>
</template>

<script>
export default {
  props: {
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
    setSize: function () {
      return `is--${this.size}`
    },
    setTheme: function () {
      return `sd--chicklet__${this.theme}`
    },
    setMods: function () {
      return {
        'is--pill': this.pill
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/functions';
@import './scss/colors';
@import './scss/_get-contrast';

.sd--chicklet {
  padding: 4px;
  line-height: rem(16);
  border-radius: 3px;
  vertical-align: middle;
  display:inline-block;
  margin-right: 4px;
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
