<template>
  <label :id="id" :for="name" :class="['sd--radio', radioClasses]" @click="toggleCheck">
    <input
      class="sd--radio__input"
      v-bind="{ name, disabled, required, value, checked: isSelected }"
      @focus="onFocus"
      @blur="onBlur"
      type="radio"/>
    <span class="sd--radio__content">
      <span><slot/></span>
    </span>
  </label>
</template>

<script>
import SdUuid from '@/utilities/SdUuid'
import SdFocused from '@/core/mixins/SdFocused'
export default {
  name: 'SdRadio',
  mixins: [SdFocused],
  model: {
    prop: 'model',
    event: 'change'
  },
  data () {
    return {
      hasFocus: false
    }
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
        'is--disabled': this.disabled,
        'is--focused': this.hasFocus
      }
    }
  },
  methods: {
    toggleCheck: function () {
      this.hasFocus = false
      if (!this.disabled) {
        this.$emit('change', this.value)
      }
    },
    onFocus: function () {
      if (this.isSelected) {
        this.hasFocus = true
      }
    },
    onBlur: function () {
      if (this.isSelected) {
        this.hasFocus = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
%radio {
  width: 0;
  height:0;
  &:before{
    content:'';
    box-shadow: inset 0 0 0 2px v(--divider);
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    left: 4px;
    top: 50%;
    margin-top: -10px;
    background-color: transparent;
    border-radius: 50%;
    transition: box-shadow .23s ease-in-out, background-color .23s ease-in-out;
    background-color: v(--background);
    z-index: 15;
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
      box-shadow: inset 0 0 0 2px v(--primary-highlight),
                  inset 0 0 0 10px v(--background);
    }
    &:checked{
      &:before{
        box-shadow: inset 0 0 0 2px v(--primary-accent),
                    inset 0 0 0 4px v(--background);
      }
    }
  }
  &:hover{
    outline:none;
    &:checked{
      &:before{
        box-shadow: inset 0 0 0 2px v(--primary-accent),
                    inset 0 0 0 4px v(--background);
      }
    }
    &:before{
      box-shadow: inset 0 0 0 2px v(--primary-accent),
                  inset 0 0 0 10px v(--background);
    }
  }
}
  .sd--radio{
    position: relative;
    z-index: 10;
    padding: 8px 16px 8px 32px;
    -webkit-user-select: none;
    &.is--focused{
      color: var(--primary-highlight);
    }
    &:hover{
      transition: background-color .15s ease-in-out;
      background-color: var(--background-highlight);
      cursor:pointer;
    }
    &__input{
      -webkit-appearance: none;
      appearance: none;
      border: none;
      @extend %radio;
      position: absolute;
      top: 50%;
      left: 0;
    }
    &__content{
      font-size: rem(16);
      position: relative;
      z-index: 10;
      width: 100%;
    }
  }

</style>
