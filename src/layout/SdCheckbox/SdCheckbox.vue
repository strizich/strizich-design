
<template>
  <div class="sd--checkbox" :class="[checkClasses]">
    <div class="sd--checkbox__container" @click.stop="toggleCheck">
      <input
        :id="id"
        class="sd--checkbox__field"
        type="checkbox"
        v-bind="attributes"
        :checked="isSelected"
        :indeterminate="indeterminate"
      />
    </div>
    <label
      :for="id"
      class="sd--checkbox__label"
      v-if="$slots.default" @click.prevent="toggleCheck">
      <slot />
    </label>
  </div>
</template>

<script>
import SdCheckboxMixin from './SdCheckboxMixin'
import sdUuid from '@/utilities/SdUuid'
export default {
  name: 'SdCheckbox',
  mixins: [ SdCheckboxMixin ],
  props: {
    id: {
      type: String,
      default: () => 'sd-checkbox--' + sdUuid()
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #006699;
$default: #656C6E;

.sd--checkbox{
  display:flex;
  align-items: center;
  margin: 8px 8px 8px 0;
  &__container{
    width: 24px;
    height:24px;
    display:flex;
    align-items: center;
    position: relative;
    &:before{
      content:'';
      transition: all .23s ease-in-out, box-shadow .23s .13s ease-in-out;
      position: absolute;
      top:2px;
      left:2px;
      right:2px;
      bottom:2px;
      border: 2px solid $default;
      background-color:transparent;
      box-shadow: inset 0 0 0 26px #ffffff;
      transform: rotateZ(90deg);
    }
  }
  &.is--checked{
    .sd--checkbox__container{
      &:before{
        border:2px solid $primary;
        background-color: $primary;
        background-image: url(/img/icon-checked.svg);
        background-repeat: no-repeat;
        background-position:center center;
        transform: rotateZ(0deg);
        box-shadow: inset 0 0 0 0px #ffffff;
        background-size: contain;
      }
    }
  }
  &.is--disabled{
    .sd--checkbox{
      &__container{
        cursor: disabled;
        opacity: .65;
      }
      &__label{
        color: rgba(0,0,0,.5);
      }
    }
  }
  &.is--required{
    .sd--checkbox__label{
      position: relative;
      &:after {
        content: '*';
        display:inline-block;
        font-size: 18px;
        line-height: 24px;
        position:absolute;
        top:50%;
        margin-top: -12px;
        right:-16px;
      }
    }
  }
  &.is--indeterminate{
    .sd--checkbox__container{
      &:before{
        border:2px solid $primary;
        background-color: $default;
        background-image: url(/img/icon-indeterminate.svg);
        background-repeat: no-repeat;
        background-position:center center;
        transform: rotateZ(0deg);
        box-shadow: inset 0 0 0 0px #ffffff;
      }
    }
  }
  &__field{
    appearance: none;
    width:0;
    height:0;
    opacity: 0;
    padding:0;
    margin:0;
  }
  &__label{
    margin-left: 8px;
  }
}
</style>
