<template>
 <!-- Simplified version of the checkbox -->
  <label class="sd--checkbox" :class="classes" @click.prevent="toggleCheck">
      <input
        type="checkbox"
        :id="id"
        :class="['sd--checkbox__field', checkClasses]"
        :checked="isSelected"
        :indeterminate="indeterminate"
        v-bind="attributes"
      />
      <span class="sd--checkbox__label"><slot/></span>
  </label>
</template>

<script>
import SdCheckboxMixin from './SdCheckboxMixin'
import sdUuid from '@/utilities/SdUuid'

export default {
  mixins: [ SdCheckboxMixin ],
  props: {
    id: {
      type: String,
      default: () => 'sd-checkbox--' + sdUuid()
    }
  },
  computed: {
    classes: function () {
      return {
        'is--disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  %checkbox{
    &:before{
      content: '';
      width: 16px;
      height:16px;
      position: absolute;
      left:0;
      top: 50%;
      margin-top: -8px;
      background-color: var(--background);
      box-shadow: inset 0 0 0 30px var(--background-accent);
      display:block;
      transform: rotateZ(90deg);
      transition: box-shadow .4s ease-in,
                  transform .2s ease-in,
                  background-color .4s 0s ease-in-out,
                  border-color .2s ease-in-out;
      border: 2px solid var(--divider);
      border-radius: 2px;
    }
    &:focus-within, &:hover{
      &:before{
        border-color: var(--primary-darker);
      }
    }
  }
  %checked{
    &:before{
      box-shadow: inset 0 0 0 0 #fff;
      border-color: var(--primary);
      background: url(/img/icon-checked.svg) no-repeat center center;
      background-color: var(--primary);
      background-size: 12px;
      transform: rotateZ(0deg);
      transition: box-shadow .4s ease-out,
                  transform .2s ease-out,
                  background-color .4s 0s ease-in-out;
    }
  }
  %indeterminate{
    &:before{
      border:2px solid var(--divider);
      background: url(/img/icon-indeterminate.svg) var(--divider) no-repeat center center;
      transform: rotateZ(0deg);
      box-shadow: inset 0 0 0 0px var(--divider);
      background-size: 8px;
    }
  }
  %disabled{
    opacity: .65;
    cursor: not-allowed;
  }

  .sd--checkbox {
    position:relative;
    padding: 8px 0 8px 24px ;
    margin: 8px;
    &:hover{
      cursor: pointer;
    }
    &.is--disabled{
      @extend %disabled;
    }
    &__label{
      font-size: 16px;
      line-height: 1;
    }
    &__field {
       appearance: none;
       width: 0;
       height: 0;
       border: none;
       @extend %checkbox;

      &.is{
        &--checked{
         @extend %checked;
        }
        &--indeterminate{
          @extend %indeterminate;
        }
        &--disabled{
          @extend %disabled;
        }
      }
    }
  }
</style>
