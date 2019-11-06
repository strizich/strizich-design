<template>
  <label :class="['sd--radio', radioClasses]" @click="toggleCheck">
    <input class="sd--radio__input" v-bind="{ id, name, disabled, required, value, checked: isSelected }" type="radio"/>
    <span class="sd--radio__content">
      <slot/>
    </span>
  </label>
</template>

<script>
import SdUuid from '@/utilities/SdUuid.js'

export default {
  name: 'SdRadio',
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    model: [String, Number, Boolean, Object],
    value: {
      type: [String, Number, Boolean, Object],
      default: 'on'
    },
    id: {
      type: String,
      default: () => 'sd--radio--' + SdUuid()
    },
    name: [String, Number],
    required: Boolean,
    disabled: Boolean,
    theme: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    isSelected: function () {
      return this.model === this.value
    },

    radioClasses: function () {
      return {
        'is--required': this.required,
        'is--disabled': this.disabled
      }
    }
  },
  methods: {
    toggleCheck: function () {
      if (!this.disabled) {
        this.$emit('change', this.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/functions';

%radio {
  &:before{
    box-shadow: inset 0 0 0 1px v(--divider), inset 0 0 0 10px v(--background);
    content:'';
    width: 18px;
    height: 18px;
    display: inline-block;
    background-color: transparent;
    border-radius: 50%;
    transition: box-shadow .23s ease-in-out, background .23s ease-in-out;
    background-color: v(--background);
  }
  &:checked{
    &:before{
      box-shadow: inset 0 0 0 2px v(--primary),
                  inset 0 0 0 4px v(--background);
      background-color: v(--primary);
    }
  }
  &:focus{
    outline:none;
    &:before{
      box-shadow: inset 0 0 0 2px v(--primary-lighter),
                  inset 0 0 0 10px v(--background);
    }
    &:checked{
      &:before{
        box-shadow: inset 0 0 0 2px v(--primary-darker),
                    inset 0 0 0 4px v(--background);
      }
    }
  }
}
  .sd--radio{
    position: relative;
    display:inline-flex;
    margin-right: 8px;
    &__input{
      appearance: none;
      @extend %radio;
    }
    &__content{
      padding-left: 8px;
      font-size: rem(16);
      line-height: rem(16);
    }
  }
</style>
