<template>
  <button :class="['sd--button', themeClass, modifiers]" @click="onClick">
    <div :class="['sd--button__content', sizeClass]">
      <slot/>
    </div>
    </button>
</template>

<script>
import SdFocused from '@/core/mixins/SdFocused.js'
import sdUuid from '@/utilities/SdUuid.js'

export default {
  name: 'SdButton',
  mixins: [SdFocused],
  props: {
    id: {
      type: String,
      default: () => 'sd--button--' + sdUuid()
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    theme: {
      type: String,
      default: 'primary'
    },
    iconOnly: Boolean
  },
  computed: {
    modifiers: function () {
      return {
        'is--focused': this.sdHasFocus,
        'is--disabled': this.disabled,
        'is--rounded': this.rounded,
        'is--pill': this.pill,
        'is--flat': this.flat,
        'is--outline': this.outline,
        'is--icon-only': this.iconOnly
      }
    },
    sizeClass: function () {
      return `is--${this.size}`
    },
    themeClass: function () {
      return `sd--button__${this.theme}`
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
@import 'scss/colors';
@import 'scss/spacing';
@import 'scss/functions';
@import 'scss/get-contrast';
@import 'scss/mixins';
@import 'SdElevation/mixins';

.sd--button {
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  display:inline-flex;
  align-items: center;
  padding:0;
  &__content{
    position: relative;
    z-index: 10;
    flex-grow: 2;
    transition: padding .23s, font-size .23s;
    &.is{
      &--sm{
        font-size: rem(14);
        line-height: rem(14);
        padding: spacing(inset, sm);
        min-width: 30px;
      }
      &--md{
        font-size: rem(16);
        line-height: rem(16);
        padding: spacing(offset);
        min-width: 43px;
      }
      &--lg{
        font-size: rem(18);
        line-height: rem(18);
        padding: spacing(offset, lg);
      }
    }
  }
  &__icon{
    &--left{
       margin: -8px 8px -8px -8px;
    }
    &--right{
       margin: -8px -8px -8px 8px;
    }
  }
  @each $state, $color in $sd-color-global {
    $base: nth($color, 1);
    $lighter: nth($color, 2);
    $darker: nth($color, 3);
    $contrast: sd-pick-contrast($base);
    $contrast-highlight: sd-pick-contrast($lighter);
    $contrast-accent: sd-pick-contrast($darker);
    &__#{$state} {
      @include sd--elevation(2);
      color: sd-color($contrast, text);
      background-color: $base;
      transition: all .2s ease-out;
      &:hover {
        @include sd--elevation(4);
        color: sd-color($contrast-accent, text);
        background-color: $darker;
        transition: all .2s ease-out;
      }
      &:active {
        color: sd-color($contrast-highlight, text);
        background-color: $lighter;
        @supports(background-image: linear-gradient(0deg, #fff, #fff)) {
          background-image: sd-gradient($darker, transparent);
          color: sd-color($contrast-accent, text);
        }
        @include sd--elevation(6);
        transition: all .2s ease-out;
      }
      &.is--icon-only{
        padding: 8px;
      }
      &.is--focused {
        box-shadow: 0 0 0 5px $lighter;
        transition: all .2s ease-out;
      }
      &.is--outline {
        border: 1px solid $base;
        background:none;
        @include flatten($base, $lighter, $darker, $contrast);
      }
      &.is--flat {
        background: none;
        border: none;
        outline: none;
        @include flatten($base, $lighter, $darker, $contrast);
      }
      &.is--rounded{
        border-radius: 30px;
      }
      &.is--pill{
        border-radius: 30px;
        padding-left: 20px;
        padding-right: 20px;
        .sd--button__content {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
  }
}
</style>
