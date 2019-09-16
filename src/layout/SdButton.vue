<template>
  <button :class="['sd--button', getTheme, modList, getSize]" @click="onClick">
    <span class="sd--button__content">
      <slot/>
    </span>
    </button>
</template>

<script>
import sdUuid from '@/utilities/SdUuid'

export default {
  name: 'SdButton',
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
    }
  },
  computed: {
    modList: function () {
      return {
        'is--disabled': this.disabled,
        'is--rounded': this.rounded,
        'is--flat': this.flat,
        'is--outline': this.outline
      }
    },
    getSize: function () {
      return `is--${this.size}`
    },
    getTheme: function () {
      return `sd--button__${this.theme}`
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click')
      console.log('clicked')
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
  padding: spacing(offset);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  &__content{
    position:relative;
    z-index: 10;
  }
  @each $state, $color in $sd-color-global {
    $base: nth($color, 1);
    $lighter: nth($color, 2);
    $darker: nth($color, 3);
    $contrast: sd-pick-contrast($base);
    $contrast-lighter: sd-pick-contrast($lighter);
    $contrast-darker: sd-pick-contrast($darker);
    &__#{$state} {
      @include sd--elevation(2);
      color: sd-color($contrast, text);
      background-color: $base;
      transition: all .2s ease-out;
      &:hover {
        @include sd--elevation(4);
        color: sd-color($contrast-lighter, text);
        background-color: $lighter;
        transition: all .2s ease-out;
      }
      &:active {
        color: sd-color($contrast-darker, text);
        background-color: $darker;
      }
      &:focus {
        box-shadow: 0 0 0 5px transparentize($lighter, .8);
      }
      &.is--outline {
        @include flatten($base, $lighter, $darker, $contrast);
        border: 1px solid $base;
      }
      &.is--flat {
        @include flatten($base, $lighter, $darker, $contrast);
      }
    }
  }
}

.is{
  &--sm{
    font-size: rem(14);
    line-height: rem(16);
    padding: spacing(offset, sm)

  }
  &--md{
    font-size: rem(16);
    line-height: rem(20);
  }
  &--lg{
    font-size: rem(18);
    line-height: rem(24);
    padding: spacing(offset, lg);
  }
  &--rounded{
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
  &--flat{
    background: none;
    border: none;
    outline: none;
  }
  &--outline{
    background:none;
  }
}
</style>
