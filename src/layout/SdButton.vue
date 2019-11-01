<template>
  <button :class="['sd--button', getTheme, modList, getSize]" @click="onClick">
    <sd-icon
    class="sd--button__icon sd--button__icon--left"
    :size="size"
    :name="iconLeft"
    v-if="iconLeft"
    />

    <span class="sd--button__content">
      <slot/>
    </span>

    <sd-icon
    class="sd--button__icon sd--button__icon--right"
    :name="iconRight"
    :size="size"
    v-if="iconRight"
    />
    </button>
</template>

<script>
import SdFocused from '@/core/mixins/SdFocused.js'
import SdIcon from '@/layout/SdIcon'
import sdUuid from '@/utilities/SdUuid'

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
    iconLeft: String,
    iconRight: String
  },
  computed: {
    modList: function () {
      return {
        'is--disabled': this.disabled,
        'is--rounded': this.rounded,
        'is--flat': this.flat,
        'is--outline': this.outline,
        'is--focused': this.sdHasFocus
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
  },
  components: { SdIcon }
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
  display:inline-flex;
  align-items: center;

  &__content{
    position:relative;
    z-index: 10;
    flex-grow: 2;
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
    $contrast-lighter: sd-pick-contrast($lighter);
    $contrast-darker: sd-pick-contrast($darker);
    &__#{$state} {
      @include sd--elevation(2);
      color: sd-color($contrast, text);
      background-color: $base;
      transition: all .2s ease-out;
      &:hover {
        @include sd--elevation(4);
        color: sd-color($contrast-darker, text);
        background-color: $darker;
        transition: all .2s ease-out;
      }
      &:active {
        color: sd-color($contrast-lighter, text);
        background-color: $lighter;
        transition: all .2s ease-out;
      }
      &:focus {
        box-shadow: 0 0 0 5px transparentize($lighter, .8);
        transition: all .2s ease-out;
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

&.is{
  &--sm{
    font-size: rem(14);
    line-height: rem(14);
    padding: spacing(offset, sm);
  }
  &--md{
    font-size: rem(16);
    line-height: rem(16);
  }
  &--lg{
    font-size: rem(18);
    line-height: rem(18);
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
}
</style>
